import { NextResponse } from 'next/server';
import {
  getUserFromRequest,
  supabaseServer,
} from '../../../lib/supabase/server';

type SubmitPayload = {
  date: string;
  total_score: number;
};

export async function POST(request: Request) {
  const user = await getUserFromRequest(request);
  if (!user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const payload = (await request.json()) as SubmitPayload;
  if (!payload?.date || typeof payload.total_score !== 'number') {
    return NextResponse.json({ message: 'Invalid payload' }, { status: 400 });
  }

  const { error } = await supabaseServer.from('plays').insert({
    user_id: user.id,
    date: payload.date,
    total_score: payload.total_score,
  });

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json(
        { message: 'Already played today' },
        { status: 409 }
      );
    }

    return NextResponse.json({ message: 'Failed to submit' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
