import React from 'react';

export function ProgressBar({ current, total }) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="progress-bar-container" aria-label={`Progress: ${percentage}% completed`}>
      <div className="progress-bar-header">
        <span>Progress</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
}

