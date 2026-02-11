'use client';

import { useState } from 'react';

type UsernameModalProps = {
  onSubmit: (username: string) => void;
};

export default function UsernameModal({ onSubmit }: UsernameModalProps) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit(username.trim());
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-poster-bg"></div>
      <div className="login-modal">
        <h1 className="login-title">COVER UP</h1>
        <h2 className="login-subtitle">WELCOME TO THE GAME</h2>
        
        <p className="login-description">
          Guess the album cover as it reveals itself. The faster you guess 
          correctly, the more points you score. Complete all five daily albums 
          and climb the leaderboard.
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="username" className="login-label">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            className="login-input"
            maxLength={20}
            required
          />
          
          <button type="submit" className="login-button">
            ENTER THE SHOP
          </button>
        </form>
      </div>
    </div>
  );
}