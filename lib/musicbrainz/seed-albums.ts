
// Curated seed albums - iconic, recognizable albums for each genre
// These are used FIRST before falling back to MusicBrainz API

export type SeedAlbum = {
  artist: string;
  title: string;
  year: number;
  country: 'UK' | 'US';
  mbid?: string; // Optional - will fetch from MusicBrainz if not provided
  visualWeight: number; // 1-10, how visually distinctive the cover is
};

export const SEED_ALBUMS: Record<string, SeedAlbum[]> = {
  // BRITPOP - highly recognizable UK albums from 1993-1997
  'Britpop': [
    { artist: 'Oasis', title: '(What\'s the Story) Morning Glory?', year: 1995, country: 'UK', visualWeight: 8 },
    { artist: 'Blur', title: 'Parklife', year: 1994, country: 'UK', visualWeight: 9 },
    { artist: 'Pulp', title: 'Different Class', year: 1995, country: 'UK', visualWeight: 8 },
    { artist: 'Suede', title: 'Suede', year: 1993, country: 'UK', visualWeight: 7 },
    { artist: 'Elastica', title: 'Elastica', year: 1995, country: 'UK', visualWeight: 7 },
    { artist: 'Oasis', title: 'Definitely Maybe', year: 1994, country: 'UK', visualWeight: 7 },
    { artist: 'Blur', title: 'Modern Life Is Rubbish', year: 1993, country: 'UK', visualWeight: 6 },
    { artist: 'Radiohead', title: 'The Bends', year: 1995, country: 'UK', visualWeight: 8 },
    { artist: 'Pulp', title: 'His \'n\' Hers', year: 1994, country: 'UK', visualWeight: 6 },
    { artist: 'Supergrass', title: 'I Should Coco', year: 1995, country: 'UK', visualWeight: 7 },
    { artist: 'The Verve', title: 'Urban Hymns', year: 1997, country: 'UK', visualWeight: 8 },
    { artist: 'Ocean Colour Scene', title: 'Moseley Shoals', year: 1996, country: 'UK', visualWeight: 6 },
    { artist: 'Manic Street Preachers', title: 'Everything Must Go', year: 1996, country: 'UK', visualWeight: 7 },
    { artist: 'Cast', title: 'All Change', year: 1995, country: 'UK', visualWeight: 5 },
    { artist: 'Sleeper', title: 'Smart', year: 1995, country: 'UK', visualWeight: 6 },
  ],

  // POST-PUNK - iconic 1978-1984 albums
  'Post-Punk': [
    { artist: 'Joy Division', title: 'Unknown Pleasures', year: 1979, country: 'UK', visualWeight: 10 },
    { artist: 'Joy Division', title: 'Closer', year: 1980, country: 'UK', visualWeight: 9 },
    { artist: 'The Cure', title: 'Seventeen Seconds', year: 1980, country: 'UK', visualWeight: 8 },
    { artist: 'Siouxsie and the Banshees', title: 'The Scream', year: 1978, country: 'UK', visualWeight: 8 },
    { artist: 'Wire', title: 'Pink Flag', year: 1977, country: 'UK', visualWeight: 7 },
    { artist: 'Gang of Four', title: 'Entertainment!', year: 1979, country: 'UK', visualWeight: 9 },
    { artist: 'Public Image Ltd', title: 'Metal Box', year: 1979, country: 'UK', visualWeight: 10 },
    { artist: 'Bauhaus', title: 'In the Flat Field', year: 1980, country: 'UK', visualWeight: 8 },
    { artist: 'The Fall', title: 'Hex Enduction Hour', year: 1982, country: 'UK', visualWeight: 7 },
    { artist: 'Magazine', title: 'Real Life', year: 1978, country: 'UK', visualWeight: 7 },
    { artist: 'Cabaret Voltaire', title: 'Red Mecca', year: 1981, country: 'UK', visualWeight: 8 },
    { artist: 'New Order', title: 'Power, Corruption & Lies', year: 1983, country: 'UK', visualWeight: 9 },
    { artist: 'The Smiths', title: 'The Smiths', year: 1984, country: 'UK', visualWeight: 8 },
  ],

  
  // GRUNGE - iconic Seattle sound 1989-1996
  'Grunge': [
    { artist: 'Nirvana', title: 'Nevermind', year: 1991, country: 'US', visualWeight: 10 },
    { artist: 'Pearl Jam', title: 'Ten', year: 1991, country: 'US', visualWeight: 8 },
    { artist: 'Soundgarden', title: 'Superunknown', year: 1994, country: 'US', visualWeight: 9 },
    { artist: 'Alice in Chains', title: 'Dirt', year: 1992, country: 'US', visualWeight: 8 },
    { artist: 'Nirvana', title: 'In Utero', year: 1993, country: 'US', visualWeight: 9 },
    { artist: 'Stone Temple Pilots', title: 'Core', year: 1992, country: 'US', visualWeight: 7 },
    { artist: 'Soundgarden', title: 'Badmotorfinger', year: 1991, country: 'US', visualWeight: 7 },
    { artist: 'Mudhoney', title: 'Superfuzz Bigmuff', year: 1988, country: 'US', visualWeight: 8 },
    { artist: 'The Smashing Pumpkins', title: 'Siamese Dream', year: 1993, country: 'US', visualWeight: 9 },
    { artist: 'Screaming Trees', title: 'Sweet Oblivion', year: 1992, country: 'US', visualWeight: 6 },
  ],

  // PSYCHEDELIC ROCK - 1966-1972 classics
  'Psychedelic Rock': [
    { artist: 'The Beatles', title: 'Sgt. Pepper\'s Lonely Hearts Club Band', year: 1967, country: 'UK', visualWeight: 10 },
    { artist: 'Pink Floyd', title: 'The Piper at the Gates of Dawn', year: 1967, country: 'UK', visualWeight: 9 },
    { artist: 'The Jimi Hendrix Experience', title: 'Are You Experienced', year: 1967, country: 'US', visualWeight: 10 },
    { artist: 'Jefferson Airplane', title: 'Surrealistic Pillow', year: 1967, country: 'US', visualWeight: 8 },
    { artist: 'The Doors', title: 'The Doors', year: 1967, country: 'US', visualWeight: 9 },
    { artist: 'Cream', title: 'Disraeli Gears', year: 1967, country: 'UK', visualWeight: 10 },
    { artist: '13th Floor Elevators', title: 'The Psychedelic Sounds of', year: 1966, country: 'US', visualWeight: 9 },
    { artist: 'The Grateful Dead', title: 'Anthem of the Sun', year: 1968, country: 'US', visualWeight: 8 },
    { artist: 'The Velvet Underground', title: 'The Velvet Underground & Nico', year: 1967, country: 'US', visualWeight: 10 },
  ],

  // GOLDEN AGE HIP-HOP - 1986-1997 classics
  'Golden Age Hip-Hop': [
    { artist: 'Public Enemy', title: 'It Takes a Nation of Millions to Hold Us Back', year: 1988, country: 'US', visualWeight: 9 },
    { artist: 'N.W.A', title: 'Straight Outta Compton', year: 1988, country: 'US', visualWeight: 10 },
    { artist: 'A Tribe Called Quest', title: 'The Low End Theory', year: 1991, country: 'US', visualWeight: 9 },
    { artist: 'Wu-Tang Clan', title: 'Enter the Wu-Tang (36 Chambers)', year: 1993, country: 'US', visualWeight: 10 },
    { artist: 'Nas', title: 'Illmatic', year: 1994, country: 'US', visualWeight: 9 },
    { artist: 'The Notorious B.I.G.', title: 'Ready to Die', year: 1994, country: 'US', visualWeight: 9 },
    { artist: 'Dr. Dre', title: 'The Chronic', year: 1992, country: 'US', visualWeight: 8 },
    { artist: 'Eric B. & Rakim', title: 'Paid in Full', year: 1987, country: 'US', visualWeight: 8 },
    { artist: 'De La Soul', title: '3 Feet High and Rising', year: 1989, country: 'US', visualWeight: 10 },
  ],

  // TRIP-HOP - 1993-1998 UK sound
  'Trip-Hop': [
    { artist: 'Portishead', title: 'Dummy', year: 1994, country: 'UK', visualWeight: 9 },
    { artist: 'Massive Attack', title: 'Blue Lines', year: 1991, country: 'UK', visualWeight: 8 },
    { artist: 'Tricky', title: 'Maxinquaye', year: 1995, country: 'UK', visualWeight: 9 },
    { artist: 'Portishead', title: 'Portishead', year: 1997, country: 'UK', visualWeight: 8 },
    { artist: 'Massive Attack', title: 'Protection', year: 1994, country: 'UK', visualWeight: 7 },
    { artist: 'Morcheeba', title: 'Who Can You Trust?', year: 1996, country: 'UK', visualWeight: 6 },
    { artist: 'Massive Attack', title: 'Mezzanine', year: 1998, country: 'UK', visualWeight: 9 },
  ],

 // ALT-ROCK - 1989-1999 UK and US sound
  'Alternative Rock': [
    { artist: 'Nirvana', title: 'Nevermind', year: 1991, country: 'US', visualWeight: 2 },
    { artist: 'Radiohead', title: 'OK Computer', year: 1997, country: 'GB', visualWeight: 8 },
    { artist: 'R.E.M.', title: 'Automatic for the People', year: 1992, country: 'US', visualWeight: 5 },
    { artist: 'The Smashing Pumpkins', title: 'Siamese Dream', year: 1993, country: 'US', visualWeight: 4 },
    { artist: 'Pixies', title: 'Doolittle', year: 1989, country: 'US', visualWeight: 7 },
    { artist: 'Pearl Jam', title: 'Ten', year: 1991, country: 'US', visualWeight: 3 },
    { artist: 'The Cure', title: 'Disintegration', year: 1989, country: 'GB', visualWeight: 9 },
    { artist: 'Red Hot Chili Peppers', title: 'Californication', year: 1999, country: 'US', visualWeight: 4 },
    { artist: 'The White Stripes', title: 'Elephant', year: 2003, country: 'US', visualWeight: 6 },
    { artist: 'Foo Fighters', title: 'The Colour and the Shape', year: 1997, country: 'US', visualWeight: 5 }
  ],

  // Add more genres as needed...
};

// Get seed albums for a genre
export function getSeedAlbums(genre: string): SeedAlbum[] {
  return SEED_ALBUMS[genre] || [];
}

// Get seed albums filtered by region
export function getSeedAlbumsByRegion(genre: string, region: 'UK' | 'US'): SeedAlbum[] {
  const albums = getSeedAlbums(genre);
  return albums.filter(a => a.country === region);
}

// Select albums by difficulty (visual weight)
export function selectSeedAlbumsByDifficulty(albums: SeedAlbum[], count: number): SeedAlbum[] {
  if (albums.length <= count) return albums;
  
  // Sort by visual weight (lower = easier, higher = harder)
  const sorted = [...albums].sort((a, b) => a.visualWeight - b.visualWeight);
  
  // Distribute evenly across difficulty range
  const selected: SeedAlbum[] = [];
  const step = Math.floor(sorted.length / count);
  
  for (let i = 0; i < count; i++) {
    const index = Math.min(i * step, sorted.length - 1);
    selected.push(sorted[index]);
  }
  
  return selected;
}
