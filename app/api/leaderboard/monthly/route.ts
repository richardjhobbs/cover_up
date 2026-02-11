import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const monthStart = searchParams.get('month_start');
  
  if (!monthStart) {
    return NextResponse.json({ error: 'month_start parameter required' }, { status: 400 });
  }

  try {
    const startDate = new Date(monthStart);
    const year = startDate.getUTCFullYear();
    const month = startDate.getUTCMonth();
    
    const nextMonth = new Date(Date.UTC(year, month + 1, 1));
    const lastDay = new Date(nextMonth.getTime() - 1);
    const monthEnd = lastDay.toISOString().split('T')[0];

    const { data, error } = await supabaseServer
      .from('plays')
      .select(`
        user_id,
        total_score,
        date,
        profiles(username)
      `)
      .gte('date', monthStart)
      .lte('date', monthEnd)
      .order('total_score', { ascending: false });

    if (error) throw error;

    const userScores = new Map<string, { username: string; totalScore: number; daysPlayed: number }>();
    
    data.forEach((play) => {
      const userId = play.user_id;
      const username = (play.profiles as any)?.username || 'Unknown';
      const existing = userScores.get(userId);
      
      if (existing) {
        existing.totalScore += play.total_score;
        existing.daysPlayed += 1;
      } else {
        userScores.set(userId, {
          username,
          totalScore: play.total_score,
          daysPlayed: 1,
        });
      }
    });

    const leaderboard = Array.from(userScores.values())
      .sort((a, b) => b.totalScore - a.totalScore)
      .map((entry, index) => ({
        rank: index + 1,
        username: entry.username,
        total_score: entry.totalScore,
        days_played: entry.daysPlayed,
      }))
      .slice(0, 100);

    return NextResponse.json({ 
      month_start: monthStart,
      month_end: monthEnd,
      leaderboard 
    });
  } catch (error) {
    console.error('Monthly leaderboard error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch monthly leaderboard', details: String(error) },
      { status: 500 }
    );
  }
}