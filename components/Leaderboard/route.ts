import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');
  
  if (!date) {
    return NextResponse.json({ error: 'Date parameter required' }, { status: 400 });
  }

  try {
    const { data, error } = await supabaseServer
      .from('plays')
      .select(`
        id,
        user_id,
        total_score,
        created_at,
        profiles!inner(username)
      `)
      .eq('date', date)
      .order('total_score', { ascending: false })
      .order('created_at', { ascending: true })
      .limit(100);

    if (error) throw error;

    const leaderboard = data.map((entry, index) => ({
      rank: index + 1,
      username: (entry.profiles as any).username,
      score: entry.total_score,
      completed_at: entry.created_at,
    }));

    return NextResponse.json({ 
      date,
      leaderboard 
    });
  } catch (error) {
    console.error('Leaderboard error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leaderboard' },
      { status: 500 }
    );
  }
}