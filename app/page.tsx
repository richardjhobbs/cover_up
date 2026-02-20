'use client';

import { useEffect, useState, useCallback } from 'react';
import AlbumSlot from '@/components/AlbumSlot';
import UsernameModal from '@/components/UsernameModal';

type Album = {
  slot: number;
  albumId: number;
  artist: string;
  title: string;
  year: number | null;
  coverUrl: string | null;
  genres: string[];
  isRevealed: boolean;
  score: number;
};

type RoundData = {
  roundId: number;
  roundNumber: number;
  genre: string;
  completed: boolean;
  roundScore: number;
  albums: Album[];
};

type SessionData = {
  sessionId: number;
  date: string;
  rounds: Array<{
    roundNumber: number;
    genre: string;
    albumCount: number;
  }>;
};

type LeaderboardEntry = {
  rank: number;
  username: string;
  score: number;
  isCurrentUser?: boolean;
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const day = date.getUTCDate();
  const suffix = day === 1 || day === 21 || day === 31 ? 'st' : day === 2 || day === 22 ? 'nd' : day === 3 || day === 23 ? 'rd' : 'th';
  return `${months[date.getUTCMonth()]} ${day}${suffix}`;
}

export default function Home() {
  // User state
  const [username, setUsername] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  // Session state
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [currentRound, setCurrentRound] = useState<RoundData | null>(null);
  const [currentRoundNumber, setCurrentRoundNumber] = useState(1);
  
  // Game state
  const [completedAlbums, setCompletedAlbums] = useState<Set<number>>(new Set());
  const [timedOutAlbums, setTimedOutAlbums] = useState<Set<number>>(new Set());
  const [totalScore, setTotalScore] = useState(0);
  const [roundsCompleted, setRoundsCompleted] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [canAdvance, setCanAdvance] = useState(false);
  
  // UI state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showRoundTransition, setShowRoundTransition] = useState(false);
  const [showComeback, setShowComeback] = useState(false);
  const [highlightedAlbum, setHighlightedAlbum] = useState<number | null>(null);
  
  // Leaderboards
  const [dailyLeaderboard, setDailyLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [weeklyLeaderboard, setWeeklyLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [monthlyLeaderboard, setMonthlyLeaderboard] = useState<LeaderboardEntry[]>([]);

  // Load user from localStorage
  useEffect(() => {
    const storedUsername = localStorage.getItem('coverup_username');
    const storedUserId = localStorage.getItem('coverup_user_id');
    
    if (storedUsername && storedUserId) {
      setUsername(storedUsername);
      setUserId(storedUserId);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  // Check if round is completable
  useEffect(() => {
    if (!currentRound) return;
    const totalAttempted = completedAlbums.size + timedOutAlbums.size;
    setCanAdvance(totalAttempted === 5);
  }, [completedAlbums, timedOutAlbums, currentRound]);

  // Initialize session when user is loaded
  useEffect(() => {
    if (!userId) return;
    
    async function initializeSession() {
      try {
        const today = new Date().toISOString().split('T')[0];
        
        const response = await fetch('/api/start-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId, date: today })
        });

        if (!response.ok) {
          throw new Error('Failed to start session');
        }

        const data = await response.json() as SessionData & {
          alreadyExists?: boolean;
          roundsCompleted?: number;
        };
        
        if (data.alreadyExists && data.roundsCompleted === 3) {
          setGameComplete(true);
          setShowComeback(true);
          await loadLeaderboards(today);
          return;
        }

        setSessionData(data);
        await loadRound(data.sessionId, 1);
        await loadLeaderboards(today);

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to initialize');
      }
    }

    initializeSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const handleUsernameSubmit = async (newUsername: string) => {
    const newUserId = crypto.randomUUID();
    
    try {
      const response = await fetch('/api/save-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          userId: newUserId, 
          username: newUsername 
        }),
      });

      if (response.ok) {
        localStorage.setItem('coverup_username', newUsername);
        localStorage.setItem('coverup_user_id', newUserId);
        setUsername(newUsername);
        setUserId(newUserId);
      }
    } catch (err) {
      console.error('Error saving profile:', err);
    }
  };

  async function loadRound(sessionId: number, roundNumber: number) {
    try {
      const response = await fetch(`/api/get-round?sessionId=${sessionId}&roundNumber=${roundNumber}`);
      
      if (!response.ok) {
        throw new Error('Failed to load round');
      }

      const data = await response.json() as RoundData;
      setCurrentRound(data);
      setCurrentRoundNumber(roundNumber);
      
      const revealed = new Set<number>();
      data.albums.forEach((album) => {
        if (album.isRevealed) {
          revealed.add(album.slot);
        }
      });
      setCompletedAlbums(revealed);
      setTimedOutAlbums(new Set());

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load round');
    }
  }

  async function loadLeaderboards(date: string) {
    try {
      const response = await fetch(`/api/get-leaderboards?userId=${userId}&date=${date}`);
      
      if (!response.ok) return;

      const data = await response.json() as {
        daily: LeaderboardEntry[];
        weekly: LeaderboardEntry[];
        monthly: LeaderboardEntry[];
      };
      
      setDailyLeaderboard(data.daily || []);
      setWeeklyLeaderboard(data.weekly || []);
      setMonthlyLeaderboard(data.monthly || []);

    } catch (err) {
      console.error('Failed to load leaderboards:', err);
    }
  }

  async function handleCorrectGuess(slot: number, timeMs: number, guessText: string, albumId: number) {
    if (!currentRound || completedAlbums.has(slot)) return;

    try {
      const response = await fetch('/api/submit-guess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roundId: currentRound.roundId,
          albumId,
          guessText,
          timeMs
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit guess');
      }

      const result = await response.json() as {
        correct: boolean;
        score: number;
        correctArtist: string;
      };

      console.log('Submit guess result:', { slot, timeMs, score: result.score, correct: result.correct });

      if (result.correct) {
        setCompletedAlbums(prev => new Set([...prev, slot]));
        setTotalScore(prev => prev + result.score);
        setHighlightedAlbum(slot);
        setTimeout(() => setHighlightedAlbum(null), 2000);
        
        // Auto-focus next incomplete album
        setTimeout(() => {
          const nextSlot = currentRound.albums.find(
            album => !completedAlbums.has(album.slot) && !timedOutAlbums.has(album.slot) && album.slot !== slot
          );
          if (nextSlot) {
            // Trigger click on next album to open modal
            const nextElement = document.querySelector(`[data-slot="${nextSlot.slot}"]`);
            if (nextElement instanceof HTMLElement) {
              nextElement.click();
            }
          }
        }, 500);
      }

    } catch (err) {
      console.error('Error submitting guess:', err);
    }
  }

  const handleTimeout = useCallback((slot: number) => {
    setTimedOutAlbums(prev => new Set([...prev, slot]));
  }, []);

  async function completeRound() {
    if (!currentRound || !sessionData) return;

    try {
      const response = await fetch('/api/complete-round', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roundId: currentRound.roundId,
          sessionId: sessionData.sessionId
        })
      });

      if (!response.ok) {
        throw new Error('Failed to complete round');
      }

      const result = await response.json() as {
        roundCompleted: boolean;
        finalRoundScore: number;
        completionBonus: number;
        roundsCompleted: number;
        totalScore: number;
        nextRound?: {
          roundId: number;
          roundNumber: number;
          genre: string;
        };
        allRoundsComplete: boolean;
      };
      
      console.log('Complete round result:', result);
      
      setRoundsCompleted(result.roundsCompleted);
      setTotalScore(result.totalScore);

      if (result.allRoundsComplete) {
        setGameComplete(true);
        await loadLeaderboards(sessionData.date);
        setTimeout(() => setShowComeback(true), 2000);
      } else if (result.nextRound) {
        setShowRoundTransition(true);
        
        setTimeout(async () => {
          await loadRound(sessionData.sessionId, result.nextRound!.roundNumber);
          setShowRoundTransition(false);
        }, 3000);
      }

    } catch (err) {
      console.error('Error completing round:', err);
    }
  }

  const renderLeaderboard = (entries: LeaderboardEntry[], title: string) => {
    if (entries.length === 0) return null;

    return (
      <div className="crate">
        <div className="crate-label">{title}</div>
        <div className="sleeves">
          {entries.slice(0, 10).map((entry) => (
            <div 
              key={entry.rank} 
              className={`sleeve ${entry.isCurrentUser ? 'you' : ''}`}
            >
              <span className="sleeve-name">
                {entry.isCurrentUser ? 'YOU' : entry.username}
              </span>
              <span className="sleeve-score">{entry.score.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Show username modal if no username
  if (!username) {
    return <UsernameModal onSubmit={handleUsernameSubmit} />;
  }

  if (loading) {
    return (
      <div className="page-container">
        <div className="content-wrapper">
          <div className="loading">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="content-wrapper">
          <div className="error">Error: {error}</div>
        </div>
      </div>
    );
  }

  if (!sessionData || !currentRound) {
    return (
      <div className="page-container">
        <div className="content-wrapper">
          <div className="error">No game data available</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="page-container">
        <div className="content-wrapper">
          <header className="header">
            <h1 className="title">COVER UP</h1>
            <div className="round-indicator">
              Round {currentRoundNumber} of 3 - {currentRound.genre.toUpperCase()}
            </div>
            <div className="date-label">
              {sessionData.date ? formatDate(sessionData.date) : new Date().toLocaleDateString()}
            </div>
            <div className="greeting">Good Luck <span>{username}</span>!</div>
          </header>

          <div className="shelf-section">
            <div className="shelf">
              {currentRound.albums.map((album) => (
                <AlbumSlot
                  key={album.slot}
                  slot={album.slot}
                  difficulty={album.slot}
                  obscuration={{ type: 'blur', intensity: 20 }}
                  album={{
                    id: album.albumId,
                    artist: album.artist,
                    title: album.title,
                    year: album.year,
                    country: null,
                    cover_url: album.coverUrl
                  }}
                  isRevealed={completedAlbums.has(album.slot) || timedOutAlbums.has(album.slot)}
                  isHighlighted={highlightedAlbum === album.slot}
                  onCorrectGuess={(timeMs, guessText) => 
                    handleCorrectGuess(album.slot, timeMs, guessText, album.albumId)
                  }
                  onTimeout={() => handleTimeout(album.slot)}
                />
              ))}
            </div>
          </div>

          <div className="score-section">
            {!gameComplete && (
              <div className="chalkboard">
                <div className="chalk-label">SCORE</div>
                <div className="chalk-number">{totalScore.toLocaleString()}</div>
                {canAdvance && (
                  <button 
                    onClick={completeRound} 
                    className="next-round-button"
                  >
                    {currentRoundNumber === 3 ? 'Finish Game' : 'Next Round →'}
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="crates-section">
            {renderLeaderboard(dailyLeaderboard, 'Daily')}
            {renderLeaderboard(weeklyLeaderboard, 'Weekly')}
            {renderLeaderboard(monthlyLeaderboard, 'Monthly')}
          </div>
        </div>
      </div>

      {showRoundTransition && (
        <div className="modal-overlay">
          <div className="round-transition-modal">
            <div className="transition-content">
              <h2 className="transition-title">Round {currentRoundNumber} Complete!</h2>
              <div className="transition-score">+250 Bonus</div>
              <div className="transition-next">Next: Round {currentRoundNumber + 1}</div>
              <div className="transition-genre">{sessionData.rounds[currentRoundNumber]?.genre}</div>
            </div>
          </div>
        </div>
      )}

      {showComeback && (
        <div className="modal-overlay" onClick={() => setShowComeback(false)}>
          <div className="comeback-modal" onClick={(e) => e.stopPropagation()}>
            <div className="comeback-content">
              <h2 className="comeback-title">All Rounds Complete!</h2>
              <p className="comeback-message">
                Your Score: {totalScore.toLocaleString()}<br />
                Come back tomorrow for 3 new rounds!
              </p>
              <button onClick={() => setShowComeback(false)} className="comeback-button">
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}