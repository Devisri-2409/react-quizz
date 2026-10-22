import React from 'react';
import { CheckCircle2, XCircle, HelpCircle, Clock, RotateCcw, BookOpen, Home } from 'lucide-react';

export function ScoreCard({
  results,
  onReviewAnswers,
  onRetryQuiz,
  onGoHome
}) {
  if (!results) return null;

  const {
    totalQuestions,
    correctCount,
    incorrectCount,
    unansweredCount,
    score,
    percentage,
    timeTakenFormatted,
    performance
  } = results;

  // SVG Circular progress calculation
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="results-container">
      <div className="score-hero-card">
        <span className="badge badge-purple" style={{ marginBottom: '8px' }}>
          {performance.badge}
        </span>
        <h2>{performance.title}</h2>
        <p style={{ maxWidth: '540px', marginTop: '6px' }}>{performance.message}</p>

        {/* SVG Circular Score Visualization */}
        <div className="score-circle-wrapper" aria-label={`Score percentage: ${percentage}%`}>
          <svg className="score-circle-svg" viewBox="0 0 160 160">
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#9333EA" />
              </linearGradient>
            </defs>
            <circle
              className="score-circle-bg"
              cx="80"
              cy="80"
              r={radius}
            />
            <circle
              className="score-circle-progress"
              cx="80"
              cy="80"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <div className="score-circle-inner">
            <span className="score-circle-percentage">{percentage}%</span>
            <span className="score-circle-label">{score} / {totalQuestions} Correct</span>
          </div>
        </div>

        {/* Breakdown Stats Grid */}
        <div className="results-stats-grid">
          <div className="result-stat-card">
            <CheckCircle2 size={22} color="var(--color-success)" />
            <span className="result-stat-val correct">{correctCount}</span>
            <span className="result-stat-lbl">Correct</span>
          </div>

          <div className="result-stat-card">
            <XCircle size={22} color="var(--color-danger)" />
            <span className="result-stat-val incorrect">{incorrectCount}</span>
            <span className="result-stat-lbl">Incorrect</span>
          </div>

          <div className="result-stat-card">
            <HelpCircle size={22} color="var(--color-warning)" />
            <span className="result-stat-val unanswered">{unansweredCount}</span>
            <span className="result-stat-lbl">Unanswered</span>
          </div>

          <div className="result-stat-card">
            <Clock size={22} color="var(--primary-600)" />
            <span className="result-stat-val time">{timeTakenFormatted}</span>
            <span className="result-stat-lbl">Time Taken</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="results-actions-card">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={onReviewAnswers}
        >
          <BookOpen size={18} />
          <span>Review Answers</span>
        </button>

        <button
          type="button"
          className="btn btn-secondary btn-lg"
          onClick={onRetryQuiz}
        >
          <RotateCcw size={18} />
          <span>Retry Quiz</span>
        </button>

        <button
          type="button"
          className="btn btn-outline btn-lg"
          onClick={onGoHome}
        >
          <Home size={18} />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
}

