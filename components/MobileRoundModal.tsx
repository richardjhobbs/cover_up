// Mobile round modal - cycles through 5 albums
// NO game logic - just displays albums and calls parent callbacks
'use client';

import { useState, useEffect, useRef } from 'react';

type Album = {
  slot: number;
  albumId: number;
  artist: string;
  title: string;
  year: number | null;
  coverUrl: string | null; // Changed from string to string | null
};

type MobileRoundModalProps = {
  albums: Album[];
  completedAlbums: Set<number>;
  timedOutAlbums: Set<number>;
  onCorrectGuess: (slot: number, timeMs: number, guessText: string, albumId: number) => void;
  onTimeout: (slot: number) => void;
  onComplete: () => void;
};

export default function MobileRoundModal({
  albums,
  completedAlbums,
  timedOutAlbums,
  onCorrectGuess,
  onTimeout,
  onComplete,
}: MobileRoundModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guess, setGuess] = useState('');
  const [timeLeft, setTimeLeft] = useState(21);
  const [pixelLevel, setPixelLevel] = useState(0);
  const [showingResult, setShowingResult] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const hasCalledComplete = useRef<boolean>(false);
  
  const currentAlbum = albums[currentIndex];
  const isCompleted = currentAlbum ? completedAlbums.has(currentAlbum.slot) : false;
  const isTimedOut = currentAlbum ? timedOutAlbums.has(currentAlbum.slot) : false;
  const isRevealed = isCompleted || isTimedOut;
  
  // Check if round is complete (all 5 albums attempted)
  const totalAttempted = completedAlbums.size + timedOutAlbums.size;
  const roundComplete = totalAttempted === 5;
  
  // Watch for round completion
  useEffect(() => {
    if (roundComplete && !hasCalledComplete.current) {
      // Wait a moment for last result to be visible
      setTimeout(() => {
        hasCalledComplete.current = true;
        onComplete();
      }, 2000);
    }
  }, [roundComplete, onComplete]);
  
  // Load image when album changes
  useEffect(() => {
    if (!currentAlbum || !canvasRef.current) return;
    
    // Reset completion flag when starting first album of round
    if (currentIndex === 0) {
      hasCalledComplete.current = false;
    }
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    setGuess('');
    setTimeLeft(21);
    setPixelLevel(0);
    startTimeRef.current = Date.now();
    
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = currentAlbum.coverUrl || '';
    
    img.onload = () => {
      imageRef.current = img;
      canvas.width = img.width;
      canvas.height = img.height;
      drawPixelated(ctx, img, 0);
      startTimer();
    };
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);
  
  // Timer
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 1;
        
        if (newTime <= 0) {
          if (timerRef.current) clearInterval(timerRef.current);
          onTimeout(currentAlbum.slot);
          // Don't advance here - wait for parent to update timedOutAlbums
          return 0;
        }
        
        // Pixelation: 0-6s = level 0 (heavy), 7-13s = level 1, 14-21s = level 2 (clear)
        const elapsed = 21 - newTime;
        let newLevel = 0;
        if (elapsed >= 7 && elapsed < 14) newLevel = 1;
        if (elapsed >= 14) newLevel = 2;
        
        if (newLevel !== pixelLevel && canvasRef.current && imageRef.current) {
          setPixelLevel(newLevel);
          const ctx = canvasRef.current.getContext('2d');
          if (ctx) drawPixelated(ctx, imageRef.current, newLevel);
        }
        
        return newTime;
      });
    }, 1000);
  };
  
  const drawPixelated = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, level: number) => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    // FIXED: Larger numbers = LESS pixelated (to match desktop)
    // Desktop uses: 25 (heavy) → 45 (medium) → 70 (clear)
    // Mobile uses: 25 (heavy) → 45 (medium) → 70 (clear)
    const pixelSizes = [25, 45, 70]; // level 0 = heavy, level 1 = medium, level 2 = clear
    const pixelSize = pixelSizes[level] || 25;
    
    const w = img.width;
    const h = img.height;
    
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, w, h);
    // Draw small then scale up = pixelation effect
    ctx.drawImage(img, 0, 0, pixelSize, pixelSize);
    ctx.drawImage(canvas, 0, 0, pixelSize, pixelSize, 0, 0, w, h);
  };
  
  const handleSubmit = () => {
    if (!guess.trim() || isRevealed) return;
    
    const timeMs = Date.now() - startTimeRef.current;
    const submittedGuess = guess;
    
    // Clear input immediately
    setGuess('');
    
    // DON'T stop the timer - let it keep running for retry
    // Parent will update completedAlbums if correct
    onCorrectGuess(currentAlbum.slot, timeMs, submittedGuess, currentAlbum.albumId);
  };
  
  // Watch for correct guess from parent
  useEffect(() => {
    if (isCompleted && !showingResult) {
      // Stop timer
      if (timerRef.current) clearInterval(timerRef.current);
      
      // Reveal image
      if (imageRef.current && canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          ctx.drawImage(imageRef.current, 0, 0);
        }
      }
      
      setShowingResult(true);
      
      // Advance to next album after showing result
      setTimeout(() => {
        if (currentIndex < albums.length - 1) {
          setCurrentIndex(prev => prev + 1);
          setShowingResult(false);
        }
      }, 2000);
    }
  }, [isCompleted, currentIndex, albums.length, showingResult]);
  
  // Watch for timeout from parent
  useEffect(() => {
    if (isTimedOut && !showingResult) {
      // Stop timer
      if (timerRef.current) clearInterval(timerRef.current);
      
      // Reveal image
      if (imageRef.current && canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          ctx.drawImage(imageRef.current, 0, 0);
        }
      }
      
      setShowingResult(true);
      
      // Advance to next album after showing result
      setTimeout(() => {
        if (currentIndex < albums.length - 1) {
          setCurrentIndex(prev => prev + 1);
          setShowingResult(false);
        }
      }, 2000);
    }
  }, [isTimedOut, currentIndex, albums.length, showingResult]);
  
  return (
    <div className="mobile-round-modal">
      <div className="mobile-modal-content">
        
        {/* Progress */}
        <div className="mobile-progress">
          Album {currentIndex + 1} of 5
        </div>
        
        {/* Album cover */}
        <div className="mobile-album-display">
          <canvas 
            ref={canvasRef} 
            style={{ 
              width: '100%', 
              height: 'auto', 
              display: 'block',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }} 
          />
          
          {isRevealed && (
            <div className="mobile-reveal-info">
              <div className="mobile-artist">{currentAlbum.artist}</div>
              <div className="mobile-album-title">{currentAlbum.title}</div>
            </div>
          )}
        </div>
        
        {/* Input - only when not revealed */}
        {!isRevealed && (
          <div className="mobile-input-section">
            <div className="mobile-chalkboard">
              <h3>WHO IS THIS?</h3>
              <input
                type="text"
                className="mobile-guess-input"
                placeholder="Enter artist name..."
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                autoFocus
              />
              <button onClick={handleSubmit} className="mobile-submit-button">
                SUBMIT
              </button>
              <div className="mobile-timer">
                Time: {timeLeft}s
              </div>
            </div>
          </div>
        )}
        
        {/* Progress dots */}
        <div className="mobile-dots">
          {albums.map((album, idx) => (
            <div
              key={album.slot}
              className={`mobile-dot ${
                completedAlbums.has(album.slot) ? 'completed' : ''
              } ${
                timedOutAlbums.has(album.slot) ? 'timeout' : ''
              } ${
                idx === currentIndex ? 'active' : ''
              }`}
            >
              {idx + 1}
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}