import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const COMPLETION_BONUS = 250;

export async function POST(request: Request) {
  try {
    const { roundId, sessionId } = await request.json();

    if (!roundId || !sessionId) {
      return NextResponse.json({ error: 'Missing roundId or sessionId' }, { status: 400 });
    }

    // Get current round
    const { data: round, error: roundError } = await supabaseServer
      .from('game_rounds')
      .select('round_number, round_score, completed')
      .eq('id', roundId)
      .single();

    if (roundError || !round) {
      return NextResponse.json({ error: 'Round not found' }, { status: 404 });
    }

    if (round.completed) {
      return NextResponse.json({ error: 'Round already completed' }, { status: 400 });
    }

    // Add completion bonus to round score
    const finalRoundScore = round.round_score + COMPLETION_BONUS;

    // Mark round as completed
    const { error: updateError } = await supabaseServer
      .from('game_rounds')
      .update({ 
        completed: true,
        round_score: finalRoundScore,
        completed_at: new Date().toISOString()
      })
      .eq('id', roundId);

    if (updateError) {
      console.error('Error completing round:', updateError);
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    // Update session
    const { data: session } = await supabaseServer
      .from('user_daily_sessions')
      .select('rounds_completed, total_score')
      .eq('id', sessionId)
      .single();

    if (session) {
      const newRoundsCompleted = session.rounds_completed + 1;
      const newTotalScore = session.total_score + finalRoundScore;
      const allRoundsComplete = newRoundsCompleted === 3;

      await supabaseServer
        .from('user_daily_sessions')
        .update({ 
          rounds_completed: newRoundsCompleted,
          total_score: newTotalScore,
          completed_at: allRoundsComplete ? new Date().toISOString() : null
        })
        .eq('id', sessionId);
    }

    // Check if there's a next round
    const nextRoundNumber = round.round_number + 1;
    let nextRound = null;

    if (nextRoundNumber <= 3) {
      const { data: next } = await supabaseServer
        .from('game_rounds')
        .select('id, round_number, genre')
        .eq('session_id', sessionId)
        .eq('round_number', nextRoundNumber)
        .single();

      if (next) {
        nextRound = {
          roundId: next.id,
          roundNumber: next.round_number,
          genre: next.genre
        };
      }
    }

    return NextResponse.json({
      roundCompleted: true,
      finalRoundScore: finalRoundScore,
      completionBonus: COMPLETION_BONUS,
      roundsCompleted: (session?.rounds_completed || 0) + 1,
      totalScore: (session?.total_score || 0) + finalRoundScore,
      nextRound: nextRound,
      allRoundsComplete: nextRoundNumber > 3
    });

  } catch (error) {
    console.error('Complete round error:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Server error' 
    }, { status: 500 });
  }
}