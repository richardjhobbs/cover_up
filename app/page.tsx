'use client';

import { useEffect, useState } from 'react';
import AlbumSlot from '@/components/AlbumSlot';

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
};

export default function Home() {
  const [dailyData, setDailyData] = useState<DailyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalScore, setTotalScore] = useState(0);
  const [completedAlbums, setCompletedAlbums] = useState<Set<number>>(new Set());
  const [albumResults, setAlbumResults] = useState<AlbumResult[]>([]);

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

  const calculateScore = (timeMs: number): number => {
    const seconds = timeMs / 1000;
    
    if (seconds <= 7) return 200;
    if (seconds <= 14) return 120;
    if (seconds <= 21) return 50;
    return 0; // Timeout
  };

  const handleCorrectGuess = (slot: number, timeMs: number, guessText: string) => {
    const score = calculateScore(timeMs);
    
    // Add to results
    const result: AlbumResult = {
      slot,
      score,
      timeMs,
      guessText,
      isCorrect: true,
    };
    
    setAlbumResults(prev => [...prev, result]);
    setCompletedAlbums(prev => new Set([...prev, slot]));
    setTotalScore(prev => prev + score);
  };

  // Check for completion bonus
  useEffect(() => {
    if (dailyData && completedAlbums.size === 5) {
      // All albums completed - add 250 bonus
      setTotalScore(prev => prev + 250);
    }
  }, [completedAlbums, dailyData]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="text-white text-xl">Loading today &apos s albums...</div>
      </div>
    );
  }

  if (error || !dailyData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="text-red-500 text-xl">
          Error: {error || 'No data available'}
        </div>
      </div>
    );
  }

  const allComplete = completedAlbums.size === 5;

  return (
    <div className="min-h-screen bg-gray-950 text-white py-8 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Cover Up</h1>
        <div className="text-xl text-gray-400">{dailyData.theme.name}</div>
        <div className="text-sm text-gray-500 mt-1">{dailyData.date}</div>
        
        {/* Score Display */}
        <div className="mt-4 text-2xl font-bold text-blue-400">
          Score: {totalScore}
          {allComplete && <span className="text-green-400 ml-2">🎉 Complete!</span>}
        </div>
        <div className="text-sm text-gray-500 mt-1">
          {completedAlbums.size} / 5 albums completed
        </div>
      </div>

      {/* Album Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="albums-grid">
          {dailyData.slots.map((slotData) => (
            <AlbumSlot
              key={slotData.slot}
              slot={slotData.slot}
              difficulty={slotData.difficulty}
              obscuration={slotData.obscuration}
              album={slotData.album}
              isRevealed={completedAlbums.has(slotData.slot)}
              onCorrectGuess={(timeMs, guessText) => 
  handleCorrectGuess(slotData.slot, timeMs, guessText)
}
            />
          ))}
        </div>

        <style jsx>{`
          .albums-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            max-width: 1200px;
            margin: 0 auto;
          }

          @media (min-width: 640px) {
            .albums-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .albums-grid {
              grid-template-columns: repeat(5, 1fr);
            }
          }
        `}</style>
      </div>
    </div>
  );
}