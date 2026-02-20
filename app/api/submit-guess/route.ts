import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Scoring logic (same as current system)
function calculateScore(timeMs: number): number {
  if (timeMs <= 7000) return 200;      // ≤7s
  if (timeMs <= 14000) return 120;     // ≤14s
  if (timeMs <= 21000) return 50;      // ≤21s
  return 0;                             // timeout
}

// Normalize guess for matching
function normalizeGuess(text: string): string {
  return text.trim().toLowerCase()
    .replace(/[^\w\s]/g, '')  // Remove punctuation
    .replace(/\s+/g, ' ');     // Normalize spaces
}

// Check if guess matches artist
function isMatch(guess: string, artist: string): boolean {
  const normalizedGuess = normalizeGuess(guess);
  const normalizedArtist = normalizeGuess(artist);
  
  // Exact match
  if (normalizedGuess === normalizedArtist) return true;
  
  // Partial match (guess contains artist or vice versa)
  if (normalizedGuess.includes(normalizedArtist) || normalizedArtist.includes(normalizedGuess)) {
    return true;
  }
  
  return false;
}

export async function POST(request: Request) {
  try {
    const { roundId, albumId, guessText, timeMs } = await request.json();

    if (!roundId || !albumId || !guessText || timeMs === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Get album details and slot number
    const { data: album, error: albumError } = await supabaseServer
      .from('albums')
      .select('artist')
      .eq('id', albumId)
      .single();

    if (albumError || !album) {
      return NextResponse.json({ error: 'Album not found' }, { status: 404 });
    }

    // Get slot number from round_albums
    const { data: roundAlbum } = await supabaseServer
      .from('round_albums')
      .select('slot')
      .eq('round_id', roundId)
      .eq('album_id', albumId)
      .single();

    const slot = roundAlbum?.slot || 0;

    // Check if guess is correct
    const correct = isMatch(guessText, album.artist);
    
    // Calculate score
    const score = correct ? calculateScore(timeMs) : 0;

    // Record attempt
    const { error: attemptError } = await supabaseServer
      .from('album_attempts')
      .insert({
        round_id: roundId,
        album_id: albumId,
        slot: slot,
        guess_text: guessText,
        is_correct: correct,
        time_ms: timeMs,
        score: score
      });

    if (attemptError) {
      console.error('Error recording attempt:', attemptError);
      return NextResponse.json({ error: attemptError.message }, { status: 500 });
    }

    // If correct, update round score
    if (correct) {
      const { data: round } = await supabaseServer
        .from('game_rounds')
        .select('round_score')
        .eq('id', roundId)
        .single();

      if (round) {
        await supabaseServer
          .from('game_rounds')
          .update({ round_score: round.round_score + score })
          .eq('id', roundId);
      }
    }

    return NextResponse.json({
      correct: correct,
      score: score,
      correctArtist: album.artist
    });

  } catch (error) {
    console.error('Submit guess error:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Server error' 
    }, { status: 500 });
  }
}