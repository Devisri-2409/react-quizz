import React from 'react';
import { ScoreCard } from '../components/ScoreCard';

export function Results({ results, onReviewAnswers, onRetryQuiz, onGoHome }) {
  return (
    <ScoreCard
      results={results}
      onReviewAnswers={onReviewAnswers}
      onRetryQuiz={onRetryQuiz}
      onGoHome={onGoHome}
    />
  );
}

