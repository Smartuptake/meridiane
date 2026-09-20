# Meridiane und Antikpunkte

Animierte Verläufe der zwölf Hauptmeridiane für den TCM-Unterricht.
Auf jeder Meridianseite läuft ein Qi-Punkt in Flussrichtung durch den Kanal und hält
an jedem Akupunkturpunkt – mit Lage, Wirkung, Stichtiefe und der Einordnung als
Antikpunkt (Ting, Yong, Yu, King, Ho).

## Stand

| Umlauf | Meridian | Status |
|---|---|---|
| 1 | Lunge (Lu / LU) | vollständig: 11 Punkte, Organ, Wandlungsphasen, Mangel/Fülle, Ernährung |
| 1 | Dickdarm, Magen, Milz | offen |
| 2 | Herz, Dünndarm, Blase, Niere | offen |
| 3 | Perikard, 3-Erwärmer, Gallenblase, Leber | offen |

## Gestaltung

Gestaltet nach dem **Designhandbuch Healthlane Academy, Entwurf 0.6**
(`10-Administration/Designhandbuch`). Umgesetzt sind unter anderem:

- Farben ausschließlich aus Kapitel 3: Tusche, Papier, Weiß, Siegelrot und die Abstufungen.
  Keine weiteren Farben, keine Verläufe, keine Schatten (14.3).
- Meridiantafel nach 11.4: Verlauf in Tusche, Punkte in Siegelrot, Beschriftung als
  Pinyin mit Kurzbezeichnung. Mehrere rote Punkte sind hier zulässig – 3.3 nennt
  Meridiandarstellungen ausdrücklich als Ausnahme von der Regel des einen Punkts.
- Typografie nach Kapitel 4: Cormorant Garamond Medium für Titel (nie fett, nie unter
  20 px), Lato für Text und Labels, Noto Serif SC für Hanzi.
- Aufbau nach 10.1: dunkler Einstieg in Tusche, danach Abschnitte im Wechsel von
  Papier und Weiß. Buttons ohne Rot, Karten mit Haarlinie und ohne Schatten.
- Bewegung nach 10.4: nichts läuft von allein. Der Qi-Fluss ist ein Schalter und
  standardmäßig aus; `prefers-reduced-motion` wird respektiert.

### Schriften

Kapitel 4.2 verlangt, die Schriften selbst zu hosten statt sie über Google-Server
einzubinden. Sie liegen deshalb in `fonts/`. Neu holen, wenn ein weiterer Meridian
neue Schriftzeichen mitbringt:

```bash
bash werkzeuge/schriften-holen.sh
```

Das Skript sammelt alle im Projekt vorkommenden Schriftzeichen ein und lädt Noto Serif SC
nur für genau diese Zeichen – deshalb sind alle drei Schriften zusammen nur rund 330 KB groß.

### Was eine Meridianseite enthält

1. **Tafel** mit Figur, Verlauf und Punkten. Punkte werden angeklickt; daneben stehen
   Lage, Wirkung, Stichtiefe, deutscher und englischer Name.
2. **Das Organ**: Einordnung und die Aufgaben als aufklappbare Abschnitte.
3. **Die fünf Wandlungsphasen**: Schaubild mit Sheng- und Ke-Zyklus, die Organuhr,
   und die Zuordnungstafel mit Farbe, Jahreszeit, Sinnesorgan, Geschmack, Richtung
   sowie positiven und negativen Emotionen für alle fünf Phasen.
4. **Mangel und Fülle**: die vier Felder Yin-Mangel, Yang-Mangel, Yin-Fülle, Yang-Fülle
   als anklickbare Matrix, jeweils mit Zeichen, Zungen- und Pulsbefund und Punkten.
   Darunter die äußeren Faktoren.
5. **Ernährung**: was das Organ stärkt und was ihm schadet, jeweils mit Begründung.
6. **Punktfolge** als vollständige Liste.

### Zwei inhaltliche Festlegungen

- **Mangel statt Sufficiency.** Die vier Felder heißen Mangel (Xū 虛) und Fülle (Shí 實).
  Ein Zustand, in dem Yin oder Yang ausreichend vorhanden ist, erzeugt keine Symptome –
  gemeint ist der Mangel.
- **Phasenschaubild einfarbig.** Die fünf Phasenfarben stehen als Wort in der
  Zuordnungstafel, nicht als Farbfläche. Kapitel 3.2 lässt keine weiteren Farben zu,
  und die Ausnahme in 3.3 gilt nur für Meridian- und Punktdarstellungen.

### Offene Gestaltungsfragen

- **Figur statt Umrisszeichnung.** 11.4 sieht für Meridiandarstellungen einen Körperumriss
  in Kiesel vor. Hier steht stattdessen eine fotorealistische Figur, weil sie im Unterricht
  besser trägt; die Sättigung ist nach 11.3 zurückgenommen. Bewusste Abweichung von einem SOLL.
- **Rot zweimal auf einer Ansicht.** Das Logo in der Navigation enthält den roten Ring, die
  Tafel enthält die roten Punkte. Die Fachgrafik-Ausnahme aus 3.3 deckt die Punkte; ob das
  Logo in der Navigation daneben bestehen bleibt, ist zu entscheiden.

## Lokal ansehen

Doppelklick auf `index.html` genügt für die Animation. Für den Kalibrator wird ein
kleiner lokaler Server gebraucht, weil die Silhouettenprüfung sonst am Browser-Sicherheits-
modell scheitert:

```bash
python3 -m http.server 8000
```

Danach `http://localhost:8000/` im Browser öffnen.

## Aufbau

```
index.html          Übersicht, nach den drei Meridianumläufen gegliedert
meridian.html       Renderer, aufgerufen mit ?m=lu
css/app.css         Gestaltung auf Basis der HLA-Design-Tokens
fonts/              selbst gehostete Schriften (Kapitel 4.2)
img/marke/          Logo und Linienmotiv aus dem Designhandbuch
js/engine.js        Spline, Bogenlängen, Qi-Animation – kennt keinen einzelnen Meridian
js/app.js           Seitenlogik der Meridianseite
data/katalog.js     die zwölf Hauptmeridiane als Verzeichnis
data/wandlungsphasen.js  die fünf Phasen und die Organuhr – gilt für alle Meridiane
data/lu.js          ein Meridian: Verlauf, Punkte, Organ, Zustände, Ernährung
js/wuxing.js        zeichnet Phasenschaubild und Organuhr
img/front|back|side.png   die drei Figuren, 880 × 1168, freigestellt
tools/kalibrator.html     Werkzeug zum Setzen der Punktlagen
werkzeuge/schriften-holen.sh   holt und verkleinert die Schriften
```

Alle Bildkoordinaten beziehen sich auf das Raster **880 × 1168** – das gilt für alle
drei Ansichten. Die Engine rechnet daraus Spline und Bogenlängen selbst aus.

## Einen Meridian ergänzen

1. `tools/kalibrator.html` öffnen und die passende Ansicht wählen
   (Vorderansicht für Lu, Di, Ma, MP, He, Ni, Pe, Le – Rückansicht für Dü, Bl, 3E – Seitenansicht für Gb).
2. **Landmarke A und B** setzen und im Feld daneben eintragen, wie viele Cun dazwischen
   liegen. Das Lineal zeichnet dann jeden Cun ein. Bewährte Strecken:
   Achselfalte → Ellenbeuge = 9 Cun, Ellenbeuge → Handgelenksfalte = 12 Cun,
   Kniegelenksspalt → Außenknöchel = 16 Cun, Schambein → Kniegelenksspalt = 18 Cun.
3. Im Modus **Stützpunkt** den Verlauf abklicken – grob genug, der Spline glättet.
   Im Modus **Punkt** die Akupunkturpunkte setzen, oder über *Punkt bei N Cun* exakt
   auf dem Lineal platzieren.
4. Punkte, die neben der Silhouette landen, werden rot markiert. Das fängt die
   häufigsten Fehler ab.
5. **Erzeugen** klicken, den Block kopieren und in eine neue Datei `data/<id>.js`
   einsetzen – Kopf und Textfelder nach dem Vorbild von `data/lu.js` ausfüllen.
6. In `data/katalog.js` beim betreffenden Meridian `fertig: true` setzen.

## Offene Punkte

Die **Seitenansicht** taugt noch nicht für die Gallenblase: der Arm hängt gerade herunter
und verdeckt die seitliche Rumpfwand um die Taille – genau dort, wo Gb 24 bis Gb 30 liegen.
Vor der Gallenblase muss `img/side.png` neu erzeugt werden, mit angehobenem oder nach
hinten geführtem Arm. Für Dü, Bl und 3E reicht die Rückansicht wie sie ist.

## Zu den Punktzahlen

Die zwölf Hauptmeridiane tragen zusammen **309** Punkte (WHO-Standardnomenklatur):
Lu 11, Di 20, Ma 45, MP 21, He 9, Dü 19, Bl 67, Ni 27, Pe 9, 3E 23, Gb 44, Le 14.
Die oft genannten 361 Punkte ergeben sich erst mit Ren Mai (24) und Du Mai (28).

## Hinweis

Die Punktlagen sind nach der proportionalen Cun-Maßlehre auf die Figuren gesetzt und
dienen der Orientierung im Unterricht, nicht der Behandlung. Am Menschen wird immer
palpiert.

Die Figuren sind generierte Illustrationen und zeigen keine reale Person.
