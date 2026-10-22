import React from 'react';
import { Play, Sparkles, Clock, ShieldCheck, HelpCircle, Trophy } from 'lucide-react';
import { categories } from '../data/categories';
import { CategoryCard } from '../components/CategoryCard';
import { DifficultySelector } from '../components/DifficultySelector';
import { questions as allQuestions } from '../data/questions';

export function Home({
  categoryId,
  onSelectCategory,
  difficulty,
  onSelectDifficulty,
  requestedCount,
  onSelectCount,
  availableCount,
  onStartQuiz
}) {
  const selectedCategoryObj = categories.find((c) => c.id === categoryId) || categories[0];
  const estimatedMinutes = requestedCount * 1; // 1 min per question

  return (
    <div className="home-container">
      {/* Hero Welcome */}
      <section className="hero-section">
        <div className="hero-pill">
          <Sparkles size={16} />
          <span>Interactive Student Quiz Platform</span>
        </div>
        <h1 className="hero-title">
          Master Tech Skills with <span className="hero-title-highlight">QuizMaster</span>
        </h1>
        <p className="hero-subtitle">
          Test your programming and computer science knowledge through interactive quizzes with real-time feedback, detailed explanations, and instant score analysis.
        </p>
      </section>

      {/* Main Quiz Setup Panel */}
      <section className="setup-panel">
        {/* Step 1: Category Selection */}
        <div className="section-label">
          <span className="section-label-number">1</span>
          <span>Choose a Topic Category</span>
        </div>
        <div className="categories-grid">
          {categories.map((category) => {
            const countForCat = allQuestions.filter((q) => q.category === category.id).length;
            return (
              <CategoryCard
                key={category.id}
                category={category}
                isSelected={categoryId === category.id}
                onSelect={onSelectCategory}
                questionCount={countForCat}
              />
            );
          })}
        </div>

        {/* Step 2: Difficulty & Question Count */}
        <div className="section-label">
          <span className="section-label-number">2</span>
          <span>Configure Quiz Parameters</span>
        </div>
        <DifficultySelector
          difficulty={difficulty}
          onDifficultyChange={onSelectDifficulty}
          requestedCount={requestedCount}
          onCountChange={onSelectCount}
          availableCount={availableCount}
        />

        {/* Quiz Overview Banner */}
        <div className="quiz-summary-banner">
          <div className="summary-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <HelpCircle size={20} />
              </div>
              <div>
                <div className="stat-title">Selected Topic</div>
                <div className="stat-value">{selectedCategoryObj.name}</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <Clock size={20} />
              </div>
              <div>
                <div className="stat-title">Time Limit</div>
                <div className="stat-value">{requestedCount} Mins ({estimatedMinutes * 60}s)</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <Trophy size={20} />
              </div>
              <div>
                <div className="stat-title">Total Questions</div>
                <div className="stat-value">{requestedCount} Questions</div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={onStartQuiz}
            disabled={availableCount === 0}
            style={{ minWidth: '200px' }}
          >
            <Play size={20} fill="currentColor" />
            <span>Start Quiz</span>
          </button>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="features-section">
        <h3 style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
          Why Practice with QuizMaster?
        </h3>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-box">
              <Clock size={22} />
            </div>
            <div className="feature-content">
              <h4>Timed Challenges</h4>
              <p>Simulate real exam conditions with strict countdown timers and automatic submission upon expiration.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box">
              <ShieldCheck size={22} />
            </div>
            <div className="feature-content">
              <h4>Verified Questions</h4>
              <p>Curated, factually accurate questions covering fundamentals to advanced web development concepts.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box">
              <Sparkles size={22} />
            </div>
            <div className="feature-content">
              <h4>In-Depth Explanations</h4>
              <p>Review comprehensive reasoning for every question to learn from your mistakes and solidify knowledge.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

