'use client';

import { useEffect, useRef, useState } from 'react';

type UsernameModalProps = {
  onSubmit: (username: string) => void;
};

const BLOCKED_WORDS = [
  'fuck', 'shit', 'damn', 'ass', 'bitch', 'cunt', 'dick', 'cock', 
  'pussy', 'bastard', 'slut', 'whore', 'nazi', 'nigger', 'fag',
  'admin', 'moderator', 'official', 'system', 'bot'
];

function containsBlockedWord(username: string): boolean {
  const lowerUsername = username.toLowerCase();
  return BLOCKED_WORDS.some(word => lowerUsername.includes(word));
}

export default function UsernameModal({ onSubmit }: UsernameModalProps) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = async () => {
    setError('');

    // Validation
    if (username.trim().length < 4) {
      setError('Username must be at least 4 characters');
      return;
    }

    if (username.trim().length > 20) {
      setError('Username must be 20 characters or less');
      return;
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
      setError('Username can only contain letters, numbers, underscores, and hyphens');
      return;
    }

    if (containsBlockedWord(username)) {
      setError('This username is not allowed');
      return;
    }

    // Check for duplicates
    setChecking(true);
    try {
      const response = await fetch('/api/check-username', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim() }),
      });

      const data = await response.json();

      if (!response.ok || data.exists) {
        setError('This username is already taken');
        setChecking(false);
        return;
      }

      // Username is valid and available
      onSubmit(username.trim());
    } catch (err) {
      setError('Error checking username. Please try again.');
      setChecking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !checking) {
      handleSubmit();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1 className="modal-title">Welcome to Cover Up!</h1>
        <p className="modal-subtitle">Choose a username to get started</p>
        
        <input
          ref={inputRef}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter username..."
          className="modal-input"
          maxLength={20}
          disabled={checking}
        />

        {error && <div className="error-message">{error}</div>}

        <button 
          onClick={handleSubmit} 
          className="modal-submit"
          disabled={checking || username.trim().length < 4}
        >
          {checking ? 'Checking...' : 'Start Playing'}
        </button>

        <div className="modal-hint">
          • 4-20 characters<br />
          • Letters, numbers, underscores, and hyphens only
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }

        .modal-content {
          background: #1a1a1a;
          border: 2px solid #2563eb;
          border-radius: 16px;
          padding: 48px;
          max-width: 500px;
          width: 90%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
        }

        .modal-title {
          color: white;
          font-size: 32px;
          font-weight: 700;
          margin: 0 0 12px 0;
          text-align: center;
        }

        .modal-subtitle {
          color: #999;
          font-size: 16px;
          margin: 0 0 32px 0;
          text-align: center;
        }

        .modal-input {
          width: 100%;
          padding: 16px 20px;
          font-size: 18px;
          background: #2a2a2a;
          border: 2px solid #3a3a3a;
          border-radius: 8px;
          color: white;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
          text-align: center;
        }

        .modal-input:focus {
          border-color: #2563eb;
        }

        .modal-input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .modal-input::placeholder {
          color: #666;
        }

        .error-message {
          color: #ff6b6b;
          font-size: 14px;
          margin-top: 12px;
          text-align: center;
        }

        .modal-submit {
          width: 100%;
          padding: 16px 24px;
          font-size: 18px;
          font-weight: 600;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 24px;
        }

        .modal-submit:hover:not(:disabled) {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .modal-submit:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .modal-hint {
          color: #666;
          font-size: 13px;
          margin-top: 16px;
          text-align: center;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}