// Script to populate Supabase albums table with all 580 seed albums
// Run this with: node populate-albums.js

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Import seed albums (you'll need to adjust the path)
const SEED_ALBUMS = require('./lib/musicbrainz/seed-albums.ts').SEED_ALBUMS;

const MUSICBRAINZ_API = 'https://musicbrainz.org/ws/2';
const COVERART_API = 'https://coverartarchive.org';

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getCoverArt(mbid) {
  // Try release-group first
  try {
    const rgResponse = await fetch(`${COVERART_API}/release-group/${mbid}`);
    if (rgResponse.ok) {
      const data = await rgResponse.json();
      const frontCover = data.images?.find(img => img.front === true || img.types?.includes('Front'));
      const coverImage = frontCover || data.images?.[0];
      return coverImage?.thumbnails?.large || coverImage?.image || null;
    }
  } catch (e) {
    console.log(`  Release-group cover not found, trying releases...`);
  }

  // Try releases
  try {
    await delay(1100);
    const releasesResponse = await fetch(
      `${MUSICBRAINZ_API}/release?release-group=${mbid}&fmt=json&limit=1`,
      { headers: { 'User-Agent': 'CoverUpGame/1.0' } }
    );
    
    if (!releasesResponse.ok) return null;
    
    const releasesData = await releasesResponse.json();
    const firstRelease = releasesData.releases?.[0];
    if (!firstRelease) return null;

    const releaseResponse = await fetch(`${COVERART_API}/release/${firstRelease.id}`);
    if (!releaseResponse.ok) return null;

    const releaseData = await releaseResponse.json();
    const frontCover = releaseData.images?.find(img => img.front === true || img.types?.includes('Front'));
    const coverImage = frontCover || releaseData.images?.[0];
    return coverImage?.thumbnails?.large || coverImage?.image || null;
  } catch (e) {
    return null;
  }
}

async function searchMusicBrainz(artist, title) {
  const query = `artist:"${artist}" AND release:"${title}"`;
  const url = `${MUSICBRAINZ_API}/release-group?query=${encodeURIComponent(query)}&fmt=json&limit=1`;
  
  await delay(1100); // Rate limit
  
  const response = await fetch(url, {
    headers: { 'User-Agent': 'CoverUpGame/1.0' }
  });
  
  if (!response.ok) return null;
  
  const data = await response.json();
  return data['release-groups']?.[0]?.id || null;
}

async function processAlbum(album, genre) {
  console.log(`Processing: ${album.artist} - ${album.title}`);
  
  // Use provided MBID or search for it
  let mbid = album.mbid;
  if (!mbid) {
    mbid = await searchMusicBrainz(album.artist, album.title);
    if (!mbid) {
      console.log(`  ✗ Not found in MusicBrainz`);
      return null;
    }
  }
  
  console.log(`  MBID: ${mbid}`);
  
  // Get cover art
  const coverUrl = await getCoverArt(mbid);
  if (!coverUrl) {
    console.log(`  ✗ No cover art found`);
    return null;
  }
  
  console.log(`  ✓ Cover found`);
  
  return {
    source: 'musicbrainz',
    mbid: mbid,
    artist: album.artist,
    title: album.title,
    year: album.year,
    country: album.country,
    cover_url: coverUrl,
    genres: [genre] // Store as JSON array
  };
}

async function populateAlbums() {
  console.log('Starting album population...\n');
  
  const allGenres = Object.keys(SEED_ALBUMS);
  const totalAlbums = Object.values(SEED_ALBUMS).flat().length;
  
  console.log(`Total genres: ${allGenres.length}`);
  console.log(`Total albums to process: ${totalAlbums}\n`);
  console.log('This will take approximately 10-15 minutes due to API rate limiting.\n');
  
  let processed = 0;
  let successful = 0;
  let failed = 0;
  
  for (const genre of allGenres) {
    const albums = SEED_ALBUMS[genre];
    console.log(`\n${'='.repeat(60)}`);
    console.log(`Genre: ${genre} (${albums.length} albums)`);
    console.log('='.repeat(60));
    
    for (const album of albums) {
      processed++;
      
      const albumData = await processAlbum(album, genre);
      
      if (albumData) {
        // Insert into Supabase
        const { error } = await supabase
          .from('albums')
          .upsert(albumData, { onConflict: 'mbid' });
        
        if (error) {
          console.log(`  ✗ Database error: ${error.message}`);
          failed++;
        } else {
          successful++;
        }
      } else {
        failed++;
      }
      
      console.log(`Progress: ${processed}/${totalAlbums} (${successful} successful, ${failed} failed)\n`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('POPULATION COMPLETE');
  console.log('='.repeat(60));
  console.log(`Total processed: ${processed}`);
  console.log(`Successful: ${successful}`);
  console.log(`Failed: ${failed}`);
  console.log(`Success rate: ${((successful/processed)*100).toFixed(1)}%`);
}

populateAlbums().catch(console.error);