console.log("quiz.js loaded");

let examQs = [], userAns = {}, flagged = {}, curr = 0, answered = {};
let TOTAL_QUESTIONS = 0;

function initQuiz(pool, total) {
    console.log("Initializing quiz with pool size:", pool.length);
    // Reset state
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

    document.getElementById('start-screen').style.display='none';
    document.getElementById('results-screen').style.display='none';
    document.getElementById('exam-ui').style.display='flex';
    document.getElementById('footer').style.display='flex';

    renderSide();
    loadQ(0);
    updateProgress();
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

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const activeNav = document.getElementById(`nav-${i}`);
    if (activeNav) activeNav.classList.add('active');
    
    document.getElementById('status').innerText = `Q ${i+1} / ${TOTAL_QUESTIONS}`;

    const con = document.getElementById('question-container');
    if (!con) return;
    con.innerHTML='';
    const card = document.createElement('div');
    card.className='card';

    // Metadata
    const meta = document.createElement('div');
    meta.className = 'q-meta';
    meta.innerHTML = `<span class="tag">${q.c}</span><span class="q-num">#${i+1}</span>`;
    card.appendChild(meta);

    // Question Text
    const qText = document.createElement('div');
    qText.className = 'q-text';
    qText.innerText = q.q;
    card.appendChild(qText);

    const isAnswered = answered[i] !== undefined;

    q._opts.forEach((o, oi) => {
        const optDiv = document.createElement('div');
        optDiv.className = 'option';
        optDiv.innerText = o;
        
        if (isAnswered) {
            optDiv.classList.add('locked');
            if (o === q.a) optDiv.classList.add('opt-correct');
            else if (o === userAns[i]) optDiv.classList.add('opt-wrong');
            else optDiv.classList.add('opt-dim');
        } else {
            optDiv.addEventListener('click', () => ans(i, oi));
        }
        card.appendChild(optDiv);
    });

    if (isAnswered) {
        const wasCorrect = userAns[i] === q.a;
        const expBox = document.createElement('div');
        expBox.className = 'explanation-box';
        expBox.innerHTML = `<strong>${wasCorrect ? '✓ Correct' : '✗ Incorrect'}</strong><br>${q.e}`;
        card.appendChild(expBox);
    }

    con.appendChild(card);
    con.scrollTop = 0;

    const nfb = document.getElementById('next-footer-btn');
    if (nfb) {
        if (isAnswered && i < TOTAL_QUESTIONS - 1) nfb.classList.add('show');
        else nfb.classList.remove('show');
    }
}

function ans(qi, optIdx) {
    const q = examQs[qi];
    userAns[qi] = q._opts[optIdx];
    answered[qi] = true;

    const navBtn = document.getElementById(`nav-${qi}`);
    if (navBtn) {
        if (userAns[qi] === q.a) {
            navBtn.classList.add('answered-correct');
        } else {
            navBtn.classList.add('answered-wrong');
        }
    }

    loadQ(qi);
    updateProgress();
}

function nav(d) {
    const n = curr + d;
    if(n >= 0 && n < TOTAL_QUESTIONS) loadQ(n);
}

function flag() {
    flagged[curr] = !flagged[curr];
    const b = document.getElementById(`nav-${curr}`);
    if (b) {
        if(flagged[curr]) b.classList.add('flagged');
        else b.classList.remove('flagged');
    }
}

function finish() {
    if(!confirm('Finish the quiz and see your results?')) return;
    document.getElementById('exam-ui').style.display='none';
    document.getElementById('footer').style.display='none';

    const resScreen = document.getElementById('results-screen');
    resScreen.style.display='block';
    resScreen.scrollTop = 0;

    let score = 0;
    const reviewList = document.getElementById('review-list');
    if (!reviewList) return;
    reviewList.innerHTML = '';

    examQs.forEach((q, i) => {
        const correct = userAns[i] === q.a;
        if(correct) score++;
        
        const item = document.createElement('div');
        item.className = `review-item ${correct?'correct':'wrong'}`;
        
        const title = document.createElement('strong');
        title.innerText = `Q${i+1} [${q.c}]: ${q.q}`;
        item.appendChild(title);
        item.appendChild(document.createElement('br'));
        
        const yourAns = document.createElement('span');
        yourAns.innerHTML = `Your Answer: <b style="color:${correct?'#3fb950':'#ff7b72'}">${userAns[i]||'Skipped'}</b>`;
        item.appendChild(yourAns);
        item.appendChild(document.createElement('br'));
        
        if (!correct) {
            const correctAns = document.createElement('span');
            correctAns.innerHTML = `Correct Answer: <b style="color:#3fb950">${q.a}</b>`;
            item.appendChild(correctAns);
            item.appendChild(document.createElement('br'));
        }
        
        const rationale = document.createElement('div');
        rationale.className = 'review-explanation';
        rationale.innerText = `Rationale: ${q.e}`;
        item.appendChild(rationale);
        
        reviewList.appendChild(item);
    });

    const pct = Math.round((score/TOTAL_QUESTIONS)*100);

    document.getElementById('score-circle').innerText = `${pct}%`;
    document.getElementById('raw-score').innerText = `You answered ${score} out of ${TOTAL_QUESTIONS} questions correctly.`;
}

function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    if (sb) sb.classList.toggle('open');
}
