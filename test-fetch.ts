import { selectDailyAlbums } from './selector';

async function debugMusicBrainz() {
  console.log("🚀 Starting MusicBrainz Debug Test...");
  const testDate = new Date(); 
  
  try {
    const albums = await selectDailyAlbums(testDate);
    if (albums.length === 0) {
      console.log("❌ Result: No albums found. Check rate limits or seed lists.");
      return;
    }

    console.log(`✅ Success! Found ${albums.length} albums:`);
    albums.forEach((album, i) => {
      console.log(`\n--- Album ${i + 1} --- ${album.artist} - ${album.title}`);
      console.log(`Cover: ${album.coverUrl ? '✔️' : '❌'}`);
    });
  } catch (error) {
    console.error("💥 Error:", error);
  }
}

debugMusicBrainz();
