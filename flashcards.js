// ============================================
// FLASHCARDS — Pflege 32: Demenz verstehen
// 48 carduri în 6 categorii (8 fiecare)
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

const flashcardsData = [
    // === 1. WAS IST DEMENZ? (8) ===
    { de: "die Demenz", ro: "🧠 demența", audio: "audio/letters/demenz.wav" },
    { de: "das Gedächtnis", ro: "💭 memoria", audio: "audio/letters/gedaechtnis.wav" },
    { de: "vergessen", ro: "❌ a uita", audio: "audio/letters/vergessen.wav" },
    { de: "sich erinnern", ro: "💡 a-și aminti", audio: "audio/letters/sich-erinnern.wav" },
    { de: "die Orientierung", ro: "🧭 orientarea (timp/spațiu/persoane)", audio: "audio/letters/orientierung.wav" },
    { de: "sich verlaufen", ro: "🚶 a se rătăci", audio: "audio/letters/sich-verlaufen.wav" },
    { de: "wiederholen", ro: "🔁 a repeta (aceeași întrebare)", audio: "audio/letters/wiederholen.wav" },
    { de: "die Vergesslichkeit", ro: "🌀 uitarea / faptul de a fi uituc", audio: "audio/letters/vergesslichkeit.wav" },

    // === 2. KOMMUNIKATION (8) ===
    { de: "einfach sprechen", ro: "💬 a vorbi simplu", audio: "audio/letters/einfach-sprechen.wav" },
    { de: "langsam", ro: "🐢 încet", audio: "audio/letters/langsam.wav" },
    { de: "die Geduld", ro: "⏳ răbdarea", audio: "audio/letters/geduld.wav" },
    { de: "geduldig", ro: "😊 răbdător", audio: "audio/letters/geduldig.wav" },
    { de: "der Augenkontakt", ro: "👁️ contactul vizual", audio: "audio/letters/augenkontakt.wav" },
    { de: "kurze Sätze", ro: "✂️ propoziții scurte", audio: "audio/letters/kurze-saetze.wav" },
    { de: "eine Frage", ro: "❓ o singură întrebare", audio: "audio/letters/eine-frage.wav" },
    { de: "lächeln", ro: "🙂 a zâmbi", audio: "audio/letters/laecheln.wav" },

    // === 3. VALIDATION STATT KORREKTUR (8) ===
    { de: "die Validation", ro: "💚 validarea", audio: "audio/letters/validation.wav" },
    { de: "das Gefühl", ro: "❤️ sentimentul / emoția", audio: "audio/letters/gefuehl.wav" },
    { de: "ernst nehmen", ro: "✅ a lua în serios", audio: "audio/letters/ernst-nehmen.wav" },
    { de: "nicht korrigieren", ro: "🚫 a NU corecta", audio: "audio/letters/nicht-korrigieren.wav" },
    { de: "nicht widersprechen", ro: "🚫 a NU contrazice", audio: "audio/letters/nicht-widersprechen.wav" },
    { de: "ablenken", ro: "🔄 a distrage / a redirecționa", audio: "audio/letters/ablenken.wav" },
    { de: "beruhigen", ro: "🤲 a liniști", audio: "audio/letters/beruhigen.wav" },
    { de: "zuhören", ro: "👂 a asculta", audio: "audio/letters/zuhoeren.wav" },

    // === 4. SICHERHEIT & ALLTAG (8) ===
    { de: "die Routine", ro: "🔁 rutina", audio: "audio/letters/routine.wav" },
    { de: "die Sicherheit", ro: "🦺 siguranța", audio: "audio/letters/sicherheit.wav" },
    { de: "abschließen", ro: "🔒 a încuia", audio: "audio/letters/abschliessen.wav" },
    { de: "beschriften", ro: "🏷️ a eticheta (uși/sertare)", audio: "audio/letters/beschriften.wav" },
    { de: "der Kalender", ro: "📅 calendarul (reper de timp)", audio: "audio/letters/kalender.wav" },
    { de: "weglaufen", ro: "🚪 a pleca de acasă (rătăcire)", audio: "audio/letters/weglaufen.wav" },
    { de: "das Fotoalbum", ro: "📷 albumul foto (amintiri)", audio: "audio/letters/fotoalbum.wav" },
    { de: "der Notfallausweis", ro: "🆘 legitimația de urgență (nume/adresă/contact)", audio: "audio/letters/notfallausweis.wav" },

    // === 5. RELATIVSÄTZE (8) ===
    { de: "der (Nominativ)", ro: "🔗 care (masc., subiect)", audio: "audio/letters/der-rel.wav" },
    { de: "die (f / pl)", ro: "🔗 care (fem./plural)", audio: "audio/letters/die-rel.wav" },
    { de: "das (Neutrum)", ro: "🔗 care (neutru)", audio: "audio/letters/das-rel.wav" },
    { de: "den (Akkusativ, masc.)", ro: "🔗 pe care (masc., compl. direct)", audio: "audio/letters/den-rel.wav" },
    { de: "die Frau, die hier wohnt", ro: "👩 femeia care locuiește aici", audio: "audio/letters/frau-die.wav" },
    { de: "der Patient, den ich pflege", ro: "🧑 pacientul pe care îl îngrijesc", audio: "audio/letters/patient-den.wav" },
    { de: "das Foto, das sie liebt", ro: "📷 fotografia pe care o iubește", audio: "audio/letters/foto-das.wav" },
    { de: "die Tabletten, die sie nimmt", ro: "💊 pastilele pe care le ia", audio: "audio/letters/tabletten-die.wav" },

    // === 6. SÄTZE (8) ===
    { de: "Sie hat Demenz.", ro: "🧠 Are demență.", audio: "audio/letters/hat-demenz.wav" },
    { de: "Ich bin Andreea, ich helfe Ihnen.", ro: "🤝 Sunt Andreea, vă ajut.", audio: "audio/letters/bin-andreea.wav" },
    { de: "Wo ist meine Tochter?", ro: "👀 Unde e fiica mea?", audio: "audio/letters/wo-tochter.wav" },
    { de: "Erzählen Sie mir von früher.", ro: "📖 Povestiți-mi despre demult.", audio: "audio/letters/von-frueher.wav" },
    { de: "Alles ist gut, ich bin da.", ro: "💚 Totul e bine, sunt aici.", audio: "audio/letters/alles-gut.wav" },
    { de: "Möchten Sie einen Tee?", ro: "🍵 Doriți un ceai? (redirecționare)", audio: "audio/letters/moechten-tee.wav" },
    { de: "Die Frau, die dort sitzt, ist Ihre Freundin.", ro: "👩 Femeia care stă acolo e prietena dvs.", audio: "audio/letters/frau-die-sitzt.wav" },
    { de: "Der Mann, den Sie suchen, kommt bald.", ro: "🧑 Bărbatul pe care îl căutați vine curând.", audio: "audio/letters/mann-den-suchen.wav" }
];

let currentFlashcardIndex = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="flashcard-intro">
            <p>🎯 <strong>48 flashcards în 6 categorii</strong> — Was ist Demenz · Kommunikation · Validation · Sicherheit & Alltag · Relativsätze · Sätze.</p>
        </div>
        <div class="flashcard-wrapper">
            <div class="flashcard" id="flashcard" onclick="flipFlashcard()">
                <button class="flashcard-audio-btn" id="flashcard-audio-btn" onclick="event.stopPropagation(); playFlashcardAudio()" aria-label="Asculta pronunția">🔊</button>
                <div class="flashcard-content">
                    <div class="de" id="flashcard-de"></div>
                    <div class="ro" id="flashcard-ro"></div>
                </div>
                <div class="flashcard-hint">👆 Apasă cardul pentru traducere · 🔊 pentru pronunție</div>
                <audio id="flashcard-audio" preload="none"></audio>
            </div>
            <div class="flashcard-controls">
                <button class="flashcard-btn" onclick="prevFlashcard()">← Înapoi</button>
                <span class="flashcard-counter" id="flashcard-counter">1 / 48</span>
                <button class="flashcard-btn" onclick="nextFlashcard()">Înainte →</button>
            </div>
            <div class="flashcard-progress">
                <div class="flashcard-progress-fill" id="flashcard-progress-fill"></div>
            </div>
        </div>
    `;
    showFlashcard(0);
}

function showFlashcard(index) {
    const card = flashcardsData[index];
    if (!card) return;
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const progress = document.getElementById('flashcard-progress-fill');
    const audio = document.getElementById('flashcard-audio');
    if (de) de.textContent = card.de;
    if (ro) ro.textContent = card.ro;
    if (audio && card.audio) { audio.pause(); audio.src = card.audio; audio.load(); }
    if (counter) counter.textContent = `${index + 1} / ${flashcardsData.length}`;
    if (progress) progress.style.width = ((index + 1) / flashcardsData.length * 100) + '%';
    isFlipped = false;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.remove('flipped');
}

function playFlashcardAudio() {
    const audio = document.getElementById('flashcard-audio');
    if (!audio || !audio.src) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
}

function flipFlashcard() {
    isFlipped = !isFlipped;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

function prevFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

buildFlashcards();
