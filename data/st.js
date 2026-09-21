/* Magenmeridian – Fuß-Yangming – 足阳明胃经
   Punktlagen kalibriert auf img/front.png (880 × 1168).
   Am 21.09.2026 nachgemessen: y 998 ist die schmalste Stelle des Knöchels, nicht
   die Spitze des Außenknöchels. Die liegt bei y≈1050, der Kniegelenksspalt bei
   y≈827. 16 Cun = 223 px, also 13,9 px je Cun am Unterschenkel. */
Meridian.register({
  id: "st", code: "ST", codeDe: "Ma", ord: 3,
  name: "Magen", titel: "Magenmeridian", nameHan: "胃经",
  channel: "Fuß-Yangming", channelHan: "足阳明",
  element: "Erde", elementHan: "土", wx: "erde",
  yin: false, coupled: "sp", coupledName: "Milz",
  clock: "07 – 09 Uhr", pointCount: 45, direction: "Kopf → Fuß",
  view: "front", mirror: true,

  intro: "Der Fuß-Yangming-Meridian des Magens ist der längste Verlauf auf der Vorderseite. " +
         "Er beginnt an Ma 1 unter der Pupille, läuft über Wange und Kieferwinkel – mit einem " +
         "aufsteigenden Ast zur Stirnecke –, senkt sich am Hals zur Schlüsselbeingrube, zieht " +
         "über die Brustwarzenlinie und zwei Cun neben dem Nabel abwärts, über die Vorderseite " +
         "des Oberschenkels und die Außenkante des Schienbeins bis zur zweiten Zehe an Ma 45. " +
         "Kein anderer Meridian berührt Gesicht, Rumpf und Bein zugleich.",

  cun: { knie: [354, 827], knoechel: [357, 1050],
         hinweis: "Kniegelenksspalt → Spitze des Außenknöchels = 16 Cun; Ma 36 liegt 3 Cun unter Ma 35" },

  path: [[419,103],[421,141],[415,152],[407,175],[398,195],[386,207],[371,215],[371,270],
         [371,313],[382,360],[396,400],[404,436],[404,480],[401,508],[389,560],[377,640],
         [367,700],[356,765],[354,827],[356,869],[357,910],[360,952],[366,1000],[371,1048],
         [365,1062],[355,1082],[349,1097],[351,1114]],

  inner: "M371,222 C398,282 418,336 428,386 C436,424 438,452 428,478 " +
         "C414,498 398,492 392,470",
  branches: [
    { label: "Aufsteigender Ast zur Stirnecke",
      d: "M416,150 C411,141 408,133 406,128 C403,122 401,119 401,114 C400,96 401,78 404,62" },
    { label: "Ast zu Ma 40", d: "M359,936 L345,936" }
  ],

  /* --- Das Organ --- */
  organ: {
    titel: "Der Magen in der chinesischen Medizin",
    pinyin: "Wèi", han: "胃", wx: "erde",
    text: [
      "Der Magen heißt das Meer der Nahrung und der Flüssigkeiten. Alles, was der Körper an " +
      "Qi und Blut aus der Nahrung gewinnt, geht zuerst durch ihn. Er nimmt auf und lässt " +
      "reifen; die Milz trennt daraus das Klare heraus und schickt es nach oben.",

      "Magen und Milz bilden zusammen die Mitte und heißen die nachgeburtliche Wurzel: was " +
      "wir an Kraft nicht von den Eltern mitbekommen haben, muss hier täglich neu erzeugt " +
      "werden. Deshalb prüft die chinesische Medizin bei jeder Schwäche zuerst die Mitte.",

      "Die beiden arbeiten gegenläufig und ergänzen sich darin. Der Magen senkt das Trübe ab, " +
      "die Milz hebt das Klare empor. Kehrt sich das Absenken um, entstehen Aufstoßen, " +
      "Übelkeit, Erbrechen und Schluckauf. Auch die Vorlieben sind gegenläufig: der Magen mag " +
      "Feuchtigkeit und scheut Trockenheit, die Milz mag Trockenheit und scheut Feuchtigkeit."
    ],

    aufgabenTitel: "Die Aufgaben des Magens",
    aufgaben: [
      { titel: "Er nimmt auf und lässt reifen", han: "受纳腐熟",
        text: "Der Magen empfängt Speise und Trank und bringt sie in einen Zustand, aus dem " +
              "die Milz das Klare gewinnen kann. Die Bilder der Klassiker sind handfest: ein " +
              "Kessel, in dem etwas gart. Fehlt diese Kraft, bleibt das Essen liegen – " +
              "Völlegefühl, Aufstoßen, kein Appetit." },
      { titel: "Er senkt das Trübe ab", han: "主降浊",
        text: "Was nicht mehr gebraucht wird, gibt der Magen nach unten an den Dünndarm weiter. " +
              "Diese Richtung ist entscheidend. Kehrt sie sich um, steigt das Magen-Qi " +
              "gegenläufig auf: Übelkeit, Erbrechen, Schluckauf, saures Aufstoßen. Fast alle " +
              "Magenpunkte wirken absenkend." },
      { titel: "Er ist die Quelle der Säfte", han: "胃主津液",
        text: "Aus dem Magen stammen die Flüssigkeiten, die Mund, Rachen und die Schleimhäute " +
              "feucht halten. Er mag Feuchtigkeit und scheut Trockenheit. Trocknet er aus, " +
              "entsteht ein eigentümliches Bild: Hunger ohne Appetit, trockener Mund, aber nur " +
              "Verlangen nach kleinen Schlucken." },
      { titel: "Mit der Milz bildet er die Mitte", han: "后天之本",
        text: "Die nachgeburtliche Wurzel. Was die Eltern an Essenz mitgegeben haben, lässt " +
              "sich nicht vermehren – was täglich aus Nahrung und Atem entsteht, schon. " +
              "Deshalb gilt: solange die Mitte arbeitet, ist Behandlung möglich. Ma 36 ist " +
              "dafür der meistgenutzte Punkt des ganzen Systems." }
    ],

    zustaendeTitel: "Mangel und Fülle von Yin und Yang",
    zustaendeHinweis: "Mangel (Xū 虚) heißt: etwas fehlt. Fülle (Shí 实) heißt: etwas ist zu " +
                      "viel da und blockiert. Beim Magen geht es um Säfte und um Wärme – und " +
                      "fast immer zugleich um die Richtung: senkt er noch ab, oder steigt " +
                      "sein Qi gegenläufig auf?",
    zustaende: [
      { feld: "Yin-Mangel", en: "Stomach Yin Deficiency", han: "胃阴虚", pinyin: "wèi yīn xū",
        kurz: "Es fehlen die Säfte. Der Magen trocknet aus.",
        zeichen: "Hunger ohne Appetit, trockener Mund mit Verlangen nach kleinen Schlucken, " +
                 "trockenes Würgen oder Schluckauf ohne Auswurf, brennendes Gefühl im " +
                 "Oberbauch, trockener Stuhl. Häufig nach fieberhaften Erkrankungen oder nach " +
                 "langem unregelmäßigem Essen.",
        zunge: "rot, in der Mitte belaglos oder rissig, trocken",
        puls: "dünn und schnell",
        punkte: "Ma 36 · Ren 12 · Mi 6 · Ni 3 · Bl 21" },

      { feld: "Yang-Mangel", en: "Stomach Cold Deficiency", han: "胃虚寒", pinyin: "wèi xū hán",
        kurz: "Es fehlt Wärme. Der Kessel steht kalt.",
        zeichen: "Dumpfer Schmerz im Oberbauch, der sich durch Wärme und Druck bessert, " +
                 "Erbrechen klarer dünner Flüssigkeit, wenig Appetit, Müdigkeit nach dem " +
                 "Essen, kalte Hände und Füße, Verschlimmerung durch kalte Speisen.",
        zunge: "blass, feucht, dünner weißer Belag",
        puls: "tief, langsam, schwach",
        punkte: "Ren 12 mit Moxa · Ma 36 · Bl 21 · Mi 4" },

      { feld: "Yin-Fülle", en: "Cold or Food Stagnation in the Stomach", han: "寒凝食滞", pinyin: "hán níng shí zhì",
        kurz: "Kälte oder liegengebliebene Nahrung blockieren den Magen.",
        zeichen: "Plötzlicher, heftiger Schmerz im Oberbauch nach kalter oder zu reichlicher " +
                 "Mahlzeit, Völlegefühl und Spannung, übelriechendes Aufstoßen, Erbrechen von " +
                 "Unverdautem, danach Erleichterung, Widerwille gegen Essen.",
        zunge: "dicker, klebriger weißer Belag",
        puls: "gespannt bei Kälte, schlüpfrig bei Nahrungsstau",
        punkte: "Ren 12 · Ren 10 · Ma 36 · Ma 44 · Mi 4" },

      { feld: "Yang-Fülle", en: "Stomach Fire", han: "胃火", pinyin: "wèi huǒ",
        kurz: "Hitze staut sich im Magen und drängt nach oben.",
        zeichen: "Brennender Schmerz im Oberbauch, starker Hunger kurz nach dem Essen, " +
                 "Mundgeruch, geschwollenes oder blutendes Zahnfleisch, Durst auf Kaltes, " +
                 "trockener Stuhl, saures Aufstoßen, Aphthen im Mund.",
        zunge: "rot, gelber trockener Belag, besonders in der Mitte",
        puls: "schnell und voll",
        punkte: "Ma 44 · Ma 45 · Di 11 · Ren 12 · Ma 21" }
    ],

    aeussereTitel: "Wo der Meridian selbst betroffen ist",
    aeussere: [
      { name: "Wind im Gesichtsverlauf", han: "面风", pinyin: "miàn fēng",
        zeichen: "Gesichtslähmung, herabhängender Mundwinkel, Zahnschmerz im Oberkiefer, " +
                 "Kieferklemme, Schmerz im Kiefergelenk. Der Meridian läuft über Wange, " +
                 "Kieferwinkel und Stirnecke und trägt diese Beschwerden.",
        punkte: "Ma 4 · Ma 6 · Ma 7 · Di 4" },
      { name: "Blockade im Beinverlauf", han: "经络不通", pinyin: "jīng luò bù tōng",
        zeichen: "Knieschmerz vorn und seitlich, Schwäche im Bein bis zum Nachziehen des " +
                 "Fußes, Schmerz entlang der Schienbeinkante, Kälte oder Taubheit am " +
                 "Fußrücken.",
        punkte: "Ma 35 · Ma 36 · Ma 41 · Mi 9" }
    ],

    nahrungTitel: "Was den Magen stärkt und was ihm schadet",
    nahrung: {
      staerkt: [
        { was: "Warmes Frühstück zwischen sieben und neun Uhr", warum: "die Maximalzeit des Magens, die einfachste Pflege überhaupt" },
        { was: "Reis-Congee und Hirsebrei", warum: "gekocht, weich, warm – der Magen muss nichts mehr leisten" },
        { was: "Kürbis, Karotte, Süßkartoffel", warum: "süß und neutral, bauen die Mitte auf" },
        { was: "Fenchel, Kümmel, Anis", warum: "lösen Spannung und Blähungen nach dem Essen" },
        { was: "Gedünstetes Obst statt rohem", warum: "die Süße bleibt, die Kälte geht" },
        { was: "Ingwer in kleinen Mengen", warum: "wärmt den Magen und stoppt Übelkeit" },
        { was: "Suppen und Eintöpfe", warum: "führen Flüssigkeit und Wärme zugleich zu" },
        { was: "Regelmäßige Zeiten, in Ruhe essen", warum: "der Magen lebt vom Rhythmus mehr als von der Auswahl" }
      ],
      schadet: [
        { was: "Eisgekühlte Getränke und Speisen", warum: "löschen das Feuer unter dem Kessel" },
        { was: "Große Mengen Rohkost", warum: "kostet den Magen die Wärme, die zum Aufschließen nötig wäre" },
        { was: "Spätes, schweres Abendessen", warum: "die Minimalzeit des Magens liegt am Abend, er arbeitet dann schlecht" },
        { was: "Kaffee auf leeren Magen", warum: "erzeugt Hitze und Trockenheit ohne Grundlage" },
        { was: "Sehr Scharfes, Frittiertes, Alkohol", warum: "die geradesten Wege zum Magen-Feuer" },
        { was: "Essen im Stehen, unter Zeitdruck, im Streit", warum: "die Mitte braucht Sammlung; Ärger blockiert sie über die Leber" }
      ],
      hinweis: "Der Magen mag Feuchtigkeit und scheut Trockenheit, die Milz genau umgekehrt. " +
               "Deshalb lässt sich die Mitte selten mit einem einzigen Rat behandeln – es geht " +
               "immer darum, welcher der beiden gerade im Vordergrund steht."
    },

    eigenschaften: [
      { k: "Wandlungsphase", v: "Erde 土" },
      { k: "Jahreszeit", v: "Spätsommer und die Übergänge" },
      { k: "Klima", v: "Feuchtigkeit" },
      { k: "Geschmack", v: "süß" },
      { k: "Farbe", v: "gelb" },
      { k: "Sinnesorgan", v: "Mund und Lippen" },
      { k: "Gewebe", v: "Muskeln und Fleisch" },
      { k: "Emotion", v: "Grübeln, Sorge" },
      { k: "Organart", v: "Fu-Organ, Hohlorgan" },
      { k: "Gekoppelt", v: "Milz" }
    ],

    hinweis: "Die Muster beschreiben die klassische Syndromlehre und dienen dem Unterricht. " +
             "Sie ersetzen weder Diagnose noch ärztliche Abklärung."
  },

  points: [
    { n:1, pinyin:"Chéngqì", han:"承泣", de:"Tränen empfangen", en:"Container of Tears",
      x:419, y:103, key:true, role:"",
      tags:["Anfangspunkt des Meridians","Treffpunkt mit Ren Mai und Yangqiao Mai"],
      wirkung:["Anfangspunkt der Magen-Leitbahn", "Treffpunkt mit Ren Mai und Yangqiao Mai", "", "Klärt Hitze aus den Augen", "Vertreibt Wind aus dem Gesicht", "Macht die Augen hell"],
      loc:"Zwischen Augapfel und unterem Orbitarand, senkrecht unter der Pupille bei geradeaus gerichtetem Blick.",
      ind:"Augenerkrankungen, tränende oder gerötete Augen, Lidzucken, Kurzsichtigkeit, Gesichtslähmung.",
      nd:"Senkrecht 0,5–1 Cun, den Augapfel sanft nach oben schieben, langsam und ohne zu drehen. Nicht moxibustieren." },

    { n:4, pinyin:"Dìcāng", han:"地仓", de:"Erdspeicher", en:"Earth Granary",
      x:421, y:141, key:false, role:"",
      tags:["Treffpunkt mit Di und Yangqiao Mai"],
      wirkung:["Treffpunkt mit Dickdarm und Yangqiao Mai", "", "Vertreibt Wind aus dem Gesicht", "Öffnet die Leitbahn um den Mund", "Der Hauptpunkt beim hängenden Mundwinkel"],
      loc:"0,4 Cun lateral des Mundwinkels, senkrecht unter der Pupille.",
      ind:"Gesichtslähmung, herabhängender Mundwinkel, Speichelfluss, Zahnschmerz, Sprechstörung.",
      nd:"Tangential Richtung Ma 6, 0,5–1,5 Cun." },

    { n:6, pinyin:"Jiáchē", han:"颊车", de:"Wangenwagen", en:"Jaw Bone",
      x:406, y:128, key:false, role:"",
      tags:[],
      wirkung:["Lokalpunkt auf dem Kaumuskel", "", "Vertreibt Wind und öffnet den Kiefer", "Löst die Leitbahn an Wange und Unterkiefer", "Lindert Zahnschmerz im Unterkiefer"],
      loc:"Ein Querfinger anterior und superior des Kieferwinkels, auf dem Muskelbauch des M. masseter, der beim Zusammenbeißen hervortritt.",
      ind:"Kieferklemme, Zahnschmerz im Unterkiefer, Gesichtslähmung, Schwellung der Wange, Mumps.",
      nd:"Senkrecht 0,3–0,5 Cun oder tangential Richtung Ma 4." },

    { n:8, pinyin:"Tóuwéi", han:"头维", de:"Kopfecke", en:"Head's Binding",
      x:404, y:62, key:false, role:"",
      tags:["Treffpunkt mit Gb und Yangwei Mai"],
      wirkung:["Treffpunkt mit Gallenblase und Yangwei Mai", "", "Vertreibt Wind und klärt den Kopf", "Lindert Kopfschmerz an Stirn und Schläfe", "Beruhigt tränende Augen bei Wind"],
      loc:"In der Ecke des Stirnhaaransatzes, 4,5 Cun lateral der Mittellinie.",
      ind:"Kopfschmerz an der Stirn und an der Schläfe, Schwindel, Augenschmerz, tränende Augen bei Wind.",
      nd:"Tangential 0,5–1 Cun. Nicht moxibustieren." },

    { n:12, pinyin:"Quēpén", han:"缺盆", de:"Leere Schale", en:"Empty Basin",
      x:371, y:215, key:false, role:"",
      tags:["Treffpunkt mehrerer Yang-Meridiane"],
      wirkung:["Treffpunkt mehrerer Yang-Leitbahnen", "", "Senkt gegenläufig aufsteigendes Qi ab", "Öffnet die Brust und stillt Husten", "Löst die Leitbahn an Hals und Schulter"],
      loc:"In der Mitte der Fossa supraclavicularis, 4 Cun lateral der vorderen Mittellinie, über dem Schlüsselbein.",
      ind:"Husten, Asthma, Enge in der Brust, Halsschmerz, Schmerz in der Schulter.",
      nd:"Senkrecht 0,3–0,5 Cun. Nicht tief – Pleuragefahr. In der Schwangerschaft meiden." },

    { n:25, pinyin:"Tiānshū", han:"天枢", de:"Himmelsangel", en:"Celestial Pivot",
      x:404, y:436, key:true, role:"MU",
      tags:["Mu-Punkt des Dickdarms","Angelpunkt zwischen oben und unten"],
      wirkung:["Mu-Punkt des Dickdarms", "Angelpunkt zwischen oben und unten", "", "Reguliert Magen und Darm in beide Richtungen", "Löst Nahrungsstau und Feuchtigkeit", "Ordnet das Qi im Unterbauch"],
      loc:"2 Cun lateral der Mitte des Nabels.",
      ind:"Durchfall und Verstopfung gleichermaßen, Bauchschmerz, Blähungen, unregelmäßige Regel, Verdauungsstörungen aller Art.",
      nd:"Senkrecht 1–1,5 Cun. In der Schwangerschaft meiden." },

    { n:34, pinyin:"Liángqiū", han:"梁丘", de:"Kuppe des Hügels", en:"Ridge Mound",
      x:356, y:765, key:false, role:"XI",
      tags:["Xi-Cleft – Akkumulationspunkt","Akutpunkt"],
      wirkung:["Xi-Cleft – Akkumulationspunkt", "", "Akutpunkt bei plötzlichem Magenschmerz", "Senkt gegenläufiges Magen-Qi ab", "Öffnet die Leitbahn am Knie"],
      loc:"2 Cun proximal des seitlichen Oberrandes der Patella, 4 Cun oberhalb des Kniegelenksspalts, direkt oberhalb von Ma 35.",
      ind:"Akuter Magenschmerz, akuter Knieschmerz, Schwellung der Brust, Durchfall.",
      nd:"Senkrecht 1–1,5 Cun." },

    { n:35, pinyin:"Dúbí", han:"犊鼻", de:"Kalbsschnauze", en:"Calf's Nose",
      x:354, y:827, key:false, role:"",
      tags:["laterales Knieauge"],
      wirkung:["Lokalpunkt am Knie – das laterale Knieauge", "", "Vertreibt Wind, Kälte und Feuchtigkeit aus dem Knie", "Löst Schwellung und Steife", "Öffnet die Leitbahn im Bein"],
      loc:"Bei gebeugtem Knie unmittelbar unterhalb der Patella, seitlich der Patellasehne, im lateralen Knieauge.",
      ind:"Knieschmerz und Kniesteife, Schwellung des Knies, Schwäche im Bein.",
      nd:"Schräg nach medial-hinten, 0,5–1,2 Cun." },

    { n:36, pinyin:"Zúsānlǐ", han:"足三里", de:"Dritter Weiler am Fuß", en:"Leg Three Li",
      x:356, y:869, key:true, role:"HO · BEN",
      antik:"ho", wx:"erde",
      tags:["Ho / He – Meerpunkt","Ben-Punkt","Kommandopunkt Bauch","stärkt Qi und Blut"],
      wirkung:["Ho / He – Meerpunkt", "Erdpunkt der Magen-Leitbahn", "Ben-Punkt", "Kommandopunkt für den Bauch", "", "Stärkt Magen und Milz", "Baut Qi und Blut auf", "Löst Feuchtigkeit und Schleim", "Senkt gegenläufiges Magen-Qi ab", "Stützt die Abwehr"],
      loc:"3 Cun unterhalb der lateralen Kniegelenksspalte, einen Finger breit lateral der Tibiakante.",
      ind:"Alle Beschwerden der Mitte, Erschöpfung, Immunschwäche, Magenschmerz, Übelkeit, Durchfall wie Verstopfung. Der meistgenutzte Punkt des Systems.",
      nd:"Senkrecht 1–2 Cun. Moxa ausdrücklich empfohlen." },

    { n:37, pinyin:"Shàngjùxū", han:"上巨虚", de:"Obere große Leere", en:"Upper Great Hollow",
      x:357, y:910, key:true, role:"",
      tags:["unterer He-Punkt des Dickdarms"],
      wirkung:["Unterer He-Punkt des Dickdarms", "", "Reguliert den Dickdarm", "Klärt Hitze und Feuchtigkeit aus dem Darm", "Löst Bauchschmerz und Durchfall"],
      loc:"3 Cun unterhalb von Ma 36, einen Finger breit lateral der Tibiakante.",
      ind:"Bauchschmerz, Durchfall, Verstopfung, Dysenterie – die Darmbeschwerden schlechthin.",
      nd:"Senkrecht 1–2 Cun." },

    { n:39, pinyin:"Xiàjùxū", han:"下巨虚", de:"Untere große Leere", en:"Lower Great Hollow",
      x:360, y:952, key:false, role:"",
      tags:["unterer He-Punkt des Dünndarms"],
      wirkung:["Unterer He-Punkt des Dünndarms", "", "Reguliert den Dünndarm", "Trennt das Klare vom Trüben", "Öffnet die Leitbahn im Bein"],
      loc:"1 Cun distal von Ma 38, 9 Cun unterhalb von Ma 35.",
      ind:"Unterbauchschmerz, Durchfall, Schmerz in der Brustseite, Schwäche und Schmerz im Bein.",
      nd:"Senkrecht 1–1,5 Cun." },

    { n:40, pinyin:"Fēnglóng", han:"丰隆", de:"Üppige Fülle", en:"Abundant Bulge",
      x:345, y:936, key:true, role:"LUO",
      tags:["Luo-Punkt – Verbindungspunkt","zieht zum Yuan-Punkt Mi 3","der Schleimpunkt"],
      wirkung:["Luo-Punkt – zieht zum Yuan-Punkt Mi 3", "", "Wandelt Schleim – der Schleimpunkt schlechthin", "Öffnet die Brust und stillt Husten", "Klärt Schleim, der den Geist umnebelt", "Beruhigt den Geist"],
      loc:"Genau in der Mitte zwischen Unterkante der Patella und der Spitze des Malleolus externus, 8 Cun unterhalb der Kniegelenksspalte, zwei Finger breit lateral der Tibiakante – einen Cun lateral von Ma 38.",
      ind:"Schleim in jeder Form: Husten mit Auswurf, Engegefühl, Benommenheit, Schwindel, auch Schleim, der den Geist umnebelt.",
      nd:"Senkrecht 1–1,5 Cun." },

    { n:41, pinyin:"Jiěxī", han:"解溪", de:"Befreiter Wasserlauf", en:"Ravine Divide",
      x:371, y:1048, key:true, role:"KING · TON",
      antik:"king", wx:"feuer",
      tags:["King / Jing – Strom-/Flusspunkt","Tonisierungspunkt"],
      wirkung:["King / Jing – Strom-/Flusspunkt", "Feuerpunkt der Magen-Leitbahn", "Tonisierungspunkt", "", "Klärt Hitze aus dem Magen", "Löst Schwellung im Sprunggelenk", "Beruhigt den Geist"],
      loc:"Am Fußrücken in der Mitte der Knöchelspalte, zwischen den Sehnen des M. extensor hallucis longus und des M. extensor digitorum longus – lateraler, als man vermutet.",
      ind:"Schwellung und Schmerz im Sprunggelenk, Fußheberschwäche, Kopfschmerz, Schwindel, Verstopfung.",
      nd:"Senkrecht 0,5–1 Cun." },

    { n:42, pinyin:"Chōngyáng", han:"冲阳", de:"Hauptstraße des Yang", en:"Surging Yang",
      x:365, y:1062, key:true, role:"YUAN",
      tags:["Yuan-Quellpunkt"],
      wirkung:["Yuan-Quellpunkt", "", "Stärkt Magen und Milz", "Öffnet die Leitbahn am Fußrücken", "Klärt Hitze aus dem Gesicht"],
      loc:"Am höchsten Punkt des Fußrückens, 1,5 Cun distal von Ma 41, auf der Linie zwischen Ma 41 und Ma 43. Der Puls der A. dorsalis pedis ist hier tastbar.",
      ind:"Schwäche und Schmerz am Fußrücken, Gesichtsschwellung, Zahnschmerz, Appetitlosigkeit, Magenschmerz.",
      nd:"Senkrecht 0,3–0,5 Cun, die Arterie beim Nadeln zur Seite schieben." },

    { n:43, pinyin:"Xiàngǔ", han:"陷谷", de:"Das eingebrochene Tal", en:"Sunken Valley",
      x:355, y:1082, key:false, role:"YU",
      antik:"yu", wx:"holz",
      tags:["Yu / Shu – größerer Flusspunkt"],
      wirkung:["Yu / Shu – Bachpunkt", "Holzpunkt der Magen-Leitbahn", "", "Leitet Feuchtigkeit aus und löst Ödeme", "Klärt Hitze aus dem Gesicht", "Öffnet die Leitbahn am Fuß"],
      loc:"In der Vertiefung zwischen dem zweiten und dritten Mittelfußknochen, proximal der Zehengrundgelenke.",
      ind:"Schwellung im Gesicht und am Fußrücken, Bauchschmerz mit Rumpeln, Ödeme.",
      nd:"Senkrecht 0,3–0,5 Cun." },

    { n:44, pinyin:"Nèitíng", han:"内庭", de:"Innere Vorhalle", en:"Inner Court",
      x:349, y:1097, key:true, role:"YONG",
      antik:"yong", wx:"wasser",
      tags:["Yong / Ying – kleiner Flusspunkt","kühlt Magen-Feuer"],
      wirkung:["Yong / Ying – kleiner Flusspunkt", "Wasserpunkt der Magen-Leitbahn", "", "Kühlt Magen-Feuer", "Klärt Hitze aus Zähnen, Mund und Kehle", "Senkt gegenläufiges Magen-Qi ab"],
      loc:"Zwischen zweiter und dritter Zehe, distal des Zehengrundgelenks, 0,5 Cun proximal der Grenze der Aponeurose.",
      ind:"Zahnschmerz im Oberkiefer, Mundgeruch, Nasenbluten, brennender Magenschmerz, Heißhunger, Halsschmerz.",
      nd:"Senkrecht oder schräg 0,3–0,5 Cun." },

    { n:45, pinyin:"Lìduì", han:"厉兑", de:"Unterdrückte Heiterkeit", en:"Severe Mouth",
      x:351, y:1114, key:true, role:"TING · SED",
      antik:"ting", wx:"metall",
      tags:["Ting / Jing – Brunnen-/Quellpunkt","Sedierungspunkt","klärt den Geist"],
      wirkung:["Ting / Jing – Brunnen-/Quellpunkt", "Metallpunkt der Magen-Leitbahn", "Sedierungspunkt", "", "Klärt Hitze und senkt das Yang ab", "Beruhigt den Geist bei Albträumen", "Belebt bei Bewusstlosigkeit"],
      loc:"An der lateralen, fibularen Seite der zweiten Zehe, ein Fen (0,1 Cun) proximal des Nagelfalzwinkels.",
      ind:"Albträume und unruhiger Schlaf, Gesichtsschwellung, Nasenbluten, Zahnschmerz, Fieber, Bewusstlosigkeit.",
      nd:"Schräg 0,1 Cun oder Mikroaderlass." }
  ]
});
