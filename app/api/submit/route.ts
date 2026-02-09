import { NextResponse } from 'next/server';
import { supabaseServer } from '../../../lib/supabase/server';

export async function POST(request: Request) {
  const supabase = supabaseServer();
  const authHeader = request.headers.get('authorization');

  if (!authHeader?.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.replace('Bearer ', '');
  const { data: authData, error: authError } = await supabase.auth.getUser(
    token
  );

  if (authError || !authData.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let payload: { date?: string; total_score?: number };

  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const { date, total_score: totalScore } = payload;

  if (!date || typeof totalScore !== 'number') {
    return NextResponse.json(
      { error: 'Missing date or total_score' },
      { status: 400 }
    );
  }

  const { error: insertError } = await supabase.from('plays').insert({
    user_id: authData.user.id,
    date,
    total_score: totalScore,
  });

  if (insertError) {
    if (insertError.code === '23505') {
      return NextResponse.json(
        { error: 'Already played today' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: insertError.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
