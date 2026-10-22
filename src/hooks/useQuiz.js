import { useState, useEffect, useRef, useCallback } from 'react';
import { questions as allQuestions } from '../data/questions';
import { prepareQuizQuestions } from '../utils/shuffle';
import { calculateResults } from '../utils/calculateResults';

const SECONDS_PER_QUESTION = 60; // 1 minute per question

export function useQuiz() {
  // Configuration state
  const [categoryId, setCategoryIdState] = useState('javascript');
  const [difficulty, setDifficultyState] = useState('all'); // 'all', 'easy', 'medium', 'hard'
  const [requestedCount, setRequestedCount] = useState(5); // 5, 10, 15

  // Quiz lifecycle state: 'home' | 'active' | 'results' | 'review'
  const [quizStatus, setQuizStatus] = useState('home');

  // Active quiz session state
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [totalTime, setTotalTime] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [results, setResults] = useState(null);

  // Modal confirmation dialog
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    message: '',
    confirmLabel: 'Confirm',
    cancelLabel: 'Cancel',
    type: 'warning',
    onConfirm: () => {}
  });

  // Guard refs to prevent duplicate submissions, interval leaks, and stale closures
  const hasSubmittedRef = useRef(false);
  const timerIntervalRef = useRef(null);
  const endTimeRef = useRef(null);
  const timeRemainingRef = useRef(0);
  const activeQuestionsRef = useRef([]);
  const selectedAnswersRef = useRef({});
  const totalTimeRef = useRef(0);

  // Keep refs synchronized in an effect (outside render)
  useEffect(() => {
    timeRemainingRef.current = timeRemaining;
    activeQuestionsRef.current = activeQuestions;
    selectedAnswersRef.current = selectedAnswers;
    totalTimeRef.current = totalTime;
  }, [timeRemaining, activeQuestions, selectedAnswers, totalTime]);

  // Available questions pool helper
  const getPool = useCallback((catId, diff) => {
    return allQuestions.filter((q) => {
      const matchCat = q.category === catId;
      const matchDiff = diff === 'all' || q.difficulty === diff;
      return matchCat && matchDiff;
    });
  }, []);

  const currentPool = getPool(categoryId, difficulty);
  const availableQuestionCount = currentPool.length;

  // Clean setters that gracefully adjust requestedCount if it exceeds available count
  const setCategoryId = useCallback((newId) => {
    setCategoryIdState(newId);
    const newPool = getPool(newId, difficulty);
    setRequestedCount((prev) => (prev > newPool.length ? Math.max(1, newPool.length) : prev));
  }, [difficulty, getPool]);

  const setDifficulty = useCallback((newDiff) => {
    setDifficultyState(newDiff);
    const newPool = getPool(categoryId, newDiff);
    setRequestedCount((prev) => (prev > newPool.length ? Math.max(1, newPool.length) : prev));
  }, [categoryId, getPool]);

  // Clean up timer interval safely
  const clearTimer = useCallback(() => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  }, []);

  // Internal submission handler using stable refs to avoid timer recreations
  const doSubmit = useCallback(() => {
    if (hasSubmittedRef.current) return;
    hasSubmittedRef.current = true;
    clearTimer();

    const currentRemaining = Math.max(0, timeRemainingRef.current);
    const calculated = calculateResults(
      activeQuestionsRef.current,
      selectedAnswersRef.current,
      totalTimeRef.current,
      currentRemaining
    );

    setResults(calculated);
    setQuizStatus('results');
    setConfirmDialog((prev) => ({ ...prev, isOpen: false }));
  }, [clearTimer]);

  // Timer countdown effect: runs only when quiz becomes active
  useEffect(() => {
    if (quizStatus !== 'active') {
      clearTimer();
      return;
    }

    timerIntervalRef.current = setInterval(() => {
      if (!endTimeRef.current) return;
      const msLeft = endTimeRef.current - Date.now();
      const secondsLeft = Math.max(0, Math.ceil(msLeft / 1000));

      setTimeRemaining(secondsLeft);
      timeRemainingRef.current = secondsLeft;

      if (secondsLeft <= 0) {
        clearTimer();
        doSubmit();
      }
    }, 500);

    return () => {
      clearTimer();
    };
  }, [quizStatus, clearTimer, doSubmit]);

  // Warn user before leaving or reloading an active quiz
  useEffect(() => {
    if (quizStatus !== 'active') return;

    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
      return '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [quizStatus]);

  // Start a new quiz session
  const startQuiz = useCallback(() => {
    const pool = getPool(categoryId, difficulty);
    const countToTake = Math.min(requestedCount, pool.length);
    if (countToTake === 0) return;

    const prepared = prepareQuizQuestions(pool, countToTake);
    const allocatedTime = prepared.length * SECONDS_PER_QUESTION;

    hasSubmittedRef.current = false;
    endTimeRef.current = Date.now() + allocatedTime * 1000;
    timeRemainingRef.current = allocatedTime;

    setActiveQuestions(prepared);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setTotalTime(allocatedTime);
    setTimeRemaining(allocatedTime);
    setResults(null);
    setQuizStatus('active');
  }, [categoryId, difficulty, requestedCount, getPool]);

  // Retry same quiz configuration with fresh shuffling
  const retryQuiz = useCallback(() => {
    startQuiz();
  }, [startQuiz]);

  // Select answer for current or specified question
  const selectAnswer = useCallback((questionId, option) => {
    if (quizStatus !== 'active') return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: option
    }));
  }, [quizStatus]);

  // Question navigation
  const nextQuestion = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, activeQuestions.length - 1));
  }, [activeQuestions.length]);

  const prevQuestion = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToQuestion = useCallback((index) => {
    if (index >= 0 && index < activeQuestions.length) {
      setCurrentIndex(index);
    }
  }, [activeQuestions.length]);

  // Request submit: confirms if unanswered questions exist or prompts confirmation
  const requestSubmit = useCallback(() => {
    if (quizStatus !== 'active') return;

    const answeredCount = Object.keys(selectedAnswers).filter((k) => selectedAnswers[k] !== undefined).length;
    const unansweredCount = activeQuestions.length - answeredCount;

    if (unansweredCount > 0) {
      setConfirmDialog({
        isOpen: true,
        title: 'Submit Quiz Confirmation',
        message: `You have ${unansweredCount} unanswered question${unansweredCount > 1 ? 's' : ''}. Unanswered questions will be scored as 0. Are you sure you want to submit?`,
        confirmLabel: 'Yes, Submit Now',
        cancelLabel: 'Keep Reviewing',
        type: 'warning',
        onConfirm: () => doSubmit()
      });
    } else {
      setConfirmDialog({
        isOpen: true,
        title: 'Ready to Submit?',
        message: 'You have answered all questions. Would you like to finalize and view your score?',
        confirmLabel: 'Submit Quiz',
        cancelLabel: 'Check Answers',
        type: 'info',
        onConfirm: () => doSubmit()
      });
    }
  }, [quizStatus, selectedAnswers, activeQuestions.length, doSubmit]);

  // Request quit/home navigation during active quiz
  const requestQuit = useCallback((onConfirmQuit) => {
    if (quizStatus === 'active') {
      setConfirmDialog({
        isOpen: true,
        title: 'Leave Current Quiz?',
        message: 'Your quiz is currently in progress. If you leave now, your answers and progress will be lost.',
        confirmLabel: 'Quit to Home',
        cancelLabel: 'Stay in Quiz',
        type: 'danger',
        onConfirm: () => {
          clearTimer();
          setConfirmDialog((prev) => ({ ...prev, isOpen: false }));
          setQuizStatus('home');
          if (onConfirmQuit) onConfirmQuit();
        }
      });
    } else {
      clearTimer();
      setQuizStatus('home');
      if (onConfirmQuit) onConfirmQuit();
    }
  }, [quizStatus, clearTimer]);

  const closeConfirmDialog = useCallback(() => {
    setConfirmDialog((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const goToReview = useCallback(() => {
    setQuizStatus('review');
  }, []);

  const goBackToResults = useCallback(() => {
    setQuizStatus('results');
  }, []);

  const goHome = useCallback(() => {
    clearTimer();
    setQuizStatus('home');
  }, [clearTimer]);

  return {
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
    currentQuestion: activeQuestions[currentIndex] || null,
    currentIndex,
    selectedAnswers,
    totalTime,
    timeRemaining,
    results,

    // Confirmation Modal
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
    submitQuiz: doSubmit,
    requestQuit,
    goToReview,
    goBackToResults,
    goHome
  };
}

