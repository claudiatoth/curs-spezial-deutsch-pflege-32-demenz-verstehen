// ============================================
// FINAL TEST — Pflege 32: Demenz verstehen
// 25 întrebări × 5 categorii
// normalizeAnswerFT elimină . ! ? ; : + .trim() → la propoziții punctul final NU contează
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

function normalizeAnswerFT(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

const finalTestData = [
    // === 1. WAS IST DEMENZ? (5) ===
    { id: 1, category: 'Was ist Demenz?', type: 'fill', question: 'Demența (cu articol): „die ____"', correct: 'Demenz', accept: ['demenz'] },
    { id: 2, category: 'Was ist Demenz?', type: 'mc', question: 'Demența este:', options: ['O etapă normală a bătrâneții', 'O BOALĂ a creierului (cel mai des Alzheimer)', 'Lene', 'Răutate'], correctIndex: 1, correct: 'O boală a creierului — nu bătrânețe normală' },
    { id: 3, category: 'Was ist Demenz?', type: 'fill', question: 'A se rătăci = sich ____', correct: 'verlaufen', accept: ['verlaufen'] },
    { id: 4, category: 'Was ist Demenz?', type: 'mc', question: 'Frau Müller repetă aceeași întrebare de 10 ori. Asta e:', options: ['Făcută în ciudă', 'Un semn al bolii — nu poate altfel', 'Prostie', 'Lene'], correctIndex: 1, correct: 'Un semn al bolii, nu „în ciudă"' },
    { id: 5, category: 'Was ist Demenz?', type: 'fill', question: 'Memoria (cu articol): „das ____"', correct: 'Gedächtnis', accept: ['gedächtnis', 'gedaechtnis'] },

    // === 2. KOMMUNIKATION (5) ===
    { id: 6, category: 'Kommunikation', type: 'mc', question: 'Cum vorbești cu un pacient cu demență?', options: ['Repede și mult', 'Propoziții scurte, o întrebare, calm, contact vizual', 'Îl cert', 'Îl ignor'], correctIndex: 1, correct: 'Scurt, calm, o întrebare, contact vizual' },
    { id: 7, category: 'Kommunikation', type: 'fill', question: 'Răbdarea = die ____', correct: 'Geduld', accept: ['geduld'] },
    { id: 8, category: 'Kommunikation', type: 'mc', question: 'Ce e GREȘIT cu un pacient cu demență?', options: ['Stau în față, la nivelul ochilor', '„Mai știi cine sunt?" — îi testez memoria', 'Zâmbesc și vorbesc încet', 'Spun eu cine sunt: „Sunt Andreea"'], correctIndex: 1, correct: 'NU testezi memoria — spui tu cine ești' },
    { id: 9, category: 'Kommunikation', type: 'fill', question: 'Contactul vizual = der ____', correct: 'Augenkontakt', accept: ['augenkontakt'] },
    { id: 10, category: 'Kommunikation', type: 'mc', question: 'Cum te adresezi unui adult cu demență?', options: ['Ca unui copil', 'Ca unui adult, cu respect', 'Cu comenzi tari', 'Nu vorbesc deloc'], correctIndex: 1, correct: 'Ca unui adult, cu respect' },

    // === 3. VALIDATION (5) ===
    { id: 11, category: 'Validation', type: 'mc', question: 'Frau Müller își caută mama (moartă demult). Ce faci?', options: ['„Mama dvs. a murit" — o corectez', 'Validez emoția: „Povestiți-mi despre ea" + redirecționez', 'Mă cert cu ea', 'O ignor'], correctIndex: 1, correct: 'Validezi emoția + redirecționezi blând' },
    { id: 12, category: 'Validation', type: 'fill', question: 'Tehnica „validezi emoția, nu corectezi" = die ____', correct: 'Validation', accept: ['validation'] },
    { id: 13, category: 'Validation', type: 'mc', question: 'De ce NU corectezi un pacient cu demență?', options: ['Ca să nu pierzi timp', 'Momentul pe care îl trăiește e real pentru el; corectarea îl rănește', 'Nu contează', 'Ca să-l enervezi'], correctIndex: 1, correct: 'Pentru el momentul e real — corectarea doare' },
    { id: 14, category: 'Validation', type: 'fill', question: 'A distrage/redirecționa atenția blând = ____ (verb)', correct: 'ablenken', accept: ['ablenken'] },
    { id: 15, category: 'Validation', type: 'mc', question: 'Ce iei în serios la validare?', options: ['Faptele exacte', 'EMOȚIA / sentimentul din spate', 'Nimic', 'Doar ce e adevărat'], correctIndex: 1, correct: 'Emoția / sentimentul (das Gefühl)' },

    // === 4. RELATIVSÄTZE (5) ===
    { id: 16, category: 'Relativsätze', type: 'mc', question: 'Pronumele relativ „der/die/das" ia genul de la:', options: ['Verb', 'Substantivul descris', 'Subiectul propoziției principale', 'Nimic'], correctIndex: 1, correct: 'De la substantivul descris' },
    { id: 17, category: 'Relativsätze', type: 'fill', question: '„Der Patient, ____ ich pflege, hat Demenz." (pe care — masc., complement direct)', correct: 'den', accept: ['den'] },
    { id: 18, category: 'Relativsätze', type: 'fill', question: '„Das ist die Frau, ____ Sie oft besucht." (care — fem., subiect)', correct: 'die', accept: ['die'] },
    { id: 19, category: 'Relativsätze', type: 'mc', question: 'În „der Mann, den ich kenne", de ce „den" și nu „der"?', options: ['E o greșeală', 'Pentru că e complement direct (Akkusativ)', 'Sună mai bine', 'Mereu se pune den'], correctIndex: 1, correct: 'E complement direct → Akkusativ „den"' },
    { id: 20, category: 'Relativsätze', type: 'fill', question: '„Ich bin Andreea, die Frau, die Ihnen ____." (helfen — verb la final, pers. a III-a)', correct: 'hilft', accept: ['hilft'] },

    // === 5. TRADUCERE + SITUAȚII (5) ===
    { id: 21, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Are demență." → 🇩🇪 ?', correct: 'Sie hat Demenz.', accept: ['sie hat demenz'] },
    { id: 22, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Femeia care vă vizitează des." → 🇩🇪 ? (die Frau, die…, punctul opțional)', correct: 'Die Frau, die Sie oft besucht.', accept: ['die frau die sie oft besucht'] },
    { id: 23, category: 'Traducere + Situații', type: 'mc', question: '🚨 Frau Müller e mai agitată. Îi dai un calmant din dulap ca „să fie cuminte"?', options: ['Da, imediat', 'NU — medicamentele doar la indicația medicului; raportezi', 'Da, jumătate', 'Da, dacă cere'], correctIndex: 1, correct: 'NU — doar la indicația medicului' },
    { id: 24, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Sunt Andreea, vă ajut." → 🇩🇪 ?', correct: 'Ich bin Andreea, ich helfe Ihnen.', accept: ['ich bin andreea ich helfe ihnen'] },
    { id: 25, category: 'Traducere + Situații', type: 'mc', question: '🚨 Frau Müller e BRUSC foarte confuză, cu febră. Ce faci?', options: ['„E doar demența", o las', 'Anunț medicul — poate fi delir (altă cauză), nu doar demența', 'O cert', 'Îi dau un calmant'], correctIndex: 1, correct: 'Anunți medicul — confuzie nouă + febră ≠ doar demența' }
];

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    let html = `
        <div class="final-test-intro">
            <h4>🎯 Test Final — 25 întrebări</h4>
            <p>5 categorii × 5 întrebări: <strong>Was ist Demenz? · Kommunikation · Validation · Relativsätze · Traducere+Situații</strong></p>
        </div>
        <div id="ft-questions">`;
    finalTestData.forEach((q, i) => {
        html += `<div class="ft-question" data-q-id="${q.id}">
            <div class="ft-q-header">
                <span class="ft-q-num">Întrebarea ${i + 1} / 25</span>
                <span class="ft-q-category">${q.category}</span>
            </div>
            <div class="ft-q-text">${q.question}</div>`;
        if (q.type === 'mc') {
            q.options.forEach((opt, idx) => {
                html += `<label class="ft-option"><input type="radio" name="ft-${q.id}" value="${idx}"> <span>${opt}</span></label>`;
            });
        } else if (q.type === 'fill') {
            html += `<input type="text" class="ft-input" id="ft-input-${q.id}" placeholder="Scrie răspunsul...">`;
        }
        html += `<div class="ft-feedback" id="ft-fb-${q.id}"></div></div>`;
    });
    html += `</div>
        <div class="ft-controls">
            <button class="btn btn-check" onclick="checkFinalTest()">🎯 Verifică TOT testul</button>
            <button class="btn btn-reset" onclick="resetFinalTest()">↻ Reia testul</button>
        </div>
        <div class="ft-score" id="ft-score"></div>`;
    container.innerHTML = html;
}

function checkFinalTest() {
    let correct = 0;
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (!fb) return;
        let userOk = false;
        if (q.type === 'mc') {
            const checked = document.querySelector(`input[name="ft-${q.id}"]:checked`);
            if (checked && parseInt(checked.value) === q.correctIndex) userOk = true;
        } else if (q.type === 'fill') {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp && q.accept.some(a => normalizeAnswerFT(a) === normalizeAnswerFT(inp.value))) userOk = true;
        }
        fb.className = userOk ? 'ft-feedback correct' : 'ft-feedback incorrect';
        fb.innerHTML = userOk ? `✓ Corect!` : `✗ Răspuns corect: <strong>${q.correct}</strong>`;
        if (userOk) correct++;
    });
    const pct = Math.round((correct / finalTestData.length) * 100);
    const scoreEl = document.getElementById('ft-score');
    if (!scoreEl) return;
    let msg = '';
    if (pct === 100) msg = `🏆 ${correct}/25 (100%) — PERFECT! Vorbești limba pe care o înțelege inima!`;
    else if (pct >= 80) msg = `🎉 ${correct}/25 (${pct}%) — Foarte bine!`;
    else if (pct >= 60) msg = `💪 ${correct}/25 (${pct}%) — Bine.`;
    else msg = `📚 ${correct}/25 (${pct}%) — Mai exersează.`;
    scoreEl.textContent = msg;
    scoreEl.className = 'ft-score ' + (pct >= 80 ? 'score-high' : pct >= 60 ? 'score-mid' : 'score-low');
}

function resetFinalTest() {
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (fb) { fb.className = 'ft-feedback'; fb.innerHTML = ''; }
        if (q.type === 'mc') {
            document.querySelectorAll(`input[name="ft-${q.id}"]`).forEach(r => r.checked = false);
        } else {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp) inp.value = '';
        }
    });
    const scoreEl = document.getElementById('ft-score');
    if (scoreEl) { scoreEl.textContent = ''; scoreEl.className = 'ft-score'; }
}

buildFinalTest();
