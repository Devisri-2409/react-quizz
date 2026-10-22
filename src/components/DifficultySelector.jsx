import React from 'react';
import { Gauge, SlidersHorizontal, Info } from 'lucide-react';

export function DifficultySelector({
  difficulty,
  onDifficultyChange,
  requestedCount,
  onCountChange,
  availableCount
}) {
  const difficulties = [
    { id: 'all', label: 'All Levels' },
    { id: 'easy', label: 'Easy' },
    { id: 'medium', label: 'Medium' },
    { id: 'hard', label: 'Hard' }
  ];

  const countOptions = [5, 10, 15];

  return (
    <div className="selector-row">
      {/* Difficulty Selection */}
      <div className="selector-box">
        <div className="section-label">
          <Gauge size={18} color="var(--primary-600)" />
          <span>Select Difficulty</span>
        </div>
        <div className="segmented-group" role="group" aria-label="Select Quiz Difficulty">
          {difficulties.map((diff) => (
            <button
              key={diff.id}
              type="button"
              className={`segmented-btn ${difficulty === diff.id ? 'selected' : ''}`}
              onClick={() => onDifficultyChange(diff.id)}
              aria-pressed={difficulty === diff.id}
            >
              {diff.label}
            </button>
          ))}
        </div>
        <div className="selector-hint">
          <Info size={14} />
          <span>Difficulty filters the pool of questions.</span>
        </div>
      </div>

      {/* Question Count Selection */}
      <div className="selector-box">
        <div className="section-label">
          <SlidersHorizontal size={18} color="var(--primary-600)" />
          <span>Number of Questions</span>
        </div>
        <div className="segmented-group" role="group" aria-label="Select Question Count">
          {countOptions.map((count) => {
            const isAvailable = count <= availableCount;
            const isSelected = requestedCount === count;

            return (
              <button
                key={count}
                type="button"
                className={`segmented-btn ${isSelected ? 'selected' : ''}`}
                onClick={() => onCountChange(count)}
                disabled={!isAvailable}
                aria-pressed={isSelected}
                title={!isAvailable ? `Only ${availableCount} questions available for this filter` : `${count} questions`}
              >
                <span>{count} Qs</span>
                {!isAvailable && <span style={{ fontSize: '0.7rem' }}>({availableCount} max)</span>}
              </button>
            );
          })}
        </div>
        <div className="selector-hint">
          <Info size={14} />
          <span>
            {availableCount} questions available in this combination.
          </span>
        </div>
      </div>
    </div>
  );
}

