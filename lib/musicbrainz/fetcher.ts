// MusicBrainz API integration for fetching album data
// Cover Art Archive for images

export type AlbumData = {
  mbid: string;
  artist: string;
  title: string;
  year: number | null;
  country: string | null;
  genres: string[];
  coverUrl: string | null;
};

const MUSICBRAINZ_API = 'https://musicbrainz.org/ws/2';
const COVERART_API = 'https://coverartarchive.org';

// Rate limiting: MusicBrainz allows 1 request per second
let lastRequestTime = 0;
const RATE_LIMIT_MS = 1000;

async function rateLimitedFetch(url: string, options?: RequestInit) {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  
  if (timeSinceLastRequest < RATE_LIMIT_MS) {
    await new Promise(resolve => 
      setTimeout(resolve, RATE_LIMIT_MS - timeSinceLastRequest)
    );
  }
  
  lastRequestTime = Date.now();
  return fetch(url, options);
}

export async function searchAlbumsByGenre(
  genre: string,
  country?: 'GB' | 'US',
  limit: number = 100
): Promise<AlbumData[]> {
  const countryFilter = country ? ` AND country:${country}` : '';
  const query = `tag:"${genre}"${countryFilter} AND type:album`;
  
  const url = `${MUSICBRAINZ_API}/release-group?query=${encodeURIComponent(query)}&fmt=json&limit=${limit}`;
  
  try {
    const response = await rateLimitedFetch(url, {
      headers: {
        'User-Agent': 'CoverUpGame/1.0 (contact@coverup.game)',
      },
    });
    
    if (!response.ok) {
      throw new Error(`MusicBrainz API error: ${response.status}`);
    }
    
    const data = await response.json();
    const albums: AlbumData[] = [];
    
    for (const release of data['release-groups'] || []) {
      const firstRelease = release['first-release-date'];
      const year = firstRelease ? parseInt(firstRelease.split('-')[0]) : null;
      
      albums.push({
        mbid: release.id,
        artist: release['artist-credit']?.[0]?.name || 'Unknown',
        title: release.title,
        year,
        country: null,
        genres: release.tags?.map((t: any) => t.name) || [genre],
        coverUrl: null,
      });
    }
    
    return albums;
  } catch (error) {
    console.error('Error fetching from MusicBrainz:', error);
    return [];
  }
}

export async function getCoverArt(mbid: string): Promise<string | null> {
  const url = `${COVERART_API}/release-group/${mbid}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    
    const frontCover = data.images?.find((img: any) => 
      img.front === true || img.types?.includes('Front')
    );
    
    const coverImage = frontCover || data.images?.[0];
    
    return coverImage?.thumbnails?.large || coverImage?.image || null;
  } catch (error) {
    console.error(`Error fetching cover art for ${mbid}:`, error);
    return null;
  }
}

export async function getAlbumDetails(mbid: string): Promise<AlbumData | null> {
  const url = `${MUSICBRAINZ_API}/release-group/${mbid}?inc=artist-credits+tags&fmt=json`;
  
  try {
    const response = await rateLimitedFetch(url, {
      headers: {
        'User-Agent': 'CoverUpGame/1.0 (contact@coverup.game)',
      },
    });
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    const firstRelease = data['first-release-date'];
    
    return {
      mbid: data.id,
      artist: data['artist-credit']?.[0]?.name || 'Unknown',
      title: data.title,
      year: firstRelease ? parseInt(firstRelease.split('-')[0]) : null,
      country: null,
      genres: data.tags?.map((t: any) => t.name) || [],
      coverUrl: await getCoverArt(mbid),
    };
  } catch (error) {
    console.error(`Error fetching album details for ${mbid}:`, error);
    return null;
  }
}

export function filterSuitableAlbums(albums: AlbumData[]): AlbumData[] {
  return albums.filter(album => 
    album.year &&
    album.year >= 1965 && album.year <= 2015 &&
    !album.title.toLowerCase().includes('greatest hits') &&
    !album.title.toLowerCase().includes('best of') &&
    !album.title.toLowerCase().includes('compilation') &&
    !album.title.toLowerCase().includes('live at')
  );
}
