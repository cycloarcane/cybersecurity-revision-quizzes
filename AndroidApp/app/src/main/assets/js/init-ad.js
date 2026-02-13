document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-btn').addEventListener('click', () => initQuiz(MASTER_POOL, 120));
    document.getElementById('prev-btn').addEventListener('click', () => nav(-1));
    document.getElementById('flag-btn').addEventListener('click', flag);
    document.getElementById('finish-btn').addEventListener('click', finish);
    
    const menuToggle = document.getElementById('menu-toggle');
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
        menuToggle.addEventListener('click', toggleSidebar);
    }
});
