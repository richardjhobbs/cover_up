'use client';

import { type FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabaseClient } from '../lib/supabase/client';

const USERNAME_PATTERN = /^[A-Za-z0-9_-]{3,20}$/;
const GUEST_USERNAME_ATTEMPTS = 5;

const generateGuestUsername = () =>
  `Guest${Math.floor(1000 + Math.random() * 9000)}`;

const isUsernameAvailable = async (username: string) => {
  const { data, error } = await supabaseClient
    .from('profiles')
    .select('id')
    .eq('username', username)
    .limit(1);

  if (error) {
    throw error;
  }

  return data.length === 0;
};

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
        'Username must be 3–20 characters and use only letters, numbers, underscores, or dashes.'
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
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Unable to start your session.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGuestPlay = async () => {
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const { data: authData, error: authError } =
        await supabaseClient.auth.signInAnonymously();

      if (authError || !authData?.user) {
        setError(authError?.message ?? 'Unable to start an anonymous session.');
        return;
      }

      let guestUsername = '';
      for (let attempt = 0; attempt < GUEST_USERNAME_ATTEMPTS; attempt += 1) {
        const candidate = generateGuestUsername();
        if (await isUsernameAvailable(candidate)) {
          guestUsername = candidate;
          break;
        }
      }

      if (!guestUsername) {
        setError('Unable to reserve a guest username. Please try again.');
        return;
      }

      const { error: profileError } = await supabaseClient
        .from('profiles')
        .insert({
          id: authData.user.id,
          email: null,
          username: guestUsername,
        });

      if (profileError) {
        setError(profileError.message);
        return;
      }

      setMessage('Starting your session…');
      router.replace('/today');
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Unable to start a guest session.';
      setError(message);
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
      <section>
        <h2>New here?</h2>
        <p>Start instantly with an anonymous guest profile.</p>
        <button type="button" onClick={handleGuestPlay} disabled={loading}>
          {loading ? 'Starting guest session…' : 'Play as Guest'}
        </button>
      </section>
    </main>
  );
}
