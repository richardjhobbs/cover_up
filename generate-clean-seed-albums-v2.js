// Script to generate a completely clean seed-albums.ts from Supabase
// Run: node generate-clean-seed-albums-v2.js

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function generateCleanedSeedAlbums() {
  console.log('Fetching all albums from Supabase...');
  
  const { data: albums, error } = await supabase
    .from('albums')
    .select('artist, title, year, country, mbid, genres');
  
  if (error) {
    console.error('Error fetching albums:', error);
    process.exit(1);
  }
  
  console.log(`Found ${albums.length} albums in Supabase`);
  
  // Group by genre
  const byGenre = {};
  
  albums.forEach(album => {
    const genres = album.genres || [];
    genres.forEach(genre => {
      if (!byGenre[genre]) {
        byGenre[genre] = [];
      }
      byGenre[genre].push({
        artist: album.artist,
        title: album.title,
        year: album.year,
        country: album.country,
        mbid: album.mbid
      });
    });
  });
  
  // Generate TypeScript file content using DOUBLE QUOTES throughout
  let output = `// Curated seed albums - verified to exist in MusicBrainz with cover art
// Auto-generated from Supabase albums table
// Total: ${albums.length} albums across ${Object.keys(byGenre).length} genres

export type SeedAlbum = {
  artist: string;
  title: string;
  year: number;
  country: "UK" | "US";
  mbid?: string;
  visualWeight: number;
  trivia?: string;
};

export const SEED_ALBUMS: Record<string, SeedAlbum[]> = {
`;
  
  // Sort genres alphabetically
  const sortedGenres = Object.keys(byGenre).sort();
  
  for (const genre of sortedGenres) {
    const genreAlbums = byGenre[genre];
    output += `  // ${genre.toUpperCase()} (${genreAlbums.length} albums)\n`;
    output += `  "${genre}": [\n`;
    
    for (const album of genreAlbums) {
      // Escape double quotes in strings (if any exist)
      const artist = album.artist.replace(/"/g, '\\"');
      const title = album.title.replace(/"/g, '\\"');
      const mbidPart = album.mbid ? `, mbid: "${album.mbid}"` : '';
      
      output += `    { artist: "${artist}", title: "${title}", year: ${album.year}, country: "${album.country}"${mbidPart}, visualWeight: 8 },\n`;
    }
    
    output += `  ],\n\n`;
  }
  
  output += `};

// Get seed albums for a genre
export function getSeedAlbums(genre: string): SeedAlbum[] {
  return SEED_ALBUMS[genre] || [];
}

// Get seed albums filtered by region
export function getSeedAlbumsByRegion(genre: string, region: "UK" | "US"): SeedAlbum[] {
  const albums = getSeedAlbums(genre);
  return albums.filter(a => a.country === region);
}

// Select albums by difficulty (visual weight)
export function selectSeedAlbumsByDifficulty(albums: SeedAlbum[], count: number): SeedAlbum[] {
  if (albums.length <= count) return albums;
  
  // Sort by visual weight (lower = easier, higher = harder)
  const sorted = [...albums].sort((a, b) => a.visualWeight - b.visualWeight);
  
  // Distribute evenly across difficulty range
  const selected: SeedAlbum[] = [];
  const step = Math.floor(sorted.length / count);
  
  for (let i = 0; i < count; i++) {
    const index = Math.min(i * step, sorted.length - 1);
    selected.push(sorted[index]);
  }
  
  return selected;
}
`;
  
  // Write to file
  fs.writeFileSync('seed-albums-clean.ts', output);
  
  console.log('\n' + '='.repeat(60));
  console.log('CLEANED SEED FILE GENERATED');
  console.log('='.repeat(60));
  console.log(`Total albums: ${albums.length}`);
  console.log(`Total genres: ${Object.keys(byGenre).length}`);
  console.log(`Output file: seed-albums-clean.ts`);
  console.log('\nUsing DOUBLE QUOTES throughout - no escaping issues!');
  console.log('\nReplace /lib/musicbrainz/seed-albums.ts with seed-albums-clean.ts');
}

generateCleanedSeedAlbums().catch(console.error);