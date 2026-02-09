'use client';

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
    artist: string;
    title: string;
  }[];
};

export default function PlayPage() {
  const router = useRouter();
  const [daily, setDaily] = useState<DailyResponse | null>(null);
  const [isChecking, setIsChecking] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      const { data } = await supabaseClient.auth.getSession();

      if (!data.session) {
        router.replace('/');
        return;
      }

      try {
        const dailyResponse = await fetch('/api/daily');
        const dailyData = (await dailyResponse.json()) as DailyResponse;

        if (!dailyResponse.ok) {
          throw new Error('Failed to load daily challenge.');
        }

        if (isMounted) {
          setDaily(dailyData);
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

    loadData();

    return () => {
      isMounted = false;
    };
  }, [router]);

  const handleSubmit = async () => {
    if (!daily || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const { data } = await supabaseClient.auth.getSession();
      const token = data.session?.access_token;

      if (!token) {
        throw new Error('No session token found.');
      }

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ date: daily.date, total_score: 123 }),
      });

      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload?.error ?? 'Submit failed.');
      }

      router.push('/today');
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Unable to submit.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isChecking) {
    return (
      <main>
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Play</h1>
      {errorMessage ? <p>{errorMessage}</p> : null}
      {daily ? (
        <>
          <h2>{daily.theme?.name ?? 'Daily Theme'}</h2>
          <ol>
            {daily.slots.map((slot) => (
              <li key={slot.slot}>
                Slot {slot.slot}: {slot.artist} — {slot.title}
              </li>
            ))}
          </ol>
        </>
      ) : (
        <p>Loading daily challenge...</p>
      )}
      <button type="button" onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Simulate submit'}
      </button>
    </main>
  );
}
