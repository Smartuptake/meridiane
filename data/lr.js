/* Lebermeridian – Fuß-Jueyin – 足厥阴肝经
   Kalibriert auf img/front.png (880 × 1168). Landmarken am 21.09.2026 neu
   vermessen: Spitze des Innenknöchels y 1042 (nicht 998 – das ist die
   schmalste Stelle des Knöchels), Kniegelenksspalt y 827, Condylus medialis
   der Tibia y 840. Innen gelten 13 Cun zwischen Condylus und Knöchelspitze,
   also 15,5 Bildpunkte je Cun am Unterschenkel. Am Oberschenkel Schambein
   y 487 bis Knie y 827, dazwischen 18 Cun, also 18,9 Bildpunkte je Cun.
   Waagerecht 1 Cun = 16,6 Bildpunkte (Brustwarzen 370 und 502, 8 Cun);
   Mittellinie x 437, Nabel y 436, Brustwarze y 310, Rippenabstand 17. */
Meridian.register({
  id: "lr", code: "LR", codeDe: "Le", ord: 12,
  name: "Leber", titel: "Lebermeridian", nameHan: "肝经",
  channel: "Fuß-Jueyin", channelHan: "足厥阴",
  element: "Holz", elementHan: "木", wx: "holz",
  yin: true, coupled: "gb", coupledName: "Gallenblase",
  clock: "1 – 3 Uhr", pointCount: 14, direction: "Fuß → Brust",
  view: "front", mirror: true,

  intro: "Der Fuß-Jueyin-Meridian der Leber ist mit vierzehn Punkten einer der " +
         "kürzesten – und einer der wirkungsvollsten. Er beginnt an der Außenseite " +
         "des Großzehennagels, läuft über den Fußrücken zwischen erstem und zweitem " +
         "Mittelfußknochen, vor dem Innenknöchel vorbei und an der Innenseite des " +
         "Unterschenkels hinauf. Drei Cun über dem Knöchel kreuzt er den Milzmeridian " +
         "und läuft von da an hinter ihm weiter. Über die Knieinnenseite und die " +
         "Innenseite des Oberschenkels zieht er zum Schambereich, umkreist die " +
         "Geschlechtsteile, tritt in den Bauch ein und endet mit Le 13 am freien Ende " +
         "der elften Rippe und Le 14 im sechsten Zwischenrippenraum unter der " +
         "Brustwarze. Alle vierzehn Punkte sind hier eingezeichnet.",

  cun: { knoechel: [392, 1042], knie: [399, 840],
         hinweis: "Spitze des Innenknöchels → Condylus medialis der Tibia = 13 Cun; Le 5 liegt 5, Le 6 liegt 7 Cun über dem Knöchel" },

  path: [[363,1113],[361,1100],[368,1082],[374,1062],[380,1046],[383,1005],[385,965],[390,934],
         [394,890],[397,851],[399,815],[402,740],[402,680],[402,620],[404,582],[403,525],
         [396,487],[385,470],[372,440],[361,415],[362,388],[369,344]],

  inner: "M396,492 C414,488 428,486 437,486 C440,470 438,452 436,436 C432,410 424,384 414,360",
  branches: [
    { label: "Ast zu Augen und Scheitel", d: "M412,352 C424,318 430,272 432,222 C434,186 430,156 424,130 C421,120 419,114 418,110" },
    { label: "Ast zur Lunge", d: "M414,362 C400,342 390,326 386,312" }
  ],

  /* --- Das Organ --- */
  organ: {
    titel: "Die Leber in der chinesischen Medizin",
    pinyin: "Gān", han: "肝", wx: "holz",
    text: [
      "Die Leber ist der General. So nennt sie der klassische Text: „Die Leber hat das " +
      "Amt des Generals; von ihr gehen Planung und Entwurf aus.“ Sie sorgt dafür, dass " +
      "alles im Körper ungehindert fließt – das Qi, das Blut, die Gefühle, die " +
      "Verdauung, der Zyklus. Dieses Amt heißt Shū Xiè 疏泄, das freie Ausbreiten und " +
      "Durchlassen. Es ist die wichtigste und zugleich störanfälligste Aufgabe der " +
      "ganzen chinesischen Organlehre.",

      "Wenn der freie Fluss stockt, entsteht die Leber-Qi-Stagnation – das mit Abstand " +
      "häufigste Muster in der heutigen Praxis. Ihr Bild ist unverwechselbar: ein " +
      "Gefühl von Druck und Enge unter den Rippen und im Brustkorb, Seufzen, ein " +
      "Kloßgefühl im Hals, wechselnde Stimmung, Gereiztheit, Spannung in den Brüsten " +
      "und Beschwerden vor der Regel, ein Bauch, der mal bläht und mal krampft. " +
      "Kennzeichnend ist, dass alles kommt und geht und sich mit der Gemütslage " +
      "ändert. Staut sich die Stagnation lange, wird daraus Hitze – und aus Hitze " +
      "Leberfeuer.",

      "Die zweite große Aufgabe ist das Speichern des Blutes. In Ruhe kehrt das Blut " +
      "zur Leber zurück, in Tätigkeit schickt sie es in die Glieder. Daraus folgt " +
      "vieles: Sie versorgt die Sehnen und Bänder, sie zeigt sich an den Nägeln, sie " +
      "öffnet sich zu den Augen, und sie bestimmt bei der Frau Menge und Rhythmus der " +
      "Regelblutung. Trockene Augen, brüchige Nägel, Muskelkrämpfe in der Nacht und " +
      "eine schwache Regel gehören darum zusammen.",

      "Ihr Geist-Aspekt ist die Hun 魂, die Wanderseele. Sie ist nachts unterwegs und " +
      "kehrt am Morgen zurück; Träume, Vorstellungskraft und Zukunftspläne gehören zu " +
      "ihr. Findet sie keine Ruhe – weil das Blut sie nicht hält –, träumt man " +
      "unruhig, wacht zwischen ein und drei Uhr auf, redet oder wandelt im Schlaf. " +
      "Die Emotion der Leber ist der Zorn, im Guten die Entschlusskraft und der " +
      "Weitblick, die zum General gehören."
    ],

    aufgabenTitel: "Die Aufgaben der Leber",
    aufgaben: [
      { was: "Den freien Fluss des Qi sichern", han: "主疏泄",
        text: "Die zentrale Aufgabe. Sie betrifft die Verdauung, weil das Leber-Qi den " +
              "Magen absteigen und die Milz aufsteigen lässt; die Gefühle, weil " +
              "gestautes Qi sich als Gereiztheit oder Schwermut zeigt; und den Zyklus, " +
              "weil ohne freien Fluss die Regel schmerzt oder ausbleibt." },
      { was: "Das Blut speichern", han: "藏血",
        text: "In Ruhe kehrt das Blut zur Leber zurück, bei Tätigkeit schickt sie es " +
              "in die Glieder. Sie bestimmt damit auch die Menge der Regelblutung. Zu " +
              "wenig Leber-Blut heißt Blässe, Schwindel, Flimmern vor den Augen und " +
              "eine spärliche Regel." },
      { was: "Sehnen und Bänder beherrschen", han: "主筋",
        text: "Alles, was den Körper beweglich hält, wird vom Leber-Blut genährt. " +
              "Steifigkeit, Krämpfe, Zittern, nächtliche Wadenkrämpfe und " +
              "Sehnenbeschwerden weisen auf die Leber – vor allem, wenn sie ohne " +
              "erkennbare Überlastung auftreten." },
      { was: "Sich zu den Augen öffnen", han: "开窍于目",
        text: "„Wenn die Leber Blut empfängt, kann man sehen.“ Trockene, müde, " +
              "brennende oder flimmernde Augen, Nachtblindheit und verschwommenes " +
              "Sehen gehören hierher, ebenso rote und schmerzende Augen bei " +
              "Leberfeuer." },
      { was: "Sich an den Nägeln zeigen", han: "其华在爪",
        text: "Die Nägel gelten als Überschuss der Sehnen. Blasse, dünne, rissige oder " +
              "gerillte Nägel sind ein Zeichen für zu wenig Leber-Blut." },
      { was: "Die Hun beherbergen", han: "藏魂",
        text: "Die Wanderseele geht nachts aus und kehrt zurück. Hält das Blut sie " +
              "nicht, kommt es zu unruhigen Träumen, Aufwachen zwischen ein und drei " +
              "Uhr, Reden oder Wandeln im Schlaf und dem Gefühl, beim Einschlafen zu " +
              "fallen." }
    ],

    zustandTitel: "Mangel und Fülle von Yin und Yang",
    zustaende: [
      { feld: "Yin-Mangel", en: "Liver Blood and Yin Deficiency", han: "肝血虚·肝阴虚", pinyin: "gān xuè xū · gān yīn xū",
        kurz: "Der häufigste Mangel der Leber – zu wenig Blut, zu wenig Saft.",
        zeichen: "Trockene, müde, flimmernde Augen, verschwommenes Sehen, Mücken im " +
                 "Blickfeld, Schwindel beim Aufstehen, blasses oder fahles Gesicht, " +
                 "brüchige und gerillte Nägel, nächtliche Wadenkrämpfe, Zucken und " +
                 "Zittern, taube Glieder, spärliche oder ausbleibende Regel, " +
                 "unruhiger Schlaf mit vielen Träumen. Kommt Hitze dazu: Nachtschweiß, " +
                 "trockene Kehle, Hitze in den Handflächen, Reizbarkeit am Abend.",
        zunge: "blass und dünn bei Blutmangel; rot ohne Belag bei Yin-Mangel",
        puls: "dünn, bei Yin-Mangel zusätzlich schnell",
        punkte: "Le 8 · Le 3 · Bl 18 · Mi 6 · Ma 36 · Ni 3" },

      { feld: "Yang-Mangel", en: "Liver Yang Deficiency", han: "肝阳虚", pinyin: "gān yáng xū",
        kurz: "Das seltenste der vier Bilder – dem General fehlt der Antrieb.",
        zeichen: "Mutlosigkeit und Entschlusslosigkeit, Pläne werden angefangen und " +
                 "nicht zu Ende gebracht, Schreckhaftigkeit, Kältegefühl im " +
                 "Unterbauch und an den Geschlechtsteilen, kalte Füße, schwache " +
                 "Sehnen, Schwindel, bei Frauen eine wässrige, blasse Regel. Die " +
                 "Leber kennt vor allem Mangel an Blut und Yin; ein reiner " +
                 "Yang-Mangel wird fast immer zusammen mit der Niere behandelt.",
        zunge: "blass, feucht, geschwollen",
        puls: "tief, saitenförmig, kraftlos",
        punkte: "Le 3 mit Moxa · Le 8 · Du 20 · Ren 4 · Bl 18 · Bl 23" },

      { feld: "Yin-Fülle", en: "Cold Stagnating in the Liver Channel", han: "寒滞肝脉", pinyin: "hán zhì gān mài",
        kurz: "Kälte setzt sich dort fest, wo der Meridian die Geschlechtsteile umkreist.",
        zeichen: "Ziehender, kalter Schmerz im Unterbauch, der in Leiste und Hoden " +
                 "oder Schamlippen ausstrahlt, Schweregefühl und Zusammenziehen, " +
                 "Leistenbruch mit Schmerz, kalte Füße, deutliche Besserung durch " +
                 "Wärme und Verschlimmerung durch Kälte. Bei Frauen krampfartiger " +
                 "Regelschmerz mit dunklem Blut und Klumpen, der sich mit der " +
                 "Wärmflasche bessert.",
        zunge: "blass, feucht, weißer Belag",
        puls: "tief, langsam, saitenförmig",
        punkte: "Le 1 mit Moxa · Le 3 · Le 5 · Ren 4 mit Moxa · Ma 29" },

      { feld: "Yang-Fülle", en: "Liver Fire Blazing Upward", han: "肝火上炎", pinyin: "gān huǒ shàng yán",
        kurz: "Aus langer Stauung wird Hitze, und Hitze steigt nach oben.",
        zeichen: "Heftiger, pochender Kopfschmerz an Schläfe und Scheitel, rote und " +
                 "schmerzende Augen, plötzlich einsetzende laute Ohrgeräusche oder " +
                 "Taubheit, bitterer Mundgeschmack, trockene Kehle, rotes Gesicht, " +
                 "Zornausbrüche, Schlaflosigkeit mit lebhaften oder zornigen Träumen, " +
                 "Verstopfung, dunkler Urin, bei starkem Bild Nasenbluten oder Blut " +
                 "im Auswurf.",
        zunge: "rot, besonders an den Rändern, gelber Belag",
        puls: "saitenförmig, schnell und kräftig",
        punkte: "Le 2 · Le 3 · Gb 20 · Gb 43 · Di 11 · Bl 18" }
    ],

    aeussereTitel: "Wo der Meridian selbst betroffen ist",
    aeussere: [
      { name: "Gestautes Leber-Qi", han: "肝气郁结", pinyin: "gān qì yù jié",
        zeichen: "Das häufigste Bild überhaupt: Druck und Enge unter den Rippen und " +
                 "im Brustkorb, häufiges Seufzen, Kloßgefühl im Hals, das beim " +
                 "Schlucken verschwindet und danach wiederkommt, wechselnde Stimmung, " +
                 "Gereiztheit, Spannung und Schmerz in den Brüsten vor der Regel, " +
                 "Blähbauch, Stuhl mal fest mal weich. Alles schwankt mit der " +
                 "Gemütslage und bessert sich durch Bewegung.",
        punkte: "Le 3 · Le 14 · Le 13 · Pe 6 · Gb 34 · Di 4" },
      { name: "Der Verlauf an Leiste und Geschlechtsteilen", han: "疝气", pinyin: "shàn qì",
        zeichen: "Ziehen und Schmerz in der Leiste, Leistenbruch, Hodenschmerz oder " +
                 "Hochziehen des Hodens, Juckreiz und Ausfluss im Genitalbereich, " +
                 "Schmerz im Unterbauch, der zu den Geschlechtsteilen zieht. Der " +
                 "Meridian ist der einzige, der die Geschlechtsteile umkreist.",
        punkte: "Le 1 · Le 5 · Le 3 · Le 12 · Ren 3" },
      { name: "Augen, Schläfe und Scheitel", han: "目赤头痛", pinyin: "mù chì tóu tòng",
        zeichen: "Trockene oder rote Augen, Flimmern, verschwommenes Sehen, " +
                 "Kopfschmerz an der Schläfe und am Scheitel, Schwindel. Der innere " +
                 "Ast der Leber zieht zum Auge und weiter zum Scheitel – " +
                 "Scheitelkopfschmerz gilt als Leberkopfschmerz.",
        punkte: "Le 3 · Le 2 · Le 8 · Du 20 · Gb 20 · Bl 18" },
      { name: "Sehnen und Bänder", han: "筋急", pinyin: "jīn jí",
        zeichen: "Steifigkeit am Morgen, nächtliche Wadenkrämpfe, Zucken der Lider, " +
                 "Zittern, Sehnenbeschwerden ohne passende Überlastung, " +
                 "eingeschränkte Beweglichkeit, die sich mit Wärme und Bewegung " +
                 "bessert.",
        punkte: "Le 3 · Le 8 · Gb 34 · Bl 18 · Mi 6" }
    ],

    nahrungTitel: "Was die Leber stärkt und was ihr schadet",
    nahrung: {
      staerkt: [
        { was: "Grünes Blattgemüse, Brokkoli, junge Sprossen", warum: "die Farbe des Holzes; sie bringen Bewegung in das, was steht" },
        { was: "Etwas Saures: Zitrone, Essig, Sauerkraut, Umeboshi", warum: "der Geschmack des Holzes, in kleiner Menge sammelnd und lösend zugleich" },
        { was: "Rote Beete, dunkle Beeren, schwarzer Sesam", warum: "nähren das Leber-Blut, das die Sehnen und die Augen versorgt" },
        { was: "Pfefferminz-, Rosen- und Chrysanthemenblütentee", warum: "lösen gestautes Leber-Qi, Chrysanthemen kühlen dazu die Augen" },
        { was: "Regelmäßige Bewegung, am liebsten draußen", warum: "nichts löst eine Stagnation so zuverlässig wie Gehen" },
        { was: "Dehnen, Strecken, Ausschütteln", warum: "die Leber beherrscht die Sehnen; was gedehnt wird, kann wieder fließen" },
        { was: "Vor Mitternacht schlafen", warum: "die Maximalzeit liegt von ein bis drei Uhr; in dieser Zeit kehrt das Blut zur Leber zurück" }
      ],
      schadet: [
        { was: "Alkohol", warum: "erzeugt genau hier Hitze und Feuchtigkeit und heizt ein bestehendes Leberfeuer an" },
        { was: "Sehr fettes und stark Gebratenes", warum: "belastet den freien Fluss und erzeugt mit der Zeit Hitze" },
        { was: "Zu viel Saures", warum: "der eigene Geschmack zieht im Übermaß zusammen, statt zu lösen" },
        { was: "Späte, schwere Mahlzeiten", warum: "die Leber arbeitet nachts; wer spät isst, nimmt ihr die Ruhe dafür" },
        { was: "Unterdrückter Ärger", warum: "gestauter Zorn ist die unmittelbarste Ursache der Leber-Qi-Stagnation" },
        { was: "Stundenlanges Starren auf Bildschirme", warum: "das Sehen verbraucht Leber-Blut; trockene Augen sind das erste Zeichen" },
        { was: "Bewegungsmangel", warum: "was sich nicht bewegt, staut sich – bei keinem Organ so deutlich wie hier" }
      ],
      hinweis: "Le 3 Tàichōng auf dem Fußrücken ist der wichtigste Punkt des Meridians " +
               "und von außen leicht zu finden: vom Zwischenraum zwischen erster und " +
               "zweiter Zehe nach oben streichen, bis der Finger in der Lücke zwischen " +
               "den Knochen hängen bleibt. Zusammen mit Di 4 Hégǔ bildet er die " +
               "„Vier Tore“ – ein klassisches Paar, das Gestautes löst. Und: Wer " +
               "regelmäßig zwischen ein und drei Uhr aufwacht, sollte zuerst an die " +
               "Leber denken."
    },

    eigenschaften: [
      { k: "Wandlungsphase", v: "Holz 木" },
      { k: "Jahreszeit", v: "Frühling" },
      { k: "Klima", v: "Wind" },
      { k: "Geschmack", v: "sauer" },
      { k: "Farbe", v: "grün" },
      { k: "Sinnesorgan", v: "Augen" },
      { k: "Gewebe", v: "Sehnen und Bänder" },
      { k: "Blüht in", v: "den Nägeln" },
      { k: "Geist", v: "Hun 魂, Wanderseele" },
      { k: "Emotion", v: "Zorn, im Guten Entschlusskraft und Weitblick" },
      { k: "Organart", v: "Zang-Organ, Speicherorgan" },
      { k: "Gekoppelt", v: "Gallenblase" }
    ],

    hinweis: "Die Leber-Qi-Stagnation ist das häufigste Muster der heutigen Praxis und " +
             "steht am Anfang vieler anderer: aus Stagnation wird Hitze, aus Hitze " +
             "Feuer, aus Feuer Wind. Wer früh löst, muss später nicht kühlen. Die " +
             "Muster beschreiben die klassische Syndromlehre und dienen dem " +
             "Unterricht. Sie ersetzen weder Diagnose noch ärztliche Abklärung."
  },

  points: [
    { n:1, pinyin:"Dàdūn", han:"大敦", de:"Große Erhebung", en:"Large Pile",
      x:363, y:1113, key:false, role:"TING",
      antik:"ting", wx:"holz",
      tags:["Ting / Jing – Brunnen-/Quellpunkt","Punkt bei Leistenbruch"],
      wirkung:["Ting / Jing – Brunnen-/Quellpunkt", "Holzpunkt der Leber-Leitbahn", "", "Ordnet das Qi im Unterbauch", "Der Punkt beim Leistenbruch", "Stillt Blutungen und beruhigt den Geist"],
      loc:"An der Außenseite der großen Zehe, ein Fen (0,1 Cun) proximal des Nagelfalzwinkels – also auf der dem zweiten Zeh zugewandten Seite.",
      ind:"Leistenbruch und ziehender Schmerz im Hoden, Schmerz im Unterbauch, der zu den Geschlechtsteilen zieht, Bettnässen, Harnverhalt, Gebärmuttervorfall, langanhaltende Regelblutung, Ohnmacht, Krampfanfälle.",
      nd:"Schräg 0,1 bis 0,2 Cun oder Mikroaderlass. Bei Kältestauung klassisch mit Moxa." },

    { n:2, pinyin:"Xíngjiān", han:"行间", de:"Zwischenraum des Gehens", en:"Moving Between",
      x:361, y:1100, key:true, role:"YONG · SED",
      antik:"yong", wx:"feuer",
      tags:["Yong / Ying – kleiner Flusspunkt","Sedierungspunkt","Hauptpunkt bei Leberfeuer"],
      wirkung:["Yong / Ying – kleiner Flusspunkt", "Feuerpunkt der Leber-Leitbahn", "Sedierungspunkt", "", "Kühlt Leber-Feuer – der Hauptpunkt bei Zorn", "Senkt aufsteigendes Leber-Yang ab", "Klärt Hitze aus Augen und Kopf", "Beruhigt Krämpfe"],
      loc:"Auf dem Fußrücken zwischen erster und zweiter Zehe, dicht vor dem Rand der Schwimmhaut, an der Grenze zwischen rotem und weißem Fleisch.",
      ind:"Der Feuerpunkt und zugleich der Sedierungspunkt – der erste Punkt bei aufloderndem Leberfeuer: rote schmerzende Augen, pochender Schläfenkopfschmerz, Zorn, bitterer Mund, Schlaflosigkeit mit zornigen Träumen, Bluthochdruck, Nasenbluten, dunkler brennender Urin, Regelschmerz mit Hitze.",
      nd:"Senkrecht oder schräg 0,5 bis 0,8 Cun." },

    { n:3, pinyin:"Tàichōng", han:"太冲", de:"Großer Ansturm", en:"Supreme Surge",
      x:368, y:1082, key:true, role:"YU · YUAN",
      antik:"yu", wx:"erde",
      tags:["Yu / Shu – Bachpunkt","Yuan-Quellpunkt","eines der Vier Tore mit Di 4","der wichtigste Punkt des Meridians"],
      wirkung:["Yu / Shu – Bachpunkt", "Erdpunkt der Leber-Leitbahn", "Yuan-Quellpunkt", "Eines der Vier Tore, zusammen mit Di 4", "", "Löst gestautes Leber-Qi", "Senkt Leber-Yang ab", "Nährt Leber-Blut und Leber-Yin", "Ordnet die Regel", "Besänftigt Wind und Krampf"],
      loc:"Auf dem Fußrücken in der Vertiefung zwischen erstem und zweitem Mittelfußknochen, etwa zwei Cun hinter dem Zwischenraum der Zehen. Man streicht von der Zehenlücke aufwärts, bis der Finger hängen bleibt.",
      ind:"Der Punkt für alles Gestaute: Reizbarkeit, Druck unter den Rippen, Kloßgefühl im Hals, Spannung vor der Regel, Regelschmerz, Kopfschmerz an Schläfe und Scheitel, Schwindel, trockene oder rote Augen, Bluthochdruck, Schlaflosigkeit, Krämpfe, Zittern, Schmerz im Fuß. Zusammen mit Di 4 die Vier Tore.",
      nd:"Senkrecht 0,5 bis 0,8 Cun. Sehr druckempfindlich, wenn Leber-Qi staut – der Befund selbst ist schon ein Hinweis." },

    { n:4, pinyin:"Zhōngfēng", han:"中封", de:"Mittlere Grenze", en:"Middle Seal",
      x:380, y:1046, key:false, role:"KING",
      antik:"king", wx:"metall",
      tags:["King / Jing – Flusspunkt"],
      wirkung:["King / Jing – Strom-/Flusspunkt", "Metallpunkt der Leber-Leitbahn", "", "Löst gestautes Qi im Unterbauch", "Leitet Feuchtigkeit und Hitze aus", "Öffnet die Leitbahn am Sprunggelenk"],
      loc:"Vor dem Innenknöchel, in der Vertiefung an der Innenseite der Sehne des vorderen Schienbeinmuskels, etwa einen Cun vor der Knöchelspitze.",
      ind:"Schmerz im Unterbauch und in der Leiste, Leistenbruch, Schmerz beim Wasserlassen, Samenerguss im Schlaf, Schmerz und Steifigkeit im Sprunggelenk, Gelbsucht, kalte Füße.",
      nd:"Senkrecht 0,5 bis 0,8 Cun." },

    { n:5, pinyin:"Lǐgōu", han:"蠡沟", de:"Rinne des Holzwurms", en:"Woodworm Canal",
      x:385, y:965, key:true, role:"LUO",
      antik:"luo", wx:"",
      tags:["Luo-Punkt zur Gallenblase","Hauptpunkt im Genitalbereich"],
      wirkung:["Luo-Punkt – zieht zur Gallenblase", "", "Ordnet das Qi im Genitalbereich", "Löst Juckreiz und Feuchtigkeit unten", "Reguliert die Regel"],
      loc:"Fünf Cun oberhalb der Innenknöchelspitze, direkt auf der Innenfläche des Schienbeins.",
      ind:"Juckreiz, Brennen und Ausfluss im Genitalbereich, Schmerz und Schwellung der Hoden, unregelmäßige Regel, Harnverhalt oder Bettnässen, Kloßgefühl im Hals. Der Luo-Punkt zieht zu den Geschlechtsteilen und ist dort der wichtigste Fernpunkt.",
      nd:"Flach 0,3 bis 0,5 Cun am Knochen entlang." },

    { n:6, pinyin:"Zhōngdū", han:"中都", de:"Mittlere Hauptstadt", en:"Central Metropolis",
      x:390, y:934, key:false, role:"XI",
      antik:"xi", wx:"",
      tags:["Xi-Spaltpunkt"],
      wirkung:["Xi-Cleft – Akkumulationspunkt", "", "Akutpunkt bei Schmerz im Unterbauch", "Bewegt das Blut bei Stauung", "Ordnet die Regel"],
      loc:"Sieben Cun oberhalb der Innenknöchelspitze, ebenfalls auf der Innenfläche des Schienbeins, also zwei Cun über Le 5.",
      ind:"Als Xi-Punkt bei Akutem und bei Blutungen: heftiger Unterbauchschmerz, anhaltende Regelblutung, Nachblutung nach der Geburt, Ausfluss, akuter Leistenschmerz, Durchfall mit Schmerz.",
      nd:"Flach 0,3 bis 0,5 Cun am Knochen entlang." },

    { n:7, pinyin:"Xīguān", han:"膝关", de:"Kniegelenk", en:"Knee Joint",
      x:397, y:851, key:false, role:"",
      antik:"", wx:"",
      tags:["Kniepunkt"],
      wirkung:["Lokalpunkt am Knie", "", "Vertreibt Wind und Feuchtigkeit aus dem Knie", "Öffnet die Leitbahn an der Innenseite", "Löst Schmerz beim Beugen und Strecken"],
      loc:"An der Innenseite des Unterschenkels, einen Cun hinter MP 9, unterhalb des inneren Knieknorrens.",
      ind:"Schmerz und Schwellung an der Knieinnenseite, Schwierigkeiten beim Strecken und Beugen, Schmerz, der in den Oberschenkel zieht, Halsschmerz.",
      nd:"Senkrecht 0,8 bis 1,2 Cun." },

    { n:8, pinyin:"Qūquán", han:"曲泉", de:"Gekrümmte Quelle", en:"Spring at the Bend",
      x:399, y:815, key:true, role:"HO · TON",
      antik:"ho", wx:"wasser",
      tags:["Ho / He – Meerpunkt","Tonisierungspunkt","nährt Leber-Blut und Leber-Yin"],
      wirkung:["Ho / He – Meerpunkt", "Wasserpunkt der Leber-Leitbahn", "Tonisierungspunkt", "", "Nährt Leber-Blut und Leber-Yin", "Leitet Feuchtigkeit und Hitze aus dem Unteren Erwärmer", "Ordnet die Regel und den Genitalbereich", "Behandelt das Knie von innen"],
      loc:"Am inneren Ende der Kniekehlenfalte bei gebeugtem Knie, vor den beiden Sehnen, oberhalb des inneren Knieknorrens.",
      ind:"Als Wasserpunkt des Holzmeridians der Punkt, der Leber-Blut und Leber-Yin nährt: trockene Augen, Schwindel, nächtliche Krämpfe, spärliche Regel, Unfruchtbarkeit. Dazu Juckreiz im Genitalbereich, Ausfluss, Schmerz an der Knieinnenseite, Harnverhalt.",
      nd:"Senkrecht 0,8 bis 1,2 Cun bei gebeugtem Knie." },

    { n:9, pinyin:"Yīnbāo", han:"阴包", de:"Hülle des Yin", en:"Yin Bladder",
      x:402, y:740, key:false, role:"",
      antik:"", wx:"",
      tags:["Oberschenkelpunkt"],
      wirkung:["Lokalpunkt am Oberschenkel", "", "Ordnet die Regel", "Öffnet die Leitbahn an der Innenseite des Oberschenkels", "Reguliert das Wasser"],
      loc:"An der Innenseite des Oberschenkels, vier Cun oberhalb des inneren Knieknorrens, zwischen den Muskeln.",
      ind:"Unregelmäßige Regel, Schmerz im Unterbauch und im Kreuz, Harnverhalt oder Bettnässen, Schmerz an der Innenseite des Oberschenkels.",
      nd:"Senkrecht 0,8 bis 1,2 Cun." },

    { n:10, pinyin:"Zúwǔlǐ", han:"足五里", de:"Fünf Meilen am Fuß", en:"Leg Five Li",
      x:404, y:582, key:false, role:"",
      antik:"", wx:"",
      tags:["Leistenpunkt"],
      wirkung:["Lokalpunkt in der Leiste", "", "Leitet Feuchtigkeit und Hitze aus dem Unteren Erwärmer", "Ordnet das Wasserlassen", "Öffnet die Leitbahn in der Leiste"],
      loc:"An der Innenseite des Oberschenkels, drei Cun unterhalb von Le 11, am Rand des langen Anziehmuskels.",
      ind:"Schmerz und Schweregefühl im Unterbauch, Harnverhalt, Bettnässen, Juckreiz im Genitalbereich, Müdigkeit und Schläfrigkeit, geschwollene Lymphknoten in der Leiste.",
      nd:"Senkrecht 0,8 bis 1,2 Cun. Vorsicht: hier verlaufen große Gefäße – vorher tasten." },

    { n:11, pinyin:"Yīnlián", han:"阴廉", de:"Kante des Yin", en:"Yin Corner",
      x:403, y:522, key:false, role:"",
      antik:"", wx:"",
      tags:["Leistenpunkt","Frauenpunkt"],
      wirkung:["Lokalpunkt in der Leiste", "", "Ordnet die Regel und den Kinderwunsch", "Bewegt Qi und Blut im Unterbauch", "Öffnet die Leitbahn in der Leiste"],
      loc:"In der Leiste, zwei Cun unterhalb der Höhe des Schambeins und zwei Cun seitlich der vorderen Mittellinie, am Rand des langen Anziehmuskels.",
      ind:"Unregelmäßige Regel, Unfruchtbarkeit, Schmerz im Unterbauch, Schmerz an der Innenseite des Oberschenkels und in der Leiste.",
      nd:"Senkrecht 0,8 bis 1,2 Cun. Auch hier vorher die Schlagader tasten." },

    { n:12, pinyin:"Jímài", han:"急脉", de:"Hastiges Gefäß", en:"Urgent Pulse",
      x:396, y:487, key:false, role:"",
      antik:"", wx:"",
      tags:["Punkt an der Leistenbeuge"],
      wirkung:["Punkt an der Leistenbeuge", "", "Ordnet das Qi im Genitalbereich", "Löst Schmerz in der Leiste", "Wärmt die Leber-Leitbahn bei Kälte"],
      loc:"In der Leistenbeuge, zweieinhalb Cun seitlich der vorderen Mittellinie, auf Höhe des oberen Schambeinrands. Der Name kommt von der Schlagader, die hier zu tasten ist.",
      ind:"Ziehender Schmerz im Unterbauch, der zu den Geschlechtsteilen zieht, Leistenbruch, Hodenschmerz, Gebärmuttervorfall, Schmerz an der Innenseite des Oberschenkels.",
      nd:"Senkrecht 0,5 bis 0,8 Cun, unter Umgehung der tastbaren Schlagader. Kein Moxa." },

    { n:13, pinyin:"Zhāngmén", han:"章门", de:"Tor des Abschlusses", en:"Camphorwood Gate",
      x:361, y:415, key:true, role:"BEN",
      antik:"", wx:"",
      tags:["Mu-Alarmpunkt der Milz","Hui-Punkt der Zang-Organe","Treffpunkt mit der Gallenblase"],
      wirkung:["Mu-Alarmpunkt der Milz", "Hui-Punkt der Zang-Organe", "Treffpunkt mit der Gallenblase", "", "Stärkt die Milz und ordnet die Mitte", "Löst gestautes Leber-Qi", "Harmonisiert Leber und Milz – der Punkt bei Ärger, der auf den Magen schlägt"],
      loc:"Am freien Ende der elften Rippe an der seitlichen Bauchwand. Man findet ihn, indem man den Ellenbogen an den Körper legt – die Ellenbogenspitze zeigt die Höhe an.",
      ind:"Als Mu-Punkt der Milz bei Verdauungsschwäche, Blähungen, Durchfall, unverdauten Speiseresten im Stuhl, Müdigkeit nach dem Essen. Als Hui-Punkt aller Zang-Organe bei jeder Schwäche der Speicherorgane. Dazu Schmerz und Druck in der Flanke, Schwellung der Milz, Erbrechen.",
      nd:"Schräg 0,5 bis 0,8 Cun. Auf der rechten Seite liegt die Leber darunter, auf der linken die Milz – nie tief senkrecht stechen." },

    { n:14, pinyin:"Qīmén", han:"期门", de:"Tor der Zyklen", en:"Cycle Gate",
      x:369, y:344, key:true, role:"",
      antik:"", wx:"",
      tags:["Mu-Alarmpunkt der Leber","Endpunkt des Meridians","Treffpunkt mit Milz und Yinwei Mai"],
      wirkung:["Mu-Alarmpunkt der Leber", "Endpunkt der Leber-Leitbahn", "Treffpunkt mit Milz und Yinwei Mai", "", "Löst gestautes Leber-Qi in Brust und Rippen", "Harmonisiert Leber und Magen", "Bewegt das Blut und löst Stauung"],
      loc:"Im sechsten Zwischenrippenraum, senkrecht unter der Brustwarze, vier Cun seitlich der vorderen Mittellinie – zwei Rippenzwischenräume unterhalb der Brustwarze.",
      ind:"Als Mu-Punkt der Leber das Gegenstück zu Bl 18 auf dem Rücken: Druck und Schmerz unter den Rippen, Enge in der Brust, Seufzen, Reizbarkeit, Übelkeit, Aufstoßen, bitterer Mund, Spannung in den Brüsten, Brustdrüsenentzündung, Gelbsucht. Druckempfindlichkeit hier ist ein guter Hinweis auf gestautes Leber-Qi.",
      nd:"Schräg oder flach 0,5 bis 0,8 Cun am Rippenrand entlang. Nie senkrecht – darunter liegen Lunge und Leber." }
  ]
});
