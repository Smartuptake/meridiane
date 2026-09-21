/* Die fünf Wandlungsphasen und die Organuhr.
   Gilt für alle zwölf Meridiane und liegt deshalb hier, nicht in den Organdatensätzen. */

window.Wandlungsphasen = {
  /* Reihenfolge des nährenden Zyklus (Sheng): Holz nährt Feuer nährt Erde … */
  reihenfolge: ["holz", "feuer", "erde", "metall", "wasser"],

  /* Kontrollzyklus (Ke): wer bändigt wen */
  kontrolle: { holz: "erde", erde: "wasser", wasser: "feuer", feuer: "metall", metall: "holz" },

  phasen: {
    holz: {
      name: "Holz", han: "木", pinyin: "mù",
      zang: "Leber", fu: "Gallenblase",
      farbe: "grün", jahreszeit: "Frühling", sinnesorgan: "Augen",
      geschmack: "sauer", richtung: "Osten",
      klima: "Wind", gewebe: "Sehnen und Bänder", klang: "Rufen", geist: "Hun 魂, Wanderseele",
      positiv: "Güte, Nachsicht, Entschlusskraft, Weitblick, Fähigkeit zu planen",
      negativ: "Zorn, Wut, Gereiztheit, Ungeduld, Frustration bei Stagnation",
      hex: "#4E7A4B", hell: "#E6EDE4",
      symbolName: "Spross",
      symbol: "M12 21V9 M12 14c-3.4 0-5.6-2.4-5.6-5.6C9.8 8.4 12 10.6 12 14 M12 11.6c3.1 0 5.1-2.2 5.1-5.1-2.9 0-5.1 2-5.1 5.1"
    },
    feuer: {
      name: "Feuer", han: "火", pinyin: "huǒ",
      zang: "Herz", fu: "Dünndarm",
      farbe: "rot", jahreszeit: "Sommer", sinnesorgan: "Zunge",
      geschmack: "bitter", richtung: "Süden",
      klima: "Hitze", gewebe: "Blutgefäße", klang: "Lachen", geist: "Shen 神, Geist",
      positiv: "Freude, Herzlichkeit, Begeisterung, Klarheit des Geistes, Verbundenheit",
      negativ: "Übererregung, Hektik, Schreck, innere Unruhe, Freudlosigkeit",
      hex: "#D32727", hell: "#F8E4E3",
      symbolName: "Flamme",
      symbol: "M12 2.8c3.4 4.3 4.9 6.7 4.9 9.9a4.9 4.9 0 0 1-9.8 0c0-3.2 1.7-5.4 4.9-9.9Z M12 12.6c1.3 1.6 1.9 2.5 1.9 3.6a1.9 1.9 0 0 1-3.8 0c0-1.1.7-2.1 1.9-3.6Z"
    },
    erde: {
      name: "Erde", han: "土", pinyin: "tǔ",
      zang: "Milz", fu: "Magen",
      farbe: "gelb", jahreszeit: "Spätsommer und die Übergänge zwischen den Jahreszeiten",
      sinnesorgan: "Mund und Lippen",
      geschmack: "süß", richtung: "Mitte",
      klima: "Feuchtigkeit", gewebe: "Muskeln und Fleisch", klang: "Singen", geist: "Yi 意, Absicht",
      positiv: "Mitgefühl, Fürsorge, Verlässlichkeit, Gelassenheit, Sammlung",
      negativ: "Grübeln, Sorge, Sich-Verlieren im Denken, übermäßiges Umsorgen",
      hex: "#BE8526", hell: "#F5ECDC",
      symbolName: "Berge",
      symbol: "M2.6 18.4h18.8 M2.6 18.4 8.4 9.6 12 14.6l3.4-4.6 5.4 8.8"
    },
    metall: {
      name: "Metall", han: "金", pinyin: "jīn",
      zang: "Lunge", fu: "Dickdarm",
      farbe: "weiß", jahreszeit: "Herbst", sinnesorgan: "Nase",
      geschmack: "scharf", richtung: "Westen",
      klima: "Trockenheit", gewebe: "Haut und Körperhaar", klang: "Weinen", geist: "Po 魄, Körperseele",
      positiv: "Mut, Aufrichtigkeit, Würde, Klarheit, die Fähigkeit loszulassen",
      negativ: "Trauer, Kummer, Schwermut, Rückzug, Verhärtung",
      hex: "#8C9296", hell: "#F1F3F3",
      symbolName: "Glocke",
      symbol: "M6.6 16.2v-4.3a5.4 5.4 0 0 1 10.8 0v4.3l1.5 2.2H5.1ZM12 6.5V4.2M10.3 18.4a1.7 1.7 0 0 0 3.4 0"
    },
    wasser: {
      name: "Wasser", han: "水", pinyin: "shuǐ",
      zang: "Niere", fu: "Blase",
      farbe: "schwarz, dunkelblau", jahreszeit: "Winter", sinnesorgan: "Ohren",
      geschmack: "salzig", richtung: "Norden",
      klima: "Kälte", gewebe: "Knochen und Mark", klang: "Stöhnen", geist: "Zhi 志, Wille",
      positiv: "Willenskraft, Ausdauer, Vertrauen, Weisheit, Sanftmut",
      negativ: "Angst, Furcht, Schreck, Misstrauen, Erschöpfung",
      hex: "#2E4160", hell: "#E3E7EE",
      symbolName: "Welle",
      symbol: "M3 10c2.4-2.4 4.4-2.4 6.8 0s4.4 2.4 6.8 0c1.4-1.4 2.8-1.8 3.9-1.2 M3 15.4c2.4-2.4 4.4-2.4 6.8 0s4.4 2.4 6.8 0c1.4-1.4 2.8-1.8 3.9-1.2"
    }
  },

  /* Reihenfolge der Zuordnungen in der Tafel */
  merkmale: [
    { k: "farbe", label: "Farbe" },
    { k: "jahreszeit", label: "Jahreszeit" },
    { k: "sinnesorgan", label: "Sinnesorgan" },
    { k: "geschmack", label: "Geschmack" },
    { k: "richtung", label: "Richtung" },
    { k: "positiv", label: "Positive Emotionen" },
    { k: "negativ", label: "Negative Emotionen" }
  ]
};

/* Die chinesische Organuhr: je zwei Stunden Maximalzeit eines Meridians. */
window.Organuhr = [
  { id: "lu", codeDe: "Lu", name: "Lunge",         von: 3,  wx: "metall" },
  { id: "li", codeDe: "Di", name: "Dickdarm",      von: 5,  wx: "metall" },
  { id: "st", codeDe: "Ma", name: "Magen",         von: 7,  wx: "erde" },
  { id: "sp", codeDe: "MP", name: "Milz",          von: 9,  wx: "erde" },
  { id: "ht", codeDe: "He", name: "Herz",          von: 11, wx: "feuer" },
  { id: "si", codeDe: "Dü", name: "Dünndarm",      von: 13, wx: "feuer" },
  { id: "bl", codeDe: "Bl", name: "Blase",         von: 15, wx: "wasser" },
  { id: "ki", codeDe: "Ni", name: "Niere",         von: 17, wx: "wasser" },
  { id: "pc", codeDe: "Pe", name: "Perikard",      von: 19, wx: "feuer" },
  { id: "te", codeDe: "3E", name: "Drei-Erwärmer", von: 21, wx: "feuer" },
  { id: "gb", codeDe: "Gb", name: "Gallenblase",   von: 23, wx: "holz" },
  { id: "lr", codeDe: "Le", name: "Leber",         von: 1,  wx: "holz" }
];
