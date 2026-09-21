/* Lungenmeridian – Hand-Taiyin – 手太阴肺经
   Punktlagen kalibriert auf img/front.png (880 × 1168).
   Proportionen: vordere Achselfalte y≈337, Ellenbeugefalte y≈417,
   Handgelenksfalte y≈528 → Achsel–Ellenbeuge 9 Cun, Ellenbeuge–Handgelenk 12 Cun. */
Meridian.register({
  id: "lu", code: "LU", codeDe: "Lu", ord: 1,
  name: "Lunge", titel: "Lungenmeridian", nameHan: "肺经",
  channel: "Hand-Taiyin", channelHan: "手太阴",
  element: "Metall", elementHan: "金", wx: "metall",
  yin: true, coupled: "li", coupledName: "Dickdarm",
  clock: "03 – 05 Uhr", pointCount: 11, direction: "Brust → Hand",
  view: "front", mirror: true,

  intro: "Der Hand-Taiyin-Meridian der Lunge eröffnet den ersten der drei Meridianumläufe. " +
         "Er beginnt an Lu 1 auf dem Brustkorb, steigt kurz zu Lu 2 auf und läuft dann " +
         "zentrifugal über die radiale Vorderseite von Oberarm, Unterarm und Daumen bis zum " +
         "Nagelfalz an Lu 11, wo er in den Dickdarmmeridian übergeht.",

  cun: { achselfalte: [301, 337], ellenbeuge: [260, 417], handgelenk: [201, 528],
         hinweis: "Achselfalte→Ellenbeuge = 9 Cun, Ellenbeuge→Handgelenksfalte = 12 Cun" },

  path: [[335,260],[335,243],[326,276],[312,308],[301,337],
         [289,365],[285,374],[271,395],[260,417],[251,440],
         [241,465],[227,490],[210,514],[208,519],[201,528],
         [187,533],[174,539],[160,548],[147,556]],

  inner: "M442,396 C452,428 452,452 441,462 C430,450 432,424 434,398 " +
         "C426,352 418,318 424,278 C430,246 438,228 446,218 " +
         "C428,226 394,236 352,252 L332,265",
  branches: [{ label: "Luo-Ast zu Di", d: "M210,514 C205,545 197,572 182,590 L152,612" }],

  /* --- Das Organ --- */
  organ: {
    titel: "Die Lunge in der chinesischen Medizin",
    pinyin: "Fèi", han: "肺", wx: "metall",
    text: [
      "Die Lunge heißt in den Klassikern Meister des Qi. Sie nimmt mit dem Atem das reine Qi " +
      "der Luft auf und bildet daraus zusammen mit dem Gu-Qi aus der Nahrung das Zong-Qi, das " +
      "Sammel-Qi der Brust. Damit steht sie am Anfang jeder Qi-Bildung im Körper.",

      "Sie gilt als das zarte Organ. Sie liegt am höchsten, steht über Nase und Haut in " +
      "ständigem Austausch mit der Umwelt und wird deshalb als erste von äußeren pathogenen " +
      "Faktoren erreicht. Mit ihrem gekoppelten Organ, dem Dickdarm, teilt sie ein Thema: " +
      "aufnehmen und wieder loslassen."
    ],

    aufgabenTitel: "Die Aufgaben der Lunge",
    aufgaben: [
      { titel: "Sie herrscht über das Qi und die Atmung", han: "主气司呼吸",
        text: "Mit dem Einatmen nimmt die Lunge das klare Qi auf, mit dem Ausatmen gibt sie " +
              "das trübe ab. Aus dem klaren Qi und dem Gu-Qi der Nahrung entsteht in der Brust " +
              "das Zong-Qi, das Atmung und Herzschlag trägt. Weil alle Qi-Bewegungen im Körper " +
              "vom Atemrhythmus abhängen, heißt es: die Lunge herrscht über das Qi des ganzen Körpers. " +
              "Ist ihr Qi schwach, fehlt Kraft, Stimme und Ausdauer." },

      { titel: "Sie verteilt und senkt ab", han: "宣发肃降",
        text: "Zwei Richtungen halten sich die Waage. Xuān fā verteilt nach außen und oben: " +
              "es bringt Qi und Flüssigkeit an die Oberfläche, zu Haut und Körperhaar, und trägt " +
              "dorthin das Wei-Qi. Sù jiàng klärt und senkt nach unten ab, zur Niere und zur Blase. " +
              "Stockt das Verteilen, entstehen Frösteln und verstopfte Nase; stockt das Absenken, " +
              "entstehen Husten, Keuchen und Engegefühl in der Brust." },

      { titel: "Sie regelt den Wasserweg", han: "通调水道",
        text: "Weil beide Bewegungen auch die Flüssigkeiten führen, heißt die Lunge die obere " +
              "Quelle des Wassers. Sie vernebelt Flüssigkeit zur Haut hin und senkt den Rest nach " +
              "unten ab. Versagt das, sammelt sich Feuchtigkeit: Ödeme im Gesicht und an den " +
              "Oberarmen, Schleim in der Brust, spärlicher Urin." },

      { titel: "Sie beherrscht Haut und Körperhaar", han: "主皮毛",
        text: "Die Lunge verteilt das Wei-Qi in die Oberfläche und steuert das Öffnen und " +
              "Schließen der Poren. Davon hängt ab, wie dicht die Abwehr ist und ob jemand zur " +
              "rechten Zeit schwitzt. Schwaches Lungen-Qi zeigt sich als eine Erkältung nach der " +
              "anderen, als Schwitzen ohne Anlass und als trockene, glanzlose Haut." },

      { titel: "Sie öffnet sich in die Nase", han: "开窍于鼻",
        text: "Nase, Rachen und Stimme gehören zur Lunge. Ist ihr Qi frei, riecht man gut und " +
              "die Stimme trägt. Wind-Kälte verstopft die Nase, Wind-Hitze macht den Rachen wund, " +
              "Yin-Mangel trocknet beides aus und nimmt der Stimme den Klang." },

      { titel: "Sie beherbergt die Po", han: "藏魄",
        text: "Die Po ist die Körperseele: das unmittelbare Empfinden, der Reflex, das Gespür " +
              "im Leib, das nicht durch den Verstand geht. Sie ist an den Atem gebunden und " +
              "erlischt mit ihm. Ihre Emotion ist Trauer. Anhaltende Trauer verbraucht Lungen-Qi; " +
              "umgekehrt macht schwaches Lungen-Qi anfälliger für Schwermut und Rückzug." }
    ],

    zustaendeTitel: "Mangel und Fülle von Yin und Yang",
    zustaendeHinweis: "Mangel (Xū 虚) heißt: etwas fehlt. Fülle (Shí 实) heißt: etwas ist zu viel " +
                      "da und blockiert. Bei Yin-Fülle sammelt sich Stoffliches von yin-artiger " +
                      "Natur an – Schleim, Feuchtigkeit, Kälte. Bei Yang-Fülle staut sich Hitze.",
    zustaende: [
      { feld: "Yin-Mangel", en: "Lung Yin Deficiency", han: "肺阴虚", pinyin: "fèi yīn xū",
        kurz: "Es fehlt Befeuchtung. Trockenheit und Leere-Hitze treten hervor.",
        zeichen: "Trockener Reizhusten ohne Auswurf oder mit wenig zähem Schleim, trockener Hals " +
                 "und Mund, Heiserkeit bis Stimmverlust, Nachtschweiß, Hitze in den fünf Herzen, " +
                 "am Nachmittag gerötete Wangen, Abmagerung.",
        zunge: "rot, wenig oder kein Belag, trocken, feine Risse im vorderen Drittel",
        puls: "dünn und schnell",
        punkte: "Lu 9 · Lu 5 · Ni 6 · Bl 13 · Ren 17" },

      { feld: "Yang-Mangel", en: "Lung Qi / Yang Deficiency", han: "肺气虚", pinyin: "fèi qì xū",
        kurz: "Es fehlt Wärme und Antrieb. Das Qi hält die Oberfläche nicht mehr dicht.",
        zeichen: "Kurzatmigkeit schon bei geringer Anstrengung, leise und kraftlose Stimme, " +
                 "Widerwille zu sprechen, Schwitzen am Tag ohne Anlass, blasses Gesicht, " +
                 "Erschöpfung, eine Erkältung nach der anderen, Kälteempfindlichkeit an Rücken " +
                 "und Schultern, bei ausgeprägter Kälte klares dünnes Sekret. Von einem eigenen " +
                 "Lungen-Yang-Mangel spricht die Lehre selten – die Schwäche zeigt sich als " +
                 "Qi-Mangel mit Kältezeichen.",
        zunge: "blass, feucht, dünner weißer Belag",
        puls: "leer und schwach, besonders in der rechten Cun-Position",
        punkte: "Lu 9 · Lu 1 · Ma 36 · Bl 13 · Du 12" },

      { feld: "Yin-Fülle", en: "Phlegm-Damp obstructing the Lung", han: "痰湿阻肺", pinyin: "tán shī zǔ fèi",
        kurz: "Stoffliches von yin-artiger Natur staut sich: Schleim, Feuchtigkeit, Kälte.",
        zeichen: "Reichlich weißer, leicht zu lösender Schleim, Engegefühl in der Brust, " +
                 "rasselnde oder pfeifende Atmung, Schweregefühl im Körper, Verschlimmerung durch " +
                 "Milchprodukte, Süßes und feuchtes Wetter. Bei Kälte-Schleim ist der Auswurf " +
                 "wässrig-weiß und alles bessert sich durch Wärme.",
        zunge: "geschwollen, klebriger weißer Belag, oft Zahneindrücke am Rand",
        puls: "schlüpfrig, bei Kälte zusätzlich langsam",
        punkte: "Lu 5 · Ma 40 · Ren 17 · Mi 3 · Bl 13" },

      { feld: "Yang-Fülle", en: "Heat or Phlegm-Heat in the Lung", han: "痰热壅肺", pinyin: "tán rè yōng fèi",
        kurz: "Hitze staut sich in der Lunge, oft zusammen mit Schleim.",
        zeichen: "Lauter, bellender Husten, gelber zäher Schleim, teils übelriechend, Fieber, " +
                 "Durst auf Kaltes, Brustschmerz beim Husten, trockener Stuhl, dunkler Urin. " +
                 "Bei starker Hitze blutiger Auswurf.",
        zunge: "rot, gelber klebriger Belag",
        puls: "schnell, voll, schlüpfrig",
        punkte: "Lu 5 · Lu 10 · Lu 11 · Di 11 · Di 4 · Bl 13" }
    ],

    aeussereTitel: "Wenn ein äußerer Faktor die Lunge erreicht",
    aeussere: [
      { name: "Wind-Kälte fesselt die Lunge", han: "风寒束肺", pinyin: "fēng hán shù fèi",
        zeichen: "Plötzlich einsetzender Husten mit dünnem weißem Schleim, klarer Nasenfluss, " +
                 "Frösteln, das sich durch Wärme bessert, kein Schweiß, steifer Nacken, " +
                 "Kopfschmerz im Hinterkopf.",
        punkte: "Lu 7 · Di 4 · Bl 12 · Gb 20" },
      { name: "Wind-Hitze greift die Lunge an", han: "风热犯肺", pinyin: "fēng rè fàn fèi",
        zeichen: "Halsschmerz, gelblicher zäher Schleim, Fieber mit nur wenig Frösteln, Durst, " +
                 "geschwollene Mandeln, trockene Nase.",
        punkte: "Lu 11 · Lu 10 · Di 4 · Di 11" }
    ],

    nahrungTitel: "Was die Lunge stärkt und was ihr schadet",
    nahrung: {
      staerkt: [
        { was: "Birne, roh oder gedünstet", warum: "befeuchtet die Lunge und löst trockenen Reizhusten" },
        { was: "Weißer Rettich, Daikon", warum: "löst Schleim und bringt das Lungen-Qi wieder nach unten" },
        { was: "Mandeln und Aprikosenkerne", warum: "befeuchten und senken das Qi ab, klassisch bei Husten" },
        { was: "Lotoswurzel", warum: "befeuchtet und kühlt bei Trockenheit mit Hitze" },
        { was: "Silberohr, weißer Baumpilz", warum: "nährt das Lungen-Yin, besonders im Herbst" },
        { was: "Chinesischer Yams, Shan Yao", warum: "stärkt Lungen- und Milz-Qi zugleich" },
        { was: "Reis-Congee", warum: "baut Qi auf, ohne die Mitte zu belasten" },
        { was: "Honig", warum: "befeuchtet und lindert trockenen Hals" },
        { was: "Ingwer, Frühlingszwiebel, Zwiebel", warum: "scharf, öffnet die Oberfläche bei Wind-Kälte – in Maßen" },
        { was: "Weiße Gemüse: Blumenkohl, Kohlrabi, Pastinake, Tofu", warum: "die Farbe der Wandlungsphase Metall" },
        { was: "Walnuss und Sesam", warum: "gegen Trockenheit im Herbst, nähren auch die Niere" }
      ],
      schadet: [
        { was: "Milchprodukte im Übermaß, vor allem Käse, Sahne, Eiscreme", warum: "bilden Feuchtigkeit und Schleim" },
        { was: "Zucker und Süßigkeiten", warum: "erzeugen Feuchtigkeit, aus der Schleim wird" },
        { was: "Kalte Rohkost und eisgekühlte Getränke", warum: "schwächen Milz- und Lungen-Qi" },
        { was: "Zu viel Scharfes, Alkohol, Frittiertes", warum: "trocknet aus und erzeugt Hitze in der Lunge" },
        { was: "Große Mengen Weizenprodukte bei bestehender Feuchtigkeit", warum: "verstärken die Schleimbildung" },
        { was: "Rauchen", warum: "kein Nahrungsmittel, aber der stärkste Trocknungs- und Hitzefaktor für die Lunge" }
      ],
      hinweis: "Der scharfe Geschmack gehört zur Lunge und öffnet sie – im Übermaß zerstreut er " +
               "aber ihr Qi. Und: die Milz ist die Quelle des Schleims, die Lunge nur sein Behälter. " +
               "Wer Schleim in der Lunge über die Ernährung angeht, setzt bei der Milz an."
    },

    eigenschaften: [
      { k: "Wandlungsphase", v: "Metall 金" },
      { k: "Jahreszeit", v: "Herbst" },
      { k: "Klima", v: "Trockenheit" },
      { k: "Geschmack", v: "scharf" },
      { k: "Farbe", v: "weiß" },
      { k: "Sinnesorgan", v: "Nase" },
      { k: "Gewebe", v: "Haut und Körperhaar" },
      { k: "Emotion", v: "Trauer, Kummer" },
      { k: "Geistaspekt", v: "Po 魄, Körperseele" },
      { k: "Gekoppelt", v: "Dickdarm" }
    ],

    hinweis: "Die Muster beschreiben die klassische Syndromlehre und dienen dem Unterricht. " +
             "Sie ersetzen weder Diagnose noch ärztliche Abklärung."
  },

  points: [
    { n:1, pinyin:"Zhōngfǔ", han:"中府", de:"Zentrale Sammelstelle", en:"Central Treasury",
      x:335, y:260, key:true, role:"MU",
      tags:["Mu-Punkt der Lunge","Treffpunkt mit dem Milz-Meridian"],
      wirkung:["Mu-Alarmpunkt der Lunge", "Treffpunkt mit dem Milzmeridian", "", "Senkt und reguliert das Lungen-Qi", "Klärt Hitze aus der Lunge", "Löst Schleim", "Weitet die Brust"],
      marken:["schluesselbein"],
      loc:"1. Zwischenrippenraum, 6 Cun lateral der Mittellinie, 1 Cun unterhalb von Lu 2.",
      ind:"Husten, Asthma, Engegefühl und Schmerz in der Brust, Schulterschmerz, Fülle-Hitze in der Lunge.",
      nd:"Schräg oder tangential nach lateral, 0,5–0,8 Cun. Nicht senkrecht tief – Pleuragefahr." },

    { n:2, pinyin:"Yúnmén", han:"云门", de:"Wolkentor", en:"Cloud Gate",
      x:335, y:243, key:false, role:"",
      tags:["Fensterpunkt des Himmels"],
      wirkung:["Senkt aufsteigendes Lungen-Qi", "Öffnet die Brust", "Klärt Hitze aus der Lunge", "Löst Spannung in der Schulter"],
      marken:["schluesselbein"],
      loc:"Infraklavikuläre Grube unterhalb des Schlüsselbeins, 6 Cun lateral der Mittellinie, im Sulcus deltoideopectoralis.",
      ind:"Husten, Kurzatmigkeit, Enge in der Brust, Schmerz in Schulter und Oberarm.",
      nd:"Schräg nach lateral, 0,5–0,8 Cun. Keine tiefe senkrechte Nadelung." },

    { n:3, pinyin:"Tiānfǔ", han:"天府", de:"Himmelspalast", en:"Palace of Heaven",
      x:289, y:365, key:false, role:"",
      tags:["Fensterpunkt des Himmels"],
      wirkung:["Klärt Hitze", "Senkt und reinigt das Lungen-Qi", "Stillt Blut", "Besänftigt die Körperseele Po"],
      marken:["achselfalte_v", "bizeps_innen"],
      loc:"3 Cun unterhalb der vorderen Achselfalte, radial des M. biceps brachii.",
      ind:"Asthma, Nasenbluten, Schmerz an der Oberarminnenseite, innere Unruhe, Benommenheit.",
      nd:"Senkrecht 0,5–1 Cun." },

    { n:4, pinyin:"Xiábái", han:"侠白", de:"Weiß umfassend", en:"Guarding White",
      x:285, y:374, key:false, role:"", tags:[],
      wirkung:["Reguliert das Qi und weitet die Brust", "Senkt Gegenläufiges", "Löst Schmerz an der Innenseite des Oberarms"],
      marken:["bizeps_innen"],
      loc:"4 Cun unterhalb der vorderen Achselfalte bzw. 5 Cun oberhalb der Ellenbeugefalte, radial des Bizeps.",
      ind:"Husten, Kurzatmigkeit, Enge in der Brust, Herzbeschwerden, Schmerz an der Oberarminnenseite.",
      nd:"Senkrecht 0,5–1 Cun." },

    { n:5, pinyin:"Chǐzé", han:"尺泽", de:"Sumpf der Ellenbeuge", en:"Cubit Marsh",
      x:260, y:417, key:true, role:"HO · SED",
      antik:"ho", wx:"wasser",
      tags:["Ho / He – Meerpunkt","Sedierungspunkt"],
      wirkung:["Ho / He – Meerpunkt", "Wasserpunkt der Lungen-Leitbahn", "Sedierungspunkt", "", "Klärt Hitze und Schleim-Hitze aus der Lunge", "Senkt das Lungen-Qi", "Befeuchtet Trockenheit", "Entspannt die Sehnen am Ellenbogen"],
      marken:["ellenbeuge", "bizepssehne"],
      loc:"In der Ellenbogenbeuge, in einer Vertiefung lateral der großen Sehne (M. biceps brachii) – nicht direkt neben der Sehne, etwas lateraler.",
      ind:"Akuter Husten, Hitze und Schleim in der Lunge, Asthma, Halsschmerz, Tennisellenbogen, akute Rückenschmerzen.",
      nd:"Senkrecht 0,8–1,2 Cun; bei akuter Hitze Mikroaderlass. Achtung: Cubitalvene!" },

    { n:6, pinyin:"Kǒngzuì", han:"孔最", de:"Versammlungshöhle", en:"Collection Hole",
      x:235, y:463, key:false, role:"XI",
      tags:["Xi-Cleft – Akkumulationspunkt","Akutpunkt"],
      wirkung:["Xi-Spaltpunkt", "", "Klärt Hitze und stillt Blut – der Punkt bei Bluthusten", "Senkt akut aufsteigendes Lungen-Qi", "Öffnet die Oberfläche, wenn der Schweiß ausbleibt"],
      marken:["speiche_rand"],
      loc:"7 Cun proximal von Lu 9, auf der Linie zwischen Lu 5 und Lu 9.",
      ind:"Akuter Asthmaanfall, Bluthusten, Heiserkeit, fehlende Schweißbildung bei Fieber, Hämorrhoiden.",
      nd:"Senkrecht 0,5–1 Cun." },

    { n:7, pinyin:"Lièquē", han:"列缺", de:"Engpass, extremer Mangel", en:"Broken Sequence",
      x:210, y:514, key:true, role:"LUO",
      tags:["Luo-Punkt – Verbindungspunkt","zieht zum Yuan-Punkt Di 4","Öffnungspunkt Ren Mai","Kommandopunkt Kopf/Nacken"],
      wirkung:["Luo-Punkt zum Dickdarm", "Öffnungspunkt des Ren Mai", "Kommandopunkt für Kopf und Nacken", "", "Befreit die Oberfläche und vertreibt Wind", "Senkt und verteilt das Lungen-Qi", "Öffnet und reguliert die Wasserwege"],
      skelett:"handflaeche",
      marken:["handgelenksfalte", "griffel_speiche"],
      loc:"1,5 Cun proximal von Lu 9 bzw. der Handgelenksspalte, in der Rinne über dem Proc. styloideus radii. Tastprobe: an der Spitze des Zeigefingers, wenn die Gabelungen von Daumen und Zeigefinger ineinandergelegt werden.",
      ind:"Erkältung mit Wind-Kälte, Kopfschmerz, Nackensteife, Husten, Gesichtslähmung, Handgelenkschmerz.",
      nd:"Schräg nach proximal, 0,3–0,5 Cun." },

    { n:8, pinyin:"Jīngqú", han:"经渠", de:"Entwässerungsgraben", en:"Channel Ditch",
      x:208, y:519, key:false, role:"KING · BEN",
      antik:"king", wx:"metall",
      tags:["King / Jing – Strom-/Flusspunkt","Ben-Punkt"],
      wirkung:["King / Jing – Flusspunkt", "Metallpunkt der Lungen-Leitbahn", "", "Senkt das Lungen-Qi", "Klärt Hitze", "Wandelt Schleim"],
      skelett:"handflaeche",
      marken:["handgelenksfalte", "speichenarterie"],
      loc:"1 Cun proximal von Lu 9, an der Innenseite des Proc. styloideus, lateral der A. radialis, medial zur dort verlaufenden Sehne.",
      ind:"Husten, Asthma, Halsschmerz, Fieber ohne Schweiß, Schmerz im Handgelenk.",
      nd:"Senkrecht 0,2–0,3 Cun, an der Arterie vorbei. Klassisch nicht moxibustieren." },

    { n:9, pinyin:"Tàiyuān", han:"太渊", de:"Tiefster, großer Wasserstrudel", en:"Great Abyss",
      x:201, y:528, key:true, role:"YU · YUAN · TON",
      antik:"yu", wx:"erde",
      tags:["Yu / Shu – größerer Flusspunkt","Yuan-Punkt","Tonisierungspunkt","Hui-Punkt der Gefäße"],
      wirkung:["Yu / Shu – Bachpunkt", "Yuan-Quellpunkt", "Hui-Punkt der Gefäße", "Tonisierungspunkt", "", "Stärkt Lungen-Qi und Lungen-Yin", "Belebt die Gefäße und bewegt das Blut", "Wandelt Schleim", "Senkt Gegenläufiges"],
      skelett:"handflaeche",
      marken:["handgelenksfalte", "speichenarterie", "griffel_speiche"],
      loc:"In der am radialen Ende der Handgelenksspalte liegenden Furche, radial der Cun-Pulsstelle, lateral der A. radialis und medial zur dort verlaufenden Sehne.",
      ind:"Lungen-Qi-Schwäche, chronischer Husten, Kurzatmigkeit, schwache Stimme, Gefäß- und Pulsstörungen.",
      nd:"Senkrecht 0,2–0,3 Cun, Arterie meiden." },

    { n:10, pinyin:"Yújì", han:"鱼际", de:"Fischbauchgrenze", en:"Fish Border",
      x:174, y:539, key:false, role:"YONG",
      antik:"yong", wx:"feuer",
      tags:["Yong / Ying – kleiner Flusspunkt"],
      wirkung:["Yong / Ying – kleiner Flusspunkt", "Feuerpunkt der Lungen-Leitbahn", "", "Klärt Hitze aus der Lunge", "Befreit die Kehle", "Stillt Blut"],
      skelett:"handflaeche",
      marken:["daumenballen", "mhk12"],
      loc:"Auf dem Daumenballen in der Mitte des ersten Metakarpale, an der Grenze zwischen weißem und rotem Fleisch.",
      ind:"Halsschmerz, Heiserkeit, Stimmverlust, Hitze in der Lunge, Fieber, trockener Husten.",
      nd:"Senkrecht 0,5–0,8 Cun." },

    { n:11, pinyin:"Shàoshāng", han:"少商", de:"Junges Shang, spärliches Metall", en:"Lesser Shang",
      x:147, y:556, key:true, role:"TING",
      antik:"ting", wx:"holz",
      tags:["Ting / Jing – Brunnen-/Quellpunkt","Wiederbelebungspunkt"],
      wirkung:["Ting / Jing – Brunnen-/Quellpunkt", "Holzpunkt der Lungen-Leitbahn", "", "Befreit die Kehle", "Klärt Hitze", "Öffnet die Sinne und belebt bei Bewusstlosigkeit"],
      skelett:"handflaeche",
      marken:["daumen_rad"],
      loc:"An der radialen, medialen Seite des Daumens, ein Fen (0,1 Cun) proximal des Nagelfalzwinkels.",
      ind:"Akuter Halsschmerz, hohes Fieber, Bewusstlosigkeit, Krampfanfall, Mandelentzündung.",
      nd:"Schräg 0,1 Cun oder Mikroaderlass mit der Dreikantnadel." }
  ]
});
