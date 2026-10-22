import React from 'react';
import { OptionButton } from './OptionButton';

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer
}) {
  if (!question) return null;

  const difficultyColors = {
    easy: 'badge-success',
    medium: 'badge-warning',
    hard: 'badge-danger'
  };

  const badgeClass = difficultyColors[question.difficulty] || 'badge-primary';

  return (
    <article className="question-card" aria-labelledby="question-text">
      <div className="question-meta-row">
        <span className="question-counter-pill">
          Question {questionNumber} of {totalQuestions}
        </span>
        <span className={`badge ${badgeClass}`}>
          {question.difficulty.toUpperCase()}
        </span>
      </div>

      <h2 id="question-text" className="question-text">
        {question.question}
      </h2>

      <div className="options-list" role="radiogroup" aria-label="Answer options">
        {question.options.map((option, index) => (
          <OptionButton
            key={`${question.id}-opt-${index}`}
            option={option}
            index={index}
            isSelected={selectedAnswer === option}
            onSelect={onSelectAnswer}
          />
        ))}
      </div>
    </article>
  );
}

