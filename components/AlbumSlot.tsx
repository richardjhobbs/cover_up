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
          transform: `scale(${1 + intensity / 100})`,
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
    <div className="album-slot">
      <div className="album-cover-container">
        {secureImageUrl ? (
          <img
            src={secureImageUrl}
            alt={isRevealed ? `${album.artist} - ${album.title}` : 'Album cover'}
            className="album-cover-image"
            style={getObscurationStyle()}
          />
        ) : (
          <div className="album-cover-placeholder">No Cover</div>
        )}
        {!isRevealed && <div className="album-cover-overlay" />}
      </div>

      <div className="album-info">
        <div className="album-meta">
          Album {slot} · Difficulty {difficulty}
        </div>

        {isRevealed ? (
          <div className="album-details">
            <div className="album-artist">{album.artist}</div>
            <div className="album-title">{album.title}</div>
          </div>
        ) : (
          <button onClick={onGuess} className="album-guess-button">
            Guess
          </button>
        )}
      </div>

      <style jsx>{`
        .album-slot {
          width: 100%;
        }

        .album-cover-container {
          position: relative;
          width: 100%;
          padding-bottom: 100%;
          background: #1a1a1a;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

        .album-cover-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .album-cover-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #2d2d2d;
          color: #666;
          font-size: 14px;
        }

        .album-cover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.2);
          pointer-events: none;
        }

        .album-info {
          margin-top: 8px;
          text-align: center;
        }

        .album-meta {
          font-size: 12px;
          color: #999;
        }

        .album-details {
          margin-top: 4px;
        }

        .album-artist {
          font-weight: 600;
          font-size: 14px;
          color: white;
        }

        .album-title {
          font-size: 12px;
          color: #999;
        }

        .album-guess-button {
          margin-top: 8px;
          padding: 4px 16px;
          font-size: 14px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .album-guess-button:hover {
          background: #1d4ed8;
        }
      `}</style>
    </div>
  );
}