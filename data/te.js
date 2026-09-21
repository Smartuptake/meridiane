/* Drei-Erwärmer-Meridian – Hand-Shaoyang – 手少阳三焦经
   Kalibriert auf img/back.png (880 × 1168). Landmarken wie beim Dünndarm,
   am 21.09.2026 neu vermessen: Handgelenksfalte auf dem Handrücken y 521,
   Olekranon (605, 422), dazwischen 12 Cun = 115 px, also 9,6 Bildpunkte
   je Cun entlang der Armachse. Vorher lag die Handgelenksfalte 13 px zu
   hoch; dadurch saßen 3E 4 bis 3E 7 zu weit oben. Der Meridian läuft auf der Streckseite in der
   Mitte zwischen Elle und Speiche. Die vier Finger enden bei x 679, 699,
   714 und 726; Dü 1 liegt laut si.js bei 680 am kleinen Finger, damit ist
   der Ringfinger der zweite von außen und 3E 1 sitzt an dessen
   Kleinfingerseite. */
Meridian.register({
  id: "te", code: "TE", codeDe: "3E", ord: 10,
  name: "Drei-Erwärmer", titel: "Drei-Erwärmer-Meridian", nameHan: "三焦经",
  channel: "Hand-Shaoyang", channelHan: "手少阳",
  element: "Feuer", elementHan: "火", wx: "feuer",
  yin: false, coupled: "pc", coupledName: "Perikard",
  clock: "21 – 23 Uhr", pointCount: 23, direction: "Hand → Kopf",
  view: "back", mirror: true,

  intro: "Der Hand-Shaoyang-Meridian des Drei-Erwärmers beginnt an der " +
         "Kleinfingerseite des Ringfingernagels, läuft über den Handrücken zwischen " +
         "dem vierten und fünften Mittelhandknochen, über die Mitte des Handgelenks " +
         "und dann genau zwischen Elle und Speiche die Streckseite des Unterarms " +
         "hinauf. Er zieht über den Ellenbogenhöcker, die Rückseite des Oberarms und " +
         "die Schulter zum Nacken, umkreist das Ohr und endet am äußeren Ende der " +
         "Augenbraue. " +
         "Eingezeichnet sind 13 der 23 Punkte. 3E 21 und 3E 23 liegen vor " +
         "beziehungsweise neben dem Ohr im Gesicht und stehen als Projektion an der " +
         "Kopfkante; 3E 17 hinter dem Ohrläppchen ist von hinten wirklich zu sehen. " +
         "3E 5 und 3E 6 liegen am Körper nur einen Cun auseinander und rücken hier " +
         "etwas weiter auseinander, damit beide anklickbar bleiben.",

  cun: { handgelenk: [662, 521], ellenbogen: [600, 413],
         hinweis: "3E 4 → Ellenbogenhöcker = 12 Cun; 3E 5 liegt 2, 3E 6 und 3E 7 liegen 3 Cun über 3E 4" },

  path: [[693,612],[690,598],[687,586],[679,564],[670,542],[662,521],[653,505],[648,496],
         [640,501],[636,488],[618,450],[600,413],[590,390],[578,368],[570,345],[566,320],
         [562,285],[545,272],[525,262],[505,258],[490,232],[478,202],[469,170],[471,138],
         [478,128],[483,116],[481,100],[479,78]],

  inner: "M550,292 C524,312 500,338 482,368 C466,396 458,428 456,462",
  branches: [
    { label: "Ast vom Ohr zum äußeren Augenwinkel", d: "M478,126 C470,112 466,98 468,84" }
  ],

  /* --- Das Organ --- */
  organ: {
    titel: "Der Drei-Erwärmer in der chinesischen Medizin",
    pinyin: "Sān jiāo", han: "三焦", wx: "feuer",
    text: [
      "Der Drei-Erwärmer ist das eigenartigste der zwölf Organe: Er hat einen Namen, " +
      "eine Uhrzeit, einen Meridian mit dreiundzwanzig Punkten – aber keine Gestalt. " +
      "Der klassische Text sagt es unumwunden: „Er hat einen Namen, aber keine " +
      "Form.“ Sān jiāo 三焦 heißt „drei Brandstellen“ oder „drei Feuerstätten“. Gemeint " +
      "sind nicht drei Organe, sondern drei Räume, in die der Rumpf eingeteilt wird.",

      "Der obere Erwärmer reicht vom Zwerchfell aufwärts und beherbergt Lunge und " +
      "Herz; er wird mit einem Nebel verglichen, der sich verteilt. Der mittlere " +
      "Erwärmer liegt zwischen Zwerchfell und Nabel mit Milz und Magen; er ist ein " +
      "gärender Schaum, ein Kessel, in dem verarbeitet wird. Der untere Erwärmer " +
      "reicht vom Nabel abwärts mit Niere, Blase und Därmen; er ist ein Abzugsgraben, " +
      "der das Trübe fortführt.",

      "Die Aufgabe des Drei-Erwärmers ist die Verbindung dieser drei Räume. Er ist " +
      "der Weg, auf dem das Ursprungs-Qi aus der Niere in alle Organe gelangt, und " +
      "der Weg, auf dem das Wasser durch den Körper geführt wird. Er ist weniger ein " +
      "Ding als eine Funktion: die Durchgängigkeit selbst. Wo etwas stockt – Wasser, " +
      "Wärme, Qi –, ist er zuständig.",

      "Als Shaoyang-Meridian steht er zudem zwischen außen und innen, im Scharnier " +
      "zwischen Oberfläche und Tiefe. Daher sein eigentümliches Krankheitsbild: " +
      "Wechselfieber, das Hin und Her zwischen Frösteln und Hitze, bitterer Mund und " +
      "Beschwerden, die kommen und gehen."
    ],

    aufgabenTitel: "Die Aufgaben des Drei-Erwärmers",
    aufgaben: [
      { was: "Die drei Räume verbinden", han: "通行三气",
        text: "Oberer, mittlerer und unterer Erwärmer arbeiten nur zusammen, wenn der " +
              "Weg zwischen ihnen frei ist. Der Drei-Erwärmer ist dieser Weg. Stockt " +
              "er, steht oben Hitze und unten Kälte, ohne dass eines das andere " +
              "erreicht." },
      { was: "Das Ursprungs-Qi verteilen", han: "元气之别使",
        text: "Der klassische Ausdruck nennt ihn den „Sonderboten des Ursprungs-Qi“. " +
              "Was in der Niere gespeichert ist, gelangt über ihn zu allen Organen. " +
              "Darum liegen die Yuan-Quellpunkte aller Meridiane in seinem " +
              "Zuständigkeitsbereich." },
      { was: "Die Wasserwege durchgängig halten", han: "决渎之官",
        text: "Sein Amtstitel heißt „Beamter für Gräben und Kanäle“. Ödeme, " +
              "Wasseransammlung, schwerer Kopf, geschwollene Beine, Schwierigkeiten " +
              "beim Wasserlassen – alles, was mit stockendem Wasser zu tun hat, " +
              "gehört auch hierher." },
      { was: "Als Scharnier zwischen außen und innen wirken", han: "半表半里",
        text: "Shaoyang liegt weder an der Oberfläche noch in der Tiefe, sondern " +
              "dazwischen. Beschwerden, die wechseln statt zu bleiben – mal Frost, " +
              "mal Hitze, mal hier, mal dort – sind sein Zeichen." },
      { was: "Das Ohr und die Kopfseite versorgen", han: "耳与侧头",
        text: "Der Meridian umkreist das Ohr und endet an der Augenbraue. " +
              "Ohrgeräusche, Ohrenschmerz, Schwerhörigkeit, Schläfenkopfschmerz und " +
              "Schmerz am äußeren Augenwinkel folgen seinem Verlauf." }
    ],

    zustandTitel: "Mangel und Fülle von Yin und Yang",
    zustaende: [
      { feld: "Yang-Mangel", en: "Triple Burner Deficient and Cold", han: "三焦虚寒", pinyin: "sān jiāo xū hán",
        kurz: "Die Verbindung wird kalt und träge, das Wasser bleibt liegen.",
        zeichen: "Schweregefühl im ganzen Körper, geschwollene Beine und Lider, " +
                 "spärlicher Urin, Kältegefühl im Bauch, Blähungen, dünner Stuhl, " +
                 "Müdigkeit, kalte Hände und Füße, Frösteln, das sich schlecht " +
                 "vertreiben lässt.",
        zunge: "blass, geschwollen, feucht, mit Zahneindrücken",
        puls: "tief, langsam, schwach",
        punkte: "3E 4 mit Moxa · 3E 6 · Ren 6 · Ren 9 · Bl 22 · Mi 9" },

      { feld: "Yin-Mangel", en: "Triple Burner Yin Deficiency with Dryness", han: "三焦阴虚", pinyin: "sān jiāo yīn xū",
        kurz: "Die Säfte reichen nicht mehr, um alle drei Räume zu befeuchten.",
        zeichen: "Trockenheit an vielen Stellen zugleich: trockener Mund und trockene " +
                 "Augen, trockene Haut, trockener Stuhl, wenig und dunkler Urin. Dazu " +
                 "Hitzegefühl am Abend, Nachtschweiß, innere Unruhe, Ohrgeräusche als " +
                 "feiner Dauerton.",
        zunge: "rot, trocken, wenig Belag",
        puls: "dünn und schnell",
        punkte: "3E 3 · 3E 5 · Ni 6 · Ni 3 · Ren 4" },

      { feld: "Yin-Fülle", en: "Water and Damp Obstructing the Burners", han: "水湿阻滞", pinyin: "shuǐ shī zǔ zhì",
        kurz: "Die Gräben sind verstopft – Feuchtigkeit staut sich in allen drei Räumen.",
        zeichen: "Schweres, dumpfes Gefühl im Kopf wie unter einer Haube, Druck in " +
                 "Brust und Oberbauch, aufgeblähter Bauch, geschwollene Beine, " +
                 "spärlicher trüber Urin, klebriger Mund ohne Durst, Benommenheit.",
        zunge: "geschwollen, dicker schmieriger Belag",
        puls: "schlüpfrig, weich",
        punkte: "3E 5 · 3E 6 · Mi 9 · Ren 9 · Ma 28 · Bl 22" },

      { feld: "Yang-Fülle", en: "Damp Heat in the Shaoyang", han: "少阳湿热", pinyin: "shào yáng shī rè",
        kurz: "Hitze im Scharnier – das klassische Bild des Wechselfiebers.",
        zeichen: "Abwechselnd Frösteln und Hitze, bitterer Mundgeschmack, trockene " +
                 "Kehle, Schwindel, Druck und Enge unter den Rippen, Übelkeit, " +
                 "Appetitlosigkeit, Reizbarkeit, Schläfenkopfschmerz, rotes und " +
                 "schmerzendes Ohr, Ohrgeräusche, die plötzlich und laut einsetzen.",
        zunge: "rot mit gelbem, oft einseitigem Belag",
        puls: "saitenförmig und schnell",
        punkte: "3E 5 · 3E 6 · 3E 17 · Gb 41 · Gb 20 · Gb 34" }
    ],

    aeussereTitel: "Wo der Meridian selbst betroffen ist",
    aeussere: [
      { name: "Ohr und Schläfe", han: "耳鸣耳痛", pinyin: "ěr míng ěr tòng",
        zeichen: "Ohrgeräusche, die plötzlich und laut kommen, Ohrenschmerz, Druck " +
                 "und Völlegefühl im Ohr, Hörminderung, Schmerz hinter dem Ohr, " +
                 "Kopfschmerz an der Schläfe. Der Meridian umkreist das Ohr von " +
                 "hinten nach vorn – 3E 17 hinter dem Ohrläppchen ist der wichtigste " +
                 "Ohrpunkt überhaupt.",
        punkte: "3E 17 · 3E 21 · 3E 5 · 3E 3 · Gb 2 · Gb 20" },
      { name: "Schulter, Nacken und Arm", han: "肩臂痛", pinyin: "jiān bì tòng",
        zeichen: "Schmerz an der Rückseite der Schulter, der beim Heben des Arms " +
                 "zunimmt, Bewegungseinschränkung, Schmerz und Spannung längs der " +
                 "Streckseite des Unterarms, Schmerz im Ellenbogen, Taubheit im " +
                 "Ringfinger, steifer Nacken.",
        punkte: "3E 14 · 3E 15 · 3E 10 · 3E 5 · Dü 9 · Gb 21" },
      { name: "Der äußere Augenwinkel", han: "目外眦痛", pinyin: "mù wài zì tòng",
        zeichen: "Schmerz und Röte am äußeren Augenwinkel, Schmerz über der äußeren " +
                 "Augenbraue, Lidzucken, Kopfschmerz, der vom Auge zur Schläfe zieht. " +
                 "Der Meridian endet an 3E 23 am äußeren Brauenende.",
        punkte: "3E 23 · 3E 5 · Gb 1 · Gb 20" }
    ],

    nahrungTitel: "Was den Drei-Erwärmer stärkt und was ihm schadet",
    nahrung: {
      staerkt: [
        { was: "Warme Suppen und Eintöpfe", warum: "alle drei Räume bekommen Wärme und Flüssigkeit in einem" },
        { was: "Fenchel-Anis-Kümmel-Tee", warum: "hält den mittleren Erwärmer durchgängig, wo es am häufigsten stockt" },
        { was: "Gekochtes und Gedünstetes statt Rohem", warum: "der Kessel des mittleren Erwärmers muss weniger heizen" },
        { was: "Mäßig gewürzt, weder fade noch scharf", warum: "das Scharnier verträgt keine Extreme in die eine oder andere Richtung" },
        { was: "Regelmäßige Essenszeiten", warum: "der Drei-Erwärmer lebt von Rhythmus; unregelmäßiges Essen stört ihn früher als die Menge" },
        { was: "Bewegung, die den Rumpf dreht und dehnt", warum: "Seitneigen und Drehen öffnet gerade die Flanken, wo der Shaoyang läuft" }
      ],
      schadet: [
        { was: "Sehr große Mahlzeiten spät am Abend", warum: "die Maximalzeit liegt von einundzwanzig bis dreiundzwanzig Uhr; dann sollte verteilt werden, nicht verarbeitet" },
        { was: "Eiskaltes und heiß Gewürztes im Wechsel", warum: "das Scharnier wird zwischen beiden Extremen hin- und hergerissen" },
        { was: "Viel Alkohol", warum: "erzeugt Feuchte Hitze genau im Shaoyang – bitterer Mund und heiße Ohren am Morgen" },
        { was: "Unregelmäßiger Schlaf und Schichtarbeit", warum: "nichts stört die Durchgängigkeit so sehr wie ein zerrissener Tagesablauf" },
        { was: "Sitzen ohne Unterbrechung", warum: "die Flanken bleiben zusammengedrückt und das Wasser sackt nach unten" },
        { was: "Unterdrückter Ärger über lange Zeit", warum: "der Shaoyang staut sich mit der Gallenblase gemeinsam" }
      ],
      hinweis: "3E 5 Wàiguān liegt zwei Cun über der Handgelenksfalte auf der " +
               "Streckseite, genau gegenüber von Pe 6 Nèiguān auf der Beugeseite. " +
               "Die beiden bilden ein Paar: Nèiguān der innere, Wàiguān der äußere " +
               "Pass. Man kann sie zwischen Daumen und Zeigefinger zugleich drücken – " +
               "die einfachste Selbsthilfe bei beginnender Erkältung mit steifem " +
               "Nacken und bei Ohrgeräuschen."
    },

    eigenschaften: [
      { k: "Wandlungsphase", v: "Feuer 火" },
      { k: "Jahreszeit", v: "Sommer" },
      { k: "Klima", v: "Hitze" },
      { k: "Geschmack", v: "bitter" },
      { k: "Farbe", v: "rot" },
      { k: "Sinnesorgan", v: "Zunge, über den Verlauf auch das Ohr" },
      { k: "Gewebe", v: "Blutgefäße" },
      { k: "Emotion", v: "Freude, im Übermaß Unruhe" },
      { k: "Organart", v: "Fu-Organ ohne eigene Gestalt" },
      { k: "Gekoppelt", v: "Perikard" }
    ],

    hinweis: "Der Drei-Erwärmer hat als einziges Organ keine körperliche Entsprechung. " +
             "Er ist eine Ordnung, kein Ding: die Einteilung des Rumpfes in drei Räume " +
             "und die Verbindung zwischen ihnen. Die Muster beschreiben die klassische " +
             "Syndromlehre und dienen dem Unterricht. Sie ersetzen weder Diagnose noch " +
             "ärztliche Abklärung."
  },

  points: [
    { n:1, pinyin:"Guānchōng", han:"关冲", de:"Ansturm am Tor", en:"Passage Hub",
      x:693, y:612, key:true, role:"TING",
      antik:"ting", wx:"metall",
      tags:["Ting / Jing – Brunnen-/Quellpunkt"],
      wirkung:["Ting / Jing – Brunnen-/Quellpunkt", "Metallpunkt der Dreifach-Erwärmer-Leitbahn", "", "Klärt Hitze und öffnet die Sinne", "Befreit die Kehle", "Belebt bei Bewusstlosigkeit"],
      skelett:"handruecken",
      marken:["ringfinger_uln"],
      loc:"An der Kleinfingerseite des Ringfingers, ein Fen (0,1 Cun) proximal des Nagelfalzwinkels.",
      ind:"Kopfschmerz, rote und schmerzende Augen, Halsschmerz, steife Zunge, Ohrgeräusche, Hörminderung, Fieber, Hitzschlag, Bewusstlosigkeit.",
      nd:"Schräg 0,1 Cun oder Mikroaderlass." },

    { n:2, pinyin:"Yèmén", han:"液门", de:"Tor der Flüssigkeiten", en:"Humor Gate",
      x:687, y:586, key:false, role:"YONG",
      antik:"yong", wx:"wasser",
      tags:["Yong / Ying – kleiner Flusspunkt"],
      wirkung:["Yong / Ying – kleiner Flusspunkt", "Wasserpunkt der Dreifach-Erwärmer-Leitbahn", "", "Klärt Hitze aus Kopf, Ohr und Kehle", "Befeuchtet bei Trockenheit", "Lindert Kopfschmerz an der Schläfe"],
      skelett:"handruecken",
      marken:["finger45"],
      loc:"Auf dem Handrücken zwischen Ring- und kleinem Finger, dicht vor dem Rand der Schwimmhaut, an der Grenze zwischen rotem und weißem Fleisch.",
      ind:"Trockener Mund und trockene Augen, Halsschmerz, rote Augen, Ohrgeräusche, Kopfschmerz, Fieber mit Frösteln, Schmerz und Taubheit in Hand und Arm. Der Name sagt die Richtung: er öffnet das Tor für die Säfte.",
      nd:"Senkrecht 0,3 bis 0,5 Cun." },

    { n:3, pinyin:"Zhōngzhǔ", han:"中渚", de:"Insel in der Mitte", en:"Central Islet",
      x:679, y:564, key:true, role:"YU · TON",
      antik:"yu", wx:"holz",
      tags:["Yu / Shu – Bachpunkt","Tonisierungspunkt","Ohrpunkt"],
      wirkung:["Yu / Shu – Bachpunkt", "Holzpunkt der Dreifach-Erwärmer-Leitbahn", "Tonisierungspunkt", "", "Der Ohrpunkt der Leitbahn: bei Ohrensausen und Schwerhörigkeit", "Klärt Hitze und vertreibt Wind", "Öffnet die Leitbahn an Hand und Arm"],
      skelett:"handruecken",
      marken:["mhk45_d", "kleinfinger_gg"],
      loc:"Auf dem Handrücken in der Vertiefung zwischen dem vierten und fünften Mittelhandknochen, dicht hinter den Grundgelenken.",
      ind:"Ohrgeräusche und Hörminderung – einer der Hauptpunkte dafür. Dazu Kopfschmerz, Schwindel, Halsschmerz, rote Augen, Schmerz in Schulter, Ellenbogen und Arm, Taubheit der Finger, Fieber. Als Tonisierungspunkt der Aufbaupunkt des Meridians.",
      nd:"Senkrecht 0,3 bis 0,5 Cun." },

    { n:4, pinyin:"Yángchí", han:"阳池", de:"Yang-Teich", en:"Yang Pool",
      x:662, y:521, key:true, role:"YUAN",
      antik:"yuan", wx:"",
      tags:["Yuan-Quellpunkt"],
      wirkung:["Yuan-Quellpunkt", "", "Löst Schmerz und Steife im Handgelenk", "Ordnet den Dreifachen Erwärmer", "Klärt Hitze aus der Leitbahn"],
      skelett:"handruecken",
      marken:["handgelenksfalte_d", "strecksehne"],
      loc:"In der Mitte der Handgelenksfalte auf der Streckseite, in der Vertiefung seitlich der Sehne des gemeinsamen Fingerstreckers.",
      ind:"Schmerz und Schwäche im Handgelenk, Sehnenscheidenentzündung, Schmerz in Schulter und Arm, trockener Mund, Durst, Ohrgeräusche, Fieber. Als Yuan-Punkt der Zugang zum Ursprungs-Qi über den Meridian, der es verteilt.",
      nd:"Senkrecht 0,3 bis 0,5 Cun." },

    { n:5, pinyin:"Wàiguān", han:"外关", de:"Äußerer Pass", en:"Outer Pass",
      x:653, y:505, key:true, role:"LUO",
      antik:"luo", wx:"",
      tags:["Luo-Punkt zum Perikard","Öffnungspunkt des Yangwei Mai","Paarpunkt zu Gb 41","Gegenstück zu Pe 6"],
      wirkung:["Luo-Punkt – zieht zum Perikard", "Öffnungspunkt des Yangwei Mai", "Paarpunkt zu Gb 41", "Einer der Acht Kreuzungspunkte", "", "Vertreibt äußeren Wind – der Punkt bei beginnender Erkältung", "Öffnet das Gehör", "Löst Schmerz an der Leitbahnseite des Körpers", "Das Gegenstück zu Pe 6 auf der Beugeseite"],
      skelett:"handruecken",
      marken:["elle_rand"],
      loc:"Zwei Cun oberhalb der Handgelenksfalte auf der Streckseite, zwischen Elle und Speiche – genau gegenüber von Pe 6 auf der Beugeseite.",
      ind:"Der meistbenutzte Punkt des Meridians: beginnende Erkältung mit Frösteln und steifem Nacken, Fieber, Kopfschmerz an der Schläfe, Ohrgeräusche und Hörminderung, rote Augen, Schmerz in Schulter, Ellenbogen und Hand, Zittern der Hände, Wechselfieber.",
      nd:"Senkrecht 0,5 bis 1 Cun zwischen den Knochen. Zusammen mit Pe 6 zwischen Daumen und Zeigefinger zu drücken – die einfachste Selbsthilfe des Meridians." },

    { n:6, pinyin:"Zhīgōu", han:"支沟", de:"Verzweigter Graben", en:"Branch Ditch",
      x:648, y:496, key:true, role:"KING",
      antik:"king", wx:"feuer",
      tags:["King / Jing – Flusspunkt","Hauptpunkt bei Verstopfung"],
      wirkung:["King / Jing – Strom-/Flusspunkt", "Feuerpunkt der Dreifach-Erwärmer-Leitbahn", "", "Der Hauptpunkt bei Verstopfung", "Bewegt das Qi in den Rippenseiten", "Klärt Hitze aus dem Dreifachen Erwärmer"],
      skelett:"handruecken",
      marken:["elle_rand"],
      loc:"Drei Cun oberhalb der Handgelenksfalte auf der Streckseite, zwischen Elle und Speiche, also einen Cun über 3E 5. Auf der Tafel stehen die beiden etwas weiter auseinander.",
      ind:"Der klassische Punkt bei Verstopfung, besonders wenn sie durch Trockenheit oder nach einer fieberhaften Erkrankung entsteht. Dazu Schmerz zwischen den Rippen, Gürtelrose, Ohrgeräusche, Halsschmerz, Schmerz in Schulter und Arm, Wechselfieber.",
      nd:"Senkrecht 0,5 bis 1 Cun zwischen den Knochen." },

    { n:7, pinyin:"Huìzōng", han:"会宗", de:"Zusammenkunft der Ahnen", en:"Convergence and Gathering",
      x:640, y:501, key:false, role:"XI",
      antik:"xi", wx:"",
      tags:["Xi-Spaltpunkt"],
      wirkung:["Xi-Cleft – Akkumulationspunkt", "", "Akutpunkt bei Schmerz im Arm", "Beruhigt bei Krämpfen", "Öffnet das Gehör"],
      skelett:"handruecken",
      marken:["elle_rand"],
      loc:"Auf gleicher Höhe wie 3E 6, also drei Cun über der Handgelenksfalte, aber einen Cun zur Kleinfingerseite hin, am Rand der Elle.",
      ind:"Als Xi-Punkt bei Akutem: plötzlicher Ohrenschmerz, plötzlich einsetzende Schwerhörigkeit, akuter Schmerz im Arm, Krampfanfälle, Schmerz zwischen den Rippen.",
      nd:"Senkrecht 0,5 bis 1 Cun." },

    { n:10, pinyin:"Tiānjǐng", han:"天井", de:"Himmlischer Brunnen", en:"Celestial Well",
      x:600, y:413, key:true, role:"HO · SED",
      antik:"ho", wx:"erde",
      tags:["Ho / He – Meerpunkt","Sedierungspunkt","Punkt bei Knoten und Schwellungen"],
      wirkung:["Ho / He – Meerpunkt", "Erdpunkt der Dreifach-Erwärmer-Leitbahn", "Sedierungspunkt", "", "Löst Knoten und Schwellungen – der Punkt bei geschwollenen Lymphknoten", "Wandelt Schleim", "Klärt Hitze aus der Leitbahn", "Beruhigt den Geist"],
      skelett:"ellenbogen_hinten",
      marken:["olekranon"],
      loc:"Einen Cun oberhalb der Spitze des Ellenbogenhöckers, in der Vertiefung, die sich bei gebeugtem Ellenbogen zeigt.",
      ind:"Schmerz im Ellenbogen und an der Rückseite des Oberarms, steifer Nacken. Klassisch außerdem der Punkt bei Knoten und Verhärtungen: geschwollene Lymphknoten am Hals, Kröpfe, Knoten unter der Haut. Dazu Schwermut, Angst und Migräne. Als Sedierungspunkt bei Fülle des Meridians.",
      nd:"Senkrecht 0,5 bis 1 Cun bei gebeugtem Ellenbogen." },

    { n:14, pinyin:"Jiānliáo", han:"肩髎", de:"Schulterloch", en:"Shoulder Bone Hole",
      x:562, y:285, key:true, role:"",
      antik:"", wx:"",
      tags:["Hauptpunkt an der Schulter"],
      wirkung:["Hauptpunkt an der Schulter", "", "Öffnet die Leitbahn an der Schulter", "Vertreibt Wind und Feuchtigkeit", "Löst Schmerz beim Heben des Arms"],
      marken:["akromion"],
      loc:"An der Schulter, in der hinteren der beiden Vertiefungen, die sich zeigen, wenn der Arm waagerecht gehoben wird – hinter und unter dem Schulterdach.",
      ind:"Schmerz und Bewegungseinschränkung der Schulter, besonders beim Heben und Abspreizen des Arms, Schwere im Arm, Lähmung nach Schlaganfall. Zusammen mit Di 15 das Paar bei der schmerzhaften Schultersteife.",
      nd:"Senkrecht 0,8 bis 1,2 Cun, bei gehobenem Arm." },

    { n:15, pinyin:"Tiānliáo", han:"天髎", de:"Himmlisches Loch", en:"Celestial Bone Hole",
      x:505, y:258, key:false, role:"",
      antik:"", wx:"",
      tags:["Nacken- und Schulterpunkt","Kreuzungspunkt mit dem Yangwei Mai"],
      wirkung:["Nacken- und Schulterpunkt", "Kreuzungspunkt mit dem Yangwei Mai", "", "Löst Steife in Nacken und Schulter", "Bewegt das Qi am Schulterblatt", "Vertreibt Wind"],
      marken:["schulterblatt"],
      loc:"Auf dem Kapuzenmuskel, in der Vertiefung am oberen inneren Winkel des Schulterblatts, etwa einen Cun unterhalb von Gb 21.",
      ind:"Steifer und schmerzender Nacken, Schmerz in Schulter und oberem Rücken, Spannung zwischen Hals und Schulter, Fieber ohne Schwitzen, Schmerz im Ellenbogen.",
      nd:"Senkrecht oder schräg 0,5 bis 0,8 Cun. Nicht tief stechen – darunter liegt die Lungenspitze." },

    { n:17, pinyin:"Yìfēng", han:"翳风", de:"Windschirm", en:"Wind Screen",
      x:471, y:138, key:true, role:"",
      antik:"", wx:"",
      tags:["wichtigster Ohrpunkt","Kreuzungspunkt mit der Gallenblase"],
      wirkung:["Der wichtigste Ohrpunkt der Leitbahn", "Kreuzungspunkt mit der Gallenblase", "", "Öffnet das Gehör bei Ohrensausen und Schwerhörigkeit", "Vertreibt Wind aus dem Gesicht", "Löst Gesichtslähmung und Kieferklemme"],
      marken:["ohrlaeppchen"],
      loc:"Hinter dem Ohrläppchen, in der Vertiefung zwischen dem Unterkieferwinkel und dem Warzenfortsatz. Bei angelegtem Ohrläppchen liegt der Punkt genau darunter.",
      ind:"Ohrgeräusche, Hörminderung, Ohrenschmerz, Druck im Ohr, Gesichtslähmung, Zahnschmerz, Kiefersperre, Schwellung der Wange, Schwindel. Der wichtigste Punkt am Ohr überhaupt und der erste bei jeder Gesichtslähmung.",
      nd:"Senkrecht 0,5 bis 1 Cun in Richtung der Nasenspitze. Sehr empfindlich." },

    { n:21, pinyin:"Ěrmén", han:"耳门", de:"Tor des Ohres", en:"Ear Gate",
      x:483, y:116, key:false, role:"",
      antik:"", wx:"",
      tags:["Ohrpunkt vor dem Tragus"],
      wirkung:["Ohrpunkt vor dem Tragus", "", "Öffnet das Gehör", "Lindert Ohrenschmerz und Ausfluss", "Löst Zahnschmerz im Oberkiefer"],
      marken:["projektion"],
      loc:"Vor dem Ohr, in der Vertiefung über dem kleinen Knorpelvorsprung am Ohreingang, die bei geöffnetem Mund deutlicher wird. Der Punkt liegt vor dem Ohr und steht hier an der Kopfkante als Projektion.",
      ind:"Ohrgeräusche, Hörminderung, Ausfluss aus dem Ohr, Ohrenschmerz, Zahnschmerz im Oberkiefer, Schmerz im Kiefergelenk, steifer Kiefer.",
      nd:"Senkrecht 0,5 bis 1 Cun bei geöffnetem Mund." },

    { n:23, pinyin:"Sīzhúkōng", han:"丝竹空", de:"Hohlraum am Seidenbambus", en:"Silk Bamboo Hollow",
      x:479, y:78, key:true, role:"",
      antik:"", wx:"",
      tags:["Endpunkt des Meridians","Augen- und Schläfenpunkt"],
      wirkung:["Endpunkt der Dreifach-Erwärmer-Leitbahn", "", "Klärt Hitze aus den Augen", "Lindert Kopfschmerz an der Schläfe", "Beruhigt Lidzucken"],
      marken:["projektion"],
      loc:"In der Vertiefung am äußeren Ende der Augenbraue. Der Punkt liegt im Gesicht und steht hier an der Kopfkante als Projektion.",
      ind:"Kopfschmerz an der Schläfe und Migräne, Schmerz und Röte am äußeren Augenwinkel, Lidzucken, herabhängendes Lid, verschwommenes Sehen, Schwindel, Zahnschmerz.",
      nd:"Flach 0,3 bis 0,5 Cun nach hinten. Kein Moxa im Gesicht." }
  ]
});
