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
  isHighlighted?: boolean;
  onCorrectGuess: (timeMs: number, guessText: string) => void;
  onTimeout?: () => void;
};

function normalizeForComparison(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/^the\s+/i, '')
    .replace(/^a\s+/i, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ');
}

function fuzzyMatch(guess: string, actual: string): boolean {
  const normalizedGuess = normalizeForComparison(guess);
  const normalizedActual = normalizeForComparison(actual);
  
  if (normalizedGuess === normalizedActual) return true;
  
  if (normalizedActual.includes(normalizedGuess) && normalizedGuess.length > 3) return true;
  
  const distance = levenshteinDistance(normalizedGuess, normalizedActual);
  const tolerance = Math.max(1, Math.floor(normalizedActual.length * 0.15));
  
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

function getRandomCorrectMessage(): string {
  const messages = [
    "Correct!",
    "Bang on!",
    "Boom!!!",
    "Yessss!",
    "You got it!",
    "Winner!"
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

export default function AlbumSlot({
  slot,
  difficulty,
  obscuration,
  album,
  isRevealed,
  isHighlighted = false,
  onCorrectGuess,
  onTimeout,
}: AlbumSlotProps) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showWrongGuess, setShowWrongGuess] = useState(false);
  const [localRevealed, setLocalRevealed] = useState(false);
  const [showGuessModal, setShowGuessModal] = useState(false);
  const [guessInput, setGuessInput] = useState('');
  const [timedOut, setTimedOut] = useState(false);
  const [correctMessage, setCorrectMessage] = useState('');
  const [showCorrectMessage, setShowCorrectMessage] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const onTimeoutRef = useRef(onTimeout);
  
  //Keep timeout ref updated
  useEffect(() => {
    onTimeoutRef.current = onTimeout;
  });

  // Load image with proxy
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    
   // Use direct cover art URLs (Cover Art Archive has CORS enabled)
if (album.cover_url) {
  img.src = album.cover_url;
} else {
  // Fallback to placeholder if no cover URL
      ctx.fillStyle = '#2a2a2a';
      ctx.fillRect(0, 0, 300, 300);
      ctx.fillStyle = '#666';
      ctx.font = '20px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('No Cover Available', 150, 150);
      return;
    }

    img.onload = () => {
      imageRef.current = img;
      drawPixelated();
    };

    img.onerror = () => {
      // Handle image load error with fallback
      ctx.fillStyle = '#2a2a2a';
      ctx.fillRect(0, 0, 300, 300);
      ctx.fillStyle = '#666';
      ctx.font = '20px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Image Unavailable', 150, 150);
    };
  }, [album.cover_url]);

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

  useEffect(() => {
    drawPixelated();
  }, [elapsedTime, localRevealed]);

  useEffect(() => {
    if (showGuessModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showGuessModal]);

  // Timeout after 21 seconds
  useEffect(() => {
    if (elapsedTime >= 21000 && !localRevealed && !timedOut) {
      setTimedOut(true);
      setTimerStarted(false);
      setShowGuessModal(false);
      
      // Notify parent of timeout using ref
      if (onTimeoutRef.current) {
        onTimeoutRef.current();
      }
    }
  }, [elapsedTime, localRevealed, timedOut]);

  const drawPixelated = () => {
    if (!canvasRef.current || !imageRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 300;
    canvas.width = size;
    canvas.height = size;

    let pixelSize = 25;
    if (localRevealed || elapsedTime >= 21000) {
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(imageRef.current, 0, 0, size, size);
      return;
    } else if (elapsedTime >= 14000) {
      pixelSize = 70;
    } else if (elapsedTime >= 7000) {
      pixelSize = 45;
    } else {
      pixelSize = 25;
    }

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(imageRef.current, 0, 0, pixelSize, pixelSize);
    ctx.drawImage(canvas, 0, 0, pixelSize, pixelSize, 0, 0, size, size);
  };

  const handleClick = () => {
    if (localRevealed || timedOut) return;
    
    if (!timerStarted) {
      setTimerStarted(true);
      setTimeout(() => setShowGuessModal(true), 100);
    } else {
      setShowGuessModal(true);
    }
  };

  const handleSubmitGuess = () => {
    const isCorrect = fuzzyMatch(guessInput, album.artist);

    if (isCorrect) {
      setLocalRevealed(true);
      setShowGuessModal(false);
      const message = getRandomCorrectMessage();
      setCorrectMessage(message);
      setShowCorrectMessage(true);
      setTimeout(() => setShowCorrectMessage(false), 2000);
      onCorrectGuess(elapsedTime, guessInput);
      setGuessInput('');
    } else {
      // Keep modal open, show wrong feedback, clear input
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
        <div 
          className={`album-cover-container ${isHighlighted ? 'highlighted' : ''}`}
          onClick={handleClick}
          data-slot={slot}
        >
          <canvas ref={canvasRef} className="album-canvas" />

          {showWrongGuess && (
            <div className="wrong-guess-overlay">
              <div className="red-x">✕</div>
            </div>
          )}

          {showCorrectMessage && (
            <div className="correct-overlay">
              <div className="correct-message">{correctMessage}</div>
            </div>
          )}

          {timedOut && !localRevealed && (
            <div className="timeout-overlay">
              <div className="timeout-content">
                <div className="timeout-text">Time&apos;s Up!</div>
                <div className="timeout-artist">{album.artist}</div>
                <div className="timeout-title">{album.title}</div>
              </div>
            </div>
          )}

          {!timerStarted && !timedOut && (
            <div className="click-overlay">
              <div className="click-text">Click to Start</div>
            </div>
          )}
        </div>

        <div className="album-info">
          <div className="album-meta">
            Album {slot}
            {timerStarted && !localRevealed && !timedOut && (
              <span> • {Math.floor(elapsedTime / 1000)}s</span>
            )}
            {timedOut && <span className="timeout-label"> • Timeout</span>}
          </div>

          {localRevealed && (
            <div className="album-details">
              <div className="album-artist">{album.artist}</div>
              <div className="album-title">{album.title}</div>
            </div>
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

          .album-cover-container:hover {
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
          }

          .album-cover-container.highlighted {
            box-shadow: 0 0 0 4px #2563eb, 0 6px 12px rgba(37, 99, 235, 0.5);
            animation: pulse 1.5s ease-in-out infinite;
          }

          @keyframes pulse {
            0%, 100% {
              box-shadow: 0 0 0 4px #2563eb, 0 6px 12px rgba(37, 99, 235, 0.5);
            }
            50% {
              box-shadow: 0 0 0 4px #3b82f6, 0 6px 16px rgba(59, 130, 246, 0.7);
            }
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

          .correct-overlay {
            position: absolute;
            inset: 0;
            background: rgba(34, 197, 94, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeOut 2s forwards;
            pointer-events: none;
          }

          .correct-message {
            font-size: 48px;
            color: #22c55e;
            font-weight: bold;
            text-shadow: 0 0 20px rgba(34, 197, 94, 0.8);
            animation: bounce 0.5s ease;
          }

          @keyframes bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }

          .timeout-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
          }

          .timeout-content {
            text-align: center;
            padding: 20px;
          }

          .timeout-text {
            color: #ff6b6b;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 16px;
          }

          .timeout-artist {
            color: white;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 4px;
          }

          .timeout-title {
            color: #999;
            font-size: 14px;
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

          .timeout-label {
            color: #ff6b6b;
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
        `}</style>
      </div>

      {showGuessModal && (
        <div className="modal-container">
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}