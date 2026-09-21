/* Die zwölf Hauptmeridiane in der Reihenfolge der drei Meridianumläufe.
   Abkürzungen: deutsche Schreibweise (Lu, Di, Ma …) wie im Unterrichtsskript,
   international (LU, LI, ST …) als Zweitkennung.
   Punktzahlen nach WHO-Standardnomenklatur – Summe 309; mit Ren Mai (24)
   und Du Mai (28) ergeben sich die klassischen 361 Punkte. */
window.MeridianKatalog = [
  { umlauf:1, id:"lu", titel:"Lungenmeridian", code:"LU", codeDe:"Lu", name:"Lunge",        han:"肺", channel:"Hand-Taiyin",   element:"Metall", wx:"metall", yin:true,  clock:"03–05", points:11, view:"front", fertig:true  },
  { umlauf:1, id:"li", titel:"Dickdarmmeridian", code:"LI", codeDe:"Di", name:"Dickdarm",     han:"大肠", channel:"Hand-Yangming", element:"Metall", wx:"metall", yin:false, clock:"05–07", points:20, view:"front", fertig:true },
  { umlauf:1, id:"st", titel:"Magenmeridian", code:"ST", codeDe:"Ma", name:"Magen",        han:"胃", channel:"Fuß-Yangming",  element:"Erde",   wx:"erde",   yin:false, clock:"07–09", points:45, view:"front", fertig:true },
  { umlauf:1, id:"sp", titel:"Milzmeridian", code:"SP", codeDe:"MP", name:"Milz",         han:"脾", channel:"Fuß-Taiyin",    element:"Erde",   wx:"erde",   yin:true,  clock:"09–11", points:21, view:"front", fertig:true },

  { umlauf:2, id:"ht", titel:"Herzmeridian", code:"HT", codeDe:"He", name:"Herz",         han:"心", channel:"Hand-Shaoyin",  element:"Feuer",  wx:"feuer",  yin:true,  clock:"11–13", points:9,  view:"front", fertig:true },
  { umlauf:2, id:"si", titel:"Dünndarmmeridian", code:"SI", codeDe:"Dü", name:"Dünndarm",     han:"小肠", channel:"Hand-Taiyang",  element:"Feuer",  wx:"feuer",  yin:false, clock:"13–15", points:19, view:"back",  fertig:true },
  { umlauf:2, id:"bl", titel:"Blasenmeridian", code:"BL", codeDe:"Bl", name:"Blase",        han:"膀胱", channel:"Fuß-Taiyang",   element:"Wasser", wx:"wasser", yin:false, clock:"15–17", points:67, view:"back",  fertig:true },
  { umlauf:2, id:"ki", titel:"Nierenmeridian", code:"KI", codeDe:"Ni", name:"Niere",        han:"肾", channel:"Fuß-Shaoyin",   element:"Wasser", wx:"wasser", yin:true,  clock:"17–19", points:27, view:"front", fertig:true },

  { umlauf:3, id:"pc", titel:"Perikardmeridian", code:"PC", codeDe:"Pe", name:"Perikard",     han:"心包", channel:"Hand-Jueyin",   element:"Feuer",  wx:"feuer",  yin:true,  clock:"19–21", points:9,  view:"front", fertig:true },
  { umlauf:3, id:"te", titel:"Drei-Erwärmer-Meridian", code:"TE", codeDe:"3E", name:"Drei-Erwärmer",han:"三焦", channel:"Hand-Shaoyang", element:"Feuer",  wx:"feuer",  yin:false, clock:"21–23", points:23, view:"back",  fertig:true },
  { umlauf:3, id:"gb", titel:"Gallenblasenmeridian", code:"GB", codeDe:"Gb", name:"Gallenblase",  han:"胆", channel:"Fuß-Shaoyang",  element:"Holz",   wx:"holz",   yin:false, clock:"23–01", points:44, view:"side",  fertig:false },
  { umlauf:3, id:"lr", titel:"Lebermeridian", code:"LR", codeDe:"Le", name:"Leber",        han:"肝", channel:"Fuß-Jueyin",    element:"Holz",   wx:"holz",   yin:true,  clock:"01–03", points:14, view:"front", fertig:false }
];
