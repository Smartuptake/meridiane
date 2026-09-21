/* Konzeptionsgefäß – Ren Mai – 任脉
   Kein Organmeridian, sondern eines der acht außerordentlichen Gefäße.
   Kalibriert auf img/front.png (880 × 1168), vordere Mittellinie x 437.
   Senkrecht neu vermessen am 21.09.2026: Nabel y 436, Brustbeinwinkel
   y 354, dazwischen 8 Cun, also 10,25 Bildpunkte je Cun im Oberbauch.
   Schambeinoberkante y 560, fünf Cun unter dem Nabel, also 24,8
   Bildpunkte je Cun im Unterbauch.

   Dass die beiden Werte so weit auseinanderliegen, ist kein Rechenfehler:
   der Nabel dieser Figur sitzt auffallend hoch. Der Cun ist ein
   Verhältnismaß und gilt immer nur für seinen Abschnitt – die Punkte
   unter dem Nabel stehen deshalb weiter auseinander als die darüber.
   Vorher war das Schambein aus dem Oberbauchmaß hochgerechnet und lag
   74 Bildpunkte zu hoch; Ren 2 bis Ren 6 saßen entsprechend zu hoch.

   An Hals und Kopf nachgemessen: Kinnfurche y 150, Zungenbein y 176,
   Drosselgrube y 232. Siehe data/landmarken.js. */
Meridian.register({
  id: "ren", code: "CV", codeDe: "Ren", ord: 13,
  name: "Konzeptionsgefäß", titel: "Konzeptionsgefäß", nameHan: "任脉",
  channel: "Ren Mai", channelHan: "任脉",
  element: "–", elementHan: "", wx: "",
  yin: true, coupled: "", coupledName: "Du Mai",
  clock: "–", pointCount: 24, direction: "Damm → Kinn",
  view: "front", mirror: false,

  rubrik: "Außerordentliches Gefäß 奇经 · Yin · Meer der Yin-Meridiane",
  meta: [
    ["Art", "Außerordentliches Gefäß"],
    ["Gegenstück", "Du Mai, Lenkergefäß"],
    ["Öffnungspunkt", "Lu 7 Lièquē"],
    ["Paarpunkt", "Ni 6 Zhàohǎi"],
    ["Punkte", "24"],
    ["Kennung", "Ren · CV"],
    ["Bezeichnung", "Außerordentliches Gefäß · Qí jīng 奇经"]
  ],

  intro: "Das Konzeptionsgefäß ist kein Organmeridian, sondern eines der acht " +
         "außerordentlichen Gefäße – und zusammen mit dem Lenkergefäß das einzige, das " +
         "eigene Punkte besitzt. Es läuft auf der vorderen Mittellinie vom Damm über " +
         "Bauch, Brust und Hals bis in die Furche unter der Unterlippe. Sein Name Rèn " +
         "任 heißt tragen, verantworten, empfangen: Es trägt die Yin-Seite des Körpers " +
         "und steht dem Du Mai gegenüber, der die Yang-Seite trägt. Auf ihm liegen " +
         "sechs der zwölf Mu-Alarmpunkte, darunter Ren 12 für den Magen und Ren 17 für " +
         "das Perikard. " +
         "Eingezeichnet sind fünfzehn der vierundzwanzig Punkte; im Unterbauch liegen " +
         "manche nur einen halben Cun auseinander. Ren 1 liegt am Damm und ist als " +
         "Projektion eingezeichnet. Eine Gegenseite gibt es nicht: das Gefäß läuft " +
         "selbst auf der Mittellinie.",

  cun: { nabel: [437, 436], schambein: [437, 560],
         hinweis: "Nabel → Schambeinoberkante = 5 Cun; Nabel → Brustbeinwinkel = 8 Cun" },

  path: [[437,585],[437,572],[437,560],[437,535],[437,510],[437,473],[437,436],[437,426],
         [437,395],[437,374],[437,364],[437,336],[437,310],[437,285],[437,260],[437,232],
         [437,205],[437,176],[437,150]],

  inner: "M437,560 C448,572 452,582 448,588",
  branches: [
    { label: "Ast um den Mund zu den Augen", d: "M437,150 C452,140 466,124 470,108" }
  ],

  organ: {
    label: "Das Gefäß",
    titel: "Das Konzeptionsgefäß in der chinesischen Medizin",
    pinyin: "Rèn mài", han: "任脉", wx: "",
    text: [
      "Von den acht außerordentlichen Gefäßen haben nur zwei eigene Punkte: das " +
      "Konzeptionsgefäß vorn und das Lenkergefäß hinten. Die übrigen sechs leihen sich " +
      "ihre Punkte von den zwölf Hauptmeridianen. Diese beiden sind darum zugleich " +
      "Gefäße und Bahnen, und sie werden im Unterricht meist gemeinsam mit den zwölf " +
      "gelehrt – als dreizehnte und vierzehnte Linie.",

      "Das Ren Mai heißt „Meer der Yin-Meridiane“. Alle Yin-Meridiane kreuzen es, und " +
      "was ihnen an Yin fehlt, wird über dieses Gefäß nachgefüllt. Sein Name bedeutet " +
      "tragen und verantworten – gemeint ist die Verantwortung für die Empfängnis. " +
      "Zusammen mit dem Chong Mai und dem Du Mai entspringt es im Unterbauch, in dem " +
      "Raum, den die chinesische Medizin Bāo 胞 nennt: bei der Frau die Gebärmutter, " +
      "beim Mann der Raum, in dem das Jing bewahrt wird. Alle drei Gefäße haben " +
      "dieselbe Wurzel und werden darum bei Kinderwunsch, Zyklusstörungen und " +
      "Schwäche des unteren Erwärmers gemeinsam bedacht.",

      "Praktisch ist das Gefäß über zwei Punktgruppen wichtig. Erstens liegen auf ihm " +
      "sechs Mu-Alarmpunkte: Ren 3 für die Blase, Ren 4 für den Dünndarm, Ren 12 für " +
      "den Magen, Ren 14 für das Herz, Ren 17 für das Perikard und Ren 22 in " +
      "Nachbarschaft der Lunge. Zweitens liegen auf ihm die großen Aufbaupunkte des " +
      "Unterbauchs – Ren 4 und Ren 6 –, die in der Moxibustion zu den am häufigsten " +
      "gebrauchten Stellen des ganzen Körpers gehören.",

      "Geöffnet wird das Gefäß über Lu 7 Lièquē, gepaart mit Ni 6 Zhàohǎi. Diese " +
      "Kombination gehört zu den Acht Kreuzungspunkten und wird bei Beschwerden von " +
      "Kehle, Brust und Unterbauch verwendet."
    ],

    aufgabenTitel: "Die Aufgaben des Konzeptionsgefäßes",
    aufgaben: [
      { was: "Meer der Yin-Meridiane sein", han: "阴脉之海",
        text: "Alle Yin-Meridiane kreuzen das Ren Mai. Es sammelt und verteilt das Yin " +
              "des ganzen Körpers und gleicht aus, wo einem einzelnen Meridian etwas " +
              "fehlt. Bei tiefem Yin-Mangel wird es darum mitbehandelt." },
      { was: "Gebärmutter und Empfängnis verantworten", han: "主胞胎",
        text: "„Rèn“ heißt tragen und verantworten. Das Gefäß entspringt im Unterbauch " +
              "und steuert Zyklus, Empfängnis und Schwangerschaft. Ausbleibende Regel, " +
              "Unfruchtbarkeit, Ausfluss und wiederholte Fehlgeburten werden über " +
              "dieses Gefäß angegangen." },
      { was: "Die Mu-Alarmpunkte tragen", han: "募穴",
        text: "Sechs der zwölf Mu-Punkte liegen auf der vorderen Mittellinie. Sie sind " +
              "zugleich Behandlungs- und Diagnosepunkte: ein druckempfindlicher " +
              "Mu-Punkt weist auf sein Organ hin, so wie der Rücken-Shu auf der Blase." },
      { was: "Den unteren Erwärmer wärmen", han: "温下焦",
        text: "Ren 4 Guānyuán und Ren 6 Qìhǎi sind die großen Moxa-Punkte bei " +
              "Erschöpfung, Kälte im Unterbauch und Schwäche nach langer Krankheit. " +
              "Sie stützen zugleich Niere und Milz." },
      { was: "Die Vorderseite und die Kehle versorgen", han: "循喉咙",
        text: "Der Verlauf zieht über Brust und Hals bis unter die Unterlippe. Enge in " +
              "der Brust, Kloßgefühl im Hals, Heiserkeit und Husten folgen dieser " +
              "Linie; Ren 22 Tiāntū in der Drosselgrube ist der Hustenpunkt " +
              "schlechthin." }
    ],

    zustandTitel: "Mangel und Fülle von Yin und Yang",
    zustandLabel: "Mangel und Fülle",
    zustaende: [
      { feld: "Yin-Mangel", en: "Ren Mai Yin Deficiency", han: "任脉阴虚", pinyin: "rèn mài yīn xū",
        kurz: "Das Meer der Yin-Meridiane ist knapp geworden.",
        zeichen: "Trockenheit an vielen Stellen zugleich: trockene Kehle, die abends " +
                 "brennt, trockener Mund, trockene Scheide, spärliche oder " +
                 "ausbleibende Regel, früh einsetzende Wechseljahresbeschwerden, " +
                 "Hitzewallungen, Nachtschweiß, Unruhe. Oft nach vielen Geburten, " +
                 "langer Krankheit oder in der zweiten Lebenshälfte.",
        zunge: "rot, ohne Belag, rissig",
        puls: "dünn und schnell",
        punkte: "Ren 4 · Ren 3 · Lu 7 mit Ni 6 · Mi 6 · Ni 3" },

      { feld: "Yang-Mangel", en: "Ren Mai Deficient and Cold", han: "任脉虚寒", pinyin: "rèn mài xū hán",
        kurz: "Dem Unterbauch fehlt die Wärme, das Gefäß hält nicht mehr.",
        zeichen: "Kältegefühl im Unterbauch, das sich mit der Wärmflasche sofort " +
                 "bessert, wässriger weißer Ausfluss, häufiges helles Wasserlassen, " +
                 "Senkungsgefühl im Becken bis zum Vorfall, Erschöpfung, kalte Füße, " +
                 "blasse und wässrige Regel, Unfruchtbarkeit durch Kälte.",
        zunge: "blass, feucht, geschwollen",
        puls: "tief, langsam, schwach",
        punkte: "Ren 4 mit Moxa · Ren 6 mit Moxa · Ren 8 mit Moxa auf Salz · Ma 36 · Bl 23" },

      { feld: "Yin-Fülle", en: "Cold and Damp Accumulating in the Ren Mai", han: "任脉寒湿", pinyin: "rèn mài hán shī",
        kurz: "Kälte und Feuchtigkeit sammeln sich auf der Mittellinie.",
        zeichen: "Schweres, kaltes Ziehen im Unterbauch, reichlicher zäher weißer " +
                 "Ausfluss, aufgetriebener Bauch, Wasseransammlung, Schweregefühl in " +
                 "Becken und Beinen, krampfartiger Regelschmerz mit dunklem Blut, " +
                 "Verschlimmerung bei nassem und kaltem Wetter.",
        zunge: "blass, geschwollen, weißer schmieriger Belag",
        puls: "tief, langsam, schlüpfrig",
        punkte: "Ren 3 · Ren 6 · Ren 9 · Mi 9 · Mi 6" },

      { feld: "Yang-Fülle", en: "Stagnation and Accumulation in the Ren Mai", han: "任脉气结", pinyin: "rèn mài qì jié",
        kurz: "Auf der Mittellinie staut sich etwas, das nicht durchkommt.",
        zeichen: "Kloßgefühl im Hals, das beim Schlucken verschwindet und wiederkommt, " +
                 "Enge und Druck hinter dem Brustbein, Seufzen, Spannung in den " +
                 "Brüsten vor der Regel, harter und druckempfindlicher Unterbauch, " +
                 "Knoten und Myome, stockende oder schmerzhafte Regel. Bei " +
                 "hinzukommender Hitze Aphthen und ein brennendes Gefühl in der Brust.",
        zunge: "rot an den Rändern, dünner Belag",
        puls: "saitenförmig",
        punkte: "Ren 17 · Ren 22 · Ren 12 · Pe 6 · Le 3" }
    ],

    aeussereTitel: "Wo das Gefäß selbst betroffen ist",
    aeussere: [
      { name: "Der Unterbauch und das Becken", han: "少腹", pinyin: "shào fù",
        zeichen: "Ziehen, Senkungsgefühl oder Kälte im Unterbauch, Ausfluss, " +
                 "Zyklusstörungen, Unfruchtbarkeit, Beschwerden der Prostata, " +
                 "Vorfall von Gebärmutter oder Darm. Die klassische Beschreibung " +
                 "spricht von den sieben Arten des Bruchs beim Mann und den " +
                 "Ansammlungen beim Weib.",
        punkte: "Ren 3 · Ren 4 · Ren 6 · Mi 6 · Ni 3" },
      { name: "Brust und Kehle", han: "胸喉", pinyin: "xiōng hóu",
        zeichen: "Enge und Druck hinter dem Brustbein, Husten, Asthma, Heiserkeit, " +
                 "Kloßgefühl im Hals, Schluckbeschwerden, Milchstau. Ren 17 zwischen " +
                 "den Brustwarzen und Ren 22 in der Drosselgrube sind hier die " +
                 "Hauptpunkte.",
        punkte: "Ren 17 · Ren 22 · Ren 20 · Lu 7 · Pe 6" },
      { name: "Der Verlauf am Kopfende", han: "口唇", pinyin: "kǒu chún",
        zeichen: "Gesichtslähmung im Bereich von Mund und Kinn, Speichelfluss, " +
                 "Zahnfleischschmerz im Unterkiefer, Kiefersperre, Schwellung des " +
                 "Gesichts, Sprachstörung nach Schlaganfall.",
        punkte: "Ren 24 · Ren 23 · Di 4 · Ma 6" }
    ],

    nahrungTitel: "Was das Gefäß stärkt und was ihm schadet",
    nahrungLabel: "Lebensführung",
    nahrung: {
      staerktTitel: "Was das Gefäß stärkt",
      schadetTitel: "Was ihm schadet",
      staerkt: [
        { was: "Den Unterbauch und die Füße warm halten", warum: "das Gefäß entspringt im Unterbauch; Kälte dort trifft es unmittelbar" },
        { was: "Moxa auf Ren 4 und Ren 6, kurweise", warum: "die klassischen Aufbaupunkte bei Erschöpfung und Kälte" },
        { was: "Warme, gekochte Kost mit etwas Süßem der Erde: Hirse, Kürbis, Karotte", warum: "baut über Milz und Magen das nach, was das Gefäß verteilt" },
        { was: "Schwarze Bohnen, Sesam, Walnüsse", warum: "stützen Niere und Jing, die mit diesem Gefäß dieselbe Wurzel haben" },
        { was: "Ruhige Bauchatmung", warum: "bewegt genau die Linie, auf der das Gefäß läuft" },
        { was: "Nach Geburten und langer Krankheit wirklich ruhen", warum: "das Yin füllt sich nicht unter Belastung nach" }
      ],
      schadet: [
        { was: "Kälte am Bauch und Sitzen auf kaltem Grund", warum: "die häufigste Ursache von Kälte im Ren Mai" },
        { was: "Sehr viel Rohkost und Eisgekühltes", warum: "kühlt den unteren Erwärmer und macht den Ausfluss zäh" },
        { was: "Dauernde Überarbeitung ohne Erholung", warum: "zehrt das Yin, das dieses Gefäß zu verteilen hat" },
        { was: "Zu wenig Schlaf", warum: "das Yin wird nachts nachgefüllt, sonst gar nicht" },
        { was: "Langer unterdrückter Kummer", warum: "staut das Qi genau auf der Mittellinie – Kloßgefühl und Brustenge" }
      ],
      hinweis: "Ren 4 Guānyuán und Ren 6 Qìhǎi liegen drei und anderthalb Cun unter " +
               "dem Nabel und sind mit der eigenen Hand zu finden: vier Querfinger " +
               "unter dem Nabel liegt Ren 4, zwei Querfinger darüber Ren 6. Eine warme " +
               "Hand oder ein Kirschkernkissen auf dieser Stelle ist die einfachste " +
               "Form, dieses Gefäß zu stützen. In der Schwangerschaft wird der " +
               "Unterbauch nicht genadelt und nicht gemoxt."
    },

    eigenschaften: [
      { k: "Art", v: "Außerordentliches Gefäß 奇经" },
      { k: "Beiname", v: "Meer der Yin-Meridiane 阴脉之海" },
      { k: "Wortsinn", v: "Rèn 任 – tragen, verantworten, empfangen" },
      { k: "Gegenstück", v: "Du Mai, Lenkergefäß" },
      { k: "Öffnungspunkt", v: "Lu 7 Lièquē" },
      { k: "Paarpunkt", v: "Ni 6 Zhàohǎi" },
      { k: "Luo-Punkt", v: "Ren 15 Jiūwěi" },
      { k: "Ursprung", v: "im Unterbauch, gemeinsam mit Chong Mai und Du Mai" },
      { k: "Punkte", v: "24, davon 6 Mu-Alarmpunkte" },
      { k: "Wandlungsphase", v: "keine – außerordentliche Gefäße stehen außerhalb" }
    ],

    hinweis: "Die acht außerordentlichen Gefäße gelten als Reservoire: Sie nehmen auf, " +
             "was die zwölf Hauptmeridiane im Überfluss haben, und geben ab, wo es " +
             "fehlt. Nur Ren Mai und Du Mai haben eigene Punkte. Die Muster " +
             "beschreiben die klassische Lehre und dienen dem Unterricht. Sie ersetzen " +
             "weder Diagnose noch ärztliche Abklärung."
  },

  points: [
    { n:1, pinyin:"Huìyīn", han:"会阴", de:"Zusammenkunft des Yin", en:"Meeting of Yin",
      x:437, y:585, key:false, role:"",
      antik:"", wx:"",
      tags:["Beginn des Gefäßes","Treffpunkt von Ren, Du und Chong"],
      wirkung:["Beginn des Ren Mai", "Treffpunkt von Ren Mai, Du Mai und Chong Mai", "", "Belebt bei Bewusstlosigkeit und Ertrinken", "Ordnet den Damm und die Geschlechtsorgane", "Beruhigt den Geist"],
      loc:"Am Damm, in der Mitte zwischen After und äußeren Geschlechtsteilen. Der Punkt ist von vorn nicht zu sehen und hier als Projektion eingezeichnet.",
      ind:"Ertrinken und Bewusstlosigkeit als Notfallpunkt, Harnverhalt, Beschwerden im Genitalbereich, Vorfall, Hämorrhoiden, Schmerz am Damm.",
      nd:"In der Praxis fast nur als Moxa oder Akupressur. Nadelung nur in Seitenlage und mit besonderer Zurückhaltung." },

    { n:2, pinyin:"Qūgǔ", han:"曲骨", de:"Gekrümmter Knochen", en:"Curved Bone",
      x:437, y:560, key:false, role:"",
      antik:"", wx:"",
      tags:["Treffpunkt mit dem Lebermeridian"],
      wirkung:["Treffpunkt mit der Leber-Leitbahn", "", "Ordnet die Blase und das Wasserlassen", "Wärmt den Unteren Erwärmer", "Festigt die Essenz"],
      loc:"Am oberen Rand des Schambeins, fünf Cun unterhalb des Nabels, auf der vorderen Mittellinie.",
      ind:"Harnverhalt, Bettnässen, häufiges Wasserlassen, Ausfluss, Impotenz, Schmerz im Unterbauch, unregelmäßige Regel.",
      nd:"Senkrecht 0,5 bis 1 Cun, vorher die Blase entleeren lassen. In der Schwangerschaft nicht nadeln." },

    { n:3, pinyin:"Zhōngjí", han:"中极", de:"Mittlerer Höhepunkt", en:"Central Pole",
      x:437, y:535, key:true, role:"MU",
      antik:"", wx:"",
      tags:["Mu-Alarmpunkt der Blase","Treffpunkt der drei Fuß-Yin-Meridiane"],
      wirkung:["Mu-Alarmpunkt der Blase", "Treffpunkt der drei Fuß-Yin-Leitbahnen", "", "Der Punkt für die Blase: Harndrang, Brennen, Verhaltung", "Ordnet die Regel und den Unterbauch", "Leitet Feuchte Hitze aus"],
      loc:"Vier Cun unterhalb des Nabels, auf der vorderen Mittellinie – einen Cun über dem Schambein.",
      ind:"Als Mu-Punkt der Blase bei allen Blasenbeschwerden: brennendes oder häufiges Wasserlassen, Harnverhalt, Inkontinenz. Dazu Ausfluss, unregelmäßige Regel, Regelschmerz, Unfruchtbarkeit, Impotenz, Schmerz im Unterbauch.",
      nd:"Senkrecht 0,8 bis 1,2 Cun bei entleerter Blase. In der Schwangerschaft nicht nadeln." },

    { n:4, pinyin:"Guānyuán", han:"关元", de:"Tor zur Urquelle", en:"Origin Pass",
      x:437, y:510, key:true, role:"MU",
      antik:"", wx:"",
      tags:["Mu-Alarmpunkt des Dünndarms","einer der großen Aufbaupunkte des Körpers","Treffpunkt der drei Fuß-Yin-Meridiane"],
      wirkung:["Mu-Alarmpunkt des Dünndarms", "Treffpunkt der drei Fuß-Yin-Leitbahnen", "", "Einer der großen Aufbaupunkte: stärkt das Ursprungs-Qi", "Wärmt und festigt die Niere", "Nährt Blut und Essenz", "Der Punkt bei Erschöpfung – meist mit Moxa"],
      loc:"Drei Cun unterhalb des Nabels, auf der vorderen Mittellinie. Mit der eigenen Hand: vier Querfinger unter dem Nabel.",
      ind:"Der wichtigste Aufbaupunkt des Unterbauchs: tiefe Erschöpfung, Schwäche nach langer Krankheit, Kälte im Unterbauch, häufiges nächtliches Wasserlassen, Impotenz, Unfruchtbarkeit, unregelmäßige Regel, Bettnässen, Durchfall am frühen Morgen. Traditionell der Punkt, an dem das Ursprungs-Qi gesammelt wird.",
      nd:"Senkrecht 0,8 bis 1,2 Cun. Der Moxa-Punkt schlechthin – auch als Kur über Wochen. In der Schwangerschaft nicht nadeln und nicht moxen." },

    { n:6, pinyin:"Qìhǎi", han:"气海", de:"Meer des Qi", en:"Sea of Qi",
      x:437, y:473, key:true, role:"",
      antik:"", wx:"",
      tags:["Meer des Qi","großer Aufbaupunkt"],
      wirkung:["Meer des Qi", "Großer Aufbaupunkt", "", "Hebt und stärkt das Qi bei Erschöpfung", "Wärmt den Unteren Erwärmer", "Ordnet das Qi im Bauch", "Der zweite große Moxa-Punkt neben Ren 4"],
      loc:"Anderthalb Cun unterhalb des Nabels, auf der vorderen Mittellinie – zwei Querfinger über Ren 4.",
      ind:"Erschöpfung ohne erkennbare Ursache, Kurzatmigkeit bei Anstrengung, schwache Stimme, Antriebslosigkeit, Blähbauch, Verstopfung durch Schwäche, Senkungsgefühl, Bettnässen, unregelmäßige Regel. Wo Ren 4 die Substanz aufbaut, bewegt und hebt Ren 6 das Qi.",
      nd:"Senkrecht 0,8 bis 1,2 Cun. Sehr gut zu moxen. In der Schwangerschaft nicht nadeln." },

    { n:8, pinyin:"Shénquè", han:"神阙", de:"Tor des Geistes", en:"Spirit Gate",
      x:437, y:436, key:true, role:"",
      antik:"", wx:"",
      tags:["der Nabel","nur Moxa, niemals Nadel"],
      wirkung:["Der Nabel", "Nur Moxa, niemals Nadel", "", "Wärmt und rettet das Yang bei Kollaps", "Wärmt die Mitte bei Kälte-Durchfall", "Stärkt das Ursprungs-Qi"],
      loc:"In der Mitte des Nabels.",
      ind:"Kalter Bauch mit Durchfall und Rumpeln, Bauchschmerz, der sich mit Wärme bessert, Kollaps mit kalten Gliedern, Erschöpfung, Wasseransammlung im Bauch. Bei Neugeborenen und Kindern ein klassischer Wärmepunkt.",
      nd:"Niemals nadeln. Klassisch Moxa auf einer Schicht Salz im Nabel oder indirekt mit dem Moxakegel; ebenso gut eine warme Auflage." },

    { n:9, pinyin:"Shuǐfēn", han:"水分", de:"Wasserscheide", en:"Water Divide",
      x:437, y:426, key:false, role:"",
      antik:"", wx:"",
      tags:["Wasserpunkt des Bauches"],
      wirkung:["Wasserpunkt des Bauches", "", "Trennt das Klare vom Trüben", "Leitet Wasser aus und löst Ödeme", "Ordnet den Darm"],
      loc:"Einen Cun oberhalb des Nabels, auf der vorderen Mittellinie.",
      ind:"Wasseransammlung und Ödeme, aufgetriebener Bauch, Rumpeln, Durchfall mit unverdauten Speisen, wenig Urin. Der Name sagt die Aufgabe: hier wird das Klare vom Trüben geschieden.",
      nd:"Senkrecht 0,8 bis 1,2 Cun. Bei Ödemen gern mit Moxa." },

    { n:12, pinyin:"Zhōngwǎn", han:"中脘", de:"Mitte des Magens", en:"Central Venter",
      x:437, y:395, key:true, role:"MU",
      antik:"", wx:"",
      tags:["Mu-Alarmpunkt des Magens","Hui-Punkt der Fu-Organe","Treffpunkt mehrerer Meridiane"],
      wirkung:["Mu-Alarmpunkt des Magens", "Hui-Punkt der Fu-Organe", "", "Der Hauptpunkt für den Magen: harmonisiert die Mitte", "Senkt gegenläufiges Magen-Qi ab", "Löst Feuchtigkeit und Nahrungsstau", "Stärkt Magen und Milz"],
      loc:"Vier Cun oberhalb des Nabels, auf halbem Weg zwischen Nabel und Brustbeinwinkel.",
      ind:"Der wichtigste Punkt für den mittleren Erwärmer: Magenschmerz, Völlegefühl, Aufstoßen, Sodbrennen, Übelkeit, Erbrechen, Appetitlosigkeit, Blähbauch, Durchfall, Verstopfung. Als Hui-Punkt aller Hohlorgane auch bei Beschwerden von Darm, Gallenblase und Blase.",
      nd:"Senkrecht 0,8 bis 1,5 Cun. Sehr gut zu moxen. Nicht unmittelbar nach dem Essen nadeln." },

    { n:14, pinyin:"Jùquè", han:"巨阙", de:"Großes Tor", en:"Great Tower Gate",
      x:437, y:374, key:true, role:"MU",
      antik:"", wx:"",
      tags:["Mu-Alarmpunkt des Herzens"],
      wirkung:["Mu-Alarmpunkt des Herzens", "", "Beruhigt den Geist", "Senkt gegenläufiges Qi ab", "Öffnet die Brust bei Beklemmung"],
      loc:"Sechs Cun oberhalb des Nabels, also zwei Cun unterhalb des Brustbeinwinkels.",
      ind:"Als Mu-Punkt des Herzens bei Herzklopfen, Enge und Schmerz in der Brust, Angst, Unruhe, Schlaflosigkeit, Vergesslichkeit. Dazu Sodbrennen, Erbrechen, Schluckauf, Übelkeit – der Punkt liegt genau an der Grenze zwischen Brust und Bauch.",
      nd:"Schräg 0,5 bis 1 Cun nach unten. Nicht tief senkrecht – darunter liegen Herz und Leber." },

    { n:15, pinyin:"Jiūwěi", han:"鸠尾", de:"Taubenschwanz", en:"Turtledove Tail",
      x:437, y:364, key:false, role:"LUO",
      antik:"luo", wx:"",
      tags:["Luo-Punkt des Ren Mai","Ursprungspunkt der Quellen-Energie"],
      wirkung:["Luo-Punkt des Ren Mai", "", "Beruhigt den Geist", "Öffnet die Brust", "Wandelt Schleim, der den Geist umnebelt"],
      loc:"Sieben Cun oberhalb des Nabels, einen Cun unterhalb des Brustbeinwinkels, unter der Spitze des Schwertfortsatzes.",
      ind:"Als Luo-Punkt strahlt er in den ganzen Bauch aus: Bauchschmerz und Blähung. Dazu Herzklopfen, Enge in der Brust, Angst, Schwermut, Krampfanfälle, Schluckauf, Asthma.",
      nd:"Schräg 0,4 bis 0,6 Cun nach unten. Ein empfindlicher Punkt; sparsam verwenden." },

    { n:17, pinyin:"Shānzhōng", han:"膻中", de:"Mitte der Brust", en:"Chest Centre",
      x:437, y:310, key:true, role:"MU",
      antik:"", wx:"",
      tags:["Mu-Alarmpunkt des Perikards","Hui-Punkt des Qi","Meer des Qi","Treffpunkt vieler Meridiane"],
      wirkung:["Mu-Alarmpunkt des Perikards", "Hui-Punkt des Qi", "Meer des Qi", "", "Der Punkt für die Brust: öffnet sie und ordnet das Qi", "Stillt Husten und Kurzatmigkeit", "Fördert den Milchfluss", "Beruhigt den Geist bei Kummer"],
      loc:"Auf dem Brustbein, in Höhe des vierten Zwischenrippenraums, also genau auf halbem Weg zwischen den Brustwarzen.",
      ind:"Als Hui-Punkt des Qi der Punkt bei allem, was mit Atem und Brust zu tun hat: Enge und Druck in der Brust, Kurzatmigkeit, Asthma, Husten, Herzklopfen, Seufzen, Kummer, der auf der Brust liegt. Dazu Milchstau, zu wenig Muttermilch, Brustdrüsenentzündung, Schluckauf, Erbrechen.",
      nd:"Flach 0,3 bis 0,5 Cun nach unten am Brustbein entlang. Als Akupressur sehr gut zur Selbsthilfe bei Beklemmung." },

    { n:20, pinyin:"Huágài", han:"华盖", de:"Prächtiger Baldachin", en:"Florid Canopy",
      x:437, y:260, key:false, role:"",
      antik:"", wx:"",
      tags:["Brustbeinpunkt"],
      wirkung:["Brustbeinpunkt", "", "Öffnet die Brust und stillt Husten", "Senkt gegenläufiges Qi ab", "Befreit die Kehle"],
      loc:"Auf dem Brustbein, in Höhe des ersten Zwischenrippenraums.",
      ind:"Husten, Asthma, Engegefühl und Schmerz in der Brust, Schmerz in der Flanke, Halsschmerz. Der Name meint den Baldachin über dem Herzen – gemeint ist die Lunge.",
      nd:"Flach 0,3 bis 0,5 Cun nach unten." },

    { n:22, pinyin:"Tiāntū", han:"天突", de:"Himmlischer Schornstein", en:"Celestial Chimney",
      x:437, y:232, key:true, role:"",
      antik:"", wx:"",
      tags:["Hustenpunkt","Treffpunkt mit dem Yinwei Mai"],
      wirkung:["Hustenpunkt", "Treffpunkt mit dem Yinwei Mai", "", "Der Punkt bei Husten und Asthma", "Senkt gegenläufiges Lungen-Qi ab", "Wandelt Schleim in der Kehle", "Befreit die Stimme"],
      loc:"In der Drosselgrube, in der Mitte der Vertiefung am oberen Rand des Brustbeins.",
      ind:"Husten jeder Art, Asthma mit pfeifendem Atem, Heiserkeit, Verlust der Stimme, Kloßgefühl im Hals, Schluckbeschwerden, Halsschmerz, Schluckauf, Kropf.",
      nd:"Zuerst 0,2 Cun senkrecht, dann die Nadel umlegen und flach 0,5 bis 1 Cun hinter dem Brustbein nach unten führen. Niemals schräg nach hinten stechen – dort liegt die Luftröhre. Ein Punkt für geübte Hände." },

    { n:23, pinyin:"Liánquán", han:"廉泉", de:"Eckige Quelle", en:"Ridge Spring",
      x:437, y:176, key:false, role:"",
      antik:"", wx:"",
      tags:["Zungenpunkt","Treffpunkt mit dem Yinwei Mai"],
      wirkung:["Zungenpunkt", "Treffpunkt mit dem Yinwei Mai", "", "Löst die Zunge bei Sprachstörung und Schluckbeschwerden", "Wandelt Schleim in der Kehle", "Mindert übermäßigen Speichelfluss"],
      loc:"Am Hals auf der Mittellinie, in der Vertiefung am oberen Rand des Zungenbeins, oberhalb des Kehlkopfs.",
      ind:"Sprachstörungen nach Schlaganfall, steife oder gelähmte Zunge, Schluckbeschwerden, Speichelfluss, trockener Mund, plötzlicher Stimmverlust, Schwellung unter der Zunge.",
      nd:"Schräg 0,5 bis 0,8 Cun in Richtung Zungengrund. Vorsicht wegen der Lage am Kehlkopf." },

    { n:24, pinyin:"Chéngjiāng", han:"承浆", de:"Empfänger der Flüssigkeit", en:"Sauce Receptacle",
      x:437, y:150, key:true, role:"",
      antik:"", wx:"",
      tags:["Endpunkt des Gefäßes","Treffpunkt mit Du Mai, Magen und Dickdarm"],
      wirkung:["Endpunkt des Ren Mai", "Treffpunkt mit Du Mai, Magen und Dickdarm", "", "Vertreibt Wind aus dem Gesicht", "Löst Gesichtslähmung und Speichelfluss", "Lindert Zahnschmerz im Unterkiefer"],
      loc:"In der Mitte der Furche zwischen Unterlippe und Kinn.",
      ind:"Gesichtslähmung im Bereich von Mund und Kinn, Speichelfluss, Zahnfleischschmerz und Zahnschmerz im Unterkiefer, Kiefersperre, Schwellung des Gesichts, plötzlicher Stimmverlust, Mundtrockenheit. Zusammen mit Du 26 das Paar an den beiden Enden der Mittellinien.",
      nd:"Schräg 0,2 bis 0,3 Cun nach oben." }
  ]
});
