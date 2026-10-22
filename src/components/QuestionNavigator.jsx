import React from 'react';

export function QuestionNavigator({
  questions,
  currentIndex,
  selectedAnswers,
  onSelectQuestion
}) {
  const answeredCount = questions.filter((q) => selectedAnswers[q.id] !== undefined).length;

  return (
    <aside className="navigator-card" aria-label="Question Navigator">
      <div className="navigator-header">
        <span>Question Navigator</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          {answeredCount}/{questions.length} answered
        </span>
      </div>

      <div className="navigator-grid" role="navigation" aria-label="Jump to question">
        {questions.map((q, idx) => {
          const isAnswered = selectedAnswers[q.id] !== undefined;
          const isCurrent = idx === currentIndex;

          let btnClass = 'nav-grid-btn';
          if (isCurrent) btnClass += ' current';
          if (isAnswered) btnClass += ' answered';
          else btnClass += ' unanswered';

          return (
            <button
              key={q.id}
              type="button"
              className={btnClass}
              onClick={() => onSelectQuestion(idx)}
              aria-label={`Go to question ${idx + 1}${isAnswered ? ' (Answered)' : ' (Not answered)'}${isCurrent ? ' (Current)' : ''}`}
              aria-current={isCurrent ? 'step' : undefined}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      <div className="navigator-legend">
        <div className="legend-item">
          <div className="legend-dot answered" />
          <span>Answered</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot unanswered" />
          <span>Unanswered</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot current" />
          <span>Current question</span>
        </div>
      </div>
    </aside>
  );
}

