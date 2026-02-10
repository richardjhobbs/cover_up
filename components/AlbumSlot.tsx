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
        return {
          transform: `scale(${1 + intensity / 10})`,
          transformOrigin: 'center center',
        };
      default:
        return {};
    }
  };

  const secureImageUrl = album.cover_url
    ? album.cover_url.replace('http://', 'https://')
    : null;

  return (
   <div className="w-full">
  {/* Force square container using padding-bottom technique */}
  <div className="relative w-full pb-[100%] bg-gray-900 rounded-lg shadow-lg overflow-hidden">
    {secureImageUrl ? (
      <img
        src={secureImageUrl}
        alt={isRevealed ? `${album.artist} - ${album.title}` : 'Album cover'}
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={getObscurationStyle()}
      />
    ) : (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-600 text-sm">
        No Cover
      </div>
    )}

    {!isRevealed && (
      <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none" />
    )}
  </div>
  {/* rest of the component... */}

      {/* Info below */}
      <div className="mt-2 text-center">
        <div className="text-xs text-gray-500">
          Album {slot} · Difficulty {difficulty}
        </div>

        {isRevealed ? (
          <div className="mt-1">
            <div className="font-semibold text-sm">{album.artist}</div>
            <div className="text-xs text-gray-400">{album.title}</div>
          </div>
        ) : (
          <button
            onClick={onGuess}
            className="mt-2 px-4 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
          >
            Guess
          </button>
        )}
      </div>
    </div>
  );
}