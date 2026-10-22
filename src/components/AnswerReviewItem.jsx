import React from 'react';
import { CheckCircle2, XCircle, HelpCircle, Lightbulb } from 'lucide-react';

export function AnswerReviewItem({ item }) {
  const {
    questionNumber,
    question,
    options,
    userAnswer,
    correctAnswer,
    explanation,
    isCorrect,
    isUnanswered,
    difficulty,
    category
  } = item;

  let cardModifier = 'is-correct';
  if (isUnanswered) {
    cardModifier = 'is-unanswered';
  } else if (!isCorrect) {
    cardModifier = 'is-incorrect';
  }

  return (
    <div className={`review-item-card ${cardModifier}`}>
      <div className="review-item-top">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="question-counter-pill">
            Question {questionNumber}
          </span>
          <span className="badge badge-purple" style={{ textTransform: 'capitalize' }}>
            {category} &bull; {difficulty}
          </span>
        </div>

        {isCorrect && (
          <span className="review-status-pill badge-success">
            <CheckCircle2 size={15} /> Correct (+1)
          </span>
        )}
        {!isCorrect && !isUnanswered && (
          <span className="review-status-pill badge-danger">
            <XCircle size={15} /> Incorrect
          </span>
        )}
        {isUnanswered && (
          <span className="review-status-pill badge-warning">
            <HelpCircle size={15} /> Unanswered
          </span>
        )}
      </div>

      <h3 style={{ fontSize: '1.15rem', color: 'var(--text-heading)' }}>{question}</h3>

      <div className="review-options-grid">
        {options.map((opt, idx) => {
          const isThisCorrect = opt === correctAnswer;
          const isUserChoice = opt === userAnswer;

          let optionStyle = 'review-option';
          if (isThisCorrect) {
            optionStyle += ' correct-option';
          } else if (isUserChoice && !isCorrect) {
            optionStyle += ' user-wrong-option';
          }

          return (
            <div key={idx} className={optionStyle}>
              {isThisCorrect && <CheckCircle2 size={18} color="var(--color-success)" />}
              {isUserChoice && !isThisCorrect && <XCircle size={18} color="var(--color-danger)" />}
              {!isThisCorrect && !isUserChoice && (
                <div style={{ width: 18, height: 18, borderRadius: '50%', border: '1px solid var(--border-strong)' }} />
              )}
              <span style={{ flex: 1 }}>{opt}</span>
              {isThisCorrect && (
                <span className="badge badge-success" style={{ marginLeft: 'auto' }}>
                  Correct Answer
                </span>
              )}
              {isUserChoice && !isThisCorrect && (
                <span className="badge badge-danger" style={{ marginLeft: 'auto' }}>
                  Your Answer
                </span>
              )}
              {isUserChoice && isThisCorrect && (
                <span className="badge badge-success" style={{ marginLeft: 'auto' }}>
                  Your Choice
                </span>
              )}
            </div>
          );
        })}
      </div>

      {isUnanswered && (
        <div style={{ fontSize: '0.85rem', color: 'var(--color-warning-text)', fontWeight: 600 }}>
          You did not select an answer for this question.
        </div>
      )}

      {/* Educational Explanation Box */}
      {explanation && (
        <div className="explanation-box">
          <Lightbulb size={20} className="explanation-icon" />
          <div>
            <strong style={{ display: 'block', marginBottom: '2px', color: 'var(--primary-700)' }}>
              Explanation:
            </strong>
            <span>{explanation}</span>
          </div>
        </div>
      )}
    </div>
  );
}

