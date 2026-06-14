// ============================================
// EXERCISES.JS — Pflege 32: Demenz verstehen
// 7 exerciții × 10 itemi = 70 itemi total
// Schreiben form: forms.gle/yX2qYFLVpT6heBpx8
// REGULĂ: la propoziții, răspunsul e valid CU sau FĂRĂ punct final
//   → normalizeAnswer elimină . ! ? ; : + .trim() + variante de topică în accept[]
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

function answerMatches(item, userInput) {
    const u = normalizeAnswer(userInput);
    if (!u) return false;
    if (item.accept.some(a => normalizeAnswer(a) === u)) return true;
    if (item.sentence) {
        const sentenceClean = item.sentence.replace(/\s*\([^)]*\)\s*/g, ' ');
        return item.accept.some(a => {
            const full = sentenceClean.replace(/____+/g, a);
            return normalizeAnswer(full) === u;
        });
    }
    return false;
}

// EX 1: Match Demenz + Kommunikation
const ex1Data = [
    { id: 'a', de: 'die Demenz', accept: ['dementa', 'demente'], correct: 'demența' },
    { id: 'b', de: 'das Gedächtnis', accept: ['memoria', 'memorie'], correct: 'memoria' },
    { id: 'c', de: 'vergessen', accept: ['a uita', 'uita'], correct: 'a uita' },
    { id: 'd', de: 'sich erinnern', accept: ['a-si aminti', 'a si aminti', 'a-si aduce aminte', 'aminti'], correct: 'a-și aminti' },
    { id: 'e', de: 'die Geduld', accept: ['rabdarea', 'rabdare'], correct: 'răbdarea' },
    { id: 'f', de: 'die Validation', accept: ['validarea', 'validare'], correct: 'validarea' },
    { id: 'g', de: 'das Gefühl', accept: ['sentimentul', 'sentiment', 'emotia', 'emotie'], correct: 'sentimentul / emoția' },
    { id: 'h', de: 'ablenken', accept: ['a distrage', 'a redirectiona', 'distrage', 'redirectiona'], correct: 'a distrage / a redirecționa' },
    { id: 'i', de: 'sich verlaufen', accept: ['a se rataci', 'se rataci', 'a rataci'], correct: 'a se rătăci' },
    { id: 'j', de: 'die Routine', accept: ['rutina'], correct: 'rutina' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🧠 Scrie traducerea</strong> pentru vocabularul de demență + comunicare.</div>';
    ex1Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇩🇪 ${it.de}</label><input type="text" id="ex1-${it.id}" placeholder="Scrie traducerea..."></div><div class="feedback" id="ex1-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx1() {
    let correct = 0; const total = ex1Data.length;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`); const fb = document.getElementById(`ex1-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx1() { ex1Data.forEach(it => { const i = document.getElementById(`ex1-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex1-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 2: Relativsätze (STAR — der/die/das/den + verb la final)
const ex2Data = [
    { id: 'a', sentence: 'Das ist die Frau, ____ Sie oft besucht. (pronume relativ — fem., subiect)', translation: 'Asta e femeia CARE vă vizitează des.', correct: 'die', accept: ['die'] },
    { id: 'b', sentence: 'Der Patient, ____ ich pflege, hat Demenz. (pronume relativ — masc., complement direct)', translation: 'Pacientul PE CARE îl îngrijesc are demență.', correct: 'den', accept: ['den'] },
    { id: 'c', sentence: 'Ich bin Andreea, die Frau, die Ihnen ____. (helfen — verb la FINAL, pers. a III-a)', translation: 'Sunt Andreea, femeia care vă AJUTĂ.', correct: 'hilft', accept: ['hilft'] },
    { id: 'd', sentence: 'Das Foto, ____ sie liebt, ist alt. (pronume relativ — neutru, complement direct)', translation: 'Fotografia PE CARE o iubește e veche.', correct: 'das', accept: ['das'] },
    { id: 'e', sentence: 'Der Mann, ____ dort sitzt, ist ihr Freund. (pronume relativ — masc., subiect)', translation: 'Bărbatul CARE stă acolo e prietenul ei.', correct: 'der', accept: ['der'] },
    { id: 'f', sentence: 'Die Tabletten, die sie ____, sind vom Arzt. (nehmen — verb la FINAL, pers. a III-a)', translation: 'Pastilele pe care le IA sunt de la medic.', correct: 'nimmt', accept: ['nimmt'] },
    { id: 'g', sentence: 'Die Frau, die sich verstanden ____, wird ruhig. (fühlen — verb la FINAL, pers. a III-a)', translation: 'Femeia care se SIMTE înțeleasă se liniștește.', correct: 'fühlt', accept: ['fühlt', 'fuehlt'] },
    { id: 'h', sentence: 'Der Moment, ____ er erlebt, ist für ihn echt. (pronume relativ — masc., complement direct)', translation: 'Momentul PE CARE îl trăiește e real pentru el.', correct: 'den', accept: ['den'] },
    { id: 'i', sentence: 'Das Kind, ____ dort spielt, ist ihr Enkel. (pronume relativ — neutru, subiect)', translation: 'Copilul CARE se joacă acolo e nepotul ei.', correct: 'das', accept: ['das'] },
    { id: 'j', sentence: 'Ich suche die Mutter, ____ sie liebt. (pronume relativ — fem., complement direct)', translation: 'O caut pe mama PE CARE o iubește.', correct: 'die', accept: ['die'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌟 Relativsätze (propoziții relative).</strong> Pronumele relativ ia <strong>genul</strong> de la substantiv și <strong>cazul</strong> de la rol (subiect → der/die/das, compl. direct masc → den). Verbul merge la <strong>FINAL</strong>, virgulă înainte.</div>';
    ex2Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex2-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex2-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx2() {
    let correct = 0; const total = ex2Data.length;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`); const fb = document.getElementById(`ex2-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx2() { ex2Data.forEach(it => { const i = document.getElementById(`ex2-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex2-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 3: Audio dictat
const ex3Data = [
    { id: 'a', audio: 'audio/dictat-01.wav', correct: 'die Demenz', accept: ['die demenz', 'demenz'] },
    { id: 'b', audio: 'audio/dictat-02.wav', correct: 'das Gedächtnis', accept: ['das gedächtnis', 'das gedaechtnis', 'gedächtnis', 'gedaechtnis'] },
    { id: 'c', audio: 'audio/dictat-03.wav', correct: 'vergessen', accept: ['vergessen'] },
    { id: 'd', audio: 'audio/dictat-04.wav', correct: 'die Geduld', accept: ['die geduld', 'geduld'] },
    { id: 'e', audio: 'audio/dictat-05.wav', correct: 'die Validation', accept: ['die validation', 'validation'] },
    { id: 'f', audio: 'audio/dictat-06.wav', correct: 'ablenken', accept: ['ablenken'] },
    { id: 'g', audio: 'audio/dictat-07.wav', correct: 'die Routine', accept: ['die routine', 'routine'] },
    { id: 'h', audio: 'audio/dictat-08.wav', correct: 'sich verlaufen', accept: ['sich verlaufen'] },
    { id: 'i', audio: 'audio/dictat-09.wav', correct: 'Der Patient, den ich pflege, hat Demenz', accept: ['der patient den ich pflege hat demenz'] },
    { id: 'j', audio: 'audio/dictat-10.wav', correct: 'Wo ist meine Tochter', accept: ['wo ist meine tochter'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎙️ Audio dictat — Demenz + Validation + Relativsatz.</strong></div>';
    ex3Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><div class="audio-dictat-row"><button class="audio-btn-mini" id="btn-${it.audio}" onclick="toggleAudio(event, 'audio-dictat-${it.id}')">▶</button><audio id="audio-dictat-${it.id}" preload="none"><source src="${it.audio}" type="audio/wav"></audio><span style="color:#5A5147; font-size:0.9rem;">Ascultă și scrie:</span></div><input type="text" id="ex3-${it.id}" placeholder="Scrie ce auzi..."></div><div class="feedback" id="ex3-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx3() {
    let correct = 0; const total = ex3Data.length;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`); const fb = document.getElementById(`ex3-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx3() { ex3Data.forEach(it => { const i = document.getElementById(`ex3-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex3-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 4: Demenz + Kommunikation + Validation + Sicherheit
const ex4Data = [
    { id: 'a', sentence: 'Demența e o ____ a creierului (boală), nu „răutate"', translation: 'KRANKHEIT (boală).', correct: 'Krankheit', accept: ['krankheit', 'eine krankheit', 'boala'] },
    { id: 'b', sentence: 'Cea mai frecventă formă de demență = ____', translation: 'ALZHEIMER.', correct: 'Alzheimer', accept: ['alzheimer', 'die alzheimer-krankheit'] },
    { id: 'c', sentence: 'Tehnica „validezi emoția, NU corectezi" = die ____', translation: 'VALIDATION (validarea).', correct: 'Validation', accept: ['validation', 'die validation'] },
    { id: 'd', sentence: 'NU testezi memoria; vorbești în propoziții ____ (scurte)', translation: 'KURZE (scurte) — kurze Sätze.', correct: 'kurze', accept: ['kurze', 'kurz', 'kurze sätze', 'kurze saetze'] },
    { id: 'e', sentence: 'Iei în serios ____ din spatele cuvintelor (emoția)', translation: 'GEFÜHL (sentimentul) — das Gefühl.', correct: 'Gefühl', accept: ['gefühl', 'gefuehl', 'das gefühl', 'das gefuehl'] },
    { id: 'f', sentence: 'Ca să nu se piardă afară, îi pui în buzunar un ____ (legitimație de urgență)', translation: 'NOTFALLAUSWEIS.', correct: 'Notfallausweis', accept: ['notfallausweis', 'der notfallausweis'] },
    { id: 'g', sentence: 'Ce dă cel mai mult siguranță unui pacient cu demență = o ____ fixă (rutina)', translation: 'ROUTINE (rutina).', correct: 'Routine', accept: ['routine', 'die routine'] },
    { id: 'h', sentence: 'A redirecționa atenția blând, fără discuție = ____ (verb)', translation: 'ABLENKEN.', correct: 'ablenken', accept: ['ablenken'] },
    { id: 'i', sentence: '🚨 Medicamentele de liniștire le dai DOAR la indicația ____ (medicului)', translation: 'ARZTES / des Arztes (medicului).', correct: 'Arztes', accept: ['arztes', 'des arztes', 'arzt', 'medicului'] },
    { id: 'j', sentence: '🚨 Pacientul pleacă de acasă și e în pericol → suni ____', translation: '112.', correct: '112', accept: ['112', 'einhundertzwölf', 'einhundertzwoelf'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🧠 Demenz + Kommunikation + Validation + Sicherheit.</strong> Boala memoriei · propoziții scurte, o întrebare · validezi emoția, NU corectezi · Routine + Notfallausweis · 🚨 medicația doar la indicația medicului.</div>';
    ex4Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex4-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex4-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx4() {
    let correct = 0; const total = ex4Data.length;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`); const fb = document.getElementById(`ex4-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx4() { ex4Data.forEach(it => { const i = document.getElementById(`ex4-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex4-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 5: Dialog Gap-Fill (Dialog 2 — Schwester Monika erklärt Validation)
const ex5Data = [
    { id: 'a', sentence: 'Schwester Monika: „Bei Demenz ____ wir nicht. Wir validieren." (CORECTĂM)', translation: 'La demență NU CORECTĂM.', correct: 'korrigieren', accept: ['korrigieren'] },
    { id: 'b', sentence: 'Schwester Monika: „Sie nehmen das Gefühl ____." (ÎN SERIOS)', translation: 'Iei sentimentul ÎN SERIOS.', correct: 'ernst', accept: ['ernst'] },
    { id: 'c', sentence: 'Schwester Monika: „…das Gefühl ernst, ____ der Mensch zeigt." (pronume relativ — das Gefühl)', translation: '…sentimentul PE CARE îl arată omul.', correct: 'das', accept: ['das'] },
    { id: 'd', sentence: 'Schwester Monika: „Der Moment, ____ er erlebt, ist für ihn echt." (pronume relativ — masc. Akk)', translation: 'Momentul PE CARE îl trăiește e real.', correct: 'den', accept: ['den'] },
    { id: 'e', sentence: 'Schwester Monika: „Fragen Sie nach der Mutter, ____ sie liebt." (pronume relativ — fem.)', translation: 'Întrebați de mama PE CARE o iubește.', correct: 'die', accept: ['die'] },
    { id: 'f', sentence: 'Schwester Monika: „Lenken Sie sanft ____." (prefix separabil: ablenken)', translation: 'Redirecționați blând.', correct: 'ab', accept: ['ab'] },
    { id: 'g', sentence: 'Andreea: „Also keine ____." (DISCUȚIE în contradictoriu)', translation: 'Deci fără DISCUȚIE.', correct: 'Diskussion', accept: ['diskussion'] },
    { id: 'h', sentence: 'Schwester Monika: „Eine Frau, die sich verstanden fühlt, wird ____." (LINIȘTITĂ)', translation: '…se face LINIȘTITĂ / se liniștește.', correct: 'ruhig', accept: ['ruhig'] },
    { id: 'i', sentence: 'Schwester Monika: „Validation ist die ____, die das Herz versteht." (LIMBA)', translation: 'Validarea e LIMBA pe care o înțelege inima.', correct: 'Sprache', accept: ['sprache'] },
    { id: 'j', sentence: 'Schwester Monika: „…die Sprache, die das Herz ____." (ÎNȚELEGE — verb la final)', translation: '…limba pe care o ÎNȚELEGE inima.', correct: 'versteht', accept: ['versteht'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>💚 Dialog gap-fill — Schwester Monika erklärt Validation (Dialog 2).</strong> Tehnica validării: NU corectezi, validezi emoția, redirecționezi + Relativsätze (das/den/die).</div>';
    ex5Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex5-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex5-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx5() {
    let correct = 0; const total = ex5Data.length;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`); const fb = document.getElementById(`ex5-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx5() { ex5Data.forEach(it => { const i = document.getElementById(`ex5-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex5-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 6: Traducere RO → DE (PROPOZIȚII — punctul final NU contează; Relativsätze)
const ex6Data = [
    { id: 'a', ro: 'Are demență.', correct: 'Sie hat Demenz.', accept: ['sie hat demenz'] },
    { id: 'b', ro: 'Sunt Andreea, vă ajut.', correct: 'Ich bin Andreea, ich helfe Ihnen.', accept: ['ich bin andreea ich helfe ihnen'] },
    { id: 'c', ro: 'Unde e fiica mea?', correct: 'Wo ist meine Tochter?', accept: ['wo ist meine tochter'] },
    { id: 'd', ro: 'Povestiți-mi despre demult.', correct: 'Erzählen Sie mir von früher.', accept: ['erzählen sie mir von früher', 'erzaehlen sie mir von frueher'] },
    { id: 'e', ro: 'Asta e femeia care vă vizitează des.', correct: 'Das ist die Frau, die Sie oft besucht.', accept: ['das ist die frau die sie oft besucht'] },
    { id: 'f', ro: 'Pacientul pe care îl îngrijesc are demență.', correct: 'Der Patient, den ich pflege, hat Demenz.', accept: ['der patient den ich pflege hat demenz'] },
    { id: 'g', ro: 'Totul e bine, sunt aici.', correct: 'Alles ist gut, ich bin da.', accept: ['alles ist gut ich bin da'] },
    { id: 'h', ro: 'Femeia care stă acolo e prietena dvs.', correct: 'Die Frau, die dort sitzt, ist Ihre Freundin.', accept: ['die frau die dort sitzt ist ihre freundin'] },
    { id: 'i', ro: 'Iau în serios sentimentul.', correct: 'Ich nehme das Gefühl ernst.', accept: ['ich nehme das gefühl ernst', 'ich nehme das gefuehl ernst'] },
    { id: 'j', ro: 'Bărbatul pe care îl căutați vine curând.', correct: 'Der Mann, den Sie suchen, kommt bald.', accept: ['der mann den sie suchen kommt bald'] }
];

function buildEx6() {
    const c = document.getElementById('ex6-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌍 Traducere RO → DE.</strong> 💡 Punctul de la final e <strong>opțional</strong>. Atenție la Relativsätze: pronumele der/die/das/den + verbul la final.</div>';
    ex6Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇷🇴 ${it.ro}</label><input type="text" id="ex6-${it.id}" placeholder="Scrie în germană..."></div><div class="feedback" id="ex6-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx6() {
    let correct = 0; const total = ex6Data.length;
    ex6Data.forEach(it => {
        const inp = document.getElementById(`ex6-${it.id}`); const fb = document.getElementById(`ex6-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx6() { ex6Data.forEach(it => { const i = document.getElementById(`ex6-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex6-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 7: Schreiben — Raport demență pentru Dr. Schmidt
function buildEx7() {
    const c = document.getElementById('ex7-container'); if (!c) return;
    c.innerHTML = `
        <div class="schreiben-wrapper">
            <div class="schreiben-prompt">
                <h4>✍️ Tema ta de scriere — Raport despre Frau Müller pentru Dr. Schmidt</h4>
                <p>Frau Müller a fost mai confuză în ultima vreme și și-a căutat fiica. Scrie-i medicului (Dr. Schmidt) un mesaj scurt în care raportezi ce ai observat și cum ai reacționat.</p>
                <p><strong>Scrie un raport (5-8 propoziții)</strong>: ce ai observat (confuzie, căutare, frică), cum ai reacționat (validare, calm, ai redirecționat — NU ai corectat), folosind cel puțin o <strong>propoziție relativă</strong> („die Frau, die…", „das Gefühl, das…", „das Foto, das sie liebt"). NU dai medicamente din proprie inițiativă — întrebi ce să faci.</p>

                <div class="schreiben-hints">
                    <h5>💡 Structuri utile</h5>
                    <p>Sehr geehrter Dr. Schmidt · ich melde mich wegen Frau Müller · sie ist in letzter Zeit oft verwirrt · heute hat sie ihre Tochter gesucht, die nicht da war · sie hatte Angst · ich habe sie nicht korrigiert · ich habe das Gefühl ernst genommen, das sie gezeigt hat · ich habe sie abgelenkt · wir haben das Fotoalbum angeschaut, das sie liebt · sie ist ruhiger geworden · ich gebe ihr nichts ohne Ihre Anweisung · was soll ich tun? · mit freundlichen Grüßen, Andreea.</p>
                </div>
            </div>

            <textarea id="ex7-text" class="schreiben-textarea" placeholder="Schreib hier den Bericht auf Deutsch...
Beispiel:
Sehr geehrter Dr. Schmidt, ich melde mich wegen Frau Müller..."></textarea>

            <details class="schreiben-model">
                <summary>📝 Vezi un model de răspuns</summary>
                <div class="model-text">
                    <p><em>Beispiel-Antwort:</em></p>
                    <p>Sehr geehrter Dr. Schmidt, ich melde mich wegen Frau Müller. Sie ist in letzter Zeit oft verwirrt. Heute hat sie ihre Tochter gesucht, die nicht da war. Sie hatte Angst. Ich habe sie nicht korrigiert. Ich habe das Gefühl ernst genommen, das sie gezeigt hat. Dann habe ich sie abgelenkt: Wir haben das Fotoalbum angeschaut, das sie liebt. Sie ist ruhiger geworden. Ich gebe ihr nichts ohne Ihre Anweisung. Was soll ich tun? Mit freundlichen Grüßen, Andreea.</p>
                    <p class="model-translation"><em>Traducere:</em> Stimate Dr. Schmidt, vă scriu în legătură cu Frau Müller. În ultima vreme e des confuză. Azi și-a căutat fiica, care nu era acolo. Îi era frică. Nu am corectat-o. Am luat în serios sentimentul pe care l-a arătat. Apoi am distras-o: ne-am uitat la albumul foto pe care îl iubește. S-a liniștit. Nu-i dau nimic fără indicația dvs. Ce să fac? Cu stimă, Andreea.</p>
                </div>
            </details>

            <div class="schreiben-cta">
                <a href="https://forms.gle/yX2qYFLVpT6heBpx8" target="_blank" class="btn-google-form-big">
                    ✍️ Vrei feedback PERSONAL de la Annette? Trimite raportul aici
                </a>
                <p class="schreiben-promise">📩 Răspunde Annette personal în 24-48 ore — corectare + sfaturi.</p>
            </div>
        </div>
    `;
}

function checkExercise(n) {
    const checkers = { 1: checkEx1, 2: checkEx2, 3: checkEx3, 4: checkEx4, 5: checkEx5, 6: checkEx6 };
    if (!checkers[n]) return;
    const result = checkers[n]();
    const scoreEl = document.getElementById(`score-${n}`);
    if (!scoreEl) return;
    const pct = Math.round((result.correct / result.total) * 100);
    let emoji = '💪', msg = 'Mai exersează!';
    if (pct === 100) { emoji = '🏆'; msg = 'Perfect!'; }
    else if (pct >= 80) { emoji = '⭐'; msg = 'Foarte bine!'; }
    else if (pct >= 60) { emoji = '👍'; msg = 'Bine!'; }
    else if (pct >= 40) { emoji = '📚'; msg = 'Continuă!'; }
    scoreEl.className = 'score show';
    scoreEl.innerHTML = `<div class="score-value">${emoji} ${result.correct}/${result.total} (${pct}%)</div><div class="score-message">${msg}</div>`;
}

function resetExercise(n) {
    const resetters = { 1: resetEx1, 2: resetEx2, 3: resetEx3, 4: resetEx4, 5: resetEx5, 6: resetEx6 };
    if (resetters[n]) resetters[n]();
    const scoreEl = document.getElementById(`score-${n}`);
    if (scoreEl) { scoreEl.className = 'score'; scoreEl.innerHTML = ''; }
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = event.currentTarget;
    if (!audio || !btn) return;
    if (audio.paused) {
        audio.play().then(() => { btn.textContent = '⏸'; }).catch(() => {});
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause(); btn.textContent = '▶';
    }
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); buildEx6(); buildEx7();
