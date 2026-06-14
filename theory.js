// ============================================
// THEORY.JS — Pflege 32: Demenz verstehen
// Was ist Demenz + Kommunikation + Validation statt Korrektur + Sicherheit & Alltag + Relativsätze (STAR) + Box & Würde
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

const theoryHTML = `
<div class="theory-intro">
  <h4>🧠 Demenz verstehen — a înțelege demența</h4>
  <p>Demența (die Demenz) e o <strong>boală</strong>, nu o lene și nici „răutate". Creierul uită, se dezorientează, confundă timpul și persoanele. Tu înveți <strong>ce este</strong> demența, <strong>cum vorbești</strong> cu pacientul (simplu, calm, cu răbdare), tehnica <strong>validării</strong> (NU corectezi — validezi emoția) și cum faci <strong>ziua sigură și liniștită</strong>. 💚 În spatele bolii, persoana e încă acolo.</p>
  <p>Gramatică nouă: <strong>propozițiile relative</strong> (Relativsätze) cu „der / die / das" — <em>„Ich bin Andreea, die Frau, <strong>die</strong> Ihnen <strong>hilft</strong>."</em> (Sunt Andreea, femeia care vă ajută). Cu ele descrii precis o persoană sau un lucru — verbul merge la final.</p>
</div>

<div class="theory-pillars">
  <h4>🏛️ Cei 6 piloni</h4>
  <div class="pillars-grid">
    <div class="pillar-card">
      <div class="pillar-icon">🧠</div>
      <div class="pillar-title">Was ist Demenz</div>
      <div class="pillar-text">Boala memoriei.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">💬</div>
      <div class="pillar-title">Kommunikation</div>
      <div class="pillar-text">Simplu · calm · răbdare.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">💚</div>
      <div class="pillar-title">Validation</div>
      <div class="pillar-text">Validezi, NU corectezi.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🔑</div>
      <div class="pillar-title">Sicherheit</div>
      <div class="pillar-text">Rutină · siguranță.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🔗</div>
      <div class="pillar-title">Relativsätze</div>
      <div class="pillar-text">der · die · das · den</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🌟</div>
      <div class="pillar-title">Würde</div>
      <div class="pillar-text">Persoana e încă acolo.</div>
    </div>
  </div>
</div>

<!-- ============================================
     SUB 1 — Was ist Demenz?
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(0)">
    <h4>1️⃣ Was ist Demenz? — ce este demența</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-0">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-1" onclick="toggleAudio(event, 'audio-1')">▶</button>
        <audio id="audio-1" preload="none"><source src="audio/01-was-ist-demenz.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Demența afectează <strong>memoria, gândirea și orientarea</strong>. Cea mai frecventă formă e <strong>Alzheimer</strong>. Nu e o etapă normală a bătrâneții — e o boală care progresează încet.</p>

    <h5 style="color:#065f46; margin-top:18px;">🧠 Vocabular de bază</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>die Demenz · das Gedächtnis</strong></td><td>demența · memoria</td></tr>
          <tr><td><strong>vergessen ↔ sich erinnern</strong></td><td>a uita ↔ a-și aminti</td></tr>
          <tr><td><strong>die Orientierung</strong></td><td>orientarea (în timp, spațiu, persoane)</td></tr>
          <tr><td><strong>sich verlaufen</strong></td><td>a se rătăci</td></tr>
          <tr><td><strong>wiederholen · die Vergesslichkeit</strong></td><td>a repeta (aceeași întrebare) · uitarea</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>🚨 Semnele frecvente</h5>
      <p>📌 Uită lucruri <strong>recente</strong> (dar își amintește din tinerețe) · <strong>repetă</strong> aceeași întrebare · se <strong>rătăcește</strong> chiar și în casă · confundă ziua cu noaptea, persoanele și timpul · pierde cuvinte · schimbări de dispoziție și de comportament. 📌 Foarte important: comportamentul ciudat e <strong>boala</strong>, NU „face în ciudă". Pacientul nu uită ca să te enerveze — pur și simplu nu poate altfel.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 2 — Wie spreche ich mit ihr?
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(1)">
    <h4>2️⃣ Wie spreche ich mit ihr? — cum vorbești cu ea</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-1">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-2" onclick="toggleAudio(event, 'audio-2')">▶</button>
        <audio id="audio-2" preload="none"><source src="audio/02-kommunikation.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Cu un pacient cu demență, <strong>cum</strong> vorbești contează mai mult decât <strong>ce</strong> spui. Calm, simplu, cu răbdare — și mereu cu respect de adult, niciodată ca un copil.</p>

    <h5 style="color:#065f46; margin-top:18px;">💬 Vocabular — Kommunikation</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>einfach sprechen · langsam</strong></td><td>a vorbi simplu · încet</td></tr>
          <tr><td><strong>die Geduld · geduldig</strong></td><td>răbdarea · răbdător</td></tr>
          <tr><td><strong>der Augenkontakt</strong></td><td>contactul vizual</td></tr>
          <tr><td><strong>kurze Sätze · eine Frage</strong></td><td>propoziții scurte · o singură întrebare</td></tr>
          <tr><td><strong>lächeln</strong></td><td>a zâmbi</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>💡 Regulile de aur ale comunicării</h5>
      <p>📌 <strong>Propoziții scurte</strong>, o idee pe rând · o <strong>singură întrebare</strong> deodată · stai în <strong>față</strong>, la nivelul ochilor, contact vizual + un zâmbet · vorbește <strong>încet</strong> și dă-i timp să răspundă · 🚫 NU testezi memoria („Mai știi cine sunt?") → spui tu: „Sunt Andreea." · folosește numele lui, atinge-i blând mâna. Tonul calm liniștește mai mult decât cuvintele.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 3 — Validation statt Korrektur
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(2)">
    <h4>3️⃣ Validation statt Korrektur — validezi, nu corectezi</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-2">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-3" onclick="toggleAudio(event, 'audio-3')">▶</button>
        <audio id="audio-3" preload="none"><source src="audio/03-validation.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Cea mai importantă tehnică la demență: <strong>validarea</strong> (die Validation). Când pacientul spune ceva care nu e adevărat (își caută mama moartă, vrea „acasă" la casa copilăriei), NU îl corectezi. Iei în serios <strong>emoția</strong> din spate.</p>

    <h5 style="color:#065f46; margin-top:18px;">💚 Vocabular — Validation</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>die Validation · das Gefühl</strong></td><td>validarea · sentimentul / emoția</td></tr>
          <tr><td><strong>ernst nehmen</strong></td><td>a lua în serios</td></tr>
          <tr><td><strong>nicht korrigieren · nicht widersprechen</strong></td><td>a NU corecta · a NU contrazice</td></tr>
          <tr><td><strong>ablenken</strong></td><td>a distrage / a redirecționa (blând)</td></tr>
          <tr><td><strong>beruhigen · zuhören</strong></td><td>a liniști · a asculta</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>🚨 Cum funcționează validarea — pas cu pas</h5>
      <p>Frau Müller își caută mama (care a murit demult). <br>
      🚫 GREȘIT: „Mama dvs. a murit acum 40 de ani." → o doare din nou, ca prima dată. <br>
      ✅ CORECT: <strong>validezi emoția</strong> → „Vă e dor de mama. Povestiți-mi despre ea." → o asculți → apoi <strong>redirecționezi</strong> blând: „Hai să bem un ceai." 📌 Momentul pe care îl trăiește e <strong>real pentru ea</strong>. Nu intri în discuție, nu o readuci cu forța în realitatea ta. O întâlnești în lumea ei.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 4 — Sicherheit & Alltag
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(3)">
    <h4>4️⃣ Sicherheit & Alltag — siguranța și viața de zi cu zi</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-3">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-4" onclick="toggleAudio(event, 'audio-4')">▶</button>
        <audio id="audio-4" preload="none"><source src="audio/04-sicherheit-alltag.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">O <strong>rutină</strong> fixă și un mediu cunoscut dau siguranță și liniște (la fel ca la neliniștea de noapte). Câteva ajutoare simple fac ziua mai ușoară și mai sigură.</p>

    <h5 style="color:#065f46; margin-top:18px;">🔑 Vocabular — Sicherheit & Alltag</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>die Routine · die Sicherheit</strong></td><td>rutina · siguranța</td></tr>
          <tr><td><strong>abschließen · beschriften</strong></td><td>a încuia · a eticheta (uși, sertare)</td></tr>
          <tr><td><strong>der Kalender</strong></td><td>calendarul (reper de timp)</td></tr>
          <tr><td><strong>weglaufen</strong></td><td>a pleca / a fugi de acasă (rătăcire)</td></tr>
          <tr><td><strong>das Fotoalbum · der Notfallausweis</strong></td><td>albumul foto · legitimația de urgență</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>🔑 Trucuri pentru o zi sigură</h5>
      <p>📌 Aceeași <strong>rutină</strong> zilnică · <strong>etichetezi</strong> ușile și sertarele (baie, dormitor) · un <strong>calendar</strong> și un ceas mare ca repere · <strong>încui</strong> ce e periculos (produse de curățat, medicamente) · un <strong>Notfallausweis</strong> cu nume, adresă și telefon în buzunar (dacă pleacă de acasă — weglaufen) · <strong>albumul foto</strong> și obiecte cunoscute pentru legătură și amintiri. 🚨 Dacă a plecat și nu o găsești → cauți + anunți familia; în pericol → 112.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 5 — GRAMATICA STAR: Relativsätze
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(4)">
    <h4>5️⃣ 🌟 Gramatică — propozițiile relative (der · die · das)</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-4">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-5" onclick="toggleAudio(event, 'audio-5')">▶</button>
        <audio id="audio-5" preload="none"><source src="audio/05-grammatik.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Cu <strong>propozițiile relative</strong> descrii mai precis o persoană sau un lucru: „femeia <strong>care</strong>…", „pacientul <strong>pe care</strong>…". Pronumele relativ e <strong>der / die / das</strong> (ca articolul), iar verbul merge la <strong>final</strong>.</p>

    <div class="grammar-highlight" style="background:#ecfdf5; border:2px solid #047857; border-radius:10px; padding:14px 18px; margin:14px 0;">
      <p style="margin:0; font-size:1.02rem; color:#065f46; text-align:center;">Substantiv<strong>, der/die/das</strong> + … + <strong>verbul la FINAL</strong></p>
      <p style="margin:6px 0 0; text-align:center; color:#047857;"><em>Das ist die Frau, <strong>die</strong> Ihre Tochter <strong>kennt</strong>.</em></p>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">🔗 Pronumele relativ — genul de la substantiv</h5>
    <p style="margin-bottom:8px;">Pronumele relativ ia <strong>genul</strong> de la substantivul descris, iar <strong>cazul</strong> de la rolul lui în propoziția relativă (subiect = Nominativ, complement direct = Akkusativ):</p>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Substantiv</th><th>Nominativ (subiect)</th><th>Akkusativ (compl. direct)</th></tr>
        </thead>
        <tbody>
          <tr><td>der Mann (m)</td><td><strong>der</strong> — care</td><td><strong>den</strong> — pe care</td></tr>
          <tr><td>die Frau (f)</td><td><strong>die</strong> — care</td><td><strong>die</strong> — pe care</td></tr>
          <tr><td>das Kind (n)</td><td><strong>das</strong> — care</td><td><strong>das</strong> — pe care</td></tr>
          <tr><td>die Leute (pl)</td><td><strong>die</strong> — care</td><td><strong>die</strong> — pe care</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">🧠 Relativsätze în îngrijirea demenței</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană (verb la final)</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td>Das ist die Frau, <strong>die</strong> Sie oft <strong>besucht</strong>.</td><td>Asta e femeia care vă vizitează des. (Nom)</td></tr>
          <tr><td>Der Patient, <strong>den</strong> ich <strong>pflege</strong>, hat Demenz.</td><td>Pacientul pe care îl îngrijesc are demență. (Akk)</td></tr>
          <tr><td>Das Foto, <strong>das</strong> sie <strong>liebt</strong>, ist alt.</td><td>Fotografia pe care o iubește e veche. (Akk)</td></tr>
          <tr><td>Ich bin Andreea, die Frau, <strong>die</strong> Ihnen <strong>hilft</strong>.</td><td>Sunt Andreea, femeia care vă ajută. (Nom)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>🚨 Capcana — gen de la substantiv, caz de la rol</h5>
      <p>📌 <strong>Genul</strong> pronumelui vine de la substantiv: <em>die Frau → die</em>, <em>der Mann → der/den</em>. <br>
      📌 <strong>Cazul</strong> vine de la rolul în propoziția relativă: subiect → Nominativ („der Mann, <strong>der</strong> kommt"), complement direct → Akkusativ („der Mann, <strong>den</strong> ich kenne"). <br>
      📌 La masculin se vede diferența: <strong>der</strong> (subiect) vs <strong>den</strong> (complement). La fem./neutru/plural forma e la fel. <br>
      📌 Verbul merge la <strong>FINAL</strong> și pui mereu <strong>virgulă</strong> înainte de pronume.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 6 — Box & Würde
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(5)">
    <h4>6️⃣ Der Mensch hinter der Demenz — omul din spatele bolii</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-5">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-6" onclick="toggleAudio(event, 'audio-6')">▶</button>
        <audio id="audio-6" preload="none"><source src="audio/06-wuerde.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Demența ia memoria, dar nu ia omul. În spatele confuziei e o persoană cu o viață, o poveste, sentimente. Rolul tău: să o vezi, să o respecți, să o liniștești.</p>

    <h5 style="color:#065f46; margin-top:18px;">💚 Cum păstrezi demnitatea</h5>
    <ul style="margin: 6px 0 0 22px;">
      <li>vorbești cu un <strong>adult</strong>, niciodată ca unui copil</li>
      <li>nu corectezi, nu cert, nu te grăbești</li>
      <li>validezi emoția și redirecționezi blând</li>
      <li>folosești amintirile vechi (foto, muzică, povești)</li>
      <li>vezi persoana, nu „cazul cu demență de la camera 4"</li>
    </ul>

    <div class="capcana-box">
      <h5>🦺 Box de siguranță</h5>
      <p>Această lecție te pregătește <strong>LINGVISTIC și de atitudine</strong>. 🚨🚨 Medicamentele (inclusiv pentru demență sau de liniștire) le dai <strong>DOAR la indicația medicului</strong> — niciodată ca „să fie cuminte". 🚨 O confuzie <strong>nouă și bruscă</strong>, cu febră, durere sau agitație mare, poate fi un <strong>delir</strong> (altă cauză, nu demența) → anunți medicul, NU presupui „e doar demența". 🚨 Dacă pleacă de acasă (weglaufen) și e în pericol → 112. 🚫 Nu imobilizezi niciodată. Tu <strong>comunici, validezi, faci mediul sigur și raportezi</strong>; tratamentul îl decide medicul.</p>
    </div>

    <div class="final-note-box">
      <h5>🌟 Cuvântul final — limba pe care o înțelege inima</h5>
      <p>Un om cu demență poate uita numele tău, dar nu uită <em>cum l-ai făcut să se simtă</em>. Când nu îl corectezi, ci îi spui blând <em>„Erzählen Sie mir von früher. Ich bin hier."</em> (Povestiți-mi despre demult. Sunt aici.), îi dai ceva ce boala nu poate lua: liniștea de a fi înțeles. Validarea e limba pe care o înțelege inima — și tu o poți vorbi. 💚</p>
    </div>

  </div>
</div>
`;

function buildTheory() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
}

buildTheory();
