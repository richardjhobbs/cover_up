// Delete albums that failed to migrate cover images
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const albumsToDelete = [
  { artist: 'Gang Starr', title: 'Moment of Truth' },
  { artist: 'DJ Quik', title: 'Quik Is the Name' },
  { artist: 'Orbital', title: 'Orbital 2' },
  { artist: 'Pavement', title: 'Slanted and Enchanted' },
  { artist: 'Arcade Fire', title: 'Funeral' },
  { artist: 'Interpol', title: 'Turn on the Bright Lights' },
  { artist: 'The Killers', title: 'Hot Fuss' },
  { artist: 'Vampire Weekend', title: 'Vampire Weekend' },
  { artist: 'Chuck Berry', title: 'After School Session' },
  { artist: 'Thievery Corporation', title: 'Sounds from the Thievery Hi-Fi' },
  { artist: 'UK Subs', title: 'Another Kind of Blues' },
  { artist: 'Hüsker Dü', title: 'Zen Arcade' },
];

async function deleteFailedAlbums() {
  console.log('Deleting 12 albums with failed cover images...\n');
  
  let deleted = 0;
  
  for (const album of albumsToDelete) {
    console.log(`Deleting: ${album.artist} - ${album.title}`);
    
    const { error } = await supabase
      .from('albums')
      .delete()
      .eq('artist', album.artist)
      .eq('title', album.title);
    
    if (error) {
      console.log(`  ✗ Error: ${error.message}`);
    } else {
      console.log(`  ✓ Deleted`);
      deleted++;
    }
  }
  
  console.log(`\n${'='.repeat(50)}`);
  console.log(`Deleted ${deleted} of 12 albums`);
  console.log(`Remaining albums: 509`);
  console.log(`${'='.repeat(50)}`);
}

deleteFailedAlbums();