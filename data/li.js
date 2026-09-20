/* Dickdarmmeridian – Hand-Yangming – 手阳明大肠经
   Punktlagen kalibriert auf img/front.png (880 × 1168).
   Di 5 (Handgelenk, radial) bis Di 11 (Ellenbogen, lateral) = 12 Cun;
   die Unterarmpunkte sitzen proportional auf dieser Linie. */
Meridian.register({
  id: "li", code: "LI", codeDe: "Di", ord: 2,
  name: "Dickdarm", titel: "Dickdarmmeridian", nameHan: "大肠经",
  channel: "Hand-Yangming", channelHan: "手阳明",
  element: "Metall", elementHan: "金", wx: "metall",
  yin: false, coupled: "lu", coupledName: "Lunge",
  clock: "05 – 07 Uhr", pointCount: 20, direction: "Hand → Kopf",
  view: "front", mirror: true,

  intro: "Der Hand-Yangming-Meridian des Dickdarms schließt unmittelbar an die Lunge an: " +
         "Wo Lu 11 am Daumennagel endet, beginnt Di 1 am Zeigefinger. Er läuft zentripetal " +
         "über die radiale Seite von Hand und Unterarm, über die Außenseite des Oberarms zur " +
         "Schulter, weiter am Hals empor zur Wange – und kreuzt unterhalb der Nase die " +
         "Mittellinie, sodass er an Di 20 neben dem gegenüberliegenden Nasenflügel endet.",

  cun: { handgelenk: [200, 521], ellenbogen: [248, 414],
         hinweis: "Di 5 → Di 11 = 12 Cun; Di 6 bei 3, Di 7 bei 5, Di 10 bei 10 Cun" },

  path: [[146,612],[151,597],[159,585],[162,551],[180,536],[200,521],[208,510],[216,496],
         [225,479],[231,465],[241,432],[248,414],[262,390],[278,362],[291,330],[300,296],
         [305,268],[312,248],[332,228],[362,212],[388,200],[406,192],[420,190],[432,198],
         [444,192],[452,181]],

  inner: "M352,250 C372,282 384,318 386,352 C390,400 388,438 400,470 " +
         "C418,500 440,506 452,486 C462,462 458,436 450,414",
  branches: [{ label: "Ast zum Lenkergefäß (Du 14)", d: "M330,236 C380,226 430,222 468,232" }],

  /* --- Das Organ --- */
  organ: {
    titel: "Der Dickdarm in der chinesischen Medizin",
    pinyin: "Dà cháng", han: "大肠", wx: "metall",
    text: [
      "Der Dickdarm ist das Fu-Organ des Metalls und der Partner der Lunge. Was die Lunge " +
      "aufnimmt und verteilt, führt er zu Ende: er empfängt das Trübe aus dem Dünndarm, " +
      "entzieht ihm die brauchbare Flüssigkeit und scheidet den Rest aus.",

      "Die Kopplung ist keine bloße Zuordnung, sondern im Alltag spürbar. Das Absenken des " +
      "Lungen-Qi treibt den Stuhlgang an; bleibt der Darm verschlossen, staut sich das Qi " +
      "nach oben und die Lunge antwortet mit Husten und Enge in der Brust. Umgekehrt lässt " +
      "schwaches Lungen-Qi die Kraft fehlen, die zum Entleeren nötig ist.",

      "Beide teilen ein Thema: aufnehmen und wieder loslassen. Wo die Lunge den Verlust " +
      "betrauert, ist es der Dickdarm, der das Losgelassene tatsächlich hergibt. Festhalten " +
      "und Nicht-loslassen-Können zeigen sich deshalb oft zuerst hier."
    ],

    aufgabenTitel: "Die Aufgaben des Dickdarms",
    aufgaben: [
      { titel: "Er leitet weiter und scheidet aus", han: "传导糟粕",
        text: "Der Dickdarm übernimmt vom Dünndarm, was nach der Trennung von Klarem und " +
              "Trübem übrig bleibt, formt daraus den Stuhl und gibt ihn ab. Diese Bewegung " +
              "geht nach unten. Stockt sie, entstehen Verstopfung, Blähungen und ein Druck, " +
              "der bis in die Brust hinaufreicht." },
      { titel: "Er beherrscht die Säfte", han: "主津",
        text: "Auf dem Weg durch den Dickdarm wird dem Trüben die Flüssigkeit entzogen und " +
              "dem Körper zurückgegeben. Davon hängt die Beschaffenheit des Stuhls ab: " +
              "entzieht er zu viel, wird der Stuhl hart und trocken; entzieht er zu wenig, " +
              "entsteht Durchfall. Beide Bilder gehören zum selben Vorgang." },
      { titel: "Er ist mit der Lunge gekoppelt", han: "肺与大肠相表里",
        text: "Lunge und Dickdarm bilden ein inneres und ein äußeres Paar. Der Luo-Punkt Di 6 " +
              "zieht zum Yuan-Punkt Lu 9, der Luo-Punkt Lu 7 zum Yuan-Punkt Di 4 – über diese " +
              "Querverbindung lässt sich Qi vom einen zum anderen führen. In der Behandlung " +
              "heißt das: hartnäckigen Husten über den Darm angehen, hartnäckige Verstopfung " +
              "über die Lunge." },
      { titel: "Er öffnet nach außen am After", han: "肛门",
        text: "Der untere Abschluss ist zugleich der Ort, an dem sich Fülle und Leere zeigen: " +
              "Brennen und Drang bei Hitze, Vorfall und Schweregefühl bei Qi-Schwäche, " +
              "Hämorrhoiden bei Stauung. Der Xi-Spalt-Punkt der Lunge, Lu 6, wird klassisch " +
              "auch dafür verwendet." }
    ],

    zustaendeTitel: "Mangel und Fülle von Yin und Yang",
    zustaendeHinweis: "Mangel (Xū 虚) heißt: etwas fehlt. Fülle (Shí 实) heißt: etwas ist zu " +
                      "viel da und blockiert. Beim Dickdarm geht es fast immer um Flüssigkeit " +
                      "und Wärme – zu wenig Saft trocknet aus, zu wenig Wärme lässt ihn " +
                      "durchfallen, Nässe und Hitze stauen sich.",
    zustaende: [
      { feld: "Yin-Mangel", en: "Large Intestine Dryness", han: "大肠津亏", pinyin: "dà cháng jīn kuī",
        kurz: "Es fehlt Flüssigkeit. Der Darm trocknet aus.",
        zeichen: "Harter, trockener Stuhl in kleinen Stücken, oft tagelang ausbleibend, aber " +
                 "ohne Bauchschmerz. Starkes Pressen nötig. Trockener Mund, trockene Haut, " +
                 "häufig bei älteren Menschen, nach fieberhaften Erkrankungen oder nach der Geburt.",
        zunge: "rot, trocken, wenig Belag",
        puls: "dünn, teils rau",
        punkte: "Di 4 · Di 11 · Ma 25 · Ren 6 · Ni 6 · Bl 25" },

      { feld: "Yang-Mangel", en: "Large Intestine Cold Deficiency", han: "大肠虚寒", pinyin: "dà cháng xū hán",
        kurz: "Es fehlt Wärme und Halt. Nichts wird mehr gehalten.",
        zeichen: "Durchfall mit unverdauten Speiseresten, dumpfer Bauchschmerz, der sich durch " +
                 "Wärme und sanften Druck bessert, Kälteempfindlichkeit, Rumpeln im Bauch, " +
                 "Müdigkeit. Bei ausgeprägter Schwäche Vorfall oder unwillkürlicher Abgang.",
        zunge: "blass, feucht, dünner weißer Belag",
        puls: "tief, schwach, langsam",
        punkte: "Ma 25 · Ma 36 · Ren 6 mit Moxa · Bl 25 · Du 20" },

      { feld: "Yin-Fülle", en: "Cold-Damp in the Large Intestine", han: "寒湿", pinyin: "hán shī",
        kurz: "Kälte und Nässe stauen sich im Darm.",
        zeichen: "Wässriger Durchfall ohne üblen Geruch, Bauchgrimmen, Schweregefühl im Körper " +
                 "und im Kopf, kein Durst, Verschlimmerung bei nasskaltem Wetter und nach " +
                 "kalten Speisen. Nach dem Stuhlgang keine Erleichterung.",
        zunge: "geschwollen, weißer klebriger Belag, Zahneindrücke",
        puls: "langsam und schlüpfrig",
        punkte: "Ma 25 · Ma 37 · Mi 9 · Ren 6 · Ren 12" },

      { feld: "Yang-Fülle", en: "Damp-Heat in the Large Intestine", han: "大肠湿热", pinyin: "dà cháng shī rè",
        kurz: "Feuchte Hitze staut sich im Darm.",
        zeichen: "Häufiger, brennender Stuhlgang mit Schleim, teils mit Blut, übelriechend. " +
                 "Drang, der nach dem Stuhlgang bleibt, Brennen am After, Bauchschmerz, " +
                 "dunkler spärlicher Urin, Fieber und Durst ohne Verlangen zu trinken.",
        zunge: "rot, gelber klebriger Belag",
        puls: "schnell und schlüpfrig",
        punkte: "Di 11 · Di 4 · Ma 25 · Ma 37 · Mi 9" }
    ],

    aeussereTitel: "Wo der Meridian selbst betroffen ist",
    aeussere: [
      { name: "Wind-Hitze an Kopf und Rachen", han: "风热", pinyin: "fēng rè",
        zeichen: "Zahnschmerz im Unterkiefer, geschwollenes Zahnfleisch, Halsschmerz, " +
                 "gerötete Augen, verstopfte oder laufende Nase. Der Meridian läuft über " +
                 "Wange, Kiefer und Nasenflügel und wird bei diesen Beschwerden zuerst genutzt.",
        punkte: "Di 4 · Di 11 · Di 20 · Ma 44" },
      { name: "Blockade im Verlauf", han: "经络不通", pinyin: "jīng luò bù tōng",
        zeichen: "Schmerz und Bewegungseinschränkung an Schulter, Ellenbogen oder Handgelenk " +
                 "entlang der Außenseite des Arms; Tennisellenbogen; Taubheit im Zeigefinger; " +
                 "Gesichtslähmung.",
        punkte: "Di 15 · Di 11 · Di 10 · Di 4" }
    ],

    nahrungTitel: "Was den Dickdarm stärkt und was ihm schadet",
    nahrung: {
      staerkt: [
        { was: "Gekochtes Gemüse mit Ballaststoffen", warum: "gibt dem Darm Substanz, ohne die Mitte zu kühlen" },
        { was: "Eingeweichte Leinsamen", warum: "befeuchten den Darm bei Trockenheit" },
        { was: "Pflaumen und Feigen", warum: "bewegen den Stuhl nach unten, klassisch bei Trockenheits-Verstopfung" },
        { was: "Sesam und Sesamöl", warum: "nähren die Säfte und machen den Stuhl geschmeidig" },
        { was: "Hafer-Congee", warum: "baut Qi auf und hält die Flüssigkeit im Darm" },
        { was: "Warme Suppen und Brühen", warum: "führen Flüssigkeit zu, ohne die Verdauung zu belasten" },
        { was: "Sauerkraut, Miso, milchsauer Eingelegtes", warum: "in kleinen Mengen, unterstützt die Darmflora" },
        { was: "Weißer Rettich, Fenchel, Kümmel", warum: "lösen Stauung und Blähungen" }
      ],
      schadet: [
        { was: "Zu wenig trinken", warum: "der häufigste Grund für trockenen, harten Stuhl" },
        { was: "Viel Scharfes, Frittiertes und Alkohol", warum: "erzeugt Hitze und trocknet den Darm aus" },
        { was: "Weißmehl und stark Verarbeitetes", warum: "lässt dem Darm nichts zu greifen" },
        { was: "Kalte Rohkost und Eisgekühltes", warum: "schwächt die Wärme, die der Darm zum Arbeiten braucht" },
        { was: "Viel rotes Fleisch und Käse", warum: "bleibt lange liegen und staut" },
        { was: "Essen unter Zeitdruck, Mahlzeiten auslassen", warum: "bringt den Rhythmus durcheinander, von dem der Darm lebt" }
      ],
      hinweis: "Trockenheit und Durchfall sind beim Dickdarm zwei Seiten derselben Aufgabe – " +
               "beide betreffen die Flüssigkeit. Vor jeder Ernährungsempfehlung steht deshalb " +
               "die Frage, ob zu viel oder zu wenig Saft im Spiel ist. Und: die Maximalzeit " +
               "des Dickdarms liegt zwischen fünf und sieben Uhr morgens."
    },

    eigenschaften: [
      { k: "Wandlungsphase", v: "Metall 金" },
      { k: "Jahreszeit", v: "Herbst" },
      { k: "Klima", v: "Trockenheit" },
      { k: "Geschmack", v: "scharf" },
      { k: "Farbe", v: "weiß" },
      { k: "Sinnesorgan", v: "Nase" },
      { k: "Gewebe", v: "Haut und Körperhaar" },
      { k: "Emotion", v: "Trauer, Nicht-loslassen-Können" },
      { k: "Organart", v: "Fu-Organ, Hohlorgan" },
      { k: "Gekoppelt", v: "Lunge" }
    ],

    hinweis: "Die Muster beschreiben die klassische Syndromlehre und dienen dem Unterricht. " +
             "Sie ersetzen weder Diagnose noch ärztliche Abklärung."
  },

  points: [
    { n:1, pinyin:"Shāngyáng", han:"商阳", de:"Äußerstes Yang, Metall-Yang", en:"Shang Yang",
      x:146, y:612, key:true, role:"TING · BEN",
      antik:"ting", wx:"metall",
      tags:["Ting / Jing – Brunnen-/Quellpunkt","Ben-Punkt","Notfallpunkt"],
      loc:"An der radialen, medialen Seite des Zeigefingers, ein Fen (0,1 Cun) proximal des Nagelfalzwinkels.",
      ind:"Halsschmerz, Zahnschmerz, Fieber, Bewusstlosigkeit, Taubheit im Zeigefinger.",
      nd:"Schräg 0,1 Cun oder Mikroaderlass mit der Dreikantnadel." },

    { n:2, pinyin:"Èrjiān", han:"二间", de:"Zweites Intervall", en:"Second Space",
      x:151, y:597, key:false, role:"YONG · SED",
      antik:"yong", wx:"wasser",
      tags:["Yong / Ying – kleiner Flusspunkt","Sedierungspunkt"],
      loc:"Distal vom Grundgelenk des Zeigefingers, am Ende der Falte, die sich beim Beugen des Fingers bildet.",
      ind:"Zahnschmerz, Halsschmerz, Nasenbluten, Fieber, Gesichtsschwellung.",
      nd:"Senkrecht 0,2–0,3 Cun." },

    { n:3, pinyin:"Sānjiān", han:"三间", de:"Drittes Intervall", en:"Third Space",
      x:159, y:585, key:false, role:"YU",
      antik:"yu", wx:"holz",
      tags:["Yu / Shu – größerer Flusspunkt"],
      loc:"Proximal des Zeigefingergrundgelenks, an der radialen Seite.",
      ind:"Zahnschmerz, Augenschmerz, Rumpeln im Bauch, Schwellung der Hand.",
      nd:"Senkrecht 0,3–0,5 Cun." },

    { n:4, pinyin:"Hégǔ", han:"合谷", de:"Vereinte Täler", en:"Joining Valley",
      x:162, y:551, key:true, role:"YUAN",
      tags:["Yuan-Quellpunkt","Kommandopunkt Gesicht und Mund","einer der vier Tore"],
      loc:"Auf dem Handrücken, in der Mitte des zweiten Mittelhandknochens, an dessen radialer Seite in einer Vertiefung.",
      ind:"Kopfschmerz, Zahnschmerz, Gesichtslähmung, Erkältung, Schmerzen aller Art im Gesicht, Geburtseinleitung.",
      nd:"Senkrecht 0,5–1 Cun. In der Schwangerschaft nicht nadeln." },

    { n:5, pinyin:"Yángxī", han:"阳溪", de:"Yang-Schlucht", en:"Yang Ravine",
      x:200, y:521, key:false, role:"KING",
      antik:"king", wx:"feuer",
      tags:["King / Jing – Strom-/Flusspunkt"],
      loc:"In der anatomischen Tabatiere, zwischen den Sehnen der Daumenstrecker, am radialen Ende der Handgelenksfalte.",
      ind:"Handgelenkschmerz, Zahnschmerz, Ohrgeräusche, gerötete Augen.",
      nd:"Senkrecht 0,3–0,5 Cun." },

    { n:6, pinyin:"Piānlì", han:"偏历", de:"Schräge Verbindung", en:"Veering Passage",
      x:216, y:496, key:true, role:"LUO",
      tags:["Luo-Punkt – Verbindungspunkt","zieht zum Yuan-Punkt Lu 9"],
      loc:"3 Cun proximal von Di 5, auf der Verbindungslinie von Di 5 zu Di 11.",
      ind:"Nasenbluten, Ohrgeräusche, Wasseransammlung, Schmerz im Unterarm, Husten über die Kopplung zur Lunge.",
      nd:"Schräg 0,3–0,5 Cun." },

    { n:7, pinyin:"Wēnliū", han:"温溜", de:"Warmer Strom", en:"Warm Dwelling",
      x:225, y:479, key:false, role:"XI",
      tags:["Xi-Cleft – Akkumulationspunkt","Akutpunkt"],
      loc:"5 Cun proximal von Di 5, auf der Verbindungslinie von Di 5 zu Di 11.",
      ind:"Akuter Bauchschmerz, Rumpeln im Bauch, geschwollenes Gesicht, akuter Halsschmerz.",
      nd:"Senkrecht 0,5–1 Cun." },

    { n:10, pinyin:"Shǒusānlǐ", han:"手三里", de:"Dritter Weiler an der Hand", en:"Arm Three Li",
      x:241, y:432, key:false, role:"",
      tags:["im Skript „der obere Zusanli“"],
      loc:"2 Cun distal von Di 11, auf der Verbindungslinie von Di 5 zu Di 11.",
      ind:"Tennisellenbogen, Lähmung und Schwäche des Arms, Bauchschmerz, Durchfall.",
      nd:"Senkrecht 0,8–1,2 Cun." },

    { n:11, pinyin:"Qūchí", han:"曲池", de:"Gekrümmter Teich", en:"Pool at the Bend",
      x:248, y:414, key:true, role:"HO · TON",
      antik:"ho", wx:"erde",
      tags:["Ho / He – Meerpunkt","Tonisierungspunkt","kühlt Hitze und Blut"],
      loc:"Bei 90 Grad gebeugtem Arm am lateralen Ende der Ellenbogenfalte, auf halbem Weg zwischen Lu 5 und dem lateralen Epicondylus humeri, in einer Vertiefung.",
      ind:"Fieber, Hitze und Hauterkrankungen, Bluthochdruck, Tennisellenbogen, Verstopfung, Allergien.",
      nd:"Senkrecht 1–1,5 Cun." },

    { n:15, pinyin:"Jiānyú", han:"肩髃", de:"Schulterecke", en:"Shoulder Bone",
      x:312, y:248, key:false, role:"",
      tags:["Treffpunkt mit dem Yangqiao Mai"],
      loc:"In der vorderen der beiden Vertiefungen unterhalb des Akromions, die sich zeigen, wenn der Arm seitlich angehoben wird.",
      ind:"Schulterschmerz, eingeschränkte Armhebung, Frozen Shoulder, Hauterkrankungen.",
      nd:"Senkrecht 0,8–1,5 Cun, bei angehobenem Arm." },

    { n:20, pinyin:"Yíngxiāng", han:"迎香", de:"Den Duft empfangen", en:"Welcome Fragrance",
      x:452, y:181, key:true, role:"",
      tags:["Endpunkt des Meridians","Treffpunkt mit dem Magen-Meridian"],
      loc:"In der Nasolabialfalte, auf Höhe der Mitte des Nasenflügels. Der Meridian kreuzt zuvor unterhalb der Nase die Mittellinie – Di 20 liegt auf der Gegenseite.",
      ind:"Verstopfte Nase, Nasenlaufen, Verlust des Geruchssinns, Nasenbluten, Gesichtslähmung, Juckreiz im Gesicht.",
      nd:"Schräg nach oben-medial, 0,3–0,5 Cun. Nicht moxibustieren." }
  ]
});
