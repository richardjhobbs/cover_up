'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabaseClient } from '../../lib/supabase/client';

export default function TodayPage() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const checkSession = async () => {
      const { data } = await supabaseClient.auth.getSession();

      if (!data.session) {
        router.replace('/');
        return;
      }

      if (isMounted) {
        setIsChecking(false);
      }
    };

    checkSession();

    return () => {
      isMounted = false;
    };
  }, [router]);

  const handleSignOut = async () => {
    await supabaseClient.auth.signOut();
    router.replace('/');
  };

  if (isChecking) {
    return (
      <main>
        <p>Checking your session...</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Today&apos;s Wall</h1>
      <button type="button" onClick={handleSignOut}>
        Sign out
      </button>
    </main>
  );
}
