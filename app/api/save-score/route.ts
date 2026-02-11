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

    // Check if play already exists
    const { data: existingPlay } = await supabaseServer
      .from('plays')
      .select('id')
      .eq('user_id', userId)
      .eq('date', date)
      .maybeSingle();

    let playId: number;

    if (existingPlay) {
      // Update existing play
      const { data: updatedPlay, error: updateError } = await supabaseServer
        .from('plays')
        .update({ total_score: totalScore })
        .eq('id', existingPlay.id)
        .select()
        .single();

      if (updateError) {
        console.error('Error updating play:', updateError);
        return NextResponse.json({ error: updateError.message }, { status: 500 });
      }

      playId = updatedPlay.id;
      console.log('Play updated:', updatedPlay);

      // Delete old turns and insert new ones
      await supabaseServer
        .from('play_turns')
        .delete()
        .eq('play_id', playId);

    } else {
      // Insert new play
      const { data: newPlay, error: insertError } = await supabaseServer
        .from('plays')
        .insert({
          user_id: userId,
          date: date,
          total_score: totalScore,
        })
        .select()
        .single();

      if (insertError) {
        console.error('Error inserting play:', insertError);
        return NextResponse.json({ error: insertError.message }, { status: 500 });
      }

      playId = newPlay.id;
      console.log('Play inserted:', newPlay);
    }

    // Insert play_turns records
    const turnRecords = albumResults.map((result: AlbumResult) => ({
      play_id: playId,
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
    return NextResponse.json({ success: true, playId });
  } catch (error) {
    console.error('Save score error:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Server error' 
    }, { status: 500 });
  }
}