# Meridiane und Antikpunkte

Animierte Verläufe der zwölf Hauptmeridiane für den TCM-Unterricht.
Auf jeder Meridianseite läuft ein Qi-Punkt in Flussrichtung durch den Kanal und hält
an jedem Akupunkturpunkt – mit Lage, Wirkung, Stichtiefe und der Einordnung als
Antikpunkt (Ting, Yong, Yu, King, Ho).

## Stand

| Umlauf | Meridian | Status |
|---|---|---|
| 1 | Lunge (Lu / LU) | kalibriert, 11 Punkte, mit Organkapitel |
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
data/lu.js          ein Meridian: Verlauf, Punkte, Texte
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
