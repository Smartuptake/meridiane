/* Lenkergefäß – Du Mai – 督脉
   Kein Organmeridian, sondern eines der acht außerordentlichen Gefäße.
   Kalibriert auf img/back.png (880 × 1168), hintere Mittellinie x 436.
   Wirbelhöhen wie beim Blasenmeridian: T1 am Halsansatz y 222, L4 auf
   Höhe des Darmbeinkamms y 450, also 15,2 Bildpunkte je Wirbel. Der
   hintere Haaransatz liegt bei y 165, der Scheitel bei y 38. */
Meridian.register({
  id: "du", code: "GV", codeDe: "Du", ord: 14,
  name: "Lenkergefäß", titel: "Lenkergefäß", nameHan: "督脉",
  channel: "Du Mai", channelHan: "督脉",
  element: "–", elementHan: "", wx: "",
  yin: false, coupled: "", coupledName: "Ren Mai",
  clock: "–", pointCount: 28, direction: "Steißbein → Oberlippe",
  view: "back", mirror: false,

  rubrik: "Außerordentliches Gefäß 奇经 · Yang · Meer der Yang-Meridiane",
  meta: [
    ["Art", "Außerordentliches Gefäß"],
    ["Gegenstück", "Ren Mai, Konzeptionsgefäß"],
    ["Öffnungspunkt", "Dü 3 Hòuxī"],
    ["Paarpunkt", "Bl 62 Shēnmài"],
    ["Punkte", "28"],
    ["Kennung", "Du · GV"],
    ["Bezeichnung", "Außerordentliches Gefäß · Qí jīng 奇经"]
  ],

  intro: "Das Lenkergefäß ist das Gegenstück zum Konzeptionsgefäß: Es läuft auf der " +
         "hinteren Mittellinie vom Steißbein die ganze Wirbelsäule hinauf, über den " +
         "Nacken und den Scheitel, über die Stirn und die Nase bis zum Zahnfleisch der " +
         "Oberlippe. Sein Name Dū 督 heißt lenken, aufsichtführen, beaufsichtigen – es " +
         "lenkt alle Yang-Meridiane und heißt darum „Meer der Yang-Meridiane“. Wo das " +
         "Ren Mai das Yin trägt, führt das Du Mai das Yang. " +
         "Eingezeichnet sind fünfzehn der achtundzwanzig Punkte. Du 24 auf der Stirn " +
         "und Du 26 in der Oberlippenrinne liegen im Gesicht und stehen als Projektion " +
         "an der Kopfkante. Eine Gegenseite gibt es nicht: das Gefäß läuft selbst auf " +
         "der Mittellinie.",

  cun: { c7: [436, 212], darmbein: [436, 457],
         hinweis: "T1 liegt bei y 222, L4 auf Höhe des Darmbeinkamms bei y 450 – 15,2 Bildpunkte je Wirbel" },

  path: [[436,565],[436,535],[436,500],[436,457],[436,427],[436,381],[436,351],[436,320],
         [436,290],[436,259],[436,212],[436,180],[436,158],[436,150],[436,120],[438,80],
         [440,40],[455,42],[468,52],[474,58],[478,80],[479,105]],

  inner: "M436,470 C448,492 452,520 450,548",
  branches: [
    { label: "Ast vom Scheitel ins Gehirn", d: "M440,46 C432,60 428,76 430,94" }
  ],

  organ: {
    label: "Das Gefäß",
    titel: "Das Lenkergefäß in der chinesischen Medizin",
    pinyin: "Dū mài", han: "督脉", wx: "",
    text: [
      "Das Lenkergefäß ist die Achse der Rückseite. Es beginnt am Steißbein, steigt " +
      "innerhalb der Wirbelsäule auf, tritt am Nacken an die Oberfläche, geht über den " +
      "Scheitel, die Stirn und die Nase und endet am Zahnfleisch der Oberlippe. Damit " +
      "ist es das einzige Gefäß, das die Wirbelsäule auf ganzer Länge begleitet – und " +
      "zugleich das einzige, das unmittelbar ins Gehirn zieht.",

      "Sein Name Dū 督 heißt lenken und beaufsichtigen. Alle sechs Yang-Meridiane " +
      "kreuzen es bei Du 14 Dàzhūi, dem großen Wirbel unter dem siebten Halswirbel. " +
      "Von dort aus wird das Yang des ganzen Körpers verteilt. Darum heißt es „Meer " +
      "der Yang-Meridiane“, und darum ist Du 14 der erste Punkt bei Fieber ebenso wie " +
      "bei Frösteln – er kann Yang zuführen und Hitze ableiten.",

      "Drei Aufgaben stehen im Vordergrund. Erstens wärmt und trägt es die Wirbelsäule; " +
      "Du 4 Mìngmén, das „Tor des Lebens“ zwischen den Nieren, ist der Punkt, an dem " +
      "das Feuer des Körpers angefacht wird. Zweitens erreicht es über den Scheitel " +
      "das Gehirn und den Geist; Du 20 Bǎihuì hebt, was gesunken ist – körperlich wie " +
      "seelisch. Drittens versorgt es Nase, Zähne und Oberlippe, wo es endet.",

      "Geöffnet wird das Gefäß über Dü 3 Hòuxī, gepaart mit Bl 62 Shēnmài. Dieses Paar " +
      "gehört zu den Acht Kreuzungspunkten und ist die klassische Wahl bei steifem " +
      "Nacken, Rückenschmerz auf der Mittellinie und bei Krampfanfällen. Zusammen " +
      "bilden Ren Mai und Du Mai den Kleinen Energiekreislauf, der im Qigong bewusst " +
      "geführt wird – das Tableau dazu liegt bei den Übungen."
    ],

    aufgabenTitel: "Die Aufgaben des Lenkergefäßes",
    aufgaben: [
      { was: "Meer der Yang-Meridiane sein", han: "阳脉之海",
        text: "Alle sechs Yang-Meridiane kreuzen das Du Mai bei Du 14. Es sammelt und " +
              "verteilt das Yang des ganzen Körpers. Bei Kälte, Erschöpfung und " +
              "Mutlosigkeit wird es gestützt, bei Fieber und Hitze abgeleitet." },
      { was: "Die Wirbelsäule tragen und wärmen", han: "贯脊属肾",
        text: "Es läuft innerhalb der Wirbelsäule und verbindet sich mit der Niere. " +
              "Steifer Rücken, Kreuzschmerz auf der Mittellinie, Verkrümmung und " +
              "Kälte im Rücken gehören hierher. Du 4 Mìngmén ist dabei der Ofen." },
      { was: "Das Gehirn erreichen", han: "入络脑",
        text: "Vom Scheitel zieht ein Ast ins Gehirn. Schwindel, Gedächtnisschwäche, " +
              "Benommenheit, Krampfanfälle und Bewusstlosigkeit werden über dieses " +
              "Gefäß behandelt; Du 26 ist der klassische Erweckungspunkt." },
      { was: "Heben, was gesunken ist", han: "升阳举陷",
        text: "Du 20 Bǎihuì am Scheitel hebt im Wortsinn: bei Vorfall von Gebärmutter " +
              "oder Darm, bei Hämorrhoiden, bei Senkungsgefühl – und ebenso bei " +
              "Niedergeschlagenheit und fehlendem Antrieb." },
      { was: "Nase, Zähne und Oberlippe versorgen", han: "至龈交",
        text: "Der Verlauf endet am Zahnfleisch der Oberlippe. Verstopfte Nase, " +
              "Nasenbluten, Nebenhöhlenbeschwerden, Zahnfleischschmerz im Oberkiefer " +
              "und Nasenpolypen folgen dieser Linie." }
    ],

    zustandTitel: "Mangel und Fülle von Yin und Yang",
    zustandLabel: "Mangel und Fülle",
    zustaende: [
      { feld: "Yang-Mangel", en: "Du Mai Deficient and Cold", han: "督脉虚寒", pinyin: "dū mài xū hán",
        kurz: "Dem Meer der Yang-Meridiane fehlt das Feuer.",
        zeichen: "Kälteempfindlichkeit am ganzen Körper, besonders im Rücken, " +
                 "Frösteln, das sich durch Zudecken kaum bessert, schwacher und " +
                 "schmerzender unterer Rücken, gebeugte Haltung, Antriebslosigkeit " +
                 "und Mutlosigkeit, Schwindel, Gedächtnisschwäche, Senkungsgefühl, " +
                 "bei Männern Impotenz, bei Kindern verzögerte Entwicklung.",
        zunge: "blass, feucht, geschwollen",
        puls: "tief, langsam, schwach",
        punkte: "Du 4 mit Moxa · Du 14 mit Moxa · Du 20 · Bl 23 · Ren 4" },

      { feld: "Yin-Mangel", en: "Du Mai Yin and Marrow Depletion", han: "督脉阴虚髓减", pinyin: "dū mài yīn xū suǐ jiǎn",
        kurz: "Das Mark wird knapp, und das Meer des Marks leert sich.",
        zeichen: "Schwindel mit Leeregefühl im Kopf, Ohrgeräusche, Gedächtnis- und " +
                 "Konzentrationsschwäche, trockene und brennende Augen, schwache " +
                 "Knochen, wunder Rücken ohne Kältegefühl, Nachtschweiß, Hitze am " +
                 "Abend, unruhiger Schlaf. Das Bild der zweiten Lebenshälfte und " +
                 "nach langer Überarbeitung.",
        zunge: "rot, wenig oder kein Belag",
        puls: "dünn und schnell",
        punkte: "Du 20 · Du 16 · Bl 23 · Ni 3 · Gb 39" },

      { feld: "Yin-Fülle", en: "Cold Obstructing the Du Mai", han: "寒凝督脉", pinyin: "hán níng dū mài",
        kurz: "Kälte setzt sich auf der Rückenmittellinie fest.",
        zeichen: "Steifer, kalter Rücken, der sich morgens am schlechtesten bewegen " +
                 "lässt, ziehender Schmerz längs der Wirbelsäule, steifer Nacken, " +
                 "Verschlimmerung bei nasskaltem Wetter und deutliche Besserung durch " +
                 "Wärme, Kopfschmerz im Hinterkopf, Frösteln ohne Fieber.",
        zunge: "blass mit weißem Belag",
        puls: "tief, langsam, gespannt",
        punkte: "Du 14 · Du 12 · Du 3 · Dü 3 mit Bl 62 · Bl 40" },

      { feld: "Yang-Fülle", en: "Heat and Wind in the Du Mai", han: "督脉风热", pinyin: "dū mài fēng rè",
        kurz: "Hitze steigt die Mittellinie hinauf und wird oben zu Wind.",
        zeichen: "Hohes Fieber, steifer Nacken bis zum Überstrecken des Rückens, " +
                 "Krampfanfälle, Zähneknirschen, Bewusstseinstrübung, heftiger " +
                 "Kopfschmerz am Scheitel, rotes Gesicht, Nasenbluten, Unruhe. " +
                 "Bei Kindern das Bild des Fieberkrampfs – ein Notfall.",
        zunge: "rot, gelber Belag, bei starkem Bild steif",
        puls: "schnell, voll, saitenförmig",
        punkte: "Du 14 · Du 26 · Du 20 · Di 11 · Le 3" }
    ],

    aeussereTitel: "Wo das Gefäß selbst betroffen ist",
    aeussere: [
      { name: "Die Wirbelsäule auf ganzer Länge", han: "脊强", pinyin: "jǐ qiáng",
        zeichen: "Steifer, schmerzender Rücken genau auf der Mittellinie, " +
                 "Bewegungseinschränkung beim Beugen und Strecken, Kreuzschmerz, " +
                 "steifer Nacken, Rundrücken, bei starkem Bild Überstrecken des " +
                 "Rückens. Der Fernpunkt dafür ist Dü 3, der Öffnungspunkt dieses " +
                 "Gefäßes.",
        punkte: "Dü 3 mit Bl 62 · Du 14 · Du 4 · Du 3 · Bl 40" },
      { name: "Kopf, Geist und Bewusstsein", han: "神志", pinyin: "shén zhì",
        zeichen: "Schwindel, Benommenheit, Gedächtnisschwäche, Schlaflosigkeit, " +
                 "Niedergeschlagenheit, Krampfanfälle, Ohnmacht. Du 20 am Scheitel " +
                 "hebt und klärt, Du 26 in der Oberlippenrinne weckt – er ist der " +
                 "klassische Notfallpunkt bei Bewusstlosigkeit und Kollaps.",
        punkte: "Du 20 · Du 26 · Du 16 · He 7 · Pe 6" },
      { name: "Nase, Zähne und Oberlippe", han: "鼻齿", pinyin: "bí chǐ",
        zeichen: "Verstopfte oder laufende Nase, Nasenbluten, Nebenhöhlendruck, " +
                 "Verlust des Geruchssinns, Nasenpolypen, Zahnfleischschmerz und " +
                 "Zahnschmerz im Oberkiefer, Schwellung der Oberlippe.",
        punkte: "Du 23 · Du 26 · Du 20 · Di 20 · Di 4" }
    ],

    nahrungTitel: "Was das Gefäß stärkt und was ihm schadet",
    nahrungLabel: "Lebensführung",
    nahrung: {
      staerktTitel: "Was das Gefäß stärkt",
      schadetTitel: "Was ihm schadet",
      staerkt: [
        { was: "Den Nacken und den unteren Rücken warm halten", warum: "Du 14 und Du 4 sind die beiden Stellen, an denen Kälte am leichtesten eindringt" },
        { was: "Moxa auf Du 4 Mìngmén, kurweise im Winter", warum: "das Tor des Lebens ist der Ofen der Rückseite" },
        { was: "Aufrecht sitzen und gehen", warum: "das Gefäß läuft in der Wirbelsäule; eine gebeugte Haltung drückt es zusammen" },
        { was: "Rückenstreckung und sanftes Aufrollen", warum: "bewegt die Linie von unten nach oben, in ihrer Flussrichtung" },
        { was: "Sonne auf dem Rücken, in Maßen", warum: "die einfachste Art, dem Meer der Yang-Meridiane Yang zuzuführen" },
        { was: "Walnüsse, Kastanien, Knochenbrühe", warum: "stützen Niere und Mark, mit denen dieses Gefäß verbunden ist" },
        { was: "Der Kleine Energiekreislauf im Qigong", warum: "führt Ren Mai und Du Mai bewusst zu einem Kreis zusammen" }
      ],
      schadet: [
        { was: "Zugluft im Nacken", warum: "der klassische Eingang für Wind und Kälte – genau an Du 14 und Bl 12" },
        { was: "Langes gebeugtes Sitzen am Bildschirm", warum: "presst die Linie zusammen und lässt das Yang nicht aufsteigen" },
        { was: "Kalter, nasser Untergrund unter dem Kreuz", warum: "Kälte gelangt unmittelbar an Du 3 und Du 4" },
        { was: "Dauernde Erschöpfung ohne Erholung", warum: "das Yang wird verbraucht, das Gefäß kann nichts mehr verteilen" },
        { was: "Zu viel Kühlendes und Rohes im Winter", warum: "nimmt dem Rücken genau die Wärme, die er in dieser Jahreszeit braucht" }
      ],
      hinweis: "Du 4 Mìngmén liegt in der Mitte des Rückens, auf Höhe des Nabels, " +
               "zwischen dem zweiten und dritten Lendenwirbel – die Hände auf den " +
               "Hüftknochen aufgelegt, zeigen die Daumen dorthin. Eine warme Hand oder " +
               "ein Kirschkernkissen auf dieser Stelle ist die einfachste Form, das " +
               "Yang des Rückens zu stützen. Und Du 26 in der Oberlippenrinne sollte " +
               "jeder kennen: kräftiger Nagelrand-Druck dort ist die älteste " +
               "Erste-Hilfe-Maßnahme bei Ohnmacht."
    },

    eigenschaften: [
      { k: "Art", v: "Außerordentliches Gefäß 奇经" },
      { k: "Beiname", v: "Meer der Yang-Meridiane 阳脉之海" },
      { k: "Wortsinn", v: "Dū 督 – lenken, beaufsichtigen" },
      { k: "Gegenstück", v: "Ren Mai, Konzeptionsgefäß" },
      { k: "Öffnungspunkt", v: "Dü 3 Hòuxī" },
      { k: "Paarpunkt", v: "Bl 62 Shēnmài" },
      { k: "Luo-Punkt", v: "Du 1 Chángqiáng" },
      { k: "Ursprung", v: "im Unterbauch, gemeinsam mit Ren Mai und Chong Mai" },
      { k: "Punkte", v: "28" },
      { k: "Wandlungsphase", v: "keine – außerordentliche Gefäße stehen außerhalb" }
    ],

    hinweis: "Ren Mai und Du Mai bilden zusammen den Kleinen Energiekreislauf: vorn " +
             "hinab, hinten hinauf. Im Qigong wird er bewusst geführt; das Tableau " +
             "dazu liegt bei den Übungen. Die Muster beschreiben die klassische Lehre " +
             "und dienen dem Unterricht. Sie ersetzen weder Diagnose noch ärztliche " +
             "Abklärung."
  },

  points: [
    { n:1, pinyin:"Chángqiáng", han:"长强", de:"Lange Stärke", en:"Long Strong",
      x:436, y:565, key:false, role:"LUO",
      antik:"luo", wx:"",
      tags:["Luo-Punkt des Du Mai","Beginn des Gefäßes"],
      wirkung:["Luo-Punkt des Du Mai", "Beginn des Du Mai", "", "Der Punkt bei Hämorrhoiden und Mastdarmvorfall", "Ordnet den Darm", "Beruhigt bei Krämpfen und Unruhe"],
      marken:["wirbelrinne"],
      loc:"Zwischen der Spitze des Steißbeins und dem After, auf halbem Weg. Der Punkt liegt unter der Kleidung und ist hier als Projektion eingezeichnet.",
      ind:"Hämorrhoiden, Blut im Stuhl, Vorfall des Darms, Verstopfung, Durchfall, Schmerz am Steißbein, Krampfanfälle, Schwermut. Als Luo-Punkt strahlt er längs der ganzen Wirbelsäule aus.",
      nd:"Schräg 0,8 bis 1 Cun nach oben, dicht am Steißbein entlang – nie in Richtung Darm." },

    { n:2, pinyin:"Yāoshū", han:"腰俞", de:"Lenden-Transportpunkt", en:"Lumbar Shu",
      x:436, y:535, key:false, role:"",
      antik:"", wx:"",
      tags:["Kreuzbeinpunkt"],
      wirkung:["Kreuzbeinpunkt", "", "Stärkt die Lenden", "Ordnet die Regel", "Leitet Feuchte Hitze aus dem Unteren Erwärmer"],
      marken:["kreuzbein", "wirbelrinne"],
      loc:"Im Kreuzbeinschlitz, der kleinen Öffnung am unteren Ende des Kreuzbeins.",
      ind:"Kreuz- und Kreuzbeinschmerz, Steifigkeit im unteren Rücken, Schmerz, der ins Bein zieht, unregelmäßige Regel, Hämorrhoiden, Krampfanfälle.",
      nd:"Schräg 0,5 bis 1 Cun nach oben." },

    { n:3, pinyin:"Yāoyángguān", han:"腰阳关", de:"Yang-Tor der Lenden", en:"Lumbar Yang Pass",
      x:436, y:457, key:true, role:"",
      antik:"", wx:"",
      tags:["Hauptpunkt bei Kreuzschmerz"],
      wirkung:["Hauptpunkt bei Kreuzschmerz", "", "Der Punkt bei Schmerz und Steife im Kreuz", "Wärmt das Nieren-Yang", "Kräftigt die Beine"],
      marken:["l4", "wirbelrinne"],
      loc:"Unterhalb des Dornfortsatzes des 4. Lendenwirbels, auf Höhe des Darmbeinkamms – dort, wo die aufgelegten Hände die Mittellinie treffen.",
      ind:"Kreuzschmerz und Steifigkeit im unteren Rücken, Ischias, Schwäche und Taubheit der Beine, Knieschmerz, unregelmäßige Regel, Impotenz, Samenerguss im Schlaf.",
      nd:"Senkrecht oder leicht schräg nach oben 0,8 bis 1,2 Cun. Gut zu moxen." },

    { n:4, pinyin:"Mìngmén", han:"命门", de:"Tor des Lebens", en:"Life Gate",
      x:436, y:427, key:true, role:"",
      antik:"", wx:"",
      tags:["Tor des Lebens","einer der wichtigsten Moxa-Punkte überhaupt"],
      wirkung:["Tor des Lebens", "Einer der wichtigsten Moxa-Punkte überhaupt", "", "Wärmt das Nieren-Yang – das Feuer des Lebenstors", "Festigt die Essenz", "Stärkt die Lenden und die Knochen", "Der Punkt bei Kälte und Erschöpfung von Grund auf"],
      marken:["wirbelrinne"],
      loc:"Unterhalb des Dornfortsatzes des 2. Lendenwirbels, auf Nabelhöhe, genau zwischen den beiden Nieren-Shu-Punkten Bl 23.",
      ind:"Der Punkt, an dem das Feuer des Körpers angefacht wird: Kälteempfindlichkeit, kalter und schwacher unterer Rücken, Erschöpfung, häufiges nächtliches Wasserlassen, Durchfall am frühen Morgen, Impotenz, Unfruchtbarkeit, Ausfluss, Haarausfall, Ohrgeräusche, bei Kindern verzögerte Entwicklung.",
      nd:"Senkrecht oder schräg nach oben 0,5 bis 1 Cun. Der Moxa-Punkt der Rückseite; bei Yin-Mangel mit Hitze nicht moxen." },

    { n:6, pinyin:"Jǐzhōng", han:"脊中", de:"Mitte der Wirbelsäule", en:"Spinal Centre",
      x:436, y:381, key:false, role:"",
      antik:"", wx:"",
      tags:["Mitte der Wirbelsäule"],
      wirkung:["Mitte der Wirbelsäule", "", "Stärkt die Milz und ordnet die Verdauung", "Leitet Feuchtigkeit aus", "Kräftigt den Rücken"],
      marken:["wirbelrinne"],
      loc:"Unterhalb des Dornfortsatzes des 11. Brustwirbels.",
      ind:"Durchfall, Blut im Stuhl, Hämorrhoiden, Vorfall des Darms, Gelbsucht, Rückenschmerz und Steifigkeit, bei Kindern Verdauungsschwäche mit Abmagerung, Krampfanfälle.",
      nd:"Schräg 0,5 bis 1 Cun nach oben. Kein Moxa – der Punkt gilt als hitzeempfindlich." },

    { n:8, pinyin:"Jīnsuō", han:"筋缩", de:"Zusammenziehen der Sehnen", en:"Sinew Contraction",
      x:436, y:351, key:false, role:"",
      antik:"", wx:"",
      tags:["Sehnenpunkt des Rückens"],
      wirkung:["Sehnenpunkt des Rückens", "", "Besänftigt Wind und löst Krämpfe", "Entspannt die Sehnen", "Beruhigt den Geist"],
      marken:["wirbelrinne"],
      loc:"Unterhalb des Dornfortsatzes des 9. Brustwirbels, auf Höhe von Bl 18, dem Rücken-Shu der Leber.",
      ind:"Krampf und Zusammenziehen der Muskeln, Krampfanfälle, Steifigkeit des Rückens, Magenschmerz, Gelbsucht, Reizbarkeit, Schwermut. Der Name und die Höhe der Leber gehören zusammen: die Leber beherrscht die Sehnen.",
      nd:"Schräg 0,5 bis 1 Cun nach oben." },

    { n:9, pinyin:"Zhìyáng", han:"至阳", de:"Höchstes Yang", en:"Extremity of Yang",
      x:436, y:320, key:true, role:"",
      antik:"", wx:"",
      tags:["Hauptpunkt bei Gelbsucht"],
      wirkung:["Hauptpunkt bei Gelbsucht", "", "Leitet Feuchte Hitze aus – der Punkt bei gelber Verfärbung", "Ordnet Leber und Gallenblase", "Öffnet die Brust"],
      marken:["t7", "wirbelrinne"],
      loc:"Unterhalb des Dornfortsatzes des 7. Brustwirbels, auf Höhe der unteren Schulterblattwinkel.",
      ind:"Gelbsucht, Druck und Schmerz unter dem rechten Rippenbogen, Appetitlosigkeit, Übelkeit. Dazu Husten, Engegefühl in der Brust, Schmerz zwischen den Schulterblättern, Rückensteifigkeit. Ein leicht zu findender Punkt – die Verbindungslinie der Schulterblattspitzen trifft ihn.",
      nd:"Schräg 0,5 bis 1 Cun nach oben." },

    { n:11, pinyin:"Shéndào", han:"神道", de:"Weg des Geistes", en:"Spirit Path",
      x:436, y:290, key:false, role:"",
      antik:"", wx:"",
      tags:["Geistpunkt des Rückens"],
      wirkung:["Geistpunkt des Rückens", "", "Beruhigt den Geist", "Nährt das Herz", "Löst Steife im Rücken"],
      marken:["wirbelrinne"],
      loc:"Unterhalb des Dornfortsatzes des 5. Brustwirbels, auf Höhe von Bl 15, dem Rücken-Shu des Herzens.",
      ind:"Herzklopfen, Angst, Schreckhaftigkeit, Schlaflosigkeit, Vergesslichkeit, Schwermut, Kummer. Dazu Husten, Fieber, Rückensteifigkeit. Die Höhe des Herzens und der Name gehören zusammen.",
      nd:"Schräg 0,5 bis 1 Cun nach oben." },

    { n:12, pinyin:"Shēnzhù", han:"身柱", de:"Säule des Körpers", en:"Body Pillar",
      x:436, y:259, key:true, role:"",
      antik:"", wx:"",
      tags:["Kinderpunkt","Lungenpunkt des Rückens"],
      wirkung:["Kinderpunkt", "Lungenpunkt des Rückens", "", "Stärkt die Lunge und die Abwehr", "Klärt Hitze und stillt Husten", "Der klassische Punkt zur Kräftigung von Kindern"],
      marken:["wirbelrinne"],
      loc:"Unterhalb des Dornfortsatzes des 3. Brustwirbels, auf Höhe von Bl 13, dem Rücken-Shu der Lunge.",
      ind:"Husten, Asthma, häufige Erkältungen, Fieber. Dazu Rückensteifigkeit, Schmerz zwischen den Schulterblättern, Furunkel, Krampfanfälle. In Japan der klassische Punkt zur Stärkung von Kindern – dort wird er über Wochen sanft gemoxt.",
      nd:"Schräg 0,5 bis 1 Cun nach oben." },

    { n:14, pinyin:"Dàzhūi", han:"大椎", de:"Großer Wirbel", en:"Great Hammer",
      x:436, y:212, key:true, role:"",
      antik:"", wx:"",
      tags:["Treffpunkt aller sechs Yang-Meridiane","der wichtigste Punkt des Gefäßes"],
      wirkung:["Treffpunkt aller sechs Yang-Leitbahnen", "Der wichtigste Punkt des Du Mai", "", "Klärt Hitze und vertreibt äußeren Wind", "Stärkt das Yang des ganzen Körpers", "Der Punkt bei Fieber und Erkältung", "Löst Nackensteife"],
      marken:["c7", "wirbelrinne"],
      loc:"Unterhalb des Dornfortsatzes des 7. Halswirbels – des Wirbels, der beim Vorbeugen des Kopfes am deutlichsten hervortritt und sich beim Drehen mitbewegt.",
      ind:"Fieber jeder Art, beginnende Erkältung mit Frösteln und steifem Nacken, Wechselfieber, Hitzegefühl. Zugleich der Punkt, um bei Kälte und Erschöpfung Yang zuzuführen – er kann beides, weil alle Yang-Meridiane sich hier treffen. Dazu steifer Nacken, Schmerz in Schulter und Rücken, Husten, Asthma, Krampfanfälle, Hautprobleme.",
      nd:"Schräg 0,5 bis 1 Cun nach oben. Bei Hitze klassisch Mikroaderlass mit Schröpfkopf, bei Kälte Moxa." },

    { n:15, pinyin:"Yǎmén", han:"哑门", de:"Tor der Stummheit", en:"Mute's Gate",
      x:436, y:158, key:false, role:"",
      antik:"", wx:"",
      tags:["Sprachpunkt","Treffpunkt mit dem Yangwei Mai"],
      wirkung:["Sprachpunkt", "Treffpunkt mit dem Yangwei Mai", "", "Löst die Sprache bei plötzlicher Stummheit", "Klärt den Geist", "Vertreibt Wind aus dem Nacken", "Nicht tief stechen – Rückenmark"],
      marken:["wirbelrinne"],
      loc:"Im Nacken auf der Mittellinie, einen halben Cun oberhalb des hinteren Haaransatzes, in der Vertiefung unter dem ersten Halswirbel.",
      ind:"Plötzlicher Stimmverlust, Sprachstörungen nach Schlaganfall, steife Zunge, steifer Nacken, Kopfschmerz im Hinterkopf, Nasenbluten, Krampfanfälle, Schwermut.",
      nd:"Senkrecht 0,5 bis 0,8 Cun in Richtung Unterkiefer. Niemals nach oben innen stechen – dort liegt das verlängerte Mark. Kein Moxa. Ein Punkt ausschließlich für geübte Hände." },

    { n:16, pinyin:"Fēngfǔ", han:"风府", de:"Palast des Windes", en:"Wind Mansion",
      x:436, y:150, key:true, role:"",
      antik:"", wx:"",
      tags:["Fenster des Himmels","Windpunkt","Treffpunkt mit dem Yangwei Mai"],
      wirkung:["Fenster des Himmels", "Windpunkt", "Treffpunkt mit dem Yangwei Mai", "", "Vertreibt Wind, äußeren wie inneren", "Klärt den Geist und die Sinne", "Löst Nackensteife und Schwindel"],
      marken:["wirbelrinne"],
      loc:"Im Nacken auf der Mittellinie, einen Cun oberhalb des hinteren Haaransatzes, in der Vertiefung unmittelbar unter dem Hinterhauptbein.",
      ind:"Kopfschmerz im Hinterkopf, steifer Nacken, Schwindel, beginnende Erkältung mit Frösteln, Nasenbluten, Halsschmerz, Sprachstörung, Krampfanfälle, Benommenheit. Zusammen mit Gb 20 das Paar, mit dem Wind aus dem Nacken vertrieben wird.",
      nd:"Senkrecht 0,5 bis 0,8 Cun in Richtung Unterkiefer, nicht tiefer. Kein Moxa." },

    { n:20, pinyin:"Bǎihuì", han:"百会", de:"Hundertfache Zusammenkunft", en:"Hundred Convergences",
      x:440, y:40, key:true, role:"",
      antik:"", wx:"",
      tags:["Treffpunkt vieler Meridiane","hebt, was gesunken ist","Scheitelpunkt"],
      wirkung:["Treffpunkt vieler Leitbahnen", "Scheitelpunkt", "", "Hebt, was gesunken ist – bei Senkungen und Mastdarmvorfall", "Klärt den Kopf und beruhigt den Geist", "Senkt aufsteigendes Leber-Yang ab", "Hellt die Sinne auf"],
      marken:["scheitel"],
      loc:"Auf dem Scheitel, auf der Mittellinie, dort wo sie die Verbindungslinie der beiden Ohrspitzen schneidet.",
      ind:"Der Punkt, der hebt: Vorfall von Gebärmutter oder Darm, Hämorrhoiden, Senkungsgefühl – und ebenso Niedergeschlagenheit, fehlender Antrieb, Schwermut. Dazu Kopfschmerz am Scheitel, Schwindel, Bluthochdruck, Ohrgeräusche, Gedächtnisschwäche, Schlaflosigkeit, Benommenheit.",
      nd:"Flach 0,5 bis 0,8 Cun nach hinten. Bei Senkung wird zur Kopfseite hin genadelt oder gemoxt, bei aufsteigendem Yang nach hinten abgeleitet." },

    { n:24, pinyin:"Shéntíng", han:"神庭", de:"Halle des Geistes", en:"Spirit Court",
      x:474, y:58, key:false, role:"",
      antik:"", wx:"",
      tags:["Stirnpunkt","Treffpunkt mit Blase und Magen"],
      wirkung:["Stirnpunkt", "Treffpunkt mit Blase und Magen", "", "Beruhigt den Geist", "Klärt den Kopf und die Nase", "Lindert Schlaflosigkeit und Angst"],
      marken:["projektion"],
      loc:"Auf der Stirn, auf der Mittellinie, einen halben Cun oberhalb des vorderen Haaransatzes. Der Punkt liegt vorn und steht hier an der Kopfkante als Projektion.",
      ind:"Kopfschmerz an der Stirn, Schwindel, Schlaflosigkeit, Angst, Herzklopfen, Unruhe, Schwermut. Dazu verstopfte Nase, Nasenbluten, tränende Augen, verschwommenes Sehen.",
      nd:"Flach 0,3 bis 0,5 Cun nach hinten." },

    { n:26, pinyin:"Shuǐgōu", han:"水沟", de:"Wasserrinne", en:"Water Trough",
      x:479, y:105, key:true, role:"",
      antik:"", wx:"",
      tags:["Notfallpunkt","auch Rénzhōng 人中, Mitte des Menschen","Treffpunkt mit Dickdarm und Magen"],
      wirkung:["Notfallpunkt", "Auch Rénzhōng genannt – Mitte des Menschen", "Treffpunkt mit Dickdarm und Magen", "", "Belebt bei Bewusstlosigkeit, Schock und Kollaps", "Besänftigt Krämpfe", "Löst akuten Kreuzschmerz", "Der erste Punkt im Notfall"],
      marken:["projektion"],
      loc:"In der Rinne zwischen Nase und Oberlippe, am Übergang vom oberen zum mittleren Drittel. Der Punkt liegt im Gesicht und steht hier an der Kopfkante als Projektion.",
      ind:"Der klassische Erweckungspunkt: Ohnmacht, Kollaps, Schock, Hitzschlag, Krampfanfälle, Bewusstlosigkeit. Dazu akuter Kreuzschmerz mit Bewegungssperre – ein bewährter Fernpunkt –, Gesichtslähmung, Schwellung des Gesichts, Zahnschmerz im Oberkiefer.",
      nd:"Schräg 0,3 bis 0,5 Cun nach oben. Im Notfall genügt kräftiger Druck mit dem Daumennagel, bis Hilfe eintrifft. Kein Moxa." }
  ]
});
