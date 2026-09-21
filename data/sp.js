/* Milzmeridian – Fuß-Taiyin – 足太阴脾经
   Punktlagen kalibriert auf img/front.png (880 × 1168).
   Am 21.09.2026 nachgemessen: die Spitze des Innenknöchels liegt bei y≈1042,
   nicht bei 998 – 998 ist die schmalste Stelle des Knöchels. Innen wird nicht
   mit 16, sondern mit 13 Cun gerechnet: Condylus medialis der Tibia (MP 9,
   y≈840) → Spitze des Innenknöchels = 13 Cun, also 15,5 px je Cun.
   Der Verlauf liegt auf der Innenseite des Beins. */
Meridian.register({
  id: "sp", code: "SP", codeDe: "MP", ord: 4,
  name: "Milz", titel: "Milzmeridian", nameHan: "脾经",
  channel: "Fuß-Taiyin", channelHan: "足太阴",
  element: "Erde", elementHan: "土", wx: "erde",
  yin: true, coupled: "st", coupledName: "Magen",
  clock: "09 – 11 Uhr", pointCount: 21, direction: "Fuß → Brust",
  view: "front", mirror: true,

  intro: "Der Fuß-Taiyin-Meridian der Milz schließt den ersten Umlauf. Er beginnt an MP 1 am " +
         "Innenrand des Großzehennagels, läuft an der Rot-Weiß-Grenze über den Innenrand des " +
         "Fußes, vor dem Innenknöchel vorbei und hinter der Schienbeinkante die Innenseite des " +
         "Unterschenkels hinauf, über die Innenseite des Oberschenkels in den Bauch, vier Cun " +
         "neben der Mittellinie empor – und endet an MP 21 seitlich am Brustkorb.",

  cun: { knoechel: [392, 1042], knie: [397, 840],
         hinweis: "Spitze des Innenknöchels → Condylus medialis der Tibia = 13 Cun; MP 6 liegt 3 Cun über dem Knöchel" },

  path: [[379,1113],[384,1104],[383,1092],[391,1080],[389,1052],[387,1022],[385,995],
         [388,950],[397,887],[397,840],[398,800],[398,764],[408,710],[418,650],[425,600],
         [420,560],[400,520],[380,480],[371,436],[360,400],[352,370],[348,352]],

  inner: "M382,432 C410,418 428,392 432,356 C436,312 436,276 438,248",
  branches: [{ label: "Ast zum Herzen", d: "M430,348 C448,330 462,312 466,296" }],

  /* --- Das Organ --- */
  organ: {
    titel: "Die Milz in der chinesischen Medizin",
    pinyin: "Pí", han: "脾", wx: "erde",
    text: [
      "Die Milz der chinesischen Medizin ist nicht das Organ der westlichen Anatomie. Sie " +
      "steht für die Verdauungskraft überhaupt: für das Umwandeln der Nahrung in Qi und Blut " +
      "und für den Transport dieser Stoffe dorthin, wo sie gebraucht werden.",

      "Mit dem Magen bildet sie die Mitte, die nachgeburtliche Wurzel. Die beiden arbeiten " +
      "gegenläufig: der Magen senkt das Trübe ab, die Milz hebt das Klare empor. Auch ihre " +
      "Vorlieben sind entgegengesetzt – die Milz mag Trockenheit und scheut Feuchtigkeit, " +
      "der Magen umgekehrt.",

      "Ein Satz, der im Unterricht immer wieder gebraucht wird: die Milz ist die Quelle des " +
      "Schleims, die Lunge nur sein Behälter. Wer Schleim behandelt, muss deshalb bei der " +
      "Milz ansetzen, auch wenn sich das Problem in der Brust zeigt.",

      "Ihr Geistaspekt ist das Yi, die Absicht und der gerichtete Gedanke. Ihre Emotion ist " +
      "das Grübeln. Zu viel Denken verbraucht Milz-Qi; umgekehrt kreisen Gedanken leichter, " +
      "wenn die Mitte schwach ist. Beides ist im Unterricht gut zu beobachten."
    ],

    aufgabenTitel: "Die Aufgaben der Milz",
    aufgaben: [
      { titel: "Sie wandelt um und transportiert", han: "运化",
        text: "Aus dem, was der Magen vorbereitet hat, gewinnt die Milz das Gu-Qi – die " +
              "Grundlage von Qi und Blut – und verteilt es. Dasselbe gilt für die " +
              "Flüssigkeiten. Versagt diese Kraft, bleibt Nässe liegen: weicher Stuhl, " +
              "Schweregefühl, Müdigkeit nach dem Essen, Ödeme." },
      { titel: "Sie hebt das Klare empor", han: "主升清",
        text: "Die Bewegungsrichtung der Milz geht nach oben – zum Kopf, zur Lunge, zum " +
              "Herzen. Daran hängt auch, dass die Organe an ihrem Platz bleiben. Sinkt das " +
              "Milz-Qi ab, entstehen Senkungen: Organsenkung, Hämorrhoiden, ein ziehendes " +
              "Schweregefühl nach unten, chronischer Durchfall." },
      { titel: "Sie hält das Blut", han: "统血",
        text: "Die Milz hält das Blut in den Gefäßen. Fehlt ihr die Kraft, tritt Blut aus, " +
              "wo es nicht soll: blaue Flecken ohne Anlass, zu starke oder zu lange " +
              "Regelblutung, Blut im Stuhl, Nasenbluten. Klassisch wird dafür MP 1 " +
              "moxibustiert." },
      { titel: "Sie beherrscht Muskeln und Gliedmaßen", han: "主肌肉四肢",
        text: "Weil die Milz das Nährende verteilt, hängt der Zustand der Muskeln von ihr ab. " +
              "Schwäche zeigt sich als kraftlose Arme und Beine, schlaffes Gewebe, Müdigkeit, " +
              "die nach dem Essen schlimmer wird statt besser." },
      { titel: "Sie beherbergt das Yi", han: "藏意",
        text: "Das Yi ist die Absicht, der Gedanke, der sich auf etwas richtet, und das " +
              "Gedächtnis für Gelerntes. Konzentrationsschwäche und Grübeln gehören deshalb " +
              "zur Milz. Ihr Sinnesorgan ist der Mund, ihr Zustand zeigt sich an den Lippen " +
              "und am Geschmackssinn." }
    ],

    zustaendeTitel: "Mangel und Fülle von Yin und Yang",
    zustaendeHinweis: "Mangel (Xū 虚) heißt: etwas fehlt. Fülle (Shí 实) heißt: etwas ist zu " +
                      "viel da und blockiert. Bei der Milz dreht sich fast alles um die " +
                      "Feuchtigkeit: fehlt ihr die Kraft, bleibt Nässe liegen; staut sich " +
                      "Nässe, erstickt sie die Kraft.",
    zustaende: [
      { feld: "Yin-Mangel", en: "Spleen Yin Deficiency", han: "脾阴虚", pinyin: "pí yīn xū",
        kurz: "Es fehlt das Nährende und Befeuchtende der Mitte.",
        zeichen: "Wenig Appetit, aber keine Erleichterung nach dem Essen, trockene Lippen und " +
                 "trockener Mund, trockener Stuhl, Abmagerung trotz normalen Essens, " +
                 "Unruhe am Abend. Ein Bild, das die späteren Schulen stärker betonen als die " +
                 "Klassiker – dort steht meist der Magen-Yin-Mangel im Vordergrund.",
        zunge: "rot, in der Mitte belaglos, trocken",
        puls: "dünn und schnell",
        punkte: "MP 3 · MP 6 · Ma 36 · Ren 12 · Ni 3" },

      { feld: "Yang-Mangel", en: "Spleen Qi and Yang Deficiency", han: "脾阳虚", pinyin: "pí yáng xū",
        kurz: "Es fehlt Wärme und Antrieb. Die Mitte arbeitet nicht mehr.",
        zeichen: "Weicher oder unverdauter Stuhl, Müdigkeit, die nach dem Essen zunimmt, " +
                 "dumpfer Bauchschmerz, der sich durch Wärme und Druck bessert, kalte Hände " +
                 "und Füße, Wassereinlagerung in den Beinen, blasses Gesicht, leise Stimme.",
        zunge: "blass, geschwollen, feucht, Zahneindrücke am Rand",
        puls: "tief, langsam, schwach",
        punkte: "MP 3 · MP 6 · Ma 36 · Ren 12 mit Moxa · Bl 20" },

      { feld: "Yin-Fülle", en: "Cold-Damp encumbering the Spleen", han: "寒湿困脾", pinyin: "hán shī kùn pí",
        kurz: "Kälte und Nässe binden die Milz und ersticken ihre Bewegung.",
        zeichen: "Schweregefühl im Körper und im Kopf wie unter einer Haube, Völle im " +
                 "Oberbauch, Übelkeit, süßlich-klebriger Geschmack im Mund, weicher Stuhl, " +
                 "kein Durst, Verschlimmerung bei feuchtem Wetter und nach Milchprodukten.",
        zunge: "geschwollen, dicker weißer klebriger Belag",
        puls: "langsam und schlüpfrig",
        punkte: "MP 9 · MP 6 · Ma 36 · Ren 12 · Bl 20" },

      { feld: "Yang-Fülle", en: "Damp-Heat in the Spleen", han: "湿热蕴脾", pinyin: "shī rè yùn pí",
        kurz: "Nässe und Hitze stauen sich gemeinsam in der Mitte.",
        zeichen: "Völle und Druck im Oberbauch, Übelkeit, bitterer klebriger Geschmack, " +
                 "übelriechender weicher Stuhl mit Brennen, spärlicher dunkler Urin, " +
                 "Hautjucken oder nässende Ausschläge, bei starker Stauung Gelbfärbung von " +
                 "Haut und Augen, Fieber, das nachmittags steigt.",
        zunge: "rot, gelber klebriger Belag",
        puls: "schlüpfrig und schnell",
        punkte: "MP 9 · Ma 36 · Ma 44 · Gb 34 · Bl 20" }
    ],

    aeussereTitel: "Zwei Muster, die es so nur bei der Milz gibt",
    aeussere: [
      { name: "Das Milz-Qi sinkt ab", han: "脾气下陷", pinyin: "pí qì xià xiàn",
        zeichen: "Ziehendes Schweregefühl nach unten, Senkung von Organen, Gebärmutter oder " +
                 "Enddarm, Hämorrhoiden, chronischer Durchfall, Harndrang ohne Menge, " +
                 "Erschöpfung, die sich im Liegen bessert. Die Hebekraft der Milz ist " +
                 "erschöpft – behandelt wird gegen die Schwerkraft, mit Du 20 oben.",
        punkte: "Du 20 · Ren 6 · Ma 36 · MP 6 · Bl 20" },
      { name: "Die Milz hält das Blut nicht", han: "脾不统血", pinyin: "pí bù tǒng xuè",
        zeichen: "Blaue Flecken ohne erinnerlichen Anlass, zu lange oder zu starke " +
                 "Regelblutung, Zwischenblutungen, Blut im Stuhl, Nasenbluten, Zahnfleisch- " +
                 "bluten – bei gleichzeitigen Zeichen von Erschöpfung und Blässe. Klassisch " +
                 "wird MP 1 moxibustiert.",
        punkte: "MP 1 mit Moxa · MP 6 · MP 10 · Bl 20 · Ren 6" }
    ],

    nahrungTitel: "Was die Milz stärkt und was ihr schadet",
    nahrung: {
      staerkt: [
        { was: "Alles gekocht und warm", warum: "die Milz muss dann keine Wärme mehr aufwenden, um die Speise aufzuschließen" },
        { was: "Reis-Congee und Hirsebrei", warum: "das Grundnahrungsmittel der Mitte schlechthin" },
        { was: "Kürbis, Karotte, Pastinake, Süßkartoffel", warum: "natürlich süß und neutral, genau der Geschmack der Erde" },
        { was: "Chinesischer Yams, Shan Yao", warum: "stärkt Milz- und Lungen-Qi zugleich" },
        { was: "Datteln und Longan in kleinen Mengen", warum: "bauen Qi und Blut auf" },
        { was: "Fenchel, Kardamom, Ingwer", warum: "bewegen die Mitte und lösen Nässe" },
        { was: "Hülsenfrüchte gut gegart, mit Gewürzen", warum: "nähren, ohne zu belasten, wenn sie weich gekocht sind" },
        { was: "In Ruhe essen, ohne Bildschirm", warum: "Grübeln beim Essen bindet genau das Qi, das die Verdauung braucht" }
      ],
      schadet: [
        { was: "Rohkost in Menge, Salate als Hauptmahlzeit", warum: "kalt und schwer aufzuschließen, der häufigste Grund für Nässe" },
        { was: "Eisgekühlte Getränke, Smoothies aus dem Kühlschrank", warum: "löschen das Feuer der Mitte direkt" },
        { was: "Milchprodukte, besonders Käse und Sahne", warum: "bilden Feuchtigkeit, aus der Schleim wird" },
        { was: "Zucker und Süßigkeiten", warum: "die Milz mag Süßes – aber das natürliche, nicht das konzentrierte" },
        { was: "Große Trinkmengen zur Mahlzeit", warum: "verdünnt, was der Magen gerade aufschließen soll" },
        { was: "Spätes Essen und unregelmäßige Zeiten", warum: "die Maximalzeit der Milz liegt von neun bis elf Uhr vormittags" }
      ],
      hinweis: "Die Milz mag Trockenheit und scheut Feuchtigkeit, der Magen genau umgekehrt. " +
               "Und der Satz, der bei jedem Schleimproblem gilt: die Milz ist die Quelle des " +
               "Schleims, die Lunge nur sein Behälter."
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
      { k: "Geistaspekt", v: "Yi 意, Absicht" },
      { k: "Gekoppelt", v: "Magen" }
    ],

    hinweis: "Die Muster beschreiben die klassische Syndromlehre und dienen dem Unterricht. " +
             "Sie ersetzen weder Diagnose noch ärztliche Abklärung."
  },

  points: [
    { n:1, pinyin:"Yǐnbái", han:"隐白", de:"Verborgenes Weiß", en:"Hidden White",
      x:379, y:1113, key:true, role:"TING",
      antik:"ting", wx:"holz",
      tags:["Ting / Jing – Brunnen-/Quellpunkt","hält das Blut"],
      wirkung:["Ting / Jing – Brunnen-/Quellpunkt", "Holzpunkt der Milz-Leitbahn", "", "Hält das Blut in den Gefäßen", "Stillt Blutungen, besonders zu starke Regel", "Klärt den Geist und beruhigt bei Albträumen"],
      loc:"Auf der medialen Seite der Großzehe, ein Fen (0,1 Cun) proximal des Nagelfalzwinkels.",
      ind:"Zu starke Regelblutung, Blut im Stuhl, Nasenbluten, Albträume, Unruhe im Denken, Bewusstlosigkeit.",
      nd:"Schräg 0,1 Cun. Bei Blutungen klassisch Moxa statt Nadel." },

    { n:2, pinyin:"Dàdū", han:"大都", de:"Die große Stadt", en:"Great Metropolis",
      x:384, y:1104, key:false, role:"YONG · TON",
      antik:"yong", wx:"feuer",
      tags:["Yong / Ying – kleiner Flusspunkt","Tonisierungspunkt"],
      wirkung:["Yong / Ying – kleiner Flusspunkt", "Feuerpunkt der Milz-Leitbahn", "Tonisierungspunkt", "", "Stärkt die Milz und wärmt die Mitte", "Löst Völlegefühl nach dem Essen", "Klärt Hitze"],
      loc:"An der medialen, tibialen Seite der Großzehe, distal des Zehengrundgelenks, an der Grenze zwischen rotem und weißem Fleisch.",
      ind:"Völle im Bauch, Erbrechen, Durchfall, Fieber ohne Schweiß, Schweregefühl im Körper.",
      nd:"Senkrecht 0,3–0,5 Cun." },

    { n:3, pinyin:"Tàibái", han:"太白", de:"Das größte Weiße", en:"Supreme White",
      x:383, y:1092, key:true, role:"YU · YUAN · BEN",
      antik:"yu", wx:"erde",
      tags:["Yu / Shu – größerer Flusspunkt","Yuan-Quellpunkt","Ben-Punkt"],
      wirkung:["Yu / Shu – Bachpunkt", "Erdpunkt der Milz-Leitbahn", "Yuan-Quellpunkt", "Ben-Punkt", "", "Stärkt Milz und Magen", "Löst Feuchtigkeit", "Ordnet die Verdauung", "Kräftigt den Fuß"],
      loc:"An der medialen Seite des Fußes, proximal des Kopfes des ersten Mittelfußknochens, an der Grenze zwischen rotem und weißem Fleisch.",
      ind:"Bauchschmerz und Völle, Durchfall, Verstopfung, schwere Glieder, Erschöpfung – der Grundpunkt zum Stärken der Milz.",
      nd:"Senkrecht 0,5–0,8 Cun." },

    { n:4, pinyin:"Gōngsūn", han:"公孙", de:"Enkel des Herzogs", en:"Yellow Emperor",
      x:391, y:1080, key:true, role:"LUO",
      tags:["Luo-Punkt – Verbindungspunkt","zieht zum Yuan-Punkt Ma 42","Öffnungspunkt des Chong Mai"],
      wirkung:["Luo-Punkt – zieht zum Yuan-Punkt Ma 42", "Öffnungspunkt des Chong Mai", "", "Ordnet Magen und Darm", "Löst Nahrungsstau und Bauchschmerz", "Reguliert den Chong Mai und die Regel", "Beruhigt den Geist"],
      loc:"In einer Vertiefung distal und inferior der Basis des ersten Mittelfußknochens, an der Grenze zwischen weißem und rotem Fleisch.",
      ind:"Magenschmerz, Erbrechen, Durchfall, Bauchkrämpfe, Regelbeschwerden, Unruhe – klassisch gepaart mit Pe 6.",
      nd:"Senkrecht 0,6–1,2 Cun." },

    { n:5, pinyin:"Shāngqiū", han:"商丘", de:"Kleiner Fersenberg", en:"Shang Hill",
      x:389, y:1052, key:false, role:"KING · SED",
      antik:"king", wx:"metall",
      tags:["King / Jing – Strom-/Flusspunkt","Sedierungspunkt"],
      wirkung:["King / Jing – Strom-/Flusspunkt", "Metallpunkt der Milz-Leitbahn", "Sedierungspunkt", "", "Löst Feuchtigkeit aus der Mitte", "Stärkt die Milz", "Öffnet die Leitbahn am Sprunggelenk"],
      loc:"In der Vertiefung am Treffpunkt der vorderen und unteren Grenze des Innenknöchels.",
      ind:"Schwellung und Schmerz im Sprunggelenk, Völle im Bauch, Durchfall, schwere Glieder, Gelbsucht.",
      nd:"Senkrecht 0,3–0,5 Cun." },

    { n:6, pinyin:"Sānyīnjiāo", han:"三阴交", de:"Verbindung der drei Yin", en:"Three Yin Intersection",
      x:385, y:995, key:true, role:"GRUPPEN-LUO",
      tags:["Treffpunkt der drei Fuß-Yin-Meridiane","Gruppen-Luo-Punkt","einer der meistgenutzten Punkte"],
      wirkung:["Treffpunkt der drei Fuß-Yin-Leitbahnen", "Gruppen-Luo-Punkt", "", "Stärkt Milz und Magen", "Nährt Leber und Niere, Blut und Yin", "Reguliert die Regel und den Unterbauch", "Beruhigt den Geist", "In der Schwangerschaft streng gemieden"],
      loc:"3 Cun proximal der Spitze des Innenknöchels, am Hinterrand der Tibia.",
      ind:"Alle Regel- und Unterleibsbeschwerden, Verdauungsstörungen, Schlaflosigkeit, Nässe in den Beinen, Hauterkrankungen.",
      nd:"Senkrecht 1–1,5 Cun. In der Schwangerschaft streng verboten – der Punkt bewegt das Blut kräftig nach unten." },

    { n:8, pinyin:"Dìjī", han:"地机", de:"Drehpunkt der Erde", en:"Earth Pivot",
      x:397, y:887, key:false, role:"XI",
      tags:["Xi-Cleft – Akkumulationspunkt","Akutpunkt bei Blut"],
      wirkung:["Xi-Cleft – Akkumulationspunkt", "", "Akutpunkt bei Schmerz in der Regel", "Bewegt das Blut und löst Stauung", "Leitet Feuchtigkeit aus"],
      loc:"3 Cun distal von MP 9 und 10 Cun proximal der Spitze des Innenknöchels, am Hinterrand der Tibia.",
      ind:"Akute Regelschmerzen, akuter Bauchschmerz, Durchfall, Wasseransammlung, Schmerz im Unterschenkel.",
      nd:"Senkrecht 1–1,5 Cun." },

    { n:9, pinyin:"Yīnlíngquán", han:"阴陵泉", de:"Quelle am Yin-Hügel", en:"Yin Mound Spring",
      x:397, y:840, key:true, role:"HO",
      antik:"ho", wx:"wasser",
      tags:["Ho / He – Meerpunkt","der Punkt gegen Nässe"],
      wirkung:["Ho / He – Meerpunkt", "Wasserpunkt der Milz-Leitbahn", "", "Der Punkt gegen Nässe – leitet Feuchtigkeit aus", "Löst Ödeme und schweres Gefühl", "Öffnet das Wasser im Unteren Erwärmer", "Behandelt das Knie von innen"],
      loc:"Auf der medialen Seite des Knies, in der Vertiefung zwischen dem Condylus medialis der Tibia und dem Hinterrand der Tibia – etwa auf Höhe der Tuberositas tibiae.",
      ind:"Feuchtigkeit in jeder Form: Ödeme, Wasser im Knie, schwere Beine, weicher Stuhl, trüber oder spärlicher Urin, Ausfluss.",
      nd:"Senkrecht 1–2 Cun." },

    { n:10, pinyin:"Xuèhǎi", han:"血海", de:"Meer des Blutes", en:"Sea of Blood",
      x:398, y:764, key:true, role:"",
      tags:["kühlt und bewegt das Blut"],
      wirkung:["Blutpunkt der Milz-Leitbahn", "", "Kühlt das Blut bei Hitze in der Haut", "Bewegt das Blut und ordnet die Regel", "Lindert Juckreiz und Hautausschläge"],
      loc:"2 Cun proximal des oberen medialen Randes der Patella, auf dem Bauch des M. vastus medialis. Tastprobe: die Handfläche auf die Kniescheibe legen, der Daumen zeigt auf den Punkt.",
      ind:"Hauterkrankungen mit Juckreiz, Ekzeme, Nesselsucht, unregelmäßige oder schmerzhafte Regel, Blutstauung.",
      nd:"Senkrecht 1–1,5 Cun." },

    { n:15, pinyin:"Dàhéng", han:"大横", de:"Große Querverbindung", en:"Great Horizontal",
      x:371, y:436, key:false, role:"",
      tags:["Treffpunkt mit dem Yinwei Mai"],
      wirkung:["Treffpunkt mit dem Yinwei Mai", "", "Ordnet den Darm und löst Verstopfung", "Bewegt das Qi im Bauch", "Löst Feuchtigkeit im Unteren Erwärmer"],
      loc:"4 Cun lateral der Mitte des Nabels, auf Höhe von Ren 8.",
      ind:"Bauchschmerz mit Krämpfen, Verstopfung, Durchfall, Schweregefühl im Bauch.",
      nd:"Senkrecht 1–2 Cun." },

    { n:21, pinyin:"Dàbāo", han:"大包", de:"Große Umhüllung", en:"Great Embracement",
      x:348, y:352, key:true, role:"GROSSES LUO",
      tags:["Großes Luo der Milz","Endpunkt des Meridians","versorgt alle Luo-Gefäße"],
      wirkung:["Großes Luo der Milz", "Endpunkt der Milz-Leitbahn", "", "Versorgt alle Luo-Gefäße des Körpers", "Löst Schmerz am ganzen Körper", "Öffnet die Brust und die Rippenseiten"],
      loc:"In der mittleren Axillarlinie, im sechsten Zwischenrippenraum.",
      ind:"Schmerz am ganzen Körper, Schwäche aller Glieder, Schmerz in der Brustseite, Atemnot. Von hier geht nach der Vorlage ein eigenes Luo-Netz aus.",
      nd:"Schräg oder tangential 0,5–0,8 Cun. Nicht senkrecht tief – Pleuragefahr." }
  ]
});
