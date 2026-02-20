import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const date = searchParams.get('date') || new Date().toISOString().split('T')[0];

    // Get daily leaderboard for specific date
    const { data: dailyData } = await supabaseServer
      .from('user_daily_sessions')
      .select(`
        user_id,
        total_score,
        completed_at,
        profiles:user_id (username)
      `)
      .eq('date', date)
      .eq('rounds_completed', 3)
      .order('total_score', { ascending: false })
      .order('completed_at', { ascending: true })
      .limit(10);

    const daily = (dailyData || []).map((entry: any, idx: number) => ({
      rank: idx + 1,
      username: entry.profiles?.username || 'Anonymous',
      score: entry.total_score,
      isCurrentUser: entry.user_id === userId
    }));

    // Get weekly leaderboard
    const weekStart = getWeekStart(new Date(date));
    const { data: weeklyData } = await supabaseServer
      .from('user_daily_sessions')
      .select(`
        user_id,
        total_score,
        profiles:user_id (username)
      `)
      .gte('date', weekStart)
      .eq('rounds_completed', 3);

    // Aggregate weekly scores
    const weeklyMap = new Map<string, { username: string; score: number; userId: string }>();
    (weeklyData || []).forEach((entry: any) => {
      const username = entry.profiles?.username || 'Anonymous';
      const existing = weeklyMap.get(entry.user_id);
      if (existing) {
        existing.score += entry.total_score;
      } else {
        weeklyMap.set(entry.user_id, {
          username,
          score: entry.total_score,
          userId: entry.user_id
        });
      }
    });

    const weekly = Array.from(weeklyMap.values())
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map((entry, idx) => ({
        rank: idx + 1,
        username: entry.username,
        score: entry.score,
        isCurrentUser: entry.userId === userId
      }));

    // Get monthly leaderboard
    const monthStart = getMonthStart(new Date(date));
    const { data: monthlyData } = await supabaseServer
      .from('user_daily_sessions')
      .select(`
        user_id,
        total_score,
        profiles:user_id (username)
      `)
      .gte('date', monthStart)
      .eq('rounds_completed', 3);

    // Aggregate monthly scores
    const monthlyMap = new Map<string, { username: string; score: number; userId: string }>();
    (monthlyData || []).forEach((entry: any) => {
      const username = entry.profiles?.username || 'Anonymous';
      const existing = monthlyMap.get(entry.user_id);
      if (existing) {
        existing.score += entry.total_score;
      } else {
        monthlyMap.set(entry.user_id, {
          username,
          score: entry.total_score,
          userId: entry.user_id
        });
      }
    });

    const monthly = Array.from(monthlyMap.values())
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map((entry, idx) => ({
        rank: idx + 1,
        username: entry.username,
        score: entry.score,
        isCurrentUser: entry.userId === userId
      }));

    return NextResponse.json({
      daily,
      weekly,
      monthly
    });

  } catch (error) {
    console.error('Get leaderboards error:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Server error' 
    }, { status: 500 });
  }
}

function getWeekStart(date: Date): string {
  const d = new Date(date);
  const day = d.getUTCDay();
  const diff = d.getUTCDate() - day;
  const weekStart = new Date(d.setUTCDate(diff));
  return weekStart.toISOString().split('T')[0];
}

function getMonthStart(date: Date): string {
  const d = new Date(date);
  return new Date(d.getUTCFullYear(), d.getUTCMonth(), 1).toISOString().split('T')[0];
}