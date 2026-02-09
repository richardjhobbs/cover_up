'use client';

import { type FormEvent, useState } from 'react';
import { supabaseClient } from '../lib/supabase/client';

const USERNAME_PATTERN = /^[A-Za-z0-9_-]{3,20}$/;
const PENDING_USERNAME_KEY = 'pending_username';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setMessage('');

    const trimmedEmail = email.trim();
    const trimmedUsername = username.trim();

    if (!trimmedEmail) {
      setError('Email is required.');
      return;
    }

    if (!USERNAME_PATTERN.test(trimmedUsername)) {
      setError(
        'Username must be 3–20 characters and use only letters, numbers, underscores, or dashes.'
      );
      return;
    }

    setLoading(true);

    try {
      const { data: existingUser, error: lookupError } = await supabaseClient
        .from('profiles')
        .select('id')
        .eq('username', trimmedUsername)
        .maybeSingle();

      if (lookupError) {
        setError(lookupError.message);
        return;
      }

      if (existingUser) {
        setError('That username is already taken.');
        return;
      }

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(PENDING_USERNAME_KEY, trimmedUsername);
      }

      const { error: otpError } = await supabaseClient.auth.signInWithOtp({
        email: trimmedEmail,
        options: {
          emailRedirectTo: 'http://localhost:3000/auth/callback',
        },
      });

      if (otpError) {
        setError(otpError.message);
        return;
      }

      setMessage('Check your email and click the sign-in link.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1>Cover Up</h1>
      <form onSubmit={handleSubmit}>
        <p>Enter your email and choose a username to get started.</p>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
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
          {loading ? 'Sending…' : 'Send sign-in link'}
        </button>
      </form>
    </main>
  );
}
