import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Scoring logic
function calculateScore(timeMs: number): number {
  if (timeMs <= 7000) return 200;
  if (timeMs <= 14000) return 120;
  if (timeMs <= 21000) return 50;
  return 0;
}

// Normalize for comparison (SAME as frontend)
function normalizeForComparison(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/^the\s+/i, '')
    .replace(/^a\s+/i, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ');
}

// Levenshtein distance (SAME as frontend)
function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Fuzzy match (SAME as frontend)
function fuzzyMatch(guess: string, actual: string): boolean {
  const normalizedGuess = normalizeForComparison(guess);
  const normalizedActual = normalizeForComparison(actual);
  
  if (normalizedGuess === normalizedActual) return true;
  
  if (normalizedActual.includes(normalizedGuess) && normalizedGuess.length > 3) return true;
  
  const distance = levenshteinDistance(normalizedGuess, normalizedActual);
  const tolerance = Math.max(1, Math.floor(normalizedActual.length * 0.15));
  
  return distance <= tolerance;
}

export async function POST(request: Request) {
  try {
    const { roundId, albumId, guessText, timeMs } = await request.json();

    if (!roundId || !albumId || !guessText || timeMs === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Get album details
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

    // Check if guess is correct using SAME fuzzy match as frontend
    const correct = fuzzyMatch(guessText, album.artist);
    
    console.log('Fuzzy match check:', { 
      guess: guessText, 
      artist: album.artist, 
      correct 
    });
    
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