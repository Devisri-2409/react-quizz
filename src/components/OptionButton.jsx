import React from 'react';

const PREFIX_LETTERS = ['A', 'B', 'C', 'D'];

export function OptionButton({ option, index, isSelected, onSelect }) {
  const letter = PREFIX_LETTERS[index] || String.fromCharCode(65 + index);

  return (
    <button
      type="button"
      className={`option-button ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(option)}
      aria-pressed={isSelected}
      aria-label={`Option ${letter}: ${option}`}
    >
      <div className="option-prefix">{letter}</div>
      <div className="option-text">{option}</div>
    </button>
  );
}

