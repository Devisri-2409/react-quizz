/**
 * Calculates quiz results based on questions and user answers.
 * Returns an accurate breakdown of correct, incorrect, unanswered counts,
 * percentages, time taken, and tailored performance evaluation.
 */

export function formatTime(seconds) {
  if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0) {
    return '00:00';
  }
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function formatDurationHuman(seconds) {
  if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0) {
    return '0s';
  }
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins === 0) return `${secs} sec`;
  if (secs === 0) return `${mins} min`;
  return `${mins}m ${secs}s`;
}

export function calculateResults(questions, selectedAnswers = {}, totalTime = 0, timeRemaining = 0) {
  if (!Array.isArray(questions) || questions.length === 0) {
    return {
      totalQuestions: 0,
      correctCount: 0,
      incorrectCount: 0,
      unansweredCount: 0,
      score: 0,
      percentage: 0,
      timeTaken: 0,
      performance: getPerformanceFeedback(0),
      reviewList: []
    };
  }

  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  const reviewList = questions.map((q, index) => {
    const userAnswer = selectedAnswers[q.id];
    const isUnanswered = userAnswer === undefined || userAnswer === null || userAnswer === '';
    const isCorrect = !isUnanswered && userAnswer === q.correctAnswer;

    if (isUnanswered) {
      unansweredCount++;
    } else if (isCorrect) {
      correctCount++;
    } else {
      incorrectCount++;
    }

    return {
      ...q,
      questionNumber: index + 1,
      userAnswer: userAnswer || null,
      isCorrect,
      isUnanswered
    };
  });

  const totalQuestions = questions.length;
  const score = correctCount;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const timeTaken = Math.max(0, totalTime - Math.max(0, timeRemaining));

  return {
    totalQuestions,
    correctCount,
    incorrectCount,
    unansweredCount,
    score,
    percentage,
    timeTaken,
    timeTakenFormatted: formatDurationHuman(timeTaken),
    performance: getPerformanceFeedback(percentage),
    reviewList
  };
}

export function getPerformanceFeedback(percentage) {
  if (percentage === 100) {
    return {
      title: 'Outstanding! Perfect Score!',
      message: 'Flawless execution! You demonstrated mastery over every single topic in this quiz.',
      badge: 'Quiz Master',
      tone: 'master'
    };
  }
  if (percentage >= 80) {
    return {
      title: 'Great Job! Excellent Work!',
      message: 'You have a deep understanding of these concepts. Keep up the high standard!',
      badge: 'Advanced',
      tone: 'excellent'
    };
  }
  if (percentage >= 60) {
    return {
      title: 'Solid Effort! Good Performance!',
      message: 'You understand the core principles well. Reviewing missed answers will push you to the top tier.',
      badge: 'Proficient',
      tone: 'good'
    };
  }
  if (percentage >= 40) {
    return {
      title: 'Fair Attempt! Keep Practicing!',
      message: 'You have the basics down, but several questions need revision. Review the explanations below.',
      badge: 'Apprentice',
      tone: 'fair'
    };
  }
  return {
    title: 'Keep Learning and Try Again!',
    message: 'Every mistake is an opportunity to learn. Study the detailed answers and explanations below, then retry!',
    badge: 'Novice',
    tone: 'needs-work'
  };
}

