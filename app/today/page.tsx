'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabaseClient } from '../../lib/supabase/client';

type DailySlot = {
  slot: number;
};

type DailyResponse = {
  date: string;
  theme: { name: string; type: string };
  slots: DailySlot[];
};

export default function TodayPage() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [daily, setDaily] = useState<DailyResponse | null>(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const checkSession = async () => {
      const { data, error } = await supabaseClient.auth.getSession();

      if (error) {
        setErrorMessage('Unable to check session.');
        setIsChecking(false);
        return;
      }

      if (!data.session) {
        router.replace('/');
        return;
      }

      const today = new Date().toISOString().slice(0, 10);
      const [dailyResult, playsResult] = await Promise.all([
        fetch('/api/daily'),
        supabaseClient
          .from('plays')
          .select('id')
          .eq('user_id', data.session.user.id)
          .eq('date', today)
          .maybeSingle(),
      ]);

      if (!dailyResult.ok) {
        setErrorMessage('Unable to load today.');
      } else {
        const dailyData = (await dailyResult.json()) as DailyResponse;
        setDaily(dailyData);
      }

      if (playsResult.error) {
        setErrorMessage('Unable to check plays.');
      } else if (playsResult.data) {
        setHasPlayed(true);
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
      {errorMessage ? <p>{errorMessage}</p> : null}
      <p>Theme: {daily?.theme.name ?? 'Loading...'}</p>
      <section>
        <h2>Slots</h2>
        <div style={{ display: 'grid', gap: '8px', gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {daily?.slots.map((slot) => (
            <div
              key={slot.slot}
              style={{ border: '1px solid #ccc', padding: '12px', textAlign: 'center' }}
            >
              Slot {slot.slot}
            </div>
          )) ?? <p>Loading slots...</p>}
        </div>
      </section>
      <section>
        {hasPlayed ? (
          <p>Played today, come back tomorrow.</p>
        ) : (
          <Link href="/play">Start Round</Link>
        )}
      </section>
      <button type="button" onClick={handleSignOut}>
        Sign out
      </button>
    </main>
  );
}
