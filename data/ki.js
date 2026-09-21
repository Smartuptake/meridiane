/* Nierenmeridian – Fuß-Shaoyin – 足少阴肾经
   Kalibriert auf img/front.png (880 × 1168). Landmarken wie bei Milz und
   Magen: Innenknöchelspitze y 998, Kniegelenksspalt y 818, dazwischen
   16 Cun, also 11,25 Bildpunkte je Cun am Bein. Am Rumpf: Nabel y 434,
   Brustbeinwinkel y 350, dazwischen 8 Cun, also 10,5 Bildpunkte je Cun
   senkrecht; waagerecht 1 Cun = 17 Bildpunkte, aus Ma 25 übernommen.
   Bauchlinie 0,5 Cun neben der Mitte (x 429), Brustlinie 2 Cun (x 403). */
Meridian.register({
  id: "ki", code: "KI", codeDe: "Ni", ord: 8,
  name: "Niere", titel: "Nierenmeridian", nameHan: "肾经",
  channel: "Fuß-Shaoyin", channelHan: "足少阴",
  element: "Wasser", elementHan: "水", wx: "wasser",
  yin: true, coupled: "bl", coupledName: "Blase",
  clock: "17 – 19 Uhr", pointCount: 27, direction: "Fuß → Brust",
  view: "front", mirror: true,

  intro: "Der Fuß-Shaoyin-Meridian der Niere ist der einzige, der an der Fußsohle " +
         "beginnt: Ni 1 Yǒngquán, die Sprudelnde Quelle, liegt in der Vertiefung, die " +
         "entsteht, wenn man die Zehen krümmt. Von dort läuft er über den inneren " +
         "Fußrand, umkreist den Innenknöchel, steigt an der Innenseite von Unterschenkel " +
         "und Oberschenkel empor, tritt am Damm in den Rumpf ein und zieht dann dicht " +
         "neben der vorderen Mittellinie – am Bauch nur einen halben Cun, an der Brust " +
         "zwei Cun – bis unter das Schlüsselbein zu Ni 27 Shùfǔ. " +
         "Zwei Stellen lassen sich von vorn nicht zeigen und sind als Projektion " +
         "eingezeichnet: Ni 1 liegt auf der Sohle und steht darum am Vorfuß, und der " +
         "Kreis um den Innenknöchel mit Ni 3 bis Ni 6 liegt zum größten Teil hinter und " +
         "unter dem Knöchel. Die wahre Lage steht bei jedem dieser Punkte in der " +
         "Lokalisation. Am Innenknöchel liegen die Punkte in Wirklichkeit einen halben " +
         "bis einen Cun auseinander und rücken hier etwas weiter auseinander, damit man " +
         "sie einzeln anklicken kann.",

  cun: { knoechel: [388, 998], knie: [397, 818],
         hinweis: "Innenknöchel → Kniegelenksspalt = 16 Cun; Ni 7 liegt 2 Cun über Ni 3" },

  path: [[355,1098],[368,1078],[380,1060],[389,1044],[376,1036],[369,1018],[369,999],
         [375,986],[384,983],
         [386,991],[387,1002],[388,1013],[383,1026],
         [378,1014],[377,996],[380,980],
         [384,970],[392,937],[396,900],[399,860],[397,818],
         [402,790],[407,750],[412,710],[418,670],[424,640],[428,612],
         [429,570],[429,530],[429,486],[429,465],[429,434],[429,400],[429,371],
         [420,355],[410,340],[403,327],[403,310],[403,277],[403,243]],

  inner: "M429,470 C444,452 450,424 448,392 C446,352 442,320 441,292 C440,266 439,250 438,236",
  branches: [
    { label: "Ast zu Leber und Zwerchfell", d: "M446,400 C458,388 466,372 468,354" },
    { label: "Ast zum Herzen", d: "M441,300 C452,292 462,294 468,304" }
  ],

  /* --- Das Organ --- */
  organ: {
    titel: "Die Niere in der chinesischen Medizin",
    pinyin: "Shèn", han: "肾", wx: "wasser",
    text: [
      "Die Niere ist die Wurzel. In keinem anderen Organ liegt so viel beieinander: sie " +
      "ist die Wurzel des Yin und die Wurzel des Yang für den ganzen Körper, sie " +
      "speichert das Jing, sie beherrscht Knochen und Mark, sie öffnet sich zu den Ohren, " +
      "sie regelt das Wasser und sie nimmt das Qi auf, das die Lunge hinabschickt. Was " +
      "andere Organe an Wärme brauchen, kommt vom Nieren-Yang; was sie an Kühlung und " +
      "Saft brauchen, vom Nieren-Yin.",

      "Das Jing 精, die Essenz, ist der eigentliche Schatz. Ein Teil davon ist " +
      "vorgeburtlich – das, was man mitbekommt, und was sich nicht vermehren lässt. Der " +
      "andere Teil wird täglich aus Nahrung und Atem nachgefüllt. Das Jing bestimmt " +
      "Wachstum, Zähne, Knochen, Haar, Fortpflanzung und das Tempo des Alterns. Der " +
      "klassische Text zählt das Leben in Siebenerschritten bei der Frau und " +
      "Achterschritten beim Mann, und jeder Schritt ist ein Stand des Jing.",

      "Aus dem Jing entsteht das Mark, aus dem Mark füllt sich das Gehirn – das " +
      "„Meer des Marks“. Darum stehen Gedächtnis, Konzentration und Schwindel in der " +
      "chinesischen Medizin so nah bei den Knochen und den Zähnen: alles drei ist Niere. " +
      "Und darum ist das Gehör das Sinnesorgan des Wassers: Ohrgeräusche und Hörverlust " +
      "im Alter sind das hörbare Nachlassen des Jing.",

      "Der Geist-Aspekt der Niere heißt Zhi 志 – Wille, Entschlossenheit, Ausdauer. Nicht " +
      "der Wille, der sich aufbäumt, sondern der, der bleibt. Seine Kehrseite ist die " +
      "Angst. Wer dauerhaft in Furcht lebt, zehrt am Wasser; und wer wenig Wasser hat, " +
      "erschrickt leicht."
    ],

    aufgabenTitel: "Die Aufgaben der Niere",
    aufgaben: [
      { was: "Das Jing speichern", han: "藏精",
        text: "Die Essenz von Geburt an und die täglich nachgefüllte. Sie steuert " +
              "Wachstum, Reifung, Fortpflanzung und Altern. Ihr Stand zeigt sich an " +
              "Zähnen, Knochen, Kopfhaar und Gehör." },
      { was: "Wurzel von Yin und Yang des ganzen Körpers sein", han: "元阴元阳",
        text: "Jedes andere Organ zieht seine Grundwärme aus dem Nieren-Yang und seine " +
              "Grundfeuchte aus dem Nieren-Yin. Darum endet ein lang bestehender Mangel " +
              "irgendeines Organs fast immer bei der Niere." },
      { was: "Knochen, Mark und Gehirn beherrschen", han: "主骨生髓",
        text: "Knochenbau, Zahnfestigkeit und das Mark, aus dem sich das Gehirn füllt. " +
              "Osteoporose, lockere Zähne, Gedächtnisschwäche und Schwindel gehören " +
              "deshalb zusammen." },
      { was: "Das Wasser regeln", han: "主水",
        text: "Gemeinsam mit Lunge und Milz steuert die Niere den Wasserhaushalt. Sie " +
              "entscheidet, was zurückgehalten und was als Trübes zur Blase geschickt " +
              "wird. Ödeme an den Beinen und nächtliches Wasserlassen weisen hierher." },
      { was: "Das Qi aufnehmen", han: "纳气",
        text: "Die Lunge holt das Qi herein, die Niere zieht es herunter und hält es " +
              "fest. Wenn das nicht gelingt, bleibt der Atem oben und flach – " +
              "Atemnot beim Einatmen, schlimmer bei Anstrengung." },
      { was: "Sich zu den Ohren öffnen und die zwei unteren Öffnungen beherrschen", han: "开窍于耳",
        text: "Gehör und Gleichgewicht gehören zur Niere, ebenso Harnröhre und After. " +
              "Ohrgeräusche, Hörminderung, Inkontinenz und chronischer Durchfall am " +
              "frühen Morgen sind Zeichen desselben Organs." }
    ],

    zustandTitel: "Mangel und Fülle von Yin und Yang",
    zustaende: [
      { feld: "Yin-Mangel", en: "Kidney Yin Deficiency", han: "肾阴虚", pinyin: "shèn yīn xū",
        kurz: "Die kühlende, befeuchtende Wurzel ist aufgebraucht.",
        zeichen: "Schwäche und Wundgefühl im unteren Rücken und in den Knien, Schwindel, " +
                 "Ohrgeräusche wie ein hoher Ton, Hörminderung, Nachtschweiß, Hitze in " +
                 "Handflächen, Fußsohlen und Brust, Hitzewallungen, Trockenheit im Mund " +
                 "besonders nachts, Schlaflosigkeit, Vergesslichkeit, wenig und dunkler " +
                 "Urin, bei Frauen spärliche Regel, bei Männern vorzeitiger Samenerguss.",
        zunge: "rot, ohne Belag, oft rissig",
        puls: "dünn und schnell",
        punkte: "Ni 3 · Ni 6 · Ni 10 · Bl 23 · Mi 6 · Ren 4" },

      { feld: "Yang-Mangel", en: "Kidney Yang Deficiency", han: "肾阳虚", pinyin: "shèn yáng xū",
        kurz: "Das Feuer unter dem Kessel ist zu klein geworden.",
        zeichen: "Kälteempfindlichkeit am ganzen Körper, besonders kalter und schwacher " +
                 "unterer Rücken und kalte Knie, reichlicher heller Urin und nächtliches " +
                 "Aufstehen, Ödeme an Beinen und Knöcheln, Durchfall am frühen Morgen, " +
                 "Impotenz, Unfruchtbarkeit, Lustlosigkeit, bleierne Müdigkeit, blasses " +
                 "Gesicht mit dunklen Ringen unter den Augen.",
        zunge: "blass, geschwollen, feucht, weißer Belag",
        puls: "tief, langsam, schwach",
        punkte: "Ni 3 mit Moxa · Ni 7 · Bl 23 · Du 4 · Ren 4 · Ren 6" },

      { feld: "Yin-Fülle", en: "Water Overflowing from Kidney Deficiency", han: "肾虚水泛", pinyin: "shèn xū shuǐ fàn",
        kurz: "Das Wasser tritt über die Ufer, weil das Yang es nicht mehr bewegt.",
        zeichen: "Ödeme, die an den Knöcheln beginnen und aufsteigen und in denen eine " +
                 "Delle stehen bleibt, Schweregefühl und Kälte in den Beinen, wenig Urin, " +
                 "aufgedunsenes Gesicht am Morgen, Kurzatmigkeit und Herzklopfen im " +
                 "Liegen, wenn das Wasser bis zum Herzen aufsteigt.",
        zunge: "blass, geschwollen, mit Zahneindrücken, feucht",
        puls: "tief, langsam, saitenförmig",
        punkte: "Ni 7 · Bl 23 · Bl 22 · Mi 9 · Ren 9 · Ma 28" },

      { feld: "Yang-Fülle", en: "Empty Fire Blazing Upward", han: "虚火上炎", pinyin: "xū huǒ shàng yán",
        kurz: "Kein echtes Übermaß, sondern Feuer, das lodert, weil das Wasser fehlt.",
        zeichen: "Hitzewallungen mit Schweiß, rote Wangen am Abend, brennende Hitze in " +
                 "Brust, Handflächen und Fußsohlen, unruhiger Schlaf mit vielen Träumen, " +
                 "Aphthen und wunde Kehle, die nachts schlimmer wird, Ohrgeräusche, " +
                 "sexuelle Übererregbarkeit bei gleichzeitiger Erschöpfung.",
        zunge: "tiefrot, ohne Belag, rissig, rote Spitze",
        puls: "dünn, schnell, in der Tiefe kraftlos",
        punkte: "Ni 2 · Ni 6 · Ni 3 · He 6 · Ren 4 · Bl 23" }
    ],

    aeussereTitel: "Wo der Meridian selbst betroffen ist",
    aeussere: [
      { name: "Kreuz, Knie und Ferse", han: "腰膝酸软", pinyin: "yāo xī suān ruǎn",
        zeichen: "Wundes, schwaches Gefühl im unteren Rücken und in den Knien, das eher " +
                 "müde als scharf schmerzt und sich bei Anstrengung und am Abend " +
                 "verschlimmert. Dazu Fersenschmerz beim ersten Auftreten am Morgen – " +
                 "der Meridian läuft über die Ferse – und Kälte an der Beininnenseite.",
        punkte: "Ni 3 · Ni 7 · Ni 10 · Bl 23 · Bl 40" },
      { name: "Kehle und Zungenwurzel", han: "咽干舌燥", pinyin: "yān gān shé zào",
        zeichen: "Trockene, wunde Kehle, die nachts am schlimmsten ist und tagsüber " +
                 "nachlässt, Heiserkeit, Kloßgefühl, Durst auf kleine Schlucke. Der " +
                 "Meridian steigt innen die Kehle entlang bis zur Zungenwurzel; eine " +
                 "nachts brennende Kehle ohne Infekt ist fast immer Nieren-Yin.",
        punkte: "Ni 6 · Ni 3 · Ni 1 · Lu 7 · Ni 27" },
      { name: "Ohren und Kopf", han: "耳鸣耳聋", pinyin: "ěr míng ěr lóng",
        zeichen: "Ohrgeräusche als hoher, leiser Dauerton, der bei Erschöpfung lauter " +
                 "wird, allmähliche Hörminderung, Schwindel mit Leeregefühl im Kopf, " +
                 "Vergesslichkeit. Ein plötzlich einsetzendes, lautes Ohrgeräusch spricht " +
                 "dagegen eher für Leber oder Gallenblase.",
        punkte: "Ni 3 · Ni 6 · Bl 23 · 3E 17 · Gb 2" }
    ],

    nahrungTitel: "Was die Niere stärkt und was ihr schadet",
    nahrung: {
      staerkt: [
        { was: "Schwarze Bohnen, schwarzer Sesam, schwarzer Reis", warum: "die Farbe des Wassers; die klassischen Speisen zur Stützung des Jing" },
        { was: "Walnüsse und Kastanien", warum: "wärmen das Nieren-Yang und stärken den unteren Rücken" },
        { was: "Knochenbrühe, lange gekocht", warum: "nährt Mark und Knochen, also genau das, was die Niere beherrscht" },
        { was: "Algen, Miso, Fisch in Maßen", warum: "der salzige Geschmack führt nach innen und unten zur Niere" },
        { was: "Hirse und Gerste", warum: "bauen ruhig auf, ohne den unteren Erwärmer zu belasten" },
        { was: "Früh schlafen gehen, vor allem im Winter", warum: "der Winter ist die Speicherzeit des Wassers; Schlaf füllt Jing wie nichts sonst" },
        { was: "Den unteren Rücken warm halten", warum: "die Nieren liegen dort; Kälte an dieser Stelle kostet unmittelbar Yang" }
      ],
      schadet: [
        { was: "Dauernde Überarbeitung ohne Erholung", warum: "verbraucht Jing, das sich nicht einfach nachkaufen lässt" },
        { was: "Zu wenig Schlaf, besonders vor Mitternacht", warum: "die Speicherzeit fällt aus, das Yin wird nicht nachgefüllt" },
        { was: "Zu viel Salz", warum: "der eigene Geschmack schwächt im Übermaß die Phase, die er nährt" },
        { was: "Viel Kaffee und Aufputschmittel", warum: "sie borgen Kraft von der Niere und zahlen sie nie zurück" },
        { was: "Eisgekühlte Getränke und viel Rohkost", warum: "kühlen das Feuer, das der ganze Körper von der Niere bezieht" },
        { was: "Kälte und Nässe am Kreuz und an den Füßen", warum: "der Meridian beginnt an der Fußsohle; von dort dringt Kälte ein" },
        { was: "Dauernde Angst und Anspannung", warum: "die Emotion des Wassers zehrt unmittelbar am Jing" }
      ],
      hinweis: "Die Maximalzeit der Niere liegt von siebzehn bis neunzehn Uhr, " +
               "unmittelbar nach der Blase. Wer um diese Zeit eine kurze Ruhe einlegt, " +
               "kommt dem Wasser entgegen. Und ein Grundsatz für alles Übrige: die " +
               "Niere lässt sich nicht schnell auffüllen. Was ihr hilft, ist nicht ein " +
               "Mittel, sondern eine Gewohnheit."
    },

    eigenschaften: [
      { k: "Wandlungsphase", v: "Wasser 水" },
      { k: "Jahreszeit", v: "Winter" },
      { k: "Klima", v: "Kälte" },
      { k: "Geschmack", v: "salzig" },
      { k: "Farbe", v: "schwarz, dunkelblau" },
      { k: "Sinnesorgan", v: "Ohren" },
      { k: "Gewebe", v: "Knochen und Mark" },
      { k: "Geist", v: "Zhi 志, Wille" },
      { k: "Emotion", v: "Angst, im Guten Willenskraft und Ausdauer" },
      { k: "Organart", v: "Zang-Organ, Speicherorgan" },
      { k: "Gekoppelt", v: "Blase" }
    ],

    hinweis: "Zur Niere gibt es einen Satz, den man sich merken sollte: „Die Niere kennt " +
             "keine Fülle.“ Was wie Fülle aussieht – das lodernde Leerfeuer, das " +
             "übertretende Wasser – steht immer auf einem Mangel. Behandelt wird darum " +
             "auch dann gestützt und nicht abgeleitet. Die Muster beschreiben die " +
             "klassische Syndromlehre und dienen dem Unterricht. Sie ersetzen weder " +
             "Diagnose noch ärztliche Abklärung."
  },

  points: [
    { n:1, pinyin:"Yǒngquán", han:"涌泉", de:"Sprudelnde Quelle", en:"Gushing Spring",
      x:355, y:1098, key:true, role:"TING · SED",
      antik:"ting", wx:"holz",
      tags:["Ting / Jing – Brunnen-/Quellpunkt","Sedierungspunkt","einziger Punkt an der Fußsohle"],
      loc:"An der Fußsohle, in der Vertiefung, die beim Krümmen der Zehen entsteht – zwischen dem zweiten und dritten Mittelfußknochen, am Übergang vom vorderen Drittel zu den hinteren zwei Dritteln der Sohle. Von vorn ist die Sohle nicht zu sehen; der Punkt steht hier am Vorfuß als Projektion.",
      ind:"Der große Punkt zum Herabführen: Hitzewallungen, Bluthochdruck, Schwindel, Kopfschmerz am Scheitel, Ohnmacht, Krampfanfälle, Schlaflosigkeit bei innerer Unruhe, Angst, brennende Fußsohlen, trockene Kehle. Er zieht aufgestiegenes Yang zurück nach unten.",
      nd:"Senkrecht 0,5 bis 0,8 Cun; sehr empfindlich. In der Selbstbehandlung als kräftige Massage oder abends als Fußbad – beides zieht den Geist nach unten und macht schläfrig." },

    { n:2, pinyin:"Rángǔ", han:"然谷", de:"Loderndes Tal", en:"Blazing Valley",
      x:389, y:1044, key:false, role:"YONG",
      antik:"yong", wx:"feuer",
      tags:["Yong / Ying – kleiner Flusspunkt","Punkt beim Leerfeuer"],
      loc:"Am inneren Fußrand, unterhalb der gut tastbaren Knochenvorwölbung des Kahnbeins, an der Grenze zwischen rotem und weißem Fleisch.",
      ind:"Nachtschweiß, Hitze am Abend, wunde Kehle, Durst, Blut im Auswurf, unruhiger Schlaf. Als Feuerpunkt des Wassermeridians der klassische Punkt, wenn Leerfeuer lodert. Dazu Juckreiz im Genitalbereich und Regelstörungen.",
      nd:"Senkrecht 0,5 bis 0,8 Cun." },

    { n:3, pinyin:"Tàixī", han:"太溪", de:"Großer Gebirgsbach", en:"Great Ravine",
      x:386, y:991, key:true, role:"YU · YUAN",
      antik:"yu", wx:"erde",
      tags:["Yu / Shu – Bachpunkt","Yuan-Quellpunkt","der Hauptpunkt der Niere"],
      loc:"Auf halbem Weg zwischen der Spitze des Innenknöchels und der Achillessehne, in der Vertiefung auf Höhe der Knöchelspitze. Der Punkt liegt hinter dem Knöchel und ist von vorn nicht sichtbar.",
      ind:"Der meistbenutzte Punkt des Meridians und bei jedem Nierenmuster brauchbar, ob Yin- oder Yang-Mangel: Kreuz- und Knieschwäche, Ohrgeräusche, Hörminderung, Schwindel, Zahnschmerz, trockene Kehle, Schlaflosigkeit, Asthma mit erschwertem Einatmen, häufiges nächtliches Wasserlassen, Unfruchtbarkeit.",
      nd:"Senkrecht 0,5 bis 0,8 Cun zur Innenseite hin. Bei Yang-Mangel mit Moxa, bei Yin-Mangel ohne." },

    { n:4, pinyin:"Dàzhōng", han:"大钟", de:"Große Glocke", en:"Large Goblet",
      x:387, y:1002, key:true, role:"LUO",
      antik:"luo", wx:"",
      tags:["Luo-Punkt zur Blase"],
      loc:"Hinter und unterhalb von Ni 3, etwa einen halben Cun tiefer, am inneren Rand der Achillessehne über dem Ansatz am Fersenbein. Ebenfalls hinter dem Knöchel gelegen.",
      ind:"Fersenschmerz, Harnverhalt oder umgekehrt häufiges Wasserlassen, Verstopfung, Asthma, Engegefühl in der Brust, Benommenheit. Als Luo-Punkt außerdem bei ängstlicher Unentschlossenheit und Mutlosigkeit – die klassische Beschreibung lautet: „will sich hinlegen, sobald er gegessen hat“.",
      nd:"Senkrecht 0,3 bis 0,5 Cun." },

    { n:5, pinyin:"Shuǐquán", han:"水泉", de:"Wasserquelle", en:"Water Spring",
      x:388, y:1013, key:false, role:"XI",
      antik:"xi", wx:"",
      tags:["Xi-Spaltpunkt"],
      loc:"Einen Cun unterhalb von Ni 3, in der Vertiefung vor und über dem inneren Höcker des Fersenbeins.",
      ind:"Als Xi-Punkt bei akutem und heftigem Schmerz: Regelschmerz mit Krampf, ausbleibende Regel, Schmerz im Unterbauch, Harnverhalt, verschwommenes Sehen. Bei Frauen der akute Punkt, wenn die Regel stockt und schmerzt.",
      nd:"Senkrecht 0,3 bis 0,5 Cun." },

    { n:6, pinyin:"Zhàohǎi", han:"照海", de:"Leuchtendes Meer", en:"Shining Sea",
      x:383, y:1026, key:true, role:"",
      antik:"", wx:"",
      tags:["Öffnungspunkt des Yinqiao Mai","Paarpunkt zu Lu 7","einer der Acht Kreuzungspunkte"],
      loc:"Einen Cun unterhalb der Spitze des Innenknöchels, in der Vertiefung am unteren Rand des Knöchels.",
      ind:"Trockene, nachts brennende Kehle, Heiserkeit, Kloßgefühl im Hals, Schlaflosigkeit, Angst, Krampfanfälle. Dazu Regelstörungen, Ausfluss, Vorfall, Harnverhalt und Verstopfung durch Trockenheit. Zusammen mit Lu 7 das klassische Paar für Kehle und Brust.",
      nd:"Senkrecht 0,3 bis 0,5 Cun. Bei Schlaflosigkeit abends zusammen mit Bl 62 verwendet – Ni 6 füllt das Yin, Bl 62 leert das Yang." },

    { n:7, pinyin:"Fùliū", han:"复溜", de:"Wiederkehrender Strom", en:"Recover Flow",
      x:384, y:970, key:true, role:"KING · TON",
      antik:"king", wx:"metall",
      tags:["King / Jing – Flusspunkt","Tonisierungspunkt","Hauptpunkt beim Schwitzen"],
      loc:"Zwei Cun oberhalb von Ni 3, vor der Achillessehne, an der Innenseite des Unterschenkels.",
      ind:"Der Punkt für gestörtes Schwitzen in beide Richtungen: Nachtschweiß bei Yin-Mangel und fehlendes Schwitzen bei Oberflächenkälte. Dazu Ödeme, Schweregefühl und Schwäche der Beine, Durchfall, Rumpeln im Bauch, Kreuzschmerz. Als Tonisierungspunkt der Aufbaupunkt des Meridians.",
      nd:"Senkrecht 0,5 bis 1 Cun. Bei Yang-Mangel und Ödemen gut zu moxen." },

    { n:9, pinyin:"Zhùbīn", han:"筑宾", de:"Haus des Gastes", en:"Guest House",
      x:392, y:937, key:false, role:"",
      antik:"", wx:"",
      tags:["Xi-Spaltpunkt des Yinwei Mai","Entgiftungspunkt"],
      loc:"Fünf Cun oberhalb von Ni 3, an der Innenseite der Wade, am unteren Ende des Wadenmuskelbauchs.",
      ind:"Traditionell der Punkt zum Ausleiten von Giften – auch für das, was seelisch nicht verdaut ist. Dazu Angstzustände, innere Unruhe, Krampfanfälle, Schmerz und Krampf in der Wade, Schmerz im Unterbauch, Übelkeit in der Schwangerschaft.",
      nd:"Senkrecht 0,8 bis 1,2 Cun." },

    { n:10, pinyin:"Yīngǔ", han:"阴谷", de:"Yin-Tal", en:"Yin Valley",
      x:397, y:818, key:true, role:"HO",
      antik:"ho", wx:"wasser",
      tags:["Ho / He – Meerpunkt","eigener Wasserpunkt des Wassermeridians"],
      loc:"Am inneren Ende der Kniekehlenfalte, zwischen den beiden Sehnen, bei gebeugtem Knie gut zu tasten.",
      ind:"Schmerz an der Knieinnenseite und in der Kniekehle, Schmerz im Unterbauch und am Genitale, Harnverhalt oder unwillkürlicher Harnabgang, Impotenz, Ausfluss, Gebärmutterblutung. Als Wasserpunkt des Wassermeridians der stärkste Punkt zum Nähren des Nieren-Yin am Bein.",
      nd:"Senkrecht 0,8 bis 1,2 Cun." },

    { n:11, pinyin:"Hénggǔ", han:"横骨", de:"Querknochen", en:"Pubic Bone",
      x:429, y:486, key:false, role:"",
      antik:"", wx:"",
      tags:["Beginn der Bauchlinie","Kreuzungspunkt mit dem Chong Mai"],
      loc:"Fünf Cun unterhalb des Nabels, am oberen Rand des Schambeins, einen halben Cun seitlich der vorderen Mittellinie.",
      ind:"Harnverhalt, Bettnässen, Schmerz am Genitale, Impotenz, Samenerguss im Schlaf, Schmerz im Unterbauch, der zum Genitale zieht.",
      nd:"Senkrecht 0,8 bis 1,2 Cun, vorher Blase entleeren lassen." },

    { n:13, pinyin:"Qìxué", han:"气穴", de:"Höhle des Qi", en:"Qi Hole",
      x:429, y:465, key:true, role:"",
      antik:"", wx:"",
      tags:["Kreuzungspunkt mit dem Chong Mai","Frauenpunkt"],
      loc:"Drei Cun unterhalb des Nabels, einen halben Cun seitlich der vorderen Mittellinie – auf gleicher Höhe wie Ren 4.",
      ind:"Unregelmäßige Regel, Ausbleiben der Regel, Ausfluss, Unfruchtbarkeit, Schmerz im Unterbauch, Durchfall, Harnbeschwerden. Einer der wichtigsten Punkte bei Kinderwunsch und schwachem unterem Erwärmer.",
      nd:"Senkrecht 0,8 bis 1,2 Cun. Gut mit Moxa, besonders bei Kälte im Unterbauch." },

    { n:16, pinyin:"Huāngshū", han:"肓俞", de:"Zustimmungspunkt der Zwischenräume", en:"Huang Shu",
      x:429, y:434, key:true, role:"",
      antik:"", wx:"",
      tags:["auf Nabelhöhe","Kreuzungspunkt mit dem Chong Mai"],
      loc:"Einen halben Cun seitlich des Nabels. Der Nabel selbst ist Ren 8, zwei Cun seitlich liegt Ma 25 – Ni 16 liegt also dicht am Nabelrand.",
      ind:"Bauchschmerz um den Nabel, Verstopfung, Durchfall, Blähungen, Kältegefühl im Bauch, Regelschmerz, Erbrechen. Ein guter Punkt, wenn die Beschwerden genau um den Nabel kreisen.",
      nd:"Senkrecht 0,8 bis 1,2 Cun." },

    { n:21, pinyin:"Yōumén", han:"幽门", de:"Dunkles Tor", en:"Dark Gate",
      x:429, y:371, key:false, role:"",
      antik:"", wx:"",
      tags:["Ende der Bauchlinie","Kreuzungspunkt mit dem Chong Mai"],
      loc:"Sechs Cun oberhalb des Nabels, einen halben Cun seitlich der vorderen Mittellinie, unterhalb des Brustbeinwinkels.",
      ind:"Schmerz und Völle im Oberbauch, Aufstoßen, Übelkeit, Erbrechen – auch in der Schwangerschaft –, Appetitlosigkeit, Durchfall mit Blut, Husten mit Engegefühl.",
      nd:"Schräg 0,5 bis 0,8 Cun nach unten. Nicht tief senkrecht stechen – darunter liegen Leber und Magen." },

    { n:22, pinyin:"Bùláng", han:"步廊", de:"Wandelgang", en:"Corridor Walk",
      x:403, y:327, key:false, role:"",
      antik:"", wx:"",
      tags:["Beginn der Brustlinie"],
      loc:"Im fünften Zwischenrippenraum, zwei Cun seitlich der vorderen Mittellinie.",
      ind:"Husten, Asthma, Engegefühl und Schmerz in der Brust, Übelkeit, Appetitlosigkeit, Schmerz zwischen den Rippen.",
      nd:"Schräg oder flach 0,3 bis 0,5 Cun. An der Brust grundsätzlich nur flach – darunter liegt die Lunge." },

    { n:23, pinyin:"Shénfēng", han:"神封", de:"Siegel des Geistes", en:"Spirit Seal",
      x:403, y:310, key:true, role:"",
      antik:"", wx:"",
      tags:["auf Brustwarzenhöhe"],
      loc:"Im vierten Zwischenrippenraum, zwei Cun seitlich der vorderen Mittellinie – auf gleicher Höhe wie die Brustwarze und wie Ren 17.",
      ind:"Engegefühl und Schmerz in der Brust, Husten, Asthma, Herzklopfen, Unruhe, Brustdrüsenentzündung, Erbrechen, Appetitlosigkeit. Die Namen der oberen Nierenpunkte tragen alle den Geist im Namen – sie wirken auf Brust und Gemüt zugleich.",
      nd:"Flach 0,3 bis 0,5 Cun." },

    { n:25, pinyin:"Shéncáng", han:"神藏", de:"Speicher des Geistes", en:"Spirit Storehouse",
      x:403, y:277, key:false, role:"",
      antik:"", wx:"",
      tags:["Brustlinie"],
      loc:"Im zweiten Zwischenrippenraum, zwei Cun seitlich der vorderen Mittellinie.",
      ind:"Husten, Asthma, Engegefühl in der Brust, Erbrechen, Appetitlosigkeit, Unruhe und Schwermut. Bei Atemnot, die mit Angst einhergeht, ein sehr brauchbarer Punkt.",
      nd:"Flach 0,3 bis 0,5 Cun." },

    { n:27, pinyin:"Shùfǔ", han:"俞府", de:"Palast der Zustimmung", en:"Shu Mansion",
      x:403, y:243, key:true, role:"",
      antik:"", wx:"",
      tags:["Endpunkt des Meridians","Hustenpunkt"],
      loc:"Am unteren Rand des Schlüsselbeins, zwei Cun seitlich der vorderen Mittellinie, in der Vertiefung dicht unter dem Knochen.",
      ind:"Husten und Asthma, besonders wenn das Einatmen schwerfällt – die Niere nimmt das Qi nicht mehr auf. Dazu Engegefühl in der Brust, Schmerz in der Brust, Erbrechen, Appetitlosigkeit. Der letzte Punkt des Meridians; von hier zieht der Verlauf innen weiter zur Zungenwurzel.",
      nd:"Flach 0,3 bis 0,5 Cun nach außen. Nicht senkrecht stechen." }
  ]
});
