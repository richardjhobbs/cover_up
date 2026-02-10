import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const { userId, username } = await request.json();

    const { error } = await supabaseServer
      .from('profiles')
      .insert({
        id: userId,
        username: username,
        email: null,
      });

    if (error) {
      console.error('Error saving profile:', error);
      return NextResponse.json({ error: 'Failed to save profile' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Save profile error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}