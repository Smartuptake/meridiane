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
  }

});
