console.log("init-index.js loaded");

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded in index.html");
    const items = document.querySelectorAll('.quiz-item');
    console.log("Found " + items.length + " quiz items");
    items.forEach(item => {
        item.addEventListener('click', () => {
            const href = item.getAttribute('data-href');
            console.log("Navigating to: " + href);
            if (href) {
                window.location.href = href;
            }
        });
    });
});
