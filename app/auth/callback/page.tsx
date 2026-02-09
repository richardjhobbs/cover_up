'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';

export default function AuthCallbackPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = async () => {
      // This creates the session from the magic link
      const { data, error } = await supabase.auth.getSession();

      if (error || !data.session) {
        setError('Unable to complete sign-in.');
        return;
      }

      const session = data.session;
      const pendingUsername = localStorage.getItem('pending_username');

      if (pendingUsername) {
        await supabase.from('profiles').upsert({
          id: session.user.id,
          email: session.user.email,
          username: pendingUsername
        });

        localStorage.removeItem('pending_username');
      }

      router.replace('/today');
    };

    handleCallback();
  }, [router]);

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <a href="/">Back to sign in</a>
      </div>
    );
  }

  return <p>Signing you in…</p>;
}
