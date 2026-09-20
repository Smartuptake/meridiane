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
      negativ: "Zorn, Wut, Gereiztheit, Ungeduld, Frustration bei Stagnation"
    },
    feuer: {
      name: "Feuer", han: "火", pinyin: "huǒ",
      zang: "Herz", fu: "Dünndarm",
      farbe: "rot", jahreszeit: "Sommer", sinnesorgan: "Zunge",
      geschmack: "bitter", richtung: "Süden",
      klima: "Hitze", gewebe: "Blutgefäße", klang: "Lachen", geist: "Shen 神, Geist",
      positiv: "Freude, Herzlichkeit, Begeisterung, Klarheit des Geistes, Verbundenheit",
      negativ: "Übererregung, Hektik, Schreck, innere Unruhe, Freudlosigkeit"
    },
    erde: {
      name: "Erde", han: "土", pinyin: "tǔ",
      zang: "Milz", fu: "Magen",
      farbe: "gelb", jahreszeit: "Spätsommer und die Übergänge zwischen den Jahreszeiten",
      sinnesorgan: "Mund und Lippen",
      geschmack: "süß", richtung: "Mitte",
      klima: "Feuchtigkeit", gewebe: "Muskeln und Fleisch", klang: "Singen", geist: "Yi 意, Absicht",
      positiv: "Mitgefühl, Fürsorge, Verlässlichkeit, Gelassenheit, Sammlung",
      negativ: "Grübeln, Sorge, Sich-Verlieren im Denken, übermäßiges Umsorgen"
    },
    metall: {
      name: "Metall", han: "金", pinyin: "jīn",
      zang: "Lunge", fu: "Dickdarm",
      farbe: "weiß", jahreszeit: "Herbst", sinnesorgan: "Nase",
      geschmack: "scharf", richtung: "Westen",
      klima: "Trockenheit", gewebe: "Haut und Körperhaar", klang: "Weinen", geist: "Po 魄, Körperseele",
      positiv: "Mut, Aufrichtigkeit, Würde, Klarheit, die Fähigkeit loszulassen",
      negativ: "Trauer, Kummer, Schwermut, Rückzug, Verhärtung"
    },
    wasser: {
      name: "Wasser", han: "水", pinyin: "shuǐ",
      zang: "Niere", fu: "Blase",
      farbe: "schwarz, dunkelblau", jahreszeit: "Winter", sinnesorgan: "Ohren",
      geschmack: "salzig", richtung: "Norden",
      klima: "Kälte", gewebe: "Knochen und Mark", klang: "Stöhnen", geist: "Zhi 志, Wille",
      positiv: "Willenskraft, Ausdauer, Vertrauen, Weisheit, Sanftmut",
      negativ: "Angst, Furcht, Schreck, Misstrauen, Erschöpfung"
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
