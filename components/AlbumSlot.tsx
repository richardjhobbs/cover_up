'use client';

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
  
  const getObscurationStyle = () => {
    if (isRevealed) return {};

    const { type = 'blur', intensity = 50 } = obscuration;

    switch (type) {
      case 'blur':
        // Divides intensity to provide a playable blur level
        return { filter: `blur(${intensity / 5}px)` };
      case 'grayscale':
        return { filter: `grayscale(${intensity}%) blur(2px)` };
      case 'crop':
        // Zooms in significantly to show only a texture/detail
        return { 
          transform: `scale(${1 + intensity / 10})`, 
          filter: 'blur(0px)',
          objectPosition: 'center' 
        };
      default:
        return {};
    }
  };

  return (
    <div className="relative aspect-square w-full max-w-sm mx-auto">
      {/* Album Cover Container */}
      <div className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800">
        {album.cover_url ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={album.cover_url}
              alt={isRevealed ? `${album.artist} - ${album.title}` : 'Album cover'}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              style={getObscurationStyle()}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-600">
            No Cover Art
          </div>
        )}

        {/* Subtle overlay for unrevealed state to improve contrast */}
        {!isRevealed && (
          <div className="absolute inset-0 bg-black bg-opacity-10 pointer-events-none" />
        )}
      </div>

      {/* Slot Info & Interaction Area */}
      <div className="mt-3 text-center">
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
          Slot {slot} — {isRevealed ? 'Solved' : `Level ${difficulty}`}
        </div>

        {isRevealed ? (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="font-bold text-lg text-white truncate">{album.artist}</div>
            <div className="text-gray-400 truncate">{album.title}</div>
            {album.year && (
              <div className="text-xs text-gray-600 mt-1">
                {album.year} {album.country ? `· ${album.country}` : ''}
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={onGuess}
            className="mt-2 w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-md transition-all active:scale-95"
          >
            GUESS
          </button>
        )}
      </div>
    </div>
  );
}