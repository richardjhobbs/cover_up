export type ScoreGuessInput = {
  isCorrect: boolean;
  baseScore?: number;
};

export function scoreGuess({ isCorrect, baseScore = 100 }: ScoreGuessInput) {
  if (!isCorrect) {
    return 0;
  }

  return baseScore;
}
