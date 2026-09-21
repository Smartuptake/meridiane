/* Herzmeridian – Hand-Shaoyin – 手少阴心经
   Punktlagen kalibriert auf img/front.png (880 × 1168). Arm am 21.09.2026
   neu vermessen: vordere Achselfalte auf Höhe y 344, Ellenbeugefalte
   y 421, Handgelenksfalte y 530. Oberarm 9 Cun = 85 px (9,5 px je Cun),
   Unterarm 12 Cun = 126 px (10,5 px je Cun). Der Arm steht schräg; ein
   Cun ist deshalb entlang der Armachse zu rechnen, nicht senkrecht.
   Der Verlauf liegt auf der Ulnarseite, also an der Innenkante des Arms. */
Meridian.register({
  id: "ht", code: "HT", codeDe: "He", ord: 5,
  name: "Herz", titel: "Herzmeridian", nameHan: "心经",
  channel: "Hand-Shaoyin", channelHan: "手少阴",
  element: "Feuer", elementHan: "火", wx: "feuer",
  yin: true, coupled: "si", coupledName: "Dünndarm",
  clock: "11 – 13 Uhr", pointCount: 9, direction: "Brust → Hand",
  view: "front", mirror: true,

  intro: "Der Hand-Shaoyin-Meridian des Herzens eröffnet den zweiten Umlauf. Mit neun Punkten " +
         "ist er der kürzeste der zwölf – hier sind alle neun eingezeichnet, keine Auswahl. " +
         "Er tritt in der Mitte der Achselhöhle an He 1 aus dem Rumpf, läuft an der Innenkante " +
         "des Oberarms und über die Ulnarseite des Unterarms abwärts und endet an He 9 am " +
         "Nagelfalz des kleinen Fingers.",

  cun: { ellenbeuge: [296, 419], handgelenk: [228, 526],
         hinweis: "He 3 → He 7 = 12 Cun; He 4, He 5 und He 6 liegen 1,5, 1 und 0,5 Cun über He 7" },

  path: [[330,340],[318,362],[306,393],[301,406],[296,419],[281,437],[264,462],[250,490],
         [234,514],[229,520],[226,524],[223,529],[220,533],[215,545],[207,562],[200,578],
         [197,600],[195,618]],

  inner: "M418,296 C428,340 434,386 432,428",
  branches: [
    { label: "Vom Herzen zur Achselhöhle", d: "M418,300 C398,310 362,320 338,326" },
    { label: "Ast zum Auge", d: "M416,290 C412,256 414,222 417,190 C418,160 418,132 417,114" }
  ],

  /* --- Das Organ --- */
  organ: {
    titel: "Das Herz in der chinesischen Medizin",
    pinyin: "Xīn", han: "心", wx: "feuer",
    text: [
      "Das Herz heißt in den Klassikern der Kaiser unter den Organen. Zwei Aufgaben machen " +
      "seinen Rang aus: es bewegt das Blut in den Gefäßen, und es beherbergt den Shen – " +
      "Geist, Bewusstsein, das Wachsein selbst.",

      "Deshalb steht beim Herzen immer beides nebeneinander: der Puls und der Schlaf, die " +
      "Gesichtsfarbe und die Klarheit des Denkens, das Herzklopfen und die Unruhe. Wer " +
      "Herzbeschwerden behandelt, behandelt fast nie nur den Kreislauf.",

      "Seine Emotion ist die Freude – allerdings die maßvolle. Übermaß an Erregung zerstreut " +
      "den Shen ebenso, wie Freudlosigkeit ihn verdunkelt. Sein Glanz zeigt sich im Gesicht, " +
      "seine Öffnung ist die Zunge, und der Schweiß gilt als seine Flüssigkeit.",

      "Ein Umstand ist im Unterricht besonders lohnend: das Herz gibt Hitze an seinen Partner " +
      "weiter. Herz-Feuer zeigt sich deshalb häufig nicht in der Brust, sondern als brennender " +
      "dunkler Urin – über den gekoppelten Dünndarm."
    ],

    aufgabenTitel: "Die Aufgaben des Herzens",
    aufgaben: [
      { titel: "Es beherrscht Blut und Gefäße", han: "主血脉",
        text: "Das Herz bewegt das Blut und hält die Gefäße offen. Davon hängen Puls und " +
              "Durchblutung ab. Ist genug Blut da und fließt es frei, ist der Puls ruhig und " +
              "voll, das Gesicht rosig, die Hände warm. Fehlt Blut, wird der Puls dünn; " +
              "stockt es, entsteht stechender Schmerz und die Lippen werden dunkel." },
      { titel: "Es beherbergt den Shen", han: "藏神",
        text: "Der Shen ist das Bewusstsein und die Gegenwärtigkeit eines Menschen – " +
              "erkennbar am Blick. Das Herz ist sein Wohnort. Ist es ruhig und gut genährt, " +
              "schläft man ein und durch, denkt klar und erinnert sich. Wird es gestört, " +
              "entstehen Herzklopfen, Schlaflosigkeit, Unruhe, Vergesslichkeit." },
      { titel: "Es öffnet sich in der Zunge", han: "开窍于舌",
        text: "Sprache und Geschmack gehören zum Herzen; die Zungenspitze ist sein Bereich in " +
              "der Zungendiagnose. Eine rote Spitze zeigt Herz-Hitze, Aphthen an der " +
              "Zungenspitze Herz-Feuer, Stammeln oder plötzliche Sprachlosigkeit eine " +
              "Störung des Shen." },
      { titel: "Sein Glanz zeigt sich im Gesicht", han: "其华在面",
        text: "Weil das Gesicht reich durchblutet ist, liest die Diagnose dort den Zustand von " +
              "Herz und Blut ab: rosig und lebendig bei Fülle, blass und stumpf bei " +
              "Blut-Mangel, fahl-bläulich bei Stagnation, gerötet bei Hitze." },
      { titel: "Der Schweiß ist seine Flüssigkeit", han: "汗为心之液",
        text: "Schweiß und Blut stammen aus derselben Quelle. Deshalb schwächt starkes " +
              "Schwitzen das Herz, und umgekehrt schwitzt, wer schwaches Herz-Qi hat, ohne " +
              "Anlass – am Tag bei Qi-Mangel, nachts bei Yin-Mangel." }
    ],

    zustaendeTitel: "Mangel und Fülle von Yin und Yang",
    zustaendeHinweis: "Mangel (Xū 虚) heißt: etwas fehlt. Fülle (Shí 实) heißt: etwas ist zu " +
                      "viel da und blockiert. Beim Herzen zeigt sich beides doppelt – am " +
                      "Kreislauf und am Geist. Herzklopfen ohne Schlafstörung ist beim Herzen " +
                      "die Ausnahme.",
    zustaende: [
      { feld: "Yin-Mangel", en: "Heart Yin Deficiency", han: "心阴虚", pinyin: "xīn yīn xū",
        kurz: "Es fehlt das Kühlende und Nährende. Leere-Hitze steigt auf.",
        zeichen: "Herzklopfen, das abends zunimmt, Einschlafen gelingt, aber der Schlaf ist " +
                 "flach und unruhig mit vielen Träumen, Nachtschweiß, Hitze in den fünf " +
                 "Herzen, trockener Mund, innere Unruhe ohne Anlass, gerötete Wangen am " +
                 "Nachmittag.",
        zunge: "rot, besonders an der Spitze, belaglos, oft mit einem Riss bis zur Spitze",
        puls: "dünn und schnell",
        punkte: "He 6 · He 7 · Pe 6 · Ni 6 · Bl 15" },

      { feld: "Yang-Mangel", en: "Heart Yang Deficiency", han: "心阳虚", pinyin: "xīn yáng xū",
        kurz: "Es fehlt Wärme und Antriebskraft. Das Blut wird nicht mehr bewegt.",
        zeichen: "Herzklopfen und Kurzatmigkeit, die bei Anstrengung deutlich zunehmen, " +
                 "Schwitzen ohne Anlass am Tag, Engegefühl in der Brust, kalte Hände und Füße, " +
                 "blasses Gesicht, Erschöpfung. Bei ausgeprägter Schwäche bläuliche Lippen " +
                 "und kalter Schweiß.",
        zunge: "blass, geschwollen, feucht",
        puls: "tief und schwach, oft unregelmäßig aussetzend",
        punkte: "He 5 · Ren 17 mit Moxa · Bl 15 · Du 14 · Pe 6" },

      { feld: "Yin-Fülle", en: "Phlegm misting the Heart", han: "痰迷心窍", pinyin: "tán mí xīn qiào",
        kurz: "Schleim verlegt die Öffnungen des Herzens und trübt den Geist.",
        zeichen: "Benommenheit und Verwirrtheit, undeutliches Reden oder Murmeln, " +
                 "Unfähigkeit, einen Gedanken zu halten, Engegefühl in der Brust, Übelkeit. " +
                 "Bei starker Stauung Bewusstseinsverlust mit rasselnder Atmung, in " +
                 "chronischer Form geistige Verwirrung.",
        zunge: "geschwollen, dicker klebriger Belag",
        puls: "schlüpfrig",
        punkte: "Pe 5 · Ma 40 · He 7 · Du 26 · Ren 12" },

      { feld: "Yang-Fülle", en: "Heart Fire Blazing", han: "心火亢盛", pinyin: "xīn huǒ kàng shèng",
        kurz: "Feuer lodert im Herzen und drängt nach oben und nach unten.",
        zeichen: "Starke innere Unruhe und Reizbarkeit, Einschlafen gelingt nicht, rotes " +
                 "Gesicht, bitterer Geschmack, Durst auf Kaltes, Aphthen und Geschwüre an " +
                 "Zunge und Mund, Herzklopfen – und, über den gekoppelten Dünndarm, " +
                 "brennender, dunkler, spärlicher Urin.",
        zunge: "rot mit deutlich roter Spitze, gelber Belag, oft Geschwüre",
        puls: "schnell und voll",
        punkte: "He 8 · He 9 · Dü 2 · Ren 15 · Pe 8" }
    ],

    aeussereTitel: "Zwei Muster, die das Blut betreffen",
    aeussere: [
      { name: "Herz-Blut-Mangel", han: "心血虚", pinyin: "xīn xuè xū",
        zeichen: "Herzklopfen, Schwindel beim Aufstehen, Vergesslichkeit, Einschlafstörung, " +
                 "blasse Lippen und blasses Gesicht, leichtes Erschrecken. Oft zusammen mit " +
                 "einer Milz-Schwäche, weil die Milz das Blut erzeugt – dann werden beide " +
                 "zugleich behandelt.",
        punkte: "He 7 · Bl 15 · Bl 17 · Bl 20 · Ren 4" },
      { name: "Herz-Blut stockt", han: "心血瘀阻", pinyin: "xīn xuè yū zǔ",
        zeichen: "Stechender oder zusammenschnürender Schmerz in der Brust, der in die " +
                 "Innenseite des linken Arms ausstrahlt – genau dem Meridianverlauf folgend –, " +
                 "dunkle Lippen und Nägel, kalte Hände, Engegefühl. Ein Bild, das ärztlich " +
                 "abgeklärt gehört.",
        punkte: "Pe 6 · He 5 · Ren 17 · Bl 15 · Bl 17" }
    ],

    nahrungTitel: "Was das Herz stärkt und was ihm schadet",
    nahrung: {
      staerkt: [
        { was: "Weizen, Süßholz und Jujube-Datteln", warum: "die klassische Zusammenstellung gegen innere Unruhe und grundloses Weinen" },
        { was: "Longan und Goji", warum: "nähren Herz-Blut, klassisch bei Schlaflosigkeit mit Vergesslichkeit" },
        { was: "Lotossamen und Lilienknollen", warum: "beruhigen den Shen und nähren zugleich das Yin" },
        { was: "Hafer", warum: "nährt und beruhigt, ohne zu erhitzen" },
        { was: "Bitteres in kleiner Menge: Chicorée, Radicchio, Löwenzahn", warum: "der bittere Geschmack gehört zum Feuer und senkt es ab" },
        { was: "Rote Lebensmittel: rote Bete, Kirschen, rote Bohnen", warum: "die Farbe der Wandlungsphase Feuer, blutnährend" },
        { was: "Melisse, Kamille, Lindenblüte", warum: "kühl und beruhigend am Abend" },
        { was: "Die Mittagsruhe", warum: "die Maximalzeit des Herzens liegt zwischen elf und dreizehn Uhr" }
      ],
      schadet: [
        { was: "Kaffee und koffeinhaltige Getränke im Übermaß", warum: "treiben das Herz-Qi an und zerstreuen den Shen" },
        { was: "Alkohol am Abend", warum: "erzeugt Hitze und macht den Schlaf flach, gerade wenn er zunächst müde macht" },
        { was: "Sehr Scharfes und Frittiertes", warum: "nähren das Herz-Feuer" },
        { was: "Spätes, schweres Abendessen", warum: "die Mitte arbeitet nachts gegen den Schlaf" },
        { was: "Viel Zucker", warum: "gibt kurz Auftrieb und lässt danach Unruhe zurück" },
        { was: "Bildschirme bis kurz vor dem Schlafen", warum: "kein Nahrungsmittel, aber der häufigste Grund für einen unruhigen Shen" }
      ],
      hinweis: "Der bittere Geschmack gehört zum Herzen und senkt Feuer ab – in kleiner Menge. " +
               "Im Übermaß trocknet er das Yin aus, und dann kippt Fülle in Mangel. Und: das " +
               "Herz wird selten allein behandelt, sondern fast immer zusammen mit der Milz, " +
               "die sein Blut erzeugt, oder mit der Niere, die sein Feuer bändigt."
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
      { k: "Geistaspekt", v: "Shen 神, Geist" },
      { k: "Gekoppelt", v: "Dünndarm" }
    ],

    hinweis: "Die Muster beschreiben die klassische Syndromlehre und dienen dem Unterricht. " +
             "Sie ersetzen weder Diagnose noch ärztliche Abklärung. Brustschmerz gehört " +
             "grundsätzlich ärztlich abgeklärt."
  },

  points: [
    { n:1, pinyin:"Jíquán", han:"极泉", de:"Höchste Quelle", en:"Highest Spring",
      x:330, y:340, key:false, role:"",
      tags:["Anfangspunkt des Meridians"],
      wirkung:["Anfangspunkt der Herz-Leitbahn", "", "Öffnet die Brust und löst Beklemmung", "Bewegt das Qi in Achsel und Oberarm", "Lindert Schmerz im Herzbereich"],
      marken:["achselfalte_v"],
      loc:"In der Mitte der Achselhöhle, dort wo die A. axillaris pulsiert, bei erhobenem Arm.",
      ind:"Schmerz in der Brust und in der Herzgegend, Schmerz und Taubheit im Arm, geschwollene Lymphknoten in der Achsel, Trockenheit im Hals.",
      nd:"Senkrecht 0,3–0,5 Cun, die Arterie meiden. Alternativ vorsichtige Druckbehandlung." },

    { n:2, pinyin:"Qīnglíng", han:"青灵", de:"Blaugrüner Geist", en:"Cyan Spirit",
      x:306, y:393, key:false, role:"",
      tags:[],
      wirkung:["Lokalpunkt am Oberarm", "", "Öffnet die Leitbahn an der Innenseite des Oberarms", "Lindert Schmerz in Schulter und Arm", "Klärt den Kopf"],
      marken:["bizeps_innen"],
      loc:"3 Cun proximal von He 3, in der Rinne medial des M. biceps brachii.",
      ind:"Schmerz in Schulter und Arm, Kopfschmerz, Gelbfärbung der Augen, Schmerz in der Brustseite.",
      nd:"Senkrecht 0,5–1 Cun." },

    { n:3, pinyin:"Shàohǎi", han:"少海", de:"Kleines Meer", en:"Lesser Sea",
      x:296, y:419, key:true, role:"HO",
      antik:"ho", wx:"wasser",
      tags:["Ho / He – Meerpunkt","kühlt Herz-Feuer"],
      wirkung:["Ho / He – Meerpunkt", "Wasserpunkt der Herz-Leitbahn", "", "Kühlt Herz-Feuer", "Beruhigt den Geist bei Unruhe und Zittern", "Öffnet die Leitbahn am Ellenbogen"],
      marken:["ellenbeuge", "epicond_med"],
      loc:"Bei gebeugtem Ellenbogen am ulnaren Ende der Ellenbeugefalte, in der Mitte zwischen der Falte und dem Epicondylus medialis humeri.",
      ind:"Herzschmerz, Zittern der Hand, Taubheit im Arm, Vergesslichkeit, Schwindel, geschwollene Lymphknoten.",
      nd:"Senkrecht 0,5–1 Cun." },

    { n:4, pinyin:"Língdào", han:"灵道", de:"Weg des Geistes", en:"Spirit Pathway",
      x:229, y:520, key:false, role:"KING",
      antik:"king", wx:"metall",
      tags:["King / Jing – Strom-/Flusspunkt"],
      wirkung:["King / Jing – Strom-/Flusspunkt", "Metallpunkt der Herz-Leitbahn", "", "Beruhigt den Geist", "Löst plötzliche Sprachlosigkeit", "Ordnet den Herzrhythmus"],
      marken:["fcu", "handgelenksfalte"],
      loc:"1,5 Cun proximal der Handgelenksfalte, radial der Sehne des M. flexor carpi ulnaris.",
      ind:"Plötzlicher Stimmverlust, Herzschmerz, Krampf im Unterarm, Beklemmung.",
      nd:"Senkrecht 0,3–0,5 Cun." },

    { n:5, pinyin:"Tōnglǐ", han:"通里", de:"Innere Verbindung", en:"Connecting Li",
      x:226, y:524, key:true, role:"LUO",
      tags:["Luo-Punkt – Verbindungspunkt","zieht zum Yuan-Punkt Dü 4"],
      wirkung:["Luo-Punkt – zieht zum Yuan-Punkt Dü 4", "", "Beruhigt den Geist", "Öffnet die Sprache – der Punkt bei plötzlicher Stimmlosigkeit", "Ordnet den Herzrhythmus", "Reguliert die Blase"],
      marken:["fcu", "handgelenksfalte"],
      loc:"1 Cun proximal der Handgelenksfalte, radial der Sehne des M. flexor carpi ulnaris.",
      ind:"Herzklopfen, Sprachstörung nach Schlaganfall, plötzlicher Stimmverlust, Beklemmung, Angst, Schmerz im Handgelenk.",
      nd:"Senkrecht 0,3–0,5 Cun." },

    { n:6, pinyin:"Yīnxì", han:"阴郄", de:"Yin-Spalt", en:"Yin Cleft",
      x:223, y:529, key:false, role:"XI",
      antik:null, wx:null,
      tags:["Xi-Cleft – Akkumulationspunkt","der Punkt gegen Nachtschweiß"],
      wirkung:["Xi-Cleft – Akkumulationspunkt", "", "Der Punkt gegen Nachtschweiß", "Kühlt Leerhitze und nährt das Herz-Yin", "Stillt Blutungen bei Hitze"],
      marken:["fcu", "handgelenksfalte"],
      loc:"0,5 Cun proximal der Handgelenksfalte, radial der Sehne des M. flexor carpi ulnaris.",
      ind:"Nachtschweiß, plötzliches Herzklopfen mit Angst, Nasenbluten, Bluthusten, Hitzewallungen.",
      nd:"Senkrecht 0,3–0,5 Cun." },

    { n:7, pinyin:"Shénmén", han:"神门", de:"Tor des Geistes", en:"Spirit Gate",
      x:220, y:533, key:true, role:"YU · YUAN · SED",
      antik:"yu", wx:"erde",
      tags:["Yu / Shu – größerer Flusspunkt","Yuan-Quellpunkt","Sedierungspunkt","der Hauptpunkt für den Shen"],
      wirkung:["Yu / Shu – Bachpunkt", "Erdpunkt der Herz-Leitbahn", "Yuan-Quellpunkt", "Sedierungspunkt", "", "Der Hauptpunkt für den Shen: beruhigt den Geist", "Bringt Schlaf bei Unruhe und Grübeln", "Nährt das Herz-Blut", "Klärt Hitze im Herzen"],
      marken:["handgelenksfalte", "erbsenbein", "fcu"],
      loc:"An der Handgelenksfalte, radial der Sehne des M. flexor carpi ulnaris, am radialen Rand des Os pisiforme.",
      ind:"Schlaflosigkeit, innere Unruhe, Angst, Herzklopfen, Vergesslichkeit, Schreckhaftigkeit – der meistgenutzte Punkt zur Beruhigung des Geistes.",
      nd:"Senkrecht 0,3–0,5 Cun." },

    { n:8, pinyin:"Shàofǔ", han:"少府", de:"Kleine Residenz", en:"Lesser Mansion",
      x:200, y:578, key:false, role:"YONG · BEN",
      antik:"yong", wx:"feuer",
      tags:["Yong / Ying – kleiner Flusspunkt","Ben-Punkt"],
      wirkung:["Yong / Ying – kleiner Flusspunkt", "Feuerpunkt der Herz-Leitbahn", "Ben-Punkt", "", "Kühlt Herz-Feuer", "Klärt Hitze aus dem Kleinfinger und der Handfläche", "Beruhigt Herzklopfen"],
      marken:["mhk45"],
      loc:"In der Handfläche zwischen dem vierten und fünften Mittelhandknochen – dort, wo die Spitze des kleinen Fingers bei locker geschlossener Faust aufliegt.",
      ind:"Herzklopfen, Schmerz in der Brust, brennender Urin, Juckreiz im Genitalbereich, kleiner Finger krampft.",
      nd:"Senkrecht 0,3–0,5 Cun." },

    { n:9, pinyin:"Shàochōng", han:"少冲", de:"Kleiner Ansturm", en:"Lesser Surge",
      x:195, y:618, key:true, role:"TING · TON",
      antik:"ting", wx:"holz",
      tags:["Ting / Jing – Brunnen-/Quellpunkt","Tonisierungspunkt","Wiederbelebungspunkt"],
      wirkung:["Ting / Jing – Brunnen-/Quellpunkt", "Holzpunkt der Herz-Leitbahn", "Tonisierungspunkt", "", "Belebt bei Bewusstlosigkeit – ein Notfallpunkt", "Klärt Hitze aus dem Herzen", "Öffnet die Sinne"],
      marken:["kleinfinger_rad"],
      loc:"An der radialen Seite des kleinen Fingers, ein Fen (0,1 Cun) proximal des Nagelfalzwinkels.",
      ind:"Bewusstlosigkeit, Hitzschlag, Fieber, Herzschmerz, Beklemmung, Angstzustände.",
      nd:"Schräg 0,1 Cun oder Mikroaderlass mit der Dreikantnadel." }
  ]
});
