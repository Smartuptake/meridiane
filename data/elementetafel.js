/* Die Fünf-Elemente-Ernährungstafel
   =================================
   Aus 20-Literatur/Diätetik-5-Elemente-Ernährungstabelle.docx, Stefans
   eigener Tafel: fünf Temperaturstufen über fünf Wandlungsphasen, in
   jedem Feld Beispiele.

   Beim Übernehmen wurden nur Trennfehler geheilt, die beim Kopieren aus
   dem Textprogramm entstanden waren – »FEUERRadicchio«, »Früh-
   lingszwiebel«, »SpirulinaOliven« und ähnliche. Kein Wort wurde
   hinzugefügt und keines weggenommen.

   Die Tafel nennt die vierte Stufe »erfrischend«; in der
   Nahrungsmittelliste heißt dieselbe Stufe »kühl«. Gemeint ist das
   Gleiche. */
window.Elementetafel = {
  quelle: "20-Literatur/Diätetik-5-Elemente-Ernährungstabelle.docx",

  /* Je ein Beispiel, an dem sich die Phase merken lässt */
  merkbild: {
    holz:   { was: "Limette",  text: "sauer im Geschmack, grüne Farbe, wirkt zusammenziehend" },
    feuer:  { was: "Radicchio", text: "schmeckt leicht bitter, rote Farbe, wirkt leicht ausleitend" },
    erde:   { was: "Mais",     text: "leicht süßlicher Geschmack, gelbe Farbe, wirkt befeuchtend" },
    metall: { was: "Pfeffer",  text: "scharf, rund, weiß, und öffnet die Poren" },
    wasser: { was: "Oliven",   text: "salziger Geschmack, fast schwarze Farbe, können abführend wirken" }
  },

  stufen: [
    { k: "heiss", name: "Heiß", felder: {
      holz: "",
      feuer: "alle gegrillten Fleischsorten, Bitterliköre und bitterer Alkohol (zum Beispiel Campari), Glühwein",
      erde: "Fenchelsamen, Fencheltee",
      metall: "alle scharfen Gewürze – Pfeffer, Chili, Tabasco –, scharfer Alkohol, Yogitee, Zimt",
      wasser: "" } },

    { k: "warm", name: "Warm", felder: {
      holz: "Grünkern, Huhn, Essig, Petersilie, Bärlauch, Kirschsaft, Kapern",
      feuer: "Lamm, Ziege, Schaf, Schafs- und Ziegenkäse und -milch, fast alle frischen Küchenkräuter, Kurkuma, Rosenpaprika, Wacholderbeeren, Kakao ohne Zucker, Mohn, Kaffee, Rotwein, alle leicht bitteren Kräutertees",
      erde: "Amarant, Quinoa, Fenchel, Kürbis, Süßkartoffel, Aprikose, Pfirsich, Süßkirsche, Rosinen, Kokos, Vanille, Pistazien, Walnüsse, Pinien- und Kürbiskerne, Leinsamen, Sonnenblumenkerne, Walnussöl, Likör und Dessertweine, Kamillentee",
      metall: "Wildfleisch, Hafer, Lauch, Frühlingszwiebel, Meerrettich, Knoblauch und Schnittlauch, rohe Zwiebel, scharfe Käsesorten wie Harzer oder Schimmelkäse, fast alle leicht scharfen Gewürze wie Dill, Ingwer, Lorbeer, Senf, Muskat, Nelke, Koriander, Kümmel, Kardamom, Gewürztees",
      wasser: "Aal, Forelle, Lachs, Sardelle, Scholle, Krustentiere, Muscheln, alle geräucherten Fischsorten" } },

    { k: "neutral", name: "Neutral", felder: {
      holz: "Kaninchen, Erdbeere, Himbeere, Brombeere, Quark",
      feuer: "Roggen, Rosenkohl, rote Beete, Bittermandel, Kerbel, Majoran, heißes Wasser",
      erde: "Rind- und Kalbfleisch, Mais, Grieß, Graupen, Gemüse das in der Erde wächst, Kohl, Busch- und Stangenbohnen, Erbsen, Pflaumen, Avocado, Trauben, Papaya, Eier, Butter, Margarine, Kuhmilchprodukte, Honig, Zucker, Malz, die meisten Nusssorten, Sesam, Mandeln, Datteln, Feigen, die meisten Pilzsorten, Erdnussöl, Safran, Süßholz, alle Süßungsmittel, Malzbier",
      metall: "Gans, Pute, Truthahn, Reis",
      wasser: "Schweinefleisch, Speck, roher Schinken, Karpfen, Hering, Makrele, Sardine, Tunfisch und die restlichen Fischsorten, Hülsenfrüchte wie Linsen, Soja-, Sau- oder Kidneybohne" } },

    { k: "kuehl", name: "Erfrischend", felder: {
      holz: "Dinkel, Weizen, Sauerteig, Hefe, Ente, Kefir, Buttermilch, Frischkäse, saure Sahne, Joghurt, Sauerkraut, Sprossen, saure Äpfel und Beerenfrüchte, Orangen, Ananas, Mandarinen, Zitrone, Limette, Hagebutte, Sauerkirschen, unreifes Obst, helles Bier, Weißwein, Cidre, Sekt, Prosecco, Champagner, säuerliche Früchte- und Kräutertees",
      feuer: "Endivien, Löwenzahn und alle leicht bitteren Salate, Holunder, Pampelmuse, Quitte, Salbei, Borretsch, dunkles Bier, Getreidekaffee, Buchweizen, Artischocke, Joghurt aus Ziegenmilch",
      erde: "Gerste, Hirse, Weizenkleie, Chinakohl, Mangold, Champignons, Aubergine, Paprika, Sellerie, Spargel, Blumenkohl, Spinat, Brokkoli, Zucchini, Estragon, die meisten süßen Obstsorten, Sojaprodukte, die meisten Ölsorten, Frucht- und Gemüsesaft",
      metall: "Kohlrabi, Kresse, Brunnenkresse, Radieschen, Rettich, Pfefferminztee",
      wasser: "Tintenfisch, Kichererbse, Süßwasseralgen wie Chlorella, AFA oder Spirulina, Oliven, Mungbohne, Austern, Brennesseltee" } },

    { k: "kalt", name: "Kalt", felder: {
      holz: "Tomate, Sauerampfer; möglichst nur im Sommer: Kiwi, Kaki, Karambole, Rhabarber",
      feuer: "grüner Tee, schwarzer Tee, Pils, Wermut",
      erde: "nur im Sommer: Gurke, Wassermelone, Banane, Mango",
      metall: "",
      wasser: "Salz, Sojasauce, Mineralwasser, Quellwasser, Wasser ohne Kohlensäure, Meeresalgen, Kaviar" } }
  ]
};
