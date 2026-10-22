import React from 'react';
import { ArrowLeft, ArrowRight, Send, AlertCircle } from 'lucide-react';
import { QuestionCard } from '../components/QuestionCard';
import { ProgressBar } from '../components/ProgressBar';
import { Timer } from '../components/Timer';
import { QuestionNavigator } from '../components/QuestionNavigator';

export function Quiz({
  questions,
  currentQuestion,
  currentIndex,
  selectedAnswers,
  onSelectAnswer,
  onNext,
  onPrev,
  onGoToQuestion,
  onSubmit,
  timeRemaining,
  totalTime,
  categoryName
}) {
  if (!questions || questions.length === 0 || !currentQuestion) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <AlertCircle size={48} color="var(--color-danger)" style={{ marginBottom: '1rem' }} />
        <h2>No questions loaded</h2>
        <p>There was an issue loading the quiz questions. Please return to the home screen.</p>
      </div>
    );
  }

  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === questions.length - 1;
  const currentAnswer = selectedAnswers[currentQuestion.id];

  return (
    <div className="quiz-screen-layout">
      {/* Main Column */}
      <div className="quiz-main-panel">
        {/* Top Header Card */}
        <div className="quiz-header-card">
          <div className="quiz-category-info">
            <span className="quiz-category-badge">{categoryName}</span>
          </div>

          <Timer timeRemaining={timeRemaining} totalTime={totalTime} />
        </div>

        {/* Progress Bar */}
        <ProgressBar
          current={currentIndex + 1}
          total={questions.length}
        />

        {/* Current Question Card */}
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          selectedAnswer={currentAnswer}
          onSelectAnswer={(answer) => onSelectAnswer(currentQuestion.id, answer)}
        />

        {/* Navigation / Action Buttons */}
        <div className="quiz-controls-row">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onPrev}
            disabled={isFirstQuestion}
            aria-label="Previous question"
          >
            <ArrowLeft size={18} />
            <span>Previous</span>
          </button>

          <div style={{ display: 'flex', gap: '10px' }}>
            {!isLastQuestion ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={onNext}
                aria-label="Next question"
              >
                <span>Next</span>
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={onSubmit}
                style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}
                aria-label="Submit Quiz"
              >
                <Send size={18} />
                <span>Submit Quiz</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar Panel: Question Navigator */}
      <div className="quiz-sidebar-panel">
        <QuestionNavigator
          questions={questions}
          currentIndex={currentIndex}
          selectedAnswers={selectedAnswers}
          onSelectQuestion={onGoToQuestion}
        />

        {/* Quick Submit in sidebar for convenience anytime */}
        <button
          type="button"
          className="btn btn-outline"
          onClick={onSubmit}
          style={{ width: '100%', borderColor: 'var(--primary-300)', color: 'var(--primary-700)' }}
        >
          <Send size={16} />
          <span>Finish &amp; Submit</span>
        </button>
      </div>
    </div>
  );
}

