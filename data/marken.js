/* Anatomische Marken auf den drei Figuren
   =======================================
   Die Lageangaben der Punkte reden von Dingen, die man auf der Haut
   nicht sieht: von der Sehne des ellenseitigen Handbeugers, vom
   Erbsenbein, vom Zwischenraum zwischen zweitem und drittem
   Mittelfußknochen. Hier stehen diese Marken als Strecken und Kreuze
   in Figurenkoordinaten. Die Detailabbildung zeichnet sie ein und
   schreibt ihren Namen darunter.

   Eine Marke steht einmal da und wird von jedem Punkt, der sie
   braucht, beim Namen genannt – marken:["innenknoechel", …].

     l: [x1,y1,x2,y2]   eine Strecke, etwa eine Falte oder eine Sehne
     p: [x,y]           eine Stelle, etwa ein Knochenvorsprung

   Alle Zahlen stammen aus den Messungen in data/landmarken.js. Wo
   eine Marke von vorn nicht zu sehen ist, sagt ihr Name das.

   Dies ist der erste Schritt: Beschriftung auf dem Foto. Der zweite
   sind eigene Skelettzeichnungen für Hand und Fuß. */
Meridian.marken({

  front: {

    /* --- Fuß, rechter Fuß, stark verkürzt --- */
    zehe12:      { text: "Zwischenraum 1. und 2. Zehe", l: [361, 1094, 361, 1116] },
    zehe23:      { text: "Zwischenraum 2. und 3. Zehe", l: [349, 1096, 349, 1116] },
    zehe34:      { text: "Zwischenraum 3. und 4. Zehe", l: [339, 1098, 339, 1116] },
    grosszehe:   { text: "Innenrand der Großzehe, Rot-Weiß-Grenze", l: [383, 1102, 377, 1118] },
    zehe2:       { text: "Außenrand der zweiten Zehe", l: [350, 1104, 350, 1118] },
    ballen1:     { text: "Grundgelenk der Großzehe", p: [385, 1098] },
    kahnbein:    { text: "Höcker des Kahnbeins", p: [395, 1072] },
    mfk12:       { text: "Zwischenraum 1. und 2. Mittelfußknochen", l: [371, 1090, 366, 1070] },
    mfk23:       { text: "Zwischenraum 2. und 3. Mittelfußknochen", l: [353, 1092, 359, 1072] },
    mfk45:       { text: "Zwischenraum 4. und 5. Mittelfußknochen", l: [335, 1092, 342, 1074] },
    fussrand_med:{ text: "Innenrand des Fußes, Rot-Weiß-Grenze", l: [390, 1058, 385, 1100] },

    /* --- Knöchel --- */
    innenknoechel:  { text: "Spitze des Innenknöchels", p: [392, 1042] },
    aussenknoechel: { text: "Spitze des Außenknöchels", p: [354, 1050] },
    knoechelspalte: { text: "Knöchelspalte", l: [357, 1046, 390, 1051] },
    tibialis:       { text: "Sehne des vorderen Schienbeinmuskels", l: [377, 1018, 381, 1048] },
    achillessehne:  { text: "Achillessehne – liegt hinter dem Knöchel", l: [396, 1004, 398, 1038] },
    ferse:          { text: "Innerer Höcker des Fersenbeins – liegt hinten", p: [396, 1064] },

    /* --- Unterschenkel --- */
    tibiakante:     { text: "Schienbeinkante", l: [367, 862, 376, 988] },
    tibia_hinten:   { text: "Hinterrand des Schienbeins", l: [390, 890, 386, 996] },
    wadenbeinkopf:  { text: "Köpfchen des Wadenbeins", p: [344, 854] },
    wadenbein_vorn: { text: "Vorderrand des Wadenbeins", l: [350, 900, 356, 1000] },

    /* --- Knie --- */
    patella_oben:   { text: "Oberrand der Kniescheibe", l: [356, 802, 380, 802] },
    patella_unten:  { text: "Unterrand der Kniescheibe", l: [358, 821, 379, 821] },
    knieauge_lat:   { text: "Äußeres Knieauge", p: [354, 827] },
    kniespalt:      { text: "Kniegelenksspalt", l: [340, 827, 400, 827] },
    condylus_med:   { text: "Innerer Knorren des Schienbeins", p: [399, 838] },
    vastus_med:     { text: "Innerer Schenkelmuskel", p: [398, 772] },

    /* --- Rumpf --- */
    mittellinie:    { text: "Vordere Mittellinie", l: [437, 300, 437, 560] },
    nabel:          { text: "Nabel", p: [437, 436] },
    brustbeinwinkel:{ text: "Brustbeinwinkel", l: [424, 354, 450, 354] },
    schambein:      { text: "Oberrand des Schambeins – unter der Hose", l: [423, 560, 451, 560] },
    brustwarze:     { text: "Brustwarze", p: [370, 310] },
    schluesselbein: { text: "Unterrand des Schlüsselbeins", l: [360, 226, 420, 240] },
    drosselgrube:   { text: "Drosselgrube", p: [437, 232] },
    leiste:         { text: "Leistenbeuge", l: [400, 548, 424, 572] },

    /* --- Hand, rechte Hand, Handfläche nach vorn --- */
    handgelenksfalte: { text: "Distale Handgelenksbeugefalte", l: [193, 527, 222, 534] },
    erbsenbein:       { text: "Erbsenbein", p: [229, 532] },
    fcu:              { text: "Sehne des ellenseitigen Handbeugers", l: [234, 506, 228, 530] },
    zwei_sehnen:      { text: "Die beiden Sehnen in der Mitte des Handgelenks",
                        l: [206, 508, 213, 530] },
    speichenarterie:  { text: "Speichenschlagader", l: [205, 506, 200, 526] },
    griffel_speiche:  { text: "Griffelfortsatz der Speiche", p: [198, 518] },
    daumenballen:     { text: "Daumenballen", p: [178, 550] },
    daumen_rad:       { text: "Speichenseite des Daumens", l: [142, 552, 139, 564] },
    daumensehnen:     { text: "Sehnen der Daumenstrecker", l: [195, 512, 206, 530] },
    mhk12:            { text: "Zwischenraum 1. und 2. Mittelhandknochen", l: [166, 552, 158, 572] },
    mhk23:            { text: "Zwischenraum 2. und 3. Mittelhandknochen", l: [180, 556, 172, 578] },
    mhk45:            { text: "Zwischenraum 4. und 5. Mittelhandknochen", l: [206, 560, 200, 582] },
    zeigefinger_gg:   { text: "Grundgelenk des Zeigefingers", p: [158, 578] },
    zeigefinger_rad:  { text: "Speichenseite des Zeigefingers", l: [147, 602, 144, 616] },
    kleinfinger_rad:  { text: "Speichenseite des kleinen Fingers", l: [196, 602, 193, 618] },
    mittelfinger:     { text: "Spitze des Mittelfingers", p: [160, 630] },

    /* --- Unterarm und Ellenbogen --- */
    ellenbeuge:     { text: "Ellenbeugefalte", l: [247, 409, 292, 432] },
    bizepssehne:    { text: "Sehne des zweiköpfigen Oberarmmuskels", l: [272, 406, 268, 430] },
    epicond_med:    { text: "Innerer Oberarmknorren", p: [296, 424] },
    epicond_lat:    { text: "Äußerer Oberarmknorren", p: [242, 418] },
    speiche_rand:   { text: "Speichenseitiger Rand des Unterarms", l: [232, 460, 210, 510] },
    achselfalte_v:  { text: "Vordere Achselfalte", l: [316, 332, 332, 346] },
    bizeps_innen:   { text: "Rinne innen neben dem Bizeps", l: [304, 370, 296, 400] },

    /* --- Kopf --- */
    pupille:        { text: "Pupille", p: [419, 98] },
    orbitarand:     { text: "Unterer Rand der Augenhöhle", l: [408, 105, 430, 105] },
    nasenfluegel:   { text: "Rand des Nasenflügels", l: [449, 120, 450, 130] },
    mundwinkel:     { text: "Mundwinkel", p: [427, 141] },
    kieferwinkel:   { text: "Kieferwinkel", p: [393, 133] },
    kaumuskel:      { text: "Kaumuskel", p: [408, 128] },
    haaransatz_ecke:{ text: "Ecke des Stirnhaaransatzes", p: [404, 62] },
    rippe11_v:      { text: "Freies Ende der elften Rippe", p: [358, 412] },
    projektion:     { text: "Liegt auf der anderen Seite und ist hier nur angedeutet" }
  },

  back: {
    /* --- Hand von hinten: die Daumenseite liegt jetzt rechts --- */
    handgelenksfalte_d: { text: "Handgelenksfalte auf dem Handrücken", l: [648, 527, 684, 516] },
    griffel_elle:       { text: "Griffelfortsatz der Elle", p: [643, 512] },
    strecksehne:        { text: "Sehne des gemeinsamen Fingerstreckers", l: [668, 500, 664, 522] },
    mhk45_d:            { text: "Zwischenraum 4. und 5. Mittelhandknochen", l: [676, 560, 682, 578] },
    kleinfinger_gg:     { text: "Grundgelenk des kleinen Fingers", p: [672, 570] },
    handkante:          { text: "Ellenseitige Handkante, Rot-Weiß-Grenze", l: [656, 536, 672, 574] },
    kleinfinger_uln:    { text: "Ellenseite des kleinen Fingers", l: [676, 600, 674, 616] },
    ringfinger_uln:     { text: "Kleinfingerseite des Ringfingers", l: [692, 604, 690, 618] },
    finger45:           { text: "Zwischenraum Ring- und kleiner Finger", l: [686, 578, 686, 596] },

    /* --- Ellenbogen von hinten --- */
    olekranon:      { text: "Ellenbogenhöcker", p: [605, 422] },
    epicond_med_h:  { text: "Innerer Oberarmknorren", p: [580, 415] },
    ulnarrinne:     { text: "Rinne des Ellennervs", l: [586, 408, 594, 428] },
    elle_rand:      { text: "Rand der Elle", l: [600, 450, 634, 500] },

    /* --- Rücken --- */
    wirbelrinne:    { text: "Wirbelsäulenrinne", l: [436, 220, 436, 500] },
    c7:             { text: "Siebter Halswirbel", p: [436, 207] },
    t7:             { text: "Siebter Brustwirbel", p: [436, 313] },
    l4:             { text: "Vierter Lendenwirbel – auf Höhe des Darmbeinkamms", p: [436, 450] },
    schulterblatt:  { text: "Innenrand des Schulterblatts, 3 Cun neben der Mitte", l: [473, 250, 473, 330] },
    darmbeinkamm:   { text: "Darmbeinkamm", l: [455, 452, 505, 462] },
    kreuzbein:      { text: "Kreuzbein", p: [444, 503] },

    /* --- Bein von hinten --- */
    kniekehle:      { text: "Kniekehlenfalte", l: [478, 800, 528, 800] },
    wade:           { text: "Unteres Ende der Wadenmuskelbäuche", p: [504, 925] },
    aussenknoechel_h:{ text: "Spitze des Außenknöchels", p: [518, 1050] },
    achillessehne_h:{ text: "Achillessehne", l: [505, 1010, 507, 1046] },
    mfk5:           { text: "Höcker des fünften Mittelfußknochens", p: [536, 1078] },
    fussrand_lat:   { text: "Außenrand des Fußes, Rot-Weiß-Grenze", l: [524, 1064, 534, 1090] },
    gesaessfalte:   { text: "Gesäßfalte – unter der Hose", l: [462, 600, 522, 600] },
    achselfalte_h:  { text: "Hintere Achselfalte", l: [528, 330, 544, 344] },
    nackenhaaransatz:{ text: "Hinterer Haaransatz", l: [416, 166, 456, 166] },
    akromion:       { text: "Äußeres Ende des Schulterdachs", p: [556, 268] },
    ohrlaeppchen:   { text: "Ohrläppchen", p: [466, 128] },
    scheitel:       { text: "Scheitel, auf der Linie zwischen den Ohrspitzen",
                      l: [418, 42, 458, 42] },
    projektion:     { text: "Liegt vorn im Gesicht und ist hier nur angedeutet" }
  },

  side: {
    aussenknoechel_s: { text: "Spitze des Außenknöchels", p: [467, 1050] },
    wadenbein_s:      { text: "Vorderrand des Wadenbeins", l: [452, 900, 456, 1000] },
    wadenbeinkopf_s:  { text: "Köpfchen des Wadenbeins", p: [452, 852] },
    kniespalt_s:      { text: "Kniegelenksspalt", l: [420, 827, 470, 827] },
    trochanter:       { text: "Großer Rollhügel – unter der Hose", p: [462, 540] },
    rippe11:          { text: "Freies Ende der elften Rippe", p: [438, 398] },
    rippe12:          { text: "Freies Ende der zwölften Rippe", p: [448, 404] },
    zehe45_s:         { text: "Zwischenraum 4. und 5. Zehe", l: [352, 1064, 352, 1080] },
    mfk45_s:          { text: "Zwischenraum 4. und 5. Mittelfußknochen", l: [396, 1052, 402, 1068] },
    ohrspitze:        { text: "Ohrspitze", p: [436, 96] },
    augenwinkel:      { text: "Äußerer Augenwinkel", p: [388, 98] },
    augenbraue:       { text: "Augenbraue", l: [368, 88, 392, 86] },
    ohr_vorne:        { text: "Vertiefung vor dem Ohr", p: [424, 124] },
    haaransatz_s:     { text: "Hinterer Haaransatz", l: [450, 150, 470, 152] },
    schulterhoehe:    { text: "Höchste Stelle des Schultermuskels", l: [452, 206, 492, 208] },
    rippe7_s:         { text: "Siebter Zwischenrippenraum", l: [370, 361, 398, 361] },
    mittelfinger_s:   { text: "Im Stehen zeigt die Spitze des Mittelfingers hierher",
                        p: [432, 645] },
    projektion:       { text: "Liegt auf der Gegenseite und ist hier nur angedeutet" }
  }
});
