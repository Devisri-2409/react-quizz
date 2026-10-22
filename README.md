# QuizMaster — Modern React Quiz Application

> An interactive, responsive, and student-friendly quiz platform built with **React 19**, **Vite**, **Pure CSS3**, and **Lucide React**. Designed as a college assignment project showcasing modern React architecture, custom hooks, accessible UI design, and responsive layouts.

---

## 🌟 Overview

**QuizMaster** is a client-side quiz application engineered to deliver an engaging assessment experience across key technical domains: **JavaScript**, **React**, **HTML & CSS**, and **General Knowledge / CS Fundamentals**.

The application features timed quizzes, randomized questions and options, real-time progress indicators, an interactive question jump navigator, a modal confirmation system, and comprehensive results analysis with in-depth explanations for every question.

---

## 🚀 Key Features

### 1. Landing & Configuration Screen
- **Category Selection**: Choose between JavaScript, React, HTML & CSS, or General Knowledge.
- **Difficulty Filtering**: Filter questions by *All Levels*, *Easy*, *Medium*, or *Hard*.
- **Dynamic Question Count**: Select 5, 10, or 15 questions. If a difficulty filter has fewer questions than requested, the application gracefully adjusts and provides a clear notice.
- **Duration & Exam Info**: Real-time calculation of estimated time and quiz parameters.

### 2. Active Quiz Experience
- **Single Question Focus**: Clean interface showing one question at a time.
- **Answer Persistence**: Navigate back and forth between questions using *Previous* and *Next* without losing selected choices.
- **Countdown Timer**: Drift-safe timer (60 seconds per question) with pulsing visual warnings under 60s and 30s. Automatically submits the quiz upon expiration.
- **Interactive Question Navigator**: Visual sidebar grid showing all questions with real-time indicators for *Current*, *Answered*, and *Unanswered* items. Click any number to jump directly to that question.
- **Accidental Submit Guard**: Modal confirmation dialog prevents premature submissions and informs users of any unanswered questions.
- **Page Unload Protection**: Browser alert warns users before reloading or closing the tab during an active quiz.

### 3. Results & Evaluation
- **Dynamic Score Calculation**: Real-time evaluation calculating exact score, percentage, correct count, incorrect count, unanswered count, and duration taken.
- **SVG Circular Progress**: Visual animated SVG circular score gauge with gradient fills.
- **Performance Evaluation**: Custom performance feedback and achievement badges tailored to the user's score tier.

### 4. Answer Review & Explanations
- **Side-by-Side Comparison**: Highlights the user's selected choice versus the verified correct answer.
- **Educational Explanations**: In-depth explanations for every question to foster genuine understanding.
- **Filter Tabs**: Filter review items by *All*, *Correct*, *Incorrect*, or *Unanswered*.
- **Quick Retries**: Retry the same configuration with freshly randomized question and option order, or return home to try another topic.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI components, hooks (`useState`, `useEffect`, `useRef`, `useCallback`) |
| **Vite 8** | Ultra-fast local development server and optimized production bundler |
| **JavaScript (ES6+)** | Pure ES modules, arrow functions, destructuring, Fisher-Yates algorithm |
| **Pure CSS3** | Custom design system using CSS variables, flexbox, CSS grid, and responsive media queries |
| **Lucide React** | Clean, accessible SVG interface icons |

*Note: No external UI frameworks (Bootstrap/Tailwind), databases, or paid APIs are used. The app runs completely locally.*

---

## 📁 Project Structure

```text
react-quiz-app/
├── public/
│   └── favicon.svg              # Custom graduation cap SVG favicon
├── src/
│   ├── assets/                  # Static assets and icons
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navigation bar with status badges
│   │   ├── Footer.jsx           # Footer with technology tags and copyright
│   │   ├── CategoryCard.jsx     # Interactive category selection card
│   │   ├── DifficultySelector.jsx # Difficulty & question count segmented controls
│   │   ├── QuestionCard.jsx     # Active question display with option list
│   │   ├── OptionButton.jsx     # Accessible multiple-choice option button (A/B/C/D)
│   │   ├── ProgressBar.jsx      # Animated progress bar
│   │   ├── Timer.jsx            # Countdown timer with warning states
│   │   ├── QuestionNavigator.jsx# Sidebar grid showing question progress
│   │   ├── ScoreCard.jsx        # Results card with circular score SVG and statistics
│   │   ├── AnswerReviewItem.jsx # Detailed review card with explanations
│   │   └── ConfirmDialog.jsx    # Accessible modal dialog for confirmations
│   ├── pages/
│   │   ├── Home.jsx             # Landing page and quiz configuration
│   │   ├── Quiz.jsx             # Active quiz screen layout
│   │   ├── Results.jsx          # Quiz completion summary screen
│   │   └── ReviewAnswers.jsx    # Review page with filtering capabilities
│   ├── data/
│   │   ├── categories.js        # Category definitions and metadata
│   │   └── questions.js         # 60 curated questions across 4 categories
│   ├── hooks/
│   │   └── useQuiz.js           # Central custom hook managing quiz lifecycle
│   ├── utils/
│   │   ├── shuffle.js           # Fisher-Yates shuffle algorithms
│   │   └── calculateResults.js  # Result calculations and time formatters
│   ├── styles/
│   │   ├── variables.css        # CSS variables for purple/indigo theme & tokens
│   │   ├── global.css           # Global typography, resets, button styles
│   │   ├── components.css       # Component-specific styles
│   │   └── responsive.css       # Media queries for tablet and mobile devices
│   ├── App.jsx                  # Root component coordinating state and screens
│   └── main.jsx                 # React DOM mount point
├── index.html                   # HTML template with Google Fonts
├── package.json                 # Project dependencies and npm scripts
├── vite.config.js               # Vite configuration
└── README.md                    # Comprehensive project documentation
```

---

## 💻 Installation & Running Locally

### Prerequisites
- **Node.js**: version `18.0.0` or higher (tested on Node v24)
- **npm**: version `9.0.0` or higher

### Steps

1. **Clone or navigate to the repository directory**:
   ```bash
   cd react-quiz-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

6. **Run the linter**:
   ```bash
   npm run lint
   ```

---

## 🧮 How Scoring Works

The scoring engine lives inside [`calculateResults.js`](file:///c:/Users/K%20Devi%20Sri/OneDrive/Desktop/react-quiz-app/src/utils/calculateResults.js) and operates deterministically:

1. **Total Questions**: Count of active questions in the current quiz session.
2. **Correct Answer**: Awarded 1 point whenever `userAnswer === question.correctAnswer`.
3. **Incorrect Answer**: Recorded when `userAnswer` exists but does not match `correctAnswer`.
4. **Unanswered Question**: Recorded when no answer was selected (`null` or `undefined`), including when the timer expires. Unanswered questions receive 0 points.
5. **Percentage Score**: Computed as:
   $$\text{Percentage} = \text{round}\left( \frac{\text{Correct Answers}}{\text{Total Questions}} \times 100 \right)$$
6. **Time Taken**: Calculated as:
   $$\text{Time Taken} = \text{Total Allocated Time} - \text{Remaining Time}$$
7. **Performance Tiers**:
   - **100%**: *Quiz Master* — "Outstanding! Perfect Score!"
   - **80% – 99%**: *Advanced* — "Great Job! Excellent Work!"
   - **60% – 79%**: *Proficient* — "Solid Effort! Good Performance!"
   - **40% – 59%**: *Apprentice* — "Fair Attempt! Keep Practicing!"
   - **0% – 39%**: *Novice* — "Keep Learning and Try Again!"

---

## 🧩 Architecture: Main Components & Custom Hook

### 1. `useQuiz` Hook (`src/hooks/useQuiz.js`)
Encapsulates all quiz state and side effects:
- **State Segregation**: Separates quiz configuration (`categoryId`, `difficulty`, `requestedCount`) from active session state (`activeQuestions`, `currentIndex`, `selectedAnswers`).
- **Drift-Safe Timer**: Uses `Date.now() + allocatedMs` stored in `endTimeRef` to calculate real elapsed time, immune to background tab throttling.
- **Race Condition Prevention**: Employs `hasSubmittedRef` to guarantee that auto-submit (via timer expiration) and manual submissions execute exactly once.
- **Safe Question Pools**: Dynamically filters questions and synchronizes limits if difficulty selections change.

### 2. `App.jsx`
Acts as the controller component. It invokes `useQuiz()` and selectively renders the corresponding page based on `quizStatus` (`'home'`, `'active'`, `'results'`, or `'review'`), while keeping the `Navbar`, `Footer`, and `ConfirmDialog` globally accessible.

### 3. `QuestionCard.jsx` & `OptionButton.jsx`
Present the current question with accessible option buttons labeled A, B, C, D. Buttons use semantic roles and proper ARIA attributes (`role="radiogroup"`, `aria-pressed`, `aria-label`).

### 4. `QuestionNavigator.jsx`
Displays a quick-navigation grid allowing users to jump between questions. Unanswered questions, answered questions, and the currently active question are visually distinct.

### 5. `ScoreCard.jsx`
Displays the post-quiz evaluation using an SVG circular progress meter, summary statistics grid, and action buttons.

### 6. `AnswerReviewItem.jsx`
Highlights the user's answer in green (if correct) or red (if incorrect), indicates the correct answer, and renders a clear explanation card.

---

## ➕ How to Add New Questions or Categories

### Adding a New Question
Open [`src/data/questions.js`](file:///c:/Users/K%20Devi%20Sri/OneDrive/Desktop/react-quiz-app/src/data/questions.js) and add an object adhering to this schema:

```javascript
{
  id: 'react-16',                          // Unique string identifier
  category: 'react',                       // Category ID ('javascript', 'react', 'html-css', 'general-knowledge')
  difficulty: 'medium',                    // 'easy' | 'medium' | 'hard'
  question: 'What is the purpose of React Suspense?',
  options: [
    'Allows components to display a fallback UI until its children have finished loading',
    'Suspends browser JavaScript execution during HTTP requests',
    'Stops components from updating permanently',
    'Provides automated unit testing for asynchronous code'
  ],
  correctAnswer: 'Allows components to display a fallback UI until its children have finished loading',
  explanation: 'React Suspense lets components show a fallback (such as a spinner) while waiting for data, code splitting chunks, or other asynchronous operations to complete.'
}
```

### Adding a New Category
1. Open [`src/data/categories.js`](file:///c:/Users/K%20Devi%20Sri/OneDrive/Desktop/react-quiz-app/src/data/categories.js) and add your category definition:
   ```javascript
   {
     id: 'python',
     name: 'Python',
     iconName: 'Code2', // Supported Lucide icon name
     description: 'Test your knowledge of Python syntax, data types, OOP, and standard libraries.',
     badge: 'Backend',
     color: '#3B82F6'
   }
   ```
2. Add corresponding questions tagged with `category: 'python'` into `src/data/questions.js`. The application will automatically calculate counts and display the new category card on the home screen!

---

## 🎨 Design System & Accessibility

- **Palette**: Indigo (`#4F46E5`), Purple (`#9333EA`), Lavender (`#EEF2FF`), White (`#FFFFFF`), with emerald green and coral red for answer feedback.
- **Typography**: Uses modern Google Font **Plus Jakarta Sans** with clean monospace support for code snippets via **JetBrains Mono**.
- **Keyboard Navigation**: All interactive elements support focus rings (`:focus-visible`), `Enter`, `Space`, and `Escape` hotkeys for modal dialogs.
- **Responsiveness**: Tested across mobile (320px–480px), tablet (768px–960px), and desktop (1200px+).

---

## 📄 License

This project was built for academic assignment purposes. Free to use, adapt, and learn from!
