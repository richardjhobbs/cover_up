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
    relatedGenres: ['Post-Punk', 'Synth Pop', 'Pop'],
  },
  'UK Punk': {
    name: 'UK Punk',
    regionBias: 'UK',
    category: 'movement',
    visualWeight: 9,
    eraRange: [1976, 1980],
    relatedGenres: ['Post-Punk', 'Garage Rock', 'Hardcore'],
  },
  'US Punk': {
    name: 'US Punk',
    regionBias: 'US',
    category: 'movement',
    visualWeight: 9,
    eraRange: [1976, 1985],
    relatedGenres: ['Post-Punk', 'Hardcore', 'Garage Rock'],
  },
  'Hard Rock': {
    name: 'Hard Rock',
    regionBias: 'UK/US',
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
  'Prog Rock': {
    name: 'Prog Rock',
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
    relatedGenres: ['UK Punk', 'US Punk', 'Psychedelic Rock'],
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
    relatedGenres: ['Alternative Rock', 'US Punk', 'Hard Rock'],
  },
  'Glam Rock': {
    name: 'Glam Rock',
    regionBias: 'UK',
    category: 'movement',
    visualWeight: 10,
    eraRange: [1971, 1975],
    relatedGenres: ['Hard Rock', 'Art Rock'],
  },
  'Arena Rock': {
    name: 'Arena Rock',
    regionBias: 'US',
    category: 'specific',
    visualWeight: 7,
    eraRange: [1975, 1990],
    relatedGenres: ['Hard Rock', 'Classic Rock'],
  },
  'Blues Rock': {
    name: 'Blues Rock',
    regionBias: 'UK/US',
    category: 'specific',
    visualWeight: 6,
    eraRange: [1965, 1980],
    relatedGenres: ['Classic Rock', 'Hard Rock'],
  },
  'Southern Rock': {
    name: 'Southern Rock',
    regionBias: 'US',
    category: 'specific',
    visualWeight: 7,
    eraRange: [1970, 1980],
    relatedGenres: ['Blues Rock', 'Hard Rock'],
  },
  'Rock and Roll': {
    name: 'Rock and Roll',
    regionBias: 'US',
    category: 'core',
    visualWeight: 8,
    eraRange: [1954, 1964],
    relatedGenres: ['Rockabilly', 'Classic Rock'],
  },
  'Rockabilly': {
    name: 'Rockabilly',
    regionBias: 'US',
    category: 'specific',
    visualWeight: 8,
    eraRange: [1954, 1959],
    relatedGenres: ['Rock and Roll'],
  },
  'Folk Rock': {
    name: 'Folk Rock',
    regionBias: 'UK/US',
    category: 'specific',
    visualWeight: 7,
    eraRange: [1965, 1975],
    relatedGenres: ['Classic Rock', 'Folk'],
  },

  // Metal
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
    relatedGenres: ['80s Hip Hop', '90s Hip Hop', 'Modern Hip Hop'],
  },
  '80s Hip Hop': {
    name: '80s Hip Hop',
    regionBias: 'US',
    category: 'movement',
    visualWeight: 9,
    eraRange: [1982, 1989],
    relatedGenres: ['90s Hip Hop', 'Hip-Hop'],
  },
  '90s Hip Hop': {
    name: '90s Hip Hop',
    regionBias: 'US',
    category: 'movement',
    visualWeight: 9,
    eraRange: [1990, 1999],
    relatedGenres: ['80s Hip Hop', 'Modern Hip Hop'],
  },
  'Modern Hip Hop': {
    name: 'Modern Hip Hop',
    regionBias: 'US',
    category: 'core',
    visualWeight: 8,
    eraRange: [2000, 2015],
    relatedGenres: ['90s Hip Hop', 'Trap'],
  },
  'Trap': {
    name: 'Trap',
    regionBias: 'US',
    category: 'specific',
    visualWeight: 7,
    eraRange: [2005, 2023],
    relatedGenres: ['Hip-Hop', 'Modern Hip Hop'],
  },

  // Electronic
  'Electronic': {
    name: 'Electronic',
    regionBias: 'UK/US',
    category: 'core',
    visualWeight: 6,
    eraRange: [1970, 2020],
    relatedGenres: ['House/Techno', 'Synth Pop', 'Ambient'],
  },
  'House/Techno': {
    name: 'House/Techno',
    regionBias: 'UK/US',
    category: 'specific',
    visualWeight: 7,
    eraRange: [1985, 2010],
    relatedGenres: ['Electronic', 'Disco'],
  },
  'Synth Pop': {
    name: 'Synth Pop',
    regionBias: 'UK',
    category: 'movement',
    visualWeight: 8,
    eraRange: [1978, 1986],
    relatedGenres: ['New Wave', 'Electronic'],
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
  'Drum & Bass': {
    name: 'Drum & Bass',
    regionBias: 'UK',
    category: 'specific',
    visualWeight: 7,
    eraRange: [1993, 2015],
    relatedGenres: ['Electronic', 'Breakbeat'],
  },
  'Dubstep': {
    name: 'Dubstep',
    regionBias: 'UK',
    category: 'movement',
    visualWeight: 8,
    eraRange: [2002, 2014],
    relatedGenres: ['Electronic', 'Dub', 'Garage'],
  },

  // Soul, R&B, Funk
  'Soul': {
    name: 'Soul',
    regionBias: 'US',
    category: 'core',
    visualWeight: 7,
    eraRange: [1958, 1975],
    relatedGenres: ['R&B', 'Funk'],
  },
  'R&B': {
    name: 'R&B',
    regionBias: 'US',
    category: 'core',
    visualWeight: 7,
    eraRange: [1970, 2015],
    relatedGenres: ['Soul', '90s R&B', 'Neo Soul'],
  },
  '90s R&B': {
    name: '90s R&B',
    regionBias: 'US',
    category: 'specific',
    visualWeight: 8,
    eraRange: [1990, 1999],
    relatedGenres: ['R&B', 'Neo Soul'],
  },
  'Neo Soul': {
    name: 'Neo Soul',
    regionBias: 'US',
    category: 'movement',
    visualWeight: 8,
    eraRange: [1995, 2010],
    relatedGenres: ['R&B', 'Soul'],
  },
  'Funk': {
    name: 'Funk',
    regionBias: 'US',
    category: 'specific',
    visualWeight: 8,
    eraRange: [1965, 1980],
    relatedGenres: ['Soul', 'Disco'],
  },
  'Disco': {
    name: 'Disco',
    regionBias: 'US',
    category: 'movement',
    visualWeight: 9,
    eraRange: [1974, 1982],
    relatedGenres: ['Funk', 'Soul', 'House/Techno'],
  },

  // Reggae, Ska, Dub
  'Ska/Reggae': {
    name: 'Ska/Reggae',
    regionBias: 'UK',
    category: 'specific',
    visualWeight: 8,
    eraRange: [1968, 1985],
    relatedGenres: ['Dub', 'UK Punk'],
  },
  'Dub': {
    name: 'Dub',
    regionBias: 'UK',
    category: 'specific',
    visualWeight: 7,
    eraRange: [1970, 1985],
    relatedGenres: ['Ska/Reggae', 'Electronic'],
  },

  // Other
  'Goth': {
    name: 'Goth',
    regionBias: 'UK',
    category: 'movement',
    visualWeight: 9,
    eraRange: [1979, 1990],
    relatedGenres: ['Post-Punk', 'New Wave'],
  },
  'Emo': {
    name: 'Emo',
    regionBias: 'US',
    category: 'movement',
    visualWeight: 7,
    eraRange: [2001, 2010],
    relatedGenres: ['Alternative Rock', 'US Punk'],
  },
  'Acid Jazz': {
    name: 'Acid Jazz',
    regionBias: 'UK',
    category: 'movement',
    visualWeight: 8,
    eraRange: [1988, 1998],
    relatedGenres: ['Jazz', 'Funk', 'Soul'],
  },
  'K-Pop': {
    name: 'K-Pop',
    regionBias: 'US',
    category: 'specific',
    visualWeight: 9,
    eraRange: [2010, 2020],
    relatedGenres: ['Pop', 'Electronic'],
  },
};

// Genre family groupings for weekly themes
export const GENRE_FAMILIES = {
  // Popular mainstream families (higher weight)
  'britpop-era': ['Britpop', 'Indie Rock', 'Alternative Rock'],
  'grunge-movement': ['Grunge', 'Alternative Rock', 'US Punk'],
  'hip-hop-90s': ['90s Hip Hop', '80s Hip Hop', 'Modern Hip Hop'],
  'classic-rock': ['Classic Rock', 'Hard Rock', 'Blues Rock'],
  'indie-alternative': ['Indie Rock', 'Alternative Rock', 'Shoegaze'],
  
  // Niche/specialist families (lower weight)
  'post-punk-adjacent': ['Post-Punk', 'New Wave', 'Goth'],
  'electronic-90s-uk': ['Trip-Hop', 'Drum & Bass', 'House/Techno'],
  'psychedelic-60s': ['Psychedelic Rock', 'Garage Rock', 'Folk Rock'],
  'punk-movement': ['UK Punk', 'US Punk', 'Post-Punk'],
  'synth-new-wave': ['Synth Pop', 'New Wave', 'Electronic'],
  'soul-funk': ['Soul', 'Funk', 'Disco', 'R&B'],
  'metal-rock': ['Heavy Metal', 'Hard Rock', 'Arena Rock'],
};

// Weights for genre family selection (higher = more likely)
export const GENRE_FAMILY_WEIGHTS: Record<string, number> = {
  // Popular families - 3x weight
  'britpop-era': 3,
  'grunge-movement': 3,
  'hip-hop-90s': 3,
  'classic-rock': 3,
  'indie-alternative': 3,
  
  // Moderate families - 2x weight
  'punk-movement': 2,
  'synth-new-wave': 2,
  'soul-funk': 2,
  
  // Niche families - 1x weight
  'post-punk-adjacent': 1,
  'electronic-90s-uk': 1,
  'psychedelic-60s': 1,
  'metal-rock': 1,
};

export function getGenresByRegion(region: 'UK' | 'US' | 'UK/US'): string[] {
  return Object.entries(GENRES)
    .filter(([_, def]) => def.regionBias === region || def.regionBias === 'UK/US')
    .map(([name]) => name);
}

export function getGenreFamily(familyKey: keyof typeof GENRE_FAMILIES): string[] {
  return GENRE_FAMILIES[familyKey];
}