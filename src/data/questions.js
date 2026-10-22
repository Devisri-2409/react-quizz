/**
 * QuizMaster Question Database
 * Factually accurate, categorized, and multi-difficulty questions.
 * Each question has: id, category, difficulty, question, options, correctAnswer, explanation.
 */

export const questions = [
  // ==========================================
  // JAVASCRIPT (15 Questions)
  // ==========================================
  {
    id: 'js-1',
    category: 'javascript',
    difficulty: 'easy',
    question: 'What is the output of `typeof null` in JavaScript?',
    options: ['"object"', '"null"', '"undefined"', '"number"'],
    correctAnswer: '"object"',
    explanation: 'In JavaScript, `typeof null` evaluates to "object". This is a long-standing historical bug from the earliest version of JS that has been preserved for backward compatibility.'
  },
  {
    id: 'js-2',
    category: 'javascript',
    difficulty: 'easy',
    question: 'Which keyword is used to declare a block-scoped variable whose value can be reassigned?',
    options: ['let', 'const', 'var', 'global'],
    correctAnswer: 'let',
    explanation: '`let` declares a block-scoped variable that can be reassigned. In contrast, `const` cannot be reassigned, and `var` is function-scoped.'
  },
  {
    id: 'js-3',
    category: 'javascript',
    difficulty: 'easy',
    question: 'What does `NaN` stand for in JavaScript?',
    options: ['Not a Number', 'Null and Null', 'Number Arithmetic Null', 'New Array Number'],
    correctAnswer: 'Not a Number',
    explanation: '`NaN` stands for "Not a Number". Interestingly, `typeof NaN` returns "number", representing a numeric value that cannot be represented as a valid number.'
  },
  {
    id: 'js-4',
    category: 'javascript',
    difficulty: 'easy',
    question: 'Which built-in method parses a JSON-formatted string into a JavaScript object?',
    options: ['JSON.parse()', 'JSON.stringify()', 'JSON.toObject()', 'JSON.decode()'],
    correctAnswer: 'JSON.parse()',
    explanation: '`JSON.parse()` takes a valid JSON string and parses it into a JavaScript object or primitive value.'
  },
  {
    id: 'js-5',
    category: 'javascript',
    difficulty: 'easy',
    question: 'Which comparison operator checks for equality of both value and type without type coercion?',
    options: ['===', '==', '=', '!='],
    correctAnswer: '===',
    explanation: 'The strict equality operator `===` checks both value and type without performing implicit type coercion.'
  },
  {
    id: 'js-6',
    category: 'javascript',
    difficulty: 'medium',
    question: 'What is a closure in JavaScript?',
    options: [
      'A function that retains access to its lexical scope even when executed outside that scope',
      'A function that runs immediately upon declaration and closes the browser window',
      'A method used to close database connections and release memory',
      'A private class syntax introduced in ECMAScript 2022'
    ],
    correctAnswer: 'A function that retains access to its lexical scope even when executed outside that scope',
    explanation: 'A closure is the combination of a function bundled together with references to its surrounding state (lexical environment), allowing it to access outer variables after the outer function has returned.'
  },
  {
    id: 'js-7',
    category: 'javascript',
    difficulty: 'medium',
    question: 'What is the output of `console.log(0.1 + 0.2 === 0.3)` in JavaScript?',
    options: ['false', 'true', 'undefined', 'TypeError'],
    correctAnswer: 'false',
    explanation: 'Due to IEEE 754 binary floating-point representation, `0.1 + 0.2` equals approximately `0.30000000000000004`, which is not strictly equal to `0.3`.'
  },
  {
    id: 'js-8',
    category: 'javascript',
    difficulty: 'medium',
    question: 'What does `Array.prototype.map()` return?',
    options: [
      'A new array containing the results of calling a function on every element',
      'The original array mutated in-place',
      'A single accumulated scalar value',
      'A boolean indicating if all elements passed the test'
    ],
    correctAnswer: 'A new array containing the results of calling a function on every element',
    explanation: '`map()` creates a brand new array populated with the results of calling a provided callback function on every element in the calling array without mutating the original.'
  },
  {
    id: 'js-9',
    category: 'javascript',
    difficulty: 'medium',
    question: 'How do `let` and `const` differ from `var` regarding hoisting?',
    options: [
      'They are hoisted but remain uninitialized in a Temporal Dead Zone until declared',
      'They are never hoisted at all during compilation',
      'They are hoisted and automatically initialized to null',
      'They are hoisted only if defined at the top of the file'
    ],
    correctAnswer: 'They are hoisted but remain uninitialized in a Temporal Dead Zone until declared',
    explanation: 'Variables declared with `let` and `const` are hoisted to the top of their block scope, but accessing them before their declaration causes a `ReferenceError` because they reside in the Temporal Dead Zone (TDZ).'
  },
  {
    id: 'js-10',
    category: 'javascript',
    difficulty: 'medium',
    question: 'Which Promise method waits for all given promises to settle (either resolved or rejected)?',
    options: ['Promise.allSettled()', 'Promise.all()', 'Promise.race()', 'Promise.any()'],
    correctAnswer: 'Promise.allSettled()',
    explanation: '`Promise.allSettled()` returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects describing the outcome of each.'
  },
  {
    id: 'js-11',
    category: 'javascript',
    difficulty: 'hard',
    question: 'In the JavaScript Event Loop, which queue takes priority when executing scheduled tasks?',
    options: [
      'Microtask queue (Promises, queueMicrotask)',
      'Macrotask queue (setTimeout, setInterval)',
      'Animation frames queue',
      'I/O polling queue'
    ],
    correctAnswer: 'Microtask queue (Promises, queueMicrotask)',
    explanation: 'The microtask queue has higher priority than the macrotask queue. After each macrotask completes, the JavaScript engine drains the entire microtask queue before moving to the next macrotask.'
  },
  {
    id: 'js-12',
    category: 'javascript',
    difficulty: 'hard',
    question: 'What is the primary difference between `Object.freeze()` and `Object.seal()`?',
    options: [
      '`Object.seal()` allows modifying existing property values, whereas `Object.freeze()` makes them read-only',
      '`Object.freeze()` allows adding new properties, whereas `Object.seal()` forbids it',
      '`Object.freeze()` works recursively on deep properties, whereas `Object.seal()` does not',
      'There is no difference; they are aliases for the same underlying operation'
    ],
    correctAnswer: '`Object.seal()` allows modifying existing property values, whereas `Object.freeze()` makes them read-only',
    explanation: '`Object.seal()` prevents adding or deleting properties but allows modifying existing writable properties. `Object.freeze()` prevents adding, deleting, and modifying existing properties (making them read-only).'
  },
  {
    id: 'js-13',
    category: 'javascript',
    difficulty: 'hard',
    question: 'What makes `WeakMap` unique compared to a standard `Map` in terms of garbage collection?',
    options: [
      'Keys must be objects, and they do not prevent garbage collection if no other references exist',
      'Values are automatically serialized to disk to save RAM',
      'Keys cannot be garbage collected under any circumstances',
      'It has an automatic TTL (time-to-live) expiration timer for every key'
    ],
    correctAnswer: 'Keys must be objects, and they do not prevent garbage collection if no other references exist',
    explanation: '`WeakMap` keys must be objects (or non-registered symbols). The references to keys are held weakly, meaning that if there is no other reference to a key object, it can be garbage collected.'
  },
  {
    id: 'js-14',
    category: 'javascript',
    difficulty: 'hard',
    question: 'What does `Function.prototype.bind()` do when invoked on a function?',
    options: [
      'Returns a new function with a permanently bound `this` context and preset arguments',
      'Executes the function immediately with the provided `this` context',
      'Converts an asynchronous function into a synchronous execution block',
      'Attaches the function as a prototype method on Object'
    ],
    correctAnswer: 'Returns a new function with a permanently bound `this` context and preset arguments',
    explanation: 'Unlike `call` and `apply` which invoke the function immediately, `bind()` creates and returns a new function with `this` set to the provided value and initial arguments prepended.'
  },
  {
    id: 'js-15',
    category: 'javascript',
    difficulty: 'hard',
    question: 'What does the expression `[1, 2, 3] + [4, 5, 6]` evaluate to in JavaScript?',
    options: ['"1,2,34,5,6"', '[1, 2, 3, 4, 5, 6]', 'NaN', 'TypeError'],
    correctAnswer: '"1,2,34,5,6"',
    explanation: 'The `+` operator coerces both arrays to strings via `toString()`, resulting in `"1,2,3"` and `"4,5,6"`. Concatenating them produces `"1,2,34,5,6"`.'
  },

  // ==========================================
  // REACT (15 Questions)
  // ==========================================
  {
    id: 'react-1',
    category: 'react',
    difficulty: 'easy',
    question: 'What is JSX in React?',
    options: [
      'A syntax extension for JavaScript that looks similar to HTML',
      'A standalone CSS preprocessor used exclusively by React',
      'A server-side templating engine for Node.js',
      'A database query language for React applications'
    ],
    correctAnswer: 'A syntax extension for JavaScript that looks similar to HTML',
    explanation: 'JSX stands for JavaScript XML. It is a syntax extension for JavaScript recommended by React to describe what the user interface should look like.'
  },
  {
    id: 'react-2',
    category: 'react',
    difficulty: 'easy',
    question: 'Which React Hook is primarily used to declare and update local state in a functional component?',
    options: ['useState', 'useEffect', 'useContext', 'useReducer'],
    correctAnswer: 'useState',
    explanation: '`useState` is the core React hook that allows functional components to store and update internal component state across renders.'
  },
  {
    id: 'react-3',
    category: 'react',
    difficulty: 'easy',
    question: 'What prop must be provided when rendering a list of elements to help React identify changes?',
    options: ['key', 'id', 'ref', 'index'],
    correctAnswer: 'key',
    explanation: 'The `key` prop gives elements a stable identity across renders, allowing React to optimize Virtual DOM reconciliation by identifying which items have changed, been added, or removed.'
  },
  {
    id: 'react-4',
    category: 'react',
    difficulty: 'easy',
    question: 'What is the primary purpose of `props` in React?',
    options: [
      'To pass data and event handlers from parent components down to child components',
      'To store mutable state inside a single component',
      'To directly query the browser DOM elements',
      'To manage global styles across the entire website'
    ],
    correctAnswer: 'To pass data and event handlers from parent components down to child components',
    explanation: '`props` (short for properties) are read-only inputs passed from parent components to child components to configure appearance and behavior.'
  },
  {
    id: 'react-5',
    category: 'react',
    difficulty: 'easy',
    question: 'What is the default port number used by the Vite development server?',
    options: ['5173', '3000', '8080', '4200'],
    correctAnswer: '5173',
    explanation: 'Vite uses port `5173` as its default local development server port, whereas Create React App historically defaulted to 3000.'
  },
  {
    id: 'react-6',
    category: 'react',
    difficulty: 'medium',
    question: 'When does the cleanup function returned from `useEffect` execute?',
    options: [
      'Before the effect runs again, and when the component unmounts',
      'Only once when the browser tab is closed',
      'Immediately when the component renders for the first time',
      'Every time any unrelated prop in any component changes'
    ],
    correctAnswer: 'Before the effect runs again, and when the component unmounts',
    explanation: 'React runs the cleanup function before executing the effect again on subsequent renders with changed dependencies, and also when the component unmounts to prevent memory leaks.'
  },
  {
    id: 'react-7',
    category: 'react',
    difficulty: 'medium',
    question: 'What is the primary advantage of React\'s Virtual DOM?',
    options: [
      'Minimizes costly direct manipulations of the real browser DOM through efficient batching and diffing',
      'Allows React apps to execute directly on native hardware without a browser',
      'Automatically translates JavaScript code into WebAssembly for faster execution',
      'Stores sensitive user data in an encrypted memory partition'
    ],
    correctAnswer: 'Minimizes costly direct manipulations of the real browser DOM through efficient batching and diffing',
    explanation: 'Manipulating the browser DOM directly is slow. React creates a lightweight representation of the UI in memory (Virtual DOM), diffs it against previous state, and computes minimal real DOM updates.'
  },
  {
    id: 'react-8',
    category: 'react',
    difficulty: 'medium',
    question: 'What is the main purpose of the `useCallback` hook in React?',
    options: [
      'Memoize a callback function instance between renders to prevent unnecessary re-renders of child components',
      'Cache expensive computed numerical values',
      'Register a global event listener on the window object',
      'Create an asynchronous HTTP fetch pipeline'
    ],
    correctAnswer: 'Memoize a callback function instance between renders to prevent unnecessary re-renders of child components',
    explanation: '`useCallback` caches a function definition between renders so that children depending on referential equality do not re-render unnecessarily when other parent state changes.'
  },
  {
    id: 'react-9',
    category: 'react',
    difficulty: 'medium',
    question: 'How does updating a `useRef` value differ from updating a `useState` value?',
    options: [
      'Mutating `ref.current` does not trigger a component re-render, whereas `setState` does',
      '`useRef` can only store DOM elements, whereas `useState` can store anything',
      '`useRef` persists across page reloads in localStorage',
      '`useState` updates synchronously while `useRef` updates asynchronously'
    ],
    correctAnswer: 'Mutating `ref.current` does not trigger a component re-render, whereas `setState` does',
    explanation: 'Mutating `ref.current` is a synchronous mutation that retains value across renders without causing the component to re-render, making it ideal for timers, previous state, and DOM nodes.'
  },
  {
    id: 'react-10',
    category: 'react',
    difficulty: 'medium',
    question: 'What does "lifting state up" mean in React architecture?',
    options: [
      'Moving state to the closest common ancestor of components that need to share it',
      'Storing state in global `window` variables',
      'Converting functional components to class components',
      'Uploading component state to a remote cloud server'
    ],
    correctAnswer: 'Moving state to the closest common ancestor of components that need to share it',
    explanation: 'When two or more sibling components need access to the same state, React best practice is to lift that state up to their closest common ancestor component.'
  },
  {
    id: 'react-11',
    category: 'react',
    difficulty: 'hard',
    question: 'What causes the "stale closure" bug in React hooks like `useEffect` or `useCallback`?',
    options: [
      'The closure captured variable values from an earlier render because dependencies were omitted from the dependency array',
      'The browser garbage collector destroyed the function instance prematurely',
      'React fibers failed to commit updates to the DOM',
      'The JSX transpiler generated invalid JavaScript bytecode'
    ],
    correctAnswer: 'The closure captured variable values from an earlier render because dependencies were omitted from the dependency array',
    explanation: 'A stale closure occurs when a callback captures state or props from the render in which it was created, and fails to update because dependencies were missing in its dependency array.'
  },
  {
    id: 'react-12',
    category: 'react',
    difficulty: 'hard',
    question: 'What does React 18\'s Automatic Batching feature accomplish?',
    options: [
      'Batches multiple state updates into a single re-render even inside promises, setTimeout, and native event handlers',
      'Combines multiple HTTP API requests into one single network payload',
      'Automatically splits bundles into smaller chunks during build',
      'Batches CSS files into inline `<style>` tags'
    ],
    correctAnswer: 'Batches multiple state updates into a single re-render even inside promises, setTimeout, and native event handlers',
    explanation: 'Before React 18, React only batched updates inside React event handlers. In React 18+, updates inside promises, timeouts, and native handlers are automatically batched into one render.'
  },
  {
    id: 'react-13',
    category: 'react',
    difficulty: 'hard',
    question: 'When should `useLayoutEffect` be used instead of `useEffect`?',
    options: [
      'When performing DOM measurements and synchronously mutating the DOM before the browser paints to prevent visual flicker',
      'When fetching data from a REST API on initial mount',
      'When you need the effect to run asynchronously in a Web Worker',
      'When logging analytics events after the page renders'
    ],
    correctAnswer: 'When performing DOM measurements and synchronously mutating the DOM before the browser paints to prevent visual flicker',
    explanation: '`useLayoutEffect` runs synchronously immediately after DOM mutations but before the browser paints. It should be reserved for measuring layout and avoiding visual flickering.'
  },
  {
    id: 'react-14',
    category: 'react',
    difficulty: 'hard',
    question: 'What is the key difference between controlled and uncontrolled form inputs in React?',
    options: [
      'Controlled inputs have their current value driven by React state; uncontrolled inputs store their own value in the DOM',
      'Controlled inputs cannot have validation, whereas uncontrolled inputs can',
      'Controlled inputs only work with third-party libraries like Formik',
      'Uncontrolled inputs do not support the `onChange` event'
    ],
    correctAnswer: 'Controlled inputs have their current value driven by React state; uncontrolled inputs store their own value in the DOM',
    explanation: 'In a controlled component, form data is handled by a React component state. In an uncontrolled component, form data is handled by the DOM itself using refs to read values when needed.'
  },
  {
    id: 'react-15',
    category: 'react',
    difficulty: 'hard',
    question: 'How does `React.memo` optimize performance for a functional component?',
    options: [
      'It skips re-rendering the component if its props have not changed by shallowly comparing new and previous props',
      'It compiles the component directly to WebAssembly',
      'It stores the component output permanently in local storage',
      'It forces all state updates in the component to become synchronous'
    ],
    correctAnswer: 'It skips re-rendering the component if its props have not changed by shallowly comparing new and previous props',
    explanation: '`React.memo` is a higher-order component that wraps a component. If your component renders the same result given the same props, React will skip rendering the component and reuse the last rendered result.'
  },

  // ==========================================
  // HTML & CSS (15 Questions)
  // ==========================================
  {
    id: 'html-1',
    category: 'html-css',
    difficulty: 'easy',
    question: 'Which semantic HTML5 tag is explicitly designed to hold primary site navigation links?',
    options: ['<nav>', '<header>', '<menu>', '<section>'],
    correctAnswer: '<nav>',
    explanation: 'The `<nav>` element is intended only for major blocks of navigation links, assisting assistive technologies like screen readers in identifying navigation.'
  },
  {
    id: 'html-2',
    category: 'html-css',
    difficulty: 'easy',
    question: 'Which CSS property changes the color of the text inside an element?',
    options: ['color', 'text-color', 'font-color', 'foreground'],
    correctAnswer: 'color',
    explanation: 'The `color` CSS property sets the foreground color value of an element\'s text content.'
  },
  {
    id: 'html-3',
    category: 'html-css',
    difficulty: 'easy',
    question: 'What does CSS stand for?',
    options: [
      'Cascading Style Sheets',
      'Computer Styled Syntax',
      'Creative Style System',
      'Colloquial Sheet Styling'
    ],
    correctAnswer: 'Cascading Style Sheets',
    explanation: 'CSS stands for Cascading Style Sheets, describing how HTML elements should be presented on screen, paper, or other media.'
  },
  {
    id: 'html-4',
    category: 'html-css',
    difficulty: 'easy',
    question: 'Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?',
    options: ['alt', 'title', 'src', 'description'],
    correctAnswer: 'alt',
    explanation: 'The `alt` attribute provides alternative information for an image if a user cannot view it (due to slow connection, screen reader, or broken link).'
  },
  {
    id: 'html-5',
    category: 'html-css',
    difficulty: 'easy',
    question: 'In the CSS Box Model, what is the area immediately between an element\'s content and its border?',
    options: ['padding', 'margin', 'outline', 'gap'],
    correctAnswer: 'padding',
    explanation: 'From inside to outside, the CSS Box Model consists of: Content -> Padding -> Border -> Margin.'
  },
  {
    id: 'html-6',
    category: 'html-css',
    difficulty: 'medium',
    question: 'What is the visual and layout difference between `display: none` and `visibility: hidden`?',
    options: [
      '`display: none` removes the element from the document layout flow; `visibility: hidden` hides it but preserves its space',
      '`visibility: hidden` removes the element from the layout flow; `display: none` preserves its space',
      'There is no difference; both produce identical layout behavior',
      '`display: none` can be animated with CSS transitions, while `visibility: hidden` cannot'
    ],
    correctAnswer: '`display: none` removes the element from the document layout flow; `visibility: hidden` hides it but preserves its space',
    explanation: '`display: none` causes the element to not appear on the page at all (no space reserved). `visibility: hidden` makes it invisible, but it still takes up its physical width and height in the layout.'
  },
  {
    id: 'html-7',
    category: 'html-css',
    difficulty: 'medium',
    question: 'What is the CSS `rem` unit relative to?',
    options: [
      'The font-size of the root `<html>` element',
      'The font-size of the immediate parent element',
      'The viewport width and height',
      'The physical resolution of the display monitor'
    ],
    correctAnswer: 'The font-size of the root `<html>` element',
    explanation: '`rem` stands for "root em". It is calculated relative to the font-size of the root element (`<html>`), which defaults to 16px in most browsers.'
  },
  {
    id: 'html-8',
    category: 'html-css',
    difficulty: 'medium',
    question: 'In a CSS Flexbox container with `flex-direction: row`, which property aligns items along the cross axis (vertical)?',
    options: ['align-items', 'justify-content', 'flex-wrap', 'align-content'],
    correctAnswer: 'align-items',
    explanation: 'With `flex-direction: row`, `justify-content` aligns items along the main axis (horizontal), while `align-items` aligns items along the cross axis (vertical).'
  },
  {
    id: 'html-9',
    category: 'html-css',
    difficulty: 'medium',
    question: 'Which of the following CSS selectors has the highest specificity weight?',
    options: ['#main-header (ID selector)', '.nav-item (Class selector)', 'nav li a (Element selectors)', '* (Universal selector)'],
    correctAnswer: '#main-header (ID selector)',
    explanation: 'Specificity hierarchy ranks: Inline styles (1000) > ID selectors (100) > Class / Attribute / Pseudo-class (10) > Elements / Pseudo-elements (1) > Universal (* = 0).'
  },
  {
    id: 'html-10',
    category: 'html-css',
    difficulty: 'medium',
    question: 'What is the foundational layout conceptual difference between CSS Grid and Flexbox?',
    options: [
      'CSS Grid is two-dimensional (rows and columns simultaneously), while Flexbox is one-dimensional (single row or column)',
      'CSS Grid is only for mobile screens, while Flexbox is for desktop screens',
      'Flexbox requires JavaScript polyfills, while CSS Grid is natively supported',
      'CSS Grid cannot align items vertically'
    ],
    correctAnswer: 'CSS Grid is two-dimensional (rows and columns simultaneously), while Flexbox is one-dimensional (single row or column)',
    explanation: 'Flexbox is primarily designed for layout in one dimension at a time (either row or column). CSS Grid is designed for two-dimensional layout, controlling rows and columns simultaneously.'
  },
  {
    id: 'html-11',
    category: 'html-css',
    difficulty: 'hard',
    question: 'Which CSS property combination will establish a new Block Formatting Context (BFC)?',
    options: [
      'overflow: hidden, display: flow-root, or display: flex',
      'color: inherit and font-weight: bold',
      'margin: 0 auto and text-align: center',
      'position: relative with z-index: 1'
    ],
    correctAnswer: 'overflow: hidden, display: flow-root, or display: flex',
    explanation: 'A Block Formatting Context (BFC) prevents margin collapsing and contains internal floats. It is triggered by `display: flow-root`, `overflow: hidden/auto`, `position: absolute/fixed`, and flex/grid containers.'
  },
  {
    id: 'html-12',
    category: 'html-css',
    difficulty: 'hard',
    question: 'What capability does `grid-template-columns: subgrid` introduce?',
    options: [
      'Allows a nested grid item to inherit and align with the column tracks of its parent grid',
      'Creates a 3D isometric grid plane',
      'Automatically converts CSS Grid into Flexbox on small screens',
      'Generates recursive virtual columns based on viewport density'
    ],
    correctAnswer: 'Allows a nested grid item to inherit and align with the column tracks of its parent grid',
    explanation: '`subgrid` allows a child grid item to participate directly in its parent\'s grid tracks instead of defining its own independent grid tracks.'
  },
  {
    id: 'html-13',
    category: 'html-css',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS `contain` property (e.g., `contain: content`)?',
    options: [
      'Indicates to the browser engine that an element\'s subtree is independent from the rest of the page for rendering optimizations',
      'Forces an image to fit inside its container without cropping',
      'Enforces strict sandboxing rules prohibiting JavaScript execution',
      'Encrypts internal DOM markup from browser inspect tools'
    ],
    correctAnswer: 'Indicates to the browser engine that an element\'s subtree is independent from the rest of the page for rendering optimizations',
    explanation: 'The `contain` property allows an author to indicate that an element and its contents are, as much as possible, independent of the rest of the document tree, enabling browser rendering engines to isolate re-layout and repaint work.'
  },
  {
    id: 'html-14',
    category: 'html-css',
    difficulty: 'hard',
    question: 'What does the CSS `will-change` property do when applied to an element?',
    options: [
      'Hints to the browser what properties are expected to animate so it can set up hardware acceleration optimizations ahead of time',
      'Automatically animates the element on mouse hover without keyframes',
      'Prevents any CSS mutations from JavaScript',
      'Tells the browser to invert the color theme dynamically'
    ],
    correctAnswer: 'Hints to the browser what properties are expected to animate so it can set up hardware acceleration optimizations ahead of time',
    explanation: '`will-change` warns the browser about changes before they happen, allowing it to prepare ahead of time by creating dedicated compositor layers and utilizing GPU acceleration.'
  },
  {
    id: 'html-15',
    category: 'html-css',
    difficulty: 'hard',
    question: 'For `position: sticky` to function properly, what is a mandatory requirement?',
    options: [
      'At least one threshold property (top, right, bottom, or left) must be specified, and no ancestor should have `overflow: hidden` without appropriate sizing',
      'The element must have a fixed height of exactly 100vh',
      'The parent element must have `position: static` only',
      'A CSS animation keyframe must be bound to the sticky element'
    ],
    correctAnswer: 'At least one threshold property (top, right, bottom, or left) must be specified, and no ancestor should have `overflow: hidden` without appropriate sizing',
    explanation: '`position: sticky` acts as relative until a threshold (such as `top: 0`) is met relative to its nearest scrolling ancestor. If an ancestor has `overflow: hidden` or no threshold is set, stickiness fails.'
  },

  // ==========================================
  // GENERAL KNOWLEDGE & COMPUTER SCIENCE (15 Questions)
  // ==========================================
  {
    id: 'gk-1',
    category: 'general-knowledge',
    difficulty: 'easy',
    question: 'Who is recognized as the inventor of the World Wide Web in 1989?',
    options: ['Tim Berners-Lee', 'Alan Turing', 'Bill Gates', 'Ada Lovelace'],
    correctAnswer: 'Tim Berners-Lee',
    explanation: 'Sir Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN, developing HTML, HTTP, and the first web browser.'
  },
  {
    id: 'gk-2',
    category: 'general-knowledge',
    difficulty: 'easy',
    question: 'What does HTTP stand for in computer networking?',
    options: [
      'HyperText Transfer Protocol',
      'High-speed Technical Transmission Process',
      'Hyperlink Text Technology Program',
      'Host Terminal Transport Provider'
    ],
    correctAnswer: 'HyperText Transfer Protocol',
    explanation: 'HTTP stands for HyperText Transfer Protocol, the foundational protocol used by the World Wide Web to transmit web pages and hypermedia documents.'
  },
  {
    id: 'gk-3',
    category: 'general-knowledge',
    difficulty: 'easy',
    question: 'What type of software tool is Git?',
    options: [
      'A distributed version control system',
      'A relational database management system',
      'A cloud hosting service',
      'A programming language compiler'
    ],
    correctAnswer: 'A distributed version control system',
    explanation: 'Git is a distributed version control system created by Linus Torvalds in 2005 to track changes in source code during software development.'
  },
  {
    id: 'gk-4',
    category: 'general-knowledge',
    difficulty: 'easy',
    question: 'Which communication protocol encrypts web traffic using TLS/SSL?',
    options: ['HTTPS', 'HTTP', 'FTP', 'Telnet'],
    correctAnswer: 'HTTPS',
    explanation: 'HTTPS (HyperText Transfer Protocol Secure) encrypts communication over a computer network using Transport Layer Security (TLS).'
  },
  {
    id: 'gk-5',
    category: 'general-knowledge',
    difficulty: 'easy',
    question: 'Which fundamental data structure operates strictly on a Last-In, First-Out (LIFO) basis?',
    options: ['Stack', 'Queue', 'Array', 'Linked List'],
    correctAnswer: 'Stack',
    explanation: 'A Stack follows the LIFO (Last In, First Out) principle, where the last item pushed onto the stack is the first one to be popped off.'
  },
  {
    id: 'gk-6',
    category: 'general-knowledge',
    difficulty: 'medium',
    question: 'What is the primary function of the Domain Name System (DNS)?',
    options: [
      'Translates human-readable domain names (like example.com) into numerical IP addresses',
      'Encrypts passwords stored inside web servers',
      'Compresses images before sending them over the internet',
      'Assigns MAC addresses to physical network routers'
    ],
    correctAnswer: 'Translates human-readable domain names (like example.com) into numerical IP addresses',
    explanation: 'DNS acts as the phonebook of the Internet, translating human-friendly hostnames (such as google.com) into IP addresses that computers use to route packets.'
  },
  {
    id: 'gk-7',
    category: 'general-knowledge',
    difficulty: 'medium',
    question: 'What is the average time complexity of searching for an item in a balanced Binary Search Tree (BST)?',
    options: ['O(log n)', 'O(1)', 'O(n)', 'O(n log n)'],
    correctAnswer: 'O(log n)',
    explanation: 'In a balanced binary search tree (such as an AVL or Red-Black tree), half the remaining nodes are eliminated at each comparison step, yielding O(log n) time complexity.'
  },
  {
    id: 'gk-8',
    category: 'general-knowledge',
    difficulty: 'medium',
    question: 'What does REST stand for in web architecture and API design?',
    options: [
      'Representational State Transfer',
      'Remote Execution Standard Transmission',
      'Responsive Element Styling Template',
      'Routing Endpoint System Technology'
    ],
    correctAnswer: 'Representational State Transfer',
    explanation: 'REST stands for Representational State Transfer, an architectural style for providing standards between computer systems on the web, introduced by Roy Fielding.'
  },
  {
    id: 'gk-9',
    category: 'general-knowledge',
    difficulty: 'medium',
    question: 'What distinguishes asymmetric cryptography from symmetric cryptography?',
    options: [
      'Asymmetric encryption uses a public key for encryption and a distinct private key for decryption',
      'Asymmetric encryption requires no keys whatsoever',
      'Symmetric encryption is only usable for text files',
      'Asymmetric encryption always runs 1000x faster than symmetric encryption'
    ],
    correctAnswer: 'Asymmetric encryption uses a public key for encryption and a distinct private key for decryption',
    explanation: 'Symmetric cryptography uses the same secret key for both encryption and decryption. Asymmetric cryptography (public key cryptography) uses a mathematically linked pair: a public key to encrypt and a private key to decrypt.'
  },
  {
    id: 'gk-10',
    category: 'general-knowledge',
    difficulty: 'medium',
    question: 'What is the standard length of an IPv4 address in bits?',
    options: ['32 bits', '64 bits', '128 bits', '256 bits'],
    correctAnswer: '32 bits',
    explanation: 'An IPv4 address is 32 bits long (expressed as 4 decimal octets separated by dots, e.g., 192.168.1.1). IPv6 addresses are 128 bits long.'
  },
  {
    id: 'gk-11',
    category: 'general-knowledge',
    difficulty: 'hard',
    question: 'What does the Byzantine Generals Problem illustrate in distributed systems?',
    options: [
      'The challenge of reaching consensus among distributed actors when some participants may fail or transmit contradictory/corrupt information',
      'How to sort an unsorted array across multiple CPU cores without mutex locks',
      'The mathematical proof that P equals NP in computational complexity',
      'The vulnerability of wireless networks to physical eavesdropping'
    ],
    correctAnswer: 'The challenge of reaching consensus among distributed actors when some participants may fail or transmit contradictory/corrupt information',
    explanation: 'The Byzantine Generals Problem models the difficulty distributed systems face when trying to agree on a single strategy with unreliable communication channels and potentially malicious nodes.'
  },
  {
    id: 'gk-12',
    category: 'general-knowledge',
    difficulty: 'hard',
    question: 'In database management systems, what does the ACID acronym stand for?',
    options: [
      'Atomicity, Consistency, Isolation, Durability',
      'Asynchronous, Concurrency, Indexing, Data',
      'Authentication, Cryptography, Integrity, Distribution',
      'Access, Control, Identification, Delegation'
    ],
    correctAnswer: 'Atomicity, Consistency, Isolation, Durability',
    explanation: 'ACID guarantees database transaction reliability: Atomicity (all or nothing), Consistency (preserves validity rules), Isolation (concurrent transactions do not interfere), Durability (committed data survives crashes).'
  },
  {
    id: 'gk-13',
    category: 'general-knowledge',
    difficulty: 'hard',
    question: 'What is a defining characteristic of a Bloom Filter probabilistic data structure?',
    options: [
      'It can yield false positive matches, but never false negative matches',
      'It can yield false negative matches, but never false positive matches',
      'It guarantees 100% exact retrieval of stored values with zero error rate',
      'It automatically resizes itself to avoid hash collisions'
    ],
    correctAnswer: 'It can yield false positive matches, but never false negative matches',
    explanation: 'A Bloom filter is an extremely space-efficient probabilistic data structure. Querying returns either "possibly in set" (false positive chance) or "definitely not in set" (zero false negatives).'
  },
  {
    id: 'gk-14',
    category: 'general-knowledge',
    difficulty: 'hard',
    question: 'In modern operating systems, what is the key difference between a process and a thread?',
    options: [
      'A process has its own independent address space; threads within the same process share that memory address space',
      'Threads have separate memory address spaces; processes share heap memory',
      'Processes can only execute on single-core CPUs; threads require multicore CPUs',
      'Threads are managed strictly by hardware, while processes are managed by software'
    ],
    correctAnswer: 'A process has its own independent address space; threads within the same process share that memory address space',
    explanation: 'A process provides the resources needed to execute a program (including a private address space). Threads are execution units that run inside a process and share its heap, global variables, and system resources.'
  },
  {
    id: 'gk-15',
    category: 'general-knowledge',
    difficulty: 'hard',
    question: 'How did TLS 1.3 significantly reduce network connection latency compared to TLS 1.2?',
    options: [
      'By reducing the cryptographic handshake from two round trips (2-RTT) down to one round trip (1-RTT) and introducing 0-RTT resumption',
      'By eliminating public key encryption entirely in favor of plain HTTP headers',
      'By replacing TCP transport protocol with raw UDP without packet verification',
      'By requiring client certificates for all outbound browser requests'
    ],
    correctAnswer: 'By reducing the cryptographic handshake from two round trips (2-RTT) down to one round trip (1-RTT) and introducing 0-RTT resumption',
    explanation: 'TLS 1.3 streamlined the handshake process, allowing a full connection handshake in 1-RTT (one round-trip time) instead of 2-RTT in TLS 1.2, and supports 0-RTT resumption for returning clients.'
  }
];

