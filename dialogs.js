// ============================================
// DIALOGS.JS — Pflege 32: Demenz verstehen
// 2 dialoguri (Wo ist meine Tochter? + Schwester Monika erklärt Validation)
// Personaje: Andreea + Frau Müller + Schwester Monika (recap L20/L22/L23/L24/L28 — mentor, rose #db2777 · FĂRĂ personaj nou)
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

// ============================================
// DIALOG 1: „Wo ist meine Tochter?" — Andreea + Frau Müller
// 10 replici, ~58 sec — validare: NU corectează, validează emoția, redirecționează blând + Relativsätze (STAR)
// ============================================
const dialog1Data = {
    id: 'dialog1',
    title: 'Wo ist meine Tochter?',
    context: 'Frau Müller (cu demență) își caută neliniștită fiica, care nu vine acum. Andreea NU o corectează — validează emoția, o liniștește și redirecționează blând spre un ceai și albumul foto. Observă propozițiile relative: „die Frau, die Sie oft besucht" și „Andreea, die Frau, die Ihnen hilft".',
    audioFile: 'audio/dialog-01.mp3',
    totalDuration: 58,
    replici: [
        { id: 1, speaker: 'frau-muller', start: 0,  duration: 6, de: 'Wo ist meine Tochter? Sie wollte mich abholen.', ro: 'Unde e fiica mea? Voia să mă ia.' },
        { id: 2, speaker: 'andreea',     start: 6,  duration: 7, de: 'Sie vermissen Ihre Tochter. Erzählen Sie mir von ihr.', ro: 'Vă e dor de fiica dvs. Povestiți-mi despre ea.' },
        { id: 3, speaker: 'frau-muller', start: 13, duration: 6, de: 'Sie heißt Petra. Sie ist immer so pünktlich.', ro: 'O cheamă Petra. E mereu așa de punctuală.' },
        { id: 4, speaker: 'andreea',     start: 19, duration: 7, de: 'Petra ist die Frau, die Sie oft besucht, nicht wahr?', ro: 'Petra e femeia care vă vizitează des, nu-i așa?' },
        { id: 5, speaker: 'frau-muller', start: 26, duration: 4, de: 'Ja! Aber wo ist sie jetzt?', ro: 'Da! Dar unde e acum?' },
        { id: 6, speaker: 'andreea',     start: 30, duration: 6, de: 'Sie ist bei der Arbeit. Hier sind Sie sicher.', ro: 'E la muncă. Aici sunteți în siguranță.' },
        { id: 7, speaker: 'frau-muller', start: 36, duration: 3, de: 'Ich habe Angst.', ro: 'Mi-e frică.' },
        { id: 8, speaker: 'andreea',     start: 39, duration: 8, de: 'Ich bin bei Ihnen. Ich bin Andreea, die Frau, die Ihnen hilft.', ro: 'Sunt cu dvs. Sunt Andreea, femeia care vă ajută.' },
        { id: 9, speaker: 'frau-muller', start: 47, duration: 3, de: 'Das ist gut.', ro: 'Asta e bine.' },
        { id: 10, speaker: 'andreea',    start: 50, duration: 8, de: 'Möchten Sie einen Tee? Wir schauen das Fotoalbum an.', ro: 'Doriți un ceai? Ne uităm la albumul foto.' }
    ]
};

// ============================================
// DIALOG 2: „Schwester Monika erklärt Validation" — Andreea + Schwester Monika
// 10 replici, ~63 sec — tehnica validării, plină de Relativsätze (STAR)
// ============================================
const dialog2Data = {
    id: 'dialog2',
    title: 'Schwester Monika erklärt Validation',
    context: 'Schwester Monika (mentorul Andreei — recap L20/L22/L23/L24/L28, culoare rose #db2777) îi explică tehnica validării la demență: NU corectezi, validezi emoția, redirecționezi. Observă propozițiile relative: „das Gefühl, das der Mensch zeigt", „der Moment, den er erlebt", „eine Frau, die sich verstanden fühlt".',
    audioFile: 'audio/dialog-02.mp3',
    totalDuration: 63,
    replici: [
        { id: 1, speaker: 'monika',   start: 0,  duration: 7, de: 'Andreea, bei Demenz korrigieren wir nicht. Wir validieren.', ro: 'Andreea, la demență nu corectăm. Validăm.' },
        { id: 2, speaker: 'andreea',  start: 7,  duration: 4, de: 'Was bedeutet validieren genau?', ro: 'Ce înseamnă exact a valida?' },
        { id: 3, speaker: 'monika',   start: 11, duration: 7, de: 'Sie nehmen das Gefühl ernst, das der Mensch zeigt.', ro: 'Iei în serios sentimentul pe care îl arată omul.' },
        { id: 4, speaker: 'andreea',  start: 18, duration: 6, de: 'Auch wenn das, was er sagt, nicht stimmt?', ro: 'Chiar dacă ce spune nu e adevărat?' },
        { id: 5, speaker: 'monika',   start: 24, duration: 7, de: 'Ja. Der Moment, den er erlebt, ist für ihn echt.', ro: 'Da. Momentul pe care îl trăiește e real pentru el.' },
        { id: 6, speaker: 'andreea',  start: 31, duration: 5, de: 'Und wenn Frau Müller ihre Mutter sucht?', ro: 'Și dacă Frau Müller își caută mama?' },
        { id: 7, speaker: 'monika',   start: 36, duration: 8, de: 'Fragen Sie nach der Mutter, die sie liebt. Lenken Sie sanft ab.', ro: 'Întrebați de mama pe care o iubește. Redirecționați blând.' },
        { id: 8, speaker: 'andreea',  start: 44, duration: 4, de: 'Also keine Diskussion.', ro: 'Deci fără discuție în contradictoriu.' },
        { id: 9, speaker: 'monika',   start: 48, duration: 8, de: 'Genau. Eine Frau, die sich verstanden fühlt, wird ruhig.', ro: 'Exact. O femeie care se simte înțeleasă se liniștește.' },
        { id: 10, speaker: 'monika',  start: 56, duration: 7, de: 'Validation ist die Sprache, die das Herz versteht.', ro: 'Validarea e limba pe care o înțelege inima.' }
    ]
};

// ============================================
// BUILD DIALOG FUNCTION
// ============================================
function buildDialog(dialogData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
        <div class="dialog-container">
            <div class="dialog-context">${dialogData.context}</div>

            <div class="dialog-audio-player">
                <button class="audio-btn dialog-play-btn" id="btn-${dialogData.id}-audio" onclick="toggleDialogAudio('${dialogData.id}')">▶</button>
                <audio id="${dialogData.id}-audio" preload="metadata"><source src="${dialogData.audioFile}" type="audio/mpeg"></audio>
                <span class="dialog-time" id="${dialogData.id}-time">0:00 / ${formatDialogTime(dialogData.totalDuration)}</span>
                <span class="dialog-hint">▶ Ascultă tot dialogul (${dialogData.totalDuration}s)</span>
            </div>

            <div class="dialog-replici">`;

    dialogData.replici.forEach((r, i) => {
        let speakerClass, speakerName, avatarContent, speechClass;

        if (r.speaker === 'andreea') {
            speakerClass = 'character-andreea';
            speakerName = 'Andreea';
            avatarContent = '<img src="images/andreea.png" alt="Andreea">';
            speechClass = 'speech-andreea';
        } else if (r.speaker === 'frau-muller') {
            speakerClass = 'character-frau-mueller';
            speakerName = 'Frau Müller';
            avatarContent = '<span class="face">👵</span>';
            speechClass = 'speech-frau-mueller';
        } else if (r.speaker === 'monika') {
            speakerClass = 'character-monika';
            speakerName = 'Schwester Monika';
            avatarContent = '<span class="face">👩‍⚕️</span>';
            speechClass = 'speech-monika';
        }

        const isEmojiAvatar = ['frau-muller', 'monika'].includes(r.speaker);

        html += `
            <div class="dialog-reply ${speakerClass}" id="${dialogData.id}-reply-${r.id}" data-start="${r.start}" data-duration="${r.duration}">
                <div class="character-avatar ${isEmojiAvatar ? r.speaker + '-avatar' : ''}">${avatarContent}</div>
                <div class="speech-bubble ${speechClass}">
                    <div class="speaker-name speaker-${r.speaker}">${i + 1}. ${speakerName}</div>
                    <div class="speech-de">🇩🇪 ${r.de}</div>
                    <div class="speech-ro">🇷🇴 ${r.ro}</div>
                </div>
            </div>`;
    });

    html += `
            </div>
        </div>`;

    container.innerHTML = html;
}

function formatDialogTime(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
}

function toggleDialogAudio(dialogId) {
    const audio = document.getElementById(`${dialogId}-audio`);
    const btn = document.getElementById(`btn-${dialogId}-audio`);
    if (!audio || !btn) return;

    ['dialog1', 'dialog2'].forEach(other => {
        if (other !== dialogId) {
            const otherAudio = document.getElementById(`${other}-audio`);
            const otherBtn = document.getElementById(`btn-${other}-audio`);
            if (otherAudio && !otherAudio.paused) {
                otherAudio.pause();
                if (otherBtn) otherBtn.textContent = '▶';
            }
        }
    });

    if (audio.paused) {
        audio.play().then(() => { btn.textContent = '⏸'; }).catch(() => {});
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}

function initDialogSync(dialogData) {
    const audio = document.getElementById(`${dialogData.id}-audio`);
    if (!audio) return;

    const timeEl = document.getElementById(`${dialogData.id}-time`);

    audio.addEventListener('timeupdate', () => {
        const t = audio.currentTime;
        if (timeEl) timeEl.textContent = `${formatDialogTime(t)} / ${formatDialogTime(audio.duration || dialogData.totalDuration)}`;

        dialogData.replici.forEach(r => {
            const el = document.getElementById(`${dialogData.id}-reply-${r.id}`);
            if (!el) return;
            const isActive = t >= r.start && t < r.start + r.duration;
            el.classList.toggle('active-reply', isActive);
        });
    });

    audio.addEventListener('ended', () => {
        const btn = document.getElementById(`btn-${dialogData.id}-audio`);
        if (btn) btn.textContent = '▶';
        dialogData.replici.forEach(r => {
            const el = document.getElementById(`${dialogData.id}-reply-${r.id}`);
            if (el) el.classList.remove('active-reply');
        });
    });
}

buildDialog(dialog1Data, 'dialog1-container');
buildDialog(dialog2Data, 'dialog2-container');

if (document.readyState !== 'loading') {
    initDialogSync(dialog1Data);
    initDialogSync(dialog2Data);
} else {
    document.addEventListener('DOMContentLoaded', () => {
        initDialogSync(dialog1Data);
        initDialogSync(dialog2Data);
    });
}
