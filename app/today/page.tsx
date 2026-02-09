'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabaseClient } from '../../lib/supabase/client';

type DailyResponse = {
  date: string;
  theme: {
    name: string;
    type: string;
  } | null;
  slots: {
    slot: number;
  }[];
};

export default function TodayPage() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [daily, setDaily] = useState<DailyResponse | null>(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    const checkSession = async () => {
      const { data } = await supabaseClient.auth.getSession();

      if (!data.session) {
        router.replace('/');
        return;
      }

      try {
        const dailyResponse = await fetch('/api/daily');
        const dailyData = (await dailyResponse.json()) as DailyResponse;

        if (!dailyResponse.ok) {
          throw new Error(dailyData ? 'Failed to load daily challenge.' : '');
        }

        const { data: playData, error: playError } = await supabaseClient
          .from('plays')
          .select('id')
          .eq('date', dailyData.date)
          .limit(1);

        if (playError) {
          throw new Error(playError.message);
        }

        if (isMounted) {
          setDaily(dailyData);
          setHasPlayed((playData ?? []).length > 0);
        }
      } catch (error) {
        if (isMounted) {
          setErrorMessage(
            error instanceof Error ? error.message : 'Unable to load daily data.'
          );
        }
      } finally {
        if (isMounted) {
          setIsChecking(false);
        }
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
      {daily ? (
        <>
          <h2>{daily.theme?.name ?? 'Daily Theme'}</h2>
          <ul>
            {daily.slots.map((slot) => (
              <li key={slot.slot}>Slot {slot.slot}: Album placeholder</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading today&apos;s challenge...</p>
      )}
      {hasPlayed ? (
        <p>Played today, come back tomorrow.</p>
      ) : (
        <Link href="/play">Start Round</Link>
      )}
      <button type="button" onClick={handleSignOut}>
        Sign out
      </button>
    </main>
  );
}
