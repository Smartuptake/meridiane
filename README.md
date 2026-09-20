# Meridiane und Antikpunkte

Animierte Verläufe der zwölf Hauptmeridiane für den TCM-Unterricht.
Auf jeder Meridianseite läuft ein Qi-Punkt in Flussrichtung durch den Kanal und hält
an jedem Akupunkturpunkt – mit Lage, Wirkung, Stichtiefe und der Einordnung als
Antikpunkt (Ting, Yong, Yu, King, Ho).

## Stand

| Umlauf | Meridian | Status |
|---|---|---|
| 1 | Lunge (Lu / LU) | vollständig: 11 Punkte, Organ, Wandlungsphasen, Mangel/Fülle, Ernährung |
| 1 | Dickdarm (Di / LI) | vollständig: 11 Kernpunkte von Di 1 bis Di 20 |
| 1 | Magen (Ma / ST) | vollständig: 17 Kernpunkte von Ma 1 bis Ma 45 |
| 1 | Milz (MP / SP) | vollständig: 11 Kernpunkte von MP 1 bis MP 21 |
| 2 | Herz (He / HT) | vollständig: alle 9 Punkte |

| 2 | Dünndarm, Blase, Niere | offen |
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
  20 px), Lato für Text und Labels, Kaiti für Hanzi.
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

Die chinesischen Zeichen stehen durchgehend in der **vereinfachten Form** und in einer
**Kaiti-Schrift**. Wo das Betriebssystem eine Kaiti mitbringt, wird sie benutzt; sonst greift
die selbst gehostete LXGW WenKai. Das Skript sammelt alle im Projekt vorkommenden
Schriftzeichen ein und lädt sie nur für genau diese Zeichen – deshalb sind alle drei Schriften zusammen nur rund 330 KB groß.

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

### Entscheidungen beim Dickdarm

- **Elf Kernpunkte statt aller zwanzig.** Aufgenommen sind alle Antikpunkte des Skripts
  (Di 1 bis Di 7 sowie Di 11) und dazu Di 10, Di 15 und Di 20, ohne die der Verlauf zum
  Gesicht nicht darstellbar wäre.
- **Vorderansicht trotz dorsalem Verlauf.** Di 1 bis Di 5 liegen auf der radial-dorsalen
  Seite von Hand und Unterarm. In anatomischer Haltung – Handflächen nach vorn – fällt die
  radiale Seite mit der seitlichen Körperkontur zusammen, sodass der Verlauf in der
  Vorderansicht als Projektion auf die laterale Armkante korrekt ablesbar ist. Das erspart
  einen Ansichtswechsel mitten im Meridian.
- **Der Kreuzungspunkt ist eingezeichnet.** Der Meridian kreuzt unterhalb der Nase die
  Mittellinie; Di 20 liegt deshalb auf der Gegenseite der Figur.

### Stand der Umläufe

Der erste Umlauf – Lunge, Dickdarm, Magen, Milz – ist abgeschlossen. Vom zweiten steht
das Herz. Alle fünf liegen auf der Vorderansicht; mit Dünndarm und Blase wird erstmals
die Rückansicht gebraucht.

Beim Herzmeridian sind **alle neun Punkte** eingezeichnet, keine Auswahl – er ist der
kürzeste der zwölf. Er läuft auf der Ulnarseite, also an der Innenkante des Arms, und
damit genau gegenüber von Lunge und Dickdarm.

### Zum Magenmeridian

Der längste Verlauf auf der Vorderseite und der einzige, der Gesicht, Rumpf und Bein
zugleich berührt. Aufgenommen sind alle Antikpunkte des Skripts (Ma 34 bis Ma 45) sowie
Ma 1, Ma 4, Ma 6, Ma 8, Ma 12 und Ma 25, ohne die der Kopf- und Rumpfverlauf nicht
darstellbar wäre. Ma 38 ist ausgelassen – das Skript führt ihn nur als Bezugspunkt für
Ma 40. Der aufsteigende Ast zur Stirnecke und der Abzweig zu Ma 40 sind gestrichelt
eingezeichnet.

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
data/sechs-laute.js      das Qigong-Tableau der sechs heilenden Laute
uebungen/           Übungstableaus, am Bildschirm und als A3-Druck
img/uebungen/       Übungszeichnungen, aus der Vorlage herausgelöst
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

## Übungstableaus

Unter `uebungen/` liegen Qigong-Tableaus, die sich auf Organe und Meridiane beziehen.
Erreichbar über den Abschnitt **Übungen** auf der Übersichtsseite.

| Tableau | Stand |
|---|---|
| Die sechs heilenden Laute | fertig |
| Der kleine Himmelskreislauf | fertig |
| Meridian-Dehnung | fertig |

Die sechs Laute folgen dem nährenden Zyklus ab Metall: Lunge, Nieren, Leber, Herz, Milz;
der sechste gehört zum Dreifachen Erwärmer, der keine eigene Wandlungsphase hat.

**Die Zeichnungen** lagen in der Vorlage als ein einziges Bild vor, das alle sechs Haltungen
als 2×3-Raster enthielt. Es ist in sechs Einzelbilder zerlegt und jeder Übung zugeordnet;
die Ränder wurden gegen den weißen Grund geprüft, damit keine Figur angeschnitten ist.

**Die neunzehn Stationen** des Himmelskreislaufs sind nicht geschätzt: Positionen,
Verlauf und Markenformen stammen aus dem Inhaltsstrom der Vorlage. Der dortige
Bildrahmen (524,288 × 786,432 bei 177,76 / 157,448) rechnet die PDF-Koordinaten
verlustfrei in das Bildraster 746 × 1335 um.

**Drucken:** Die Seite trägt ihre Druckvorlage selbst. Im Browser Cmd+P, Papierformat
**A3 hoch**, Hintergrundgrafiken aktivieren. Es entsteht ein zweispaltiges Tableau ohne
Navigation und Fußbereich. Ein zweites Dokument, das auseinanderlaufen könnte, gibt es nicht.

## Zu den Punktzahlen

Die zwölf Hauptmeridiane tragen zusammen **309** Punkte (WHO-Standardnomenklatur):
Lu 11, Di 20, Ma 45, MP 21, He 9, Dü 19, Bl 67, Ni 27, Pe 9, 3E 23, Gb 44, Le 14.
Die oft genannten 361 Punkte ergeben sich erst mit Ren Mai (24) und Du Mai (28).

## Hinweis

Die Punktlagen sind nach der proportionalen Cun-Maßlehre auf die Figuren gesetzt und
dienen der Orientierung im Unterricht, nicht der Behandlung. Am Menschen wird immer
palpiert.

Die Figuren sind generierte Illustrationen und zeigen keine reale Person.
