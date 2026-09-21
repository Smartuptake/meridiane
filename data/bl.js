/* Blasenmeridian – Fuß-Taiyang – 足太阳膀胱经
   Der längste Meridian des Körpers: 67 Punkte. Kalibriert auf img/back.png
   (880 × 1168). Die Wirbelhöhen sind zwischen zwei gemessenen Landmarken
   verteilt: T1 am Halsansatz bei y 222, L4 auf Höhe des Darmbeinkamms bei
   y 450, also 15,2 Bildpunkte je Wirbel. Seitlich: 3 Cun = Innenrand des
   Schulterblatts ≈ 36 Bildpunkte, die innere Rückenlinie (1,5 Cun) liegt
   damit bei x 455, die äußere (3 Cun) bei x 473.
   Am Bein am 21.09.2026 neu vermessen: die Kniekehlenfalte liegt bei
   y 800, die Spitze des Außenknöchels bei y 1050 – y 1035 ist nur die
   Vorwölbung des Knöchels, y 1005 die schmalste Stelle. Kniekehle →
   Außenknöchel = 16 Cun, also 15,6 Bildpunkte je Cun.
   Die Gesäßfalte ist von der Hose verdeckt und auf y 600 geschätzt:
   dort, wo die Oberschenkel sich zu trennen beginnen (y 595), liegt
   der Damm, und die Gesäßfalte liegt auf gleicher Höhe. Probe: mit
   Gesäßfalte 600 → Kniekehle 800 = 14 Cun ergeben sich 14,3 px je Cun,
   und vorn ergibt Schambein 560 → Condylus 818 = 18 Cun ebenfalls
   14,3. Zwei voneinander unabhängige Maße, dasselbe Ergebnis.
   Siehe data/landmarken.js. */
Meridian.register({
  id: "bl", code: "BL", codeDe: "Bl", ord: 7,
  name: "Blase", titel: "Blasenmeridian", nameHan: "膀胱经",
  channel: "Fuß-Taiyang", channelHan: "足太阳",
  element: "Wasser", elementHan: "水", wx: "wasser",
  yin: false, coupled: "ki", coupledName: "Niere",
  clock: "15 – 17 Uhr", pointCount: 67, direction: "Kopf → Fuß",
  view: "back", mirror: true,

  intro: "Der Fuß-Taiyang-Meridian der Blase ist der längste Meridian des Körpers und " +
         "der einzige mit 67 Punkten. Er beginnt am inneren Augenwinkel, steigt über die " +
         "Stirn zum Scheitel, zieht über den Hinterkopf in den Nacken und läuft dann in " +
         "zwei parallelen Linien den ganzen Rücken hinab: die innere 1,5 Cun, die äußere " +
         "3 Cun neben der Wirbelsäule. Über das Gesäß geht es weiter durch die Mitte der " +
         "Oberschenkelrückseite, durch die Kniekehle, über die Wade, hinter den " +
         "Außenknöchel und am äußeren Fußrand entlang zur Außenseite des kleinen Zehs. " +
         "Auf der inneren Linie liegen die Rücken-Shu-Punkte aller zwölf Organe – " +
         "deshalb ist dieser Meridian in der Praxis der meistbenutzte von allen. " +
         "Eingezeichnet sind hier 34 Punkte: die Rücken-Shu-Reihe vollständig und die " +
         "Beinlinie mit allen Antikpunkten. Die äußere Linie ist als Linie mitgezeichnet, " +
         "von ihren Punkten aber nur Bl 43. Bl 1 und Bl 2 liegen im Gesicht und stehen " +
         "als Projektion an der Kopfkante; der Fuß ist von hinten stark verkürzt, darum " +
         "rücken Bl 62 bis Bl 67 enger zusammen, als sie am Körper liegen.",

  cun: { gesaessfalte: [492, 600], kniekehle: [502, 800],
         hinweis: "Gesäßfalte → Kniekehle = 14 Cun; Kniekehle → Spitze des Außenknöchels = 16 Cun" },

  path: [[478,92],[476,74],[472,60],[466,50],[459,43],[452,39],[446,42],[443,50],[443,62],
         [446,82],[449,108],[452,136],
         [457,168],[456,200],[455,229],[455,290],[455,351],[455,411],[455,470],[455,503],
         [462,528],[474,556],[484,580],[492,600],[494,650],[496,700],[498,750],[500,780],
         [502,800],[503,850],[504,890],[504,925],[519,941],[517,980],[514,1015],[513,1050],
         [519,1061],[524,1070],[530,1077],[533,1086],[526,1092],[516,1097]],

  /* Die äußere Rückenlinie, 3 Cun neben der Wirbelsäule: Bl 41 bis Bl 54,
     danach über die Gesäßmitte hinab und in der Kniekehle wieder zur
     Hauptlinie. Eingezeichnet ist von ihren Punkten nur Bl 43. */
  zweig: [[459,186],[465,214],[470,240],[473,270],[473,330],[473,390],[473,450],[474,500],
          [480,528],[492,565],[505,600],[515,645],[521,700],[521,750],[514,780],[502,800]],

  inner: "M455,427 C442,452 436,478 437,506 C438,528 444,545 452,556",
  branches: [
    { label: "Ast vom Scheitel ins Gehirn", d: "M449,41 C441,52 437,64 438,78" }
  ],

  /* --- Das Organ --- */
  organ: {
    titel: "Die Blase in der chinesischen Medizin",
    pinyin: "Páng guāng", han: "膀胱", wx: "wasser",
    text: [
      "Die Blase ist das Fu-Organ des Wassers und die Partnerin der Niere. In der " +
      "westlichen Sicht ist sie ein Sammelbehälter; in der chinesischen ist sie eine " +
      "Werkstatt. Was von oben als trübe Flüssigkeit ankommt, wird hier noch einmal " +
      "verwandelt, bevor es den Körper verlässt. Diese Verwandlung heißt Qi Hua 气化, " +
      "und die Wärme dafür kommt nicht aus der Blase selbst, sondern aus dem Yang der " +
      "Niere. Darum steht hinter fast jeder schwachen Blase eine schwache Niere.",

      "Der Meridian macht die Blase zu weit mehr als einem Organ der Ausscheidung. Auf " +
      "seiner inneren Rückenlinie liegen die Rücken-Shu-Punkte – für jedes der zwölf " +
      "Organe einer, in der Reihenfolge, in der die Organe im Rumpf liegen: oben die " +
      "Lunge, darunter Herz und Zwerchfell, dann Leber, Gallenblase, Milz und Magen, " +
      "unten Niere, Dickdarm, Dünndarm und Blase. Über diese Reihe ist jedes Organ vom " +
      "Rücken her erreichbar. Kein anderer Meridian bietet einen solchen Zugang.",

      "Dazu kommt der Taiyang-Charakter: Taiyang heißt „großes Yang“, und der Meridian " +
      "liegt wie ein Schild über der ganzen Rückseite des Körpers. Er ist die erste " +
      "Schicht, die von außen getroffen wird. Wind und Kälte dringen hier ein – steifer " +
      "Nacken, Frösteln und Kopfschmerz im Hinterkopf sind darum die klassischen ersten " +
      "Zeichen einer Erkältung und zugleich Zeichen des Blasenmeridians."
    ],

    aufgabenTitel: "Die Aufgaben der Blase",
    aufgaben: [
      { was: "Sammeln und Ausscheiden der trüben Flüssigkeiten", han: "贮尿排尿",
        text: "Was der Dünndarm als flüssigen Rest abtrennt und was die Niere nicht " +
              "zurückhält, kommt in der Blase an und wird von dort ausgeschieden. " +
              "Störungen zeigen sich in Menge, Farbe, Häufigkeit und Halten des Urins." },
      { was: "Verwandlung durch das Qi", han: "气化",
        text: "Die Blase scheidet nicht einfach aus, sie verwandelt. Diese Arbeit " +
              "braucht Wärme, und die stammt aus dem Nieren-Yang. Fehlt sie, wird der " +
              "Urin reichlich und hell; staut sie sich mit Feuchtigkeit, wird er knapp, " +
              "dunkel und brennt." },
      { was: "Das Netz der Rücken-Shu-Punkte tragen", han: "背俞穴",
        text: "Auf der inneren Rückenlinie liegen die Zustimmungspunkte aller zwölf " +
              "Organe. Sie sind zugleich Diagnosepunkte: ein druckempfindlicher, " +
              "verspannter oder eingesunkener Rücken-Shu weist auf sein Organ hin." },
      { was: "Die Rückseite als äußere Schicht schützen", han: "太阳为开",
        text: "Als Taiyang-Meridian bildet die Blase die äußerste Schicht des Körpers. " +
              "Hier beginnt der Kampf gegen Wind und Kälte, und hier – an Bl 12 " +
              "Fēngmén, dem „Tor des Windes“ – wird er am häufigsten geführt." }
    ],

    zustandTitel: "Mangel und Fülle von Yin und Yang",
    zustaende: [
      { feld: "Yang-Mangel", en: "Bladder Deficient and Cold", han: "膀胱虚寒", pinyin: "páng guāng xū hán",
        kurz: "Die Wärme zum Verwandeln fehlt – fast immer zusammen mit der Niere.",
        zeichen: "Häufiges Wasserlassen in großer Menge, heller, fast farbloser Urin, " +
                 "nächtliches Aufstehen, Nachträufeln, bei Kindern Einnässen, im Alter " +
                 "Inkontinenz. Dazu kalte Füße, kalter und schwacher unterer Rücken, " +
                 "Verschlimmerung bei Kälte und Erschöpfung.",
        zunge: "blass, feucht, weißer Belag",
        puls: "tief, schwach, besonders in der dritten Position",
        punkte: "Bl 23 mit Moxa · Bl 28 · Ren 4 · Ren 6 · Ni 3" },

      { feld: "Yin-Mangel", en: "Bladder Yin Deficiency with Dryness", han: "膀胱阴虚", pinyin: "páng guāng yīn xū",
        kurz: "Die Säfte sind knapp, die Blase liegt trocken.",
        zeichen: "Wenig, dunkler, konzentrierter Urin, unangenehmes Brennen ohne " +
                 "eigentliche Entzündung, Drang ohne Ergebnis, Trockenheit im Mund vor " +
                 "allem abends, Nachtschweiß, warme Handflächen und Fußsohlen. Oft nach " +
                 "langer Hitzeerkrankung, nach Fieber oder bei zu wenig Trinken über Jahre.",
        zunge: "rot, wenig oder kein Belag, rissig",
        puls: "dünn und schnell",
        punkte: "Ni 6 · Ni 3 · Mi 6 · Ren 4 · Bl 23" },

      { feld: "Yin-Fülle", en: "Cold Damp in the Bladder", han: "膀胱寒湿", pinyin: "páng guāng hán shī",
        kurz: "Kälte und Feuchtigkeit setzen sich fest und machen alles schwer.",
        zeichen: "Häufiger Drang mit zähem, trübem Urin, Schweregefühl im Unterbauch und " +
                 "im Kreuz, dumpfer, kalter Schmerz im unteren Rücken, der sich bei " +
                 "nassem und kaltem Wetter verschlimmert und durch Wärme bessert. " +
                 "Typisch nach Sitzen auf kaltem Untergrund oder nasser Kleidung.",
        zunge: "blass, geschwollen, weißer schmieriger Belag",
        puls: "tief, langsam, schlüpfrig",
        punkte: "Bl 23 · Bl 28 · Bl 39 · Mi 9 · Ren 3 mit Moxa" },

      { feld: "Yang-Fülle", en: "Damp Heat in the Bladder", han: "膀胱湿热", pinyin: "páng guāng shī rè",
        kurz: "Das häufigste Blasenmuster überhaupt – Feuchtigkeit und Hitze zusammen.",
        zeichen: "Brennendes, schmerzhaftes Wasserlassen, starker und plötzlicher Drang " +
                 "bei nur wenigen Tropfen, dunkler, trüber, streng riechender Urin, " +
                 "teils mit Blut oder Grieß, Druck und Hitzegefühl über dem Schambein, " +
                 "manchmal Fieber. Dies ist das Bild der akuten Blasenentzündung.",
        zunge: "rot mit gelbem schmierigem Belag, besonders an der Wurzel",
        puls: "schnell und schlüpfrig",
        punkte: "Bl 28 · Bl 63 · Bl 66 · Mi 9 · Ren 3 · Le 8" }
    ],

    aeussereTitel: "Wo der Meridian selbst betroffen ist",
    aeussere: [
      { name: "Der Rücken auf ganzer Länge", han: "腰背强痛", pinyin: "yāo bèi qiáng tòng",
        zeichen: "Steifer, schmerzender Rücken vom Nacken bis ins Kreuz, Verspannung " +
                 "neben der Wirbelsäule, Schmerz, der über das Gesäß und die " +
                 "Oberschenkelrückseite bis in die Wade und den Außenknöchel zieht – das " +
                 "klassische Bild des Ischias folgt genau diesem Verlauf. Bl 40 in der " +
                 "Kniekehle ist der Kommandopunkt für den gesamten Rücken.",
        punkte: "Bl 40 · Bl 23 · Bl 25 · Bl 57 · Bl 60 · Bl 36" },
      { name: "Nacken und Hinterkopf als erste Schicht", han: "太阳表证", pinyin: "tài yáng biǎo zhèng",
        zeichen: "Frösteln, das sich durch Zudecken nicht bessert, steifer Nacken, " +
                 "Kopfschmerz im Hinterkopf, der bis in die Stirn zieht, Abneigung gegen " +
                 "Wind. Das ist der Beginn einer Erkältung, in der chinesischen Medizin " +
                 "als Angriff auf das Taiyang beschrieben. Bl 12 heißt nicht umsonst " +
                 "„Tor des Windes“.",
        punkte: "Bl 12 · Bl 10 · Bl 11 · Bl 60 · Di 4" },
      { name: "Am Kopfende des Verlaufs", han: "目痛", pinyin: "mù tòng",
        zeichen: "Schmerz und Druck am inneren Augenwinkel, tränende oder brennende " +
                 "Augen, Schmerz über der Augenbraue, Stirnkopfschmerz, schwere Lider. " +
                 "Der Meridian beginnt am inneren Augenwinkel und zieht über die Braue " +
                 "zum Scheitel.",
        punkte: "Bl 1 · Bl 2 · Bl 10 · Gb 20" }
    ],

    nahrungTitel: "Was die Blase stärkt und was ihr schadet",
    nahrung: {
      staerkt: [
        { was: "Über den Tag verteilt warmes Wasser trinken", warum: "hält die Blase gespült, ohne sie zu kühlen" },
        { was: "Schwarze Bohnen, schwarzer Sesam, Hirse", warum: "die dunklen Nahrungsmittel des Wassers stärken Niere und Blase" },
        { was: "Wärme über Kreuz und Füßen", warum: "die Blase arbeitet mit der Wärme des Nieren-Yang, nicht ohne sie" },
        { was: "Walnüsse und Kastanien", warum: "klassische Speisen zur Stützung des Nieren-Yang" },
        { was: "Brennnessel- und Goldrutentee kurweise", warum: "leitet Feuchtigkeit und Hitze nach unten ab" },
        { was: "Etwas Salziges in Maßen, etwa Algen oder Miso", warum: "der Geschmack des Wassers führt nach innen und unten" },
        { was: "Den Harndrang nicht aufschieben", warum: "gestautes Trübes ist der Anfang von Feuchter Hitze" }
      ],
      schadet: [
        { was: "Sitzen auf kaltem oder nassem Untergrund", warum: "Kälte und Nässe dringen genau hier ein" },
        { was: "Nasse Badekleidung anbehalten", warum: "derselbe Weg, nur langsamer" },
        { was: "Zu viel Salz", warum: "im Übermaß schwächt der eigene Geschmack die Phase, die er nährt" },
        { was: "Viel Kaffee und Alkohol", warum: "treiben aus und trocknen zugleich, und bringen Hitze in den unteren Erwärmer" },
        { was: "Eisgekühlte Getränke", warum: "nehmen die Wärme, die zum Verwandeln gebraucht wird" },
        { was: "Zu wenig trinken über Jahre", warum: "der Urin wird dauerhaft knapp und scharf" },
        { was: "Dauernde Angst und Überarbeitung", warum: "die Emotion des Wassers zehrt Niere und Blase gemeinsam aus" }
      ],
      hinweis: "Die Maximalzeit der Blase liegt von fünfzehn bis siebzehn Uhr. Das ist die " +
               "Stunde, in der Trinken am meisten bewirkt und in der Konzentration " +
               "nachlässt, wenn Niere und Blase schwach sind. Und: bei jeder Blase lohnt " +
               "der Blick auf die Niere – die Blase hat die Arbeit, die Niere die Wärme."
    },

    eigenschaften: [
      { k: "Wandlungsphase", v: "Wasser 水" },
      { k: "Jahreszeit", v: "Winter" },
      { k: "Klima", v: "Kälte" },
      { k: "Geschmack", v: "salzig" },
      { k: "Farbe", v: "schwarz, dunkelblau" },
      { k: "Sinnesorgan", v: "Ohren" },
      { k: "Gewebe", v: "Knochen und Mark" },
      { k: "Emotion", v: "Angst, im Guten Willenskraft und Sanftmut" },
      { k: "Organart", v: "Fu-Organ, Hohlorgan" },
      { k: "Gekoppelt", v: "Niere" }
    ],

    hinweis: "Die Muster beschreiben die klassische Syndromlehre und dienen dem Unterricht. " +
             "Sie ersetzen weder Diagnose noch ärztliche Abklärung."
  },

  points: [
    { n:1, pinyin:"Jīngmíng", han:"睛明", de:"Helligkeit der Augen", en:"Bright Eyes",
      x:478, y:92, key:true, role:"",
      antik:"", wx:"",
      tags:["Beginn des Meridians","Treffpunkt von sechs Meridianen","Augenpunkt schlechthin"],
      wirkung:["Anfangspunkt der Blasen-Leitbahn", "Treffpunkt von fünf Leitbahnen", "", "Klärt Hitze aus den Augen", "Macht die Augen hell", "Vertreibt Wind aus dem Gesicht"],
      marken:["projektion"],
      loc:"Einen Fen (0,1 Cun) oberhalb und medial des inneren Augenwinkels, in der kleinen Grube am Nasenrücken. Der Punkt liegt im Gesicht und ist hier an der Kopfkante als Projektion eingezeichnet.",
      ind:"Alle Augenbeschwerden: Rötung, Tränen, Jucken, Schmerz, Verschwommensehen, Nachtblindheit, beginnender Star. Dazu Stirnkopfschmerz und Schnupfen.",
      nd:"Bei geschlossenem Auge den Augapfel sanft zur Seite schieben und 0,3 bis 0,5 Cun senkrecht am Knochen entlang stechen, nicht drehen, nicht moxen. Ein Punkt für geübte Hände – zum Selbstgebrauch nur sanfter Druck." },

    { n:2, pinyin:"Zǎnzhú", han:"攒竹", de:"Gesammelter Bambus", en:"Gathered Bamboo",
      x:476, y:74, key:true, role:"",
      antik:"", wx:"",
      tags:["Stirn- und Augenpunkt","gut zur Selbstbehandlung"],
      wirkung:["Lokalpunkt an der Augenbraue", "", "Vertreibt Wind und klärt den Kopf", "Lindert Stirnkopfschmerz", "Beruhigt zuckende Lider und tränende Augen"],
      marken:["projektion"],
      loc:"Am inneren Ende der Augenbraue, in der kleinen Vertiefung über dem inneren Augenwinkel. Ebenfalls im Gesicht gelegen und hier als Projektion eingezeichnet.",
      ind:"Stirnkopfschmerz, Druck über den Augen, müde und schwere Lider, Augenzucken, Tränenfluss bei Wind, Schnupfen, Nebenhöhlendruck, Schluckauf.",
      nd:"Flach 0,3 bis 0,5 Cun nach außen oder unten stechen. Kein Moxa. Als Akupressur mit den Daumenkuppen sehr wirksam gegen Bildschirmmüdigkeit." },

    { n:10, pinyin:"Tiānzhù", han:"天柱", de:"Himmelssäule", en:"Celestial Pillar",
      x:457, y:168, key:true, role:"",
      antik:"", wx:"",
      tags:["Fenster des Himmels","Nackenpunkt"],
      wirkung:["Fenster des Himmels", "Punkt des Meeres des Qi", "", "Vertreibt Wind aus Nacken und Kopf", "Löst Nackensteife", "Klärt die Sinne und beruhigt den Geist"],
      marken:["nackenhaaransatz", "wirbelrinne"],
      loc:"Im Nacken, 1,3 Cun seitlich der hinteren Mittellinie am oberen Rand des Haaransatzes, am äußeren Rand des Kapuzenmuskels.",
      ind:"Steifer Nacken, der sich nicht drehen lässt, Hinterhauptkopfschmerz, Schwindel, verstopfte Nase, Augenschmerz, Schulter-Nacken-Verspannung, Benommenheit im Kopf.",
      nd:"Senkrecht oder leicht schräg nach unten 0,5 bis 0,8 Cun. Nicht nach oben innen in Richtung Schädelbasis stechen." },

    { n:11, pinyin:"Dàzhù", han:"大杼", de:"Großer Weberschaft", en:"Great Shuttle",
      x:455, y:229, key:true, role:"",
      antik:"", wx:"",
      tags:["Hui-Punkt der Knochen","Meer der Knochen"],
      wirkung:["Hui-Punkt der Knochen", "Treffpunkt mit Dünndarm, Gallenblase und Dreifachem Erwärmer", "", "Nährt die Knochen", "Vertreibt Wind aus dem oberen Rücken", "Löst Steife in Nacken und Schulter"],
      marken:["wirbelrinne", "c7"],
      loc:"1,5 Cun seitlich der unteren Kante des Dornfortsatzes des 1. Brustwirbels.",
      ind:"Knochenerkrankungen aller Art, Arthrose, Osteoporose, steifer Nacken und oberer Rücken, Schmerz zwischen den Schulterblättern, Husten, Fieber mit Frösteln.",
      nd:"Schräg 0,5 bis 0,8 Cun zur Wirbelsäule hin. Auf dem Rücken nie senkrecht tief stechen – die Lunge liegt darunter." },

    { n:12, pinyin:"Fēngmén", han:"风门", de:"Tor des Windes", en:"Wind Gate",
      x:455, y:244, key:true, role:"",
      antik:"", wx:"",
      tags:["Haupttor gegen Wind","Erkältungspunkt"],
      wirkung:["Tor des Windes – Fenstername", "", "Vertreibt äußeren Wind – der Punkt bei beginnender Erkältung", "Öffnet die Lunge und stillt Husten", "Stärkt die Abwehr an der Oberfläche"],
      marken:["wirbelrinne"],
      loc:"1,5 Cun seitlich der unteren Kante des Dornfortsatzes des 2. Brustwirbels.",
      ind:"Beginnende Erkältung, Frösteln, steifer Nacken, Abneigung gegen Zugluft, Husten, Schnupfen, Fieber. Der wichtigste Punkt, um Wind abzuwehren, bevor er tiefer geht.",
      nd:"Schräg 0,5 bis 0,8 Cun. Bei Windkälte besonders gut zu moxen oder zu schröpfen." },

    { n:13, pinyin:"Fèishū", han:"肺俞", de:"Zustimmungspunkt der Lunge", en:"Lung Shu",
      x:455, y:259, key:true, role:"",
      antik:"", wx:"",
      tags:["Rücken-Shu der Lunge"],
      wirkung:["Zustimmungspunkt (Shu) des Organs Lunge", "", "Reguliert das Lungen-Qi und stillt Husten", "Stärkt die Abwehr", "Nährt das Lungen-Yin bei trockenem Husten"],
      marken:["wirbelrinne"],
      loc:"1,5 Cun seitlich der unteren Kante des Dornfortsatzes des 3. Brustwirbels.",
      ind:"Husten jeder Art, Asthma, Kurzatmigkeit, Engegefühl in der Brust, Nachtschweiß, trockene Haut, häufige Erkältungen, Trauer, die nicht abklingt.",
      nd:"Schräg 0,5 bis 0,8 Cun zur Wirbelsäule. Moxa bei kalten und chronischen Bildern." },

    { n:14, pinyin:"Juéyīnshū", han:"厥阴俞", de:"Zustimmungspunkt des Perikards", en:"Pericardium Shu",
      x:455, y:275, key:false, role:"",
      antik:"", wx:"",
      tags:["Rücken-Shu des Perikards"],
      wirkung:["Zustimmungspunkt (Shu) des Organs Perikard", "", "Öffnet die Brust und bewegt das Qi", "Beruhigt den Geist", "Lindert Herzklopfen und Beklemmung"],
      marken:["wirbelrinne"],
      loc:"1,5 Cun seitlich der unteren Kante des Dornfortsatzes des 4. Brustwirbels.",
      ind:"Engegefühl und Druck in der Brust, Herzklopfen, Unruhe, Husten, Erbrechen, Zahnschmerz. Wirkt auf das Herz über seinen Schutzmantel.",
      nd:"Schräg 0,5 bis 0,8 Cun zur Wirbelsäule." },

    { n:15, pinyin:"Xīnshū", han:"心俞", de:"Zustimmungspunkt des Herzens", en:"Heart Shu",
      x:455, y:290, key:true, role:"",
      antik:"", wx:"",
      tags:["Rücken-Shu des Herzens"],
      wirkung:["Zustimmungspunkt (Shu) des Organs Herz", "", "Nährt das Herz-Blut und beruhigt den Geist", "Lindert Herzklopfen, Unruhe und Schlaflosigkeit", "Klärt Hitze im Herzen"],
      marken:["wirbelrinne"],
      loc:"1,5 Cun seitlich der unteren Kante des Dornfortsatzes des 5. Brustwirbels.",
      ind:"Herzklopfen, Unruhe, Schlaflosigkeit, Angstträume, Vergesslichkeit, Nachtschweiß, Kummer, Beklemmung in der Brust, Sprachstörungen nach Schlaganfall.",
      nd:"Schräg 0,5 bis 0,8 Cun zur Wirbelsäule." },

    { n:16, pinyin:"Dūshū", han:"督俞", de:"Zustimmungspunkt des Lenkergefäßes", en:"Governing Shu",
      x:455, y:305, key:false, role:"",
      antik:"", wx:"",
      tags:["Rücken-Shu des Du Mai"],
      wirkung:["Zustimmungspunkt (Shu) des Organs Lenkergefäß", "", "Ordnet das Qi im Brustkorb", "Löst Herzklopfen und Schluckauf", "Öffnet die Rückenmitte"],
      marken:["wirbelrinne"],
      loc:"1,5 Cun seitlich der unteren Kante des Dornfortsatzes des 6. Brustwirbels.",
      ind:"Herzschmerz, Bauchschmerz, Rumpeln im Bauch, Schluckauf, Kälteempfindlichkeit im Rücken, Hautjucken.",
      nd:"Schräg 0,5 bis 0,8 Cun zur Wirbelsäule." },

    { n:17, pinyin:"Géshū", han:"膈俞", de:"Zustimmungspunkt des Zwerchfells", en:"Diaphragm Shu",
      x:455, y:320, key:true, role:"",
      antik:"", wx:"",
      tags:["Hui-Punkt des Blutes","Meer des Blutes"],
      wirkung:["Hui-Punkt des Blutes", "Zustimmungspunkt des Zwerchfells", "", "Nährt und bewegt das Blut – der Blutpunkt des Rückens", "Senkt gegenläufiges Qi ab und stillt Schluckauf", "Kühlt das Blut bei Hitze"],
      marken:["wirbelrinne", "t7"],
      loc:"1,5 Cun seitlich der unteren Kante des Dornfortsatzes des 7. Brustwirbels, auf Höhe des unteren Schulterblattwinkels.",
      ind:"Alle Blutstörungen: Blutmangel mit Blässe und Schwindel, Blutstauung mit stechendem Schmerz, Blutungsneigung. Dazu Schluckauf, Aufstoßen, Erbrechen, trockene Haut, Nachtschweiß, Juckreiz.",
      nd:"Schräg 0,5 bis 0,8 Cun zur Wirbelsäule. Bei Blutmangel gern mit Moxa." },

    { n:18, pinyin:"Gānshū", han:"肝俞", de:"Zustimmungspunkt der Leber", en:"Liver Shu",
      x:455, y:351, key:true, role:"",
      antik:"", wx:"",
      tags:["Rücken-Shu der Leber"],
      wirkung:["Zustimmungspunkt (Shu) des Organs Leber", "", "Löst gestautes Leber-Qi", "Nährt das Leber-Blut und die Augen", "Besänftigt Zorn und innere Spannung"],
      marken:["wirbelrinne"],
      loc:"1,5 Cun seitlich der unteren Kante des Dornfortsatzes des 9. Brustwirbels.",
      ind:"Augenbeschwerden, Reizbarkeit, Zorn, Druck unter den Rippen, Schwindel, Kopfschmerz an der Schläfe, Menstruationsbeschwerden, Sehnenbeschwerden, Gelbsucht.",
      nd:"Schräg 0,5 bis 0,8 Cun zur Wirbelsäule." },

    { n:19, pinyin:"Dǎnshū", han:"胆俞", de:"Zustimmungspunkt der Gallenblase", en:"Gallbladder Shu",
      x:455, y:366, key:false, role:"",
      antik:"", wx:"",
      tags:["Rücken-Shu der Gallenblase"],
      wirkung:["Zustimmungspunkt (Shu) des Organs Gallenblase", "", "Leitet Feuchtigkeit und Hitze aus Leber und Gallenblase", "Löst bitteren Mundgeschmack", "Ordnet die Mitte"],
      marken:["wirbelrinne"],
      loc:"1,5 Cun seitlich der unteren Kante des Dornfortsatzes des 10. Brustwirbels.",
      ind:"Bitterer Mundgeschmack, Übelkeit, Druck und Schmerz unter dem rechten Rippenbogen, Gelbsucht, Entschlusslosigkeit und Zaghaftigkeit, Schlafstörungen.",
      nd:"Schräg 0,5 bis 0,8 Cun zur Wirbelsäule." },

    { n:20, pinyin:"Píshū", han:"脾俞", de:"Zustimmungspunkt der Milz", en:"Spleen Shu",
      x:455, y:381, key:true, role:"",
      antik:"", wx:"",
      tags:["Rücken-Shu der Milz"],
      wirkung:["Zustimmungspunkt (Shu) des Organs Milz", "", "Stärkt die Milz und die Verdauung", "Löst Feuchtigkeit", "Hält das Blut in den Gefäßen", "Der wichtigste Rückenpunkt für die Mitte"],
      marken:["wirbelrinne"],
      loc:"1,5 Cun seitlich der unteren Kante des Dornfortsatzes des 11. Brustwirbels.",
      ind:"Verdauungsschwäche, Blähungen, weicher Stuhl, Müdigkeit nach dem Essen, Feuchtigkeit und Schleim, schwere Glieder, Neigung zu blauen Flecken, Grübeln.",
      nd:"Schräg 0,5 bis 0,8 Cun zur Wirbelsäule. Sehr gut zu moxen." },

    { n:21, pinyin:"Wèishū", han:"胃俞", de:"Zustimmungspunkt des Magens", en:"Stomach Shu",
      x:455, y:396, key:true, role:"",
      antik:"", wx:"",
      tags:["Rücken-Shu des Magens"],
      wirkung:["Zustimmungspunkt (Shu) des Organs Magen", "", "Harmonisiert den Magen und senkt sein Qi ab", "Löst Nahrungsstau und Völlegefühl", "Stärkt die Mitte"],
      marken:["wirbelrinne"],
      loc:"1,5 Cun seitlich der unteren Kante des Dornfortsatzes des 12. Brustwirbels.",
      ind:"Magenschmerz, Völlegefühl, Aufstoßen, Übelkeit, Appetitlosigkeit, Erbrechen, Rumpeln im Bauch, Schmerz im mittleren Rücken.",
      nd:"Schräg 0,5 bis 0,8 Cun zur Wirbelsäule." },

    { n:22, pinyin:"Sānjiāoshū", han:"三焦俞", de:"Zustimmungspunkt des Dreifachen Erwärmers", en:"Triple Burner Shu",
      x:455, y:411, key:false, role:"",
      antik:"", wx:"",
      tags:["Rücken-Shu des 3E"],
      wirkung:["Zustimmungspunkt (Shu) des Organs Dreifacher Erwärmer", "", "Ordnet den Wasserhaushalt", "Löst Ödeme und Blähungen", "Öffnet die drei Erwärmer"],
      marken:["wirbelrinne"],
      loc:"1,5 Cun seitlich der unteren Kante des Dornfortsatzes des 1. Lendenwirbels.",
      ind:"Wasseransammlung und Ödeme, Blähbauch, unregelmäßiger Stuhl, Kreuzschmerz, Störungen des Wasserhaushalts insgesamt.",
      nd:"Senkrecht 0,8 bis 1,2 Cun. Im Lendenbereich darf tiefer gestochen werden als im Brustbereich." },

    { n:23, pinyin:"Shènshū", han:"肾俞", de:"Zustimmungspunkt der Niere", en:"Kidney Shu",
      x:455, y:427, key:true, role:"",
      antik:"", wx:"",
      tags:["Rücken-Shu der Niere","einer der meistbenutzten Punkte überhaupt"],
      wirkung:["Zustimmungspunkt (Shu) des Organs Niere", "", "Stärkt die Niere – Yin und Yang zugleich", "Festigt die Essenz und das Mark", "Kräftigt die Lenden und das Gehör", "Fasst das Qi zum Einatmen"],
      marken:["wirbelrinne", "l4"],
      loc:"1,5 Cun seitlich der unteren Kante des Dornfortsatzes des 2. Lendenwirbels, auf Höhe der schmalsten Stelle der Taille.",
      ind:"Kreuzschmerz und Schwäche im unteren Rücken, Knieschwäche, Ohrgeräusche, Hörminderung, häufiges nächtliches Wasserlassen, Erschöpfung, Haarausfall, Unfruchtbarkeit, Impotenz, Angst.",
      nd:"Senkrecht 0,8 bis 1,2 Cun. Bei Nieren-Yang-Mangel der Moxa-Punkt schlechthin." },

    { n:24, pinyin:"Qìhǎishū", han:"气海俞", de:"Zustimmungspunkt des Meeres des Qi", en:"Sea of Qi Shu",
      x:455, y:442, key:false, role:"",
      antik:"", wx:"",
      tags:["Rücken-Shu zum Qi-Meer"],
      wirkung:["Zustimmungspunkt (Shu) des Organs Meer des Qi", "", "Stärkt das Qi im unteren Rücken", "Löst Lendenschmerz", "Ordnet die Regel"],
      marken:["wirbelrinne"],
      loc:"1,5 Cun seitlich der unteren Kante des Dornfortsatzes des 3. Lendenwirbels.",
      ind:"Kreuzschmerz, Blähungen, Hämorrhoiden, unregelmäßige Regel, Schwäche und Kälte im unteren Rücken.",
      nd:"Senkrecht 0,8 bis 1,2 Cun." },

    { n:25, pinyin:"Dàchángshū", han:"大肠俞", de:"Zustimmungspunkt des Dickdarms", en:"Large Intestine Shu",
      x:455, y:457, key:true, role:"",
      antik:"", wx:"",
      tags:["Rücken-Shu des Dickdarms","Hauptpunkt bei Kreuzschmerz"],
      wirkung:["Zustimmungspunkt (Shu) des Organs Dickdarm", "", "Reguliert den Darm bei Durchfall wie bei Verstopfung", "Löst Lendenschmerz und Ischias", "Bewegt das Qi im Unterbauch"],
      marken:["wirbelrinne", "l4", "darmbeinkamm"],
      loc:"1,5 Cun seitlich der unteren Kante des Dornfortsatzes des 4. Lendenwirbels, auf Höhe des Darmbeinkamms.",
      ind:"Kreuzschmerz und Ischias, Verstopfung, Durchfall, Blähungen, Bauchschmerz, Schmerz, der ins Bein zieht.",
      nd:"Senkrecht 0,8 bis 1,2 Cun. Zusammen mit Bl 40 das Grundpaar bei Kreuzschmerz." },

    { n:26, pinyin:"Guānyuánshū", han:"关元俞", de:"Zustimmungspunkt des Tores der Urquelle", en:"Origin Gate Shu",
      x:455, y:472, key:false, role:"",
      antik:"", wx:"",
      tags:["Rücken-Shu zum Guanyuan"],
      wirkung:["Zustimmungspunkt (Shu) des Organs Tor der Urquelle", "", "Stärkt das Ursprungs-Qi", "Ordnet das Wasserlassen", "Löst Schmerz in der Lende"],
      marken:["wirbelrinne"],
      loc:"1,5 Cun seitlich der unteren Kante des Dornfortsatzes des 5. Lendenwirbels.",
      ind:"Kreuzschmerz, Durchfall, häufiges Wasserlassen, Blasenschwäche, Schwäche im unteren Bauch.",
      nd:"Senkrecht 0,8 bis 1,2 Cun." },

    { n:27, pinyin:"Xiǎochángshū", han:"小肠俞", de:"Zustimmungspunkt des Dünndarms", en:"Small Intestine Shu",
      x:455, y:488, key:false, role:"",
      antik:"", wx:"",
      tags:["Rücken-Shu des Dünndarms"],
      wirkung:["Zustimmungspunkt (Shu) des Organs Dünndarm", "", "Trennt das Klare vom Trüben", "Ordnet das Wasserlassen", "Löst Schmerz im Kreuzbein"],
      marken:["wirbelrinne"],
      loc:"Auf Höhe des 1. Kreuzbeinlochs, 1,5 Cun seitlich der hinteren Mittellinie.",
      ind:"Unterbauchschmerz, Durchfall, Blut im Stuhl, dunkler und knapper Urin, Ausfluss, Kreuz- und Kreuzbeinschmerz.",
      nd:"Senkrecht 0,8 bis 1 Cun." },

    { n:28, pinyin:"Pángguāngshū", han:"膀胱俞", de:"Zustimmungspunkt der Blase", en:"Bladder Shu",
      x:455, y:503, key:true, role:"",
      antik:"", wx:"",
      tags:["Rücken-Shu der Blase","eigener Zustimmungspunkt des Meridians"],
      wirkung:["Zustimmungspunkt (Shu) des Organs Blase", "", "Ordnet die Blase und das Wasserlassen", "Leitet Feuchtigkeit und Hitze aus dem Unteren Erwärmer", "Löst Steife im Kreuz"],
      marken:["wirbelrinne"],
      loc:"Auf Höhe des 2. Kreuzbeinlochs, 1,5 Cun seitlich der hinteren Mittellinie.",
      ind:"Alle Blasenbeschwerden: brennendes oder häufiges Wasserlassen, Harnverhalt, Einnässen, Inkontinenz. Dazu Kreuzbeinschmerz, steifer unterer Rücken, Durchfall, Verstopfung.",
      nd:"Senkrecht 0,8 bis 1 Cun." },

    { n:32, pinyin:"Cìliáo", han:"次髎", de:"Zweites Loch", en:"Second Crevice",
      x:444, y:503, key:true, role:"",
      antik:"", wx:"",
      tags:["eines der Acht Löcher (Bl 31 – Bl 34)","Hauptpunkt im Becken"],
      wirkung:["Zweites der acht Kreuzbeinlöcher", "", "Ordnet Regel, Schwangerschaft und Geburt", "Löst Schmerz im Kreuzbein", "Kräftigt den Unteren Erwärmer"],
      marken:["kreuzbein"],
      loc:"Im 2. hinteren Kreuzbeinloch, etwa auf halbem Weg zwischen dem hinteren oberen Darmbeinstachel und der Mittellinie. Bl 31 bis Bl 34 liegen in den vier Kreuzbeinlöchern übereinander und heißen zusammen die Acht Löcher.",
      ind:"Regelschmerz, unregelmäßige Regel, Ausfluss, Unfruchtbarkeit, Beschwerden der Prostata, Kreuzbeinschmerz, Ischias, Geburtsbegleitung, Blasenschwäche.",
      nd:"Senkrecht 1 bis 1,5 Cun in das Kreuzbeinloch hinein. Sehr gut zu moxen und zu schröpfen." },

    { n:43, pinyin:"Gāohuāngshū", han:"膏肓俞", de:"Zustimmungspunkt der Zwischenräume", en:"Gao Huang Shu",
      x:473, y:275, key:true, role:"",
      antik:"", wx:"",
      tags:["äußere Rückenlinie","Punkt bei tiefer Erschöpfung"],
      wirkung:["Zustimmungspunkt der Zwischenräume – auf der äußeren Rückenlinie", "", "Stärkt bei tiefer Erschöpfung – der klassische Punkt der Schwäche", "Nährt Lunge und Niere", "Wird vor allem moxibustiert"],
      marken:["schulterblatt", "wirbelrinne"],
      loc:"3 Cun seitlich der unteren Kante des Dornfortsatzes des 4. Brustwirbels, auf der äußeren Rückenlinie – dem einzigen Punkt dieser Linie, der hier eingezeichnet ist.",
      ind:"Tiefe, lang bestehende Erschöpfung, Schwäche nach langer Krankheit, chronischer Husten, Asthma, Nachtschweiß, Abmagerung, Vergesslichkeit, Schwermut. Ein klassischer Satz sagt, es gebe keine Krankheit, die dieser Punkt nicht bessern könne.",
      nd:"Schräg 0,5 bis 0,8 Cun zur Wirbelsäule. Traditionell vor allem ein Moxa-Punkt, gern mit vielen Kegeln." },

    { n:36, pinyin:"Chéngfú", han:"承扶", de:"Stützen und Tragen", en:"Support",
      x:492, y:600, key:false, role:"",
      antik:"", wx:"",
      tags:["Beginn der Beinlinie"],
      wirkung:["Anfang der Beinstrecke", "", "Öffnet die Leitbahn am Oberschenkel", "Löst Ischiasschmerz", "Kräftigt Lende und Bein"],
      marken:["gesaessfalte"],
      loc:"In der Mitte der Gesäßfalte.",
      ind:"Schmerz in Gesäß und Oberschenkelrückseite, Ischias, Kreuzschmerz, Hämorrhoiden, Taubheit im Bein.",
      nd:"Senkrecht 1 bis 2 Cun. Der Ischiasnerv verläuft hier – ein ausstrahlendes Gefühl ins Bein ist erwünscht, darf aber nicht erzwungen werden." },

    { n:40, pinyin:"Wěizhōng", han:"委中", de:"Mitte der Beuge", en:"Bend Middle",
      x:502, y:800, key:true, role:"HO",
      antik:"ho", wx:"erde",
      tags:["Ho / He – Meerpunkt","Kommandopunkt für den gesamten Rücken","Treffpunkt beider Rückenlinien"],
      wirkung:["Ho / He – Meerpunkt", "Erdpunkt der Blasen-Leitbahn", "Kommandopunkt für Rücken und Lende", "", "Der Punkt bei jedem Kreuzschmerz", "Kühlt das Blut und klärt Sommerhitze", "Öffnet die Leitbahn im Bein", "Löst Krämpfe in der Kniekehle"],
      marken:["kniekehle"],
      loc:"In der Mitte der Kniekehlenfalte, zwischen den Sehnen der Beugemuskeln.",
      ind:"Kreuzschmerz jeder Art – der wichtigste Fernpunkt für den Rücken überhaupt. Dazu Ischias, steifer Rücken, Knieschmerz, Wadenkrampf, Hitzschlag, Erbrechen mit Durchfall, Hautausschläge und Juckreiz.",
      nd:"Senkrecht 0,5 bis 1 Cun. Bei Fülle und Hitze klassisch Mikroaderlass an den sichtbaren Venen der Kniekehle. Vorsicht: hier liegen Nerv und Gefäße dicht." },

    { n:57, pinyin:"Chéngshān", han:"承山", de:"Den Berg stützen", en:"Mountain Support",
      x:504, y:925, key:true, role:"",
      antik:"", wx:"",
      tags:["Wadenpunkt","Hämorrhoidenpunkt"],
      wirkung:["Lokalpunkt an der Wade", "", "Der Punkt bei Hämorrhoiden", "Löst Wadenkrämpfe", "Öffnet die Leitbahn im Unterschenkel"],
      marken:["wade"],
      loc:"In der Spitze des umgekehrten V, das die beiden Wadenbäuche bilden, etwa 8 Cun unterhalb von Bl 40.",
      ind:"Wadenkrampf, Schmerz und Schwere in der Wade, Ischias, Kreuzschmerz, Hämorrhoiden, Verstopfung, Analfissuren, Schmerz in der Ferse.",
      nd:"Senkrecht 1 bis 1,5 Cun. Bei Krampf sehr wirksam, aber oft druckempfindlich." },

    { n:58, pinyin:"Fēiyáng", han:"飞扬", de:"Aufsteigen und Fliegen", en:"Taking Flight",
      x:519, y:941, key:true, role:"LUO",
      antik:"luo", wx:"",
      tags:["Luo-Punkt zur Niere"],
      wirkung:["Luo-Punkt – zieht zum Yuan-Punkt Ni 3", "", "Vertreibt Wind und klärt den Kopf", "Löst Kopfschmerz im Nacken", "Öffnet die Leitbahn zwischen Rücken und Bein"],
      marken:["wade"],
      loc:"7 Cun oberhalb von Bl 60, etwa 1 Cun unterhalb und seitlich von Bl 57, am hinteren unteren Rand des Wadenbeinmuskels.",
      ind:"Kopfschmerz im Hinterkopf, Schwindel, verstopfte Nase, Rückenschmerz, Schwäche und Schwere der Beine, Hämorrhoiden. Als Luo-Punkt die Brücke zur gekoppelten Niere.",
      nd:"Senkrecht 0,7 bis 1 Cun." },

    { n:60, pinyin:"Kūnlún", han:"昆仑", de:"Kunlun-Gebirge", en:"Kunlun Mountains",
      x:513, y:1050, key:true, role:"KING",
      antik:"king", wx:"feuer",
      tags:["King / Jing – Flusspunkt","das Aspirin der chinesischen Medizin"],
      wirkung:["King / Jing – Strom-/Flusspunkt", "Feuerpunkt der Blasen-Leitbahn", "", "Öffnet die ganze Leitbahn – von der Ferse bis zum Kopf", "Löst Nackensteife und Kopfschmerz", "Senkt aufsteigendes Yang ab", "Fördert die Geburt – in der Schwangerschaft gemieden"],
      marken:["aussenknoechel_h", "achillessehne_h"],
      loc:"In der Vertiefung zwischen der Spitze des Außenknöchels und der Achillessehne.",
      ind:"Kopfschmerz, besonders im Hinterkopf, steifer Nacken, Rücken- und Kreuzschmerz, Ischias, Schmerz und Schwellung im Sprunggelenk, Fersenschmerz, schwere Geburt, Krämpfe bei Kindern.",
      nd:"Senkrecht 0,5 bis 0,8 Cun. In der Schwangerschaft nicht stechen – der Punkt wirkt wehenfördernd." },

    { n:62, pinyin:"Shēnmài", han:"申脉", de:"Ausgedehnter Gefäßverlauf", en:"Extending Vessel",
      x:519, y:1061, key:true, role:"",
      antik:"", wx:"",
      tags:["Öffnungspunkt des Yangqiao Mai","Paarpunkt zu Dü 3"],
      wirkung:["Öffnungspunkt des Yangqiao Mai", "Paarpunkt zu Dü 3", "Einer der Acht Kreuzungspunkte", "", "Vertreibt inneren wie äußeren Wind", "Beruhigt den Geist und bringt Schlaf", "Löst Steife im Rücken"],
      marken:["aussenknoechel_h"],
      loc:"In der Vertiefung unmittelbar unterhalb der Spitze des Außenknöchels.",
      ind:"Schlaflosigkeit und nächtliche Unruhe, Kopfschmerz, Schwindel, Epilepsie, steifer Rücken, Schmerz und Schwäche im Sprunggelenk, nach außen gedrehter Fuß. Als Öffnungspunkt des Yangqiao Mai zusammen mit Dü 3 verwendet.",
      nd:"Senkrecht 0,3 bis 0,5 Cun." },

    { n:63, pinyin:"Jīnmén", han:"金门", de:"Goldenes Tor", en:"Golden Gate",
      x:524, y:1070, key:false, role:"XI",
      antik:"xi", wx:"",
      tags:["Xi-Spaltpunkt"],
      wirkung:["Xi-Cleft – Akkumulationspunkt", "", "Akutpunkt bei plötzlichem Schmerz", "Besänftigt Krämpfe", "Klärt den Geist"],
      marken:["fussrand_lat"],
      loc:"Am äußeren Fußrand, vor und unterhalb von Bl 62, in der Vertiefung unterhalb des Würfelbeins.",
      ind:"Plötzlicher, heftiger Schmerz – als Xi-Punkt der Punkt für akute Zustände: Krampfanfälle, akuter Kreuzschmerz, akuter Schmerz im Fuß und Außenknöchel, Schmerz im Unterbauch, Ohnmacht.",
      nd:"Senkrecht 0,3 bis 0,5 Cun." },

    { n:64, pinyin:"Jīnggǔ", han:"京骨", de:"Hauptstadtknochen", en:"Capital Bone",
      x:530, y:1077, key:true, role:"YUAN",
      antik:"yuan", wx:"",
      tags:["Yuan-Quellpunkt"],
      wirkung:["Yuan-Quellpunkt", "", "Vertreibt Wind und klärt den Kopf", "Beruhigt Krämpfe", "Öffnet die Leitbahn am Fußaußenrand"],
      marken:["mfk5", "fussrand_lat"],
      loc:"Am äußeren Fußrand, unterhalb der gut tastbaren Rauigkeit an der Basis des 5. Mittelfußknochens, an der Grenze zwischen rotem und weißem Fleisch.",
      ind:"Kopfschmerz, steifer Nacken, Rückenschmerz, Augenschmerz, Krampfanfälle, Schmerz im äußeren Fußrand. Als Yuan-Punkt der Zugang zum ursprünglichen Qi der Blase.",
      nd:"Senkrecht 0,3 bis 0,5 Cun." },

    { n:65, pinyin:"Shùgǔ", han:"束骨", de:"Bündelnder Knochen", en:"Bundle Bone",
      x:533, y:1086, key:true, role:"YU",
      antik:"yu", wx:"holz",
      tags:["Yu / Shu – Bachpunkt","Sedierungspunkt"],
      wirkung:["Yu / Shu – Bachpunkt", "Holzpunkt der Blasen-Leitbahn", "Sedierungspunkt", "", "Klärt Hitze und senkt Yang ab", "Löst Nackensteife und Hinterkopfschmerz", "Vertreibt Wind"],
      marken:["fussrand_lat"],
      loc:"Am äußeren Fußrand, proximal des Grundgelenks des kleinen Zehs, an der Grenze zwischen rotem und weißem Fleisch.",
      ind:"Kopfschmerz im Hinterkopf, steifer Nacken, Schwindel, Rückenschmerz, Augenschmerz, Furunkel, Schmerz im äußeren Fußrand. Als Sedierungspunkt bei Fülle des Blasenmeridians.",
      nd:"Senkrecht 0,3 bis 0,5 Cun." },

    { n:66, pinyin:"Zútōnggǔ", han:"足通谷", de:"Tal des Durchgangs am Fuß", en:"Valley Passage",
      x:526, y:1092, key:false, role:"YONG",
      antik:"yong", wx:"wasser",
      tags:["Yong / Ying – kleiner Flusspunkt"],
      wirkung:["Yong / Ying – kleiner Flusspunkt", "Wasserpunkt der Blasen-Leitbahn", "", "Klärt Hitze aus Kopf und Augen", "Lindert Hinterkopfschmerz", "Öffnet die Leitbahn am Fuß"],
      marken:["fussrand_lat"],
      loc:"Am äußeren Fußrand, distal des Grundgelenks des kleinen Zehs, an der Grenze zwischen rotem und weißem Fleisch. Von hinten ist der Fuß stark verkürzt, der Punkt liegt in Wirklichkeit weiter vorn.",
      ind:"Kopfschmerz, steifer Nacken, Schwindel, Nasenbluten, brennender Urin, Unruhe, Beschwerden am kleinen Zeh.",
      nd:"Senkrecht 0,2 bis 0,3 Cun." },

    { n:67, pinyin:"Zhìyīn", han:"至阴", de:"Erreichen des Yin", en:"Reaching Yin",
      x:516, y:1097, key:true, role:"TING",
      antik:"ting", wx:"metall",
      tags:["Ting / Jing – Brunnen-/Quellpunkt","Tonisierungspunkt","Punkt zur Wendung des Kindes"],
      wirkung:["Ting / Jing – Brunnen-/Quellpunkt", "Metallpunkt der Blasen-Leitbahn", "Tonisierungspunkt", "", "Klärt den Kopf und macht die Augen hell", "Vertreibt Wind", "Der klassische Punkt zum Wenden des Kindes – in der Schwangerschaft nur dafür"],
      marken:["fussrand_lat"],
      loc:"An der Außenseite des kleinen Zehs, ein Fen (0,1 Cun) vom Nagelfalzwinkel entfernt. Der Punkt liegt am vorderen Ende des Fußes und ist hier an der sichtbaren Fußkante als Projektion eingezeichnet.",
      ind:"Kopfschmerz, besonders im Hinterkopf, Augenschmerz, verstopfte Nase, Nasenbluten. Vor allem aber der klassische Punkt zur Wendung eines Kindes aus Beckenendlage und zur Unterstützung einer schweren Geburt.",
      nd:"Schräg 0,1 Cun oder Mikroaderlass. Zur Wendung des Kindes wird ab der 34. Woche über Tage mit Moxa behandelt – in der übrigen Schwangerschaft ist der Punkt verboten." }
  ]
});
