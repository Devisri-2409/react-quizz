import React, { useState } from 'react';
import { ArrowLeft, RotateCcw, Home, Filter } from 'lucide-react';
import { AnswerReviewItem } from '../components/AnswerReviewItem';

export function ReviewAnswers({
  results,
  onBackToResults,
  onRetryQuiz,
  onGoHome
}) {
  const [filterType, setFilterType] = useState('all'); // 'all', 'correct', 'incorrect', 'unanswered'

  if (!results || !results.reviewList) {
    return null;
  }

  const { reviewList, score, totalQuestions, percentage } = results;

  const filteredItems = reviewList.filter((item) => {
    if (filterType === 'correct') return item.isCorrect;
    if (filterType === 'incorrect') return !item.isCorrect && !item.isUnanswered;
    if (filterType === 'unanswered') return item.isUnanswered;
    return true;
  });

  return (
    <div className="review-container">
      {/* Review Header Bar */}
      <div className="review-header-bar">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <h2>Answer Review</h2>
            <span className="badge badge-primary">
              {score} / {totalQuestions} ({percentage}%)
            </span>
          </div>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            Review your answers, verify correct choices, and learn from in-depth explanations.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onBackToResults}
          >
            <ArrowLeft size={16} />
            <span>Results</span>
          </button>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={onRetryQuiz}
          >
            <RotateCcw size={16} />
            <span>Retry</span>
          </button>

          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={onGoHome}
          >
            <Home size={16} />
            <span>Home</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Filter size={14} /> Filter:
        </span>
        {[
          { id: 'all', label: `All (${totalQuestions})` },
          { id: 'correct', label: `Correct (${results.correctCount})` },
          { id: 'incorrect', label: `Incorrect (${results.incorrectCount})` },
          { id: 'unanswered', label: `Unanswered (${results.unansweredCount})` }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`btn btn-sm ${filterType === tab.id ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setFilterType(tab.id)}
            style={{ borderRadius: 'var(--radius-full)' }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Review List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {filteredItems.map((item) => (
          <AnswerReviewItem key={item.id} item={item} />
        ))}

        {filteredItems.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', background: '#FFFFFF', borderRadius: 'var(--radius-lg)' }}>
            <p>No questions match the current filter.</p>
          </div>
        )}
      </div>

      {/* Bottom Back Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-4)' }}>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          onClick={onBackToResults}
        >
          <ArrowLeft size={18} />
          <span>Back to Results</span>
        </button>
      </div>
    </div>
  );
}

