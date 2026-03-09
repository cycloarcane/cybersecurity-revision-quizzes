console.log("quiz.js loaded");

let examQs = [], userAns = {}, flagged = {}, curr = 0, answered = {};
let TOTAL_QUESTIONS = 0;

function getQuizId() {
    let path = window.location.pathname;
    let file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    // Ensure we handle file:/// paths correctly by taking only the last part
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

// Auto-Resume check
document.addEventListener('DOMContentLoaded', () => {
    displayHighScore();
    
    const params = new URLSearchParams(window.location.search);
    if (params.get('resume') === 'true') {
        const quizId = getQuizId();
        const saved = localStorage.getItem(`state_${quizId}`);
        if (saved) {
            const state = JSON.parse(saved);
            if (typeof MASTER_POOL !== 'undefined') {
                initQuiz(MASTER_POOL, state.TOTAL_QUESTIONS, state);
            }
        }
    }
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
    meta.innerHTML = `<span class="tag">${q.c}</span><span class="q-num">#${i+1}</span>`;
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
        if (userAns[i] === opt) {
            btn.classList.add('selected');
            if (opt === q.a) btn.classList.add('opt-correct');
            else btn.classList.add('opt-wrong');
        }
        btn.innerText = opt;
        btn.addEventListener('click', () => select(opt, btn));
        optsDiv.appendChild(btn);
    });

    card.appendChild(optsDiv);

    // Explanation Box (Hidden until answer selected)
    if (userAns[i]) {
        const exp = document.createElement('div');
        exp.className = 'explanation-box';
        exp.innerHTML = `<strong>Explanation:</strong> ${q.e}`;
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
    
    saveProgress();
}

function select(opt, btn) {
    if (userAns[curr]) return; // Prevent changing answer

    userAns[curr] = opt;
    answered[curr] = true;
    
    // Refresh the card to show explanation and correct/wrong colors
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
    saveProgress();
}

function finish() {
    if (Object.keys(answered).length < TOTAL_QUESTIONS) {
        if (!confirm("You haven't answered all questions. Finish anyway?")) return;
    }

    document.getElementById('exam-ui').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
    document.getElementById('results-screen').style.display = 'flex';

    let score = 0;
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';

    examQs.forEach((q, i) => {
        const isCorrect = userAns[i] === q.a;
        if (isCorrect) score++;

        const item = document.createElement('div');
        item.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        item.innerHTML = `
            <div class="review-q">${i+1}. ${q.q}</div>
            <div class="review-ans">Your Answer: ${userAns[i] || 'None'}</div>
            <div class="review-correct">Correct Answer: ${q.a}</div>
            <div class="review-explanation">${q.e}</div>
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
