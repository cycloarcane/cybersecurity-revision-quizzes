console.log("init-index.js loaded");

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.quiz-item');
    
    items.forEach(item => {
        const href = item.getAttribute('data-href');
        const quizId = href.substring(href.lastIndexOf('/') + 1) || 'index.html';
        const highScore = localStorage.getItem(`high_score_${quizId}`);
        if (highScore !== null) {
            const scoreBadge = document.createElement('div');
            scoreBadge.className = 'high-score-badge';
            scoreBadge.innerText = `Best: ${highScore}%`;
            item.appendChild(scoreBadge);
        }

        item.addEventListener('click', () => {
            if (href) {
                console.log("Navigating to: " + href);
                window.location.href = href;
            }
        });
    });
});
