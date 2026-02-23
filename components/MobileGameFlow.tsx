// Mobile game flow - PURE UI COMPONENT, no game logic
// All logic stays in page.tsx
'use client';

import { useState, useEffect } from 'react';
import MobileRoundModal from './MobileRoundModal';

type Album = {
  slot: number;
  albumId: number;
  artist: string;
  title: string;
  year: number | null;
  coverUrl: string;
};

type MobileGameFlowProps = {
  // Display data
  roundNumber: number;
  genre: string;
  username: string;
  date: string;
  totalScore: number;
  gameComplete: boolean;
  
  // Round data
  albums: Album[];
  completedAlbums: Set<number>;
  timedOutAlbums: Set<number>;
  canAdvanceRound: boolean;
  
  // Leaderboards
  dailyLeaderboard?: { rank: number; username: string; score: number; isCurrentUser: boolean; }[];
  weeklyLeaderboard?: { rank: number; username: string; score: number; isCurrentUser: boolean; }[];
  monthlyLeaderboard?: { rank: number; username: string; score: number; isCurrentUser: boolean; }[];
  
  // Callbacks (all logic in parent)
  onCorrectGuess: (slot: number, timeMs: number, guessText: string, albumId: number) => void;
  onTimeout: (slot: number) => void;
  onNextRound: () => void;
};

export default function MobileGameFlow({
  roundNumber,
  genre,
  username,
  date,
  totalScore,
  gameComplete,
  albums,
  completedAlbums,
  timedOutAlbums,
  canAdvanceRound,
  dailyLeaderboard,
  weeklyLeaderboard,
  monthlyLeaderboard,
  onCorrectGuess,
  onTimeout,
  onNextRound,
}: MobileGameFlowProps) {
  const [roundStarted, setRoundStarted] = useState(false);
  
  // Reset when round can advance
  useEffect(() => {
    if (canAdvanceRound) {
      setRoundStarted(false);
    }
  }, [canAdvanceRound]);
  
  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  };
  
  const handleStartRound = () => {
    setRoundStarted(true);
  };
  
  const handleRoundComplete = () => {
    setRoundStarted(false);
  };
  
  // Only render on mobile
  if (typeof window !== 'undefined' && window.innerWidth > 768) {
    return null;
  }
  
  // Game complete screen
  if (gameComplete) {
    return (
      <div className="mobile-game-flow">
        <header className="mobile-header">
          <h1 className="mobile-title">COVER UP</h1>
          <div className="mobile-round-info">Game Complete!</div>
          <div className="mobile-date">{formatDate(date)}</div>
          <div className="mobile-greeting">Well done <span>{username}</span>!</div>
        </header>
        
        <div className="mobile-score">
          <div className="mobile-score-label">Final Score</div>
          <div className="mobile-score-value">{totalScore.toLocaleString()}</div>
        </div>
        
        <div className="mobile-comeback-message">
          Come back tomorrow for a new challenge!
        </div>
        
        {/* Leaderboards */}
        {dailyLeaderboard && dailyLeaderboard.length > 0 && (
          <div className="mobile-leaderboard">
            <h3>Daily Leaderboard</h3>
            {dailyLeaderboard.slice(0, 10).map((entry) => (
              <div key={entry.rank} className={`mobile-leaderboard-entry ${entry.isCurrentUser ? 'current-user' : ''}`}>
                <span className="rank">{entry.rank}</span>
                <span className="name">{entry.isCurrentUser ? 'YOU' : entry.username}</span>
                <span className="score">{entry.score.toLocaleString()}</span>
              </div>
            ))}
          </div>
        )}
        
        {weeklyLeaderboard && weeklyLeaderboard.length > 0 && (
          <div className="mobile-leaderboard">
            <h3>Weekly Leaderboard</h3>
            {weeklyLeaderboard.slice(0, 10).map((entry) => (
              <div key={entry.rank} className={`mobile-leaderboard-entry ${entry.isCurrentUser ? 'current-user' : ''}`}>
                <span className="rank">{entry.rank}</span>
                <span className="name">{entry.isCurrentUser ? 'YOU' : entry.username}</span>
                <span className="score">{entry.score.toLocaleString()}</span>
              </div>
            ))}
          </div>
        )}
        
        {monthlyLeaderboard && monthlyLeaderboard.length > 0 && (
          <div className="mobile-leaderboard">
            <h3>Monthly Leaderboard</h3>
            {monthlyLeaderboard.slice(0, 10).map((entry) => (
              <div key={entry.rank} className={`mobile-leaderboard-entry ${entry.isCurrentUser ? 'current-user' : ''}`}>
                <span className="rank">{entry.rank}</span>
                <span className="name">{entry.isCurrentUser ? 'YOU' : entry.username}</span>
                <span className="score">{entry.score.toLocaleString()}</span>
              </div>
            ))}
          </div>
        )}
        
        {/* About section */}
        <div className="mobile-about">
          <h2>About Cover Up</h2>
          <p>
            A daily music related game where you identify five pixelated album covers before time runs out. 
            Three rounds, different genres, compete on the leaderboards. The faster you guess, the higher you score.
          </p>
          
          <h3>How to Play</h3>
          <p>
            Tap an album to start its timer. Type the artist name. Covers get clearer every 7 seconds. 
            Complete all five to earn a 250-point bonus. Move on. (there is some fuzzy logic!)
          </p>
          
          <h3>Daily Challenge</h3>
          <p>
            New albums every day across 40+ genres from Britpop to Trip-Hop. 
            Popular genres appear more often, but every day brings something different. (You can critique the classifications!)
          </p>
          
          <p className="mobile-about-footer">
            Just for fun - no prizes, just bragging rights and music nostalgia. Come back tomorrow and share with friends!
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="mobile-game-flow">
      
      {/* Header - always visible */}
      <header className="mobile-header">
        <h1 className="mobile-title">COVER UP</h1>
        <div className="mobile-round-info">
          Round {roundNumber} of 3 - {genre.toUpperCase()}
        </div>
        <div className="mobile-date">{formatDate(date)}</div>
        <div className="mobile-greeting">Good Luck <span>{username}</span>!</div>
      </header>
      
      {/* Score display */}
      <div className="mobile-score">
        <div className="mobile-score-label">Score</div>
        <div className="mobile-score-value">{totalScore.toLocaleString()}</div>
      </div>
      
      {/* Start round button */}
      {!roundStarted && !canAdvanceRound && (
        <div className="mobile-start-section">
          <button className="mobile-start-button" onClick={handleStartRound}>
            START ROUND {roundNumber}
          </button>
          <div className="mobile-genre-label">{genre}</div>
        </div>
      )}
      
      {/* Round complete - next round button */}
      {!roundStarted && canAdvanceRound && (
        <div className="mobile-complete-section">
          <h2>Round {roundNumber} Complete!</h2>
          <button className="mobile-next-button" onClick={onNextRound}>
            {roundNumber === 3 ? 'View Results' : 'Next Round →'}
          </button>
        </div>
      )}
      
      {/* Round modal */}
      {roundStarted && (
        <MobileRoundModal
          albums={albums}
          completedAlbums={completedAlbums}
          timedOutAlbums={timedOutAlbums}
          onCorrectGuess={onCorrectGuess}
          onTimeout={onTimeout}
          onComplete={handleRoundComplete}
        />
      )}
      
    </div>
  );
}