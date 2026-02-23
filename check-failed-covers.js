// Check which albums failed to migrate
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkFailedAlbums() {
  const { data: albums } = await supabase
    .from('albums')
    .select('id, artist, title, cover_url')
    .order('id');
  
  console.log('Albums without Supabase cover URLs:\n');
  
  let count = 0;
  albums.forEach(album => {
    if (!album.cover_url || !album.cover_url.includes('supabase')) {
      console.log(`${album.artist} - ${album.title}`);
      console.log(`  Current URL: ${album.cover_url || 'NONE'}\n`);
      count++;
    }
  });
  
  console.log(`\nTotal failed: ${count}`);
  console.log(`Total migrated: ${albums.length - count}`);
}

checkFailedAlbums();