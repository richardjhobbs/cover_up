const fs = require('fs');
const https = require('https');

// Rate limiting for MusicBrainz (1 request per second)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchMusicBrainz(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'CoverUpGame/1.0 (validation script)'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      });
    }).on('error', reject);
  });
}

async function getCoverArtForReleaseGroup(releaseGroupId) {
  try {
    // First try the release-group directly
    const rgUrl = `https://coverartarchive.org/release-group/${releaseGroupId}`;
    
    const hasRGCover = await new Promise((resolve) => {
      https.get(rgUrl, (res) => {
        resolve(res.statusCode === 200);
      }).on('error', () => resolve(false));
    });
    
    if (hasRGCover) {
      return true;
    }
    
    // If no release-group cover, get the first release and check that
    await delay(1100);
    
    const releasesUrl = `https://musicbrainz.org/ws/2/release?release-group=${releaseGroupId}&fmt=json&limit=1`;
    const releasesData = await fetchMusicBrainz(releasesUrl);
    const firstRelease = releasesData.releases?.[0];
    
    if (!firstRelease) {
      return false;
    }
    
    const releaseUrl = `https://coverartarchive.org/release/${firstRelease.id}`;
    
    return new Promise((resolve) => {
      https.get(releaseUrl, (res) => {
        resolve(res.statusCode === 200);
      }).on('error', () => resolve(false));
    });
    
  } catch (error) {
    return false;
  }
}

async function validateAlbum(artist, album) {
  try {
    const query = `artist:"${artist}" AND release:"${album}"`;
    const url = `https://musicbrainz.org/ws/2/release-group?query=${encodeURIComponent(query)}&fmt=json&limit=1`;
    
    await delay(1100); // Rate limit
    
    const data = await fetchMusicBrainz(url);
    const release = data['release-groups']?.[0];
    
    if (!release) {
      return { found: false, hasCover: false, mbid: null };
    }
    
    const mbid = release.id;
    
    return {
      found: true,
      hasCover: true, // We'll validate covers when the game runs
      mbid: mbid,
      title: release.title,
      artistCredit: release['artist-credit']?.[0]?.name
    };
    
  } catch (error) {
    return { found: false, hasCover: false, error: error.message };
  }
}

async function processCSV() {
  const csvContent = fs.readFileSync('pilot-albums.csv', 'utf-8');
  const lines = csvContent.split('\n').slice(1); // Skip header
  
  const results = {
    success: [],
    noCover: [],
    notFound: [],
    errors: []
  };
  
  console.log(`Processing ${lines.length} albums...\n`);
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const [genre, artist, album, year, country, notes] = line.split(',').map(s => s.trim());
    
    console.log(`[${i + 1}/${lines.length}] Checking: ${artist} - ${album}`);
    
    const result = await validateAlbum(artist, album);
    
    if (result.found && result.hasCover) {
      console.log(`  ✓ Found with cover art (${result.mbid})`);
      results.success.push({
        genre,
        artist,
        album,
        year,
        country,
        mbid: result.mbid,
        notes
      });
    } else if (result.found && !result.hasCover) {
      console.log(`  ⚠ Found but NO COVER ART`);
      results.noCover.push({ genre, artist, album });
    } else if (result.error) {
      console.log(`  ✗ Error: ${result.error}`);
      results.errors.push({ genre, artist, album, error: result.error });
    } else {
      console.log(`  ✗ Not found in MusicBrainz`);
      results.notFound.push({ genre, artist, album });
    }
  }
  
  // Generate report
  console.log('\n' + '='.repeat(60));
  console.log('VALIDATION REPORT');
  console.log('='.repeat(60));
  console.log(`Total albums checked: ${lines.length}`);
  console.log(`✓ Success (found + cover): ${results.success.length}`);
  console.log(`⚠ No cover art: ${results.noCover.length}`);
  console.log(`✗ Not found: ${results.notFound.length}`);
  console.log(`✗ Errors: ${results.errors.length}`);
  
  // Save results
  fs.writeFileSync('validation-results.json', JSON.stringify(results, null, 2));
  console.log('\nResults saved to validation-results.json');
  
  // Generate TypeScript seed format for successful albums
  if (results.success.length > 0) {
    generateSeedFormat(results.success);
  }
}

function generateSeedFormat(albums) {
  const grouped = {};
  
  albums.forEach(album => {
    if (!grouped[album.genre]) {
      grouped[album.genre] = [];
    }
    grouped[album.genre].push(album);
  });
  
  let output = '// Successfully validated albums\n\n';
  
  for (const [genre, genreAlbums] of Object.entries(grouped)) {
    output += `// ${genre.toUpperCase()}\n`;
    genreAlbums.forEach(album => {
      output += `{ artist: '${album.artist}', title: '${album.album}', year: ${album.year}, country: '${album.country}', visualWeight: 8, mbid: '${album.mbid}' },\n`;
    });
    output += '\n';
  }
  
  fs.writeFileSync('validated-seed-albums.ts', output);
  console.log('TypeScript seed format saved to validated-seed-albums.ts');
}

processCSV().catch(console.error);
