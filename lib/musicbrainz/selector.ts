import { GENRES, GENRE_FAMILIES } from './genres';
import { searchAlbumsByGenre, filterSuitableAlbums, getCoverArt, type AlbumData } from './fetcher';
import { getSeedAlbums, selectSeedAlbumsByDifficulty, type SeedAlbum } from './seed-albums';

function getWeeklyGenreFamily(date: Date): string[] {
  const weekNumber = getWeekNumber(date);
  const familyKeys = Object.keys(GENRE_FAMILIES);
  const familyIndex = weekNumber % familyKeys.length;
  return GENRE_FAMILIES[familyKeys[familyIndex] as keyof typeof GENRE_FAMILIES];
}

function getWeekNumber(date: Date): number {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

function getDailyGenre(date: Date, genreFamily: string[]): string {
  const dayOfWeek = date.getDay();
  const genreIndex = dayOfWeek % genreFamily.length;
  return genreFamily[genreIndex];
}

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
    
    console.log(`Got cover for ${seed.artist} - ${seed.title}`);
    
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
    
  const genreFamily = getWeeklyGenreFamily(date);
  const primaryGenre = getDailyGenre(date, genreFamily);
    
  const seedAlbums = getSeedAlbums(primaryGenre);
    
  if (seedAlbums.length > 0) {
    const shuffled = rng.shuffle(seedAlbums);
    const albums: AlbumData[] = [];

    // FIX: Iterate through ALL shuffled seeds until we hit 5 successful fetches
    for (const seedAlbum of shuffled) {
      if (albums.length >= 5) break; 

      const album = await seedToAlbumData(seedAlbum, primaryGenre);
      if (album) {
        albums.push(album);
        console.log(`✓ Album ${albums.length}/5 ready`);
      }
    }

    // Allow the game to start with 4 if 5 are impossible, 
    // but 5 is the goal for a full wall.
    if (albums.length >= 4) {
      return albums;
    }
  }
    
  return [];
}

export function getWeeklyThemeName(date: Date): string {
  const genreFamily = getWeeklyGenreFamily(date);
  const genre = genreFamily[0];
  
  const themeNames: Record<string, string> = {
    'Post-Punk': 'Post-Punk & Adjacent',
    'Britpop': 'Britpop Era',
    'Grunge': 'Grunge Movement',
    'Golden Age Hip-Hop': 'Golden Age Hip-Hop',
    'Trip-Hop': '90s UK Electronic',
    'Psychedelic Rock': 'Psychedelic 60s',
  };
  
  return themeNames[genre] || `${genre} Week`;
}

function selectByDifficulty(candidates: AlbumData[], count: number): AlbumData[] {
  const scored = candidates.map(album => {
    const genreInfo = album.genres
      .map(g => GENRES[g])
      .filter(Boolean)[0];
    
    const visualWeight = genreInfo?.visualWeight || 5;
    const eraBonus = album.year && album.year >= 1965 && album.year <= 1980 ? 2 : 0;
    
    return {
      album,
      score: visualWeight + eraBonus,
    };
  });
  
  scored.sort((a, b) => a.score - b.score);
  
  const selected: AlbumData[] = [];
  const step = Math.floor(scored.length / count);
  
  for (let i = 0; i < count; i++) {
    const index = Math.min(i * step, scored.length - 1);
    selected.push(scored[index].album);
  }
  
  return selected;
}
