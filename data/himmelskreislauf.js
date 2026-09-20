/* Der kleine Himmelskreislauf – Xiao Zhoutian.
   Inhalt unverändert aus Himmelskreislauf-klein-Mantak-Chia-mit-Erklärungen.pdf.
   Punktlagen auf img/uebungen/himmelskreislauf-figur.jpg (Raster 746 × 1335),
   über die Silhouette der Figur gesetzt. Die Vorlage bezeichnet die Positionen
   selbst als schematisch projiziert. */
window.Himmelskreislauf = {
  titel: "Der kleine Himmelskreislauf",
  untertitel: "Xiao Zhoutian · Leitbahnen, Energiezentren und Akupunkturpunkte",
  namenszeile: "小周天 · xiǎo zhōu tiān | Xiao Zhoutian · Microcosmic Orbit",

  einleitung: "Hinten aufwärts, vorne abwärts: Im Übungsmodell verbindet die Zunge am " +
              "Gaumen das Lenkergefäß mit dem Konzeptionsgefäß. Die Knie- und Fußpunkte " +
              "ergänzen die Darstellung der Vorlage.",

  klammern: "In Klammern: traditionelle / vereinfachte Zeichen · Pinyin mit / ohne Töne · " +
            "englischer Name · Punktcode. Ein Sternchen verweist auf die Erläuterungen.",

  leseanleitung: [
    { zeichen: "kreis", text: "Kreis: benannter Akupunkturpunkt." },
    { zeichen: "quadrat", text: "Quadrat: Energiezentrum oder Zuordnung." },
    { zeichen: "strich", text: "Gestrichelt: ergänzende Beinverbindungen." },
    { zeichen: "", text: "Alle Positionen sind schematisch projiziert." }
  ],

  abkuerzungen: "KG = Konzeptionsgefäß (CV / Ren) · LG = Lenkergefäß (GV / Du) · " +
                "Bl = Blase (BL) · Ni = Niere (KI) · EX = Extrapunkt. Bein- und Fußpunkte " +
                "gehören nicht zu Ren Mai oder Du Mai. Organzuordnungen und „Pumpen“ geben " +
                "die traditionelle Sicht der Vorlage wieder.",

  quelle: "Nach der bereitgestellten Mantak-Chia-Vorlage · Energetisches Übungsmodell, " +
          "keine anatomische Darstellung von Drüsen oder Nadelpositionen.",

  /* Verlauf im Raster 746 × 1335 */
  duMai:  [[430,700],[578,690],[578,590],[572,530],[570,430],[552,322],
           [540,240],[522,178],[490,92],[450,48],[405,70],[378,132],[368,176],[405,210]],
  renMai: [[405,210],[418,270],[424,318],[392,420],[375,520],[374,580],[368,640],
           [396,686],[430,700]],
  beinAst: [[430,700],[330,790],[240,835],[212,848],[168,1000],[146,1150],[120,1262]],
  kneeAst: [[205,824],[148,806]],

  punkte: [
    { nr:1, art:"zentrum", x:455, y:140, name:"Kristallkammer",
      hanT:"上丹田", hanV:"上丹田", pinyinT:"shàng dāntián", pinyin:"Shang Dantian",
      en:"Crystal Room / Upper Dantian", code:"Zentrum",
      text:"Oberes Zinnoberfeld; „Höhle des Geistes“ im Kopf. Kein Akupunkturpunkt." },
    { nr:2, art:"punkt", x:378, y:132, name:"Stirnzentrum / Siegelhalle",
      hanT:"印堂", hanV:"印堂", pinyinT:"yìn táng", pinyin:"Yintang",
      en:"Hall of Impression", code:"EX-HN3*",
      text:"Zwischen den Augenbrauen. Die Vorlage ordnet hier die Hypophyse zu." },
    { nr:3, art:"zentrum", x:405, y:210, name:"Zungenbrücke",
      hanT:"搭橋", hanV:"搭桥", pinyinT:"dā qiáo", pinyin:"Daqiao",
      en:"Bridging", code:"Verbindung",
      text:"Zunge am Gaumen: Verbindung der beiden Gefäße im Übungsmodell." },
    { nr:4, art:"punkt", x:424, y:318, name:"Halszentrum / Tiantu",
      hanT:"天突", hanV:"天突", pinyinT:"tiān tū", pinyin:"Tiantu",
      en:"Heavenly Prominence", code:"KG22 / CV22*",
      text:"Himmlischer Vorsprung, an der Halsgrube. Vorlage: „Hsuan Chi“." },
    { nr:5, art:"punkt", x:392, y:420, name:"Brustmitte",
      hanT:"膻中", hanV:"膻中", pinyinT:"dàn zhōng", pinyin:"Danzhong",
      en:"Chest Centre", code:"KG17 / CV17",
      text:"Vorlage: „Shan Chung“, Thymusdrüse und „Verjüngungszentrum“." },
    { nr:6, art:"punkt", x:375, y:520, name:"Mitte des Oberbauchs",
      hanT:"中脘", hanV:"中脘", pinyinT:"zhōng wǎn", pinyin:"Zhongwan",
      en:"Middle Epigastrium", code:"KG12 / CV12",
      text:"Vorlage: „Chung Wan“, Sonnengeflecht und Bauchspeicheldrüse." },
    { nr:7, art:"punkt", x:374, y:580, name:"Nabelzentrum / Tor des Geistes",
      hanT:"神闕", hanV:"神阙", pinyinT:"shén què", pinyin:"Shenque",
      en:"Spirit Gate", code:"KG8 / CV8",
      text:"In der Nabelmitte. Vorlage: „Chi-Chung“, Zuordnung zur Milz." },
    { nr:8, art:"zentrum", x:368, y:640, name:"Samen- / Eierstockpalast",
      hanT:"精宮", hanV:"精宫", pinyinT:"jīng gōng", pinyin:"Jinggong",
      en:"Sperm / Ovarian Palace", code:"Zentrum*",
      text:"Sexualzentrum im Unterbauch. Jinggong bezeichnet den Samenpalast." },
    { nr:9, art:"punkt", x:148, y:806, name:"Kranichscheitel",
      hanT:"鶴頂", hanV:"鹤顶", pinyinT:"hè dǐng", pinyin:"Heding",
      en:"Crane’s Summit", code:"EX-LE2",
      text:"Mitte des oberen Kniescheibenrandes. Vorlage: „Extra 31 (He Ding)“." },
    { nr:10, art:"punkt", x:120, y:1262, name:"Sprudelnde Quelle",
      hanT:"湧泉", hanV:"涌泉", pinyinT:"yǒng quán", pinyin:"Yongquan",
      en:"Bubbling Spring", code:"Ni1 / KI1",
      text:"An der Fußsohle, hinter dem Fußballen. Vorlage: „Yung-Chuan K-1“." },
    { nr:11, art:"zentrum", x:480, y:105, name:"Zirbeldrüsen-Zentrum",
      hanT:"松果體", hanV:"松果体", pinyinT:"sōng guǒ tǐ", pinyin:"Songguoti",
      en:"Pineal Gland", code:"Drüsenzuordnung*",
      text:"Unter dem Scheitel; in der Vorlage „Drüse der Erleuchtung und Richtung“." },
    { nr:12, art:"zentrum", x:522, y:178, name:"Jadekissen",
      hanT:"玉枕", hanV:"玉枕", pinyinT:"yù zhěn", pinyin:"Yuzhen",
      en:"Jade Pillow", code:"Zentrum*",
      text:"Hinterkopfzentrum. Vorlage: „Yui-Gen“, Schädelpumpe; nicht identisch mit Bl9." },
    { nr:13, art:"punkt", x:552, y:322, name:"Großer Wirbel",
      hanT:"大椎", hanV:"大椎", pinyinT:"dà zhuī", pinyin:"Dazhui",
      en:"Great Vertebra", code:"LG14 / GV14",
      text:"Unter C7. Vorlage: „Ta-Chui“, zentrale Steuerung der Sehnenverbindungen von Händen und Rückenmark." },
    { nr:14, art:"zentrum", x:570, y:430, name:"Wirbelsäulenpass auf Herzhöhe",
      hanT:"夾脊", hanV:"夹脊", pinyinT:"jiā jǐ", pinyin:"Jiaji",
      en:"Spinal Pass", code:"Zentrum*",
      text:"Vorlage: „Gia-Pe“, gegenüber dem Herzzentrum, etwa zwischen T5 und T6." },
    { nr:15, art:"punkt", x:572, y:530, name:"Mitte der Wirbelsäule",
      hanT:"脊中", hanV:"脊中", pinyinT:"jǐ zhōng", pinyin:"Jizhong",
      en:"Spinal Centre", code:"LG6 / GV6",
      text:"Unter T11. Vorlage: „Chi-Chung“, Nebennierenzentrum und „Minipumpe“." },
    { nr:16, art:"punkt", x:578, y:590, name:"Tor des Lebens",
      hanT:"命門", hanV:"命门", pinyinT:"mìng mén", pinyin:"Mingmen",
      en:"Gate of Life", code:"LG4 / GV4",
      text:"Unter L2. Vorlage: Nierenpunkt und geschützter Speicher vorgeburtlicher Energie." },
    { nr:17, art:"punkt", x:578, y:690, name:"Lange Stärke / Steißbeinzentrum",
      hanT:"長強", hanV:"长强", pinyinT:"cháng qiáng", pinyin:"Changqiang",
      en:"Long and Strong", code:"LG1 / GV1",
      text:"Unterhalb der Steißbeinspitze. Vorlage: „Chang-Chiang“, Sakralpumpe." },
    { nr:18, art:"punkt", x:430, y:700, name:"Zusammenkunft des Yin",
      hanT:"會陰", hanV:"会阴", pinyinT:"huì yīn", pinyin:"Huiyin",
      en:"Meeting of Yin", code:"KG1 / CV1",
      text:"Damm zwischen Genitalien und After. Vorlage: „Tor von Tod und Leben“." },
    { nr:19, art:"punkt", x:212, y:848, name:"Mitte der Beuge / Kniekehle",
      hanT:"委中", hanV:"委中", pinyinT:"wěi zhōng", pinyin:"Weizhong",
      en:"Middle of the Crook", code:"Bl40 / BL40",
      text:"Mitte der Kniekehle. Laut Vorlage wird hier zusätzliche Geistenergie gespeichert." }
  ],

  gefaesse: [
    { name:"Konzeptionsgefäß / Funktionskanal", hanT:"任脈", hanV:"任脉",
      pinyinT:"rèn mài", pinyin:"Ren Mai", en:"Conception Vessel / Functional Channel",
      lage:"Vorderseite · im Kreislauf abwärts" },
    { name:"Lenkergefäß", hanT:"督脈", hanV:"督脉",
      pinyinT:"dū mài", pinyin:"Du Mai", en:"Governing Vessel / Governor Channel",
      lage:"Rückseite · im Kreislauf aufwärts" }
  ],

  einleitungLang: "Die Meditation des kleinen Himmelskreislaufs bildet in Mantak Chias " +
    "System den Einstieg in die Arbeit mit der inneren Energie. Sie schult das Wahrnehmen, " +
    "Lenken und Kultivieren von Qi und dient als Grundtechnik für die weiteren Übungen des " +
    "Universal Tao. Nach dieser traditionellen Vorstellung ist der kleine Himmelskreislauf " +
    "der zentrale Energiekreislauf, der die übrigen Leitbahnen und Meridiane nährt. Das " +
    "Zirkulieren des Qi soll Blockaden lösen, weiteres Qi aktivieren und den Körper beleben. " +
    "Durch die Praxis soll man erkennen lernen, wie sich Qi anfühlt, während man es am " +
    "Lenkergefäß den Rücken hinaufführt und am Funktions- bzw. Konzeptionsgefäß an der " +
    "Körpervorderseite wieder hinablenkt. Die Vorlage beschreibt dies als eine deutliche " +
    "Vermehrung der inneren Energie.",
  einleitungHinweis: "Die Aussagen über Qi, energetische Blockaden, Verjüngung und " +
    "Energievermehrung beschreiben das traditionelle Übungsmodell. Die angegebenen Drüsen " +
    "liegen im Körperinneren; ihre Nennung bezeichnet hier eine meditative Zuordnung.",

  erlaeuterungen: [
    { titel:"01 und 03  Kristallkammer und Zunge",
      text:"Die schlecht getrennte Zeile „Crystal Room Cavity of the Spirit Tongue“ umfasst zwei Inhalte: den inneren Vorstellungsraum im Kopf und die Zunge als Brücke. Chia bezeichnet die Kristallkammer als oberes Dantian (上丹田; shàng dāntián; Shang Dantian; Upper Dantian; oberes Zinnoberfeld). „Daqiao“ bedeutet Brückenbildung; es ist kein Akupunkturpunkt. [1, 6, 8]" },
    { titel:"02 und 11  Drüse ist nicht Oberflächenpunkt",
      text:"Die Hypophyse (腦垂體 / 脑垂体; nǎo chuí tǐ | Naochuiti; Pituitary Gland) liegt nicht zwischen den Augenbrauen. Yintang ist der ergänzte äußere Bezug des Stirnzentrums. Auch die Zirbeldrüse liegt nicht an der Kopfhaut. Die Grafik zeigt ihre Scheitelzuordnung, keinen zusätzlichen Akupunkturpunkt. [1, 2]" },
    { titel:"04  Hsuan Chi ist mehrdeutig",
      text:"Als ältere Umschrift entspricht „Hsuan Chi“ dem Namen Xuanji (璇璣 / 璇玑; xuán jī | Xuanji; Jade Pivot; Jadedrehpunkt; KG21 / CV21). Chias neuere chinesisch beschriftete Grafik ordnet das Halszentrum jedoch Tiantu (天突; tiān tū; KG22 / CV22) zu. Deshalb zeigt die Übersicht Tiantu mit Sternchen. KG21 liegt weiter unten am oberen Brustbein; beide Punkte sind nicht identisch. [1–3]" },
    { titel:"05  Shan Chung und Danzhong",
      text:"„Shan Chung“ ist die überlieferte Schreibweise der Vorlage. Die heutige Standardbezeichnung lautet Danzhong, hier mit den Tonzeichen dàn zhōng. Es handelt sich um denselben Brustpunkt KG17 / CV17, nicht um einen zweiten Punkt. Die Thymuszuordnung bleibt eine Aussage der Vorlage. [2–4]" },
    { titel:"07 und 15  Zweimal Chi-Chung",
      text:"Am Nabel meint die Vorlage die Nabelmitte, auch Qizhong (臍中 / 脐中; qí zhōng | Qizhong; Navel Centre), mit dem Standardpunkt Shenque KG8 / CV8. Am Rücken bezeichnet „Chi-Chung“ Jizhong (脊中; jǐ zhōng), LG6 / GV6, unter dem elften Brustwirbel. Trotz ähnlicher alter Schreibweise sind es zwei verschiedene Orte. [1–3]" },
    { titel:"08  Samen- und Eierstockpalast",
      text:"Die Vorlage benennt ein Sexualzentrum, keinen eindeutig nummerierten Oberflächenpunkt. Jinggong (精宮 / 精宫) bezeichnet den Samen- bzw. Essenzpalast; es ist nicht automatisch ein gemeinsamer Akupunkturpunkt für beide Geschlechter. Deshalb wurde hier keine KG-Nummer ergänzt. [1]" },
    { titel:"09  Extra 31 heißt heute EX-LE2",
      text:"Der Name Heding bleibt erhalten. „Extra 31“ ist die alte Nummerierung der Vorlage; der heutige internationale Code ist EX-LE2. Der Punkt liegt am oberen Rand der Kniescheibe. [7]" },
    { titel:"12  Jadekissen und Bl9 unterscheiden",
      text:"Yuzhen ist hier der daoistische Hinterkopfpass bzw. die „Schädelpumpe“. Der gleichnamige Akupunkturpunkt Yuzhen Bl9 / BL9 liegt dagegen beidseits seitlich am Hinterkopf. Der mittige Energiepass darf nicht einfach als ein einzelner Bl9 eingezeichnet werden. [2, 5]" },
    { titel:"14  Gia-Pe ist das hintere Herzzentrum",
      text:"Die chinesische Vergleichsgrafik verwendet Jiaji (夾脊 / 夹脊). Gemeint ist der daoistische Wirbelsäulenpass auf Herzhöhe. Die Extrapunktgruppe Jiaji EX-B2 liegt paarig neben der Wirbelsäule. Ein mittiger anatomischer Bezug auf Höhe T5/T6 ist Shendao (神道; shén dào | Shendao; Spirit Path; Weg des Geistes; LG11 / GV11). Diese Bezeichnungen sind nicht austauschbar. [1, 2, 5]" },
    { titel:"17 bis 19  Unterer Kreislauf und Beine",
      text:"Changqiang und Huiyin bleiben als getrennte Punkte am Steißbein bzw. Damm dargestellt. Heding, Weizhong und Yongquan ergänzen Chias „Cosmic Orbit“-Grafik. Sie sind weder zusätzliche Ren-Mai-Punkte noch zusätzliche Du-Mai-Punkte. Die gestrichelten Beinlinien bilden eine schematische Ergänzung der Vorlage, keinen vollständigen Verlauf des Blasen- oder Nierenmeridians." },
    { titel:"Schreibweise und Übersetzung",
      text:"Traditionelle und vereinfachte Zeichen werden beide gezeigt; identische Formen stehen bewusst zweimal. „Pinyin ohne Töne“ ist dieselbe lateinische Umschrift ohne Tonzeichen, keine eigene chinesische Schrift. Deutsche und englische Namensübersetzungen variieren je nach Lehrbuch; maßgeblich für die Zuordnung sind chinesischer Name und Punktcode." }
  ],

  quellen: [
    { nr:"1", text:"Mantak Chia, Taoist Fundamentals, S. 83: chinesisch beschriftete Vergleichsgrafik." },
    { nr:"2", text:"CARB-TCMPA, Candidate Handbook 2022: Punktcodes und traditionelle/vereinfachte Zeichen." },
    { nr:"3", text:"WHO, Standard Acupuncture Nomenclature: Standardnamen und ältere Umschriften." },
    { nr:"4", text:"Shanghai University of Traditional Chinese Medicine: Pinyin-Nomenklatur, insbesondere Dànzhōng." },
    { nr:"5", text:"Fabrizio Pregadio, Views of Time in Chinese Alchemy, S. 259: Jiaji und Yuzhen als daoistische Pässe." },
    { nr:"6", text:"Mantak Chia, Three Minds Into One: Kristallkammer und oberes Dantian." },
    { nr:"7", text:"Encyclopedia of China, Heding: Zuordnung zu EX-LE2." },
    { nr:"8", text:"Mantak Chia, Microcosmic Orbit Meditation: Zungenbrücke und Kreislaufrichtung." }
  ]
};
