/* Zwei Schaubilder für die Qi-Fluss-Seite:
   1. alle Leitbahnen auf einer Figur, in den Farben ihrer
      Wandlungsphase – die beiden unpaarigen Gefäße in Tusche;
   2. der große Umlauf als Kette aus zwölf Stationen in drei Reihen.
   Beide greifen auf dieselben Quellen zu wie die Einzeltafeln:
   data/*.js für die Verläufe, data/wandlungsphasen.js für Farbe und
   Symbol. Nichts wird hier ein zweites Mal beschrieben. */
(function (global) {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";
  var TUSCHE = "#1F1D1B", STEIN = "#736C63", KIESEL = "#A39B90",
      HAARLINIE = "#DCD5C9", PAPIER = "#F7F4EE", PAPIERHELL = "#F2EDE4", WEISS = "#FFFFFF";
  /* Kaiti vorn, damit auch chinesische Zeichen in SVG-Text richtig stehen */
  var LATO = '"LXGW WenKai TC", "Lato", Arial, "Kaiti SC", sans-serif';
  var CORMORANT = '"LXGW WenKai TC", "Cormorant Garamond", Garamond, "Kaiti SC", serif';

  function el(t, a) { var e = document.createElementNS(NS, t); for (var k in a) e.setAttribute(k, a[k]); return e; }
  function txt(x, y, s, o) {
    o = o || {};
    var t = el("text", { x: x, y: y, "text-anchor": o.anchor || "middle",
      fill: o.fill || TUSCHE, "font-family": o.family || LATO,
      "font-size": o.size || 14, "font-weight": o.weight || 400,
      "letter-spacing": o.track || 0 });
    t.textContent = s; return t;
  }
  function phase(k) {
    var P = (global.Wandlungsphasen || {}).phasen || {};
    return P[k] || { hex: TUSCHE, hell: PAPIERHELL, name: "", symbol: "" };
  }

  /* ---------- 1. Alle Leitbahnen auf einer Figur ---------- */
  /* ansicht: "front", "back" oder "side" */
  function bahnen(svg, ansicht, imgBase) {
    var W = Meridian.W, H = Meridian.H;
    var liste = (global.MeridianKatalog || []).filter(function (m) {
      return m.view === ansicht && Meridian.get(m.id);
    });

    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "Alle Leitbahnen der Ansicht " + ansicht +
      ", eingefärbt nach ihrer Wandlungsphase.");
    svg.innerHTML = "";

    var bild = el("image", { href: (imgBase || "img/") + ansicht + ".png",
      x: 0, y: 0, width: W, height: H, preserveAspectRatio: "xMidYMid meet" });
    bild.style.filter = "saturate(.7) contrast(.94)";
    svg.appendChild(bild);

    function zeichne(host, d, farbe, breite, deckung) {
      /* Schmaler Saum in Papier, damit die Linie auf der Haut lesbar
         bleibt. Bei vielen Leitbahnen zugleich darf er nicht breit sein,
         sonst wirkt die ganze Figur milchig. */
      host.appendChild(el("path", { d: d, fill: "none", stroke: PAPIER,
        "stroke-width": breite + 1.8, "stroke-linecap": "round", opacity: ".45" }));
      host.appendChild(el("path", { d: d, fill: "none", stroke: farbe,
        "stroke-width": breite, "stroke-linecap": "round", opacity: deckung }));
    }

    /* Erst die Gegenseiten, damit sie hinter den Hauptbahnen liegen */
    var gSpiegel = el("g", { transform: "translate(" + W + ",0) scale(-1,1)", opacity: ".5" });
    var gBahn = el("g", {});
    var gPunkt = el("g", {});

    liste.forEach(function (m) {
      var d = Meridian.get(m.id);
      var farbe = m.wx ? phase(m.wx).hex : TUSCHE;
      var breite = m.umlauf === 4 ? 3.2 : 2.7;
      var pfad = Meridian.spline(d.path);
      zeichne(gBahn, pfad, farbe, breite, 1);
      if (d.zweig) zeichne(gBahn, Meridian.spline(d.zweig), farbe, breite - .6, 1);
      if (d.mirror !== false) {
        zeichne(gSpiegel, pfad, farbe, breite - .4, 1);
        if (d.zweig) zeichne(gSpiegel, Meridian.spline(d.zweig), farbe, breite - 1, 1);
      }
      d.points.forEach(function (p) {
        gPunkt.appendChild(el("circle", { cx: p.x, cy: p.y, r: 2.4,
          fill: farbe, stroke: WEISS, "stroke-width": .9 }));
        if (d.mirror !== false) {
          gSpiegel.appendChild(el("circle", { cx: p.x, cy: p.y, r: 2, fill: farbe }));
        }
      });
    });

    svg.appendChild(gSpiegel);
    svg.appendChild(gBahn);
    svg.appendChild(gPunkt);
    return liste;
  }

  /* Legende zu einer Ansicht: welche Leitbahn in welcher Farbe */
  function bahnenLegende(host, ansicht) {
    host.innerHTML = "";
    (global.MeridianKatalog || []).filter(function (m) { return m.view === ansicht; })
      .forEach(function (m) {
        var ph = m.wx ? phase(m.wx) : { hex: TUSCHE, hell: PAPIERHELL };
        var li = document.createElement("li");
        var s = document.createElement("span");
        s.className = "bahn-punkt";
        s.style.background = ph.hex;
        var a = document.createElement("a");
        a.href = "meridian.html?m=" + m.id;
        a.textContent = m.codeDe + " " + m.name;
        li.appendChild(s); li.appendChild(a);
        host.appendChild(li);
      });
  }

  /* ---------- 2. Der große Umlauf ---------- */
  var UMLAUF = [
    { nr: 1, kette: ["lu", "li", "st", "sp"] },
    { nr: 2, kette: ["ht", "si", "bl", "ki"] },
    { nr: 3, kette: ["pc", "te", "gb", "lr"] }
  ];
  /* In jedem Umlauf immer dieselbe Folge von Treffpunkten */
  var TREFF = ["Hand", "Kopf", "Fuß"];

  function umlauf(svg, basis) {
    basis = basis || "";
    var K = global.MeridianKatalog || [];
    function eintrag(id) { return K.filter(function (m) { return m.id === id; })[0]; }

    var BX = 190, BY = 86, X = [70, 310, 550, 790], Y = [100, 290, 480];
    svg.setAttribute("viewBox", "0 0 1040 646");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label",
      "Der große Umlauf: zwölf Leitbahnen in drei Umläufen zu je vier, " +
      "jeder Umlauf beginnt und endet in der Brust.");
    svg.innerHTML = "";

    var defs = el("defs", {});
    defs.innerHTML =
      '<marker id="qfPfeil" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5.5" ' +
      'markerHeight="5.5" orient="auto-start-reverse">' +
      '<path d="M0,1 L9,5 L0,9 z" fill="' + TUSCHE + '"/></marker>';
    svg.appendChild(defs);

    /* Verbindungen zuerst, damit die Kästen darüber liegen */
    var gLinie = el("g", {});
    UMLAUF.forEach(function (u, r) {
      var y = Y[r];
      for (var i = 0; i < 3; i++) {
        gLinie.appendChild(el("line", {
          x1: X[i] + BX, y1: y, x2: X[i + 1] - 9, y2: y,
          stroke: TUSCHE, "stroke-width": 1.8, "marker-end": "url(#qfPfeil)"
        }));
        gLinie.appendChild(txt((X[i] + BX + X[i + 1]) / 2, y - 12, TREFF[i],
          { size: 12, fill: STEIN, weight: 700, track: 1.4 }));
      }
    });

    /* Rücklauf über die Brust: nach rechts hinaus, unter der Reihe
       zurück nach links und in die nächste Reihe hinein. */
    function brustbogen(d, beschriftungY) {
      gLinie.appendChild(el("path", { d: d, fill: "none", stroke: TUSCHE,
        "stroke-width": 1.8, "stroke-dasharray": "7 6", "marker-end": "url(#qfPfeil)" }));
      gLinie.appendChild(txt(520, beschriftungY - 8, "über die Brust",
        { size: 12, fill: STEIN, weight: 700, track: 1.4 }));
    }
    [[0, 1], [1, 2]].forEach(function (paar) {
      var y1 = Y[paar[0]], y2 = Y[paar[1]], yM = (y1 + y2) / 2;
      brustbogen(
        "M" + (X[3] + BX) + "," + y1 + " H1002 Q1016," + y1 + " 1016," + (y1 + 14) +
        " V" + (yM - 14) + " Q1016," + yM + " 1002," + yM +
        " H58 Q44," + yM + " 44," + (yM + 14) +
        " V" + (y2 - 14) + " Q44," + y2 + " 58," + y2 + " H" + (X[0] - 9), yM);
    });
    /* Schluss: von der Leber zurück zur Lunge */
    gLinie.appendChild(el("path", {
      d: "M" + (X[3] + BX) + "," + Y[2] + " H1002 Q1016," + Y[2] + " 1016," + (Y[2] + 14) +
         " V606 Q1016,620 1002,620 H36 Q22,620 22,606 V" + (Y[0] + 14) +
         " Q22," + Y[0] + " 36," + Y[0] + " H" + (X[0] - 9),
      fill: "none", stroke: TUSCHE, "stroke-width": 1.8,
      "stroke-dasharray": "7 6", "marker-end": "url(#qfPfeil)"
    }));
    gLinie.appendChild(txt(520, 612, "über die Brust – der Kreis schließt sich",
      { size: 12, fill: STEIN, weight: 700, track: 1.4 }));
    svg.appendChild(gLinie);

    /* Die Kästen */
    UMLAUF.forEach(function (u, r) {
      var y = Y[r];
      /* nicht an den linken Rand: dort steigt der Rücklaufbogen hoch */
      svg.appendChild(txt(X[0], y - BY / 2 - 14, "Umlauf " + u.nr,
        { anchor: "start", size: 11.5, fill: KIESEL, weight: 700, track: 1.8 }));
      u.kette.forEach(function (id, i) {
        var m = eintrag(id); if (!m) return;
        var ph = phase(m.wx);
        var x = X[i], oben = y - BY / 2;
        var a = el("a", { href: basis + "meridian.html?m=" + m.id });
        a.appendChild(el("rect", { x: x, y: oben, width: BX, height: BY, rx: 2,
          fill: ph.hell, stroke: ph.hex, "stroke-width": 1.6 }));
        a.appendChild(txt(x + 18, oben + 34, m.codeDe,
          { anchor: "start", size: 25, family: CORMORANT, weight: 500 }));
        a.appendChild(txt(x + 18, oben + 56, m.name,
          { anchor: "start", size: 13.5 }));
        a.appendChild(txt(x + 18, oben + 74, m.clock + " Uhr · " + (m.yin ? "Yin" : "Yang"),
          { anchor: "start", size: 11.5, fill: STEIN, weight: 700, track: .8 }));
        /* Symbol der Wandlungsphase rechts oben im Kasten */
        var g = el("g", { transform: "translate(" + (x + BX - 40) + "," + (oben + 12) + ") scale(1.1)" });
        g.appendChild(el("path", { d: ph.symbol, fill: "none", stroke: ph.hex,
          "stroke-width": 1.8, "stroke-linecap": "round", "stroke-linejoin": "round" }));
        a.appendChild(g);
        a.appendChild(txt(x + BX - 14, oben + 74, ph.name,
          { anchor: "end", size: 11, fill: ph.hex, weight: 700, track: .8 }));
        svg.appendChild(a);
      });
    });
  }

  global.QiFluss = { bahnen: bahnen, bahnenLegende: bahnenLegende, umlauf: umlauf };
})(window);
