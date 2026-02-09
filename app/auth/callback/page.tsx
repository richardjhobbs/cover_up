'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabaseClient } from '../../../lib/supabase/client';

const PENDING_USERNAME_KEY = 'pending_username';

export default function AuthCallbackPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const finishSignIn = async () => {
      const { data, error: exchangeError } =
        await supabaseClient.auth.exchangeCodeForSession(window.location.href);

      if (exchangeError || !data.session) {
        setError('Unable to create a session. Please try again.');
        return;
      }

      const pendingUsername =
        typeof window !== 'undefined'
          ? window.localStorage.getItem(PENDING_USERNAME_KEY)?.trim()
          : null;

      const profile = {
        id: data.session.user.id,
        email: data.session.user.email ?? null,
        ...(pendingUsername ? { username: pendingUsername } : {}),
      };

      const { error: upsertError } = await supabaseClient
        .from('profiles')
        .upsert(profile, { onConflict: 'id' });

      if (upsertError) {
        setError(upsertError.message);
        return;
      }

      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(PENDING_USERNAME_KEY);
      }

      router.replace('/today');
    };

    finishSignIn();
  }, [router]);

  if (error) {
    return (
      <main>
        <h1>Sign-in failed</h1>
        <p>{error}</p>
        <Link href="/">Return home</Link>
      </main>
    );
  }

  return (
    <main>
      <p>Signing you in...</p>
    </main>
  );
}
