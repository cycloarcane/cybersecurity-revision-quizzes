console.log("init-index.js loaded");

document.addEventListener('DOMContentLoaded', () => {
    // Handle High Score Badges
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
            
            // Toggle active class on header
            header.classList.toggle('active');
            
            // Toggle collapsed class on list
            if (targetList) {
                targetList.classList.toggle('collapsed');
            }

            // Close other categories (optional, for accordion effect)
            /*
            headers.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.classList.remove('active');
                    const otherTarget = document.getElementById(otherHeader.getAttribute('data-target'));
                    if (otherTarget) otherTarget.classList.add('collapsed');
                }
            });
            */
        });
    });
});
