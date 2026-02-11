'use client';

import { useEffect, useState } from 'react';
import AlbumSlot from '@/components/AlbumSlot';
import UsernameModal from '@/components/UsernameModal';

type DailySlot = {
  slot: number;
  difficulty: number;
  obscuration: {
    type?: 'blur' | 'crop' | 'grayscale';
    intensity?: number;
  };
  album: {
    id: number;
    artist: string;
    title: string;
    year: number | null;
    country: string | null;
    cover_url: string | null;
  };
};

type DailyData = {
  date: string;
  theme: {
    name: string;
    type: string;
  };
  slots: DailySlot[];
};

type AlbumResult = {
  slot: number;
  score: number;
  timeMs: number;
  guessText: string;
  isCorrect: boolean;
  albumId: number;
};

type LeaderboardEntry = {
  rank: number;
  username: string;
  score?: number;
  total_score?: number;
  completed_at?: string;
  days_played?: number;
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const day = date.getUTCDate();
  const suffix = day === 1 || day === 21 || day === 31 ? 'st' : day === 2 || day === 22 ? 'nd' : day === 3 || day === 23 ? 'rd' : 'th';
  return `${months[date.getUTCMonth()]} ${day}${suffix}`;
}

export default function Home() {
  const [dailyData, setDailyData] = useState<DailyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalScore, setTotalScore] = useState(0);
  const [displayScore, setDisplayScore] = useState(0);
  const [completedAlbums, setCompletedAlbums] = useState<Set<number>>(new Set());
  const [albumResults, setAlbumResults] = useState<AlbumResult[]>([]);
  const [username, setUsername] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [gameComplete, setGameComplete] = useState(false);
  const [scoreSaved, setScoreSaved] = useState(false);
  const [dailyLeaderboard, setDailyLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [weeklyLeaderboard, setWeeklyLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [monthlyLeaderboard, setMonthlyLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [highlightedAlbum, setHighlightedAlbum] = useState<number | null>(null);
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('coverup_username');
    const storedUserId = localStorage.getItem('coverup_user_id');
    
    if (storedUsername && storedUserId) {
      setUsername(storedUsername);
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    async function fetchDaily() {
      try {
        const response = await fetch('/api/daily', {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch daily data');
        }
        const data = await response.json();
        setDailyData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchDaily();
  }, []);

  useEffect(() => {
    if (dailyData) {
      fetchAllLeaderboards();
    }
  }, [dailyData]);

  const fetchAllLeaderboards = async () => {
    if (!dailyData) return;
    
    try {
      const dailyRes = await fetch(`/api/leaderboard/daily?date=${dailyData.date}`);
      const dailyData2 = await dailyRes.json();
      setDailyLeaderboard(dailyData2.leaderboard || []);

      const date = new Date(dailyData.date);
      const dayOfWeek = date.getUTCDay();
      const diff = date.getUTCDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
      const monday = new Date(date.setUTCDate(diff));
      const weekStart = monday.toISOString().split('T')[0];
      
      const weeklyRes = await fetch(`/api/leaderboard/weekly?week_start=${weekStart}`);
      const weeklyData2 = await weeklyRes.json();
      setWeeklyLeaderboard(weeklyData2.leaderboard || []);

      const date2 = new Date(dailyData.date);
      const monthStart = `${date2.getUTCFullYear()}-${String(date2.getUTCMonth() + 1).padStart(2, '0')}-01`;
      
      const monthlyRes = await fetch(`/api/leaderboard/monthly?month_start=${monthStart}`);
      const monthlyData2 = await monthlyRes.json();
      setMonthlyLeaderboard(monthlyData2.leaderboard || []);
    } catch (error) {
      console.error('Error fetching leaderboards:', error);
    }
  };

  // Animated score counter
  useEffect(() => {
    if (totalScore === displayScore) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = (totalScore - displayScore) / steps;
    const stepTime = duration / steps;
    
    let current = displayScore;
    const interval = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= totalScore) || (increment < 0 && current <= totalScore)) {
        setDisplayScore(totalScore);
        clearInterval(interval);
        
        if (completedAlbums.size === 5) {
          setIsFlashing(true);
          setTimeout(() => setIsFlashing(false), 2000);
        }
      } else {
        setDisplayScore(Math.round(current));
      }
    }, stepTime);
    
    return () => clearInterval(interval);
  }, [totalScore, completedAlbums.size]);

  // Keyboard handler for Enter key
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && highlightedAlbum !== null && dailyData) {
        const albumElement = document.querySelector(`[data-slot="${highlightedAlbum}"]`);
        if (albumElement) {
          (albumElement as HTMLElement).click();
          setHighlightedAlbum(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [highlightedAlbum, dailyData]);

  const calculateScore = (timeMs: number): number => {
    const seconds = timeMs / 1000;
    
    if (seconds <= 7) return 200;
    if (seconds <= 14) return 120;
    if (seconds <= 21) return 50;
    return 0;
  };

  const handleCorrectGuess = (slot: number, timeMs: number, guessText: string, albumId: number) => {
    const score = calculateScore(timeMs);
    
    const result: AlbumResult = {
      slot,
      score,
      timeMs,
      guessText,
      isCorrect: true,
      albumId,
    };
    
    setAlbumResults(prev => [...prev, result]);
    setCompletedAlbums(prev => new Set([...prev, slot]));
    setTotalScore(prev => prev + score);
    
    if (slot < 5) {
      setTimeout(() => {
        setHighlightedAlbum(slot + 1);
      }, 2000);
    }
  };

  // Add completion bonus and mark game complete
  useEffect(() => {
    if (dailyData && completedAlbums.size === 5 && !gameComplete) {
      setTotalScore(prev => prev + 250);
      setGameComplete(true);
    }
  }, [completedAlbums, dailyData, gameComplete]);

  // Save score ONLY when game is complete (all 5 albums done) and not already saved
  useEffect(() => {
    const saveScore = async () => {
      // Only save when:
      // 1. Game is complete (all 5 albums)
      // 2. Not already saved
      // 3. Have user ID and daily data
      if (!gameComplete || scoreSaved || !userId || !dailyData || albumResults.length !== 5) {
        return;
      }
      
      // Calculate final score: sum of all album scores + 250 completion bonus
      const finalScore = albumResults.reduce((sum, r) => sum + r.score, 0) + 250;
      
      const resultsToSave = albumResults.map(r => ({
        slot: r.slot,
        album_id: r.albumId,
        score: r.score,
        time_ms: r.timeMs,
        guess_text: r.guessText,
        result_type: r.isCorrect ? 'correct' : 'timeout',
      }));
      
      try {
        const response = await fetch('/api/save-score', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId,
            date: dailyData.date,
            totalScore: finalScore,
            albumResults: resultsToSave,
          }),
        });
        
        if (response.ok) {
          setScoreSaved(true);
          console.log('Score saved successfully:', finalScore);
        } else {
          console.error('Failed to save score:', await response.text());
        }
      } catch (error) {
        console.error('Error saving score:', error);
      }
    };
    
    saveScore();
  }, [gameComplete, scoreSaved, userId, dailyData, albumResults]);

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

  const handleRefreshLeaderboards = () => {
    fetchAllLeaderboards();
  };

  if (!username) {
    return <UsernameModal onSubmit={handleUsernameSubmit} />;
  }

  if (loading) {
    return (
      <div className="page-container loading-state">
        <div className="loading-text">Loading today&apos;s albums...</div>
      </div>
    );
  }

  if (error || !dailyData) {
    return (
      <div className="page-container error-state">
        <div className="error-text">
          Error: {error || 'No data available'}
        </div>
      </div>
    );
  }

  const allComplete = completedAlbums.size === 5;

  const renderLeaderboard = (leaderboard: LeaderboardEntry[], title: string) => {
    const top10 = leaderboard.slice(0, 10);
    const userEntry = leaderboard.find(e => e.username === username);
    const userInTop10 = userEntry && userEntry.rank <= 10;
    const displayScore = (entry: LeaderboardEntry) => entry.score || entry.total_score || 0;

    return (
      <div className="crate">
        <div className="crate-divider">{title}</div>
        {leaderboard.length === 0 ? (
          <div className="no-scores">No scores yet</div>
        ) : (
          <div className="crate-sleeves">
            {top10.map((entry) => (
              <div
                key={entry.rank}
                className={`sleeve ${entry.username === username ? 'you' : ''}`}
              >
                <span className="sleeve-name">{entry.username.toUpperCase()}</span>
                <span className="sleeve-score">{displayScore(entry).toLocaleString()}</span>
              </div>
            ))}
            {!userInTop10 && userEntry && (
              <>
                <div className="sleeve-separator"></div>
                <div className="sleeve you">
                  <span className="sleeve-name">YOU ARE #{userEntry.rank}</span>
                  <span className="sleeve-score">{displayScore(userEntry).toLocaleString()}</span>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="page-container">
        <div className="content-wrapper">
          <header className="header">
            <h1 className="title">COVER UP</h1>
            <div className="genre-label">Today&apos;s Genre is {dailyData.theme.name}</div>
            <div className="date-label">{formatDate(dailyData.date)}</div>
            <div className="greeting">Good Luck <span>{username}</span>!</div>
          </header>

          <div className="shelf-section">
            <div className="shelf">
              {dailyData.slots.map((slotData) => (
                <AlbumSlot
                  key={slotData.slot}
                  slot={slotData.slot}
                  difficulty={slotData.difficulty}
                  obscuration={slotData.obscuration}
                  album={slotData.album}
                  isRevealed={completedAlbums.has(slotData.slot)}
                  isHighlighted={highlightedAlbum === slotData.slot}
                  onCorrectGuess={(timeMs, guessText) => 
                    handleCorrectGuess(slotData.slot, timeMs, guessText, slotData.album.id)
                  }
                />
              ))}
            </div>
          </div>

          <div className={`chalkboard ${isFlashing ? 'flash' : ''}`}>
            <div className="chalk-label">SCORE</div>
            <div className="chalk-number">{displayScore.toLocaleString()}</div>
            {allComplete && (
              <div className="complete-section">
                <div className="complete-text">Complete!</div>
                <button onClick={handleRefreshLeaderboards} className="refresh-btn">
                  See Where You Stand
                </button>
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
    </>
  );
}
