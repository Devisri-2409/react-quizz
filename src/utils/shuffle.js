/**
 * Fisher-Yates array shuffling utility.
 * Pure function that creates a new shuffled array without mutating the input.
 */
export function shuffleArray(array) {
  if (!Array.isArray(array)) return [];
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Prepares questions for a quiz session:
 * 1. Shuffles question order.
 * 2. Takes requested count (or maximum available).
 * 3. Shuffles option order for each individual question while preserving
 *    the exact value matching the `correctAnswer`.
 */
export function prepareQuizQuestions(rawQuestions, count) {
  if (!Array.isArray(rawQuestions) || rawQuestions.length === 0) {
    return [];
  }

  // Shuffle questions
  const shuffledQuestions = shuffleArray(rawQuestions);

  // Take requested count or maximum available
  const sliceCount = Math.min(count, shuffledQuestions.length);
  const selected = shuffledQuestions.slice(0, sliceCount);

  // Shuffle options for each question
  return selected.map((q) => {
    return {
      ...q,
      options: shuffleArray(q.options)
    };
  });
}

