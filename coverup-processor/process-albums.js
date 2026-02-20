/**
 * Cover Up - Album Data Processor (Node.js)
 * Run this locally to process CSV and fetch MusicBrainz data
 * 
 * Usage:
 *   1. npm install node-fetch csv-parser
 *   2. node process-albums.js
 */

const fs = require('fs');
const csv = require('csv-parser');
const fetch = require('node-fetch');

const CSV_FILE = './albums.csv';
const OUTPUT_SQL = './albums_insert.sql';
const OUTPUT_REPORT = './albums_report.json';
const MUSICBRAINZ_API = 'https://musicbrainz.org/ws/2';
const COVERART_API = 'https://coverartarchive.org';
const USER_AGENT = 'CoverUpGame/2.0 (contact@coverup.game)';
const RATE_LIMIT = 2000; // Increased to 2 seconds (was 1.1)
const MAX_RETRIES = 3;
const RETRY_DELAY = 5000; // 5 seconds between retries

class AlbumProcessor {
  constructor() {
    this.results = {
      total: 0,
      successful: 0,
      failed: 0,
      no_cover: 0,
      albums: []
    };
    this.lastRequest = Date.now();
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async rateLimit() {
    const now = Date.now();
    const elapsed = now - this.lastRequest;
    if (elapsed < RATE_LIMIT) {
      await this.sleep(RATE_LIMIT - elapsed);
    }
    this.lastRequest = Date.now();
  }

  async searchMusicBrainz(artist, album, year) {
    // Retry wrapper
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      await this.rateLimit();

      try {
        // Try 1: Search as album (release-group)
        let query = `artist:"${artist}" AND release:"${album}"`;
        if (year) {
          query += ` AND date:${year}`;
        }

        let url = `${MUSICBRAINZ_API}/release-group?query=${encodeURIComponent(query)}&fmt=json&limit=1`;

        let response = await fetch(url, {
          headers: { 'User-Agent': USER_AGENT },
          timeout: 15000 // 15 second timeout
        });

        if (response.ok) {
          const data = await response.json();
          const releases = data['release-groups'] || [];

          if (releases.length > 0) {
            const release = releases[0];
            const firstDate = release['first-release-date'] || '';

            return {
              mbid: release.id,
              title: release.title,
              artist: release['artist-credit']?.[0]?.name || artist,
              year: firstDate.substring(0, 4) || year,
              type: 'album'
            };
          }
        }

        // Try 2: Search as recording (song) and get parent release
        console.log(`  → Trying as recording/song...`);
        await this.sleep(2000); // Extra delay between searches

        query = `artist:"${artist}" AND recording:"${album}"`;
        if (year) {
          query += ` AND date:${year}`;
        }

        url = `${MUSICBRAINZ_API}/recording?query=${encodeURIComponent(query)}&fmt=json&limit=1&inc=releases`;

        response = await fetch(url, {
          headers: { 'User-Agent': USER_AGENT },
          timeout: 15000
        });

        if (!response.ok) {
          if (attempt < MAX_RETRIES) {
            console.log(`  → Attempt ${attempt} failed, retrying...`);
            await this.sleep(RETRY_DELAY);
            continue;
          }
          return null;
        }

        const recData = await response.json();
        const recordings = recData.recordings || [];

        if (recordings.length === 0) {
          return null;
        }

        const recording = recordings[0];
        const releases = recording.releases || [];

        if (releases.length === 0) {
          return null;
        }

        // Get the first release and fetch its release-group
        const firstRelease = releases[0];
        
        await this.sleep(2000); // Extra delay
        const releaseUrl = `${MUSICBRAINZ_API}/release/${firstRelease.id}?inc=release-groups&fmt=json`;
        
        const releaseResp = await fetch(releaseUrl, {
          headers: { 'User-Agent': USER_AGENT },
          timeout: 15000
        });

        if (!releaseResp.ok) {
          if (attempt < MAX_RETRIES) {
            console.log(`  → Attempt ${attempt} failed, retrying...`);
            await this.sleep(RETRY_DELAY);
            continue;
          }
          return null;
        }

        const releaseData = await releaseResp.json();
        const releaseGroup = releaseData['release-group'];

        if (!releaseGroup) {
          return null;
        }

        console.log(`  → Found as song on album: ${releaseGroup.title}`);

        return {
          mbid: releaseGroup.id,
          title: releaseGroup.title,
          artist: recording['artist-credit']?.[0]?.name || artist,
          year: releaseGroup['first-release-date']?.substring(0, 4) || year,
          type: 'recording',
          originalSong: album
        };

      } catch (error) {
        if (attempt < MAX_RETRIES) {
          console.log(`  ✗ Error (attempt ${attempt}/${MAX_RETRIES}): ${error.message}`);
          console.log(`  → Waiting ${RETRY_DELAY/1000}s before retry...`);
          await this.sleep(RETRY_DELAY);
          continue;
        }
        console.log(`  ✗ MusicBrainz error after ${MAX_RETRIES} attempts: ${error.message}`);
        return null;
      }
    }
    
    return null;
  }

  async getCoverArt(mbid) {
    const url = `${COVERART_API}/release-group/${mbid}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        return null;
      }

      const data = await response.json();
      const images = data.images || [];

      if (images.length === 0) {
        return null;
      }

      // Find front cover
      const front = images.find(img => img.front === true);
      if (front) {
        return front.thumbnails?.large || front.image;
      }

      // Use first image
      return images[0].thumbnails?.large || images[0].image;
    } catch (error) {
      console.log(`  ✗ Cover art error: ${error.message}`);
      return null;
    }
  }

  async processAlbum(rowNum, artist, album, year, genre) {
    console.log(`\n[${rowNum}] ${artist} - ${album} (${year}) [${genre}]`);

    // Search MusicBrainz
    const mbData = await this.searchMusicBrainz(artist, album, year);
    if (!mbData) {
      console.log(`  ✗ Not found on MusicBrainz`);
      this.results.failed++;
      this.results.albums.push({
        csv_artist: artist,
        csv_album: album,
        csv_year: year,
        genre: genre,
        status: 'not_found',
        mbid: null,
        cover_url: null
      });
      return null;
    }

    console.log(`  ✓ Found MBID: ${mbData.mbid}`);

    // Get cover art
    const coverUrl = await this.getCoverArt(mbData.mbid);
    if (!coverUrl) {
      console.log(`  ✗ No cover art available`);
      this.results.no_cover++;
      this.results.albums.push({
        csv_artist: artist,
        csv_album: album,
        csv_year: year,
        genre: genre,
        status: 'no_cover',
        mbid: mbData.mbid,
        cover_url: null
      });
      return null;
    }

    console.log(`  ✓ Cover art found`);
    this.results.successful++;

    const result = {
      csv_artist: artist,
      csv_album: album,
      csv_year: year,
      mb_artist: mbData.artist,
      mb_album: mbData.title,
      mb_year: mbData.year,
      genre: genre,
      status: 'success',
      mbid: mbData.mbid,
      cover_url: coverUrl
    };

    this.results.albums.push(result);
    return result;
  }

  generateSQL(successfulAlbums) {
    const lines = [
      '-- Cover Up - Album Data Import',
      `-- Generated: ${new Date().toISOString()}`,
      '-- Source: master_list CSV + MusicBrainz',
      '',
      '-- Insert albums (using MusicBrainz data)',
      ''
    ];

    for (const album of successfulAlbums) {
      // Escape single quotes
      const artist = album.mb_artist.replace(/'/g, "''");
      const title = album.mb_album.replace(/'/g, "''");
      const genre = album.genre.replace(/'/g, "''");
      const coverUrl = album.cover_url.replace(/'/g, "''");
      const mbid = album.mbid;
      const year = album.mb_year || 'NULL';

      const sql = `INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '${mbid}', '${artist}', '${title}', ${year}, '["${genre}"]'::jsonb, '${coverUrl}');`;

      lines.push(sql);
      lines.push('');
    }

    return lines.join('\n');
  }

  async run() {
    console.log('='.repeat(60));
    console.log('COVER UP - ALBUM DATA PROCESSOR');
    console.log('='.repeat(60));

    // Read CSV
    const rows = [];
    await new Promise((resolve, reject) => {
      fs.createReadStream(CSV_FILE)
        .pipe(csv())
        .on('data', (row) => {
          // Filter blank genres
          if (row.Genre && row.Genre.trim()) {
            rows.push(row);
          }
        })
        .on('end', resolve)
        .on('error', reject);
    });

    this.results.total = rows.length;
    console.log(`\nProcessing ${rows.length} albums...`);

    // Process each album
    const successful = [];
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const artist = row.Artist.trim();
      const album = row.Album.trim();
      const year = row.Year.trim();
      const genre = row.Genre.trim();

      const result = await this.processAlbum(i + 1, artist, album, year, genre);
      if (result) {
        successful.push(result);
      }

      // Progress indicator
      if ((i + 1) % 10 === 0) {
        console.log(`\n--- Progress: ${i + 1}/${rows.length} ---`);
        console.log(`Success: ${this.results.successful}, Failed: ${this.results.failed}, No Cover: ${this.results.no_cover}`);
      }
    }

    // Generate SQL
    console.log('\nGenerating SQL...');
    const sql = this.generateSQL(successful);
    fs.writeFileSync(OUTPUT_SQL, sql);

    // Save report
    fs.writeFileSync(OUTPUT_REPORT, JSON.stringify(this.results, null, 2));

    // Final summary
    console.log('\n' + '='.repeat(60));
    console.log('PROCESSING COMPLETE');
    console.log('='.repeat(60));
    console.log(`Total albums: ${this.results.total}`);
    console.log(`✓ Successful (with cover): ${this.results.successful}`);
    console.log(`✗ Not found on MusicBrainz: ${this.results.failed}`);
    console.log(`✗ Found but no cover art: ${this.results.no_cover}`);
    console.log(`\nSuccess rate: ${(this.results.successful / this.results.total * 100).toFixed(1)}%`);
    console.log(`\nSQL file: ${OUTPUT_SQL}`);
    console.log(`Report file: ${OUTPUT_REPORT}`);
    console.log('='.repeat(60));
  }
}

// Run the processor
const processor = new AlbumProcessor();
processor.run().catch(console.error);