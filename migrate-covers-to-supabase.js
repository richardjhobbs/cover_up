// Script to download cover art and upload to Supabase Storage
// This eliminates the need for proxy and fixes CORS issues
// Run: node migrate-covers-to-supabase.js

const { createClient } = require('@supabase/supabase-js');
const https = require('https');
const http = require('http');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Helper to download image from URL
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, {
      headers: {
        'User-Agent': 'CoverUpGame/1.0 (contact@coverup.game)'
      }
    }, (response) => {
      // Handle ALL redirects (301, 302, 303, 307, 308)
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        console.log(`  → Following redirect to: ${response.headers.location}`);
        return downloadImage(response.headers.location).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
}

// Sleep helper for rate limiting
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function migrateCoverToSupabase(album) {
  try {
    console.log(`Processing: ${album.artist} - ${album.title}`);
    
    // Skip if already migrated (URL contains supabase)
    if (album.cover_url && album.cover_url.includes('supabase')) {
      console.log('  ✓ Already migrated');
      return { success: true, skipped: true };
    }
    
    if (!album.cover_url) {
      console.log('  ✗ No cover URL');
      return { success: false, reason: 'no_url' };
    }
    
    // Download image
    console.log(`  → Downloading from: ${album.cover_url}`);
    const imageBuffer = await downloadImage(album.cover_url);
    console.log(`  ✓ Downloaded (${imageBuffer.length} bytes)`);
    
    // Generate filename: mbid.jpg
    const filename = `${album.mbid}.jpg`;
    const filePath = `covers/${filename}`;
    
    // Upload to Supabase Storage
    console.log(`  → Uploading to Supabase: ${filePath}`);
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('album-covers')
      .upload(filePath, imageBuffer, {
        contentType: 'image/jpeg',
        upsert: true, // Overwrite if exists
      });
    
    if (uploadError) {
      console.log(`  ✗ Upload failed: ${uploadError.message}`);
      return { success: false, reason: 'upload_failed', error: uploadError };
    }
    
    console.log(`  ✓ Uploaded to storage`);
    
    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('album-covers')
      .getPublicUrl(filePath);
    
    console.log(`  → New URL: ${publicUrl}`);
    
    // Update database
    const { error: updateError } = await supabase
      .from('albums')
      .update({ cover_url: publicUrl })
      .eq('id', album.id);
    
    if (updateError) {
      console.log(`  ✗ DB update failed: ${updateError.message}`);
      return { success: false, reason: 'db_update_failed', error: updateError };
    }
    
    console.log(`  ✓ Database updated`);
    console.log(`  ✅ COMPLETE\n`);
    
    return { success: true };
    
  } catch (error) {
    console.log(`  ✗ Error: ${error.message}\n`);
    return { success: false, reason: 'exception', error };
  }
}

async function migrateAllCovers() {
  console.log('='.repeat(70));
  console.log('MIGRATING COVER ART TO SUPABASE STORAGE');
  console.log('='.repeat(70));
  console.log('');
  
  // First, create the storage bucket if it doesn't exist
  console.log('Checking storage bucket...');
  const { data: buckets } = await supabase.storage.listBuckets();
  const bucketExists = buckets?.some(b => b.name === 'album-covers');
  
  if (!bucketExists) {
    console.log('Creating album-covers bucket...');
    const { error: bucketError } = await supabase.storage.createBucket('album-covers', {
      public: true,
      fileSizeLimit: 5242880, // 5MB
    });
    
    if (bucketError) {
      console.error('Failed to create bucket:', bucketError);
      process.exit(1);
    }
    console.log('✓ Bucket created\n');
  } else {
    console.log('✓ Bucket exists\n');
  }
  
  // Fetch all albums
  console.log('Fetching all albums...');
  const { data: albums, error } = await supabase
    .from('albums')
    .select('id, mbid, artist, title, cover_url')
    .order('id');
  
  if (error) {
    console.error('Error fetching albums:', error);
    process.exit(1);
  }
  
  console.log(`Found ${albums.length} albums\n`);
  console.log('='.repeat(70));
  console.log('');
  
  const results = {
    total: albums.length,
    success: 0,
    failed: 0,
    skipped: 0,
  };
  
  // Process each album with rate limiting
  for (let i = 0; i < albums.length; i++) {
    const album = albums[i];
    console.log(`[${i + 1}/${albums.length}]`);
    
    const result = await migrateCoverToSupabase(album);
    
    if (result.success) {
      if (result.skipped) {
        results.skipped++;
      } else {
        results.success++;
      }
    } else {
      results.failed++;
    }
    
    // Rate limit: 1 request per second
    if (i < albums.length - 1) {
      await sleep(1100);
    }
  }
  
  console.log('');
  console.log('='.repeat(70));
  console.log('MIGRATION COMPLETE');
  console.log('='.repeat(70));
  console.log(`Total albums:    ${results.total}`);
  console.log(`Migrated:        ${results.success}`);
  console.log(`Already migrated: ${results.skipped}`);
  console.log(`Failed:          ${results.failed}`);
  console.log('');
  
  if (results.success > 0) {
    console.log('✅ Cover images now hosted on Supabase!');
    console.log('✅ No proxy needed - images load directly from your CDN');
    console.log('✅ No CORS issues');
    console.log('');
  }
}

migrateAllCovers().catch(console.error);