import React from 'react';
import { useQuiz } from './hooks/useQuiz';
import { categories } from './data/categories';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConfirmDialog } from './components/ConfirmDialog';
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';
import { Results } from './pages/Results';
import { ReviewAnswers } from './pages/ReviewAnswers';

export default function App() {
  const {
    // Configuration
    categoryId,
    setCategoryId,
    difficulty,
    setDifficulty,
    requestedCount,
    setRequestedCount,
    availableQuestionCount,

    // Quiz Session
    quizStatus,
    activeQuestions,
    currentQuestion,
    currentIndex,
    selectedAnswers,
    totalTime,
    timeRemaining,
    results,

    // Confirm Dialog Modal
    confirmDialog,
    closeConfirmDialog,

    // Actions
    startQuiz,
    retryQuiz,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    requestSubmit,
    requestQuit,
    goToReview,
    goBackToResults,
    goHome
  } = useQuiz();

  const selectedCategoryObj = categories.find((c) => c.id === categoryId) || categories[0];

  const handleBrandClick = () => {
    if (quizStatus === 'active') {
      requestQuit();
    } else {
      goHome();
    }
  };

  return (
    <div className="app-layout">
      {/* Persistent Navigation Bar */}
      <Navbar
        quizStatus={quizStatus}
        currentQuestionNumber={currentIndex + 1}
        totalQuestions={activeQuestions.length}
        onBrandClick={handleBrandClick}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {quizStatus === 'home' && (
          <Home
            categoryId={categoryId}
            onSelectCategory={setCategoryId}
            difficulty={difficulty}
            onSelectDifficulty={setDifficulty}
            requestedCount={requestedCount}
            onSelectCount={setRequestedCount}
            availableCount={availableQuestionCount}
            onStartQuiz={startQuiz}
          />
        )}

        {quizStatus === 'active' && (
          <Quiz
            questions={activeQuestions}
            currentQuestion={currentQuestion}
            currentIndex={currentIndex}
            selectedAnswers={selectedAnswers}
            onSelectAnswer={selectAnswer}
            onNext={nextQuestion}
            onPrev={prevQuestion}
            onGoToQuestion={goToQuestion}
            onSubmit={requestSubmit}
            timeRemaining={timeRemaining}
            totalTime={totalTime}
            categoryName={selectedCategoryObj.name}
          />
        )}

        {quizStatus === 'results' && (
          <Results
            results={results}
            onReviewAnswers={goToReview}
            onRetryQuiz={retryQuiz}
            onGoHome={goHome}
          />
        )}

        {quizStatus === 'review' && (
          <ReviewAnswers
            results={results}
            onBackToResults={goBackToResults}
            onRetryQuiz={retryQuiz}
            onGoHome={goHome}
          />
        )}
      </main>

      {/* Global Confirmation Modal */}
      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        title={confirmDialog.title}
        message={confirmDialog.message}
        confirmLabel={confirmDialog.confirmLabel}
        cancelLabel={confirmDialog.cancelLabel}
        type={confirmDialog.type}
        onConfirm={confirmDialog.onConfirm}
        onCancel={closeConfirmDialog}
      />

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}
