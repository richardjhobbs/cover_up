import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type AlbumResult = {
  slot: number;
  album_id: number;
  score: number;
  time_ms: number;
  guess_text: string;
  result_type: 'correct' | 'timeout';
};

export async function POST(request: Request) {
  try {
    const { userId, date, totalScore, albumResults } = await request.json();

    console.log('Saving score:', { userId, date, totalScore, resultsCount: albumResults.length });

    if (!userId || !date || totalScore === undefined || !albumResults) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Insert play record
    const { data: playData, error: playError } = await supabaseServer
      .from('plays')
      .insert({
        user_id: userId,
        date: date,
        total_score: totalScore,
      })
      .select()
      .single();

    if (playError) {
      console.error('Error saving play:', playError);
      return NextResponse.json({ error: playError.message }, { status: 500 });
    }

    console.log('Play saved:', playData);

    // Insert play_turns records
    const turnRecords = albumResults.map((result: AlbumResult) => ({
      play_id: playData.id,
      slot: result.slot,
      album_id: result.album_id,
      score: result.score,
      time_ms: result.time_ms,
      guess_text: result.guess_text,
      result_type: result.result_type,
    }));

    const { error: turnsError } = await supabaseServer
      .from('play_turns')
      .insert(turnRecords);

    if (turnsError) {
      console.error('Error saving turns:', turnsError);
      return NextResponse.json({ error: turnsError.message }, { status: 500 });
    }

    console.log('Score saved successfully');
    return NextResponse.json({ success: true, playId: playData.id });
  } catch (error) {
    console.error('Save score error:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Server error' 
    }, { status: 500 });
  }
}