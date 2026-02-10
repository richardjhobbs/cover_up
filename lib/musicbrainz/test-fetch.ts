import { getSeedAlbums } from './seed-albums';
import { selectDailyAlbums } from './selector';

async function debugMusicBrainz() {
  console.log("🚀 Starting MusicBrainz Debug Test...");
  
  const testDate = new Date(); // Test for today
  console.log(`📅 Testing for date: ${testDate.toISOString().split('T')[0]}`);

  try {
    const albums = await selectDailyAlbums(testDate);
    
    if (albums.length === 0) {
      console.log("❌ Result: No albums found. Check rate limits or seed lists.");
      return;
    }

    console.log(`✅ Success! Found ${albums.length} albums:`);
    albums.forEach((album, i) => {
      console.log(`\n--- Album ${i + 1} ---`);
      console.log(`Artist: ${album.artist}`);
      console.log(`Title:  ${album.title}`);
      console.log(`MBID:   ${album.mbid}`);
      console.log(`Cover:  ${album.coverUrl ? '✔️ URL Found' : '❌ Missing'}`);
      if (album.coverUrl) console.log(`URL:    ${album.coverUrl}`);
    });

  } catch (error) {
    console.error("💥 Critical Error during debug:", error);
  }
}

// Run the test
debugMusicBrainz();
