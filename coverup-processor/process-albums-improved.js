const fs = require('fs');
const csv = require('csv-parser');

// Rate limiting
const RATE_LIMIT_MS = 1100;
let lastRequestTime = 0;

async function rateLimitedFetch(url, options = {}) {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  
  if (timeSinceLastRequest < RATE_LIMIT_MS) {
    await new Promise(resolve => 
      setTimeout(resolve, RATE_LIMIT_MS - timeSinceLastRequest)
    );
  }
  
  lastRequestTime = Date.now();
  return fetch(url, {
    ...options,
    headers: {
      'User-Agent': 'CoverUpGame/2.0 (contact@coverup.game)',
      ...options.headers
    }
  });
}

// Normalize text for better matching
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove special chars
    .replace(/\s+/g, ' ')     // Normalize whitespace
    .trim();
}

// Improved search with multiple strategies
async function searchMusicBrainz(artist, title) {
  const cleanArtist = artist.replace(/^The\s+/i, '');
  const cleanTitle = title
    .replace(/\s*\([^)]*\)/g, '')  // Remove (parentheses)
    .replace(/\s*\[[^\]]*\]/g, '') // Remove [brackets]
    .trim();
  
  const strategies = [
    // Strategy 1: Exact artist, exact title with quotes
    { query: `artist:"${artist}" AND release:"${title}"`, name: 'Exact match' },
    
    // Strategy 2: Exact artist without "The", exact title
    { query: `artist:"${cleanArtist}" AND release:"${title}"`, name: 'Without "The"' },
    
    // Strategy 3: Exact artist, clean title (no parens/brackets)
    { query: `artist:"${artist}" AND release:"${cleanTitle}"`, name: 'Clean title' },
    
    // Strategy 4: Clean artist, clean title
    { query: `artist:"${cleanArtist}" AND release:"${cleanTitle}"`, name: 'Both clean' },
    
    // Strategy 5: No quotes at all
    { query: `artist:${cleanArtist} AND release:${cleanTitle}`, name: 'No quotes' },
    
    // Strategy 6: Very loose - just artist and title words
    { query: `${cleanArtist} ${cleanTitle}`, name: 'Loose match' },
  ];
  
  for (const strategy of strategies) {
    const url = `https://musicbrainz.org/ws/2/release-group?query=${encodeURIComponent(strategy.query)}&fmt=json&limit=10`;
    
    try {
      const response = await rateLimitedFetch(url);
      
      if (!response.ok) {
        continue;
      }
      
      const data = await response.json();
      const releases = data['release-groups'] || [];
      
      if (releases.length === 0) continue;
      
      // Find best match using fuzzy matching
      const normalizedArtist = normalize(artist);
      const normalizedTitle = normalize(title);
      
      const bestMatch = releases.find(r => {
        const releaseArtist = r['artist-credit']?.[0]?.name || '';
        const releaseTitle = r.title || '';
        
        const artistMatch = normalize(releaseArtist) === normalizedArtist ||
                          normalize(releaseArtist) === normalize(cleanArtist) ||
                          normalizedArtist.includes(normalize(releaseArtist)) ||
                          normalize(releaseArtist).includes(normalizedArtist);
                          
        const titleMatch = normalize(releaseTitle) === normalizedTitle ||
                         normalize(releaseTitle) === normalize(cleanTitle) ||
                         normalizedTitle.includes(normalize(releaseTitle));
        
        return artistMatch && titleMatch;
      });
      
      if (bestMatch) {
        console.log(`  ✓ Found with "${strategy.name}": ${bestMatch.id}`);
        console.log(`    MB: ${bestMatch['artist-credit']?.[0]?.name} - ${bestMatch.title}`);
        return bestMatch;
      }
      
      // If no perfect match but we have results, try first result
      if (releases.length > 0 && strategy.name === 'Loose match') {
        const firstResult = releases[0];
        console.log(`  ~ Possible match (${strategy.name}): ${firstResult.id}`);
        console.log(`    MB: ${firstResult['artist-credit']?.[0]?.name} - ${firstResult.title}`);
        return firstResult;
      }
      
    } catch (error) {
      console.log(`  ⚠️  ${strategy.name} error:`, error.message);
    }
  }
  
  return null;
}

async function getCoverArt(mbid) {
  const url = `https://coverartarchive.org/release-group/${mbid}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    const frontCover = data.images?.find(img => 
      img.front === true || img.types?.includes('Front')
    );
    
    const coverImage = frontCover || data.images?.[0];
    return coverImage?.thumbnails?.large || coverImage?.image || null;
  } catch (error) {
    return null;
  }
}

async function processAlbums(inputCsv, outputSql, outputReport) {
  const albums = [];
  const results = {
    successful: [],
    notFound: [],
    noCover: []
  };
  
  // Read CSV
  await new Promise((resolve, reject) => {
    fs.createReadStream(inputCsv)
      .pipe(csv())
      .on('data', (row) => {
        albums.push({
          artist: row.artist?.trim(),
          title: row.title?.trim(),
          year: parseInt(row.year) || null,
          country: row.country?.trim() || null,
          genre: row.genre?.trim() || 'Rock',
          failureReason: row.failure_reason?.trim() || null,
          existingMbid: row.mbid?.trim() || null
        });
      })
      .on('end', resolve)
      .on('error', reject);
  });
  
  console.log(`\n📚 Processing ${albums.length} albums...\n`);
  
  const sqlStatements = [];
  
  for (let i = 0; i < albums.length; i++) {
    const album = albums[i];
    console.log(`\n[${i + 1}/${albums.length}] ${album.artist} - ${album.title}`);
    
    let mbid = album.existingMbid;
    let release = null;
    
    // If we have an MBID from previous run (no_cover case), use it
    if (mbid && album.failureReason === 'found_no_cover') {
      console.log(`  → Using existing MBID: ${mbid}`);
    } else {
      // Search MusicBrainz
      release = await searchMusicBrainz(album.artist, album.title);
      
      if (!release) {
        console.log(`  ✗ Still not found on MusicBrainz`);
        results.notFound.push(album);
        continue;
      }
      
      mbid = release.id;
    }
    
    // Get year if we have release data
    const firstRelease = release?.['first-release-date'];
    const year = firstRelease ? parseInt(firstRelease.split('-')[0]) : album.year;
    
    // Get cover art
    const coverUrl = await getCoverArt(mbid);
    
    if (!coverUrl) {
      console.log(`  ✗ Still no cover art available`);
      results.noCover.push({ ...album, mbid });
      continue;
    }
    
    console.log(`  ✓ Success! Cover found`);
    
    results.successful.push({
      ...album,
      mbid,
      year,
      coverUrl
    });
    
    // Generate SQL
    const sql = `INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '${mbid}', '${album.artist.replace(/'/g, "''")}', '${album.title.replace(/'/g, "''")}', ${year || 'NULL'}, '["${album.genre}"]'::jsonb, '${coverUrl}');`;
    
    sqlStatements.push(sql);
  }
  
  // Write SQL file
  const sqlContent = `-- Cover Up - Album Data Import (Retry Run)
-- Generated: ${new Date().toISOString()}
-- Source: ${inputCsv}

-- Insert albums (using MusicBrainz data)

${sqlStatements.join('\n\n')}
`;
  
  fs.writeFileSync(outputSql, sqlContent);
  
  // Write report
  fs.writeFileSync(outputReport, JSON.stringify(results, null, 2));
  
  // Create still-failed CSV for next retry
  if (results.notFound.length > 0 || results.noCover.length > 0) {
    const stillFailedCsv = inputCsv.replace('.csv', '_still_failed.csv');
    const failedRows = [
      'artist,title,year,genre,failure_reason,mbid',
      ...results.notFound.map(a => `"${a.artist}","${a.title}",${a.year || ''},"${a.genre}",not_found,`),
      ...results.noCover.map(a => `"${a.artist}","${a.title}",${a.year || ''},"${a.genre}",no_cover,${a.mbid || ''}`)
    ].join('\n');
    
    fs.writeFileSync(stillFailedCsv, failedRows);
  }
  
  // Print summary
  console.log(`\n============================================================`);
  console.log(`RETRY RUN COMPLETE`);
  console.log(`============================================================`);
  console.log(`Total albums: ${albums.length}`);
  console.log(`✓ Successful (with cover): ${results.successful.length}`);
  console.log(`✗ Still not found: ${results.notFound.length}`);
  console.log(`✗ Still no cover: ${results.noCover.length}`);
  console.log(`Success rate: ${((results.successful.length / albums.length) * 100).toFixed(1)}%`);
  console.log(`SQL file: ${outputSql}`);
  console.log(`Report file: ${outputReport}`);
  if (results.notFound.length > 0 || results.noCover.length > 0) {
    console.log(`Still failed CSV: ${inputCsv.replace('.csv', '_still_failed.csv')}`);
  }
  console.log(`============================================================\n`);
}

// Run
const inputCsv = process.argv[2] || './failed_albums.csv';
const outputSql = './albums_retry_insert.sql';
const outputReport = './albums_retry_report.json';

processAlbums(inputCsv, outputSql, outputReport)
  .catch(console.error);
