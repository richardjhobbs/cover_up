'use client';

import { useEffect, useState, useCallback } from 'react';
import AlbumSlot from '../components/AlbumSlot';
import UsernameModal from '../components/UsernameModal';
import MobileGameFlow from '../components/MobileGameFlow';

type AlbumData = {
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
  albums: AlbumData[];
};

type SessionData = {
  sessionId: number;
  date: string;
  rounds: Array<{
    roundNumber: number;
    genre: string;
  }>;
};

type LeaderboardEntry = {
  rank: number;
  username: string;
  score: number;
  isCurrentUser: boolean;
};

export default function Home() {
  const [username, setUsername] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [currentRound, setCurrentRound] = useState<RoundData | null>(null);
  const [currentRoundNumber, setCurrentRoundNumber] = useState(1);
  const [completedAlbums, setCompletedAlbums] = useState<Set<number>>(new Set());
  const [timedOutAlbums, setTimedOutAlbums] = useState<Set<number>>(new Set());
  const [highlightedAlbum, setHighlightedAlbum] = useState<number | null>(null);
  const [totalScore, setTotalScore] = useState(0);
  const [currentRoundScore, setCurrentRoundScore] = useState(0);
  const [roundsCompleted, setRoundsCompleted] = useState(0);
  const [canAdvance, setCanAdvance] = useState(false);
  const [showRoundTransition, setShowRoundTransition] = useState(false);
  const [showComeback, setShowComeback] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [lastCompletionBonus, setLastCompletionBonus] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Leaderboards
  const [dailyLeaderboard, setDailyLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [weeklyLeaderboard, setWeeklyLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [monthlyLeaderboard, setMonthlyLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const storedUsername = localStorage.getItem('coverup_username');
    const storedUserId = localStorage.getItem('coverup_user_id');

    if (storedUsername && storedUserId) {
      setUsername(storedUsername);
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    if (username && userId) {
      initializeSession();
    }
  }, [username, userId]);

  useEffect(() => {
    if (!currentRound) return;
    const totalAttempted = completedAlbums.size + timedOutAlbums.size;
    setCanAdvance(totalAttempted === 5);
  }, [completedAlbums, timedOutAlbums, currentRound]);

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

      const data = await response.json();

      if (data.alreadyExists && data.roundsCompleted === 3) {
        setGameComplete(true);
        setRoundsCompleted(3);
        await loadLeaderboards(today);
        setLoading(false);
        return;
      }

      setSessionData(data);
      
      const startRound = data.roundsCompleted ? data.roundsCompleted + 1 : 1;
      await loadRound(data.sessionId, startRound);
      await loadLeaderboards(today);
      
      setLoading(false);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to initialize session');
      setLoading(false);
    }
  }

  async function loadRound(sessionId: number, roundNumber: number) {
    console.log('loadRound called with:', { sessionId, roundNumber });
    
    setCompletedAlbums(new Set());
    setTimedOutAlbums(new Set());
    setHighlightedAlbum(null);
    setCurrentRoundScore(0);
    
    try {
      const response = await fetch(`/api/get-round?sessionId=${sessionId}&roundNumber=${roundNumber}`);
      
      if (!response.ok) {
        throw new Error('Failed to load round');
      }

      const data = await response.json() as RoundData;
      console.log('Loaded round data:', { roundId: data.roundId, roundNumber: data.roundNumber, genre: data.genre });
      
      setCurrentRound(data);
      setCurrentRoundNumber(roundNumber);
      
      const revealed = new Set<number>();
      data.albums.forEach((album) => {
        if (album.isRevealed) {
          revealed.add(album.slot);
        }
      });
      
      if (revealed.size > 0) {
        setCompletedAlbums(revealed);
      }

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

  const handleCorrectGuess = useCallback(async (slot: number, timeMs: number, guessText: string, albumId: number) => {
    if (!currentRound) return;

    try {
      const response = await fetch('/api/submit-guess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roundId: currentRound.roundId,
          albumId: albumId,
          guessText: guessText,
          timeMs: timeMs
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

      console.log('Submit guess result:', result);

      if (result.correct) {
        setCompletedAlbums(prev => new Set([...prev, slot]));
        setTotalScore(prev => prev + result.score);
        setCurrentRoundScore(prev => prev + result.score);

        const nextSlot = slot + 1;
        if (nextSlot <= 5 && !completedAlbums.has(nextSlot) && !timedOutAlbums.has(nextSlot)) {
          setHighlightedAlbum(nextSlot);
          
          setTimeout(() => {
            const nextElement = document.querySelector(`[data-slot="${nextSlot}"]`) as HTMLElement;
            if (nextElement) {
              nextElement.click();
            }
          }, 500);
        }
      }

    } catch (err) {
      console.error('Error submitting guess:', err);
    }
  }, [currentRound, completedAlbums, timedOutAlbums]);

  const handleTimeout = useCallback((slot: number) => {
    console.log('TIMEOUT CALLED FOR SLOT:', slot);
    setTimedOutAlbums(prev => {
      const newSet = new Set([...prev, slot]);
      console.log('Updated timedOutAlbums:', Array.from(newSet));
      return newSet;
    });
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
      
      setLastCompletionBonus(result.completionBonus);
      setRoundsCompleted(result.roundsCompleted);
      setTotalScore(result.totalScore);

      if (result.allRoundsComplete) {
        setGameComplete(true);
        setTimeout(async () => {
          await loadLeaderboards(sessionData.date);
          setShowComeback(true);
        }, 1000);
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

  const handleUsernameSubmit = async (newUsername: string) => {
    const newUserId = crypto.randomUUID();
    
    try {
      const response = await fetch('/api/save-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: newUserId,
          username: newUsername
        })
      });

      if (!response.ok) {
        const error = await response.json();
        
        if (error.error && error.error.includes('already exists')) {
          alert('Username already in use. Please try another name. Thanks!');
        } else {
          alert(error.error || 'Failed to save profile. Please try again.');
        }
        return;
      }

      localStorage.setItem('coverup_username', newUsername);
      localStorage.setItem('coverup_user_id', newUserId);
      
      setUsername(newUsername);
      setUserId(newUserId);

    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to save profile. Please try again.');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long',
      day: 'numeric'
    });
  };

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

  if (gameComplete && !currentRound) {
    return (
      <>
        <div className="page-container">
          <div className="content-wrapper">
            <header className="header">
              <h1 className="title">COVER UP</h1>
              <div className="round-indicator">Game Complete!</div>
              <div className="date-label">
                {sessionData?.date ? formatDate(sessionData.date) : new Date().toLocaleDateString()}
              </div>
              <div className="greeting">Well done <span>{username}</span>!</div>
            </header>

            <div className="score-section">
              <div className="chalkboard">
                <div className="chalk-label">FINAL SCORE</div>
                <div className="chalk-number">{totalScore.toLocaleString()}</div>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
                  Come back tomorrow for a new challenge!
                </p>
              </div>
            </div>

            <div className="crates-section">
              {renderLeaderboard(dailyLeaderboard, 'Daily')}
              {renderLeaderboard(weeklyLeaderboard, 'Weekly')}
              {renderLeaderboard(monthlyLeaderboard, 'Monthly')}
            </div>

            <div className="info-section">
              <div className="info-paper">
                <h2 className="info-title">About Cover Up</h2>
                <p className="info-text">
                  A daily music game where you identify five pixelated album covers before time runs out. 
                  Three rounds, different genres, compete on the leaderboards. The faster you guess, the higher you score.
                </p>
                
                <h3 className="info-subtitle">How to Play</h3>
                <p className="info-text">
                  Click an album to start its timer. Type the artist name. Covers get clearer every 7 seconds. 
                  Complete all five to earn a 250-point bonus.
                </p>
                
                <h3 className="info-subtitle">Daily Challenge</h3>
                <p className="info-text">
                  New albums every day across 40+ genres from Britpop to Trip-Hop. 
                  Popular genres appear more often, but every day brings something different.
                </p>
                
                <p className="info-footer">
                  Just for fun - no prizes, just bragging rights and music nostalgia. Come back tomorrow!
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
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
      {/* Mobile flow - only shows on mobile */}
      <MobileGameFlow
        roundNumber={currentRoundNumber}
        genre={currentRound.genre}
        username={username}
        date={sessionData.date}
        totalScore={totalScore}
        gameComplete={gameComplete}
        albums={currentRound.albums}
        completedAlbums={completedAlbums}
        timedOutAlbums={timedOutAlbums}
        canAdvanceRound={canAdvance}
        dailyLeaderboard={dailyLeaderboard}
        weeklyLeaderboard={weeklyLeaderboard}
        monthlyLeaderboard={monthlyLeaderboard}
        onCorrectGuess={handleCorrectGuess}
        onTimeout={handleTimeout}
        onNextRound={completeRound}
      />
      
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
                  key={`${currentRoundNumber}-${album.slot}`}
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

          <div className="info-section">
            <div className="info-paper">
              <h2 className="info-title">About Cover Up</h2>
              <p className="info-text">
                A daily music related game where you identify five pixelated album covers before time runs out. 
                Three rounds, different genres, compete on the leaderboards. The faster you guess, the higher you score.
              </p>
              
              <h3 className="info-subtitle">How to Play</h3>
              <p className="info-text">
                Click an album to start its timer. Type the artist name. Covers get clearer every 7 seconds. 
                Complete all five to earn a 250-point bonus. Move on. (there is some fuzzy logic!)
              </p>
              
              <h3 className="info-subtitle">Daily Challenge</h3>
              <p className="info-text">
                New albums every day across 40+ genres from Britpop to Trip-Hop. 
                Popular genres appear more often, but every day brings something different. (You can critique the classifications!)
              </p>
              
              <p className="info-footer">
                Just for fun - no prizes, just bragging rights and music nostalgia. Come back tomorrow and share with friends!
              </p>
            </div>
          </div>
        </div>
      </div>

      {showRoundTransition && (
        <div className="modal-overlay">
          <div className="round-transition-modal">
            <div className="transition-content">
              <h2 className="transition-title">Round {currentRoundNumber} Complete!</h2>
              {lastCompletionBonus > 0 && (
                <div className="transition-score">+{lastCompletionBonus} Bonus</div>
              )}
              <div className="transition-next">Next: Round {currentRoundNumber + 1}</div>
              <div className="transition-genre">
                {sessionData?.rounds?.[currentRoundNumber]?.genre || ''}
              </div>
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