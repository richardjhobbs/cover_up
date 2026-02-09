'use client';

import { useEffect, useState } from 'react';
import { supabaseClient } from '../../lib/supabase/client';
import Link from 'next/link';

type DailySlot = {
  slot: number;
  difficulty: number;
};

type DailyResponse = {
  date: string;
  theme: { name: string; type: string };
  slots: DailySlot[];
};

export default function PlayPage() {
  const [isChecking, setIsChecking] = useState(true);
  const [hasSession, setHasSession] = useState(false);
  const [daily, setDaily] = useState<DailyResponse | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      const { data } = await supabaseClient.auth.getSession();
      if (!data.session) {
        setHasSession(false);
        setIsChecking(false);
        return;
      }

      setHasSession(true);

      const dailyResult = await fetch('/api/daily');
      if (dailyResult.ok) {
        const dailyData = (await dailyResult.json()) as DailyResponse;
        if (isMounted) {
          setDaily(dailyData);
          setAccessToken(data.session.access_token);
        }
      }

      if (isMounted) {
        setIsChecking(false);
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = async () => {
    if (!daily || !accessToken) {
      return;
    }

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        date: daily.date,
        total_score: 1234,
      }),
    });

    if (response.ok) {
      setSubmitMessage('Submitted today!');
      return;
    }

    const payload = (await response.json()) as { message?: string };
    setSubmitMessage(payload.message ?? 'Submit failed.');
  };

  if (isChecking) {
    return (
      <main>
        <p>Checking your session...</p>
      </main>
    );
  }

  if (!hasSession) {
    return (
      <main>
        <h1>Play</h1>
        <p>Start as Guest to play.</p>
        <Link href="/">Back to start</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>Play</h1>
      <p>Theme: {daily?.theme.name ?? 'Loading...'}</p>
      <section>
        <h2>Turns</h2>
        <ul>
          {daily?.slots.map((slot) => (
            <li key={slot.slot}>
              Slot {slot.slot} (difficulty {slot.difficulty}){' '}
              <button type="button" onClick={handleSubmit}>
                Simulate submit
              </button>
            </li>
          )) ?? <li>Loading turns...</li>}
        </ul>
      </section>
      {submitMessage ? <p>{submitMessage}</p> : null}
      <p>Core round experience placeholder.</p>
    </main>
  );
}
