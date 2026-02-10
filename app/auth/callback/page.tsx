'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabaseClient } from '../../../lib/supabase/client';

export default function AuthCallbackPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = async () => {
      const { data, error } = await supabaseClient.auth.getSession();

      if (error || !data.session) {
        setError('Unable to complete sign-in.');
        return;
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
