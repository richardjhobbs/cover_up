import { GENRES } from './genres';
import { getSeedAlbums, selectSeedAlbumsByDifficulty, type SeedAlbum } from './seed-albums';
import { getCoverArt, type AlbumData } from './fetcher';

class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  next(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  shuffle<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(this.next() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}

function getDateSeed(date: Date): number {
  return date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
}

function getDailyGenre(date: Date): string {
  const seed = getDateSeed(date);
  const rng = new SeededRandom(seed);
  
  // Get all available genre keys
  const allGenres = Object.keys(GENRES);
  
  // Get yesterday's genre to avoid repeats
  const yesterday = new Date(date);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdaySeed = getDateSeed(yesterday);
  const yesterdayRng = new SeededRandom(yesterdaySeed);
  const yesterdayIndex = Math.floor(yesterdayRng.next() * allGenres.length);
  const yesterdayGenre = allGenres[yesterdayIndex];
  
  // Pick today's genre, avoiding yesterday's
  let todayGenre: string;
  let attempts = 0;
  
  do {
    const index = Math.floor(rng.next() * allGenres.length);
    todayGenre = allGenres[index];
    attempts++;
  } while (todayGenre === yesterdayGenre && attempts < 10);
  
  return todayGenre;
}

async function seedToAlbumData(seed: SeedAlbum, genre: string): Promise<AlbumData | null> {
  const query = `artist:"${seed.artist}" AND release:"${seed.title}"`;
  const url = `https://musicbrainz.org/ws/2/release-group?query=${encodeURIComponent(query)}&fmt=json&limit=1`;
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1100));
    
    const response = await fetch(url, {
      headers: { 'User-Agent': 'CoverUpGame/1.0 (contact@coverup.game)' },
    });
    
    if (!response.ok) {
      console.log(`MusicBrainz search failed for ${seed.artist} - ${seed.title}`);
      return null;
    }
    
    const data = await response.json();
    const release = data['release-groups']?.[0];
    
    if (!release) {
      console.log(`No release found for ${seed.artist} - ${seed.title}`);
      return null;
    }
    
    console.log(`Found MBID for ${seed.artist} - ${seed.title}: ${release.id}`);
    
    const coverUrl = await getCoverArt(release.id);
    
    if (!coverUrl) {
      console.log(`No cover art for ${seed.artist} - ${seed.title}`);
      return null;
    }
    
    console.log(`✓ Got cover for ${seed.artist} - ${seed.title}`);
    
    return {
      mbid: release.id,
      artist: seed.artist,
      title: seed.title,
      year: seed.year,
      country: seed.country,
      genres: [genre],
      coverUrl,
    };
  } catch (error) {
    console.error(`Error fetching ${seed.artist} - ${seed.title}:`, error);
    return null;
  }
}

export async function selectDailyAlbums(date: Date): Promise<AlbumData[]> {
  const seed = getDateSeed(date);
  const rng = new SeededRandom(seed);
  
  const genre = getDailyGenre(date);
  
  console.log(`\n=== Selecting albums for ${date.toISOString().split('T')[0]} ===`);
  console.log(`Genre: ${genre}`);
  
  const seedAlbums = getSeedAlbums(genre);
  
  if (seedAlbums.length >= 5) {
    console.log(`Found ${seedAlbums.length} curated albums for ${genre}`);
    
    const shuffled = rng.shuffle(seedAlbums);
    const selected = selectSeedAlbumsByDifficulty(shuffled, 5);
    
    console.log(`Selected 5 albums, fetching from MusicBrainz...`);
    console.log('Albums:', selected.map(s => `${s.artist} - ${s.title}`).join(', '));
    
    const albums: AlbumData[] = [];
    for (const seedAlbum of selected) {
      const album = await seedToAlbumData(seedAlbum, genre);
      if (album) {
        albums.push(album);
        console.log(`✓ Album ${albums.length}/5 ready`);
      }
      if (albums.length >= 5) break;
    }
    
    console.log(`Final count: ${albums.length} albums with covers\n`);
    
    if (albums.length >= 5) {
      return albums.slice(0, 5);
    }
  }
  
  console.log(`Not enough curated albums, returning empty\n`);
  return [];
}

export function getWeeklyThemeName(date: Date): string {
  const genre = getDailyGenre(date);
  return genre;
}