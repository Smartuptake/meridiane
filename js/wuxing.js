/* Zwei Schaubilder: die fünf Wandlungsphasen und die Organuhr.
   Jede Phase trägt ihre eigene Farbe und ihr Symbol; beides steht in
   data/wandlungsphasen.js, damit Tafel, Schaubild und Qi-Fluss-Seite
   dieselbe Quelle benutzen. Metall ist eigentlich weiß und auf hellem
   Grund nicht darstellbar – es steht als helles Silber mit Kontur. */
(function (global) {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";
  var TUSCHE = "#1F1D1B", STEIN = "#736C63", KIESEL = "#A39B90",
      HAARLINIE = "#DCD5C9", NEBEL = "#EDE7DC", WEISS = "#FFFFFF", PAPIERHELL = "#F2EDE4";
  var LATO = '"Lato", Arial, sans-serif';
  var HANZI = '"Noto Serif SC", "Songti SC", serif';

  function el(t, a) { var e = document.createElementNS(NS, t); for (var k in a) e.setAttribute(k, a[k]); return e; }
  function txt(x, y, s, o) {
    o = o || {};
    var t = el("text", {
      x: x, y: y, "text-anchor": o.anchor || "middle", fill: o.fill || TUSCHE,
      "font-family": o.family || LATO, "font-size": o.size || 14,
      "font-weight": o.weight || 400, "letter-spacing": o.track || 0
    });
    t.textContent = s; return t;
  }
  /* Symbol einer Phase, auf Kantenlänge groesse zentriert um (x,y) */
  function symbol(x, y, groesse, d, farbe, staerke) {
    var f = groesse / 24;
    var g = el("g", {
      transform: "translate(" + (x - groesse / 2).toFixed(1) + "," +
                 (y - groesse / 2).toFixed(1) + ") scale(" + f.toFixed(3) + ")"
    });
    g.appendChild(el("path", {
      d: d, fill: "none", stroke: farbe, "stroke-width": staerke || 1.7,
      "stroke-linecap": "round", "stroke-linejoin": "round"
    }));
    return g;
  }

  function pol(cx, cy, r, grad) {
    var a = (grad - 90) * Math.PI / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  }

  /* ---------------- Fünf Wandlungsphasen ---------------- */
  function diagramm(svg, aktiv) {
    var W = global.Wandlungsphasen, R = W.reihenfolge;
    var cx = 265, cy = 252, r = 150, knoten = 44;

    svg.setAttribute("viewBox", "0 0 530 500");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label",
      "Die fünf Wandlungsphasen im nährenden und im kontrollierenden Zyklus." +
      (aktiv ? " Hervorgehoben: " + W.phasen[aktiv].name + "." : ""));
    svg.innerHTML = "";

    var defs = el("defs", {});
    defs.innerHTML =
      '<marker id="pfeilTusche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5.5" ' +
      'markerHeight="5.5" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="' + TUSCHE + '"/></marker>' +
      '<marker id="pfeilKiesel" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" ' +
      'markerHeight="5" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="' + KIESEL + '"/></marker>';
    svg.appendChild(defs);

    /* Feuer oben, dann im Uhrzeigersinn Erde, Metall, Wasser, Holz –
       so läuft der nährende Zyklus als Außenfünfeck mit dem Uhrzeiger. */
    var winkel = { feuer: 0, erde: 72, metall: 144, wasser: 216, holz: 288 };
    var pos = {};
    R.forEach(function (k) { pos[k] = pol(cx, cy, r, winkel[k]); });

    function kante(a, b, abstand, attr) {
      var dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy);
      var ux = dx / L, uy = dy / L;
      return el("line", Object.assign({
        x1: (a[0] + ux * abstand).toFixed(1), y1: (a[1] + uy * abstand).toFixed(1),
        x2: (b[0] - ux * abstand).toFixed(1), y2: (b[1] - uy * abstand).toFixed(1)
      }, attr));
    }

    /* Kontrollzyklus zuerst, damit er hinter dem nährenden liegt */
    var gKe = el("g", {});
    Object.keys(W.kontrolle).forEach(function (von) {
      gKe.appendChild(kante(pos[von], pos[W.kontrolle[von]], knoten + 7, {
        stroke: KIESEL, "stroke-width": 1.2, "stroke-dasharray": "5 5",
        "marker-end": "url(#pfeilKiesel)"
      }));
    });
    svg.appendChild(gKe);

    var gSheng = el("g", {});
    R.forEach(function (k, i) {
      gSheng.appendChild(kante(pos[k], pos[R[(i + 1) % R.length]], knoten + 7, {
        stroke: TUSCHE, "stroke-width": 1.8, "marker-end": "url(#pfeilTusche)"
      }));
    });
    svg.appendChild(gSheng);

    R.forEach(function (k) {
      var p = W.phasen[k], an = (k === aktiv), xy = pos[k];
      var g = el("g", {});
      g.appendChild(el("circle", {
        cx: xy[0], cy: xy[1], r: knoten,
        fill: an ? p.hex : p.hell, stroke: p.hex,
        "stroke-width": an ? 2.4 : 1.4
      }));
      g.appendChild(symbol(xy[0], xy[1] - 21, 24, p.symbol,
        an ? PAPIERHELL : p.hex, an ? 2.1 : 1.9));
      g.appendChild(txt(xy[0], xy[1] + 6, p.han, {
        size: 21, family: HANZI, fill: an ? PAPIERHELL : TUSCHE
      }));
      g.appendChild(txt(xy[0], xy[1] + 24, p.name, {
        size: 12.5, weight: an ? 700 : 400, fill: an ? PAPIERHELL : TUSCHE
      }));
      /* Zang und Fu außerhalb des Knotens, nach außen versetzt */
      var aus = pol(cx, cy, r + knoten + 20, winkel[k]);
      var anker = Math.abs(aus[0] - cx) < 26 ? "middle" : (aus[0] > cx ? "start" : "end");
      var dy = aus[1] < cy ? -2 : 12;
      g.appendChild(txt(aus[0], aus[1] + dy, p.zang, { size: 12.5, anchor: anker, fill: an ? TUSCHE : STEIN, weight: an ? 700 : 400 }));
      g.appendChild(txt(aus[0], aus[1] + dy + 15, p.fu, { size: 12.5, anchor: anker, fill: KIESEL }));
      svg.appendChild(g);
    });

    var leg = el("g", {});
    leg.appendChild(el("line", { x1: 24, y1: 474, x2: 54, y2: 474, stroke: TUSCHE, "stroke-width": 1.8 }));
    leg.appendChild(txt(62, 478, "nährt · Sheng-Zyklus", { anchor: "start", size: 13, fill: TUSCHE }));
    leg.appendChild(el("line", { x1: 236, y1: 474, x2: 266, y2: 474, stroke: KIESEL, "stroke-width": 1.2, "stroke-dasharray": "5 5" }));
    leg.appendChild(txt(274, 478, "bändigt · Ke-Zyklus", { anchor: "start", size: 13, fill: STEIN }));
    svg.appendChild(leg);
  }

  /* ---------------- Organuhr ---------------- */
  function organuhr(svg, aktivId) {
    var U = global.Organuhr;
    var cx = 230, cy = 236, rA = 152, rI = 104;

    svg.setAttribute("viewBox", "0 0 460 462");
    svg.setAttribute("role", "img");
    var akt = U.filter(function (o) { return o.id === aktivId; })[0];
    svg.setAttribute("aria-label", "Chinesische Organuhr über 24 Stunden." +
      (akt ? " Hervorgehoben: " + akt.name + ", " + zwei(akt.von) + " bis " + zwei((akt.von + 2) % 24) + " Uhr." : ""));
    svg.innerHTML = "";

    function zwei(h) { return (h < 10 ? "0" : "") + h; }
    function sektor(von, bis) {
      var a1 = pol(cx, cy, rA, von * 15), a2 = pol(cx, cy, rA, bis * 15),
          i1 = pol(cx, cy, rI, von * 15), i2 = pol(cx, cy, rI, bis * 15);
      return "M" + a1[0].toFixed(1) + "," + a1[1].toFixed(1) +
             " A" + rA + "," + rA + " 0 0 1 " + a2[0].toFixed(1) + "," + a2[1].toFixed(1) +
             " L" + i2[0].toFixed(1) + "," + i2[1].toFixed(1) +
             " A" + rI + "," + rI + " 0 0 0 " + i1[0].toFixed(1) + "," + i1[1].toFixed(1) + " Z";
    }

    var P = (global.Wandlungsphasen || {}).phasen || {};
    U.forEach(function (o) {
      var an = (o.id === aktivId), bis = o.von + 2;
      var ph = P[o.wx] || { hex: TUSCHE, hell: WEISS };
      var g = el("g", {});
      g.appendChild(el("path", {
        d: sektor(o.von, bis),
        fill: an ? ph.hex : ph.hell, stroke: ph.hex, "stroke-width": an ? 1.8 : 1
      }));
      var mitte = pol(cx, cy, (rA + rI) / 2, (o.von + 1) * 15);
      g.appendChild(txt(mitte[0], mitte[1] + 5, o.codeDe, {
        size: 15, weight: 700, fill: an ? PAPIERHELL : TUSCHE
      }));
      var aussen = pol(cx, cy, rA + 18, (o.von + 1) * 15);
      var anker = Math.abs(aussen[0] - cx) < 18 ? "middle" : (aussen[0] > cx ? "start" : "end");
      g.appendChild(txt(aussen[0], aussen[1] + 4, zwei(o.von) + "–" + zwei(bis % 24), {
        size: 12, anchor: anker, fill: an ? TUSCHE : STEIN, weight: an ? 700 : 400
      }));
      svg.appendChild(g);
    });

    /* Tag- und Nachtachse */
    [[0, "0 Uhr"], [6, ""], [12, "12 Uhr"], [18, ""]].forEach(function (m) {
      var p1 = pol(cx, cy, rI - 4, m[0] * 15), p2 = pol(cx, cy, rI - 12, m[0] * 15);
      svg.appendChild(el("line", { x1: p1[0], y1: p1[1], x2: p2[0], y2: p2[1], stroke: KIESEL, "stroke-width": 1 }));
    });
    svg.appendChild(txt(cx, cy - rI + 22, "0 Uhr", { size: 11, fill: KIESEL, track: 1 }));
    svg.appendChild(txt(cx, cy + rI - 12, "12 Uhr", { size: 11, fill: KIESEL, track: 1 }));

    if (akt) {
      svg.appendChild(txt(cx, cy - 8, akt.name, { size: 21, family: '"Cormorant Garamond", Garamond, serif', weight: 500 }));
      svg.appendChild(txt(cx, cy + 14, zwei(akt.von) + " – " + zwei((akt.von + 2) % 24) + " Uhr", { size: 13, fill: STEIN }));
      svg.appendChild(txt(cx, cy + 34, "Maximalzeit", { size: 10.5, fill: KIESEL, track: 1.6 }));
    }
  }

  global.Wuxing = { diagramm: diagramm, organuhr: organuhr };
})(window);
