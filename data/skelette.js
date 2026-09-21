/* Skelettzeichnungen
   ==================
   Wo die Haut nichts mehr hergibt, zeigt die Detailabbildung statt des
   Fotos eine Zeichnung. Die Knochen sind nicht frei gemalt, sondern aus
   einer Masstabelle erzeugt: jeder Roehrenknochen ist eine Kapsel aus
   zwei Kreisen mit ihren aeusseren Tangenten, jeder Fusswurzelknochen
   ein abgerundetes Vieleck. Der Erzeuger steht im Arbeitsordner unter
   knochen.py; hier stehen nur die fertigen Pfade.

   Die Zeichnung hat ihr eigenes Koordinatensystem. Das muss so sein:
   die Figur zeigt den Fuss stark verkuerzt, die Zeichnung zeigt ihn in
   wahrer Gestalt. Die Punkte bekommen deshalb eigene Lagen in dieser
   Zeichnung – nach der Anatomie, nicht durch Umrechnen aus dem Foto.

   Ein Punkt sagt skelett:"fussruecken", und die Detailabbildung
   schaltet fuer ihn vom Foto auf die Zeichnung um. Die Marken heissen
   wie in data/marken.js, haben hier aber ihre eigenen Koordinaten.

   Rechter Fuss von oben. x waechst nach medial, also zur Grosszehe
   hin; y waechst nach distal, zu den Zehen. Dieselbe Ausrichtung wie
   auf der Vorderansicht der Figur. */
Meridian.skelett({

  fussruecken: {
    titel: "Fu\u00dfr\u00fccken, rechter Fu\u00df",
    feld: [56, -2, 150, 340],

    knochen: [
      { name: "Schienbein mit Innenknöchel", d: "M118,5.5 Q118,2 121.5,2 L178.5,2 Q182,2 182.4,5.5 L185.6,34.5 Q186,38 185.3,41.4 L183.7,48.6 Q183,52 181.1,55 L177.9,60 Q176,63 173.5,65.5 L169.5,69.5 Q167,72 164.5,69.5 L162.5,67.5 Q160,65 159.4,61.6 L157.6,51.4 Q157,48 153.5,47.5 L121.5,42.5 Q118,42 118,38.5 Z", stark: true },
      { name: "Wadenbein mit Außenknöchel", d: "M93.7,5.5 Q94,2 97.5,2 L113.5,2 Q117,2 117.3,5.5 L120.7,38.5 Q121,42 120.5,45.5 L118.5,60.5 Q118,64 116.4,67.1 L111.6,75.9 Q110,79 106.6,78.4 L102.4,77.6 Q99,77 97.8,73.7 L94.2,63.3 Q93,60 92.7,56.5 L91.3,41.5 Q91,38 91.3,34.5 Z", stark: true },
      { name: "Sprungbein", d: "M102.7,58.9 Q104,52 111,51.7 L151,50.3 Q158,50 161.4,56.1 L164.6,61.9 Q168,68 165.6,74.6 L162.4,83.4 Q160,90 153.1,90.9 L126.9,94.1 Q120,95 115.2,89.9 L104.8,79.1 Q100,74 101.3,67.1 Z", stark: true },
      { name: "Fersenbein", d: "M65.2,73 Q66,66 73,65.3 L97,62.7 Q104,62 105.2,68.9 L108.8,89.1 Q110,96 104.2,99.9 L93.8,107.1 Q88,111 82.3,106.9 L68.7,97.1 Q63,93 63.8,86 Z", stark: true },
      { name: "Kahnbein", d: "M131,93.2 Q134,88 140,87.4 L166,84.6 Q172,84 174.2,89.6 L177.8,98.4 Q180,104 177.2,109.3 L173.8,115.7 Q171,121 165,120.2 L146,117.8 Q140,117 136.4,112.2 L130.6,104.8 Q127,100 130,94.8 Z", stark: true },
      { name: "Würfelbein", d: "M69.8,107.6 Q72,102 78,101.4 L106,98.6 Q112,98 113.3,103.8 L116.7,118.2 Q118,124 115,129.2 L111,135.8 Q108,141 102,140.4 L84,138.6 Q78,138 74.5,133.1 L68.5,124.9 Q65,120 67.2,114.4 Z", stark: true },
      { name: "Inneres Keilbein", d: "M144.2,121.7 Q146,116 152,115.3 L176,112.7 Q182,112 183.2,117.9 L186.8,136.1 Q188,142 184.7,147 L181.3,152 Q178,157 172.1,155.9 L155.9,153.1 Q150,152 147.5,146.5 L143.5,137.5 Q141,132 142.8,126.3 Z" },
      { name: "Mittleres Keilbein", d: "M121.8,116.5 Q124,112 129,111.6 L143,110.4 Q148,110 148.4,115 L149.6,133 Q150,138 147.6,142.4 L146.4,144.6 Q144,149 139.1,147.9 L126.9,145.1 Q122,144 120.7,139.2 L118.3,130.8 Q117,126 119.2,121.5 Z" },
      { name: "Äußeres Keilbein", d: "M99.8,112.5 Q102,108 107,107.5 L119,106.5 Q124,106 124.4,111 L125.6,127 Q126,132 123.8,136.5 L122.2,139.5 Q120,144 115.1,142.8 L104.9,140.2 Q100,139 98.6,134.2 L96.4,126.8 Q95,122 97.2,117.5 Z" },
      { name: "1. Mittelfußknochen", d: "M151.1,159.8 L159.1,226 A17,17 0 0 0 192.7,221 L180.8,155.3 A15,15 0 0 0 151.1,159.8 Z", stark: true },
      { name: "2. Mittelfußknochen", d: "M127,150.5 L132,234.7 A12,12 0 0 0 155.9,232.4 L144.9,148.8 A9,9 0 0 0 127,150.5 Z" },
      { name: "3. Mittelfußknochen", d: "M104,146.3 L107,230.4 A11,11 0 0 0 128.9,228.8 L120,145.1 A8,8 0 0 0 104,146.3 Z" },
      { name: "4. Mittelfußknochen", d: "M84,142 L84,222 A10,10 0 0 0 104,221.5 L100,141.6 A8,8 0 0 0 84,142 Z" },
      { name: "5. Mittelfußknochen", d: "M62,135.6 L59,213.6 A11,11 0 0 0 81,214.4 L84,136.4 A11,11 0 0 0 62,135.6 Z" },
      { name: "Grundglied der Großzehe", d: "M165.1,243.6 L170.1,283.5 A12,12 0 0 0 194,281.1 L191,241 A13,13 0 0 0 165.1,243.6 Z", stark: true },
      { name: "Endglied der Großzehe", d: "M172,296 L172,320 A12,12 0 0 0 196,319 L194,295.1 A11,11 0 0 0 172,296 Z", stark: true },
      { name: "Grundglied der 2. Zehe", d: "M137.1,247.3 L141.1,275.1 A8,8 0 0 0 157,273.4 L155,245.4 A9,9 0 0 0 137.1,247.3 Z" },
      { name: "Mittelglied der 2. Zehe", d: "M142,282.7 L144.5,306.7 A6.5,6.5 0 0 0 157.5,305.6 L156,281.6 A7,7 0 0 0 142,282.7 Z" },
      { name: "Endglied der 2. Zehe", d: "M145,313.8 L144.5,325.7 A6.5,6.5 0 0 0 157.5,325.7 L157,313.8 A6,6 0 0 0 145,313.8 Z" },
      { name: "Grundglied der 3. Zehe", d: "M110.6,243 L113.5,268.9 A7.5,7.5 0 0 0 128.5,267.7 L127.5,241.7 A8.5,8.5 0 0 0 110.6,243 Z" },
      { name: "Mittelglied der 3. Zehe", d: "M114.4,276.4 L115.9,298.4 A6.1,6.1 0 0 0 128.1,297.9 L127.6,275.9 A6.6,6.6 0 0 0 114.4,276.4 Z" },
      { name: "Endglied der 3. Zehe", d: "M116.3,305.7 L115.8,315.7 A6.2,6.2 0 0 0 128.2,315.7 L127.7,305.7 A5.7,5.7 0 0 0 116.3,305.7 Z" },
      { name: "Grundglied der 4. Zehe", d: "M86,236.4 L87,258.3 A7,7 0 0 0 101,258.3 L102,236.4 A8,8 0 0 0 86,236.4 Z" },
      { name: "Mittelglied der 4. Zehe", d: "M87.8,266.2 L88.3,286.1 A5.7,5.7 0 0 0 99.7,286.1 L100.2,266.2 A6.2,6.2 0 0 0 87.8,266.2 Z" },
      { name: "Endglied der 4. Zehe", d: "M88.6,293.7 L88.1,302.7 A5.9,5.9 0 0 0 99.9,302.7 L99.4,293.7 A5.4,5.4 0 0 0 88.6,293.7 Z" },
      { name: "Grundglied der 5. Zehe", d: "M61.5,227.6 L60.5,245.6 A6.5,6.5 0 0 0 73.4,247.1 L76.4,229.2 A7.5,7.5 0 0 0 61.5,227.6 Z" },
      { name: "Mittelglied der 5. Zehe", d: "M61.2,253.5 L59.7,271.6 A5.3,5.3 0 0 0 70.2,272.7 L72.7,254.8 A5.8,5.8 0 0 0 61.2,253.5 Z" },
      { name: "Endglied der 5. Zehe", d: "M59.9,279.7 L59.4,287.6 A5.6,5.6 0 0 0 70.6,287.6 L70.1,279.7 A5.1,5.1 0 0 0 59.9,279.7 Z" }
    ],

    /* Punktlagen in der Zeichnung, nach der Anatomie gesetzt */
    punkte: {
      "Ma 41": [140,  72], "Ma 42": [126, 162], "Ma 43": [130, 208],
      "Ma 44": [133, 250], "Ma 45": [143, 322],
      "Le 1":  [172, 316], "Le 2":  [163, 250], "Le 3":  [154, 186],
      "Le 4":  [160,  76],
      "MP 1":  [196, 316], "MP 2":  [194, 250], "MP 3":  [195, 218],
      "MP 4":  [188, 168], "MP 5":  [176,  82],
      "Ni 2":  [186, 112]
    },

    /* Dieselben Namen wie in data/marken.js, eigene Koordinaten */
    marken: {
      mfk12:          { text: "Zwischenraum 1. und 2. Mittelfu\u00dfknochen", l: [157, 212, 150, 162] },
      mfk23:          { text: "Zwischenraum 2. und 3. Mittelfu\u00dfknochen", l: [131, 214, 124, 154] },
      mfk45:          { text: "Zwischenraum 4. und 5. Mittelfu\u00dfknochen", l: [ 82, 206,  83, 148] },
      zehe12:         { text: "Zwischenraum 1. und 2. Zehe", l: [163, 262, 163, 242] },
      zehe23:         { text: "Zwischenraum 2. und 3. Zehe", l: [134, 262, 133, 242] },
      zehe2:          { text: "Au\u00dfenrand der zweiten Zehe", l: [142, 310, 142, 328] },
      grosszehe:      { text: "Innenrand der Gro\u00dfzehe, Rot-Wei\u00df-Grenze", l: [197, 302, 195, 324] },
      ballen1:        { text: "Grundgelenk der Gro\u00dfzehe", p: [191, 224] },
      kahnbein:       { text: "H\u00f6cker des Kahnbeins", p: [180, 104] },
      fussrand_med:   { text: "Innenrand des Fu\u00dfes, Rot-Wei\u00df-Grenze", l: [190, 130, 197, 262] },
      knoechelspalte: { text: "Kn\u00f6chelspalte", l: [100, 66, 176, 62] },
      tibialis:       { text: "Sehne des vorderen Schienbeinmuskels", l: [150, 64, 148, 100] },
      innenknoechel:  { text: "Spitze des Innenkn\u00f6chels", p: [167, 72] },
      aussenknoechel: { text: "Spitze des Au\u00dfenkn\u00f6chels", p: [104, 78] }
    }
  },
  /* ---------------------------------------------------------------
     Rechte Hand. Handfläche: Daumen links, Finger nach unten – so
     steht der rechte Arm auf der Vorderansicht, Handfläche nach vorn.
     Handrücken: dieselbe Hand gespiegelt, Daumen rechts – so steht er
     auf der Rückansicht. Das Erbsenbein liegt hohlhandseitig und ist
     darum nur auf der Handfläche eingezeichnet.
     Vom Unterarm sind gut drei Cun zu sehen; weiter oben liegende
     Punkte bleiben vorerst beim Foto.
     --------------------------------------------------------------- */

  /* ---------------------------------------------------------------
     Derselbe Fußrücken, an der Senkrechten gespiegelt: der linke Fuß.
     Blase und Gallenblase sind auf der Figur am linken Fuß
     eingezeichnet; eine rechte Fußzeichnung waere falsch herum.
     Großzehe links, kleine Zehe rechts.
     --------------------------------------------------------------- */

  fussruecken_links: {
    titel: "Fu\u00dfr\u00fccken, linker Fu\u00df",
    feld: [44, -2, 150, 340],

    knochen: [
      { name: "Schienbein mit Innenknöchel", d: "M132,5.5 Q132,2 128.5,2 L71.5,2 Q68,2 67.6,5.5 L64.4,34.5 Q64,38 64.7,41.4 L66.3,48.6 Q67,52 68.9,55 L72.1,60 Q74,63 76.5,65.5 L80.5,69.5 Q83,72 85.5,69.5 L87.5,67.5 Q90,65 90.6,61.6 L92.4,51.4 Q93,48 96.5,47.5 L128.5,42.5 Q132,42 132,38.5 Z", stark: true },
      { name: "Wadenbein mit Außenknöchel", d: "M156.3,5.5 Q156,2 152.5,2 L136.5,2 Q133,2 132.7,5.5 L129.3,38.5 Q129,42 129.5,45.5 L131.5,60.5 Q132,64 133.6,67.1 L138.4,75.9 Q140,79 143.4,78.4 L147.6,77.6 Q151,77 152.2,73.7 L155.8,63.3 Q157,60 157.3,56.5 L158.7,41.5 Q159,38 158.7,34.5 Z", stark: true },
      { name: "Sprungbein", d: "M147.3,58.9 Q146,52 139,51.7 L99,50.3 Q92,50 88.6,56.1 L85.4,61.9 Q82,68 84.4,74.6 L87.6,83.4 Q90,90 96.9,90.9 L123.1,94.1 Q130,95 134.8,89.9 L145.2,79.1 Q150,74 148.7,67.1 Z", stark: true },
      { name: "Fersenbein", d: "M184.8,73 Q184,66 177,65.3 L153,62.7 Q146,62 144.8,68.9 L141.2,89.1 Q140,96 145.8,99.9 L156.2,107.1 Q162,111 167.7,106.9 L181.3,97.1 Q187,93 186.2,86 Z", stark: true },
      { name: "Kahnbein", d: "M119,93.2 Q116,88 110,87.4 L84,84.6 Q78,84 75.8,89.6 L72.2,98.4 Q70,104 72.8,109.3 L76.2,115.7 Q79,121 85,120.2 L104,117.8 Q110,117 113.6,112.2 L119.4,104.8 Q123,100 120,94.8 Z", stark: true },
      { name: "Würfelbein", d: "M180.2,107.6 Q178,102 172,101.4 L144,98.6 Q138,98 136.7,103.8 L133.3,118.2 Q132,124 135,129.2 L139,135.8 Q142,141 148,140.4 L166,138.6 Q172,138 175.5,133.1 L181.5,124.9 Q185,120 182.8,114.4 Z", stark: true },
      { name: "Inneres Keilbein", d: "M105.8,121.7 Q104,116 98,115.3 L74,112.7 Q68,112 66.8,117.9 L63.2,136.1 Q62,142 65.3,147 L68.7,152 Q72,157 77.9,155.9 L94.1,153.1 Q100,152 102.5,146.5 L106.5,137.5 Q109,132 107.2,126.3 Z" },
      { name: "Mittleres Keilbein", d: "M128.2,116.5 Q126,112 121,111.6 L107,110.4 Q102,110 101.6,115 L100.4,133 Q100,138 102.4,142.4 L103.6,144.6 Q106,149 110.9,147.9 L123.1,145.1 Q128,144 129.3,139.2 L131.7,130.8 Q133,126 130.8,121.5 Z" },
      { name: "Äußeres Keilbein", d: "M150.2,112.5 Q148,108 143,107.5 L131,106.5 Q126,106 125.6,111 L124.4,127 Q124,132 126.2,136.5 L127.8,139.5 Q130,144 134.9,142.8 L145.1,140.2 Q150,139 151.4,134.2 L153.6,126.8 Q155,122 152.8,117.5 Z" },
      { name: "1. Mittelfußknochen", d: "M98.9,159.8 L90.9,226 A17,17 0 0 1 57.3,221 L69.2,155.3 A15,15 0 0 1 98.9,159.8 Z", stark: true },
      { name: "2. Mittelfußknochen", d: "M123,150.5 L118,234.7 A12,12 0 0 1 94.1,232.4 L105.1,148.8 A9,9 0 0 1 123,150.5 Z" },
      { name: "3. Mittelfußknochen", d: "M146,146.3 L143,230.4 A11,11 0 0 1 121.1,228.8 L130,145.1 A8,8 0 0 1 146,146.3 Z" },
      { name: "4. Mittelfußknochen", d: "M166,142 L166,222 A10,10 0 0 1 146,221.5 L150,141.6 A8,8 0 0 1 166,142 Z" },
      { name: "5. Mittelfußknochen", d: "M188,135.6 L191,213.6 A11,11 0 0 1 169,214.4 L166,136.4 A11,11 0 0 1 188,135.6 Z" },
      { name: "Grundglied der Großzehe", d: "M84.9,243.6 L79.9,283.5 A12,12 0 0 1 56,281.1 L59,241 A13,13 0 0 1 84.9,243.6 Z", stark: true },
      { name: "Endglied der Großzehe", d: "M78,296 L78,320 A12,12 0 0 1 54,319 L56,295.1 A11,11 0 0 1 78,296 Z", stark: true },
      { name: "Grundglied der 2. Zehe", d: "M112.9,247.3 L108.9,275.1 A8,8 0 0 1 93,273.4 L95,245.4 A9,9 0 0 1 112.9,247.3 Z" },
      { name: "Mittelglied der 2. Zehe", d: "M108,282.7 L105.5,306.7 A6.5,6.5 0 0 1 92.5,305.6 L94,281.6 A7,7 0 0 1 108,282.7 Z" },
      { name: "Endglied der 2. Zehe", d: "M105,313.8 L105.5,325.7 A6.5,6.5 0 0 1 92.5,325.7 L93,313.8 A6,6 0 0 1 105,313.8 Z" },
      { name: "Grundglied der 3. Zehe", d: "M139.4,243 L136.5,268.9 A7.5,7.5 0 0 1 121.5,267.7 L122.5,241.7 A8.5,8.5 0 0 1 139.4,243 Z" },
      { name: "Mittelglied der 3. Zehe", d: "M135.6,276.4 L134.1,298.4 A6.1,6.1 0 0 1 121.9,297.9 L122.4,275.9 A6.6,6.6 0 0 1 135.6,276.4 Z" },
      { name: "Endglied der 3. Zehe", d: "M133.7,305.7 L134.2,315.7 A6.2,6.2 0 0 1 121.8,315.7 L122.3,305.7 A5.7,5.7 0 0 1 133.7,305.7 Z" },
      { name: "Grundglied der 4. Zehe", d: "M164,236.4 L163,258.3 A7,7 0 0 1 149,258.3 L148,236.4 A8,8 0 0 1 164,236.4 Z" },
      { name: "Mittelglied der 4. Zehe", d: "M162.2,266.2 L161.7,286.1 A5.7,5.7 0 0 1 150.3,286.1 L149.8,266.2 A6.2,6.2 0 0 1 162.2,266.2 Z" },
      { name: "Endglied der 4. Zehe", d: "M161.4,293.7 L161.9,302.7 A5.9,5.9 0 0 1 150.1,302.7 L150.6,293.7 A5.4,5.4 0 0 1 161.4,293.7 Z" },
      { name: "Grundglied der 5. Zehe", d: "M188.5,227.6 L189.5,245.6 A6.5,6.5 0 0 1 176.6,247.1 L173.6,229.2 A7.5,7.5 0 0 1 188.5,227.6 Z" },
      { name: "Mittelglied der 5. Zehe", d: "M188.8,253.5 L190.3,271.6 A5.3,5.3 0 0 1 179.8,272.7 L177.3,254.8 A5.8,5.8 0 0 1 188.8,253.5 Z" },
      { name: "Endglied der 5. Zehe", d: "M190.1,279.7 L190.6,287.6 A5.6,5.6 0 0 1 179.4,287.6 L179.9,279.7 A5.1,5.1 0 0 1 190.1,279.7 Z" }
    ],

    punkte: {
      "Bl 62": [150,  92], "Bl 63": [184, 122], "Bl 64": [187, 142],
      "Bl 65": [191, 206], "Bl 66": [191, 230], "Bl 67": [190, 285],
      "Gb 40": [140,  96], "Gb 41": [168, 180], "Gb 43": [170, 246],
      "Gb 44": [162, 298]
    },

    marken: {
      aussenknoechel: { text: "Spitze des Au\u00dfenkn\u00f6chels", p: [146,  78] },
      innenknoechel:  { text: "Spitze des Innenkn\u00f6chels", p: [ 83,  72] },
      knoechelspalte: { text: "Kn\u00f6chelspalte", l: [150,  66,  74,  62] },
      mfk5:           { text: "H\u00f6cker des f\u00fcnften Mittelfu\u00dfknochens", p: [188, 140] },
      fussrand_lat:   { text: "Au\u00dfenrand des Fu\u00dfes, Rot-Wei\u00df-Grenze", l: [190, 152, 194, 244] },
      mfk45:          { text: "Zwischenraum 4. und 5. Mittelfu\u00dfknochen", l: [168, 206, 167, 148] },
      mfk45_s:        { text: "Zwischenraum 4. und 5. Mittelfu\u00dfknochen", l: [168, 206, 167, 148] },
      zehe45:         { text: "Zwischenraum 4. und 5. Zehe", l: [170, 256, 170, 234] },
      zehe45_s:       { text: "Zwischenraum 4. und 5. Zehe", l: [170, 256, 170, 234] },
      kleinzehe:      { text: "Au\u00dfenseite der kleinen Zehe", l: [192, 276, 192, 292] },
      wuerfelbein:    { text: "W\u00fcrfelbein", p: [160, 120] },
      kahnbein:       { text: "H\u00f6cker des Kahnbeins", p: [ 70, 104] }
    }
  },

  /* ---------------------------------------------------------------
     Ellenbogen, rechter Arm. Von vorn liegt die Speiche links – auf
     der Vorderansicht ist die Daumenseite außen, also bei den
     kleineren x. Von hinten ist es umgekehrt.
     Ein Cun misst am Unterarm 25 Bildpunkte, am Oberarm 28.
     --------------------------------------------------------------- */

  ellenbogen_vorn: {
    titel: "Ellenbogen von vorn",
    feld: [24, -30, 152, 380],

    knochen: [
      { name: "Oberarmknochen", d: "M74,-31.2 L67,114.4 A33,33 0 0 0 133,114.4 L126,-31.2 A26,26 0 0 0 74,-31.2 Z", stark: true },
      { name: "Untere Knorren des Oberarmknochens", d: "M42.7,126.4 Q46,118 55,118 L145,118 Q154,118 157.3,126.4 L161.7,137.6 Q165,146 161.6,154.3 L159.4,159.7 Q156,168 147.6,171.1 L134.4,175.9 Q126,179 117,179 L83,179 Q74,179 65.5,176 L51.5,171 Q43,168 39.9,159.5 L38.1,154.5 Q35,146 38.3,137.6 Z", stark: true },
      { name: "Köpfchen der Speiche", d: "M45.3,188.4 Q48,182 55,182 L73,182 Q80,182 82.5,188.6 L83.5,191.4 Q86,198 82.5,204.1 L81.5,205.9 Q78,212 71,212 L61,212 Q54,212 49.8,206.4 L46.2,201.6 Q42,196 44.7,189.6 Z", stark: true },
      { name: "Speiche", d: "M50.1,206.8 L39.1,330.9 A13,13 0 0 0 64.9,333.4 L77.9,209.5 A14,14 0 0 0 50.1,206.8 Z", stark: true },
      { name: "Elle", d: "M107,186.3 L109,332.2 A13,13 0 0 0 134.9,333.2 L148.9,188 A21,21 0 0 0 107,186.3 Z", stark: true }
    ],

    punkte: {
      "Di 11": [ 56, 182], "Di 10": [ 56, 232],
      "Lu 5":  [ 80, 186], "Lu 6":  [ 62, 310],
      "Pe 3":  [112, 186],
      "He 3":  [150, 188], "He 2":  [152, 100]
    },

    marken: {
      ellenbeuge:   { text: "Ellenbeugefalte", l: [ 44, 180, 160, 186] },
      bizepssehne:  { text: "Sehne des zweik\u00f6pfigen Oberarmmuskels", l: [ 98, 140,  96, 192] },
      epicond_med:  { text: "Innerer Oberarmknorren", p: [160, 156] },
      epicond_lat:  { text: "\u00c4u\u00dferer Oberarmknorren", p: [ 40, 154] },
      speiche_rand: { text: "Speichenseitiger Rand des Unterarms", l: [ 56, 230,  48, 320] },
      elle_rand:    { text: "Rand der Elle", l: [130, 230, 124, 320] },
      bizeps_innen: { text: "Rinne innen neben dem Bizeps", l: [138,  90, 132, 142] },
      speichenkopf: { text: "K\u00f6pfchen der Speiche", p: [ 64, 196] }
    }
  },

  ellenbogen_hinten: {
    titel: "Ellenbogen von hinten",
    feld: [24, -30, 152, 380],

    knochen: [
      { name: "Oberarmknochen", d: "M74,-31.3 L67,110.4 A33,33 0 0 0 133,110.4 L126,-31.3 A26,26 0 0 0 74,-31.3 Z", stark: true },
      { name: "Untere Knorren des Oberarmknochens", d: "M40.2,122.2 Q44,114 53,114 L147,114 Q156,114 159,122.5 L163,133.5 Q166,142 161.8,150 L159.2,155 Q155,163 146.2,165 L128.8,169 Q120,171 111,171 L85,171 Q76,171 67.3,168.7 L47.7,163.3 Q39,161 36.2,152.5 L34.8,148.5 Q32,140 35.8,131.8 Z", stark: true },
      { name: "Ellenbogenhöcker", d: "M73.6,157.6 Q76,150 84,149.7 L114,148.3 Q122,148 125.3,155.3 L129.7,164.7 Q133,172 130.1,179.4 L126.9,187.6 Q124,195 116,195.4 L96,196.6 Q88,197 82.5,191.2 L73.5,181.8 Q68,176 70.4,168.4 Z", stark: true },
      { name: "Elle", d: "M86.1,194.6 L75,331 A13,13 0 0 0 100.8,334 L121.8,198.8 A18,18 0 0 0 86.1,194.6 Z", stark: true },
      { name: "Köpfchen der Speiche", d: "M123,185.2 Q126,180 132,179.6 L152,178.4 Q158,178 159.9,183.7 L162.1,190.3 Q164,196 160.8,201 L158.2,205 Q155,210 149,210 L136,210 Q130,210 126.4,205.2 L121.6,198.8 Q118,194 121,188.8 Z", stark: true },
      { name: "Speiche", d: "M128,207.1 L138,332.9 A12,12 0 0 0 162,331.4 L156,205.3 A14,14 0 0 0 128,207.1 Z", stark: true }
    ],

    punkte: {
      "D\u00fc 8": [ 66, 178], "3E 10": [102, 166]
    },

    marken: {
      olekranon:     { text: "Ellenbogenh\u00f6cker", p: [100, 192] },
      epicond_med_h: { text: "Innerer Oberarmknorren", p: [ 40, 152] },
      ulnarrinne:    { text: "Rinne des Ellennervs", l: [ 54, 162,  74, 190] },
      elle_rand:     { text: "Rand der Elle", l: [ 96, 232,  88, 320] }
    }
  },

  handflaeche: {
    titel: "Handfl\u00e4che, rechte Hand",
    feld: [4, -52, 192, 400],

    knochen: [
      { name: "Speiche mit Griffelfortsatz", d: "M63.9,-39 Q64,-44 69,-44 L103,-44 Q108,-44 108.1,-39 L109.9,35 Q110,40 108.2,44.7 L105.8,51.3 Q104,56 100.2,59.2 L95.8,62.8 Q92,66 88.1,62.9 L85.9,61.1 Q82,58 80.9,53.1 L79.1,44.9 Q78,40 73.1,38.8 L66.9,37.2 Q62,36 62.1,31 Z", stark: true },
      { name: "Elle mit Griffelfortsatz", d: "M113.9,-39 Q114,-44 119,-44 L145,-44 Q150,-44 150.1,-39 L151.9,27 Q152,32 150.8,36.9 L149.2,43.1 Q148,48 145.5,52.3 L142.5,57.7 Q140,62 135.7,59.4 L134.3,58.6 Q130,56 128.8,51.1 L127.2,44.9 Q126,40 121.4,38 L116.6,36 Q112,34 112.1,29 Z", stark: true },
      { name: "Kahnbein", d: "M67.5,66.3 Q70,62 74.9,61.2 L89.1,58.8 Q94,58 95.8,62.7 L99.2,71.3 Q101,76 98,80 L95,84 Q92,88 87,87.4 L79,86.6 Q74,86 70.6,82.3 L66.4,77.7 Q63,74 65.5,69.7 Z", stark: true },
      { name: "Mondbein", d: "M94.4,62.7 Q96,58 101,58 L113,58 Q118,58 120.2,62.5 L122.8,67.5 Q125,72 122.2,76.2 L119.8,79.8 Q117,84 112,83.4 L104,82.6 Q99,82 96.5,77.7 L94.5,74.3 Q92,70 93.6,65.3 Z", stark: true },
      { name: "Dreiecksbein", d: "M118.4,64.3 Q121,60 126,60.5 L136,61.5 Q141,62 142.7,66.7 L144.3,71.3 Q146,76 142.3,79.4 L138.7,82.6 Q135,86 130.2,84.6 L125.8,83.4 Q121,82 118.8,77.5 L117.2,74.5 Q115,70 117.6,65.7 Z", stark: true },
      { name: "Erbsenbein", d: "M129.3,84.7 Q132,82 137,82 L143,82 Q148,82 149.9,86.6 L151.1,89.4 Q153,94 149.1,97.1 L146.9,98.9 Q143,102 138.2,100.5 L134.8,99.5 Q130,98 128.2,93.5 L127.8,92.5 Q126,88 128.7,85.3 Z", stark: true },
      { name: "Großes Vieleckbein", d: "M62.9,91.9 Q66,88 70.9,87.2 L85.1,84.8 Q90,84 92,88.6 L95,95.4 Q97,100 94,104 L90,109 Q87,113 82.1,112.1 L74.9,110.9 Q70,110 66.8,106.2 L62.2,100.8 Q59,97 62.1,93.1 Z" },
      { name: "Kleines Vieleckbein", d: "M90.2,90.6 Q92,87 96,86.6 L106,85.4 Q110,85 111.3,88.8 L113.7,95.2 Q115,99 112.5,102.1 L109.5,105.9 Q107,109 103,108.5 L96,107.5 Q92,107 90.2,103.4 L88.8,100.6 Q87,97 88.8,93.4 Z" },
      { name: "Kopfbein", d: "M110.1,89.6 Q112,85 117,85 L129,85 Q134,85 135.8,89.7 L138.2,96.3 Q140,101 137,105 L134,109 Q131,113 126,112.4 L119,111.6 Q114,111 111.8,106.5 L109.2,101.5 Q107,97 108.9,92.4 Z", stark: true },
      { name: "Hakenbein", d: "M133.3,92.1 Q136,88 140.9,89.1 L148.1,90.9 Q153,92 154,96.9 L155,101.1 Q156,106 152.5,109.5 L150.5,111.5 Q147,115 142.2,113.5 L138.8,112.5 Q134,111 132.6,106.2 L131.4,101.8 Q130,97 132.7,92.9 Z" },
      { name: "1. Mittelhandknochen", d: "M64.7,108.1 L35.9,153.6 A12,12 0 0 0 56.4,166 L83.5,119.5 A11,11 0 0 0 64.7,108.1 Z", stark: true },
      { name: "2. Mittelhandknochen", d: "M91.1,112.9 L81.1,196.7 A11,11 0 0 0 103,198.8 L109,114.6 A9,9 0 0 0 91.1,112.9 Z" },
      { name: "3. Mittelhandknochen", d: "M113,115.6 L109,203.5 A11,11 0 0 0 131,204 L131,116 A9,9 0 0 0 113,115.6 Z" },
      { name: "4. Mittelhandknochen", d: "M132,116.4 L136,198.5 A10,10 0 0 0 156,197 L148,115.2 A8,8 0 0 0 132,116.4 Z" },
      { name: "5. Mittelhandknochen", d: "M144.1,115.5 L158.2,189.9 A10,10 0 0 0 177.7,185.6 L159.8,112.1 A8,8 0 0 0 144.1,115.5 Z" },
      { name: "Grundglied des Daumens", d: "M33.5,170.6 L22.5,204.9 A10,10 0 0 0 41.3,211.6 L54.3,177.9 A11,11 0 0 0 33.5,170.6 Z", stark: true },
      { name: "Endglied des Daumens", d: "M21.2,218 L15.2,244 A9,9 0 0 0 32.8,248 L38.8,222 A9,9 0 0 0 21.2,218 Z", stark: true },
      { name: "Grundglied des Zeigefinger", d: "M81,211.2 L78,243.3 A8,8 0 0 0 93.9,245.2 L98.9,213.4 A9,9 0 0 0 81,211.2 Z" },
      { name: "Mittelglied des Zeigefinger", d: "M79,253.5 L76.5,291.6 A6.5,6.5 0 0 0 89.5,292.6 L93,254.6 A7,7 0 0 0 79,253.5 Z" },
      { name: "Endglied des Zeigefinger", d: "M77,301.7 L76,319.7 A6,6 0 0 0 88,320.3 L89,302.3 A6,6 0 0 0 77,301.7 Z" },
      { name: "Grundglied des Mittelfinger", d: "M110.4,218 L110.4,254 A7.6,7.6 0 0 0 125.6,254.4 L127.6,218.5 A8.6,8.6 0 0 0 110.4,218 Z" },
      { name: "Mittelglied des Mittelfinger", d: "M111.4,264.1 L111.9,304.1 A6.2,6.2 0 0 0 124.1,304.1 L124.6,264.1 A6.7,6.7 0 0 0 111.4,264.1 Z" },
      { name: "Endglied des Mittelfinger", d: "M112.3,313.7 L111.3,331.7 A5.7,5.7 0 0 0 122.7,332.3 L123.7,314.3 A5.7,5.7 0 0 0 112.3,313.7 Z" },
      { name: "Grundglied des Ringfinger", d: "M138.9,213 L142.9,244.9 A7.2,7.2 0 0 0 157.2,243.6 L155.2,211.5 A8.2,8.2 0 0 0 138.9,213 Z" },
      { name: "Mittelglied des Ringfinger", d: "M143.7,254.6 L147.2,290.6 A5.8,5.8 0 0 0 158.8,289.6 L156.3,253.6 A6.3,6.3 0 0 0 143.7,254.6 Z" },
      { name: "Endglied des Ringfinger", d: "M147.6,299.7 L146.6,315.7 A5.4,5.4 0 0 0 157.4,316.3 L158.4,300.3 A5.4,5.4 0 0 0 147.6,299.7 Z" },
      { name: "Grundglied des kleinen Fingers", d: "M162.4,203.8 L170.4,237.6 A6.8,6.8 0 0 0 183.7,234.8 L177.7,200.6 A7.8,7.8 0 0 0 162.4,203.8 Z" },
      { name: "Mittelglied des kleinen Fingers", d: "M171.2,247.4 L175.7,265.3 A5.5,5.5 0 0 0 186.4,263 L182.8,244.9 A6,6 0 0 0 171.2,247.4 Z" },
      { name: "Endglied des kleinen Fingers", d: "M175.9,273.6 L174.9,287.6 A5.1,5.1 0 0 0 185.1,288.4 L186.1,274.4 A5.1,5.1 0 0 0 175.9,273.6 Z" }
    ],

    punkte: {
      "Lu 7":  [ 74,  14], "Lu 8":  [ 78,  30], "Lu 9":  [ 82,  60],
      "Lu 10": [ 58, 140], "Lu 11": [ 14, 246],
      "Di 1":  [ 76, 314], "Di 2":  [ 82, 214], "Di 3":  [ 84, 188],
      "Di 4":  [ 88, 156], "Di 5":  [ 70,  74],
      "He 4":  [142,  14], "He 5":  [143,  30], "He 6":  [144,  46],
      "He 7":  [146,  78], "He 8":  [156, 178], "He 9":  [174, 282],
      "Pe 5":  [113, -30], "Pe 6":  [113,  -2], "Pe 7":  [114,  66],
      "Pe 8":  [108, 174], "Pe 9":  [118, 332]
    },

    marken: {
      handgelenksfalte: { text: "Distale Handgelenksbeugefalte", l: [ 68,  66, 150,  62] },
      erbsenbein:       { text: "Erbsenbein", p: [140,  92] },
      fcu:              { text: "Sehne des ellenseitigen Handbeugers", l: [146,  16, 146,  72] },
      zwei_sehnen:      { text: "Die beiden Sehnen in der Mitte des Handgelenks",
                          l: [110,  16, 112,  64] },
      speichenarterie:  { text: "Speichenschlagader", l: [ 82,  16,  84,  58] },
      griffel_speiche:  { text: "Griffelfortsatz der Speiche", p: [ 84,  58] },
      daumensehnen:     { text: "Sehnen der Daumenstrecker", l: [ 60,  56,  74,  86] },
      daumenballen:     { text: "Daumenballen", p: [ 62, 150] },
      mhk12:            { text: "Zwischenraum 1. und 2. Mittelhandknochen", l: [ 76, 152,  90, 120] },
      mhk23:            { text: "Zwischenraum 2. und 3. Mittelhandknochen", l: [110, 160, 112, 124] },
      mhk45:            { text: "Zwischenraum 4. und 5. Mittelhandknochen", l: [158, 166, 150, 124] },
      zeigefinger_gg:   { text: "Grundgelenk des Zeigefingers", p: [ 92, 198] },
      zeigefinger_rad:  { text: "Speichenseite des Zeigefingers", l: [ 76, 300,  74, 318] },
      kleinfinger_rad:  { text: "Speichenseite des kleinen Fingers", l: [174, 268, 173, 286] },
      mittelfinger:     { text: "Spitze des Mittelfingers", p: [118, 332] },
      daumen_rad:       { text: "Speichenseite des Daumens", l: [ 16, 230,  12, 250] }
    }
  },

  handruecken: {
    titel: "Handr\u00fccken, rechte Hand",
    feld: [4, -52, 192, 400],

    knochen: [
      { name: "Speiche mit Griffelfortsatz", d: "M137.9,31 Q138,36 133.1,37.2 L126.9,38.8 Q122,40 120.9,44.9 L119.1,53.1 Q118,58 114.1,61.1 L111.9,62.9 Q108,66 104.2,62.8 L99.8,59.2 Q96,56 94.2,51.3 L91.8,44.7 Q90,40 90.1,35 L91.9,-39 Q92,-44 97,-44 L131,-44 Q136,-44 136.1,-39 Z", stark: true },
      { name: "Elle mit Griffelfortsatz", d: "M87.9,29 Q88,34 83.4,36 L78.6,38 Q74,40 72.8,44.9 L71.2,51.1 Q70,56 65.7,58.6 L64.3,59.4 Q60,62 57.5,57.7 L54.5,52.3 Q52,48 50.8,43.1 L49.2,36.9 Q48,32 48.1,27 L49.9,-39 Q50,-44 55,-44 L81,-44 Q86,-44 86.1,-39 Z", stark: true },
      { name: "Kahnbein", d: "M134.5,69.7 Q137,74 133.6,77.7 L129.4,82.3 Q126,86 121,86.6 L113,87.4 Q108,88 105,84 L102,80 Q99,76 100.8,71.3 L104.2,62.7 Q106,58 110.9,58.8 L125.1,61.2 Q130,62 132.5,66.3 Z", stark: true },
      { name: "Mondbein", d: "M106.4,65.3 Q108,70 105.5,74.3 L103.5,77.7 Q101,82 96,82.6 L88,83.4 Q83,84 80.2,79.8 L77.8,76.2 Q75,72 77.2,67.5 L79.8,62.5 Q82,58 87,58 L99,58 Q104,58 105.6,62.7 Z", stark: true },
      { name: "Dreiecksbein", d: "M82.4,65.7 Q85,70 82.8,74.5 L81.2,77.5 Q79,82 74.2,83.4 L69.8,84.6 Q65,86 61.3,82.6 L57.7,79.4 Q54,76 55.7,71.3 L57.3,66.7 Q59,62 64,61.5 L74,60.5 Q79,60 81.6,64.3 Z", stark: true },
      { name: "Großes Vieleckbein", d: "M137.9,93.1 Q141,97 137.8,100.8 L133.2,106.2 Q130,110 125.1,110.9 L117.9,112.1 Q113,113 110,109 L106,104 Q103,100 105,95.4 L108,88.6 Q110,84 114.9,84.8 L129.1,87.2 Q134,88 137.1,91.9 Z" },
      { name: "Kleines Vieleckbein", d: "M111.2,93.4 Q113,97 111.2,100.6 L109.8,103.4 Q108,107 104,107.5 L97,108.5 Q93,109 90.5,105.9 L87.5,102.1 Q85,99 86.3,95.2 L88.7,88.8 Q90,85 94,85.4 L104,86.6 Q108,87 109.8,90.6 Z" },
      { name: "Kopfbein", d: "M91.1,92.4 Q93,97 90.8,101.5 L88.2,106.5 Q86,111 81,111.6 L74,112.4 Q69,113 66,109 L63,105 Q60,101 61.8,96.3 L64.2,89.7 Q66,85 71,85 L83,85 Q88,85 89.9,89.6 Z", stark: true },
      { name: "Hakenbein", d: "M67.3,92.9 Q70,97 68.6,101.8 L67.4,106.2 Q66,111 61.2,112.5 L57.8,113.5 Q53,115 49.5,111.5 L47.5,109.5 Q44,106 45,101.1 L46,96.9 Q47,92 51.9,90.9 L59.1,89.1 Q64,88 66.7,92.1 Z" },
      { name: "1. Mittelhandknochen", d: "M116.5,119.5 L143.6,166 A12,12 0 0 0 164.1,153.6 L135.3,108.1 A11,11 0 0 0 116.5,119.5 Z", stark: true },
      { name: "2. Mittelhandknochen", d: "M91,114.6 L97,198.8 A11,11 0 0 0 118.9,196.7 L108.9,112.9 A9,9 0 0 0 91,114.6 Z" },
      { name: "3. Mittelhandknochen", d: "M69,116 L69,204 A11,11 0 0 0 91,203.5 L87,115.6 A9,9 0 0 0 69,116 Z" },
      { name: "4. Mittelhandknochen", d: "M52,115.2 L44,197 A10,10 0 0 0 64,198.5 L68,116.4 A8,8 0 0 0 52,115.2 Z" },
      { name: "5. Mittelhandknochen", d: "M40.2,112.1 L22.3,185.6 A10,10 0 0 0 41.8,189.9 L55.9,115.5 A8,8 0 0 0 40.2,112.1 Z" },
      { name: "Grundglied des Daumens", d: "M145.7,177.9 L158.7,211.6 A10,10 0 0 0 177.5,204.9 L166.5,170.6 A11,11 0 0 0 145.7,177.9 Z", stark: true },
      { name: "Endglied des Daumens", d: "M161.2,222 L167.2,248 A9,9 0 0 0 184.8,244 L178.8,218 A9,9 0 0 0 161.2,222 Z", stark: true },
      { name: "Grundglied des Zeigefinger", d: "M101.1,213.4 L106.1,245.2 A8,8 0 0 0 122,243.3 L119,211.2 A9,9 0 0 0 101.1,213.4 Z" },
      { name: "Mittelglied des Zeigefinger", d: "M107,254.6 L110.5,292.6 A6.5,6.5 0 0 0 123.5,291.6 L121,253.5 A7,7 0 0 0 107,254.6 Z" },
      { name: "Endglied des Zeigefinger", d: "M111,302.3 L112,320.3 A6,6 0 0 0 124,319.7 L123,301.7 A6,6 0 0 0 111,302.3 Z" },
      { name: "Grundglied des Mittelfinger", d: "M72.4,218.5 L74.4,254.4 A7.6,7.6 0 0 0 89.6,254 L89.6,218 A8.6,8.6 0 0 0 72.4,218.5 Z" },
      { name: "Mittelglied des Mittelfinger", d: "M75.4,264.1 L75.9,304.1 A6.2,6.2 0 0 0 88.1,304.1 L88.6,264.1 A6.7,6.7 0 0 0 75.4,264.1 Z" },
      { name: "Endglied des Mittelfinger", d: "M76.3,314.3 L77.3,332.3 A5.7,5.7 0 0 0 88.7,331.7 L87.7,313.7 A5.7,5.7 0 0 0 76.3,314.3 Z" },
      { name: "Grundglied des Ringfinger", d: "M44.8,211.5 L42.8,243.6 A7.2,7.2 0 0 0 57.1,244.9 L61.1,213 A8.2,8.2 0 0 0 44.8,211.5 Z" },
      { name: "Mittelglied des Ringfinger", d: "M43.7,253.6 L41.2,289.6 A5.8,5.8 0 0 0 52.8,290.6 L56.3,254.6 A6.3,6.3 0 0 0 43.7,253.6 Z" },
      { name: "Endglied des Ringfinger", d: "M41.6,300.3 L42.6,316.3 A5.4,5.4 0 0 0 53.4,315.7 L52.4,299.7 A5.4,5.4 0 0 0 41.6,300.3 Z" },
      { name: "Grundglied des kleinen Fingers", d: "M22.3,200.6 L16.3,234.8 A6.8,6.8 0 0 0 29.6,237.6 L37.6,203.8 A7.8,7.8 0 0 0 22.3,200.6 Z" },
      { name: "Mittelglied des kleinen Fingers", d: "M17.2,244.9 L13.6,263 A5.5,5.5 0 0 0 24.3,265.3 L28.8,247.4 A6,6 0 0 0 17.2,244.9 Z" },
      { name: "Endglied des kleinen Fingers", d: "M13.9,274.4 L14.9,288.4 A5.1,5.1 0 0 0 25.1,287.6 L24.1,273.6 A5.1,5.1 0 0 0 13.9,274.4 Z" }
    ],

    punkte: {
      "D\u00fc 1": [ 14, 282], "D\u00fc 2": [ 24, 200], "D\u00fc 3": [ 26, 176],
      "D\u00fc 4": [ 36, 120], "D\u00fc 5": [ 50,  70], "D\u00fc 6": [ 52,  40],
      "3E 1": [ 42, 298], "3E 2": [ 36, 214], "3E 3": [ 42, 178],
      "3E 4": [ 86,  64], "3E 5": [ 87,  -2], "3E 6": [ 87, -30], "3E 7": [ 66, -28]
    },

    marken: {
      handgelenksfalte_d: { text: "Handgelenksfalte auf dem Handr\u00fccken", l: [ 50,  62, 132,  66] },
      griffel_elle:       { text: "Griffelfortsatz der Elle", p: [ 54,  58] },
      strecksehne:        { text: "Sehne des gemeinsamen Fingerstreckers", l: [ 88,  16,  86,  66] },
      mhk45_d:            { text: "Zwischenraum 4. und 5. Mittelhandknochen", l: [ 42, 166,  50, 124] },
      kleinfinger_gg:     { text: "Grundgelenk des kleinen Fingers", p: [ 32, 188] },
      handkante:          { text: "Ellenseitige Handkante, Rot-Wei\u00df-Grenze", l: [ 26, 120,  20, 240] },
      kleinfinger_uln:    { text: "Ellenseite des kleinen Fingers", l: [ 16, 268,  15, 286] },
      ringfinger_uln:     { text: "Kleinfingerseite des Ringfingers", l: [ 44, 284,  43, 302] },
      finger45:           { text: "Zwischenraum Ring- und kleiner Finger", l: [ 30, 222,  32, 204] },
      elle_rand:          { text: "Rand der Elle", l: [ 60, -30,  56,  30] }
    }
  }

});
