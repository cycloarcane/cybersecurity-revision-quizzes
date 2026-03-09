console.log("init-index.js loaded");

function getQuizId(href) {
    if (!href) return 'index.html';
    let file = href.substring(href.lastIndexOf('/') + 1);
    file = file.split('?')[0].split('#')[0];
    return file;
}

document.addEventListener('DOMContentLoaded', () => {
    // Handle High Score Badges and Resume Buttons
    const items = document.querySelectorAll('.quiz-item');
    items.forEach(item => {
        const href = item.getAttribute('data-href');
        const quizId = getQuizId(href);
        
        // 1. High Score Badge
        const highScore = localStorage.getItem(`high_score_${quizId}`);
        if (highScore !== null) {
            const scoreBadge = document.createElement('div');
            scoreBadge.className = 'high-score-badge';
            scoreBadge.innerText = `Best: ${highScore}%`;
            item.appendChild(scoreBadge);
        }

        // 2. Resume Session Button
        const savedState = localStorage.getItem(`state_${quizId}`);
        if (savedState) {
            try {
                const state = JSON.parse(savedState);
                const answeredCount = Object.keys(state.answered || {}).length;
                
                if (answeredCount > 0) {
                    const resumeBtn = document.createElement('button');
                    resumeBtn.className = 'resume-btn';
                    resumeBtn.innerText = `Resume Progress (${answeredCount} / ${state.TOTAL_QUESTIONS})`;
                    
                    resumeBtn.addEventListener('click', (e) => {
                        e.stopPropagation(); // Prevent the parent .quiz-item click
                        window.location.href = `${href}?resume=true`;
                    });
                    
                    item.appendChild(resumeBtn);
                }
            } catch (err) {
                console.error("Error parsing saved state", err);
            }
        }

        // Parent click starts fresh
        item.addEventListener('click', () => {
            if (href) {
                window.location.href = href;
            }
        });
    });

    // Handle Category Expansion
    const headers = document.querySelectorAll('.category-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.getAttribute('data-target');
            const targetList = document.getElementById(targetId);
            header.classList.toggle('active');
            if (targetList) {
                targetList.classList.toggle('collapsed');
            }
        });
    });
});
