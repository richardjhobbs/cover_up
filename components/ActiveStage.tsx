import { useState } from 'react';

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

type ActiveStageProps = {
  slotData: DailySlot;
  timeRemaining: number;
  onCorrectGuess: () => void;
  onSkip: () => void;
};

export default function ActiveStage({
  slotData,
  timeRemaining,
  onCorrectGuess,
  onSkip,
}: ActiveStageProps) {
  const [guess, setGuess] = useState('');

  const getObscurationStyle = (): React.CSSProperties => {
    const { type = 'blur', intensity = 50 } = slotData.obscuration;

    switch (type) {
      case 'blur':
        return { filter: `blur(${intensity / 5}px)` };
      case 'grayscale':
        return { filter: `grayscale(${intensity}%) blur(2px)` };
      case 'crop':
        return {
          transform: `scale(${1 + intensity / 10})`,
          transformOrigin: 'center center',
        };
      default:
        return {};
    }
  };

  // Force HTTPS for cover URLs
  const secureImageUrl = slotData.album.cover_url
    ? slotData.album.cover_url.replace('http://', 'https://')
    : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Normalize guess and album title for comparison
    const normalizedGuess = guess.trim().toLowerCase();
    const normalizedTitle = slotData.album.title.toLowerCase();
    const normalizedArtist = slotData.album.artist.toLowerCase();

    // Check if guess matches title or artist
    if (
      normalizedTitle.includes(normalizedGuess) ||
      normalizedGuess.includes(normalizedTitle) ||
      normalizedArtist.includes(normalizedGuess) ||
      normalizedGuess.includes(normalizedArtist)
    ) {
      onCorrectGuess();
      setGuess('');
    } else {
      // Wrong guess - show feedback (you can enhance this)
      alert('Not quite! Keep trying or wait for the timer.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        {/* Timer */}
        <div className="text-center mb-6">
          <div className="text-6xl font-bold mb-2">{timeRemaining}s</div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${(timeRemaining / 15) * 100}%` }}
            />
          </div>
        </div>

        {/* Album Cover - Large */}
        <div className="aspect-square w-full max-w-lg mx-auto mb-6 bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
          <div className="relative w-full h-full overflow-hidden">
            {secureImageUrl ? (
              <img
                src={secureImageUrl}
                alt="Album cover"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                style={getObscurationStyle()}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-600">
                No Cover Art
              </div>
            )}
          </div>
        </div>

        {/* Guess Input */}
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Enter artist or album name..."
              className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
              autoFocus
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Guess
            </button>
          </div>
        </form>

        {/* Skip Button */}
        <div className="text-center">
          <button
            onClick={onSkip}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Skip this album
          </button>
        </div>

        {/* Slot Info */}
        <div className="text-center mt-4 text-gray-500 text-sm">
          Album {slotData.slot} · Difficulty {slotData.difficulty}
        </div>
      </div>
    </div>
  );
}