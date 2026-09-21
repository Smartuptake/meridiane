/* Der kleine Himmelskreislauf – Xiao Zhoutian.
   Inhalt nach der bereitgestellten Vorlage.
   Punktlagen auf img/uebungen/himmelskreislauf-figur.jpg (Raster 746 × 1335),
   über die Silhouette der Figur gesetzt. Die Vorlage bezeichnet die Positionen
   selbst als schematisch projiziert. */
window.Himmelskreislauf = {
  titel: "Der kleine Himmelskreislauf",
  untertitel: "Xiǎo zhōutiān 小周天 · Leitbahnen, Energiezentren und Akupunkturpunkte",
  namenszeile: "小周天 · xiǎo zhōu tiān | Xiao Zhoutian · Microcosmic Orbit",

  einleitung: "Hinten aufwärts, vorne abwärts: Im Übungsmodell verbindet die Zunge am " +
              "Gaumen das Lenkergefäß mit dem Konzeptionsgefäß. Die Knie- und Fußpunkte " +
              "ergänzen die Darstellung der Vorlage.",

  klammern: "Angegeben sind Kurzzeichen, Pinyin mit und ohne Tonzeichen, englischer Name " +
            "und Punktcode. Ein Sternchen verweist auf die Erläuterungen.",

  leseanleitung: [
    { zeichen: "kreis", text: "Roter Punkt: benannter Akupunkturpunkt auf der Körperoberfläche." },
    { zeichen: "kugel", text: "Kugel mit Kern: Energiezentrum im Körperinneren – kein Oberflächenpunkt." },
    { zeichen: "feld", text: "Großes farbiges Feld: eines der drei Zinnoberfelder (Dan Tian) auf der Mittelachse." },
    { zeichen: "strich", text: "Gestrichelt: ergänzende Beinverbindungen." },
    { zeichen: "", text: "Alle Positionen sind schematisch projiziert." }
  ],

  abkuerzungen: "KG = Konzeptionsgefäß (CV / Ren) · LG = Lenkergefäß (GV / Du) · " +
                "Bl = Blase (BL) · Ni = Niere (KI) · EX = Extrapunkt. Bein- und Fußpunkte " +
                "gehören nicht zu Ren Mai oder Du Mai. Organzuordnungen und „Pumpen“ geben " +
                "die traditionelle Sicht der Vorlage wieder.",

  quelle: "Energetisches Übungsmodell. Keine anatomische Darstellung von Drüsen oder Nadelpositionen.",

  /* Verlauf im Raster 746 × 1335 */
  duMai:  [[461,867],[499,882],[544,867],[591,814],[617,742],[596,640],[591,565],[586,492],[579,429],[565,358],[537,290],[523,236],[543,169],[538,97],[508,56],[478,50],[434,60],[390,91],[371,129],[359,159],[363,193],[379,207]],
  renMai: [[379,207],[404,242],[432,271],[421,303],[399,358],[381,417],[363,503],[361,595],[374,678],[415,758],[444,815],[461,867]],
  beinAb: [[461,867],[364,895],[260,890],[228,1069],[174,1249],[137,1285]],
  beinAuf: [[137,1285],[130,1084],[142,805],[269,773],[415,758]],

  tabelleTitel: "Die neunzehn Stationen und ihre Lage",

  /* Die drei Zinnoberfelder. Nach Stefans Ursprungsdatei
     (50-Schaubilder/Himmelskreislauf-1.png und -2.png): keine
     Oberflaechenpunkte, sondern Felder auf der Mittelachse im
     Koerperinneren, jeweils zwischen einem hinteren Punkt am
     Lenkergefaess und einem vorderen am Konzeptionsgefaess.
     Farben wie in der Vorlage - oben blau, Mitte gruen, unten orange -,
     gedaempft auf die Tokens des Designhandbuchs. */
  dantian: [
    /* Deckungsgleich mit Station 1: die Kristallkammer ist der Kern des
       oberen Zinnoberfeldes, nicht etwas daneben. */
    { stufe: "oben", x: 455, y: 95, farbe: "#2E4160", hell: "#E3E7EE", r: 30,
      name: "Oberes Zinnoberfeld", kurz: "Oberer Dan Tian",
      han: "上丹田", pinyin: "shàng dāntián", en: "Upper Dan Tian",
      zwischen: "in der Mitte des Kopfes, Station 1 bildet seinen Kern",
      text: "Das Feld des Shen 神, des Geistes. Es liegt in der Mitte des Kopfes auf " +
            "Höhe der Augenbrauen. Hier sammelt sich, was die Vorlage die Kristallkammer " +
            "nennt; in der Übung ruht die Aufmerksamkeit zuletzt hier." },
    { stufe: "mitte", x: 480, y: 423, farbe: "#4E7A4B", hell: "#E6EDE4", r: 32,
      name: "Mittleres Zinnoberfeld", kurz: "Mittlerer Dan Tian",
      han: "中丹田", pinyin: "zhōng dāntián", en: "Middle Dan Tian",
      zwischen: "zwischen Shānzhōng 膻中 vorn und dem Wirbelsäulenpass hinten",
      text: "Das Feld des Qi 气. Es liegt hinter der Brustmitte, auf Herzhöhe. Hier " +
            "wandelt sich, was der untere Dan Tian gesammelt hat; Enge in der Brust " +
            "und flacher Atem sind seine Zeichen." },
    { stufe: "unten", x: 480, y: 665, farbe: "#BE8526", hell: "#F5ECDC", r: 38,
      name: "Unteres Zinnoberfeld", kurz: "Unterer Dan Tian",
      han: "下丹田", pinyin: "xià dāntián", en: "Lower Dan Tian",
      zwischen: "zwischen Qìhǎi 气海 vorn und Mìngmén 命门 hinten",
      text: "Das Feld des Jing 精, der Essenz – und der Ofen des ganzen Kreislaufs. Es " +
            "liegt im Unterbauch unterhalb des Nabels, auf halbem Weg zur Wirbelsäule. " +
            "Jede Übung beginnt und endet hier; das größte der drei Felder." }
  ],

  punkte: [
    { nr:1, art:"zentrum", x:455, y:93, ort:"Im Kopf, oberes Zinnoberfeld. Kein Oberflächenpunkt.", name:"Kristallkammer",
      hanT:"上丹田", hanV:"上丹田", pinyinT:"shàng dāntián", pinyin:"Shang Dantian",
      en:"Crystal Room / Upper Dantian", code:"Zentrum",
      text:"Oberes Zinnoberfeld; „Höhle des Geistes“ im Kopf. Kein Akupunkturpunkt." },
    { nr:2, art:"punkt", x:371, y:129, ort:"Zwischen den Augenbrauen, auf der Mittellinie der Stirn.", name:"Stirnzentrum / Siegelhalle",
      hanT:"印堂", hanV:"印堂", pinyinT:"yìn táng", pinyin:"Yintang",
      en:"Hall of Impression", code:"EX-HN3*",
      text:"Zwischen den Augenbrauen. Die Vorlage ordnet hier die Hypophyse zu." },
    { nr:3, art:"zentrum", x:379, y:207, ort:"Zungenspitze am vorderen Gaumen, hinter den oberen Schneidezähnen.", name:"Zungenbrücke",
      hanT:"搭桥", hanV:"搭桥", pinyinT:"dā qiáo", pinyin:"Daqiao",
      en:"Bridging", code:"Verbindung",
      text:"Zunge am Gaumen: Verbindung der beiden Gefäße im Übungsmodell." },
    { nr:4, art:"punkt", x:421, y:303, ort:"In der Drosselgrube, am oberen Rand des Brustbeins.", name:"Halszentrum / Tiantu",
      hanT:"天突", hanV:"天突", pinyinT:"tiān tū", pinyin:"Tiantu",
      en:"Heavenly Prominence", code:"KG22 / CV22*",
      text:"Himmlischer Vorsprung, an der Halsgrube. Vorlage: „Hsuan Chi“." },
    { nr:5, art:"punkt", x:381, y:417, ort:"Auf dem Brustbein, in Höhe des vierten Zwischenrippenraums.", name:"Brustmitte",
      hanT:"膻中", hanV:"膻中", pinyinT:"dàn zhōng", pinyin:"Danzhong",
      en:"Chest Centre", code:"KG17 / CV17",
      text:"Vorlage: „Shan Chung“, Thymusdrüse und „Verjüngungszentrum“." },
    { nr:6, art:"punkt", x:363, y:503, ort:"Auf der vorderen Mittellinie, 4 Cun oberhalb des Nabels.", name:"Mitte des Oberbauchs",
      hanT:"中脘", hanV:"中脘", pinyinT:"zhōng wǎn", pinyin:"Zhongwan",
      en:"Middle Epigastrium", code:"KG12 / CV12",
      text:"Vorlage: „Chung Wan“, Sonnengeflecht und Bauchspeicheldrüse." },
    { nr:7, art:"punkt", x:361, y:595, ort:"In der Mitte des Nabels.", name:"Nabelzentrum / Tor des Geistes",
      hanT:"神阙", hanV:"神阙", pinyinT:"shén què", pinyin:"Shenque",
      en:"Spirit Gate", code:"KG8 / CV8",
      text:"In der Nabelmitte. Vorlage: „Chi-Chung“, Zuordnung zur Milz." },
    { nr:8, art:"zentrum", x:415, y:758, ort:"Im Unterbauch unterhalb des Nabels. Kein nummerierter Oberflächenpunkt.", name:"Samen- / Eierstockpalast",
      hanT:"精宫", hanV:"精宫", pinyinT:"jīng gōng", pinyin:"Jinggong",
      en:"Sperm / Ovarian Palace", code:"Zentrum*",
      text:"Sexualzentrum im Unterbauch. Jinggong bezeichnet den Samenpalast." },
    { nr:9, art:"punkt", x:142, y:805, ort:"In der Vertiefung am oberen Rand der Kniescheibe.", name:"Kranichscheitel",
      hanT:"鹤顶", hanV:"鹤顶", pinyinT:"hè dǐng", pinyin:"Heding",
      en:"Crane’s Summit", code:"EX-LE2",
      text:"Mitte des oberen Kniescheibenrandes. Vorlage: „Extra 31 (He Ding)“." },
    { nr:10, art:"punkt", x:137, y:1285, ort:"An der Fußsohle, in der Vertiefung hinter dem Fußballen.", name:"Sprudelnde Quelle",
      hanT:"涌泉", hanV:"涌泉", pinyinT:"yǒng quán", pinyin:"Yongquan",
      en:"Bubbling Spring", code:"Ni1 / KI1",
      text:"An der Fußsohle, hinter dem Fußballen. Vorlage: „Yung-Chuan K-1“." },
    { nr:11, art:"zentrum", x:478, y:50, ort:"Im Kopf, unter dem Scheitel. Kein Oberflächenpunkt.", name:"Zirbeldrüsen-Zentrum",
      hanT:"松果体", hanV:"松果体", pinyinT:"sōng guǒ tǐ", pinyin:"Songguoti",
      en:"Pineal Gland", code:"Drüsenzuordnung*",
      text:"Unter dem Scheitel; in der Vorlage „Drüse der Erleuchtung und Richtung“." },
    { nr:12, art:"zentrum", x:523, y:236, ort:"Am Hinterkopf, mittig über dem Hinterhauptbein.", name:"Jadekissen",
      hanT:"玉枕", hanV:"玉枕", pinyinT:"yù zhěn", pinyin:"Yuzhen",
      en:"Jade Pillow", code:"Zentrum*",
      text:"Hinterkopfzentrum. Vorlage: „Yui-Gen“, Schädelpumpe; nicht identisch mit Bl9." },
    { nr:13, art:"punkt", x:537, y:290, ort:"Unter dem Dornfortsatz des siebten Halswirbels.", name:"Großer Wirbel",
      hanT:"大椎", hanV:"大椎", pinyinT:"dà zhuī", pinyin:"Dazhui",
      en:"Great Vertebra", code:"LG14 / GV14",
      text:"Unter C7. Vorlage: „Ta-Chui“, zentrale Steuerung der Sehnenverbindungen von Händen und Rückenmark." },
    { nr:14, art:"zentrum", x:579, y:429, ort:"An der Wirbelsäule auf Herzhöhe, etwa zwischen T5 und T6.", name:"Wirbelsäulenpass auf Herzhöhe",
      hanT:"夹脊", hanV:"夹脊", pinyinT:"jiā jǐ", pinyin:"Jiaji",
      en:"Spinal Pass", code:"Zentrum*",
      text:"Vorlage: „Gia-Pe“, gegenüber dem Herzzentrum, etwa zwischen T5 und T6." },
    { nr:15, art:"punkt", x:591, y:565, ort:"Unter dem Dornfortsatz des elften Brustwirbels.", name:"Mitte der Wirbelsäule",
      hanT:"脊中", hanV:"脊中", pinyinT:"jǐ zhōng", pinyin:"Jizhong",
      en:"Spinal Centre", code:"LG6 / GV6",
      text:"Unter T11. Vorlage: „Chi-Chung“, Nebennierenzentrum und „Minipumpe“." },
    { nr:16, art:"punkt", x:596, y:640, ort:"Unter dem Dornfortsatz des zweiten Lendenwirbels.", name:"Tor des Lebens",
      hanT:"命门", hanV:"命门", pinyinT:"mìng mén", pinyin:"Mingmen",
      en:"Gate of Life", code:"LG4 / GV4",
      text:"Unter L2. Vorlage: Nierenpunkt und geschützter Speicher vorgeburtlicher Energie." },
    { nr:17, art:"punkt", x:544, y:867, ort:"Zwischen Steißbeinspitze und After.", name:"Lange Stärke / Steißbeinzentrum",
      hanT:"长强", hanV:"长强", pinyinT:"cháng qiáng", pinyin:"Changqiang",
      en:"Long and Strong", code:"LG1 / GV1",
      text:"Unterhalb der Steißbeinspitze. Vorlage: „Chang-Chiang“, Sakralpumpe." },
    { nr:18, art:"punkt", x:461, y:867, ort:"Am Damm, zwischen Genitalien und After.", name:"Zusammenkunft des Yin",
      hanT:"会阴", hanV:"会阴", pinyinT:"huì yīn", pinyin:"Huiyin",
      en:"Meeting of Yin", code:"KG1 / CV1",
      text:"Damm zwischen Genitalien und After. Vorlage: „Tor von Tod und Leben“." },
    { nr:19, art:"punkt", x:260, y:890, ort:"In der Mitte der Kniekehlenfalte.", name:"Mitte der Beuge / Kniekehle",
      hanT:"委中", hanV:"委中", pinyinT:"wěi zhōng", pinyin:"Weizhong",
      en:"Middle of the Crook", code:"Bl40 / BL40",
      text:"Mitte der Kniekehle. Laut Vorlage wird hier zusätzliche Geistenergie gespeichert." }
  ],

  gefaesse: [
    { name:"Konzeptionsgefäß / Funktionskanal", hanT:"任脉", hanV:"任脉",
      pinyinT:"rèn mài", pinyin:"Ren Mai", en:"Conception Vessel / Functional Channel",
      lage:"Vorderseite · im Kreislauf abwärts" },
    { name:"Lenkergefäß", hanT:"督脉", hanV:"督脉",
      pinyinT:"dū mài", pinyin:"Du Mai", en:"Governing Vessel / Governor Channel",
      lage:"Rückseite · im Kreislauf aufwärts" }
  ],

  einleitungLang: "Die Meditation des kleinen Himmelskreislaufs bildet den Einstieg in die " +
    "Arbeit mit der inneren Energie. Sie schult das Wahrnehmen, Lenken und Kultivieren von " +
    "Qi und dient als Grundtechnik für weiterführende Übungen. Nach traditioneller Vorstellung ist der kleine Himmelskreislauf " +
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
      text:"Die schlecht getrennte Zeile „Crystal Room Cavity of the Spirit Tongue“ umfasst zwei Inhalte: den inneren Vorstellungsraum im Kopf und die Zunge als Brücke. Die Kristallkammer ist das obere Dantian (上丹田; shàng dāntián; Shang Dantian; Upper Dantian; oberes Zinnoberfeld). „Daqiao“ bedeutet Brückenbildung; es ist kein Akupunkturpunkt." },
    { titel:"02 und 11  Drüse ist nicht Oberflächenpunkt",
      text:"Die Hypophyse (脑垂体; nǎo chuí tǐ | Naochuiti; Pituitary Gland) liegt nicht zwischen den Augenbrauen. Yintang ist der ergänzte äußere Bezug des Stirnzentrums. Auch die Zirbeldrüse liegt nicht an der Kopfhaut. Die Grafik zeigt ihre Scheitelzuordnung, keinen zusätzlichen Akupunkturpunkt." },
    { titel:"04  Hsuan Chi ist mehrdeutig",
      text:"Als ältere Umschrift entspricht „Hsuan Chi“ dem Namen Xuanji (璇玑; xuán jī | Xuanji; Jade Pivot; Jadedrehpunkt; KG21 / CV21). Die chinesisch beschriftete Vergleichsgrafik ordnet das Halszentrum jedoch Tiantu (天突; tiān tū; KG22 / CV22) zu. Deshalb zeigt die Übersicht Tiantu mit Sternchen. KG21 liegt weiter unten am oberen Brustbein; beide Punkte sind nicht identisch. [1, 2]" },
    { titel:"05  Shan Chung und Danzhong",
      text:"„Shan Chung“ ist die überlieferte Schreibweise der Vorlage. Die heutige Standardbezeichnung lautet Danzhong, hier mit den Tonzeichen dàn zhōng. Es handelt sich um denselben Brustpunkt KG17 / CV17, nicht um einen zweiten Punkt. Die Thymuszuordnung bleibt eine Aussage der Vorlage. [1–3]" },
    { titel:"07 und 15  Zweimal Chi-Chung",
      text:"Am Nabel meint die Vorlage die Nabelmitte, auch Qizhong (脐中; qí zhōng | Qizhong; Navel Centre), mit dem Standardpunkt Shenque KG8 / CV8. Am Rücken bezeichnet „Chi-Chung“ Jizhong (脊中; jǐ zhōng), LG6 / GV6, unter dem elften Brustwirbel. Trotz ähnlicher alter Schreibweise sind es zwei verschiedene Orte. [1, 2]" },
    { titel:"08  Samen- und Eierstockpalast",
      text:"Die Vorlage benennt ein Sexualzentrum, keinen eindeutig nummerierten Oberflächenpunkt. Jinggong (精宫) bezeichnet den Samen- bzw. Essenzpalast; es ist nicht automatisch ein gemeinsamer Akupunkturpunkt für beide Geschlechter. Deshalb wurde hier keine KG-Nummer ergänzt." },
    { titel:"09  Extra 31 heißt heute EX-LE2",
      text:"Der Name Heding bleibt erhalten. „Extra 31“ ist die alte Nummerierung der Vorlage; der heutige internationale Code ist EX-LE2. Der Punkt liegt am oberen Rand der Kniescheibe. [5]" },
    { titel:"12  Jadekissen und Bl9 unterscheiden",
      text:"Yuzhen ist hier der daoistische Hinterkopfpass bzw. die „Schädelpumpe“. Der gleichnamige Akupunkturpunkt Yuzhen Bl9 / BL9 liegt dagegen beidseits seitlich am Hinterkopf. Der mittige Energiepass darf nicht einfach als ein einzelner Bl9 eingezeichnet werden. [1, 4]" },
    { titel:"14  Gia-Pe ist das hintere Herzzentrum",
      text:"Die chinesische Vergleichsgrafik verwendet Jiaji (夹脊). Gemeint ist der daoistische Wirbelsäulenpass auf Herzhöhe. Die Extrapunktgruppe Jiaji EX-B2 liegt paarig neben der Wirbelsäule. Ein mittiger anatomischer Bezug auf Höhe T5/T6 ist Shendao (神道; shén dào | Shendao; Spirit Path; Weg des Geistes; LG11 / GV11). Diese Bezeichnungen sind nicht austauschbar. [1, 4]" },
    { titel:"17 bis 19  Unterer Kreislauf und Beine",
      text:"Changqiang und Huiyin bleiben als getrennte Punkte am Steißbein bzw. Damm dargestellt. Heding, Weizhong und Yongquan ergänzen die Grafik des großen Kreislaufs. Sie sind weder zusätzliche Ren-Mai-Punkte noch zusätzliche Du-Mai-Punkte. Die gestrichelten Beinlinien bilden eine schematische Ergänzung der Vorlage, keinen vollständigen Verlauf des Blasen- oder Nierenmeridians." },
    { titel:"Schreibweise und Übersetzung",
      text:"Die Schriftzeichen stehen durchgehend in der vereinfachten Form, wie sie in der Volksrepublik China gebräuchlich ist. „Pinyin ohne Töne“ ist dieselbe lateinische Umschrift ohne Tonzeichen, keine eigene chinesische Schrift. Deutsche und englische Namensübersetzungen variieren je nach Lehrbuch; maßgeblich für die Zuordnung sind chinesischer Name und Punktcode." }
  ],

  quellen: [
    { nr:"1", text:"CARB-TCMPA, Candidate Handbook 2022: Punktcodes und traditionelle/vereinfachte Zeichen." },
    { nr:"2", text:"WHO, Standard Acupuncture Nomenclature: Standardnamen und ältere Umschriften." },
    { nr:"3", text:"Shanghai University of Traditional Chinese Medicine: Pinyin-Nomenklatur, insbesondere Dànzhōng." },
    { nr:"4", text:"Fabrizio Pregadio, Views of Time in Chinese Alchemy, S. 259: Jiaji und Yuzhen als daoistische Pässe." },
    { nr:"5", text:"Encyclopedia of China, Heding: Zuordnung zu EX-LE2." }
  ]
};
