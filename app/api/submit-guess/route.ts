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

// COMPREHENSIVE normalization for artist matching
function normalizeArtist(text: string): string {
  return text
    .toLowerCase()
    .trim()
    // Remove diacritics/accents (ö → o, ü → u, é → e, etc.)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // Convert symbols to words FIRST (before removing punctuation)
    .replace(/\s*&\s*/g, ' and ')           // & → and
    .replace(/\s*\+\s*/g, ' and ')          // + → and
    .replace(/\s*vs\.?\s*/gi, ' versus ')   // vs/vs. → versus
    .replace(/\s*ft\.?\s*/gi, ' featuring ') // ft/ft. → featuring
    .replace(/\s*feat\.?\s*/gi, ' featuring ') // feat → featuring
    // Convert numbers to words
    .replace(/\b4\b/g, 'four')
    .replace(/\b2\b/g, 'two')
    .replace(/\b3\b/g, 'three')
    .replace(/\b1\b/g, 'one')
    // Remove common articles and words
    .replace(/^the\s+/i, '')                // Remove "the" from start
    .replace(/^a\s+/i, '')                  // Remove "a" from start
    .replace(/\s+the\s+/gi, ' ')            // Remove "the" from middle
    .replace(/\s+a\s+/gi, ' ')              // Remove "a" from middle
    .replace(/\s+and\s+the\s+/gi, ' and ')  // Normalize "and the" → "and"
    // Remove ALL punctuation and special characters
    .replace(/[^a-z0-9\s]/g, '')
    // Normalize whitespace
    .replace(/\s+/g, ' ')
    .trim();
}

// Extract all significant words (for partial matching)
function extractWords(text: string): string[] {
  return text
    .split(' ')
    .filter(word => word.length > 2); // Only words longer than 2 chars
}

// Levenshtein distance for typo tolerance
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

// COMPREHENSIVE fuzzy matching
function fuzzyMatch(guess: string, actual: string): boolean {
  const normalizedGuess = normalizeArtist(guess);
  const normalizedActual = normalizeArtist(actual);
  
  console.log('=== FUZZY MATCH ===');
  console.log('Original guess:', guess);
  console.log('Original actual:', actual);
  console.log('Normalized guess:', normalizedGuess);
  console.log('Normalized actual:', normalizedActual);
  
  // Rule 1: Exact match after normalization
  if (normalizedGuess === normalizedActual) {
    console.log('✓ Match: Exact');
    return true;
  }
  
  // Rule 2: One contains the other (for partial artist names)
  // Only if the substring is meaningful (>3 chars)
  if (normalizedGuess.length > 3 && normalizedActual.includes(normalizedGuess)) {
    console.log('✓ Match: Guess contained in actual');
    return true;
  }
  
  if (normalizedActual.length > 3 && normalizedGuess.includes(normalizedActual)) {
    console.log('✓ Match: Actual contained in guess');
    return true;
  }
  
  // Rule 3: All significant words from actual are in guess
  // Example: guess "jimi hendrix" matches actual "jimi hendrix experience"
  const guessWords = extractWords(normalizedGuess);
  const actualWords = extractWords(normalizedActual);
  
  if (actualWords.length > 0 && actualWords.every(word => normalizedGuess.includes(word))) {
    console.log('✓ Match: All actual words in guess');
    return true;
  }
  
  if (guessWords.length > 0 && guessWords.every(word => normalizedActual.includes(word))) {
    console.log('✓ Match: All guess words in actual');
    return true;
  }
  
  // Rule 4: Levenshtein distance tolerance (typos)
  const distance = levenshteinDistance(normalizedGuess, normalizedActual);
  const longerLength = Math.max(normalizedGuess.length, normalizedActual.length);
  // Allow 20% character difference, minimum 2 characters
  const tolerance = Math.max(2, Math.floor(longerLength * 0.2));
  
  console.log('Levenshtein:', { distance, tolerance, longerLength });
  
  if (distance <= tolerance) {
    console.log('✓ Match: Levenshtein within tolerance');
    return true;
  }
  
  console.log('✗ No match');
  return false;
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

    // Check if guess is correct using COMPREHENSIVE fuzzy match
    const correct = fuzzyMatch(guessText, album.artist);
    
    console.log('===================');
    console.log('FINAL RESULT:', correct ? 'CORRECT ✓' : 'WRONG ✗');
    console.log('===================');
    
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