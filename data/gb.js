/* Gallenblasenmeridian – Fuß-Shaoyang – 足少阳胆经
   Die einzige Tafel in der Seitenansicht (img/side.png, 880 × 1168). Die
   Figur steht im Profil nach links, zu sehen ist ihre linke Seite – also
   genau die Außenseite, an der dieser Meridian verläuft. Der Arm hängt
   hinter dem Rumpf und gibt die Flanke frei; ab y 470 bildet er einen
   eigenen Umriss. Die Höhenskala stimmt mit der Vorderansicht überein –
   nachgeprüft am 21.09.2026: die Spitze des Außenknöchels liegt in der
   Seitenansicht bei (467, 1050), in der Vorderansicht bei y 1050.
   Kniegelenksspalt y 827, Außenknöchel y 1050, dazwischen 16 Cun, also
   13,9 Bildpunkte je Cun am Unterschenkel. Am Oberschenkel Trochanter
   y 540 bis Kniekehle y 800 = 19 Cun, also 13,7 je Cun.
   Vorher war der Knöchel bei y 998 angenommen – das ist die schmalste
   Stelle, nicht die Spitze. Gb 36 bis Gb 40 saßen dadurch rund vierzig
   Bildpunkte zu hoch.
   Weil eine Seitenansicht nicht sinnvoll gespiegelt werden kann, ist
   mirror hier abgeschaltet. */
Meridian.register({
  id: "gb", code: "GB", codeDe: "Gb", ord: 11,
  name: "Gallenblase", titel: "Gallenblasenmeridian", nameHan: "胆经",
  channel: "Fuß-Shaoyang", channelHan: "足少阳",
  element: "Holz", elementHan: "木", wx: "holz",
  yin: false, coupled: "lr", coupledName: "Leber",
  clock: "23 – 1 Uhr", pointCount: 44, direction: "Kopf → Fuß",
  view: "side", mirror: false,
  rail: { seite: "links" },

  intro: "Der Fuß-Shaoyang-Meridian der Gallenblase hat mit vierundvierzig Punkten den " +
         "verwickeltsten Verlauf aller zwölf. Er beginnt am äußeren Augenwinkel, zieht " +
         "zum Ohr, steigt über die Schläfe, wendet sich hinter das Ohr, läuft quer über " +
         "den Kopf nach vorn bis zur Augenbraue und wieder zurück über den Scheitel zum " +
         "Hinterhaupt – allein am Kopf zwanzig Punkte im Zickzack. Über die Schulter " +
         "geht es in die Flanke, wo er ein zweites Mal im Zickzack vorn und hinten " +
         "abwechselt, über die Hüfte und dann an der ganzen Außenseite des Beins hinab " +
         "bis zur Außenseite der vierten Zehe. " +
         "Dies ist die einzige Tafel in der Seitenansicht – nur dort ist die " +
         "Außenlinie des Körpers zu sehen, an der dieser Meridian entlangläuft. " +
         "Eingezeichnet sind zwanzig Punkte. Weil die Figur im Profil steht, ist eine " +
         "Gegenseite nicht dargestellt; der Meridian läuft rechts wie links gleich.",

  cun: { knie: [447, 827], knoechel: [467, 1050],
         hinweis: "Kniegelenksspalt → Außenknöchel = 16 Cun; Gb 31 liegt 7 Cun über dem Knie" },

  path: [[396,99],[408,112],[421,126],[438,118],[444,100],[434,82],[448,70],[460,78],[464,96],
         [452,72],[428,62],[402,62],[388,68],[381,78],[390,50],[415,36],[445,40],[465,62],[472,92],
         [468,120],[460,150],[472,208],[452,260],[420,310],[385,348],[410,375],[445,400],[432,418],
         [420,434],[430,470],[448,505],[468,542],[455,590],[443,645],[436,680],[432,704],[434,760],
         [440,810],[447,858],[452,905],[457,953],[456,980],[455,994],[453,1008],[454,1032],[455,1056],
         [432,1058],[398,1060],[370,1066],[352,1072],[336,1078]],

  inner: "M470,214 C462,244 450,272 440,300 C428,332 418,360 412,388 C406,418 404,442 406,462",
  branches: [
    { label: "Ast vom Ohr in das Ohr hinein", d: "M432,120 C426,116 422,114 420,114" },
    { label: "Ast zum äußeren Augenwinkel", d: "M420,310 C404,286 392,266 386,250" }
  ],

  /* --- Das Organ --- */
  organ: {
    titel: "Die Gallenblase in der chinesischen Medizin",
    pinyin: "Dǎn", han: "胆", wx: "holz",
    text: [
      "Die Gallenblase ist das Fu-Organ des Holzes und die Partnerin der Leber. Sie " +
      "fällt unter allen Hohlorganen aus der Reihe: Sie nimmt nichts von außen auf und " +
      "gibt nichts nach außen ab, sondern speichert eine reine Flüssigkeit – die Galle. " +
      "Darum zählt sie zugleich zu den sechs „außerordentlichen Fu-Organen“. Der " +
      "klassische Text nennt sie „das Organ der Reinheit und Rechtschaffenheit“.",

      "Wo die Leber der General ist, der plant und entwirft, ist die Gallenblase die " +
      "Instanz, die entscheidet. Ihr Amtstitel lautet: „Die Gallenblase hat das Amt der " +
      "Gerechtigkeit; von ihr gehen Entscheidung und Urteil aus.“ Daraus folgt eine " +
      "Zuordnung, die in der europäischen Sprache erhalten geblieben ist: Mut heißt hier " +
      "wörtlich „Gallenblasen-Qi“. Wer sich nicht entscheiden kann, wer alles endlos " +
      "abwägt, wer nachts wach liegt und Möglichkeiten durchspielt, wer vor lauter " +
      "Zaghaftigkeit nichts anfängt – bei dem schaut man auf die Gallenblase.",

      "Körperlich hält sie die Galle bereit und gibt sie an den Darm ab; darin " +
      "unterstützt sie Milz und Magen. Bitterer Mundgeschmack am Morgen, Übelkeit, " +
      "Druck unter dem rechten Rippenbogen und fettunverträgliche Verdauung sind ihre " +
      "häufigsten körperlichen Zeichen.",

      "Als Shaoyang-Meridian teilt sie mit dem Drei-Erwärmer die Lage im Scharnier " +
      "zwischen außen und innen. Ihr Verlauf erklärt fast ihre gesamte " +
      "Beschwerdenliste: Er zieht an der Seite des Kopfes entlang – daher der " +
      "einseitige Schläfenkopfschmerz und die Migräne –, über das Ohr, durch die " +
      "Flanke, über die Hüfte und die ganze Außenseite des Beins bis zum Fuß."
    ],

    aufgabenTitel: "Die Aufgaben der Gallenblase",
    aufgaben: [
      { was: "Die Galle speichern und abgeben", han: "贮藏胆汁",
        text: "Sie hält die klare Flüssigkeit bereit, die die Leber bildet, und gibt " +
              "sie zum richtigen Zeitpunkt an den Darm ab. Stockt das, kommt es zu " +
              "bitterem Mundgeschmack, Übelkeit, Druck unter den Rippen und " +
              "Unverträglichkeit von Fettem." },
      { was: "Entscheiden und urteilen", han: "主决断",
        text: "Die Leber entwirft den Plan, die Gallenblase entscheidet, ob er " +
              "ausgeführt wird. Unentschlossenheit, endloses Abwägen, Zaudern und " +
              "Zaghaftigkeit gehören hierher – ebenso wie das nächtliche Grübeln " +
              "zwischen dreiundzwanzig und ein Uhr, ihrer Maximalzeit." },
      { was: "Mut geben", han: "胆气",
        text: "„Gallenblasen-Qi“ heißt im Chinesischen schlicht Mut. Wer leicht " +
              "erschrickt, sich nicht traut, sich klein macht, hat nach dieser Lehre " +
              "zu wenig davon. Das ist keine Metapher, sondern eine " +
              "Behandlungsanweisung." },
      { was: "Sehnen und Gelenke beweglich halten", han: "主骨所生病",
        text: "Gemeinsam mit der Leber versorgt sie die Sehnen. Gb 34 gilt als " +
              "Hui-Punkt der Sehnen und ist bei jeder Bewegungseinschränkung, " +
              "Steifigkeit und Sehnenerkrankung der erste Punkt." },
      { was: "Die Seite des Körpers versorgen", han: "主侧身",
        text: "Vom äußeren Augenwinkel bis zur vierten Zehe läuft der Meridian an der " +
              "Seite entlang. Einseitiger Kopfschmerz, Ohrbeschwerden, Schmerz in der " +
              "Flanke, in der Hüfte und an der Beinaußenseite folgen dieser Linie." }
    ],

    zustandTitel: "Mangel und Fülle von Yin und Yang",
    zustaende: [
      { feld: "Yang-Mangel", en: "Gallbladder Deficiency", han: "胆气虚", pinyin: "dǎn qì xū",
        kurz: "Zu wenig Mut – das bekannteste Mangelbild der Gallenblase.",
        zeichen: "Schreckhaftigkeit, leichtes Erschrecken bei Geräuschen, " +
                 "Unentschlossenheit, Zaudern, Angst vor Entscheidungen, " +
                 "Mutlosigkeit, Seufzen, Schlaflosigkeit mit vielen Träumen und " +
                 "Aufwachen mit Herzklopfen, Schwindel, verschwommenes Sehen, " +
                 "Neigung, sich zurückzuziehen.",
        zunge: "blass, dünner weißer Belag",
        puls: "saitenförmig aber kraftlos",
        punkte: "Gb 40 · Gb 34 · Bl 19 · He 7 · Du 20" },

      { feld: "Yin-Mangel", en: "Gallbladder Yin Deficiency", han: "胆阴虚", pinyin: "dǎn yīn xū",
        kurz: "Zu wenig Kühlung im Scharnier – ruhelos und trocken zugleich.",
        zeichen: "Trockener und bitterer Mund besonders am Morgen, trockene Augen, " +
                 "Hitzegefühl am Abend, unruhiger, oberflächlicher Schlaf mit " +
                 "Aufwachen zwischen dreiundzwanzig und ein Uhr, Reizbarkeit, " +
                 "Schwindel, Ohrgeräusche als feiner Ton, Druckgefühl unter den " +
                 "Rippen ohne deutlichen Schmerz.",
        zunge: "rot mit wenig Belag, oft an den Rändern",
        puls: "dünn und saitenförmig",
        punkte: "Gb 43 · Gb 34 · Le 8 · Ni 6 · Bl 19" },

      { feld: "Yin-Fülle", en: "Cold Damp Obstructing the Gallbladder", han: "寒湿困胆", pinyin: "hán shī kùn dǎn",
        kurz: "Kälte und Feuchtigkeit machen den Abfluss zäh.",
        zeichen: "Dumpfer Druck und Schweregefühl unter dem rechten Rippenbogen, " +
                 "Übelkeit ohne Erbrechen, Widerwillen gegen Fettes, fahle oder leicht " +
                 "gelbliche Haut ohne Glanz, heller Stuhl, klebriger Mund ohne Durst, " +
                 "Müdigkeit, Kältegefühl, Schmerz, der sich bei Wärme bessert.",
        zunge: "blass, geschwollen, weißer schmieriger Belag",
        puls: "saitenförmig, langsam, schlüpfrig",
        punkte: "Gb 34 · Gb 40 · Gb 24 · Mi 9 · Ren 12" },

      { feld: "Yang-Fülle", en: "Damp Heat in the Gallbladder", han: "胆湿热", pinyin: "dǎn shī rè",
        kurz: "Feuchte Hitze im Shaoyang – das häufigste Füllebild.",
        zeichen: "Bitterer Mundgeschmack, der schon beim Aufwachen da ist, " +
                 "brennender oder stechender Schmerz unter dem rechten Rippenbogen, " +
                 "der in die Schulter ziehen kann, Übelkeit und Erbrechen, " +
                 "Abneigung gegen Fettes, gelbliche Augen und Haut, dunkler Urin, " +
                 "Fieber im Wechsel mit Frösteln, Reizbarkeit, heftiger einseitiger " +
                 "Kopfschmerz, plötzlich einsetzende laute Ohrgeräusche.",
        zunge: "rot mit gelbem schmierigem Belag, oft einseitig",
        puls: "saitenförmig, schnell, schlüpfrig",
        punkte: "Gb 34 · Gb 24 · Gb 41 · Gb 43 · Le 3 · Bl 19" }
    ],

    aeussereTitel: "Wo der Meridian selbst betroffen ist",
    aeussere: [
      { name: "Einseitiger Kopfschmerz und Migräne", han: "偏头痛", pinyin: "piān tóu tòng",
        zeichen: "Schmerz an einer Schläfe, hinter oder über einem Auge, oft pochend, " +
                 "mit Lichtempfindlichkeit und Übelkeit. Der Meridian zieht zwanzig " +
                 "Punkte lang im Zickzack über die Kopfseite – kein anderer Verlauf " +
                 "deckt die Migräne so genau ab. Dazu steifer Nacken und Schmerz, der " +
                 "vom Nacken zur Schläfe zieht.",
        punkte: "Gb 20 · Gb 8 · Gb 14 · Gb 41 · Gb 43 · 3E 5" },
      { name: "Ohr und äußerer Augenwinkel", han: "耳目", pinyin: "ěr mù",
        zeichen: "Ohrgeräusche und Hörminderung, Ohrenschmerz, Schmerz und Röte am " +
                 "äußeren Augenwinkel, tränende Augen im Wind, Schwindel. Der " +
                 "Meridian beginnt am äußeren Augenwinkel und umkreist das Ohr.",
        punkte: "Gb 2 · Gb 1 · Gb 20 · Gb 43 · 3E 17" },
      { name: "Flanke, Hüfte und Beinaußenseite", han: "胁肋·髀枢", pinyin: "xié lèi · bì shū",
        zeichen: "Schmerz in der Flanke zwischen den Rippen, Gürtelrose längs der " +
                 "Rippen, Hüftschmerz, Ischias an der Außenseite des Beins, Schmerz " +
                 "am seitlichen Oberschenkel, Knieaußenseite, Sprunggelenk und " +
                 "äußerem Fußrand. Gb 30 in der Hüfte ist der stärkste Punkt bei " +
                 "Ischias.",
        punkte: "Gb 30 · Gb 31 · Gb 34 · Gb 40 · Gb 26 · 3E 6" },
      { name: "Sehnen und Gelenke", han: "筋会阳陵泉", pinyin: "jīn huì yáng líng quán",
        zeichen: "Steifigkeit, Bewegungseinschränkung, Krämpfe, Sehnenbeschwerden an " +
                 "jeder Stelle des Körpers. Gb 34 ist der Hui-Punkt der Sehnen und " +
                 "wirkt darum nicht nur am Knie, sondern bei jeder Sehnenerkrankung.",
        punkte: "Gb 34 · Le 3 · Bl 18 · Gb 39" }
    ],

    nahrungTitel: "Was die Gallenblase stärkt und was ihr schadet",
    nahrung: {
      staerkt: [
        { was: "Bitterstoffe: Artischocke, Chicorée, Löwenzahn, Rucola", warum: "sie regen den Gallenfluss an – das älteste und einfachste Mittel" },
        { was: "Radieschen, Rettich, Kurkuma", warum: "bewegen und lösen, wo sich Zähes staut" },
        { was: "Regelmäßige, nicht zu große Mahlzeiten", warum: "die Galle wird gebraucht und abgegeben, statt zu stehen" },
        { was: "Gutes Öl in kleiner Menge, etwa Olivenöl", warum: "etwas Fett ist der Reiz, der die Blase entleert; gar kein Fett ist auch nicht gut" },
        { was: "Pfefferminz- und Schafgarbentee", warum: "lösen Shaoyang-Stauung und den bitteren Mundgeschmack" },
        { was: "Bewegung mit Seitneigung und Drehung", warum: "öffnet genau die Flanke, in der der Meridian läuft" },
        { was: "Vor dreiundzwanzig Uhr schlafen gehen", warum: "die Maximalzeit beginnt um dreiundzwanzig Uhr; wer dann noch wach ist, grübelt oft bis ein Uhr" }
      ],
      schadet: [
        { was: "Viel Fettes und Frittiertes", warum: "belastet genau die Aufgabe, die hier zu erfüllen ist" },
        { was: "Alkohol", warum: "erzeugt Feuchte Hitze im Shaoyang – bitterer Mund am Morgen ist das erste Zeichen" },
        { was: "Sehr große Mahlzeiten am Abend", warum: "fällt mit der Maximalzeit zusammen und stört den Schlaf" },
        { was: "Unregelmäßiges Essen und langes Auslassen", warum: "was nicht abgegeben wird, wird zäh" },
        { was: "Unterdrückter Ärger und aufgeschobene Entscheidungen", warum: "die Gallenblase ist das Organ des Entscheidens; Aufschub staut sie unmittelbar" },
        { was: "Zu wenig Schlaf", warum: "Schreckhaftigkeit und Unentschlossenheit nehmen damit unmittelbar zu" }
      ],
      hinweis: "Gb 34 Yánglíngquán liegt in der Vertiefung vor und unter dem Köpfchen " +
               "des Wadenbeins und ist von außen leicht zu tasten. Als Hui-Punkt der " +
               "Sehnen ist er bei jeder Steifigkeit brauchbar – auch weit entfernt von " +
               "der Stelle, an der er liegt. Und ein Merksatz für die Nacht: Wer " +
               "regelmäßig kurz nach dreiundzwanzig Uhr wach im Bett liegt und " +
               "Entscheidungen durchspielt, ist in der Stunde der Gallenblase wach."
    },

    eigenschaften: [
      { k: "Wandlungsphase", v: "Holz 木" },
      { k: "Jahreszeit", v: "Frühling" },
      { k: "Klima", v: "Wind" },
      { k: "Geschmack", v: "sauer" },
      { k: "Farbe", v: "grün" },
      { k: "Sinnesorgan", v: "Augen, über den Verlauf auch das Ohr" },
      { k: "Gewebe", v: "Sehnen und Bänder" },
      { k: "Emotion", v: "Zorn, im Guten Mut und Entschlusskraft" },
      { k: "Organart", v: "Fu-Organ und zugleich außerordentliches Fu-Organ" },
      { k: "Gekoppelt", v: "Leber" }
    ],

    hinweis: "Die Gallenblase ist das einzige Hohlorgan, das eine reine Flüssigkeit " +
             "speichert statt Nahrung durchzuleiten – darum zählt sie zugleich zu den " +
             "sechs außerordentlichen Fu-Organen. Die Muster beschreiben die klassische " +
             "Syndromlehre und dienen dem Unterricht. Sie ersetzen weder Diagnose noch " +
             "ärztliche Abklärung."
  },

  points: [
    { n:1, pinyin:"Tóngzǐliáo", han:"瞳子髎", de:"Loch der Pupille", en:"Pupil Bone Hole",
      x:396, y:99, key:false, role:"",
      antik:"", wx:"",
      tags:["Beginn des Meridians","Augenpunkt"],
      wirkung:["Anfangspunkt der Gallenblasen-Leitbahn", "Treffpunkt mit Dünndarm und Dreifachem Erwärmer", "", "Klärt Hitze aus den Augen", "Vertreibt Wind", "Lindert Kopfschmerz an der Schläfe"],
      loc:"Einen halben Cun seitlich des äußeren Augenwinkels, in der Vertiefung am äußeren Rand der Augenhöhle.",
      ind:"Rote, schmerzende oder tränende Augen, Lichtempfindlichkeit, verschwommenes Sehen, beginnender Star, Kopfschmerz an der Schläfe, Gesichtslähmung, Lidzucken, Krähenfüße.",
      nd:"Flach 0,3 bis 0,5 Cun nach hinten. Kein Moxa im Gesicht." },

    { n:2, pinyin:"Tīnghuì", han:"听会", de:"Zusammenkunft des Hörens", en:"Auditory Convergence",
      x:421, y:126, key:true, role:"",
      antik:"", wx:"",
      tags:["Ohrpunkt"],
      wirkung:["Ohrpunkt vor dem Gehörgang", "Treffpunkt mit Dreifachem Erwärmer und Dünndarm", "", "Öffnet das Gehör", "Lindert Ohrensausen und Ohrenschmerz", "Löst Kieferklemme und Zahnschmerz"],
      loc:"Vor dem Ohr, in der Vertiefung unterhalb des Knorpelvorsprungs am Ohreingang, die sich bei geöffnetem Mund deutlich zeigt.",
      ind:"Ohrgeräusche, Hörminderung, Ausfluss aus dem Ohr, Ohrenschmerz, Kiefergelenkschmerz, Kiefersperre, Zahnschmerz im Unterkiefer, Gesichtslähmung.",
      nd:"Senkrecht 0,5 bis 1 Cun bei geöffnetem Mund." },

    { n:8, pinyin:"Shuàigǔ", han:"率谷", de:"Anführendes Tal", en:"Valley Lead",
      x:434, y:82, key:true, role:"",
      antik:"", wx:"",
      tags:["Migränepunkt","Treffpunkt mit der Blase"],
      wirkung:["Migränepunkt an der Schläfe", "Treffpunkt mit der Blase", "", "Der Punkt bei einseitigem Kopfschmerz", "Harmonisiert den Magen bei Erbrechen", "Vertreibt Wind aus dem Kopf"],
      loc:"Anderthalb Cun oberhalb der Ohrspitze, in der Schläfengegend, gut ein Daumenbreit über dem Ohr.",
      ind:"Einseitiger Kopfschmerz und Migräne – der klassische Punkt dafür. Dazu Schwindel, Übelkeit und Erbrechen beim Kopfschmerz, Augenschmerz, Katerkopfschmerz nach Alkohol, Krampfanfälle bei Kindern.",
      nd:"Flach 0,5 bis 0,8 Cun nach hinten am Schädel entlang." },

    { n:14, pinyin:"Yángbái", han:"阳白", de:"Weißes Yang", en:"Yang White",
      x:381, y:78, key:true, role:"",
      antik:"", wx:"",
      tags:["Stirnpunkt","Treffpunkt mit dem Yangwei Mai"],
      wirkung:["Stirnpunkt", "Treffpunkt mit dem Yangwei Mai", "", "Vertreibt Wind aus Stirn und Augen", "Macht die Augen hell", "Lindert Stirnkopfschmerz"],
      loc:"Auf der Stirn, einen Cun oberhalb der Augenbraue, senkrecht über der Pupille bei geradem Blick.",
      ind:"Stirnkopfschmerz, Druck über den Augen, herabhängendes Lid, Lidzucken, Gesichtslähmung, Augenschmerz, Nachtblindheit, Schwindel, müde und schwere Lider.",
      nd:"Flach 0,3 bis 0,5 Cun nach unten zur Augenbraue hin. Bei Gesichtslähmung wird oft Richtung Gb 1 durchgestochen." },

    { n:20, pinyin:"Fēngchí", han:"风池", de:"Teich des Windes", en:"Wind Pool",
      x:460, y:150, key:true, role:"",
      antik:"", wx:"",
      tags:["einer der meistbenutzten Punkte überhaupt","Treffpunkt mit dem Yangwei Mai","Windpunkt"],
      wirkung:["Windpunkt am Hinterkopf", "Treffpunkt mit dem Yangwei Mai", "", "Vertreibt Wind, äußeren wie inneren – einer der meistgenutzten Punkte", "Senkt aufsteigendes Leber-Yang ab", "Macht die Augen hell", "Löst Nackensteife und Schwindel"],
      loc:"Unterhalb des Hinterhauptbeins, in der Vertiefung zwischen den Ansätzen des Kapuzenmuskels und des Kopfwendemuskels, am Haaransatz.",
      ind:"Kopfschmerz jeder Art, besonders im Nacken und an der Schläfe, steifer Nacken, Schwindel, Bluthochdruck, rote und schmerzende Augen, verschwommenes Sehen, Ohrgeräusche, verstopfte Nase, beginnende Erkältung mit Frösteln, Schlaflosigkeit. Das Tor, durch das Wind in den Körper eindringt.",
      nd:"Schräg 0,8 bis 1,2 Cun in Richtung der gegenüberliegenden Augenhöhle. Niemals nach oben innen in Richtung des Schädelinneren stechen." },

    { n:21, pinyin:"Jiānjǐng", han:"肩井", de:"Schulterbrunnen", en:"Shoulder Well",
      x:472, y:208, key:true, role:"",
      antik:"", wx:"",
      tags:["Hauptpunkt bei Nacken- und Schulterverspannung","in der Schwangerschaft verboten"],
      wirkung:["Hauptpunkt bei Nacken- und Schulterverspannung", "", "Senkt gegenläufig aufsteigendes Qi ab", "Löst Knoten und Steife in der Schulter", "Fördert die Geburt – in der Schwangerschaft verboten"],
      loc:"Auf der höchsten Stelle des Schultermuskels, auf halbem Weg zwischen dem Dornfortsatz des 7. Halswirbels und dem äußeren Ende des Schulterdachs.",
      ind:"Steifer, schmerzender Nacken und Schulter, Spannungskopfschmerz, Schmerz zwischen den Schulterblättern, Bewegungseinschränkung des Arms, Brustdrüsenentzündung, Milchstau, zähe Geburt.",
      nd:"Senkrecht 0,3 bis 0,5 Cun – nicht tiefer, darunter liegt die Lungenspitze. In der Schwangerschaft nicht nadeln, der Punkt wirkt stark nach unten." },

    { n:24, pinyin:"Rìyuè", han:"日月", de:"Sonne und Mond", en:"Sun and Moon",
      x:385, y:361, key:true, role:"MU",
      antik:"", wx:"",
      tags:["Mu-Alarmpunkt der Gallenblase"],
      wirkung:["Mu-Alarmpunkt der Gallenblase", "", "Leitet Feuchtigkeit und Hitze aus Leber und Gallenblase", "Harmonisiert die Mitte", "Löst bitteren Mundgeschmack und Seufzen"],
      loc:"Im siebten Zwischenrippenraum, senkrecht unter der Brustwarze, einen Zwischenrippenraum unterhalb von Le 14.",
      ind:"Als Mu-Punkt das Gegenstück zu Bl 19 auf dem Rücken: bitterer Mundgeschmack, Schmerz und Druck unter dem rechten Rippenbogen, Übelkeit, Erbrechen, saures Aufstoßen, Gelbsucht, Unverträglichkeit von Fettem, Schluckauf. Druckempfindlichkeit hier ist ein guter Hinweis.",
      nd:"Schräg oder flach 0,5 bis 0,8 Cun am Rippenrand entlang. Nie senkrecht." },

    { n:25, pinyin:"Jīngmén", han:"京门", de:"Tor der Hauptstadt", en:"Capital Gate",
      x:445, y:400, key:true, role:"MU",
      antik:"", wx:"",
      tags:["Mu-Alarmpunkt der Niere"],
      wirkung:["Mu-Alarmpunkt der Niere", "", "Stärkt die Niere und ordnet das Wasser", "Löst Schmerz in der Lende", "Reguliert Darm und Blase"],
      loc:"Am freien Ende der zwölften Rippe, an der seitlichen Bauchwand hinten.",
      ind:"Als Mu-Punkt der Niere bei Kreuzschmerz, Schwäche im unteren Rücken, Harnbeschwerden, Ödemen. Dazu Schmerz in der Flanke, Blähungen, Durchfall, Schmerz, der vom Rücken in die Flanke zieht.",
      nd:"Schräg 0,5 bis 0,8 Cun. Nie tief senkrecht – darunter liegt die Niere." },

    { n:26, pinyin:"Dàimài", han:"带脉", de:"Gürtelgefäß", en:"Girdling Vessel",
      x:420, y:434, key:true, role:"",
      antik:"", wx:"",
      tags:["Treffpunkt mit dem Dai Mai","Frauenpunkt"],
      wirkung:["Treffpunkt mit dem Dai Mai, dem Gürtelgefäß", "", "Ordnet den Dai Mai – den einzigen waagerechten Leitbahnverlauf", "Reguliert die Regel und löst Ausfluss", "Löst Schwere im Unterbauch"],
      loc:"An der seitlichen Bauchwand, senkrecht unter dem freien Ende der elften Rippe, auf Höhe des Nabels.",
      ind:"Ausfluss jeder Art – der wichtigste Punkt dafür. Dazu unregelmäßige Regel, Regelschmerz, Schmerz im Unterbauch, Gebärmuttervorfall, Schmerz und Schwäche im Kreuz, Blähbauch. Der Punkt liegt auf dem Gürtelgefäß, dem einzigen waagerecht verlaufenden Gefäß des Körpers.",
      nd:"Senkrecht 0,8 bis 1,2 Cun." },

    { n:30, pinyin:"Huántiào", han:"环跳", de:"Im Kreis springen", en:"Jumping Circle",
      x:468, y:542, key:true, role:"",
      antik:"", wx:"",
      tags:["Hauptpunkt bei Ischias","Treffpunkt mit der Blase"],
      wirkung:["Hauptpunkt bei Ischias", "Treffpunkt mit der Blase", "", "Öffnet die Leitbahn von der Hüfte bis zum Fuß", "Vertreibt Wind, Kälte und Feuchtigkeit aus der Hüfte", "Löst Schwäche und Lähmung im Bein"],
      loc:"In der Hüfte, am Übergang vom äußeren Drittel zu den inneren zwei Dritteln der Verbindung zwischen dem großen Rollhügel des Oberschenkelknochens und dem Kreuzbeinschlitz. Bei Seitenlage mit angezogenem Bein gut zu finden.",
      ind:"Der stärkste Punkt bei Ischias: Schmerz in Gesäß und Hüfte, der über die Außenseite des Beins hinabzieht, Bewegungseinschränkung der Hüfte, Taubheit und Schwäche im Bein, Lähmung nach Schlaganfall, Kreuzschmerz.",
      nd:"Senkrecht 1,5 bis 3 Cun – einer der wenigen Punkte, die tief gestochen werden. Ein ausstrahlendes Gefühl ins Bein ist erwünscht." },

    { n:31, pinyin:"Fēngshì", han:"风市", de:"Markt des Windes", en:"Wind Market",
      x:432, y:704, key:false, role:"",
      antik:"", wx:"",
      tags:["Oberschenkelpunkt","Hautpunkt"],
      wirkung:["Oberschenkelpunkt", "", "Vertreibt Wind aus der Haut – der Punkt bei Juckreiz am ganzen Körper", "Öffnet die Leitbahn am Oberschenkel", "Kräftigt das Bein"],
      loc:"An der Außenseite des Oberschenkels, sieben Cun über der Kniekehlenfalte. Im Stehen mit hängenden Armen zeigt die Spitze des Mittelfingers genau darauf.",
      ind:"Schmerz, Taubheit und Schwäche am seitlichen Oberschenkel, Ischias, Lähmung des Beins, Juckreiz am ganzen Körper, Nesselsucht, Ekzeme. Der Name weist auf den Wind – und Juckreiz gilt als Wind in der Haut.",
      nd:"Senkrecht 1 bis 1,5 Cun." },

    { n:34, pinyin:"Yánglíngquán", han:"阳陵泉", de:"Quelle am Yang-Hügel", en:"Yang Mound Spring",
      x:447, y:858, key:true, role:"HO",
      antik:"ho", wx:"erde",
      tags:["Ho / He – Meerpunkt","Hui-Punkt der Sehnen","einer der wichtigsten Punkte überhaupt"],
      wirkung:["Ho / He – Meerpunkt", "Erdpunkt der Gallenblasen-Leitbahn", "Hui-Punkt der Sehnen", "Unterer He-Punkt der Gallenblase", "", "Der Punkt für alle Sehnen und Bänder – Steife, Krampf, Zerrung", "Löst gestautes Leber-Qi und leitet Feuchte Hitze aus", "Behandelt das Knie von außen", "Harmonisiert die Rippenseiten"],
      loc:"In der Vertiefung vor und unterhalb des Köpfchens des Wadenbeins, gut tastbar an der Außenseite des Unterschenkels dicht unter dem Knie.",
      ind:"Als Hui-Punkt der Sehnen bei jeder Steifigkeit, Bewegungseinschränkung, Krampf oder Sehnenerkrankung – auch weit entfernt von der Stelle selbst. Dazu Schmerz an der Knieaußenseite, Ischias, Schmerz in der Flanke, bitterer Mundgeschmack, Erbrechen, Gelbsucht, Reizbarkeit, Schulterbeschwerden.",
      nd:"Senkrecht 0,8 bis 1,5 Cun. Bei Schulterbeschwerden gern mit Bewegung der Schulter während der Nadelung." },

    { n:36, pinyin:"Wàiqiū", han:"外丘", de:"Äußerer Hügel", en:"Outer Hill",
      x:457, y:953, key:false, role:"XI",
      antik:"xi", wx:"",
      tags:["Xi-Spaltpunkt"],
      wirkung:["Xi-Cleft – Akkumulationspunkt", "", "Akutpunkt bei Schmerz in der Leitbahn", "Klärt Hitze und Gift", "Öffnet die Leitbahn im Unterschenkel"],
      loc:"Sieben Cun oberhalb der Außenknöchelspitze, am vorderen Rand des Wadenbeins.",
      ind:"Als Xi-Punkt bei Akutem: plötzlicher heftiger Schmerz in der Flanke, akuter Nackenschmerz, akuter Schmerz an der Beinaußenseite, Krampfanfälle, Hautbeschwerden mit Schmerz.",
      nd:"Senkrecht 0,8 bis 1,2 Cun." },

    { n:37, pinyin:"Guāngmíng", han:"光明", de:"Helles Licht", en:"Bright Light",
      x:456, y:980, key:true, role:"LUO",
      antik:"luo", wx:"",
      tags:["Luo-Punkt zur Leber","Augenpunkt"],
      wirkung:["Luo-Punkt – zieht zur Leber", "", "Der Augenpunkt der Leitbahn: macht die Augen hell", "Nährt das Leber-Blut", "Klärt Hitze aus den Augen"],
      loc:"Fünf Cun oberhalb der Außenknöchelspitze, am vorderen Rand des Wadenbeins.",
      ind:"Der Augenpunkt am Bein, wie sein Name sagt: verschwommenes Sehen, trockene oder schmerzende Augen, Nachtblindheit, Augenjucken. Als Luo-Punkt die Brücke zur Leber, die sich zu den Augen öffnet. Dazu Schmerz und Schwäche im Bein, Brustspannung, Migräne.",
      nd:"Senkrecht 0,8 bis 1,2 Cun." },

    { n:38, pinyin:"Yángfǔ", han:"阳辅", de:"Yang-Hilfe", en:"Yang Assistance",
      x:455, y:994, key:false, role:"KING · SED",
      antik:"king", wx:"feuer",
      tags:["King / Jing – Flusspunkt","Sedierungspunkt"],
      wirkung:["King / Jing – Strom-/Flusspunkt", "Feuerpunkt der Gallenblasen-Leitbahn", "Sedierungspunkt", "", "Klärt Hitze aus Leber und Gallenblase", "Löst Schmerz in der Rippenseite", "Öffnet die Leitbahn von der Schläfe bis zum Fuß"],
      loc:"Vier Cun oberhalb der Außenknöchelspitze, am vorderen Rand des Wadenbeins, also einen Cun unter Gb 37.",
      ind:"Als Sedierungspunkt bei Fülle und Hitze im Meridian: einseitiger Kopfschmerz, Schmerz am äußeren Augenwinkel, Schmerz in Achsel und Flanke, geschwollene Lymphknoten, Schmerz an der Beinaußenseite, Wechselfieber.",
      nd:"Senkrecht 0,5 bis 0,8 Cun." },

    { n:39, pinyin:"Xuánzhōng", han:"悬钟", de:"Hängende Glocke", en:"Suspended Bell",
      x:453, y:1008, key:true, role:"",
      antik:"", wx:"",
      tags:["Hui-Punkt des Marks","auch Juégǔ 绝骨 genannt"],
      wirkung:["Hui-Punkt des Marks", "", "Nährt das Mark und stärkt die Knochen", "Vertreibt Wind aus der Leitbahn", "Löst Nackensteife", "Wird auch Juégǔ genannt – abgeschnittener Knochen"],
      loc:"Drei Cun oberhalb der Außenknöchelspitze, am vorderen Rand des Wadenbeins.",
      ind:"Als Hui-Punkt des Marks bei allem, was Knochen und Mark betrifft: Osteoporose, Knochenschmerz, Schwäche der Beine, aber auch Gedächtnisschwäche und Schwindel, weil das Gehirn das Meer des Marks ist. Dazu steifer Nacken – ein klassischer Fernpunkt dafür –, Schmerz in der Flanke und Hämorrhoiden.",
      nd:"Senkrecht 0,5 bis 0,8 Cun." },

    { n:40, pinyin:"Qiūxū", han:"丘墟", de:"Hügel und Ruine", en:"Hill Ruins",
      x:455, y:1056, key:true, role:"YUAN",
      antik:"yuan", wx:"",
      tags:["Yuan-Quellpunkt"],
      wirkung:["Yuan-Quellpunkt", "", "Löst gestautes Leber-Qi", "Öffnet die Leitbahn am Sprunggelenk", "Leitet Feuchte Hitze aus der Rippenseite"],
      loc:"Vor und unterhalb der Außenknöchelspitze, in der Vertiefung seitlich der Sehne des langen Zehenstreckers.",
      ind:"Als Yuan-Punkt bei jedem Gallenblasenmuster brauchbar, besonders bei Mutlosigkeit und Unentschlossenheit. Dazu Schmerz und Schwellung im Sprunggelenk, Schmerz in der Flanke und in der Achsel, Schwellung unter der Achsel, bitterer Mund, Erbrechen, Schmerz an der Beinaußenseite.",
      nd:"Senkrecht 0,5 bis 0,8 Cun." },

    { n:41, pinyin:"Zúlínqì", han:"足临泣", de:"Fuß, der in Tränen ausbricht", en:"Foot Overlooking Tears",
      x:398, y:1060, key:true, role:"YU",
      antik:"yu", wx:"holz",
      tags:["Yu / Shu – Bachpunkt","Öffnungspunkt des Dai Mai","Paarpunkt zu 3E 5","einer der Acht Kreuzungspunkte"],
      wirkung:["Yu / Shu – Bachpunkt", "Holzpunkt der Gallenblasen-Leitbahn", "Öffnungspunkt des Dai Mai", "Paarpunkt zu 3E 5", "Einer der Acht Kreuzungspunkte", "", "Öffnet den Dai Mai", "Senkt Leber-Yang ab und klärt die Augen", "Löst Schwellung und Knoten", "Ordnet die Regel"],
      loc:"Auf dem Fußrücken in der Vertiefung zwischen viertem und fünftem Mittelfußknochen, seitlich der Sehne des kleinen Zehenstreckers.",
      ind:"Als Öffnungspunkt des Gürtelgefäßes bei Ausfluss, unregelmäßiger Regel und Schmerz im Unterbauch. Dazu einseitiger Kopfschmerz und Migräne, Schmerz am äußeren Augenwinkel, Ohrgeräusche, Schmerz in der Flanke und in der Brust, Spannung der Brüste, Schmerz im Fuß. Zusammen mit 3E 5 ein klassisches Paar.",
      nd:"Senkrecht 0,3 bis 0,5 Cun." },

    { n:43, pinyin:"Xiáxī", han:"侠溪", de:"Enger Gebirgsbach", en:"Pinched Ravine",
      x:352, y:1072, key:true, role:"YONG · TON",
      antik:"yong", wx:"wasser",
      tags:["Yong / Ying – kleiner Flusspunkt","Tonisierungspunkt"],
      wirkung:["Yong / Ying – kleiner Flusspunkt", "Wasserpunkt der Gallenblasen-Leitbahn", "Tonisierungspunkt", "", "Klärt Hitze aus Kopf, Ohr und Auge", "Löst Schwellung in der Wange", "Öffnet die Leitbahn am Fuß"],
      loc:"Auf dem Fußrücken zwischen vierter und fünfter Zehe, dicht vor dem Rand der Schwimmhaut, an der Grenze zwischen rotem und weißem Fleisch.",
      ind:"Als Wasserpunkt kühlend und zugleich Tonisierungspunkt: Schwindel, Kopfschmerz an der Schläfe, rote und schmerzende Augen, Ohrgeräusche und Hörminderung, Schmerz in Brust und Flanke, Schwellung der Wange, Fieber, Schmerz am äußeren Fußrand.",
      nd:"Senkrecht 0,3 bis 0,5 Cun." },

    { n:44, pinyin:"Zúqiàoyīn", han:"足窍阴", de:"Yin-Öffnung am Fuß", en:"Foot Portal Yin",
      x:336, y:1078, key:true, role:"TING",
      antik:"ting", wx:"metall",
      tags:["Ting / Jing – Brunnen-/Quellpunkt","Endpunkt des Meridians"],
      wirkung:["Ting / Jing – Brunnen-/Quellpunkt", "Metallpunkt der Gallenblasen-Leitbahn", "Endpunkt der Gallenblasen-Leitbahn", "", "Klärt Hitze und senkt Yang ab", "Beruhigt den Geist bei Albträumen", "Öffnet die Sinne und lindert Ohrensausen"],
      loc:"An der Außenseite der vierten Zehe, ein Fen (0,1 Cun) proximal des Nagelfalzwinkels. In der Seitenansicht liegt die vierte Zehe hinter der kleinen und ist darum als Projektion eingezeichnet.",
      ind:"Kopfschmerz, besonders an der Schläfe, rote und schmerzende Augen, Ohrgeräusche, Hörminderung, Halsschmerz, bitterer Mund, Fieber, Schlaflosigkeit mit vielen Träumen, Angstträume, Schmerz im Brustkorb, der das Atmen erschwert.",
      nd:"Schräg 0,1 bis 0,2 Cun oder Mikroaderlass." }
  ]
});
