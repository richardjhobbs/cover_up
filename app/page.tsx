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

export default function Home() {
  const [dailyData, setDailyData] = useState<DailyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="text-white text-xl">Loading todays albums...</div>
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

  return (
    <div className="min-h-screen bg-gray-950 text-white py-8 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Cover Up</h1>
        <div className="text-xl text-gray-400">{dailyData.theme.name}</div>
        <div className="text-sm text-gray-500 mt-1">{dailyData.date}</div>
      </div>

    {/* Album Grid - THE WALL */}
<div className="max-w-7xl mx-auto px-4">
  <div className="grid grid-cols-5 gap-4 w-full">
    {dailyData.slots.map((slotData) => (
      <AlbumSlot
        key={slotData.slot}
        slot={slotData.slot}
        difficulty={slotData.difficulty}
        obscuration={slotData.obscuration}
        album={slotData.album}
        isRevealed={false}
        onGuess={() => console.log(`Clicked slot ${slotData.slot}`)}
      />
    ))}
  </div>
</div>S
    </div>
  );
}