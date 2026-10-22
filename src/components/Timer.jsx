import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { formatTime } from '../utils/calculateResults';

export function Timer({ timeRemaining }) {
  const isUrgent = timeRemaining <= 30 && timeRemaining > 0;
  const isWarning = timeRemaining <= 60 && !isUrgent;

  let timerClass = 'timer-container';
  if (isUrgent) {
    timerClass += ' timer-danger';
  } else if (isWarning) {
    timerClass += ' timer-warning';
  }

  return (
    <div
      className={timerClass}
      role="timer"
      aria-live="polite"
      aria-label={`Time remaining: ${formatTime(timeRemaining)}`}
      title="Time remaining for this quiz"
    >
      {isUrgent ? (
        <AlertTriangle size={18} />
      ) : (
        <Clock size={18} />
      )}
      <span>{formatTime(timeRemaining)}</span>
    </div>
  );
}

