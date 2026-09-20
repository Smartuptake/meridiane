/* Lungenmeridian – Hand-Taiyin – 手太陰肺經
   Punktlagen kalibriert auf img/front.png (880 × 1168).
   Proportionen: vordere Achselfalte y≈337, Ellenbeugefalte y≈417,
   Handgelenksfalte y≈528 → Achsel–Ellenbeuge 9 Cun, Ellenbeuge–Handgelenk 12 Cun. */
Meridian.register({
  id: "lu", code: "LU", codeDe: "Lu", ord: 1,
  name: "Lunge", titel: "Lungenmeridian", nameHan: "肺經",
  channel: "Hand-Taiyin", channelHan: "手太陰",
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

  path: [[330,267],[326,249],[313,278],[307,308],[301,337],
         [289,365],[285,374],[271,395],[260,417],[251,440],
         [241,465],[227,490],[210,514],[208,519],[201,528],
         [187,533],[174,539],[160,548],[147,556]],

  inner: "M442,396 C452,428 452,452 441,462 C430,450 432,424 434,398 " +
         "C426,352 418,318 424,278 C430,246 438,228 446,218 " +
         "C428,226 394,236 352,252 L332,265",
  branches: [{ label: "Luo-Ast zu Di", d: "M210,514 C205,545 197,572 182,590 L152,612" }],

  /* --- Das Organ, Kapitel für den Unterricht --- */
  organ: {
    titel: "Die Lunge in der chinesischen Medizin",
    pinyin: "Fèi", han: "肺",
    text: [
      "Die Lunge heißt in den Klassikern Meister des Qi. Sie nimmt mit dem Atem das reine Qi " +
      "der Luft auf und bildet daraus zusammen mit dem Gu-Qi aus der Nahrung das Zong-Qi, das " +
      "Sammel-Qi der Brust. Damit steht sie am Anfang jeder Qi-Bildung im Körper.",

      "Ihre Arbeit hat zwei Richtungen. Xuān fā 宣發 verteilt und zerstreut nach außen und oben: " +
      "es bringt Qi und Flüssigkeit an die Oberfläche, zu Haut und Körperhaar, und trägt dorthin " +
      "das Wei-Qi, das Abwehr-Qi. Sù jiàng 肅降 klärt und senkt ab: es führt Qi und Flüssigkeit " +
      "nach unten zur Niere und zur Blase. Weil beide Bewegungen auch den Wasserweg regeln, " +
      "heißt die Lunge die obere Quelle des Wassers.",

      "Sie öffnet sich in die Nase; Geruchssinn und Stimme gehören zu ihr. Sie beherbergt die " +
      "Po 魄, die Körperseele, die für das unmittelbare Empfinden und das Gespür im Körper steht. " +
      "Ihre Emotion ist Trauer und Kummer. Anhaltende Trauer verbraucht Lungen-Qi; umgekehrt " +
      "macht schwaches Lungen-Qi anfälliger für Schwermut und Rückzug.",

      "Die Lunge gilt als das zarte Organ. Sie liegt am höchsten, steht über Nase und Haut in " +
      "ständigem Austausch mit der Umwelt und wird deshalb als erste von äußeren pathogenen " +
      "Faktoren erreicht. Mit ihrem gekoppelten Organ, dem Dickdarm, teilt sie ein Thema: " +
      "aufnehmen und wieder loslassen."
    ],
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
    musterTitel: "Was auftritt, wenn die Lunge aus dem Gleichgewicht gerät",
    muster: [
      { name: "Lungen-Qi-Mangel", han: "肺氣虛", pinyin: "fèi qì xū",
        zeichen: "Kurzatmigkeit schon bei geringer Anstrengung, leise und kraftlose Stimme, " +
                 "wenig Antrieb, Schwitzen am Tag ohne Anlass, blasses Gesicht, eine Erkältung " +
                 "nach der anderen, weil das Wei-Qi die Oberfläche nicht mehr dicht hält.",
        punkte: "Lu 9 · Lu 1 · Ma 36 · Bl 13" },

      { name: "Lungen-Yin-Mangel", han: "肺陰虛", pinyin: "fèi yīn xū",
        zeichen: "Trockener Reizhusten ohne Auswurf oder mit wenig zähem Schleim, trockener Hals, " +
                 "Heiserkeit bis Stimmverlust, Nachtschweiß, Hitze in den fünf Herzen, am " +
                 "Nachmittag gerötete Wangen.",
        punkte: "Lu 9 · Lu 5 · Ni 6 · Bl 13" },

      { name: "Wind-Kälte fesselt die Lunge", han: "風寒束肺", pinyin: "fēng hán shù fèi",
        zeichen: "Plötzlich einsetzender Husten mit dünnem weißem Schleim, klarer Nasenfluss, " +
                 "Frösteln, das sich durch Wärme bessert, kein Schweiß, steifer Nacken, " +
                 "Kopfschmerz im Hinterkopf.",
        punkte: "Lu 7 · Di 4 · Bl 12 · Gb 20" },

      { name: "Wind-Hitze greift die Lunge an", han: "風熱犯肺", pinyin: "fēng rè fàn fèi",
        zeichen: "Halsschmerz, gelblicher zäher Schleim, Fieber mit nur wenig Frösteln, Durst, " +
                 "geschwollene Mandeln, trockene Nase.",
        punkte: "Lu 11 · Lu 10 · Di 4 · Di 11" },

      { name: "Schleim-Feuchtigkeit blockiert die Lunge", han: "痰濕阻肺", pinyin: "tán shī zǔ fèi",
        zeichen: "Reichlich weißer, leicht zu lösender Schleim, Engegefühl in der Brust, " +
                 "rasselnde Atmung, Schweregefühl im Körper, verschlimmert durch " +
                 "Milchprodukte und Süßes.",
        punkte: "Lu 5 · Ma 40 · Ren 17 · Mi 3" }
    ],
    hinweis: "Die Muster beschreiben die klassische Syndromlehre und dienen dem Unterricht. " +
             "Sie ersetzen weder Diagnose noch ärztliche Abklärung."
  },

  points: [
    { n:1, pinyin:"Zhōngfǔ", han:"中府", de:"Zentrale Sammelstelle", en:"Central Treasury",
      x:330, y:267, key:true, role:"MU",
      tags:["Mu-Punkt der Lunge","Treffpunkt mit dem Milz-Meridian"],
      loc:"1. Zwischenrippenraum, 6 Cun lateral der Mittellinie, 1 Cun unterhalb von Lu 2.",
      ind:"Husten, Asthma, Engegefühl und Schmerz in der Brust, Schulterschmerz, Fülle-Hitze in der Lunge.",
      nd:"Schräg oder tangential nach lateral, 0,5–0,8 Cun. Nicht senkrecht tief – Pleuragefahr." },

    { n:2, pinyin:"Yúnmén", han:"雲門", de:"Wolkentor", en:"Cloud Gate",
      x:326, y:249, key:false, role:"",
      tags:["Fensterpunkt des Himmels"],
      loc:"Infraklavikuläre Grube unterhalb des Schlüsselbeins, 6 Cun lateral der Mittellinie, im Sulcus deltoideopectoralis.",
      ind:"Husten, Kurzatmigkeit, Enge in der Brust, Schmerz in Schulter und Oberarm.",
      nd:"Schräg nach lateral, 0,5–0,8 Cun. Keine tiefe senkrechte Nadelung." },

    { n:3, pinyin:"Tiānfǔ", han:"天府", de:"Himmelspalast", en:"Palace of Heaven",
      x:289, y:365, key:false, role:"",
      tags:["Fensterpunkt des Himmels"],
      loc:"3 Cun unterhalb der vorderen Achselfalte, radial des M. biceps brachii.",
      ind:"Asthma, Nasenbluten, Schmerz an der Oberarminnenseite, innere Unruhe, Benommenheit.",
      nd:"Senkrecht 0,5–1 Cun." },

    { n:4, pinyin:"Xiábái", han:"俠白", de:"Weiß umfassend", en:"Guarding White",
      x:285, y:374, key:false, role:"", tags:[],
      loc:"4 Cun unterhalb der vorderen Achselfalte bzw. 5 Cun oberhalb der Ellenbeugefalte, radial des Bizeps.",
      ind:"Husten, Kurzatmigkeit, Enge in der Brust, Herzbeschwerden, Schmerz an der Oberarminnenseite.",
      nd:"Senkrecht 0,5–1 Cun." },

    { n:5, pinyin:"Chǐzé", han:"尺澤", de:"Sumpf der Ellenbeuge", en:"Cubit Marsh",
      x:260, y:417, key:true, role:"HO · SED",
      antik:"ho", wx:"wasser",
      tags:["Ho / He – Meerpunkt","Sedierungspunkt"],
      loc:"In der Ellenbogenbeuge, in einer Vertiefung lateral der großen Sehne (M. biceps brachii) – nicht direkt neben der Sehne, etwas lateraler.",
      ind:"Akuter Husten, Hitze und Schleim in der Lunge, Asthma, Halsschmerz, Tennisellenbogen, akute Rückenschmerzen.",
      nd:"Senkrecht 0,8–1,2 Cun; bei akuter Hitze Mikroaderlass. Achtung: Cubitalvene!" },

    { n:6, pinyin:"Kǒngzuì", han:"孔最", de:"Versammlungshöhle", en:"Collection Hole",
      x:241, y:465, key:false, role:"XI",
      tags:["Xi-Cleft – Akkumulationspunkt","Akutpunkt"],
      loc:"7 Cun proximal von Lu 9, auf der Linie zwischen Lu 5 und Lu 9.",
      ind:"Akuter Asthmaanfall, Bluthusten, Heiserkeit, fehlende Schweißbildung bei Fieber, Hämorrhoiden.",
      nd:"Senkrecht 0,5–1 Cun." },

    { n:7, pinyin:"Lièquē", han:"列缺", de:"Engpass, extremer Mangel", en:"Broken Sequence",
      x:210, y:514, key:true, role:"LUO",
      tags:["Luo-Punkt – Verbindungspunkt","zieht zum Yuan-Punkt Di 4","Öffnungspunkt Ren Mai","Kommandopunkt Kopf/Nacken"],
      loc:"1,5 Cun proximal von Lu 9 bzw. der Handgelenksspalte, in der Rinne über dem Proc. styloideus radii. Tastprobe: an der Spitze des Zeigefingers, wenn die Gabelungen von Daumen und Zeigefinger ineinandergelegt werden.",
      ind:"Erkältung mit Wind-Kälte, Kopfschmerz, Nackensteife, Husten, Gesichtslähmung, Handgelenkschmerz.",
      nd:"Schräg nach proximal, 0,3–0,5 Cun." },

    { n:8, pinyin:"Jīngqú", han:"經渠", de:"Entwässerungsgraben", en:"Channel Ditch",
      x:208, y:519, key:false, role:"KING · BEN",
      antik:"king", wx:"metall",
      tags:["King / Jing – Strom-/Flusspunkt","Ben-Punkt"],
      loc:"1 Cun proximal von Lu 9, an der Innenseite des Proc. styloideus, lateral der A. radialis, medial zur dort verlaufenden Sehne.",
      ind:"Husten, Asthma, Halsschmerz, Fieber ohne Schweiß, Schmerz im Handgelenk.",
      nd:"Senkrecht 0,2–0,3 Cun, an der Arterie vorbei. Klassisch nicht moxibustieren." },

    { n:9, pinyin:"Tàiyuān", han:"太淵", de:"Tiefster, großer Wasserstrudel", en:"Great Abyss",
      x:201, y:528, key:true, role:"YU · YUAN · TON",
      antik:"yu", wx:"erde",
      tags:["Yu / Shu – größerer Flusspunkt","Yuan-Punkt","Tonisierungspunkt","Hui-Punkt der Gefäße"],
      loc:"In der am radialen Ende der Handgelenksspalte liegenden Furche, radial der Cun-Pulsstelle, lateral der A. radialis und medial zur dort verlaufenden Sehne.",
      ind:"Lungen-Qi-Schwäche, chronischer Husten, Kurzatmigkeit, schwache Stimme, Gefäß- und Pulsstörungen.",
      nd:"Senkrecht 0,2–0,3 Cun, Arterie meiden." },

    { n:10, pinyin:"Yújì", han:"魚際", de:"Fischbauchgrenze", en:"Fish Border",
      x:174, y:539, key:false, role:"YONG",
      antik:"yong", wx:"feuer",
      tags:["Yong / Ying – kleiner Flusspunkt"],
      loc:"Auf dem Daumenballen in der Mitte des ersten Metakarpale, an der Grenze zwischen weißem und rotem Fleisch.",
      ind:"Halsschmerz, Heiserkeit, Stimmverlust, Hitze in der Lunge, Fieber, trockener Husten.",
      nd:"Senkrecht 0,5–0,8 Cun." },

    { n:11, pinyin:"Shàoshāng", han:"少商", de:"Junges Shang, spärliches Metall", en:"Lesser Shang",
      x:147, y:556, key:true, role:"TING",
      antik:"ting", wx:"holz",
      tags:["Ting / Jing – Brunnen-/Quellpunkt","Wiederbelebungspunkt"],
      loc:"An der radialen, medialen Seite des Daumens, ein Fen (0,1 Cun) proximal des Nagelfalzwinkels.",
      ind:"Akuter Halsschmerz, hohes Fieber, Bewusstlosigkeit, Krampfanfall, Mandelentzündung.",
      nd:"Schräg 0,1 Cun oder Mikroaderlass mit der Dreikantnadel." }
  ]
});
