console.log("init-index.js loaded");

function getQuizId(href) {
    if (!href) return 'index.html';
    let file = href.substring(href.lastIndexOf('/') + 1);
    file = file.split('?')[0].split('#')[0];
    return file;
}

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.quiz-item');
    
    items.forEach(item => {
        const href = item.getAttribute('data-href');
        const quizId = getQuizId(href);
        
        // Wrap existing content into a quiz-info container
        const title = item.querySelector('h2');
        const desc = item.querySelector('p');
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'quiz-info';
        if (title) infoDiv.appendChild(title);
        if (desc) infoDiv.appendChild(desc);
        
        const statsDiv = document.createElement('div');
        statsDiv.className = 'quiz-stats';
        
        item.innerHTML = ''; // Clear original
        item.appendChild(infoDiv);
        item.appendChild(statsDiv);

        // 1. High Score Badge
        const highScore = localStorage.getItem(`high_score_${quizId}`);
        if (highScore !== null) {
            const scoreBadge = document.createElement('div');
            scoreBadge.className = 'high-score-badge';
            scoreBadge.innerText = `Best: ${highScore}%`;
            statsDiv.appendChild(scoreBadge);
        }

        // 2. Progress Badge
        const savedState = localStorage.getItem(`state_${quizId}`);
        if (savedState) {
            try {
                const state = JSON.parse(savedState);
                const answeredCount = Object.keys(state.answered || {}).length;
                if (answeredCount > 0) {
                    const progressBadge = document.createElement('div');
                    progressBadge.className = 'progress-badge';
                    progressBadge.innerText = `In Progress: ${answeredCount}/${state.TOTAL_QUESTIONS}`;
                    statsDiv.appendChild(progressBadge);
                }
            } catch (e) { console.error("Error parsing state for badge", e); }
        }

        item.addEventListener('click', () => {
            if (href) {
                window.location.href = href;
            }
        });
    });

    // Handle Category Expansion
    const headers = document.querySelectorAll('.category-header, .sub-category-header');
    headers.forEach(header => {
        header.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetId = header.getAttribute('data-target');
            const targetList = document.getElementById(targetId);
            header.classList.toggle('active');
            if (targetList) {
                targetList.classList.toggle('collapsed');
            }
        });
    });
});
