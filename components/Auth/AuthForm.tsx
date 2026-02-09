'use client';

import { useState, type FormEvent } from 'react';
import { supabaseClient } from '../../lib/supabase/client';
import OtpForm from './OtpForm';

const USERNAME_PATTERN = /^[A-Za-z0-9_-]{3,20}$/;

type Step = 'request' | 'verify';

export default function AuthForm() {
  const [step, setStep] = useState<Step>('request');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRequestCode = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

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

      const { error: otpError } = await supabaseClient.auth.signInWithOtp({
        email: trimmedEmail,
      });

      if (otpError) {
        setError(otpError.message);
        return;
      }

      setEmail(trimmedEmail);
      setUsername(trimmedUsername);
      setStep('verify');
    } finally {
      setLoading(false);
    }
  };

  if (step === 'verify') {
    return (
      <OtpForm
        email={email}
        username={username}
        onBack={() => setStep('request')}
      />
    );
  }

  return (
    <form onSubmit={handleRequestCode}>
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
      <button type="submit" disabled={loading}>
        {loading ? 'Sending…' : 'Send code'}
      </button>
    </form>
  );
}
