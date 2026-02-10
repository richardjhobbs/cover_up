import { useState } from 'react';

type Obscuration = {
  type?: 'blur' | 'crop' | 'grayscale';
  intensity?: number;
};

type Album = {
  id: number;
  artist: string;
  title: string;
  year: number | null;
  country: string | null;
  cover_url: string | null;
};

type AlbumSlotProps = {
  slot: number;
  difficulty: number;
  obscuration: Obscuration;
  album: Album;
  isRevealed: boolean;
  onGuess: () => void;
};

export default function AlbumSlot({
  slot,
  difficulty,
  obscuration,
  album,
  isRevealed,
  onGuess,
}: AlbumSlotProps) {
  const getObscurationStyle = (): React.CSSProperties => {
    if (isRevealed) return {};

    const { type = 'blur', intensity = 50 } = obscuration;

    switch (type) {
      case 'blur':
        return { filter: `blur(${intensity / 5}px)` };
      case 'grayscale':
        return { filter: `grayscale(${intensity}%) blur(2px)` };
      case 'crop':
        // Use a large scale but keep it contained
        return {
          transform: `scale(${1 + intensity / 10})`,
          transformOrigin: 'center center',
        };
      default:
        return {};
    }
  };

  // Force HTTPS for cover URLs
  const secureImageUrl = album.cover_url
    ? album.cover_url.replace('http://', 'https://')
    : null;

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* TRIPLE-LAYER containment for crop effect */}
      <div className="relative w-full" style={{ paddingBottom: '100%' }}>
        <div className="absolute inset-0 bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              {secureImageUrl ? (
                <img
                  src={secureImageUrl}
                  alt={isRevealed ? `${album.artist} - ${album.title}` : 'Album cover'}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
                  style={getObscurationStyle()}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-600">
                  No Cover Art
                </div>
              )}
            </div>
          </div>

          {/* Overlay for unrevealed state */}
          {!isRevealed && (
            <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none z-10" />
          )}
        </div>
      </div>

      {/* Slot Info */}
      <div className="mt-3 text-center">
        <div className="text-sm text-gray-500 mb-1">
          Album {slot} · Difficulty {difficulty}
        </div>

        {isRevealed ? (
          <div className="space-y-1">
            <div className="font-bold text-lg">{album.artist}</div>
            <div className="text-gray-300">{album.title}</div>
            {album.year && (
              <div className="text-sm text-gray-500">
                {album.year}
                {album.country && ` · ${album.country}`}
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={onGuess}
            className="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            Locked
          </button>
        )}
      </div>
    </div>
  );
}