import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const { username } = await request.json();

    if (!username || username.trim().length < 4) {
      return NextResponse.json({ error: 'Invalid username' }, { status: 400 });
    }

    // Check if username exists in profiles table
    const { data, error } = await supabaseServer
      .from('profiles')
      .select('username')
      .ilike('username', username.trim())
      .maybeSingle();

    if (error && error.code !== 'PGRST116') {
      console.error('Error checking username:', error);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    return NextResponse.json({ exists: !!data });
  } catch (error) {
    console.error('Username check error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}