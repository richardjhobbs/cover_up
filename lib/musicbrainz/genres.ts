// Genre definitions with region bias and difficulty scoring
export type GenreDefinition = {
  name: string;
  regionBias: 'UK' | 'US' | 'UK/US';
  category: 'core' | 'specific' | 'movement' | 'experimental';
  visualWeight: number; // How visually distinct the genre typically is (1-10)
  eraRange?: [number, number]; // Optional year range for peak relevance
  relatedGenres: string[];
};

export const GENRES: Record<string, GenreDefinition> = {
  // Rock family
  'Rock': {
    name: 'Rock',
    regionBias: 'UK/US',
    category: 'core',
    visualWeight: 6,
    relatedGenres: ['Alternative Rock', 'Classic Rock', 'Hard Rock'],
  },
  'Alternative Rock': {
    name: 'Alternative Rock',
    regionBias: 'UK/US',
    category: 'core',
    visualWeight: 7,
    eraRange: [1985, 2010],
    relatedGenres: ['Indie Rock', 'Grunge', 'Post-Punk'],
  },
  'Indie Rock': {
    name: 'Indie Rock',
    regionBias: 'UK/US',
    category: 'core',
    visualWeight: 8,
    eraRange: [2000, 2020],
    relatedGenres: ['Alternative Rock', 'Post-Rock', 'Lo-Fi'],
  },
  'Britpop': {
    name: 'Britpop',
    regionBias: 'UK',
    category: 'movement',
    visualWeight: 9,
    eraRange: [1993, 1997],
    relatedGenres: ['Alternative Rock', 'Indie Rock'],
  },
  'Post-Punk': {
    name: 'Post-Punk',
    regionBias: 'UK',
    category: 'specific',
    visualWeight: 9,
    eraRange: [1978, 1984],
    relatedGenres: ['New Wave', 'Goth', 'Art Rock'],
  },
  'New Wave': {
    name: 'New Wave',
    regionBias: 'UK/US',
    category: 'specific',
    visualWeight: 8,
    eraRange: [1978, 1986],
    relatedGenres: ['Post-Punk', 'Synthpop', 'Pop'],
  },
  'Punk Rock': {
    name: 'Punk Rock',
    regionBias: 'UK/US',
    category: 'specific',
    visualWeight: 9,
    eraRange: [1975, 1980],
    relatedGenres: ['Post-Punk', 'Garage Rock', 'Hardcore'],
  },
  'Hard Rock': {
    name: 'Hard Rock',
    regionBias: 'US',
    category: 'specific',
    visualWeight: 7,
    eraRange: [1970, 1990],
    relatedGenres: ['Heavy Metal', 'Classic Rock'],
  },
  'Classic Rock': {
    name: 'Classic Rock',
    regionBias: 'UK/US',
    category: 'core',
    visualWeight: 6,
    eraRange: [1965, 1985],
    relatedGenres: ['Rock', 'Psychedelic Rock', 'Progressive Rock'],
  },
  'Psychedelic Rock': {
    name: 'Psychedelic Rock',
    regionBias: 'UK/US',
    category: 'specific',
    visualWeight: 10,
    eraRange: [1966, 1972],
    relatedGenres: ['Classic Rock', 'Progressive Rock', 'Garage Rock'],
  },
  'Progressive Rock': {
    name: 'Progressive Rock',
    regionBias: 'UK',
    category: 'specific',
    visualWeight: 8,
    eraRange: [1970, 1978],
    relatedGenres: ['Art Rock', 'Psychedelic Rock'],
  },
  'Garage Rock': {
    name: 'Garage Rock',
    regionBias: 'US',
    category: 'specific',
    visualWeight: 7,
    eraRange: [1963, 1968],
    relatedGenres: ['Punk Rock', 'Psychedelic Rock'],
  },
  'Shoegaze': {
    name: 'Shoegaze',
    regionBias: 'UK',
    category: 'specific',
    visualWeight: 8,
    eraRange: [1988, 1995],
    relatedGenres: ['Alternative Rock', 'Dream Pop', 'Post-Rock'],
  },
  'Grunge': {
    name: 'Grunge',
    regionBias: 'US',
    category: 'movement',
    visualWeight: 8,
    eraRange: [1989, 1996],
    relatedGenres: ['Alternative Rock', 'Punk Rock', 'Hard Rock'],
  },

  // Metal
  'Metal': {
    name: 'Metal',
    regionBias: 'UK/US',
    category: 'core',
    visualWeight: 7,
    relatedGenres: ['Heavy Metal', 'Hard Rock'],
  },
  'Heavy Metal': {
    name: 'Heavy Metal',
    regionBias: 'UK/US',
    category: 'specific',
    visualWeight: 8,
    eraRange: [1975, 1990],
    relatedGenres: ['Thrash Metal', 'Hard Rock'],
  },
  'Thrash Metal': {
    name: 'Thrash Metal',
    regionBias: 'US',
    category: 'specific',
    visualWeight: 9,
    eraRange: [1983, 1992],
    relatedGenres: ['Heavy Metal', 'Hardcore'],
  },

  // Hip-Hop
  'Hip-Hop': {
    name: 'Hip-Hop',
    regionBias: 'US',
    category: 'core',
    visualWeight: 8,
    relatedGenres: ['East Coast Hip-Hop', 'West Coast Hip-Hop', 'Trap'],
  },
  'East Coast Hip-Hop': {
    name: 'East Coast Hip-Hop',
    regionBias: 'US',
    category: 'specific',
    visualWeight: 9,
    eraRange: [1985, 2000],
    relatedGenres: ['Golden Age Hip-Hop', 'Hip-Hop'],
  },
  'West Coast Hip-Hop': {
    name: 'West Coast Hip-Hop',
    regionBias: 'US',
    category: 'specific',
    visualWeight: 9,
    eraRange: [1985, 2000],
    relatedGenres: ['Hip-Hop', 'G-Funk'],
  },
  'Southern Hip-Hop': {
    name: 'Southern Hip-Hop',
    regionBias: 'US',
    category: 'specific',
    visualWeight: 8,
    eraRange: [1995, 2015],
    relatedGenres: ['Hip-Hop', 'Trap', 'Crunk'],
  },
  'Golden Age Hip-Hop': {
    name: 'Golden Age Hip-Hop',
    regionBias: 'US',
    category: 'movement',
    visualWeight: 9,
    eraRange: [1986, 1997],
    relatedGenres: ['East Coast Hip-Hop', 'Hip-Hop'],
  },
  'Trap': {
    name: 'Trap',
    regionBias: 'US',
    category: 'specific',
    visualWeight: 7,
    eraRange: [2005, 2023],
    relatedGenres: ['Hip-Hop', 'Southern Hip-Hop'],
  },

  // Electronic
  'Electronic': {
    name: 'Electronic',
    regionBias: 'UK/US',
    category: 'core',
    visualWeight: 6,
    relatedGenres: ['House', 'Techno', 'Ambient'],
  },
  'House': {
    name: 'House',
    regionBias: 'US',
    category: 'specific',
    visualWeight: 7,
    eraRange: [1985, 2000],
    relatedGenres: ['Chicago House', 'Electronic', 'Disco'],
  },
  'Techno': {
    name: 'Techno',
    regionBias: 'US',
    category: 'specific',
    visualWeight: 8,
    eraRange: [1985, 2000],
    relatedGenres: ['Detroit Techno', 'Electronic', 'Industrial'],
  },
  'Ambient': {
    name: 'Ambient',
    regionBias: 'UK/US',
    category: 'specific',
    visualWeight: 7,
    eraRange: [1970, 2020],
    relatedGenres: ['Electronic', 'Experimental'],
  },
  'Trip-Hop': {
    name: 'Trip-Hop',
    regionBias: 'UK',
    category: 'movement',
    visualWeight: 9,
    eraRange: [1993, 1998],
    relatedGenres: ['Electronic', 'Hip-Hop', 'Downtempo'],
  },
  'Drum and Bass': {
    name: 'Drum and Bass',
    regionBias: 'UK',
    category: 'specific',
    visualWeight: 7,
    eraRange: [1993, 2010],
    relatedGenres: ['Jungle', 'Electronic', 'Breakbeat'],
  },
  'Dubstep': {
    name: 'Dubstep',
    regionBias: 'UK',
    category: 'movement',
    visualWeight: 8,
    eraRange: [2002, 2014],
    relatedGenres: ['Electronic', 'Dub', 'Garage'],
  },
};

// Genre family groupings for weekly themes
export const GENRE_FAMILIES = {
  'post-punk-adjacent': ['Post-Punk', 'New Wave', 'Goth', 'Art Rock'],
  'britpop-era': ['Britpop', 'Indie Rock', 'Alternative Rock'],
  'grunge-movement': ['Grunge', 'Alternative Rock', 'Punk Rock'],
  'hip-hop-golden': ['Golden Age Hip-Hop', 'East Coast Hip-Hop', 'West Coast Hip-Hop'],
  'electronic-90s-uk': ['Trip-Hop', 'Drum and Bass', 'Jungle', 'Dubstep'],
  'psychedelic-60s': ['Psychedelic Rock', 'Garage Rock', 'Classic Rock'],
};

export function getGenresByRegion(region: 'UK' | 'US' | 'UK/US'): string[] {
  return Object.entries(GENRES)
    .filter(([_, def]) => def.regionBias === region || def.regionBias === 'UK/US')
    .map(([name]) => name);
}

export function getGenreFamily(familyKey: keyof typeof GENRE_FAMILIES): string[] {
  return GENRE_FAMILIES[familyKey];
}
