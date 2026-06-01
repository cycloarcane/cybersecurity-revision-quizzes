console.log("init-quiz.js loaded");

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded in init-quiz.js");
    
    // Shared listeners for all quizzes
    const startBtn = document.getElementById('start-btn');
    const homeBtn = document.getElementById('home-btn');
    const restartBtn = document.getElementById('restart-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextFooterBtn = document.getElementById('next-footer-btn');
    const flagBtn = document.getElementById('flag-btn');
    const finishBtn = document.getElementById('finish-btn');
    const reloadBtn = document.getElementById('reload-btn');
    const reviewBtn = document.getElementById('review-btn');
    const resultsHomeBtn = document.getElementById('results-home-btn');
    const backBtn = document.getElementById('back-btn');

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = '../../index.html';
        });
    }

    if (reviewBtn) {
        reviewBtn.addEventListener('click', () => {
            // results-screen is hidden, review-list remains
            document.getElementById('score-circle').style.display = 'none';
        });
    }

    if (resultsHomeBtn) {
        resultsHomeBtn.addEventListener('click', () => {
            window.location.href = '../../index.html';
        });
    }

    if (nextFooterBtn) {
        nextFooterBtn.addEventListener('click', () => nav(1));
    }

    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            if (confirm("Go back to the main menu? Progress will be lost.")) {
                window.location.href = '../../index.html';
            }
        });
    }

    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            if (confirm("Restart this quiz?")) {
                location.reload();
            }
        });
    }

    // Dynamic Question Count Update
    const TARGET_QUESTIONS = 30;

    if (typeof MASTER_POOL !== 'undefined') {
        const actualToAsk = Math.min(TARGET_QUESTIONS, MASTER_POOL.length);
        const statNums = document.querySelectorAll('.stat-num');
        if (statNums.length > 0) {
            statNums[0].innerText = `${actualToAsk} / ${MASTER_POOL.length}`;
        }
        const headerProgress = document.getElementById('progress-display');
        if (headerProgress) headerProgress.innerText = `0 / ${actualToAsk}`;
        const footerStatus = document.getElementById('status');
        if (footerStatus) footerStatus.innerText = `Q 1 / ${actualToAsk}`;
    }

    if (startBtn) {
        console.log("Attaching listener to start-btn");
        startBtn.addEventListener('click', () => {
            console.log("Start button clicked");
            if (typeof MASTER_POOL !== 'undefined') {
                const actualToAsk = Math.min(TARGET_QUESTIONS, MASTER_POOL.length);
                initQuiz(MASTER_POOL, actualToAsk);
            } else {
                console.error("MASTER_POOL is not defined. Data file might have failed to load.");
                alert("Error: Quiz data not found.");
            }
        });
    }
    
    if (prevBtn) prevBtn.addEventListener('click', () => nav(-1));
    if (flagBtn) flagBtn.addEventListener('click', flag);
    if (finishBtn) finishBtn.addEventListener('click', finish);
    if (reloadBtn) reloadBtn.addEventListener('click', () => {
        window.location.href = '../../index.html';
    });
    
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleSidebar);
        // Show menu toggle on mobile
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
        }
    }
});
