'use client';

import { type FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabaseClient } from '../lib/supabase/client';

const USERNAME_PATTERN = /^[A-Za-z0-9_]{2,20}$/;

export default function HomePage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setMessage('');

    const trimmedUsername = username.trim();

    if (!USERNAME_PATTERN.test(trimmedUsername)) {
      setError(
        'Username must be 2–20 characters and use only letters, numbers, or underscores.'
      );
      return;
    }

    setLoading(true);

    try {
      const { data: authData, error: authError } =
        await supabaseClient.auth.signInAnonymously();

      if (authError || !authData?.user) {
        setError(authError?.message ?? 'Unable to start an anonymous session.');
        return;
      }

      const { error: profileError } = await supabaseClient
        .from('profiles')
        .upsert({
          id: authData.user.id,
          username: trimmedUsername,
        });

      if (profileError) {
        setError(profileError.message);
        return;
      }

      setMessage('Starting your session…');
      router.replace('/today');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1>Cover Up</h1>
      <form onSubmit={handleSubmit}>
        <p>Choose a username to get started.</p>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </label>
        {error ? <p role="alert">{error}</p> : null}
        {message ? <p role="status">{message}</p> : null}
        <button type="submit" disabled={loading}>
          {loading ? 'Creating session…' : 'Start playing'}
        </button>
      </form>
    </main>
  );
}
