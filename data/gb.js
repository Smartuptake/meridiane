/* Gallenblasenmeridian – Fuß-Shaoyang – 足少阳胆经
   Die einzige Tafel in der Seitenansicht (img/side.png, 880 × 1168). Die
   Figur steht im Profil nach links, zu sehen ist ihre linke Seite – also
   genau die Außenseite, an der dieser Meridian verläuft. Der Arm hängt
   hinter dem Rumpf und gibt die Flanke frei; ab y 470 bildet er einen
   eigenen Umriss. Die Höhenskala stimmt mit der Vorderansicht überein:
   Kniegelenksspalt y 818, Außenknöchel y 998, dazwischen 16 Cun, also
   11,25 Bildpunkte je Cun am Unterschenkel. Am Oberschenkel
   Trochanter y 572 bis Knie y 818 = 19 Cun, also 12,9 je Cun.
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

  cun: { knie: [445, 818], knoechel: [455, 998],
         hinweis: "Kniegelenksspalt → Außenknöchel = 16 Cun; Gb 31 liegt 7 Cun über dem Knie" },

  path: [[396,99],[408,112],[421,126],[438,118],[444,100],[434,82],[448,70],[460,78],[464,96],
         [452,72],[428,62],[402,62],[388,68],[381,78],[390,50],[415,36],[445,40],[465,62],[472,92],
         [468,120],[460,150],[472,208],[452,260],[420,310],[385,348],[410,375],[445,400],[432,418],
         [420,434],[430,470],[450,520],[472,576],[460,620],[448,670],[440,700],[433,728],[437,770],
         [445,810],[458,850],[462,885],[464,919],[462,940],[466,955],[461,968],[455,995],[448,1018],
         [425,1032],[402,1042],[375,1055],[357,1063],[337,1074]],

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
      loc:"Einen halben Cun seitlich des äußeren Augenwinkels, in der Vertiefung am äußeren Rand der Augenhöhle.",
      ind:"Rote, schmerzende oder tränende Augen, Lichtempfindlichkeit, verschwommenes Sehen, beginnender Star, Kopfschmerz an der Schläfe, Gesichtslähmung, Lidzucken, Krähenfüße.",
      nd:"Flach 0,3 bis 0,5 Cun nach hinten. Kein Moxa im Gesicht." },

    { n:2, pinyin:"Tīnghuì", han:"听会", de:"Zusammenkunft des Hörens", en:"Auditory Convergence",
      x:421, y:126, key:true, role:"",
      antik:"", wx:"",
      tags:["Ohrpunkt"],
      loc:"Vor dem Ohr, in der Vertiefung unterhalb des Knorpelvorsprungs am Ohreingang, die sich bei geöffnetem Mund deutlich zeigt.",
      ind:"Ohrgeräusche, Hörminderung, Ausfluss aus dem Ohr, Ohrenschmerz, Kiefergelenkschmerz, Kiefersperre, Zahnschmerz im Unterkiefer, Gesichtslähmung.",
      nd:"Senkrecht 0,5 bis 1 Cun bei geöffnetem Mund." },

    { n:8, pinyin:"Shuàigǔ", han:"率谷", de:"Anführendes Tal", en:"Valley Lead",
      x:434, y:82, key:true, role:"",
      antik:"", wx:"",
      tags:["Migränepunkt","Treffpunkt mit der Blase"],
      loc:"Anderthalb Cun oberhalb der Ohrspitze, in der Schläfengegend, gut ein Daumenbreit über dem Ohr.",
      ind:"Einseitiger Kopfschmerz und Migräne – der klassische Punkt dafür. Dazu Schwindel, Übelkeit und Erbrechen beim Kopfschmerz, Augenschmerz, Katerkopfschmerz nach Alkohol, Krampfanfälle bei Kindern.",
      nd:"Flach 0,5 bis 0,8 Cun nach hinten am Schädel entlang." },

    { n:14, pinyin:"Yángbái", han:"阳白", de:"Weißes Yang", en:"Yang White",
      x:381, y:78, key:true, role:"",
      antik:"", wx:"",
      tags:["Stirnpunkt","Treffpunkt mit dem Yangwei Mai"],
      loc:"Auf der Stirn, einen Cun oberhalb der Augenbraue, senkrecht über der Pupille bei geradem Blick.",
      ind:"Stirnkopfschmerz, Druck über den Augen, herabhängendes Lid, Lidzucken, Gesichtslähmung, Augenschmerz, Nachtblindheit, Schwindel, müde und schwere Lider.",
      nd:"Flach 0,3 bis 0,5 Cun nach unten zur Augenbraue hin. Bei Gesichtslähmung wird oft Richtung Gb 1 durchgestochen." },

    { n:20, pinyin:"Fēngchí", han:"风池", de:"Teich des Windes", en:"Wind Pool",
      x:460, y:150, key:true, role:"",
      antik:"", wx:"",
      tags:["einer der meistbenutzten Punkte überhaupt","Treffpunkt mit dem Yangwei Mai","Windpunkt"],
      loc:"Unterhalb des Hinterhauptbeins, in der Vertiefung zwischen den Ansätzen des Kapuzenmuskels und des Kopfwendemuskels, am Haaransatz.",
      ind:"Kopfschmerz jeder Art, besonders im Nacken und an der Schläfe, steifer Nacken, Schwindel, Bluthochdruck, rote und schmerzende Augen, verschwommenes Sehen, Ohrgeräusche, verstopfte Nase, beginnende Erkältung mit Frösteln, Schlaflosigkeit. Das Tor, durch das Wind in den Körper eindringt.",
      nd:"Schräg 0,8 bis 1,2 Cun in Richtung der gegenüberliegenden Augenhöhle. Niemals nach oben innen in Richtung des Schädelinneren stechen." },

    { n:21, pinyin:"Jiānjǐng", han:"肩井", de:"Schulterbrunnen", en:"Shoulder Well",
      x:472, y:208, key:true, role:"",
      antik:"", wx:"",
      tags:["Hauptpunkt bei Nacken- und Schulterverspannung","in der Schwangerschaft verboten"],
      loc:"Auf der höchsten Stelle des Schultermuskels, auf halbem Weg zwischen dem Dornfortsatz des 7. Halswirbels und dem äußeren Ende des Schulterdachs.",
      ind:"Steifer, schmerzender Nacken und Schulter, Spannungskopfschmerz, Schmerz zwischen den Schulterblättern, Bewegungseinschränkung des Arms, Brustdrüsenentzündung, Milchstau, zähe Geburt.",
      nd:"Senkrecht 0,3 bis 0,5 Cun – nicht tiefer, darunter liegt die Lungenspitze. In der Schwangerschaft nicht nadeln, der Punkt wirkt stark nach unten." },

    { n:24, pinyin:"Rìyuè", han:"日月", de:"Sonne und Mond", en:"Sun and Moon",
      x:385, y:348, key:true, role:"MU",
      antik:"", wx:"",
      tags:["Mu-Alarmpunkt der Gallenblase"],
      loc:"Im siebten Zwischenrippenraum, senkrecht unter der Brustwarze, einen Zwischenrippenraum unterhalb von Le 14.",
      ind:"Als Mu-Punkt das Gegenstück zu Bl 19 auf dem Rücken: bitterer Mundgeschmack, Schmerz und Druck unter dem rechten Rippenbogen, Übelkeit, Erbrechen, saures Aufstoßen, Gelbsucht, Unverträglichkeit von Fettem, Schluckauf. Druckempfindlichkeit hier ist ein guter Hinweis.",
      nd:"Schräg oder flach 0,5 bis 0,8 Cun am Rippenrand entlang. Nie senkrecht." },

    { n:25, pinyin:"Jīngmén", han:"京门", de:"Tor der Hauptstadt", en:"Capital Gate",
      x:445, y:400, key:true, role:"MU",
      antik:"", wx:"",
      tags:["Mu-Alarmpunkt der Niere"],
      loc:"Am freien Ende der zwölften Rippe, an der seitlichen Bauchwand hinten.",
      ind:"Als Mu-Punkt der Niere bei Kreuzschmerz, Schwäche im unteren Rücken, Harnbeschwerden, Ödemen. Dazu Schmerz in der Flanke, Blähungen, Durchfall, Schmerz, der vom Rücken in die Flanke zieht.",
      nd:"Schräg 0,5 bis 0,8 Cun. Nie tief senkrecht – darunter liegt die Niere." },

    { n:26, pinyin:"Dàimài", han:"带脉", de:"Gürtelgefäß", en:"Girdling Vessel",
      x:420, y:434, key:true, role:"",
      antik:"", wx:"",
      tags:["Treffpunkt mit dem Dai Mai","Frauenpunkt"],
      loc:"An der seitlichen Bauchwand, senkrecht unter dem freien Ende der elften Rippe, auf Höhe des Nabels.",
      ind:"Ausfluss jeder Art – der wichtigste Punkt dafür. Dazu unregelmäßige Regel, Regelschmerz, Schmerz im Unterbauch, Gebärmuttervorfall, Schmerz und Schwäche im Kreuz, Blähbauch. Der Punkt liegt auf dem Gürtelgefäß, dem einzigen waagerecht verlaufenden Gefäß des Körpers.",
      nd:"Senkrecht 0,8 bis 1,2 Cun." },

    { n:30, pinyin:"Huántiào", han:"环跳", de:"Im Kreis springen", en:"Jumping Circle",
      x:472, y:576, key:true, role:"",
      antik:"", wx:"",
      tags:["Hauptpunkt bei Ischias","Treffpunkt mit der Blase"],
      loc:"In der Hüfte, am Übergang vom äußeren Drittel zu den inneren zwei Dritteln der Verbindung zwischen dem großen Rollhügel des Oberschenkelknochens und dem Kreuzbeinschlitz. Bei Seitenlage mit angezogenem Bein gut zu finden.",
      ind:"Der stärkste Punkt bei Ischias: Schmerz in Gesäß und Hüfte, der über die Außenseite des Beins hinabzieht, Bewegungseinschränkung der Hüfte, Taubheit und Schwäche im Bein, Lähmung nach Schlaganfall, Kreuzschmerz.",
      nd:"Senkrecht 1,5 bis 3 Cun – einer der wenigen Punkte, die tief gestochen werden. Ein ausstrahlendes Gefühl ins Bein ist erwünscht." },

    { n:31, pinyin:"Fēngshì", han:"风市", de:"Markt des Windes", en:"Wind Market",
      x:433, y:728, key:false, role:"",
      antik:"", wx:"",
      tags:["Oberschenkelpunkt","Hautpunkt"],
      loc:"An der Außenseite des Oberschenkels, sieben Cun über der Kniekehlenfalte. Im Stehen mit hängenden Armen zeigt die Spitze des Mittelfingers genau darauf.",
      ind:"Schmerz, Taubheit und Schwäche am seitlichen Oberschenkel, Ischias, Lähmung des Beins, Juckreiz am ganzen Körper, Nesselsucht, Ekzeme. Der Name weist auf den Wind – und Juckreiz gilt als Wind in der Haut.",
      nd:"Senkrecht 1 bis 1,5 Cun." },

    { n:34, pinyin:"Yánglíngquán", han:"阳陵泉", de:"Quelle am Yang-Hügel", en:"Yang Mound Spring",
      x:458, y:850, key:true, role:"HO",
      antik:"ho", wx:"erde",
      tags:["Ho / He – Meerpunkt","Hui-Punkt der Sehnen","einer der wichtigsten Punkte überhaupt"],
      loc:"In der Vertiefung vor und unterhalb des Köpfchens des Wadenbeins, gut tastbar an der Außenseite des Unterschenkels dicht unter dem Knie.",
      ind:"Als Hui-Punkt der Sehnen bei jeder Steifigkeit, Bewegungseinschränkung, Krampf oder Sehnenerkrankung – auch weit entfernt von der Stelle selbst. Dazu Schmerz an der Knieaußenseite, Ischias, Schmerz in der Flanke, bitterer Mundgeschmack, Erbrechen, Gelbsucht, Reizbarkeit, Schulterbeschwerden.",
      nd:"Senkrecht 0,8 bis 1,5 Cun. Bei Schulterbeschwerden gern mit Bewegung der Schulter während der Nadelung." },

    { n:36, pinyin:"Wàiqiū", han:"外丘", de:"Äußerer Hügel", en:"Outer Hill",
      x:464, y:919, key:false, role:"XI",
      antik:"xi", wx:"",
      tags:["Xi-Spaltpunkt"],
      loc:"Sieben Cun oberhalb der Außenknöchelspitze, am vorderen Rand des Wadenbeins.",
      ind:"Als Xi-Punkt bei Akutem: plötzlicher heftiger Schmerz in der Flanke, akuter Nackenschmerz, akuter Schmerz an der Beinaußenseite, Krampfanfälle, Hautbeschwerden mit Schmerz.",
      nd:"Senkrecht 0,8 bis 1,2 Cun." },

    { n:37, pinyin:"Guāngmíng", han:"光明", de:"Helles Licht", en:"Bright Light",
      x:462, y:940, key:true, role:"LUO",
      antik:"luo", wx:"",
      tags:["Luo-Punkt zur Leber","Augenpunkt"],
      loc:"Fünf Cun oberhalb der Außenknöchelspitze, am vorderen Rand des Wadenbeins.",
      ind:"Der Augenpunkt am Bein, wie sein Name sagt: verschwommenes Sehen, trockene oder schmerzende Augen, Nachtblindheit, Augenjucken. Als Luo-Punkt die Brücke zur Leber, die sich zu den Augen öffnet. Dazu Schmerz und Schwäche im Bein, Brustspannung, Migräne.",
      nd:"Senkrecht 0,8 bis 1,2 Cun." },

    { n:38, pinyin:"Yángfǔ", han:"阳辅", de:"Yang-Hilfe", en:"Yang Assistance",
      x:466, y:955, key:false, role:"KING · SED",
      antik:"king", wx:"feuer",
      tags:["King / Jing – Flusspunkt","Sedierungspunkt"],
      loc:"Vier Cun oberhalb der Außenknöchelspitze, am vorderen Rand des Wadenbeins, also einen Cun unter Gb 37.",
      ind:"Als Sedierungspunkt bei Fülle und Hitze im Meridian: einseitiger Kopfschmerz, Schmerz am äußeren Augenwinkel, Schmerz in Achsel und Flanke, geschwollene Lymphknoten, Schmerz an der Beinaußenseite, Wechselfieber.",
      nd:"Senkrecht 0,5 bis 0,8 Cun." },

    { n:39, pinyin:"Xuánzhōng", han:"悬钟", de:"Hängende Glocke", en:"Suspended Bell",
      x:461, y:968, key:true, role:"",
      antik:"", wx:"",
      tags:["Hui-Punkt des Marks","auch Juégǔ 绝骨 genannt"],
      loc:"Drei Cun oberhalb der Außenknöchelspitze, am vorderen Rand des Wadenbeins.",
      ind:"Als Hui-Punkt des Marks bei allem, was Knochen und Mark betrifft: Osteoporose, Knochenschmerz, Schwäche der Beine, aber auch Gedächtnisschwäche und Schwindel, weil das Gehirn das Meer des Marks ist. Dazu steifer Nacken – ein klassischer Fernpunkt dafür –, Schmerz in der Flanke und Hämorrhoiden.",
      nd:"Senkrecht 0,5 bis 0,8 Cun." },

    { n:40, pinyin:"Qiūxū", han:"丘墟", de:"Hügel und Ruine", en:"Hill Ruins",
      x:448, y:1018, key:true, role:"YUAN",
      antik:"yuan", wx:"",
      tags:["Yuan-Quellpunkt"],
      loc:"Vor und unterhalb der Außenknöchelspitze, in der Vertiefung seitlich der Sehne des langen Zehenstreckers.",
      ind:"Als Yuan-Punkt bei jedem Gallenblasenmuster brauchbar, besonders bei Mutlosigkeit und Unentschlossenheit. Dazu Schmerz und Schwellung im Sprunggelenk, Schmerz in der Flanke und in der Achsel, Schwellung unter der Achsel, bitterer Mund, Erbrechen, Schmerz an der Beinaußenseite.",
      nd:"Senkrecht 0,5 bis 0,8 Cun." },

    { n:41, pinyin:"Zúlínqì", han:"足临泣", de:"Fuß, der in Tränen ausbricht", en:"Foot Overlooking Tears",
      x:402, y:1042, key:true, role:"YU",
      antik:"yu", wx:"holz",
      tags:["Yu / Shu – Bachpunkt","Öffnungspunkt des Dai Mai","Paarpunkt zu 3E 5","einer der Acht Kreuzungspunkte"],
      loc:"Auf dem Fußrücken in der Vertiefung zwischen viertem und fünftem Mittelfußknochen, seitlich der Sehne des kleinen Zehenstreckers.",
      ind:"Als Öffnungspunkt des Gürtelgefäßes bei Ausfluss, unregelmäßiger Regel und Schmerz im Unterbauch. Dazu einseitiger Kopfschmerz und Migräne, Schmerz am äußeren Augenwinkel, Ohrgeräusche, Schmerz in der Flanke und in der Brust, Spannung der Brüste, Schmerz im Fuß. Zusammen mit 3E 5 ein klassisches Paar.",
      nd:"Senkrecht 0,3 bis 0,5 Cun." },

    { n:43, pinyin:"Xiáxī", han:"侠溪", de:"Enger Gebirgsbach", en:"Pinched Ravine",
      x:357, y:1063, key:true, role:"YONG · TON",
      antik:"yong", wx:"wasser",
      tags:["Yong / Ying – kleiner Flusspunkt","Tonisierungspunkt"],
      loc:"Auf dem Fußrücken zwischen vierter und fünfter Zehe, dicht vor dem Rand der Schwimmhaut, an der Grenze zwischen rotem und weißem Fleisch.",
      ind:"Als Wasserpunkt kühlend und zugleich Tonisierungspunkt: Schwindel, Kopfschmerz an der Schläfe, rote und schmerzende Augen, Ohrgeräusche und Hörminderung, Schmerz in Brust und Flanke, Schwellung der Wange, Fieber, Schmerz am äußeren Fußrand.",
      nd:"Senkrecht 0,3 bis 0,5 Cun." },

    { n:44, pinyin:"Zúqiàoyīn", han:"足窍阴", de:"Yin-Öffnung am Fuß", en:"Foot Portal Yin",
      x:337, y:1074, key:true, role:"TING",
      antik:"ting", wx:"metall",
      tags:["Ting / Jing – Brunnen-/Quellpunkt","Endpunkt des Meridians"],
      loc:"An der Außenseite der vierten Zehe, ein Fen (0,1 Cun) proximal des Nagelfalzwinkels. In der Seitenansicht liegt die vierte Zehe hinter der kleinen und ist darum als Projektion eingezeichnet.",
      ind:"Kopfschmerz, besonders an der Schläfe, rote und schmerzende Augen, Ohrgeräusche, Hörminderung, Halsschmerz, bitterer Mund, Fieber, Schlaflosigkeit mit vielen Träumen, Angstträume, Schmerz im Brustkorb, der das Atmen erschwert.",
      nd:"Schräg 0,1 bis 0,2 Cun oder Mikroaderlass." }
  ]
});
