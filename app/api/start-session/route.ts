import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Helper: Get random genres
async function getRandomGenres(excludeGenres: string[] = []): Promise<string[]> {
  // Get all unique genres from albums
  const { data: albums } = await supabaseServer
    .from('albums')
    .select('genres');
  
  if (!albums) return [];
  
  // Extract unique genres from JSONB arrays
  const genreSet = new Set<string>();
  albums.forEach(album => {
    if (album.genres && Array.isArray(album.genres)) {
      album.genres.forEach((g: string) => genreSet.add(g));
    }
  });
  
  // Filter out excluded genres
  const availableGenres = Array.from(genreSet).filter(g => !excludeGenres.includes(g));
  
  // Randomly select 3 genres
  const shuffled = availableGenres.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}

// Helper: Get random albums for a genre
async function getRandomAlbumsForGenre(genre: string, count: number = 5): Promise<number[]> {
  // Get all albums that have this genre
  const { data: albums } = await supabaseServer
    .from('albums')
    .select('id, genres');
  
  if (!albums) return [];
  
  // Filter albums that contain this genre in their JSONB array
  const matchingAlbums = albums.filter(album => 
    album.genres && Array.isArray(album.genres) && album.genres.includes(genre)
  );
  
  // Randomly select 5 albums
  const shuffled = matchingAlbums.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(a => a.id);
}

export async function POST(request: Request) {
  try {
    const { userId, date } = await request.json();

    if (!userId || !date) {
      return NextResponse.json({ error: 'Missing userId or date' }, { status: 400 });
    }

    console.log(`Creating session for user ${userId} on ${date}`);

    // Check if session already exists
    const { data: existingSession } = await supabaseServer
      .from('user_daily_sessions')
      .select('id, rounds_completed')
      .eq('user_id', userId)
      .eq('date', date)
      .maybeSingle();

    if (existingSession) {
      console.log('Session already exists:', existingSession);
      return NextResponse.json({ 
        sessionId: existingSession.id,
        alreadyExists: true,
        roundsCompleted: existingSession.rounds_completed
      });
    }

    // Create new session
    const { data: session, error: sessionError } = await supabaseServer
      .from('user_daily_sessions')
      .insert({
        user_id: userId,
        date: date,
        rounds_completed: 0,
        total_score: 0
      })
      .select()
      .single();

    if (sessionError) {
      console.error('Error creating session:', sessionError);
      return NextResponse.json({ error: sessionError.message }, { status: 500 });
    }

    console.log('Session created:', session.id);

    // Get 3 random genres
    const genres = await getRandomGenres();
    
    if (genres.length < 3) {
      return NextResponse.json({ error: 'Not enough genres available' }, { status: 500 });
    }

    console.log('Selected genres:', genres);

    // Create 3 rounds
    const roundsData = [];
    for (let i = 0; i < 3; i++) {
      const { data: round, error: roundError } = await supabaseServer
        .from('game_rounds')
        .insert({
          session_id: session.id,
          round_number: i + 1,
          genre: genres[i],
          round_score: 0,
          completed: false
        })
        .select()
        .single();

      if (roundError) {
        console.error(`Error creating round ${i + 1}:`, roundError);
        continue;
      }

      console.log(`Round ${i + 1} created:`, round.id, genres[i]);

      // Get 5 random albums for this genre
      const albumIds = await getRandomAlbumsForGenre(genres[i], 5);
      
      if (albumIds.length < 5) {
        console.warn(`Only ${albumIds.length} albums found for genre: ${genres[i]}`);
      }

      // Create round_albums entries
      const albumEntries = albumIds.map((albumId, idx) => ({
        round_id: round.id,
        album_id: albumId,
        slot: idx + 1
      }));

      const { error: albumsError } = await supabaseServer
        .from('round_albums')
        .insert(albumEntries);

      if (albumsError) {
        console.error(`Error creating round albums for round ${i + 1}:`, albumsError);
      } else {
        console.log(`${albumEntries.length} albums assigned to round ${i + 1}`);
      }

      roundsData.push({
        roundNumber: i + 1,
        genre: genres[i],
        albumCount: albumIds.length
      });
    }

    return NextResponse.json({
      sessionId: session.id,
      date: session.date,
      rounds: roundsData,
      message: 'Session created with 3 rounds'
    });

  } catch (error) {
    console.error('Start session error:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Server error' 
    }, { status: 500 });
  }
}