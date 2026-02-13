console.log("init-quiz.js loaded");

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded in init-quiz.js");
    
    // Shared listeners for all quizzes
    const startBtn = document.getElementById('start-btn');
    const prevBtn = document.getElementById('prev-btn');
    const flagBtn = document.getElementById('flag-btn');
    const finishBtn = document.getElementById('finish-btn');
    const reloadBtn = document.getElementById('reload-btn');

    if (startBtn) {
        console.log("Attaching listener to start-btn");
        startBtn.addEventListener('click', () => {
            console.log("Start button clicked");
            if (typeof MASTER_POOL !== 'undefined') {
                initQuiz(MASTER_POOL, 120);
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
        console.log("Reloading...");
        location.reload();
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
