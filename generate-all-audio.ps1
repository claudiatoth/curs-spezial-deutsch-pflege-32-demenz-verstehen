# Generare WAV-uri Hedda pentru Pflege L32 - Demenz verstehen
# 10 dictat + 48 flashcards = 58 fisiere

$lessonPath = $PSScriptRoot
$audioDir = "$lessonPath\audio"
$lettersDir = "$audioDir\letters"

if (-not (Test-Path $audioDir)) { New-Item -ItemType Directory -Force -Path $audioDir | Out-Null }
if (-not (Test-Path $lettersDir)) { New-Item -ItemType Directory -Force -Path $lettersDir | Out-Null }

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice('Microsoft Hedda Desktop')
$synth.Rate = -1

# DICTAT (10)
$dictat = @(
    @{ file='dictat-01.wav'; text='die Demenz.' },
    @{ file='dictat-02.wav'; text='das Gedachtnis.' },
    @{ file='dictat-03.wav'; text='vergessen.' },
    @{ file='dictat-04.wav'; text='die Geduld.' },
    @{ file='dictat-05.wav'; text='die Validation.' },
    @{ file='dictat-06.wav'; text='ablenken.' },
    @{ file='dictat-07.wav'; text='die Routine.' },
    @{ file='dictat-08.wav'; text='sich verlaufen.' },
    @{ file='dictat-09.wav'; text='Der Patient, den ich pflege, hat Demenz.' },
    @{ file='dictat-10.wav'; text='Wo ist meine Tochter?' }
)

# FLASHCARDS (48)
$flashcards = @(
    # 1. Was ist Demenz? (8)
    @{ file='demenz.wav';               text='die Demenz.' },
    @{ file='gedaechtnis.wav';          text='das Gedachtnis.' },
    @{ file='vergessen.wav';            text='vergessen.' },
    @{ file='sich-erinnern.wav';        text='sich erinnern.' },
    @{ file='orientierung.wav';         text='die Orientierung.' },
    @{ file='sich-verlaufen.wav';       text='sich verlaufen.' },
    @{ file='wiederholen.wav';          text='wiederholen.' },
    @{ file='vergesslichkeit.wav';      text='die Vergesslichkeit.' },

    # 2. Kommunikation (8)
    @{ file='einfach-sprechen.wav';     text='einfach sprechen.' },
    @{ file='langsam.wav';              text='langsam.' },
    @{ file='geduld.wav';               text='die Geduld.' },
    @{ file='geduldig.wav';             text='geduldig.' },
    @{ file='augenkontakt.wav';         text='der Augenkontakt.' },
    @{ file='kurze-saetze.wav';         text='kurze Satze.' },
    @{ file='eine-frage.wav';           text='eine Frage.' },
    @{ file='laecheln.wav';             text='lacheln.' },

    # 3. Validation statt Korrektur (8)
    @{ file='validation.wav';           text='die Validation.' },
    @{ file='gefuehl.wav';              text='das Gefuhl.' },
    @{ file='ernst-nehmen.wav';         text='ernst nehmen.' },
    @{ file='nicht-korrigieren.wav';    text='nicht korrigieren.' },
    @{ file='nicht-widersprechen.wav';  text='nicht widersprechen.' },
    @{ file='ablenken.wav';             text='ablenken.' },
    @{ file='beruhigen.wav';            text='beruhigen.' },
    @{ file='zuhoeren.wav';             text='zuhoren.' },

    # 4. Sicherheit & Alltag (8)
    @{ file='routine.wav';              text='die Routine.' },
    @{ file='sicherheit.wav';           text='die Sicherheit.' },
    @{ file='abschliessen.wav';         text='abschliessen.' },
    @{ file='beschriften.wav';          text='beschriften.' },
    @{ file='kalender.wav';             text='der Kalender.' },
    @{ file='weglaufen.wav';            text='weglaufen.' },
    @{ file='fotoalbum.wav';            text='das Fotoalbum.' },
    @{ file='notfallausweis.wav';       text='der Notfallausweis.' },

    # 5. Relativsatze (8)
    @{ file='der-rel.wav';              text='der.' },
    @{ file='die-rel.wav';              text='die.' },
    @{ file='das-rel.wav';              text='das.' },
    @{ file='den-rel.wav';              text='den.' },
    @{ file='frau-die.wav';             text='die Frau, die hier wohnt.' },
    @{ file='patient-den.wav';          text='der Patient, den ich pflege.' },
    @{ file='foto-das.wav';             text='das Foto, das sie liebt.' },
    @{ file='tabletten-die.wav';        text='die Tabletten, die sie nimmt.' },

    # 6. Satze (8)
    @{ file='hat-demenz.wav';           text='Sie hat Demenz.' },
    @{ file='bin-andreea.wav';          text='Ich bin Andreea, ich helfe Ihnen.' },
    @{ file='wo-tochter.wav';           text='Wo ist meine Tochter?' },
    @{ file='von-frueher.wav';          text='Erzahlen Sie mir von fruher.' },
    @{ file='alles-gut.wav';            text='Alles ist gut, ich bin da.' },
    @{ file='moechten-tee.wav';         text='Mochten Sie einen Tee?' },
    @{ file='frau-die-sitzt.wav';       text='Die Frau, die dort sitzt, ist Ihre Freundin.' },
    @{ file='mann-den-suchen.wav';      text='Der Mann, den Sie suchen, kommt bald.' }
)

$total = $dictat.Count + $flashcards.Count
$ok = 0; $fail = 0; $idx = 0

Write-Host "=== DICTAT ($($dictat.Count)) ===" -ForegroundColor Cyan
foreach ($w in $dictat) {
    $idx++; $wavPath = Join-Path $audioDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: $($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: $($w.file)" -ForegroundColor Red }
}

Write-Host "=== FLASHCARDS ($($flashcards.Count)) ===" -ForegroundColor Cyan
foreach ($w in $flashcards) {
    $idx++; $wavPath = Join-Path $lettersDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: letters/$($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: letters/$($w.file)" -ForegroundColor Red }
}

$synth.Dispose()
Write-Host ""
Write-Host "TOTAL: $ok OK, $fail FAIL din $total" -ForegroundColor $(if ($fail -eq 0) { 'Green' } else { 'Yellow' })
