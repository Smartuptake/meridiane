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
         "Er beginnt an LU 1 auf dem Brustkorb, steigt kurz zu LU 2 auf und läuft dann " +
         "zentrifugal über die radiale Vorderseite von Oberarm, Unterarm und Daumen bis zum " +
         "Nagelfalz an LU 11, wo er in den Dickdarmmeridian übergeht.",

  cun: { achselfalte: [301, 337], ellenbeuge: [260, 417], handgelenk: [201, 528],
         hinweis: "Achselfalte→Ellenbeuge = 9 Cun, Ellenbeuge→Handgelenksfalte = 12 Cun" },

  path: [[330,267],[326,249],[313,278],[307,308],[301,337],
         [289,365],[285,374],[271,395],[260,417],[251,440],
         [241,465],[227,490],[210,514],[208,519],[201,528],
         [187,533],[174,539],[160,548],[147,556]],

  inner: "M442,396 C452,428 452,452 441,462 C430,450 432,424 434,398 " +
         "C426,352 418,318 424,278 C430,246 438,228 446,218 " +
         "C428,226 394,236 352,252 L332,265",
  branches: [{ label: "Luo-Ast zu LI", d: "M210,514 C205,545 197,572 182,590 L152,612" }],

  points: [
    { n:1, pinyin:"Zhōngfǔ", han:"中府", de:"Zentrale Sammelstelle",
      x:330, y:267, key:true, role:"MU",
      tags:["Mu-Punkt der Lunge","Treffpunkt mit dem Milz-Meridian"],
      loc:"1. Zwischenrippenraum, 6 Cun lateral der Mittellinie, 1 Cun unterhalb von LU 2.",
      ind:"Husten, Asthma, Engegefühl und Schmerz in der Brust, Schulterschmerz, Fülle-Hitze in der Lunge.",
      nd:"Schräg oder tangential nach lateral, 0,5–0,8 Cun. Nicht senkrecht tief – Pleuragefahr." },

    { n:2, pinyin:"Yúnmén", han:"雲門", de:"Wolkentor",
      x:326, y:249, key:false, role:"",
      tags:["Fensterpunkt des Himmels"],
      loc:"Infraklavikuläre Grube unterhalb des Schlüsselbeins, 6 Cun lateral der Mittellinie, im Sulcus deltoideopectoralis.",
      ind:"Husten, Kurzatmigkeit, Enge in der Brust, Schmerz in Schulter und Oberarm.",
      nd:"Schräg nach lateral, 0,5–0,8 Cun. Keine tiefe senkrechte Nadelung." },

    { n:3, pinyin:"Tiānfǔ", han:"天府", de:"Himmelspalast",
      x:289, y:365, key:false, role:"",
      tags:["Fensterpunkt des Himmels"],
      loc:"3 Cun unterhalb der vorderen Achselfalte, radial des M. biceps brachii.",
      ind:"Asthma, Nasenbluten, Schmerz an der Oberarminnenseite, innere Unruhe, Benommenheit.",
      nd:"Senkrecht 0,5–1 Cun." },

    { n:4, pinyin:"Xiábái", han:"俠白", de:"Weiß umfassend",
      x:285, y:374, key:false, role:"", tags:[],
      loc:"4 Cun unterhalb der vorderen Achselfalte bzw. 5 Cun oberhalb der Ellenbeugefalte, radial des Bizeps.",
      ind:"Husten, Kurzatmigkeit, Enge in der Brust, Herzbeschwerden, Schmerz an der Oberarminnenseite.",
      nd:"Senkrecht 0,5–1 Cun." },

    { n:5, pinyin:"Chǐzé", han:"尺澤", de:"Sumpf der Ellenbeuge",
      x:260, y:417, key:true, role:"HO · SED",
      antik:"ho", wx:"wasser",
      tags:["Ho / He – Meerpunkt","Wasserpunkt","Sedierungspunkt"],
      loc:"In der Ellenbogenbeuge, in einer Vertiefung lateral der großen Sehne (M. biceps brachii) – nicht direkt neben der Sehne, etwas lateraler.",
      ind:"Akuter Husten, Hitze und Schleim in der Lunge, Asthma, Halsschmerz, Tennisellenbogen, akute Rückenschmerzen.",
      nd:"Senkrecht 0,8–1,2 Cun; bei akuter Hitze Mikroaderlass. Achtung: Cubitalvene!" },

    { n:6, pinyin:"Kǒngzuì", han:"孔最", de:"Versammlungshöhle",
      x:241, y:465, key:false, role:"XI",
      tags:["Xi-Cleft – Akkumulationspunkt","Akutpunkt"],
      loc:"7 Cun proximal von LU 9, auf der Linie zwischen LU 5 und LU 9.",
      ind:"Akuter Asthmaanfall, Bluthusten, Heiserkeit, fehlende Schweißbildung bei Fieber, Hämorrhoiden.",
      nd:"Senkrecht 0,5–1 Cun." },

    { n:7, pinyin:"Lièquē", han:"列缺", de:"Engpass, extremer Mangel",
      x:210, y:514, key:true, role:"LUO",
      tags:["Luo-Punkt – Verbindungspunkt","zieht zum Yuan-Punkt LI 4","Öffnungspunkt Ren Mai","Kommandopunkt Kopf/Nacken"],
      loc:"1,5 Cun proximal von LU 9 bzw. der Handgelenksspalte, proximal des Proc. styloideus radii. Tastprobe: an der Spitze des Zeigefingers, wenn die Gabelungen von Daumen und Zeigefinger ineinandergelegt werden.",
      ind:"Erkältung mit Wind-Kälte, Kopfschmerz, Nackensteife, Husten, Gesichtslähmung, Handgelenkschmerz.",
      nd:"Schräg nach proximal, 0,3–0,5 Cun." },

    { n:8, pinyin:"Jīngqú", han:"經渠", de:"Entwässerungsgraben",
      x:208, y:519, key:false, role:"KING · BEN",
      antik:"king", wx:"metall",
      tags:["King / Jing – Strom-/Flusspunkt","Metallpunkt","Ben-Punkt"],
      loc:"1 Cun proximal von LU 9, an der Innenseite des Proc. styloideus, lateral der A. radialis, medial zur dort verlaufenden Sehne.",
      ind:"Husten, Asthma, Halsschmerz, Fieber ohne Schweiß, Schmerz im Handgelenk.",
      nd:"Senkrecht 0,2–0,3 Cun, an der Arterie vorbei. Klassisch nicht moxibustieren." },

    { n:9, pinyin:"Tàiyuān", han:"太淵", de:"Tiefster, großer Wasserstrudel",
      x:201, y:528, key:true, role:"YU · YUAN · TON",
      antik:"yu", wx:"erde",
      tags:["Yu / Shu – größerer Flusspunkt","Yuan-Punkt","Erdpunkt","Tonisierungspunkt","Hui-Punkt der Gefäße"],
      loc:"In der am radialen Ende der Handgelenksspalte liegenden Furche, radial der Cun-Pulsstelle, lateral der A. radialis und medial zur dort verlaufenden Sehne.",
      ind:"Lungen-Qi-Schwäche, chronischer Husten, Kurzatmigkeit, schwache Stimme, Gefäß- und Pulsstörungen.",
      nd:"Senkrecht 0,2–0,3 Cun, Arterie meiden." },

    { n:10, pinyin:"Yújì", han:"魚際", de:"Fischbauchgrenze",
      x:174, y:539, key:false, role:"YONG",
      antik:"yong", wx:"feuer",
      tags:["Yong / Ying – kleiner Flusspunkt","Feuerpunkt"],
      loc:"Auf dem Daumenballen in der Mitte des ersten Metakarpale, an der Grenze zwischen weißem und rotem Fleisch.",
      ind:"Halsschmerz, Heiserkeit, Stimmverlust, Hitze in der Lunge, Fieber, trockener Husten.",
      nd:"Senkrecht 0,5–0,8 Cun." },

    { n:11, pinyin:"Shàoshāng", han:"少商", de:"Junges Shang, spärliches Metall",
      x:147, y:556, key:true, role:"TING",
      antik:"ting", wx:"holz",
      tags:["Ting / Jing – Brunnen-/Quellpunkt","Holzpunkt","Wiederbelebungspunkt"],
      loc:"An der radialen, medialen Seite des Daumens, ein Fen (0,1 Cun) proximal des Nagelfalzwinkels.",
      ind:"Akuter Halsschmerz, hohes Fieber, Bewusstlosigkeit, Krampfanfall, Mandelentzündung.",
      nd:"Schräg 0,1 Cun oder Mikroaderlass mit der Dreikantnadel." }
  ]
});
