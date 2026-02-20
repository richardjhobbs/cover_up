import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');
    const roundNumber = searchParams.get('roundNumber');

    if (!sessionId || !roundNumber) {
      return NextResponse.json({ error: 'Missing sessionId or roundNumber' }, { status: 400 });
    }

    // Get the round
    const { data: round, error: roundError } = await supabaseServer
      .from('game_rounds')
      .select('*')
      .eq('session_id', sessionId)
      .eq('round_number', parseInt(roundNumber))
      .single();

    if (roundError || !round) {
      return NextResponse.json({ error: 'Round not found' }, { status: 404 });
    }

    // Get round albums with full album details
    const { data: roundAlbums, error: albumsError } = await supabaseServer
      .from('round_albums')
      .select(`
        slot,
        album:albums (
          id,
          artist,
          title,
          year,
          cover_url,
          genres
        )
      `)
      .eq('round_id', round.id)
      .order('slot');

    if (albumsError) {
      console.error('Error fetching round albums:', albumsError);
      return NextResponse.json({ error: albumsError.message }, { status: 500 });
    }

    // Get existing attempts for this round
    const { data: attempts } = await supabaseServer
      .from('album_attempts')
      .select('album_id, is_correct, score')
      .eq('round_id', round.id);

    // Format response
    const albums = roundAlbums.map((ra: any) => {
      const albumData = Array.isArray(ra.album) ? ra.album[0] : ra.album;
      const attempt = attempts?.find(a => a.album_id === albumData.id);
      
      return {
        slot: ra.slot,
        albumId: albumData.id,
        artist: albumData.artist,
        title: albumData.title,
        year: albumData.year,
        coverUrl: albumData.cover_url,
        genres: albumData.genres,
        isRevealed: attempt?.is_correct || false,
        score: attempt?.score || 0
      };
    });

    return NextResponse.json({
      roundId: round.id,
      roundNumber: round.round_number,
      genre: round.genre,
      completed: round.completed,
      roundScore: round.round_score,
      albums: albums
    });

  } catch (error) {
    console.error('Get round error:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Server error' 
    }, { status: 500 });
  }
}