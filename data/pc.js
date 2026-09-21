/* Perikardmeridian – Hand-Jueyin – 手厥阴心包经
   Kalibriert auf img/front.png (880 × 1168). Armlandmarken am 21.09.2026
   neu vermessen: Ellenbeugefalte y 421, Handgelenksfalte y 530,
   dazwischen 12 Cun, also 10,5 px je Cun entlang der Armachse.
   Der Perikardmeridian läuft in der Mitte zwischen Lunge und Herz – an
   der Ellenbeuge liegt Lu 5 bei x 258 und He 3 bei x 296, Pe 3 also bei
   277; am Handgelenk Lu 9 bei 202 und He 7 bei 228, Pe 7 also bei 212. */
Meridian.register({
  id: "pc", code: "PC", codeDe: "Pe", ord: 9,
  name: "Perikard", titel: "Perikardmeridian", nameHan: "心包经",
  channel: "Hand-Jueyin", channelHan: "手厥阴",
  element: "Feuer", elementHan: "火", wx: "feuer",
  yin: true, coupled: "te", coupledName: "Drei-Erwärmer",
  clock: "19 – 21 Uhr", pointCount: 9, direction: "Brust → Hand",
  view: "front", mirror: true,

  intro: "Der Hand-Jueyin-Meridian des Perikards beginnt in der Brust, tritt seitlich " +
         "der Brustwarze an die Oberfläche und läuft dann genau in der Mitte der " +
         "Arminnenseite hinab – zwischen dem Lungenmeridian an der Daumenseite und dem " +
         "Herzmeridian an der Kleinfingerseite. Er zieht durch die Mitte der Ellenbeuge, " +
         "zwischen den beiden Sehnen des Unterarms hinunter zur Mitte der " +
         "Handgelenksfalte, durch die Handfläche und endet an der Spitze des " +
         "Mittelfingers. Mit neun Punkten ist er neben dem Herzen der kürzeste " +
         "Meridian, und mit Pe 6 Nèiguān enthält er einen der meistbenutzten Punkte " +
         "der ganzen Akupunktur.",

  cun: { ellenbeuge: [277, 419], handgelenk: [212, 528],
         hinweis: "Pe 3 → Pe 7 = 12 Cun; Pe 4, Pe 5 und Pe 6 liegen 5, 3 und 2 Cun über Pe 7" },

  path: [[353,310],[336,325],[318,340],[299,361],[289,388],[277,419],[259,450],[239,483],
         [228,501],[223,510],[208,530],[199,541],[185,563],[174,592],[161,625]],

  inner: "M353,310 C382,306 406,308 424,318 C440,328 446,346 446,366 C446,394 442,414 438,430",
  branches: [
    { label: "Ast zum Drei-Erwärmer", d: "M440,360 C446,392 446,430 442,466" }
  ],

  /* --- Das Organ --- */
  organ: {
    titel: "Das Perikard in der chinesischen Medizin",
    pinyin: "Xīn bāo", han: "心包", wx: "feuer",
    text: [
      "Das Perikard ist kein Organ im gewohnten Sinn, sondern eine Hülle: der " +
      "Herzbeutel. Sein chinesischer Name Xīn Bāo 心包 heißt wörtlich „das, was das Herz " +
      "einwickelt“. Seine Aufgabe ist einfach und weitreichend zugleich – es schützt das " +
      "Herz. Was von außen eindringt und bis zum Herzen vordringen würde, trifft zuerst " +
      "auf das Perikard. In den klassischen Fieberlehren ist „Hitze dringt ins Perikard“ " +
      "die Stufe, auf der ein Kranker zu phantasieren beginnt; das Herz selbst ist da " +
      "noch unberührt.",

      "Das Perikard trägt das Ministerfeuer, während das Herz das Kaiserfeuer trägt. Der " +
      "Kaiser handelt nicht selbst; der Minister handelt für ihn und fängt ab, was ihn " +
      "träfe. Daraus folgt die praktische Regel des Unterrichts: Was man am Herzen tun " +
      "möchte, tut man oft besser am Perikard. Es ist der zugängliche Weg zu einem " +
      "Organ, das man ungern direkt angeht.",

      "Im Gefühlsleben steht das Perikard für die Schicht zwischen innen und außen – für " +
      "die Fähigkeit, sich zu öffnen und wieder zu schließen. Wer nach einer Verletzung " +
      "niemanden mehr an sich heranlässt, hat ein zu festes Perikard; wer sich immerzu " +
      "verausgabt und keine Grenze zieht, ein zu durchlässiges. Beides ist hier zu Hause, " +
      "und beides lässt sich über diesen Meridian ansprechen."
    ],

    aufgabenTitel: "Die Aufgaben des Perikards",
    aufgaben: [
      { was: "Das Herz schützen", han: "代心受邪",
        text: "Der klassische Satz lautet: „Es empfängt das Übel an Stelle des Herzens.“ " +
              "Angriffe von außen – Hitze, Schleim, heftiger Schreck – treffen das " +
              "Perikard zuerst. Verwirrtheit, Fieberphantasien und Bewusstlosigkeit " +
              "werden darum als Perikard-Muster behandelt." },
      { was: "Das Blut bewegen und den Shen beherbergen", han: "主血脉·藏神",
        text: "In der Behandlung teilt das Perikard die Aufgaben des Herzens: Es wirkt " +
              "auf Herzschlag, Blutfluss, Schlaf und Gemüt. Herzklopfen, Unruhe und " +
              "Schlaflosigkeit werden häufiger über das Perikard als über das Herz " +
              "selbst angegangen." },
      { was: "Die Brust öffnen", han: "宽胸理气",
        text: "Engegefühl, Druck und Beklemmung in der Brust gehören hierher – auch " +
              "dann, wenn sie aus Anspannung und nicht aus einer Erkrankung kommen. " +
              "Pe 6 löst diese Enge zuverlässiger als fast jeder andere Punkt." },
      { was: "Den Magen beruhigen", han: "和胃止呕",
        text: "Über die Verbindung zum mittleren Erwärmer wirkt der Meridian gegen " +
              "Übelkeit und Erbrechen jeder Herkunft: Reiseübelkeit, Schwangerschaft, " +
              "nach Narkose, bei Chemotherapie. Das ist die weltweit am besten " +
              "untersuchte Wirkung eines Akupunkturpunktes überhaupt." },
      { was: "Die Grenze nach außen regeln", han: "主开合",
        text: "Als Hülle entscheidet das Perikard über Nähe und Abstand. Wo Menschen " +
              "sich nicht mehr öffnen können oder sich nicht mehr abgrenzen können, " +
              "arbeitet man an dieser Schicht." }
    ],

    zustandTitel: "Mangel und Fülle von Yin und Yang",
    zustaende: [
      { feld: "Yin-Mangel", en: "Pericardium Yin Deficiency", han: "心包阴虚", pinyin: "xīn bāo yīn xū",
        kurz: "Zu wenig Kühlung – der Geist findet keine Ruhe.",
        zeichen: "Herzklopfen, das abends und in Ruhe deutlicher wird, Einschlafstörungen " +
                 "und leichter, traumreicher Schlaf, innere Unruhe, Hitze in den " +
                 "Handflächen, Nachtschweiß, trockener Mund, Vergesslichkeit, " +
                 "Schreckhaftigkeit.",
        zunge: "rot, wenig oder kein Belag, rote Spitze",
        puls: "dünn und schnell",
        punkte: "Pe 6 · Pe 7 · He 6 · Ni 6 · Ren 14" },

      { feld: "Yang-Mangel", en: "Pericardium Yang Deficiency", han: "心包阳虚", pinyin: "xīn bāo yáng xū",
        kurz: "Zu wenig Wärme – die Brust bleibt eng und kalt.",
        zeichen: "Herzklopfen bei Anstrengung, Engegefühl in der Brust, Kurzatmigkeit, " +
                 "kalte Hände, Frösteln, blasses Gesicht, Antriebslosigkeit, Schwitzen " +
                 "ohne Anstrengung, Beschwerden, die sich bei Kälte verschlimmern.",
        zunge: "blass, geschwollen, feucht",
        puls: "tief, langsam, schwach, manchmal unregelmäßig",
        punkte: "Pe 6 mit Moxa · Ren 17 · Ren 6 · Bl 14 · Bl 15" },

      { feld: "Yin-Fülle", en: "Phlegm Misting the Pericardium", han: "痰蒙心包", pinyin: "tán méng xīn bāo",
        kurz: "Schleim vernebelt die Hülle – der Geist kommt nicht mehr durch.",
        zeichen: "Benommenheit, wie durch Watte denken, teilnahmsloses vor sich Hinsehen, " +
                 "Murmeln, unpassendes Lachen oder Weinen, Schwermut, die eher dumpf als " +
                 "traurig ist, rasselnder Schleim in der Kehle, bei schweren Bildern " +
                 "Krampfanfälle und Bewusstlosigkeit ohne Fieber.",
        zunge: "geschwollen, dicker schmieriger weißer Belag",
        puls: "schlüpfrig und saitenförmig",
        punkte: "Pe 5 · Pe 6 · Ma 40 · Ren 12 · Du 20 · He 7" },

      { feld: "Yang-Fülle", en: "Heat Entering the Pericardium", han: "热入心包", pinyin: "rè rù xīn bāo",
        kurz: "Hitze bricht durch die Hülle – das dramatischste Bild der Fieberlehre.",
        zeichen: "Hohes Fieber, Unruhe bis zur Verzweiflung, Phantasieren, wirres Reden, " +
                 "Bewusstseinstrübung bis zur Bewusstlosigkeit, heiße Hände und Füße, " +
                 "manchmal Krämpfe. Ein Notfallbild: Hier gehört der Kranke in " +
                 "ärztliche Behandlung, nicht auf die Liege.",
        zunge: "tiefrot, trocken, ohne Belag, steif",
        puls: "schnell, voll, überflutend",
        punkte: "Pe 9 Mikroaderlass · Pe 8 · Du 26 · He 8 · Du 14" }
    ],

    aeussereTitel: "Wo der Meridian selbst betroffen ist",
    aeussere: [
      { name: "Die Mitte der Arminnenseite", han: "臂内廉痛", pinyin: "bì nèi lián tòng",
        zeichen: "Schmerz und Spannung genau in der Mitte der Arminnenseite, Krampf in " +
                 "Ellenbeuge und Unterarm, Kribbeln oder Taubheit in den mittleren " +
                 "Fingern, heiße Handflächen, Schmerz im Handgelenk an der Mitte. Der " +
                 "Verlauf zwischen den beiden Unterarmsehnen macht Pe 6 und Pe 7 zu " +
                 "Hauptpunkten beim Karpaltunnelsyndrom.",
        punkte: "Pe 6 · Pe 7 · Pe 3 · Pe 4 · Di 4" },
      { name: "Enge in der Brust", han: "胸闷", pinyin: "xiōng mèn",
        zeichen: "Druck, Enge oder Beklemmung in der Brust, Seufzen, das Gefühl, nicht " +
                 "tief durchatmen zu können, Herzklopfen bei Aufregung, Schmerz hinter " +
                 "dem Brustbein. Oft eine Folge von Anspannung und nicht von Krankheit – " +
                 "aber Brustschmerz gehört immer zuerst ärztlich abgeklärt.",
        punkte: "Pe 6 · Pe 1 · Ren 17 · He 5 · Le 3" },
      { name: "Übelkeit und Erbrechen", han: "恶心呕吐", pinyin: "ě xīn ǒu tù",
        zeichen: "Übelkeit jeder Herkunft: bei Reisen, in der Schwangerschaft, nach " +
                 "Narkose, bei Chemotherapie, bei Aufregung. Dazu Aufstoßen, Schluckauf " +
                 "und Druck im Oberbauch. Pe 6 wirkt hier so zuverlässig, dass er " +
                 "Grundlage der Akupressurbänder gegen Reiseübelkeit ist.",
        punkte: "Pe 6 · Ma 36 · Ren 12 · Mi 4" }
    ],

    nahrungTitel: "Was das Perikard stärkt und was ihm schadet",
    nahrung: {
      staerkt: [
        { was: "Ingwer als Tee oder frisch gekaut", warum: "der bewährteste Hausgebrauch gegen Übelkeit – dieselbe Richtung wie Pe 6" },
        { was: "Bittere Blattsalate, Chicorée, Radicchio", warum: "der Geschmack des Feuers, in Maßen, hält das Ministerfeuer in seinen Grenzen" },
        { was: "Rote Früchte: Aprikose, Kirsche, rote Beeren", warum: "Farbe und Geschmack des Feuers, nähren zugleich das Blut" },
        { was: "Warme, einfache Abendmahlzeit", warum: "die Maximalzeit liegt von neunzehn bis einundzwanzig Uhr; was dann schwer liegt, stört den Schlaf" },
        { was: "Hafer und Weizen, etwa als Abendbrei", warum: "beruhigen den Geist; Weizen ist das klassische Getreide bei innerer Unruhe" },
        { was: "Nach dem Essen nicht sofort weiterarbeiten", warum: "die Brust braucht Weite; Anspannung nach dem Essen macht sie eng" }
      ],
      schadet: [
        { was: "Kaffee und Energydrinks am Abend", warum: "treiben das Ministerfeuer nach oben, genau wenn es zur Ruhe kommen sollte" },
        { was: "Viel Alkohol", warum: "erzeugt Hitze und Schleim – beides trübt die Hülle des Herzens" },
        { was: "Sehr scharfes und sehr fettes Essen zusammen", warum: "die klassische Quelle von Schleim mit Hitze" },
        { was: "Essen unter Zeitdruck oder im Streit", warum: "schnürt die Brust zu und schlägt unmittelbar auf Herzklopfen und Übelkeit" },
        { was: "Bildschirm und Aufregung bis spät", warum: "das Perikard findet keinen Abschluss und der Schlaf bleibt oberflächlich" },
        { was: "Dauernde Übererregung, auch angenehme", warum: "Freude im Übermaß zerstreut den Geist ebenso wie Kummer" }
      ],
      hinweis: "Pe 6 Nèiguān liegt zwei Cun über der Handgelenksfalte zwischen den beiden " +
               "Sehnen und ist von außen jederzeit erreichbar. Fester Daumendruck für " +
               "ein bis zwei Minuten auf beiden Seiten hilft bei Übelkeit, Herzklopfen " +
               "vor Aufregung und Enge in der Brust. Es ist der Punkt, den man Patienten " +
               "am ehesten zum Selbstgebrauch mitgeben kann."
    },

    eigenschaften: [
      { k: "Wandlungsphase", v: "Feuer 火" },
      { k: "Jahreszeit", v: "Sommer" },
      { k: "Klima", v: "Hitze" },
      { k: "Geschmack", v: "bitter" },
      { k: "Farbe", v: "rot" },
      { k: "Sinnesorgan", v: "Zunge" },
      { k: "Gewebe", v: "Blutgefäße" },
      { k: "Geist", v: "Shen 神, gemeinsam mit dem Herzen" },
      { k: "Emotion", v: "Freude, im Übermaß Unruhe" },
      { k: "Organart", v: "Zang-Organ, Hülle des Herzens" },
      { k: "Gekoppelt", v: "Drei-Erwärmer" }
    ],

    hinweis: "Das Perikard trägt das Ministerfeuer, das Herz das Kaiserfeuer. Was am " +
             "Herzen zu tun wäre, wird darum oft am Perikard getan. Die Muster " +
             "beschreiben die klassische Syndromlehre und dienen dem Unterricht. Sie " +
             "ersetzen weder Diagnose noch ärztliche Abklärung."
  },

  points: [
    { n:1, pinyin:"Tiānchí", han:"天池", de:"Himmlischer Teich", en:"Celestial Pool",
      x:353, y:310, key:false, role:"",
      antik:"", wx:"",
      tags:["Beginn des Meridians","Treffpunkt mit Gallenblase und Drei-Erwärmer"],
      wirkung:["Anfangspunkt der Perikard-Leitbahn", "Treffpunkt mit Gallenblase und Dreifachem Erwärmer", "", "Öffnet die Brust und löst Enge", "Wandelt Schleim in der Brust", "Lindert Schmerz in der Rippenseite"],
      marken:["brustwarze"],
      loc:"Im vierten Zwischenrippenraum, einen Cun seitlich der Brustwarze, also fünf Cun seitlich der vorderen Mittellinie.",
      ind:"Engegefühl und Schmerz in der Brust, Husten, Kurzatmigkeit, Schwellung unter der Achsel, Brustdrüsenentzündung, zu wenig Muttermilch, Schmerz zwischen den Rippen.",
      nd:"Flach 0,2 bis 0,4 Cun nach außen. Nie senkrecht – darunter liegt die Lunge." },

    { n:2, pinyin:"Tiānquán", han:"天泉", de:"Himmlische Quelle", en:"Celestial Spring",
      x:300, y:360, key:false, role:"",
      antik:"", wx:"",
      tags:["Oberarmpunkt"],
      wirkung:["Lokalpunkt am Oberarm", "", "Öffnet die Brust", "Löst Schmerz in Herzgegend und Oberarm", "Bewegt das Qi in der Leitbahn"],
      marken:["achselfalte_v"],
      loc:"Zwei Cun unterhalb der vorderen Achselfalte, zwischen den beiden Köpfen des Bizeps.",
      ind:"Schmerz in Brust, Rücken und an der Arminnenseite, Husten, Herzklopfen, Engegefühl in der Brust, Bewegungseinschränkung der Schulter.",
      nd:"Senkrecht 0,5 bis 0,8 Cun." },

    { n:3, pinyin:"Qūzé", han:"曲泽", de:"Gekrümmter Teich", en:"Marsh at the Bend",
      x:277, y:419, key:true, role:"HO",
      antik:"ho", wx:"wasser",
      tags:["Ho / He – Meerpunkt","Punkt bei Hitze im Blut"],
      wirkung:["Ho / He – Meerpunkt", "Wasserpunkt der Perikard-Leitbahn", "", "Kühlt Hitze im Blut – der Punkt bei Sommerhitze und Erbrechen", "Beruhigt den Geist", "Harmonisiert den Magen"],
      marken:["ellenbeuge", "bizepssehne"],
      loc:"In der Ellenbeugefalte, an der Kleinfingerseite der Bizepssehne. Bei leicht gebeugtem Ellenbogen gut zu tasten.",
      ind:"Herzschmerz, Herzklopfen, Unruhe mit Hitzegefühl, Magenschmerz, Erbrechen, Durchfall mit Hitze, Sommerhitze mit Erbrechen, Zittern und Krampf in Arm und Hand, Ellenbogenschmerz.",
      nd:"Senkrecht 0,5 bis 1 Cun. Bei Hitze und Sommerhitze klassisch Mikroaderlass an den sichtbaren Venen der Ellenbeuge." },

    { n:4, pinyin:"Xīmén", han:"郄门", de:"Tor der Spalte", en:"Cleft Gate",
      x:239, y:483, key:true, role:"XI",
      antik:"xi", wx:"",
      tags:["Xi-Spaltpunkt","Punkt bei akutem Herzschmerz"],
      wirkung:["Xi-Cleft – Akkumulationspunkt", "", "Akutpunkt bei Schmerz in der Herzgegend", "Bewegt das Blut und löst Stauung", "Beruhigt den Geist", "Stillt Blutungen bei Hitze"],
      marken:["zwei_sehnen"],
      loc:"Fünf Cun oberhalb der Handgelenksfalte, zwischen den beiden gut tastbaren Sehnen in der Mitte des Unterarms.",
      ind:"Als Xi-Punkt der Punkt für Akutes: plötzlicher Herzschmerz, heftiges Herzklopfen, Panik, Blut im Auswurf oder Nasenbluten, Brustschmerz. Bei Xi-Punkten der Yin-Meridiane steht immer auch die Blutung mit im Bild.",
      nd:"Senkrecht 0,5 bis 1 Cun zwischen den Sehnen." },

    { n:5, pinyin:"Jiānshǐ", han:"间使", de:"Der Gesandte dazwischen", en:"Intermediary Courier",
      x:228, y:501, key:false, role:"KING",
      antik:"king", wx:"metall",
      tags:["King / Jing – Flusspunkt","Punkt bei Schleim"],
      wirkung:["King / Jing – Strom-/Flusspunkt", "Metallpunkt der Perikard-Leitbahn", "", "Wandelt Schleim, der den Geist umnebelt", "Harmonisiert den Magen", "Ordnet die Regel"],
      skelett:"handflaeche",
      marken:["zwei_sehnen"],
      loc:"Drei Cun oberhalb der Handgelenksfalte, zwischen den beiden Sehnen.",
      ind:"Der Schleimpunkt des Meridians: Benommenheit, wirres Reden, Schwermut, Krampfanfälle, Beklemmung in der Brust mit Schleimgefühl. Dazu Magenschmerz, Erbrechen, Wechselfieber, Schmerz in Achsel und Arm.",
      nd:"Senkrecht 0,5 bis 1 Cun." },

    { n:6, pinyin:"Nèiguān", han:"内关", de:"Innerer Pass", en:"Inner Pass",
      x:223, y:510, key:true, role:"LUO",
      antik:"luo", wx:"",
      tags:["Luo-Punkt zum Drei-Erwärmer","Öffnungspunkt des Yinwei Mai","Paarpunkt zu MP 4","einer der meistbenutzten Punkte überhaupt"],
      wirkung:["Luo-Punkt – zieht zum Dreifachen Erwärmer", "Öffnungspunkt des Yinwei Mai", "Paarpunkt zu MP 4", "Einer der Acht Kreuzungspunkte", "", "Öffnet die Brust und beruhigt den Geist", "Der Punkt bei Übelkeit und Erbrechen – auch bei Reisekrankheit", "Harmonisiert den Magen und senkt sein Qi ab", "Löst gestautes Leber-Qi in der Brust"],
      skelett:"handflaeche",
      marken:["zwei_sehnen", "handgelenksfalte"],
      loc:"Zwei Cun oberhalb der Handgelenksfalte, zwischen den Sehnen des langen Handflächenmuskels und des radialen Handbeugers. Beide Sehnen treten hervor, wenn man die Faust ballt.",
      ind:"Übelkeit und Erbrechen jeder Herkunft – Reise, Schwangerschaft, Narkose, Chemotherapie. Dazu Herzklopfen, Engegefühl und Schmerz in der Brust, Angst, Panik, Schlaflosigkeit, Magenschmerz, Schluckauf, Schwindel, Karpaltunnelsyndrom, Schmerz an der Arminnenseite.",
      nd:"Senkrecht 0,5 bis 1 Cun zwischen den Sehnen. Als Akupressur mit festem Daumendruck über ein bis zwei Minuten beidseits – der Punkt, den man Patienten mitgeben kann." },

    { n:7, pinyin:"Dàlíng", han:"大陵", de:"Großer Hügel", en:"Great Mound",
      x:208, y:530, key:true, role:"YU · YUAN · SED",
      antik:"yu", wx:"erde",
      tags:["Yu / Shu – Bachpunkt","Yuan-Quellpunkt","Sedierungspunkt"],
      wirkung:["Yu / Shu – Bachpunkt", "Erdpunkt der Perikard-Leitbahn", "Yuan-Quellpunkt", "Sedierungspunkt", "", "Klärt Hitze aus dem Herzen und beruhigt den Geist", "Harmonisiert den Magen", "Öffnet die Brust", "Löst Schmerz im Handgelenk"],
      skelett:"handflaeche",
      marken:["handgelenksfalte", "zwei_sehnen"],
      loc:"In der Mitte der Handgelenksfalte, zwischen denselben beiden Sehnen wie Pe 6.",
      ind:"Herzklopfen mit Unruhe, Schlaflosigkeit, Angst, unpassendes Lachen, Schmerz in Brust und Rippen, Magenschmerz, Erbrechen, Mundgeruch, Schmerz und Schwellung des Handgelenks, Karpaltunnelsyndrom. Als Sedierungspunkt bei Fülle und Hitze im Perikard.",
      nd:"Senkrecht 0,3 bis 0,5 Cun zwischen den Sehnen." },

    { n:8, pinyin:"Láogōng", han:"劳宫", de:"Palast der Mühsal", en:"Palace of Toil",
      x:185, y:563, key:true, role:"YONG",
      antik:"yong", wx:"feuer",
      tags:["Yong / Ying – kleiner Flusspunkt","Feuerpunkt des Feuermeridians"],
      wirkung:["Yong / Ying – kleiner Flusspunkt", "Feuerpunkt der Perikard-Leitbahn", "", "Kühlt Feuer im Herzen – der Punkt bei Mundgeschwüren", "Beruhigt den Geist bei großer Unruhe", "Klärt Hitze aus der Handfläche"],
      skelett:"handflaeche",
      marken:["mhk23"],
      loc:"In der Handfläche zwischen dem zweiten und dritten Mittelhandknochen – dort, wo die Spitze des Mittelfingers hinfällt, wenn man die Faust ballt.",
      ind:"Der stärkste Punkt des Meridians gegen Hitze: Aphthen und Mundgeruch, brennende Handflächen, Fieber, Unruhe bis zur Verzweiflung, wirres Reden, Erbrechen, Nasenbluten. Der Name sagt, woher die Mühsal kommt – es ist der Punkt der Erschöpften.",
      nd:"Senkrecht 0,3 bis 0,5 Cun. Sehr schmerzhaft; sparsam verwenden." },

    { n:9, pinyin:"Zhōngchōng", han:"中冲", de:"Mittlerer Ansturm", en:"Central Hub",
      x:161, y:625, key:true, role:"TING · TON",
      antik:"ting", wx:"holz",
      tags:["Ting / Jing – Brunnen-/Quellpunkt","Tonisierungspunkt","Notfallpunkt"],
      wirkung:["Ting / Jing – Brunnen-/Quellpunkt", "Holzpunkt der Perikard-Leitbahn", "Tonisierungspunkt", "", "Belebt bei Bewusstlosigkeit und Hitzschlag – ein Notfallpunkt", "Klärt Hitze und öffnet die Sinne", "Kühlt das Herz"],
      skelett:"handflaeche",
      marken:["mittelfinger"],
      loc:"In der Mitte der Spitze des Mittelfingers.",
      ind:"Notfallpunkt bei Bewusstlosigkeit, Ohnmacht, Hitzschlag, Fieberkrämpfen bei Kindern und Bewusstseinstrübung bei hohem Fieber. Dazu Zungensteifheit, Aphthen, brennende Handflächen, Herzschmerz.",
      nd:"Schräg 0,1 Cun oder Mikroaderlass. Im Notfall genügt kräftiger Nagelrand-Druck, bis Hilfe da ist." }
  ]
});
