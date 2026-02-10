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
    if (isRevealed) return { filter: 'none', transform: 'scale(1)' };

    const { type = 'blur', intensity = 50 } = obscuration;

    switch (type) {
      case 'blur':
        return { filter: `blur(${intensity / 5}px)` };
      case 'grayscale':
        return { filter: `grayscale(${intensity}%) blur(2px)` };
      case 'crop':
        // Scale is strictly contained by the parent overflow-hidden
        return { 
          transform: `scale(${1 + intensity / 15})`, 
          filter: 'none',
          objectPosition: 'center' 
        };
      default:
        return {};
    }
  };

  return (
    <div className="flex flex-col w-full max-w-[280px] mx-auto">
      {/* 1. FIXED ASPECT RATIO CONTAINER */}
      <div className="relative aspect-square w-full bg-gray-900 rounded-lg shadow-2xl border-2 border-gray-800 overflow-hidden">
        
        {album.cover_url ? (
          /* 2. INNER BOUNDARY BOX - This prevents the image from overfilling the screen */
          <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={album.cover_url}
              alt="Album cover"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out pointer-events-none"
              style={getObscurationStyle()}
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-700 text-xs font-bold uppercase">
            Missing Art
          </div>
        )}

        {/* Interaction Overlay */}
        {!isRevealed && (
          <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300" />
        )}
      </div>

      {/* Consistent Info Area */}
      <div className="h-24 mt-4 flex flex-col items-center justify-start text-center">
        <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-2">
          Slot {slot}
        </span>

        {isRevealed ? (
          <div className="w-full animate-in fade-in zoom-in-95 duration-500">
            <h3 className="text-sm font-bold text-white truncate w-full px-2">{album.artist}</h3>
            <p className="text-xs text-gray-400 truncate w-full px-2">{album.title}</p>
          </div>
        ) : (
          <button
            onClick={onGuess}
            className="px-8 py-2 bg-white text-black text-[11px] font-black uppercase tracking-widest rounded hover:bg-blue-500 hover:text-white transition-all transform active:scale-90"
          >
            Guess
          </button>
        )}
      </div>
    </div>
  );
}