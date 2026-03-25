import { initQuiz } from './quiz.js';

document.addEventListener('DOMContentLoaded', () => {
    // The pool is globally defined in the data/compliance.js script tag
    initQuiz(pool, 'compliance.html');
});
