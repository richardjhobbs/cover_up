'use client';

import { useEffect, useRef, useState } from 'react';

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

function normalizeForComparison(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/^the\s+/i, '') // Remove leading "The"
    .replace(/^a\s+/i, '')   // Remove leading "A"
    .replace(/[^a-z0-9\s]/g, '') // Remove special characters
    .replace(/\s+/g, ' '); // Normalize whitespace
}

function fuzzyMatch(guess: string, actual: string): boolean {
  const normalizedGuess = normalizeForComparison(guess);
  const normalizedActual = normalizeForComparison(actual);
  
  // Exact match after normalization
  if (normalizedGuess === normalizedActual) return true;
  
  // Check if guess is contained in actual (for partial matches)
  if (normalizedActual.includes(normalizedGuess) && normalizedGuess.length > 3) return true;
  
  // Levenshtein distance for typos (allow 1-2 character difference)
  const distance = levenshteinDistance(normalizedGuess, normalizedActual);
  const tolerance = Math.max(1, Math.floor(normalizedActual.length * 0.15)); // 15% tolerance
  
  return distance <= tolerance;
}

function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

export default function AlbumSlot({
  slot,
  difficulty,
  obscuration,
  album,
  isRevealed,
  onGuess,
}: AlbumSlotProps) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showWrongGuess, setShowWrongGuess] = useState(false);
  const [localRevealed, setLocalRevealed] = useState(false);
  const [showGuessModal, setShowGuessModal] = useState(false);
  const [guessInput, setGuessInput] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load image
  useEffect(() => {
    if (!album.cover_url) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      imageRef.current = img;
      drawPixelated();
    };
    img.src = album.cover_url.replace('http://', 'https://');
  }, [album.cover_url]);

  // Timer logic
  useEffect(() => {
    if (!timerStarted || localRevealed) return;

    const interval = setInterval(() => {
      setElapsedTime((prev) => {
        const next = prev + 100;
        if (next >= 21000) {
          return 21000;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [timerStarted, localRevealed]);

  // Redraw when time changes
  useEffect(() => {
    drawPixelated();
  }, [elapsedTime, localRevealed]);

  // Focus input when modal opens
  useEffect(() => {
    if (showGuessModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showGuessModal]);

  const drawPixelated = () => {
    if (!canvasRef.current || !imageRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 300;
    canvas.width = size;
    canvas.height = size;

    let pixelSize = 10;
    if (localRevealed || elapsedTime >= 21000) {
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(imageRef.current, 0, 0, size, size);
      return;
    } else if (elapsedTime >= 14000) {
      pixelSize = 50;
    } else if (elapsedTime >= 7000) {
      pixelSize = 25;
    } else {
      pixelSize = 10;
    }

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(imageRef.current, 0, 0, pixelSize, pixelSize);
    ctx.drawImage(canvas, 0, 0, pixelSize, pixelSize, 0, 0, size, size);
  };

  const handleClick = () => {
    if (!timerStarted) {
      setTimerStarted(true);
    }
  };

  const handleGuessClick = () => {
    setShowGuessModal(true);
  };

  const handleSubmitGuess = () => {
    const isCorrect = fuzzyMatch(guessInput, album.artist);

    if (isCorrect) {
      setLocalRevealed(true);
      setShowGuessModal(false);
      setGuessInput('');
      onGuess();
    } else {
      setShowGuessModal(false);
      setGuessInput('');
      setShowWrongGuess(true);
      setTimeout(() => setShowWrongGuess(false), 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmitGuess();
    }
  };

  return (
    <>
      <div className="album-slot">
        <div className="album-cover-container" onClick={handleClick}>
          <canvas ref={canvasRef} className="album-canvas" />

          {showWrongGuess && (
            <div className="wrong-guess-overlay">
              <div className="red-x">✕</div>
            </div>
          )}

          {!timerStarted && (
            <div className="click-overlay">
              <div className="click-text">Click to Start</div>
            </div>
          )}
        </div>

        <div className="album-info">
          <div className="album-meta">
            Album {slot}
            {timerStarted && !localRevealed && (
              <span> • {Math.floor(elapsedTime / 1000)}s</span>
            )}
          </div>

          {localRevealed ? (
            <div className="album-details">
              <div className="album-artist">{album.artist}</div>
              <div className="album-title">{album.title}</div>
            </div>
          ) : (
            timerStarted && (
              <button onClick={handleGuessClick} className="album-guess-button">
                Guess
              </button>
            )
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
            cursor: pointer;
          }

          .album-canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            image-rendering: pixelated;
            transition: filter 0.5s ease;
          }

          .click-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.3s;
          }

          .click-overlay:hover {
            background: rgba(0, 0, 0, 0.6);
          }

          .click-text {
            color: white;
            font-size: 16px;
            font-weight: 600;
          }

          .wrong-guess-overlay {
            position: absolute;
            inset: 0;
            background: rgba(255, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeOut 1s forwards;
            pointer-events: none;
          }

          .red-x {
            font-size: 80px;
            color: #ff0000;
            font-weight: bold;
            text-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
          }

          @keyframes fadeOut {
            0% {
              opacity: 1;
            }
            70% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
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

      {showGuessModal && (
        <div className="modal-overlay" onClick={() => setShowGuessModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Who is this?</h2>
            <input
              ref={inputRef}
              type="text"
              value={guessInput}
              onChange={(e) => setGuessInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter artist name..."
              className="modal-input"
            />
            <div className="modal-buttons">
              <button onClick={handleSubmitGuess} className="modal-submit">
                Submit
              </button>
              <button
                onClick={() => {
                  setShowGuessModal(false);
                  setGuessInput('');
                }}
                className="modal-cancel"
              >
                Cancel
              </button>
            </div>
          </div>

          <style jsx>{`
            .modal-overlay {
              position: fixed;
              inset: 0;
              background: rgba(0, 0, 0, 0.8);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 1000;
            }

            .modal-content {
              background: #1a1a1a;
              border-radius: 12px;
              padding: 32px;
              max-width: 400px;
              width: 90%;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            }

            .modal-title {
              color: white;
              font-size: 24px;
              font-weight: 600;
              margin: 0 0 24px 0;
              text-align: center;
            }

            .modal-input {
              width: 100%;
              padding: 12px 16px;
              font-size: 16px;
              background: #2a2a2a;
              border: 2px solid #3a3a3a;
              border-radius: 8px;
              color: white;
              outline: none;
              transition: border-color 0.2s;
              box-sizing: border-box;
            }

            .modal-input:focus {
              border-color: #2563eb;
            }

            .modal-input::placeholder {
              color: #666;
            }

            .modal-buttons {
              display: flex;
              gap: 12px;
              margin-top: 24px;
            }

            .modal-submit,
            .modal-cancel {
              flex: 1;
              padding: 12px 24px;
              font-size: 16px;
              font-weight: 600;
              border: none;
              border-radius: 8px;
              cursor: pointer;
              transition: all 0.2s;
            }

            .modal-submit {
              background: #2563eb;
              color: white;
            }

            .modal-submit:hover {
              background: #1d4ed8;
            }

            .modal-cancel {
              background: #3a3a3a;
              color: #999;
            }

            .modal-cancel:hover {
              background: #4a4a4a;
              color: white;
            }
          `}</style>
        </div>
      )}
    </>
  );
}