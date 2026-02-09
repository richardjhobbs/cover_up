'use client';

import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { supabaseClient } from '../../lib/supabase/client';

type OtpFormProps = {
  email: string;
  username: string;
  onBack: () => void;
};

export default function OtpForm({ email, username, onBack }: OtpFormProps) {
  const router = useRouter();
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!token.trim()) {
      setError('Enter the code from your email.');
      return;
    }

    setLoading(true);

    try {
      const { data, error: verifyError } = await supabaseClient.auth.verifyOtp({
        email,
        token: token.trim(),
        type: 'email',
      });

      if (verifyError) {
        setError(verifyError.message);
        return;
      }

      const user = data.user ?? data.session?.user;

      if (!user) {
        setError('Unable to load the authenticated user.');
        return;
      }

      const { error: profileError } = await supabaseClient
        .from('profiles')
        .upsert(
          {
            id: user.id,
            email: user.email,
            username,
          },
          { onConflict: 'id' }
        );

      if (profileError) {
        setError(profileError.message);
        return;
      }

      router.replace('/today');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleVerify}>
      <p>We emailed a code to {email}. Enter it below to verify.</p>
      <label>
        Code
        <input
          type="text"
          value={token}
          onChange={(event) => setToken(event.target.value)}
          inputMode="numeric"
        />
      </label>
      {error ? <p role="alert">{error}</p> : null}
      <button type="submit" disabled={loading}>
        {loading ? 'Verifying…' : 'Verify'}
      </button>
      <button type="button" onClick={onBack} disabled={loading}>
        Back
      </button>
    </form>
  );
}
