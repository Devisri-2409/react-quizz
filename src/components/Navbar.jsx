import React from 'react';
import { GraduationCap, Award, HelpCircle } from 'lucide-react';

export function Navbar({ quizStatus, currentQuestionNumber, totalQuestions, onBrandClick }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <button
          type="button"
          className="navbar-brand"
          onClick={onBrandClick}
          aria-label="QuizMaster Home"
        >
          <div className="brand-icon-wrapper">
            <GraduationCap size={24} />
          </div>
          <div className="brand-info">
            <span className="brand-title">QuizMaster</span>
            <span className="brand-subtitle">Interactive Student Quiz App</span>
          </div>
        </button>

        <div className="navbar-actions">
          {quizStatus === 'active' && (
            <div className="navbar-badge">
              <HelpCircle size={16} />
              <span>Question {currentQuestionNumber} of {totalQuestions}</span>
            </div>
          )}
          {quizStatus === 'results' && (
            <div className="navbar-badge" style={{ background: '#ECFDF5', color: '#065F46', borderColor: '#A7F3D0' }}>
              <Award size={16} />
              <span>Quiz Completed</span>
            </div>
          )}
          {quizStatus === 'home' && (
            <span className="navbar-badge">
              <span>Ready to test</span>
            </span>
          )}
        </div>
      </div>
    </header>
  );
}

