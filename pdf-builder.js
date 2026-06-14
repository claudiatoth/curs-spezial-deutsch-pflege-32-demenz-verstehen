// ============================================
// PDF BUILDER — Pflege L32: Demenz verstehen
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================
(function () {
    if (typeof document === 'undefined') return;
    try { buildPDF(); } catch (e) {
        const r = document.getElementById('pdf-content');
        if (r) r.innerHTML = '<pre style="color:red">ERROR: ' + e.message + '\n' + e.stack + '</pre>';
    }

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildPflegeWarn() + buildCast() + buildTheory() + buildDialogs() + buildExercises() + buildFlashcards();
    }

    function buildPflegeWarn() {
        return `<div class="pflege-warn">
            <h4>⚠️ Notă de siguranță — citește înainte</h4>
            <p>Această lecție te pregătește <strong>LINGVISTIC și de atitudine</strong> să comunici cu un pacient cu demență. 🚨🚨 Medicamentele (inclusiv pentru demență sau de liniștire) le dai <strong>DOAR la indicația medicului</strong> — niciodată ca „să fie cuminte". 🚨 O confuzie nouă și bruscă, cu febră, durere sau agitație mare, poate fi un delir (altă cauză, nu demența) → anunți medicul. 🚨 Dacă pacientul pleacă de acasă și e în pericol → 112. 🚫 Nu imobilizezi niciodată. Tu <strong>comunici, validezi, faci mediul sigur și raportezi</strong>; tratamentul îl decide medicul.</p>
        </div>`;
    }

    function buildCast() {
        return `<div class="cast-banner">
            <h4>👋 Cast „Annettes Deutschkurs" · Frau Müller are demență și își caută fiica; Andreea o validează, iar Schwester Monika îi explică tehnica validării</h4>
            <div class="cast-grid">
                <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><div class="name">Andreea 🇷🇴</div><div class="detail">Pflegerin · validează</div></div>
                <div class="cast-card"><div class="frau-mueller-pdf-avatar">👵</div><div class="name">Frau Müller</div><div class="detail">Pacientă · demență</div></div>
                <div class="cast-card"><div class="monika-pdf-avatar">👩‍⚕️</div><div class="name">Schwester Monika</div><div class="detail">Mentor · Validation</div></div>
                <div class="cast-card"><img src="images/annette.png" alt="Annette"><div class="name">Annette</div><div class="detail">Profesoara · Berlin</div></div>
                <div class="cast-card"><img src="images/florian.png" alt="Florian"><div class="name">Florian</div><div class="detail">Doctor · Berlin</div></div>
                <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><div class="name">Mihai</div><div class="detail">Bucătar · Potsdam</div></div>
            </div>
        </div>`;
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        t = t.replace(/<audio[^>]*>[\s\S]*?<\/audio>/g, '');
        t = t.replace(/<div class="subsection-header"[^>]*>\s*<h4>([^<]+)<\/h4>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g, '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="subsection">/g, '<div class="theory-box">');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="capcana-box">/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="grammar-tip">/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="final-note-box">/g, '<div class="theory-box warn-box">');
        return `<h1 class="chapter new-section">📘 1. Teorie — Was ist Demenz + Kommunikation + Validation + Sicherheit + Relativsätze + Würde</h1>` + t;
    }

    function buildDialogs() {
        let html = `<h1 class="chapter new-section">🎬 2. Dialoguri — Wo ist meine Tochter? + Schwester Monika erklärt Validation</h1>`;
        [dialog1Data, dialog2Data].forEach((d, idx) => {
            if (!d) return;
            html += `<div class="ex-block">
                <h3>${idx === 0 ? 'Dialog 1' : 'Dialog 2'}: „${d.title}"</h3>
                <div class="instruction">${d.context}</div>
                <div class="dialog-pdf-card">`;
            d.replici.forEach((r, ri) => {
                let spkrName;
                if (r.speaker === 'andreea') spkrName = '🧑‍⚕️ Andreea';
                else if (r.speaker === 'frau-muller') spkrName = '👵 Frau Müller';
                else if (r.speaker === 'monika') spkrName = '👩‍⚕️ Schwester Monika';
                html += `<div class="reply"><span class="spkr">${ri + 1}. ${spkrName}:</span> <span class="de"> ${r.de}</span><br><span class="ro">🇷🇴 ${r.ro}</span></div>`;
            });
            html += `</div></div>`;
        });
        return html;
    }

    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 3. Exerciții — cu rezolvări complete</h1>`;

        if (typeof ex1Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 1: Match — Demenz + Kommunikation</h3>
                <div class="instruction">Pentru fiecare cuvânt, scrii traducerea în RO.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th style="width:42%">🇩🇪 Germană</th><th>🇷🇴 Română</th></tr></thead><tbody>`;
            ex1Data.forEach((it, i) => {
                html += `<tr><td class="verb">${i + 1}. ${it.de}</td><td class="ro-text">${it.correct}</td></tr>`;
            });
            html += `</tbody></table></div>`;
        }

        if (typeof ex2Data !== 'undefined') html += fillInBlock('Übung 2: 🌟 Relativsätze (der/die/das/den)', 'Pronumele relativ ia genul de la substantiv și cazul de la rol (subiect → der/die/das, complement direct masc → den). Verbul merge la FINAL, virgulă înainte.', ex2Data);
        if (typeof ex4Data !== 'undefined') html += fillInBlock('Übung 4: Demenz + Validation + Sicherheit', 'Boala memoriei · propoziții scurte, o întrebare · validezi emoția, NU corectezi · Routine + Notfallausweis · 🚨 medicația doar la indicația medicului.', ex4Data);
        if (typeof ex5Data !== 'undefined') html += fillInBlock('Übung 5: Dialog Gap-Fill — Schwester Monika erklärt Validation (Dialog 2)', 'Completează replicile lipsă din Dialog 2 (tehnica validării + Relativsätze).', ex5Data);

        if (typeof ex3Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 3: Audio Dictat — Demenz & Validation</h3>
                <div class="instruction">Ascultă și scrie ce auzi. (Audio disponibil online.)</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>`;
            ex3Data.forEach((it, i) => {
                html += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-a">${it.correct}</div></div></div>`;
            });
            html += `</div>`;
        }

        if (typeof ex6Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 6: Traducere RO → DE</h3>
                <div class="instruction">Scrie propozițiile în germană. Atenție la Relativsätze (der/die/das/den + verbul la final). Punctul final e opțional.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th style="width:42%">🇷🇴 Română</th><th>🇩🇪 Germană</th></tr></thead><tbody>`;
            ex6Data.forEach((it, i) => {
                html += `<tr><td class="ro-text">${i + 1}. ${it.ro}</td><td class="verb">${it.correct}</td></tr>`;
            });
            html += `</tbody></table></div>`;
        }

        html += `<div class="ex-block"><h3>✍️ Übung 7: Schreiben — Raport demență pentru Dr. Schmidt</h3>
            <div class="instruction">Scrie-i medicului un raport (5-8 propoziții): ce ai observat (confuzie, căutare, frică), cum ai reacționat (validare, calm, ai redirecționat — NU ai corectat), cu o propoziție relativă („die Frau, die…", „das Foto, das sie liebt"). NU dai medicamente din proprie inițiativă — întrebi ce să faci.</div>
            <div class="rezolvare-banner">📝 Model de răspuns</div>
            <p><em>Sehr geehrter Dr. Schmidt, ich melde mich wegen Frau Müller. Sie ist in letzter Zeit oft verwirrt. Heute hat sie ihre Tochter gesucht, die nicht da war. Sie hatte Angst. Ich habe sie nicht korrigiert. Ich habe das Gefühl ernst genommen, das sie gezeigt hat. Dann habe ich sie abgelenkt: Wir haben das Fotoalbum angeschaut, das sie liebt. Sie ist ruhiger geworden. Ich gebe ihr nichts ohne Ihre Anweisung. Was soll ich tun? Mit freundlichen Grüßen, Andreea.</em></p>
            <p class="ro-translation">🇷🇴 Stimate Dr. Schmidt, vă scriu în legătură cu Frau Müller. În ultima vreme e des confuză. Azi și-a căutat fiica, care nu era acolo. Îi era frică. Nu am corectat-o. Am luat în serios sentimentul pe care l-a arătat. Apoi am distras-o: ne-am uitat la albumul foto pe care îl iubește. S-a liniștit. Nu-i dau nimic fără indicația dvs. Ce să fac? Cu stimă, Andreea.</p>
            </div>`;

        return html;
    }

    function fillInBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((it, i) => {
            const filled = it.sentence.replace(/_{2,}/g, `<strong style="color:#047857">${it.correct}</strong>`);
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${filled}</div>${it.translation ? `<div class="ex-explanation">🇷🇴 ${it.translation}</div>` : ''}</div></div>`;
        });
        return h + `</div>`;
    }

    function buildFlashcards() {
        const count = (typeof flashcardsData !== 'undefined') ? flashcardsData.length : 0;
        let html = `<h1 class="chapter new-section">📇 4. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom:10px">Cele <strong>${count} carduri</strong> grupate pe 6 categorii: Was ist Demenz · Kommunikation · Validation · Sicherheit & Alltag · Relativsätze · Sätze.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += `<div class="fc-row"><span class="de">${card.de}</span><span class="ro">— ${card.ro}</span></div>`;
            });
        }
        html += `</div>`;
        return html;
    }
})();
