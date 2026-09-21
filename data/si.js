/* Dünndarmmeridian – Hand-Taiyang – 手太阳小肠经
   Der erste Meridian auf der Rückansicht. Punktlagen kalibriert auf
   img/back.png (880 × 1168). Von hinten gesehen liegt der rechte Arm
   auf der rechten Bildseite – und die Elle, also die Kleinfingerseite,
   liegt dann links, bei den kleineren x.
   Arm am 21.09.2026 neu vermessen: hintere Achselfalte y 338, Olekranon
   (605, 422), Epicondylus medialis (580, 415), Handgelenksfalte auf dem
   Handrücken y 521. Dü 5 → Dü 8 = 12 Cun = 115 px, also 9,6 px je Cun
   entlang der Armachse. Vorher war die Handgelenksfalte 16 px zu hoch
   angenommen; dadurch saßen Dü 5 bis Dü 7 zu weit oben. */
Meridian.register({
  id: "si", code: "SI", codeDe: "Dü", ord: 6,
  name: "Dünndarm", titel: "Dünndarmmeridian", nameHan: "小肠经",
  channel: "Hand-Taiyang", channelHan: "手太阳",
  element: "Feuer", elementHan: "火", wx: "feuer",
  yin: false, coupled: "ht", coupledName: "Herz",
  clock: "13 – 15 Uhr", pointCount: 19, direction: "Hand → Kopf",
  view: "back", mirror: true,

  intro: "Der Hand-Taiyang-Meridian des Dünndarms schließt an das Herz an: wo He 9 an der " +
         "Daumenseite des kleinen Fingers endet, beginnt Dü 1 an dessen Kleinfingerseite. " +
         "Er läuft über die Ulnarkante von Hand und Unterarm, durch die Rinne am Ellenbogen, " +
         "über die Rückseite des Oberarms und im Zickzack über das Schulterblatt, am Hals " +
         "empor zur Wange und endet vor dem Ohr. Dies ist der erste Meridian auf der " +
         "Rückansicht. Die beiden letzten Punkte liegen im Gesicht und sind deshalb an der " +
         "Kopfkante als Projektion eingezeichnet.",

  cun: { handgelenk: [646, 521], ellenbogen: [592, 419],
         hinweis: "Dü 5 → Dü 8 = 12 Cun; Dü 6 liegt 1, Dü 7 liegt 5 Cun über Dü 5" },

  path: [[676,608],[674,584],[664,562],[653,533],[646,521],[642,513],[624,479],[608,449],
         [592,419],[576,394],[562,368],[550,346],[540,330],[520,316],[496,300],[486,266],
         [478,240],[468,220],[468,198],[468,176],[467,158],[470,138]],

  inner: "M470,232 C452,276 442,330 440,384 C438,430 440,466 448,496",
  branches: [{ label: "Ast zum inneren Augenwinkel", d: "M472,168 C466,150 458,138 448,130" }],

  /* --- Das Organ --- */
  organ: {
    titel: "Der Dünndarm in der chinesischen Medizin",
    pinyin: "Xiǎo cháng", han: "小肠", wx: "feuer",
    text: [
      "Der Dünndarm ist das Fu-Organ des Feuers und der Partner des Herzens. Seine Aufgabe " +
      "hat einen Namen, der in der ganzen chinesischen Medizin nur hier steht: er trennt das " +
      "Klare vom Trüben. Was brauchbar ist, geht zur Milz; der feste Rest zum Dickdarm, der " +
      "flüssige zur Blase.",

      "Deshalb betrifft eine Störung des Dünndarms immer beide Seiten: den Stuhl und den " +
      "Urin. Wässriger Durchfall bei gleichzeitig spärlichem Urin ist das klassische Bild " +
      "einer misslungenen Trennung – behandelt wird dann nicht der Darm allein, sondern die " +
      "Trennung selbst.",

      "Die Kopplung zum Herzen ist im Unterricht die lohnendste Stelle. Herz-Feuer steigt " +
      "nicht nur auf, es wandert auch nach unten in den Dünndarm. Wer brennenden, dunklen " +
      "Urin zusammen mit Unruhe, Aphthen und einer roten Zungenspitze sieht, behandelt das " +
      "Herz und nicht die Blase.",

      "Im übertragenen Sinn gehört das Unterscheiden zu ihm: das Sortieren dessen, was man " +
      "aufnimmt – an Nahrung wie an Eindrücken. Wer alles gleich wichtig nimmt, belastet " +
      "nach dieser Vorstellung genau diese Funktion."
    ],

    aufgabenTitel: "Die Aufgaben des Dünndarms",
    aufgaben: [
      { titel: "Er trennt das Klare vom Trüben", han: "泌别清浊",
        text: "Die Kernaufgabe. Aus dem, was der Magen vorbereitet hat, scheidet der Dünndarm " +
              "das Nutzbare aus und gibt es an die Milz weiter. Der feste Rest geht zum " +
              "Dickdarm, der flüssige zur Blase. Versagt das, kommen beide Wege " +
              "durcheinander: dünner Stuhl und wenig Urin zugleich." },
      { titel: "Er empfängt und wandelt um", han: "受盛化物",
        text: "Der Dünndarm nimmt auf, was der Magen ihm übergibt, und arbeitet daran weiter. " +
              "Er ist damit der zweite Schritt der Verdauung – weshalb Beschwerden hier " +
              "selten ohne Beteiligung von Magen und Milz auftreten und meist zusammen " +
              "behandelt werden." },
      { titel: "Er beherrscht die Flüssigkeiten", han: "主液",
        text: "Weil er den flüssigen Anteil zur Blase leitet, hängt die Urinmenge auch von " +
              "ihm ab. Die chinesische Medizin nennt das eine der überraschenden " +
              "Verbindungen: Durchfall lässt sich manchmal behandeln, indem man den Urin " +
              "fördert – die Flüssigkeit wird dann wieder richtig verteilt." },
      { titel: "Er nimmt das Feuer des Herzens auf", han: "心与小肠相表里",
        text: "Herz und Dünndarm bilden ein inneres und ein äußeres Paar. Staut sich Feuer " +
              "im Herzen, wandert es über diese Verbindung nach unten und zeigt sich als " +
              "brennender, dunkler, spärlicher Urin, manchmal mit Blut. Der Luo-Punkt Dü 7 " +
              "zieht zum Yuan-Punkt He 7 – über diese Querverbindung wird es behandelt." }
    ],

    zustaendeTitel: "Mangel und Fülle von Yin und Yang",
    zustaendeHinweis: "Mangel (Xū 虚) heißt: etwas fehlt. Fülle (Shí 实) heißt: etwas ist zu " +
                      "viel da und blockiert. Beim Dünndarm lohnt es, immer beide Ausgänge " +
                      "zugleich anzusehen – Stuhl und Urin. Die Trennung misslingt meist an " +
                      "beiden Enden auf einmal.",
    zustaende: [
      { feld: "Yin-Mangel", en: "Small Intestine Dryness", han: "小肠津亏", pinyin: "xiǎo cháng jīn kuī",
        kurz: "Es fehlt Flüssigkeit; die Trennung bringt nichts Brauchbares mehr hervor.",
        zeichen: "Trockener, harter Stuhl bei gleichzeitig spärlichem, dunklem Urin, " +
                 "trockener Mund, Durst auf kleine Schlucke, Unruhe. Ein Bild, das die " +
                 "Klassiker seltener eigens führen – meist steht es zusammen mit " +
                 "Magen-Yin-Mangel.",
        zunge: "rot, trocken, wenig Belag",
        puls: "dünn und schnell",
        punkte: "Dü 3 · Dü 4 · Ren 4 · Mi 6 · Bl 27" },

      { feld: "Yang-Mangel", en: "Small Intestine Cold Deficiency", han: "小肠虚寒", pinyin: "xiǎo cháng xū hán",
        kurz: "Es fehlt Wärme. Die Trennung läuft zu schwach.",
        zeichen: "Dumpfer Bauchschmerz, der sich durch Wärme und Druck bessert, lautes " +
                 "Rumpeln im Bauch, dünner Stuhl, reichlicher heller Urin, Kälteempfindlichkeit, " +
                 "Müdigkeit. Verschlimmerung nach kalten Speisen und bei kaltem Wetter.",
        zunge: "blass, feucht, dünner weißer Belag",
        puls: "tief, langsam, schwach",
        punkte: "Ren 4 mit Moxa · Ren 6 · Ma 36 · Bl 27 · Dü 4" },

      { feld: "Yin-Fülle", en: "Cold stagnating in the Small Intestine", han: "小肠气痛", pinyin: "xiǎo cháng qì tòng",
        kurz: "Kälte staut sich und krampft den Darm zusammen.",
        zeichen: "Plötzlicher, ziehender oder krampfender Schmerz im Unterbauch, der in den " +
                 "Rücken oder in den Leistenbereich ausstrahlt, deutliche Verschlimmerung " +
                 "durch Kälte und Besserung durch Wärme, Rumpeln, kalte Hände und Füße.",
        zunge: "blass mit weißem Belag",
        puls: "tief und gespannt",
        punkte: "Ren 6 mit Moxa · Ma 29 · Le 1 · Mi 6 · Dü 4" },

      { feld: "Yang-Fülle", en: "Heat in the Small Intestine", han: "小肠实热", pinyin: "xiǎo cháng shí rè",
        kurz: "Hitze staut sich – fast immer vom Herzen herabgewandert.",
        zeichen: "Brennender, dunkler, spärlicher Urin, teils mit Blut, Schmerz beim " +
                 "Wasserlassen, dazu Aphthen im Mund und an der Zungenspitze, innere Unruhe, " +
                 "Reizbarkeit, Durst, Taubheitsgefühl oder Ohrgeräusche. Das Bild zeigt die " +
                 "Kopplung zum Herzen deutlicher als jedes andere.",
        zunge: "rot mit roter Spitze, gelber Belag, oft Geschwüre",
        puls: "schnell und voll",
        punkte: "Dü 2 · Dü 5 · He 8 · Bl 27 · Ren 3" }
    ],

    aeussereTitel: "Wo der Meridian selbst betroffen ist",
    aeussere: [
      { name: "Blockade im Schulter- und Nackenverlauf", han: "经络不通", pinyin: "jīng luò bù tōng",
        zeichen: "Steifer Nacken, der sich nicht drehen lässt, Schmerz zwischen und unter den " +
                 "Schulterblättern, Schmerz an der Ulnarkante des Arms bis in den kleinen " +
                 "Finger, Bewegungseinschränkung der Schulter. Der Verlauf über das " +
                 "Schulterblatt macht Dü 11 zu einem der wirksamsten Punkte bei " +
                 "Schulterverspannung.",
        punkte: "Dü 3 · Dü 11 · Dü 9 · Bl 10 · Gb 21" },
      { name: "Am Kopfende des Verlaufs", han: "耳目", pinyin: "ěr mù",
        zeichen: "Ohrgeräusche, Hörminderung, Schmerz im Ohr, Schmerz im Kiefergelenk, " +
                 "Zahnschmerz im Unterkiefer, Schwellung der Wange. Der Meridian endet vor " +
                 "dem Ohr und hat über die Wange einen Ast zum inneren Augenwinkel.",
        punkte: "Dü 19 · Dü 18 · 3E 17 · Gb 2" }
    ],

    nahrungTitel: "Was den Dünndarm stärkt und was ihm schadet",
    nahrung: {
      staerkt: [
        { was: "Gut gekaut und in Ruhe gegessen", warum: "je besser der Magen vorarbeitet, desto weniger muss der Dünndarm trennen" },
        { was: "Fenchel, Kümmel, Anis als Tee oder Gewürz", warum: "lösen Krampf und Rumpeln im Unterbauch" },
        { was: "Ingwer und warme Suppen", warum: "geben die Wärme, die der Darm zum Trennen braucht" },
        { was: "Reis-Congee", warum: "verlangt kaum Trennarbeit und baut trotzdem auf" },
        { was: "Gedünstetes statt rohem Gemüse", warum: "die Zellwände sind schon aufgeschlossen" },
        { was: "Klares warmes Wasser zwischen den Mahlzeiten", warum: "unterstützt den flüssigen Weg zur Blase" },
        { was: "Kleinere Portionen, dafür regelmäßig", warum: "große Mengen auf einmal überfordern die Trennung" }
      ],
      schadet: [
        { was: "Eisgekühlte Getränke zum Essen", warum: "kühlen genau den Ort ab, an dem getrennt wird" },
        { was: "Große Mengen Rohkost", warum: "verlangt dem Darm Arbeit ab, für die die Wärme fehlt" },
        { was: "Schlecht gegarte Hülsenfrüchte", warum: "erzeugen Gas und Krampf im Unterbauch" },
        { was: "Viel Scharfes und Alkohol", warum: "treiben Hitze in den Darm – oft zusammen mit Herz-Unruhe" },
        { was: "Hastiges Essen, Essen im Gehen", warum: "der Dünndarm braucht Ruhe für seine feine Arbeit" },
        { was: "Ständiges Naschen zwischendurch", warum: "lässt die Trennung nie zu einem Ende kommen" }
      ],
      hinweis: "Die Maximalzeit des Dünndarms liegt von dreizehn bis fünfzehn Uhr, also " +
               "unmittelbar nach dem Mittagessen. Wer in dieser Zeit zur Ruhe kommt, " +
               "unterstützt genau die Arbeit, die dann ansteht. Und: bei brennendem Urin " +
               "mit Unruhe lohnt immer der Blick auf das Herz."
    },

    eigenschaften: [
      { k: "Wandlungsphase", v: "Feuer 火" },
      { k: "Jahreszeit", v: "Sommer" },
      { k: "Klima", v: "Hitze" },
      { k: "Geschmack", v: "bitter" },
      { k: "Farbe", v: "rot" },
      { k: "Sinnesorgan", v: "Zunge" },
      { k: "Gewebe", v: "Blutgefäße" },
      { k: "Emotion", v: "Freude, im Übermaß Unruhe" },
      { k: "Organart", v: "Fu-Organ, Hohlorgan" },
      { k: "Gekoppelt", v: "Herz" }
    ],

    hinweis: "Die Muster beschreiben die klassische Syndromlehre und dienen dem Unterricht. " +
             "Sie ersetzen weder Diagnose noch ärztliche Abklärung."
  },

  points: [
    { n:1, pinyin:"Shàozé", han:"少泽", de:"Kleiner Sumpf", en:"Lesser Marsh",
      x:676, y:608, key:true, role:"TING",
      antik:"ting", wx:"metall",
      tags:["Ting / Jing – Brunnen-/Quellpunkt","fördert den Milchfluss"],
      wirkung:["Ting / Jing – Brunnen-/Quellpunkt", "Metallpunkt der Dünndarm-Leitbahn", "", "Fördert den Milchfluss – der klassische Stillpunkt", "Klärt Hitze und öffnet die Sinne", "Belebt bei Bewusstlosigkeit", "Macht die Augen hell"],
      skelett:"handruecken",
      marken:["kleinfinger_uln"],
      loc:"An der ulnaren Seite des kleinen Fingers, ein Fen (0,1 Cun) proximal des Nagelfalzwinkels.",
      ind:"Fieber, Bewusstlosigkeit, Halsschmerz, Kopfschmerz, zu wenig Muttermilch, Brustentzündung im Wochenbett.",
      nd:"Schräg 0,1 Cun oder Mikroaderlass." },

    { n:2, pinyin:"Qiángǔ", han:"前谷", de:"Vorderes Tal", en:"Front Valley",
      x:674, y:584, key:false, role:"YONG",
      antik:"yong", wx:"wasser",
      tags:["Yong / Ying – kleiner Flusspunkt"],
      wirkung:["Yong / Ying – kleiner Flusspunkt", "Wasserpunkt der Dünndarm-Leitbahn", "", "Klärt Hitze aus Kopf und Kehle", "Lindert Ohrenschmerz", "Öffnet die Leitbahn an der Hand"],
      skelett:"handruecken",
      marken:["kleinfinger_gg", "handkante"],
      loc:"Distal des Grundgelenks des kleinen Fingers, an der ulnaren Seite, an der Grenze zwischen rotem und weißem Fleisch.",
      ind:"Fieber, Halsschmerz, Ohrgeräusche, Augenschmerz, Taubheit im kleinen Finger, zu wenig Muttermilch.",
      nd:"Senkrecht 0,2–0,3 Cun." },

    { n:3, pinyin:"Hòuxī", han:"后溪", de:"Hinterer Bach", en:"Back Ravine",
      x:664, y:562, key:true, role:"YU · TON",
      antik:"yu", wx:"holz",
      tags:["Yu / Shu – größerer Flusspunkt","Tonisierungspunkt","Öffnungspunkt des Du Mai"],
      wirkung:["Yu / Shu – Bachpunkt", "Holzpunkt der Dünndarm-Leitbahn", "Tonisierungspunkt", "Öffnungspunkt des Du Mai", "Paarpunkt zu Bl 62", "", "Der Punkt bei Nackensteife und Rückenschmerz", "Öffnet den Du Mai und die ganze Wirbelsäule", "Vertreibt Wind und klärt den Geist", "Besänftigt Krämpfe"],
      skelett:"handruecken",
      marken:["kleinfinger_gg", "handkante"],
      loc:"Proximal des Grundgelenks des kleinen Fingers, an der ulnaren Handkante – am Ende der Falte, die bei locker geschlossener Faust entsteht.",
      ind:"Steifer Nacken, Rückenschmerz entlang der Wirbelsäule, Kopfschmerz, Ohrgeräusche, Nachtschweiß, Krampfanfall. Einer der wirksamsten Punkte bei akuter Nackensteife.",
      nd:"Senkrecht 0,5–1 Cun." },

    { n:4, pinyin:"Wàngǔ", han:"腕骨", de:"Handwurzelknochen", en:"Wrist Bone",
      x:653, y:533, key:false, role:"YUAN",
      tags:["Yuan-Quellpunkt"],
      wirkung:["Yuan-Quellpunkt", "", "Leitet Feuchtigkeit und Hitze aus", "Löst Schmerz in Handgelenk und Schulter", "Klärt gelbe Verfärbung der Haut"],
      skelett:"handruecken",
      marken:["handkante", "griffel_elle"],
      loc:"An der ulnaren Handkante, in der Vertiefung zwischen der Basis des fünften Mittelhandknochens und dem Os triquetrum.",
      ind:"Schmerz und Steife im Handgelenk, Kopfschmerz, Gelbsucht, Ohrgeräusche, Fieber ohne Schweiß.",
      nd:"Senkrecht 0,3–0,5 Cun." },

    { n:5, pinyin:"Yánggǔ", han:"阳谷", de:"Yang-Tal", en:"Yang Valley",
      x:646, y:521, key:false, role:"KING · BEN",
      antik:"king", wx:"feuer",
      tags:["King / Jing – Strom-/Flusspunkt","Ben-Punkt"],
      wirkung:["King / Jing – Strom-/Flusspunkt", "Feuerpunkt der Dünndarm-Leitbahn", "Ben-Punkt", "", "Klärt Hitze und beruhigt den Geist", "Löst Schmerz im Handgelenk", "Lindert Ohrensausen"],
      skelett:"handruecken",
      marken:["griffel_elle", "handgelenksfalte_d"],
      loc:"An der ulnaren Seite des Handgelenks, in der Vertiefung zwischen dem Processus styloideus ulnae und dem Os triquetrum.",
      ind:"Schmerz im Handgelenk, Ohrgeräusche und Hörminderung, Schwellung am Hals, Zahnschmerz, Schwindel.",
      nd:"Senkrecht 0,3–0,5 Cun." },

    { n:6, pinyin:"Yǎnglǎo", han:"养老", de:"Den Alten pflegen", en:"Nursing the Aged",
      x:642, y:513, key:false, role:"XI",
      tags:["Xi-Cleft – Akkumulationspunkt","Akutpunkt"],
      wirkung:["Xi-Cleft – Akkumulationspunkt", "", "Akutpunkt bei Schulter- und Armschmerz", "Macht die Augen hell", "Löst steife Gelenke – der Punkt, der den Alten hilft"],
      skelett:"handruecken",
      marken:["griffel_elle"],
      loc:"1 Cun proximal von Dü 5, in der Spalte am Processus styloideus ulnae. Tastprobe: die Handfläche auf die Brust legen, dann öffnet sich die Spalte.",
      ind:"Sehstörung und trübes Sehen, akuter Schmerz in Schulter, Arm oder Rücken, Steife im Nacken – klassisch bei Beschwerden des Alters.",
      nd:"Schräg 0,3–0,5 Cun." },

    { n:7, pinyin:"Zhīzhèng", han:"支正", de:"Verzweigung zum Geraden", en:"Branch to the Correct",
      x:624, y:479, key:true, role:"LUO",
      tags:["Luo-Punkt – Verbindungspunkt","zieht zum Yuan-Punkt He 7"],
      wirkung:["Luo-Punkt – zieht zum Yuan-Punkt He 7", "", "Beruhigt den Geist", "Vertreibt Wind aus der Leitbahn", "Löst Schwere und Steife im Arm"],
      marken:["elle_rand"],
      loc:"5 Cun proximal von Dü 5, auf der Verbindungslinie von Dü 5 zu Dü 8.",
      ind:"Schmerz und Schwäche im Arm, Nackensteife, Kopfschmerz, Unruhe und Angst über die Verbindung zum Herzen, Warzen.",
      nd:"Senkrecht 0,5–0,8 Cun." },

    { n:8, pinyin:"Xiǎohǎi", han:"小海", de:"Kleines Meer", en:"Small Sea",
      x:592, y:419, key:true, role:"HO · SED",
      antik:"ho", wx:"erde",
      tags:["Ho / He – Meerpunkt","Sedierungspunkt"],
      wirkung:["Ho / He – Meerpunkt", "Erdpunkt der Dünndarm-Leitbahn", "Sedierungspunkt", "", "Klärt Hitze aus der Leitbahn", "Löst Schmerz in Ellenbogen und Nacken", "Beruhigt bei Krämpfen"],
      skelett:"ellenbogen_hinten",
      marken:["olekranon", "epicond_med_h", "ulnarrinne"],
      loc:"In der Rinne zwischen dem Olecranon und dem Epicondylus medialis humeri – dort, wo der Ellennerv verläuft und der Stoß den bekannten Blitz auslöst.",
      ind:"Schmerz im Ellenbogen und an der Ulnarkante des Arms, Taubheit im kleinen Finger, Zahnschmerz, Schwellung am Hals, Krampfanfall.",
      nd:"Senkrecht 0,3–0,5 Cun, vorsichtig – der Nerv liegt direkt darunter." },

    { n:9, pinyin:"Jiānzhēn", han:"肩贞", de:"Wahre Schulter", en:"True Shoulder",
      x:540, y:330, key:false, role:"",
      tags:[],
      wirkung:["Lokalpunkt an der Schulter", "", "Öffnet die Leitbahn an der Schulter", "Löst Schmerz, der in den Arm zieht", "Lindert Ohrensausen"],
      marken:["achselfalte_h"],
      loc:"1 Cun oberhalb des Endes der hinteren Achselfalte, bei herabhängendem Arm.",
      ind:"Schulterschmerz, eingeschränkte Armhebung, Schmerz im Schulterblatt, Taubheit im Arm, Ohrgeräusche.",
      nd:"Senkrecht 1–1,5 Cun. Nicht nach medial stechen – Pleuragefahr." },

    { n:11, pinyin:"Tiānzōng", han:"天宗", de:"Himmlische Ahnenverehrung", en:"Celestial Gathering",
      x:496, y:300, key:true, role:"",
      tags:["der Schulterblattpunkt"],
      wirkung:["Der Schulterblattpunkt", "", "Löst gestautes Qi am Schulterblatt – meist deutlich druckempfindlich", "Öffnet die Brust und die Rippenseiten", "Lindert Schmerz in Schulter und Oberarm"],
      marken:["schulterblatt"],
      loc:"In der Mitte der Fossa infraspinata des Schulterblatts, etwa im Schnittpunkt der Diagonalen – bei Druck meist deutlich druckempfindlich.",
      ind:"Schulterschmerz und Bewegungseinschränkung, Schmerz im Schulterblatt, Schmerz an der Außenseite des Arms, Brustspannen und Schmerz in der Brust.",
      nd:"Senkrecht oder schräg 0,5–1 Cun." },

    { n:15, pinyin:"Jiānzhōngshū", han:"肩中俞", de:"Mittlerer Schulter-Transportpunkt", en:"Central Shoulder Shu",
      x:461, y:214, key:false, role:"",
      tags:[],
      wirkung:["Nacken- und Schulterpunkt", "", "Vertreibt Wind aus dem Nacken", "Stillt Husten und öffnet die Lunge", "Löst Steife in Schulter und Nacken"],
      marken:["c7", "wirbelrinne"],
      loc:"2 Cun lateral des unteren Randes des Dornfortsatzes des siebten Halswirbels, auf Höhe von Du 14.",
      ind:"Husten, Asthma, Schmerz und Steife im Nacken und in der Schulter, Sehstörung.",
      nd:"Schräg 0,3–0,6 Cun. Nicht senkrecht tief – Pleuragefahr." },

    { n:18, pinyin:"Quánliáo", han:"颧髎", de:"Jochbeinloch", en:"Cheek Bone Crevice",
      x:467, y:158, key:false, role:"",
      tags:["im Gesicht – hier als Projektion an der Kopfkante"],
      wirkung:["Kreuzungspunkt mit dem Dreifachen Erwärmer", "", "Vertreibt Wind aus dem Gesicht", "Lindert Zahnschmerz im Oberkiefer", "Löst Gesichtslähmung und Lidzucken"],
      marken:["projektion"],
      loc:"Am Gesicht, in der Vertiefung am unteren Rand des Jochbeins, senkrecht unter dem äußeren Augenwinkel. Von hinten nicht sichtbar; in dieser Tafel an der Kopfkante angedeutet.",
      ind:"Gesichtslähmung, Zucken des Augenlids, Zahnschmerz im Oberkiefer, Gesichtsschmerz, geschwollene Wange.",
      nd:"Senkrecht 0,3–0,5 Cun." },

    { n:19, pinyin:"Tīnggōng", han:"听宫", de:"Palast des Hörens", en:"Palace of Hearing",
      x:470, y:138, key:true, role:"",
      tags:["Endpunkt des Meridians","Treffpunkt mit Gb und 3E"],
      wirkung:["Endpunkt der Dünndarm-Leitbahn", "Treffpunkt mit Gallenblase und Dreifachem Erwärmer", "", "Der Hauptpunkt am Ohr: öffnet das Gehör", "Lindert Ohrensausen und Ohrenschmerz", "Beruhigt den Geist"],
      marken:["projektion"],
      loc:"Vor dem Tragus, in der Vertiefung, die sich bei geöffnetem Mund bildet. Von hinten nicht sichtbar; in dieser Tafel an der Kopfkante angedeutet.",
      ind:"Ohrgeräusche, Hörminderung, Ohrenschmerz, Mittelohrentzündung, Schmerz im Kiefergelenk, Zahnschmerz.",
      nd:"Bei geöffnetem Mund senkrecht 0,5–1 Cun. Der Mund bleibt während der Nadelung offen." }
  ]
});
