console.log("quiz.js loaded");

let examQs = [], userAns = {}, flagged = {}, curr = 0, answered = {};
let TOTAL_QUESTIONS = 0;

function esc(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function getQuizId() {
    let path = window.location.pathname;
    let file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    if (file.includes('\\')) file = file.substring(file.lastIndexOf('\\') + 1);
    file = file.split('?')[0].split('#')[0];
    return file;
}

function saveProgress() {
    const quizId = getQuizId();
    const state = {
        examQs: examQs,
        userAns: userAns,
        flagged: flagged,
        curr: curr,
        answered: answered,
        TOTAL_QUESTIONS: TOTAL_QUESTIONS,
        timestamp: Date.now()
    };
    localStorage.setItem(`state_${quizId}`, JSON.stringify(state));
}

function clearProgress() {
    const quizId = getQuizId();
    localStorage.removeItem(`state_${quizId}`);
}

function displayHighScore() {
    const quizId = getQuizId();
    const highScore = localStorage.getItem(`high_score_${quizId}`);
    const highScoreDiv = document.getElementById('high-score');
    if (highScoreDiv) {
        if (highScore !== null) {
            highScoreDiv.innerText = `Best Score: ${highScore}%`;
            highScoreDiv.style.display = 'block';
        } else {
            highScoreDiv.style.display = 'none';
        }
    }
}

// Auto-Resume UI logic
function checkResume() {
    const quizId = getQuizId();
    const saved = localStorage.getItem(`state_${quizId}`);
    if (saved) {
        try {
            const state = JSON.parse(saved);
            const answeredCount = Object.keys(state.answered || {}).length;
            if (answeredCount > 0) {
                const actionsDiv = document.querySelector('.start-actions');
                if (actionsDiv && !document.getElementById('resume-btn')) {
                    const resumeBtn = document.createElement('button');
                    resumeBtn.id = 'resume-btn';
                    resumeBtn.className = 'btn btn-g';
                    resumeBtn.style.marginTop = '10px';
                    resumeBtn.innerText = `Resume Quiz (${answeredCount} / ${state.TOTAL_QUESTIONS})`;
                    resumeBtn.addEventListener('click', () => {
                        initQuiz(MASTER_POOL, state.TOTAL_QUESTIONS, state);
                    });
                    actionsDiv.appendChild(resumeBtn);
                }
            }
        } catch (e) { console.error("Error checking resume", e); }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayHighScore();
    checkResume();
});

function initQuiz(pool, total, resumeState = null) {
    if (resumeState) {
        examQs = resumeState.examQs;
        userAns = resumeState.userAns;
        flagged = resumeState.flagged;
        curr = resumeState.curr;
        answered = resumeState.answered;
        TOTAL_QUESTIONS = resumeState.TOTAL_QUESTIONS || total;
    } else {
        examQs = [];
        userAns = {};
        flagged = {};
        curr = 0;
        answered = {};
        
        TOTAL_QUESTIONS = total || pool.length;
        if (TOTAL_QUESTIONS > pool.length) TOTAL_QUESTIONS = pool.length;

        let shuffledPool = [...pool];
        for (let i = shuffledPool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledPool[i], shuffledPool[j]] = [shuffledPool[j], shuffledPool[i]];
        }
        
        examQs = shuffledPool.slice(0, TOTAL_QUESTIONS);

        examQs.forEach((q, i) => {
            let opts = [q.a, ...q.d];
            for (let j = opts.length - 1; j > 0; j--) {
                const k = Math.floor(Math.random() * (j + 1));
                [opts[j], opts[k]] = [opts[k], opts[j]];
            }
            examQs[i]._opts = opts;
        });
    }

    document.getElementById('start-screen').style.display='none';
    document.getElementById('results-screen').style.display='none';
    document.querySelector('.header').style.display='flex';
    document.getElementById('exam-ui').style.display='flex';
    document.getElementById('footer').style.display='flex';

    renderSide();
    loadQ(curr);
    updateProgress();
    
    if (!resumeState) saveProgress();
}

function updateProgress() {
    const cnt = Object.keys(answered).length;
    document.getElementById('progress-display').innerText = `${cnt} / ${TOTAL_QUESTIONS}`;
    const fb = document.getElementById('finish-btn');
    if (fb) {
        if (cnt === TOTAL_QUESTIONS) fb.classList.add('show');
        else fb.classList.remove('show');
    }
}

function renderSide() {
    const sb = document.getElementById('sidebar');
    if (!sb) return;
    sb.innerHTML='';
    examQs.forEach((q,i) => {
        const b = document.createElement('button');
        b.className = 'nav-btn';
        if (flagged[i]) b.classList.add('flagged');
        if (answered[i] !== undefined) b.classList.add('answered');
        b.innerText = i+1;
        b.id = `nav-${i}`;
        b.addEventListener('click', () => {
            loadQ(i);
            if (window.innerWidth <= 768) {
                const sbObj = document.getElementById('sidebar');
                if (sbObj.classList.contains('open')) sbObj.classList.remove('open');
            }
        });
        sb.appendChild(b);
    });
}

function loadQ(i) {
    curr = i;
    const q = examQs[i];
    const container = document.getElementById('question-container');
    container.innerHTML = '';

    const card = document.createElement('div');
    card.className = 'card';

    const meta = document.createElement('div');
    meta.className = 'q-meta';
    
    let metaHTML = `<div style="display:flex; align-items:center; gap:10px;"><span class="tag">${esc(q.c)}</span><span class="q-num">#${i+1}</span></div>`;
    if (flagged[i]) {
        metaHTML += `<span class="tag" style="background:var(--warning); color:#111;">FLAGGED</span>`;
    }
    meta.innerHTML = metaHTML;
    card.appendChild(meta);

    const qText = document.createElement('div');
    qText.className = 'q-text';
    qText.innerText = q.q;
    card.appendChild(qText);

    const optsDiv = document.createElement('div');
    optsDiv.className = 'options';

    q._opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option';
        
        // Highlighting Logic
        if (userAns[i]) {
            if (opt === q.a) {
                btn.classList.add('opt-correct'); // Always show correct answer
            } else if (userAns[i] === opt) {
                btn.classList.add('opt-wrong'); // Show user's wrong choice
            }
            if (userAns[i] === opt) btn.classList.add('selected');
        }
        
        btn.innerText = opt;
        btn.addEventListener('click', () => select(opt, btn));
        optsDiv.appendChild(btn);
    });

    card.appendChild(optsDiv);

    if (userAns[i]) {
        const exp = document.createElement('div');
        exp.className = 'explanation-box';
        exp.innerHTML = `<strong>Explanation:</strong> ${esc(q.e)}`;
        card.appendChild(exp);

        const nextWrap = document.createElement('div');
        nextWrap.className = 'next-btn-wrap';
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn btn-p';
        nextBtn.innerText = (i === TOTAL_QUESTIONS - 1) ? 'Finish' : 'Next Question';
        nextBtn.addEventListener('click', () => {
            if (i === TOTAL_QUESTIONS - 1) finish();
            else nav(1);
        });
        nextWrap.appendChild(nextBtn);
        card.appendChild(nextWrap);
    }

    container.appendChild(card);

    document.getElementById('status').innerText = `Q ${i+1} / ${TOTAL_QUESTIONS}`;
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const activeNav = document.getElementById(`nav-${i}`);
    if (activeNav) activeNav.classList.add('active');
    
    // Update Flag button text
    const flagBtn = document.getElementById('flag-btn');
    if (flagBtn) {
        flagBtn.innerText = flagged[i] ? 'Unflag' : 'Flag';
    }
    
    saveProgress();
}

function select(opt, btn) {
    if (userAns[curr]) return; 
    userAns[curr] = opt;
    answered[curr] = true;
    loadQ(curr);
    updateProgress();
    saveProgress();
}

function nav(dir) {
    let next = curr + dir;
    if (next >= 0 && next < TOTAL_QUESTIONS) {
        loadQ(next);
    }
}

function flag() {
    const navBtn = document.getElementById(`nav-${curr}`);
    if (flagged[curr]) {
        delete flagged[curr];
        if (navBtn) navBtn.classList.remove('flagged');
    } else {
        flagged[curr] = true;
        if (navBtn) navBtn.classList.add('flagged');
    }
    loadQ(curr); // Re-render to show "FLAGGED" tag on card
    saveProgress();
}

function finish() {
    if (Object.keys(answered).length < TOTAL_QUESTIONS) {
        if (!confirm("You haven't answered all questions. Finish anyway?")) return;
    }

    document.getElementById('exam-ui').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';

    let score = 0;
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';

    examQs.forEach((q, i) => {
        const isCorrect = userAns[i] === q.a;
        if (isCorrect) score++;

        const item = document.createElement('div');
        item.className = `review-item ${isCorrect ? 'correct' : 'wrong'}`;
        item.innerHTML = `
            <div class="review-q">${i+1}. ${esc(q.q)}</div>
            <div class="review-ans">Your Answer: ${esc(userAns[i] || 'None')}</div>
            <div class="review-correct">Correct Answer: ${esc(q.a)}</div>
            <div class="review-explanation">${esc(q.e)}</div>
        `;
        reviewList.appendChild(item);
    });

    const pct = Math.round((score/TOTAL_QUESTIONS)*100);

    const quizId = getQuizId();
    const oldHigh = localStorage.getItem(`high_score_${quizId}`);
    if (oldHigh === null || pct > parseInt(oldHigh)) {
        localStorage.setItem(`high_score_${quizId}`, pct);
    }

    document.getElementById('score-circle').innerText = `${pct}%`;
    document.getElementById('raw-score').innerText = `You answered ${score} out of ${TOTAL_QUESTIONS} questions correctly.`;
    
    clearProgress();
}

function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    if (sb) sb.classList.toggle('open');
}
