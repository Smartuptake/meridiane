/* ===========================================================
   Meridian-Engine
   Zeichnet einen Meridianverlauf auf eine Figur.

   Gestaltung nach Designhandbuch Healthlane Academy 0.6, 11.4:
   Verlauf in Tusche, Punkte in Siegelrot, Punktname als Pinyin
   mit Kurzbezeichnung. Keine Verläufe, keine Schatten, keine
   Leuchteffekte (Negativliste 14.3).

   Die Engine kennt keinen einzelnen Meridian. Sie bekommt
     data.path    Stützpunkte des äußeren Verlaufs  [[x,y], …]
     data.points  die Punkte, die darauf liegen
   und rechnet Spline und Bogenlängen selbst aus.
   Bildraster aller Figuren: 880 × 1168.
   =========================================================== */
(function (global) {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";
  var W = 880, H = 1168;

  var TUSCHE = "#1F1D1B", SIEGELROT = "#D32727", STEIN = "#736C63",
      KIESEL = "#A39B90", HAARLINIE = "#DCD5C9", PAPIER = "#F7F4EE", WEISS = "#FFFFFF";

  var store = {};
  function register(d) { store[d.id] = d; }
  function get(id) { return store[id]; }

  function el(tag, attr) {
    var e = document.createElementNS(NS, tag);
    for (var k in attr) e.setAttribute(k, attr[k]);
    return e;
  }

  /* Catmull-Rom durch alle Stützpunkte → kubische Bezier */
  function spline(pts, tension) {
    tension = (tension === undefined) ? 0.85 : tension;
    var d = "M" + pts[0][0] + "," + pts[0][1];
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i - 1] || pts[i], p1 = pts[i],
          p2 = pts[i + 1], p3 = pts[i + 2] || pts[i + 1];
      d += "C" + (p1[0] + (p2[0] - p0[0]) / 6 * tension).toFixed(2) + "," +
                 (p1[1] + (p2[1] - p0[1]) / 6 * tension).toFixed(2) + " " +
                 (p2[0] - (p3[0] - p1[0]) / 6 * tension).toFixed(2) + "," +
                 (p2[1] - (p3[1] - p1[1]) / 6 * tension).toFixed(2) + " " +
                 p2[0] + "," + p2[1];
    }
    return d;
  }

  /* Umriss der drei Figuren, alle acht Bildpunkte eine Zeile: der linkeste
     und der rechteste undurchsichtige Bildpunkt. Damit weiß die Engine ohne
     Bildanalyse, wo neben der Figur Papier frei ist. Gemessen am 21.09.2026
     am Alphakanal; siehe data/landmarken.js. */
  var UMRISS = {
    front: {
      li: "880,880,880,410,400,394,390,388,388,388,389,390,384,384,384,387,391,400,401,403,403,402,399,389,374,357,336,316,308,304,300,297,295,293,292,292,292,293,292,289,286,283,280,277,274,271,267,262,257,251,246,242,238,235,232,229,227,225,222,219,214,210,206,201,196,189,170,161,150,140,140,161,157,152,149,145,144,145,156,329,329,330,331,332,333,334,335,337,338,340,342,344,346,347,347,346,345,345,346,345,344,343,341,339,337,336,335,335,335,335,336,337,337,339,340,342,343,344,345,347,348,350,351,353,355,356,357,356,354,354,354,353,349,347,342,333,327,324,324,329,369,880,880,880,880,880".split(",").map(Number),
      re: "0,0,0,462,473,479,484,486,486,486,485,485,491,491,490,488,484,475,474,471,472,472,476,487,502,518,539,558,566,570,574,577,579,581,581,582,582,581,583,586,589,592,594,597,601,603,607,612,617,623,628,632,636,639,642,645,647,650,652,655,660,664,668,673,678,685,703,713,724,735,735,713,718,722,726,729,730,729,718,545,545,544,543,542,541,540,539,538,536,534,532,530,529,527,528,529,530,530,530,530,531,532,534,536,538,539,539,540,540,539,539,538,537,535,534,532,531,530,528,526,525,523,522,520,518,516,516,516,517,518,518,517,521,523,527,536,542,545,545,538,500,0,0,0,0,0".split(",").map(Number)
    },
    back: {
      li: "880,880,880,413,401,395,391,388,388,388,388,389,384,383,384,386,390,399,400,402,402,401,397,386,370,354,332,315,308,304,300,297,294,293,292,292,291,291,288,284,281,278,275,271,267,264,259,252,246,241,236,232,229,226,223,221,219,216,213,208,204,200,195,190,182,165,156,146,136,136,157,153,149,146,142,141,142,154,332,332,332,333,334,335,336,337,338,339,341,343,345,347,348,347,346,346,346,346,346,345,344,342,340,337,336,335,334,334,334,334,335,336,337,338,339,341,342,343,344,346,347,349,350,352,354,356,357,357,355,353,353,354,352,342,335,335,337,352,360,880,880,880,880,880,880,880".split(",").map(Number),
      re: "0,0,0,459,469,476,482,484,485,485,484,484,490,490,489,486,483,473,472,470,470,471,475,487,503,519,541,557,562,566,570,573,575,577,577,577,577,578,582,585,588,591,594,597,601,604,609,616,622,627,632,635,639,641,644,647,649,652,655,660,665,668,674,679,685,703,713,724,733,733,714,718,722,725,729,730,729,718,543,543,542,541,541,540,539,537,536,534,533,531,529,527,526,527,528,528,528,528,528,529,530,532,534,536,538,539,539,539,539,539,538,537,536,535,533,532,530,529,527,526,524,523,521,519,517,516,515,515,516,517,518,517,521,530,538,538,535,520,509,0,0,0,0,0,0,0".split(",").map(Number)
    },
    side: {
      li: "880,880,880,410,381,375,373,373,376,374,371,370,369,362,357,356,361,365,366,369,369,373,398,399,404,406,407,402,398,393,388,383,379,374,369,365,362,361,361,361,362,362,361,361,360,359,359,359,361,362,362,363,364,363,362,361,361,362,362,362,362,362,363,363,364,362,361,359,358,358,359,361,366,368,368,369,369,369,370,371,372,374,375,377,379,381,384,386,389,391,393,394,397,399,399,400,402,405,408,412,416,418,420,421,421,420,420,421,422,422,423,424,425,427,428,429,430,431,432,433,433,434,433,432,430,428,424,420,408,395,381,363,330,329,329,329,344,880,880,880,880,880,880,880,880,880".split(",").map(Number),
      re: "0,0,0,450,466,473,478,482,485,486,487,487,486,485,482,478,474,469,466,464,463,464,466,469,475,482,487,490,492,495,498,500,502,502,503,503,503,501,501,502,503,503,504,505,506,507,508,510,512,514,516,519,522,524,526,528,529,530,530,531,532,532,533,534,534,535,538,542,546,548,549,550,550,552,554,555,555,550,550,542,540,476,476,476,476,476,476,475,474,473,472,472,472,472,474,475,477,479,482,484,486,488,490,492,493,494,495,495,495,495,495,494,493,491,489,488,486,485,485,484,483,482,482,481,480,480,480,481,482,483,484,486,487,488,488,486,431,0,0,0,0,0,0,0,0,0".split(",").map(Number)
    }
  };
  var UMRISS_SCHRITT = 8;

  /* ===========================================================
     Detailabbildung
     ===========================================================
     Die Figur ist ein Foto. Für die meisten Punkte reicht das – am
     Rumpf und am Oberschenkel sieht man, wo der Punkt liegt.

     An Hand und Fuß reicht es nicht. Dort verkürzt die Figur, die
     Punktscheiben berühren sich, und vor allem: die Lageangaben reden
     von Dingen, die auf der Haut nicht zu sehen sind – von der Sehne
     des ellenseitigen Handbeugers, vom Erbsenbein, vom Zwischenraum
     zwischen zweitem und drittem Mittelfußknochen.

     Darum hat jede Tafel eine Detailabbildung. Sie folgt dem
     angeklickten Punkt, vergrößert seine Umgebung, zeigt die Nachbarn
     mit – und zeichnet die Marken ein, von denen die Lageangabe
     spricht, jede mit Nummer und Namen.

     Der Ausschnitt wird vergrößert, die Punktscheiben nicht. Nur so
     wachsen die Abstände zwischen ihnen.

     Die Marken stehen in data/marken.js, einmal je Ansicht und Ort;
     ein Punkt nennt sie nur beim Namen. Mit data.lupe = false lässt
     sich die Detailabbildung für eine Tafel abschalten.
     =========================================================== */

  var LUPE_B = 290, LUPE_H = 318, LUPE_RAND = 8;
  var LUPE_BILD_B = 274, LUPE_BILD_H = 186;

  /* Skelettzeichnungen, siehe data/skelette.js */
  var SKELETTE = {};
  function skelett(tafel) { for (var k in tafel) SKELETTE[k] = tafel[k]; }

  /* Benannte anatomische Marken, nach Ansicht geordnet */
  var MARKEN = { front: {}, back: {}, side: {} };
  function marken(tafel) {
    for (var v in tafel) {
      MARKEN[v] = MARKEN[v] || {};
      for (var k in tafel[v]) MARKEN[v][k] = tafel[v][k];
    }
  }
  function markeHolen(view, m) {
    if (!m) return null;
    if (typeof m !== "string") return m;
    return (MARKEN[view] || {})[m] || null;
  }

  function abstand(a, b) {
    var dx = a.x - b.x, dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /* Liegt das Rechteck neben der Figur und nicht auf einer Sperrfläche? */
  function platzFrei(view, x0, y0, x1, y1, sperren) {
    var u = UMRISS[view] || UMRISS.front;
    var i0 = Math.max(0, Math.floor(y0 / UMRISS_SCHRITT));
    var i1 = Math.min(u.li.length - 1, Math.ceil(y1 / UMRISS_SCHRITT));
    for (var i = i0; i <= i1; i++) {
      if (x1 <= u.li[i] || x0 >= u.re[i]) continue;
      return false;
    }
    for (var k = 0; k < sperren.length; k++) {
      var s = sperren[k];
      if (x0 < s[2] && x1 > s[0] && y0 < s[3] && y1 > s[1]) return false;
    }
    return true;
  }

  function suchePlatz(view, breite, hoehe, zielY, sperren) {
    var gefunden = [];
    [16, W - 16 - breite].forEach(function (bx) {
      for (var by = 10; by <= H - hoehe - 10; by += 8) {
        if (platzFrei(view, bx - 6, by - 22, bx + breite + 6, by + hoehe + 6, sperren))
          gefunden.push([bx, by]);
      }
    });
    if (!gefunden.length) return null;
    gefunden.sort(function (a, b) {
      return Math.abs(a[1] + hoehe / 2 - zielY) - Math.abs(b[1] + hoehe / 2 - zielY);
    });
    return gefunden[0];
  }

  function mount(opts) {
    var svg = opts.svg, data = opts.data, imgBase = opts.imgBase || "img/";
    var LBL = data.codeDe || data.code;
    var P = data.points.slice();

    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label",
      (data.titel || data.name) + ", " + P.length + " eingezeichnete Punkte von " +
      LBL + " 1 bis " + LBL + " " + data.pointCount);
    svg.innerHTML = "";

    /* Figur. Sättigung leicht zurückgenommen nach 11.3. */
    var bild = el("image", {
      href: imgBase + data.view + ".png", x: 0, y: 0, width: W, height: H,
      preserveAspectRatio: "xMidYMid meet"
    });
    bild.style.filter = "saturate(.85)";
    svg.appendChild(bild);

    var D = spline(data.path);
    /* Nur die Blase hat auf dem Rücken eine zweite äußere Linie. */
    var DZ = data.zweig ? spline(data.zweig) : null;

    /* Gegenseite – nur andeutend, Kiesel */
    var gMirror = el("g", { transform: "translate(" + W + ",0) scale(-1,1)", opacity: ".45" });
    if (data.mirror !== false) {
      gMirror.appendChild(el("path", { d: D, fill: "none", stroke: KIESEL,
        "stroke-width": 2.4, "stroke-linecap": "round" }));
      if (DZ) gMirror.appendChild(el("path", { d: DZ, fill: "none", stroke: KIESEL,
        "stroke-width": 1.8, "stroke-linecap": "round" }));
      P.forEach(function (p) {
        gMirror.appendChild(el("circle", { cx: p.x, cy: p.y, r: 3, fill: KIESEL }));
      });
      svg.appendChild(gMirror);
    }

    /* Innerer Verlauf und Äste – schematisch, punktlos, Stein gestrichelt */
    var gInner = el("g", { opacity: ".9" });
    if (data.inner) gInner.appendChild(el("path", { d: data.inner, fill: "none",
      stroke: STEIN, "stroke-width": 2, "stroke-dasharray": "6 7", "stroke-linecap": "round" }));
    (data.branches || []).forEach(function (b) {
      gInner.appendChild(el("path", { d: b.d, fill: "none", stroke: STEIN,
        "stroke-width": 1.8, "stroke-dasharray": "5 6", "stroke-linecap": "round" }));
    });
    svg.appendChild(gInner);

    /* Äußerer Verlauf: Tusche, mit heller Unterlage für Lesbarkeit auf Haut */
    svg.appendChild(el("path", { d: D, fill: "none", stroke: PAPIER,
      "stroke-width": 6.4, "stroke-linecap": "round", opacity: ".55" }));
    var bahn = el("path", { d: D, fill: "none", stroke: TUSCHE,
      "stroke-width": 3.2, "stroke-linecap": "round" });
    svg.appendChild(bahn);

    if (DZ) {
      svg.appendChild(el("path", { d: DZ, fill: "none", stroke: PAPIER,
        "stroke-width": 5.4, "stroke-linecap": "round", opacity: ".55" }));
      svg.appendChild(el("path", { d: DZ, fill: "none", stroke: TUSCHE,
        "stroke-width": 2.2, "stroke-linecap": "round" }));
    }

    var gLead = el("g", {}), gPts = el("g", {}), gLab = el("g", {});
    svg.appendChild(gLead); svg.appendChild(gPts); svg.appendChild(gLab);

    /* Qi-Anzeiger: schlichter Ring in Tusche, kein Leuchten */
    var qi = el("g", { opacity: "0" });
    qi.appendChild(el("circle", { r: 9, fill: "none", stroke: TUSCHE, "stroke-width": 2 }));
    qi.appendChild(el("circle", { r: 3, fill: TUSCHE }));
    svg.appendChild(qi);

    /* Die Schiene liegt auf der Seite, auf der Platz ist: bei Meridianen
       rechts der Bildmitte rechts, sonst links. Sonst queren die Hilfslinien
       die ganze Figur und lange Etiketten laufen aus dem Bild. Die Legende
       stellt sich auf die freie Gegenseite, darum steht das hier oben. */
    var mittelX = P.reduce(function (a, p) { return a + p.x; }, 0) / P.length;
    var rechts = (data.rail && data.rail.seite) ? data.rail.seite === "rechts" : mittelX > W / 2;

    /* Legende */
    var lx = rechts ? 24 : 604;
    var legende = el("g", { "font-family": '"LXGW WenKai TC", "Lato", Arial, "Kaiti SC", sans-serif', "font-size": 15 });
    legende.innerHTML =
      '<line x1="' + lx + '" y1="100" x2="' + (lx+30) + '" y2="100" stroke="' + TUSCHE + '" stroke-width="3.2" stroke-linecap="round"/>' +
      '<text x="' + (lx+42) + '" y="105" fill="' + TUSCHE + '">äußerer Verlauf</text>' +
      '<circle cx="' + (lx+15) + '" cy="130" r="5" fill="' + SIEGELROT + '" stroke="' + WEISS + '" stroke-width="1.4"/>' +
      '<text x="' + (lx+42) + '" y="135" fill="' + TUSCHE + '">Akupunkturpunkt</text>' +
      '<line x1="' + lx + '" y1="160" x2="' + (lx+30) + '" y2="160" stroke="' + STEIN + '" stroke-width="2" stroke-dasharray="6 7" stroke-linecap="round"/>' +
      '<text x="' + (lx+42) + '" y="165" fill="' + STEIN + '">innerer Verlauf</text>' +
      /* Ren Mai, Du Mai und die Gallenblase in der Seitenansicht haben
         keine Gegenseite – dann entfällt auch die Zeile dafür. */
      (data.mirror === false ? '' :
        '<line x1="' + lx + '" y1="190" x2="' + (lx+30) + '" y2="190" stroke="' + KIESEL + '" stroke-width="2.4" stroke-linecap="round"/>' +
        '<text x="' + (lx+42) + '" y="195" fill="' + STEIN + '">Gegenseite</text>');
    svg.appendChild(legende);

    /* Bogenlängen für Reihenfolge und Qi-Weg */
    var messpfad = el("path", { d: D, fill: "none", stroke: "none" });
    svg.appendChild(messpfad);
    var TOT = messpfad.getTotalLength();
    var SAMP = 2000, samples = [];
    for (var i = 0; i <= SAMP; i++) {
      var pt = messpfad.getPointAtLength(TOT * i / SAMP);
      samples.push([pt.x, pt.y]);
    }
    P.forEach(function (p) {
      var best = 1e9, bi = 0;
      for (var i = 0; i < samples.length; i++) {
        var dx = samples[i][0] - p.x, dy = samples[i][1] - p.y, d2 = dx * dx + dy * dy;
        if (d2 < best) { best = d2; bi = i; }
      }
      p._L = TOT * bi / SAMP;
    });
    P.sort(function (a, b) { return a._L - b._L; });

    /* Schiene: Kurzbezeichnung, im Großbild zusätzlich Pinyin (11.4) */
    var railX = (data.rail && data.rail.x) || (rechts ? W - 150 : 150);
    var ys = P.map(function (p) { return p.y; });
    var top = Math.min.apply(null, ys) - 15, bot = Math.max.apply(null, ys) + 12;
    if (bot - top < P.length * 30) {
      var mid = (top + bot) / 2; top = mid - P.length * 15; bot = mid + P.length * 15;
    }

    var detail = false;
    /* Die Schiene folgt der Höhe am Körper, nicht der Flussrichtung – sonst
       kreuzen sich die Hilfslinien bei aufsteigenden Meridianen. */
    var nachHoehe = P.slice().sort(function (a, b) { return a.y - b.y; });
    nachHoehe.forEach(function (p, rang) {
      p._rang = rang;
    });

    /* Achtung: der Platz auf der Schiene richtet sich nach der Körperhöhe
       (_rang), die Auswahl aber nach der Flussrichtung (i). Werden die beiden
       verwechselt, öffnet ein Klick bei aufsteigenden Meridianen den falschen
       Punkt. */
    P.forEach(function (p, i) {
      var rang = p._rang;
      p._ly = P.length === 1 ? (top + bot) / 2 : top + (bot - top) * rang / (P.length - 1);

      p._lead = el("path", { d: "M" + railX + "," + p._ly + " L" + (p.x + (rechts ? 9 : -9)) + "," + p.y,
        fill: "none", stroke: HAARLINIE, "stroke-width": "1" });
      gLead.appendChild(p._lead);

      var g = el("g", { role: "button", tabindex: "0" });
      g.style.cursor = "pointer";
      p._ring = el("circle", { cx: p.x, cy: p.y, r: 11, fill: "none",
        stroke: SIEGELROT, "stroke-width": 1.4, opacity: "0" });
      p._dot = el("circle", { cx: p.x, cy: p.y, r: p.key ? 5.4 : 4.4, fill: SIEGELROT,
        stroke: WEISS, "stroke-width": 1.5 });
      g.appendChild(p._ring); g.appendChild(p._dot);
      g.appendChild(el("circle", { cx: p.x, cy: p.y, r: 17, fill: "transparent" }));
      g.setAttribute("aria-label", LBL + " " + p.n + ", " + p.pinyin);
      g.addEventListener("click", function (e) { e.stopPropagation(); select(i); });
      g.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); select(i); }
      });
      gPts.appendChild(g);

      p._txt = el("text", { x: railX + (rechts ? 9 : -9), y: p._ly + 5,
        "text-anchor": rechts ? "start" : "end", fill: STEIN,
        "font-family": '"LXGW WenKai TC", "Lato", Arial, "Kaiti SC", sans-serif', "font-size": 18, "font-weight": 700,
        "letter-spacing": 0.8 });
      p._txt.textContent = LBL + " " + p.n;
      p._txt.style.cursor = "pointer";
      p._txt.addEventListener("click", function (e) { e.stopPropagation(); select(i); });
      gLab.appendChild(p._txt);
    });


    /* --- Detailabbildung, folgt dem angeklickten Punkt -------- */
    var gDetail = el("g", {}), gDetailText = el("g", {});
    svg.appendChild(gDetail); svg.appendChild(gDetailText);
    var detailKasten = null;
    var detailZeigen = function () {};

    if (data.lupe !== false) (function () {
      /* Eine Zeichnung braucht mehr Höhe als ein Fotoausschnitt. Die
         beiden Maße gelten nur hier drinnen und überdecken die
         allgemeinen. */
      var hatSkelett = P.some(function (q) {
        return q.skelett && SKELETTE[q.skelett] && SKELETTE[q.skelett].punkte &&
               SKELETTE[q.skelett].punkte[LBL + " " + q.n];
      });
      var LUPE_H = hatSkelett ? 400 : 318, LUPE_BILD_H = hatSkelett ? 268 : 186;

      /* So viel Vergrößerung, dass auch das engste Punktpaar auseinanderrückt */
      var eng = 1e9;
      for (var a = 0; a < P.length; a++)
        for (var b = a + 1; b < P.length; b++) eng = Math.min(eng, abstand(P[a], P[b]));
      var f = Math.max(2.4, Math.min(5, 26 / Math.max(4, eng)));

      var sperren = [
        [lx - 10, 78, lx + 215, 212],
        rechts ? [railX - 34, top - 26, W + 200, bot + 26]
               : [-200, top - 26, railX + 34, bot + 26]
      ];
      var mitteY = P.reduce(function (s, p) { return s + p.y; }, 0) / P.length;
      var platz = suchePlatz(data.view, LUPE_B, LUPE_H, mitteY, sperren);
      if (!platz) return;                         /* kein Papier frei */
      var bx = platz[0], by = platz[1];
      detailKasten = [bx, by - 24, bx + LUPE_B, by + LUPE_H];

      var fx = bx + LUPE_RAND, fy = by + LUPE_RAND;

      gDetail.appendChild(el("rect", { x: bx, y: by, width: LUPE_B, height: LUPE_H,
        fill: PAPIER }));

      var id = "detail-" + (data.id || "x");
      var clip = el("clipPath", { id: id });
      clip.appendChild(el("rect", { x: fx, y: fy, width: LUPE_BILD_B, height: LUPE_BILD_H }));
      gDetail.appendChild(clip);

      var innen = el("g", { "clip-path": "url(#" + id + ")" });
      var gBild = el("g", {});
      var b2 = el("image", { href: imgBase + data.view + ".png", x: 0, y: 0,
        width: W, height: H, preserveAspectRatio: "xMidYMid meet" });
      b2.style.filter = "saturate(.85)";
      gBild.appendChild(b2);
      gBild.appendChild(el("path", { d: D, fill: "none", stroke: PAPIER,
        "stroke-width": 6.4 / f, "stroke-linecap": "round", opacity: ".55" }));
      gBild.appendChild(el("path", { d: D, fill: "none", stroke: TUSCHE,
        "stroke-width": 3.2 / f, "stroke-linecap": "round" }));
      if (DZ) {
        gBild.appendChild(el("path", { d: DZ, fill: "none", stroke: PAPIER,
          "stroke-width": 5.4 / f, "stroke-linecap": "round", opacity: ".55" }));
        gBild.appendChild(el("path", { d: DZ, fill: "none", stroke: TUSCHE,
          "stroke-width": 2.2 / f, "stroke-linecap": "round" }));
      }
      innen.appendChild(gBild);
      var gSkelett = el("g", { opacity: "0" });
      innen.appendChild(gSkelett);
      var gInhalt = el("g", {});
      innen.appendChild(gInhalt);
      gDetail.appendChild(innen);
      gDetail.appendChild(el("rect", { x: fx, y: fy, width: LUPE_BILD_B, height: LUPE_BILD_H,
        fill: "none", stroke: TUSCHE, "stroke-width": 1.2 }));

      /* Markierung auf der Figur, die mitwandert */
      var rahmen = el("rect", { x: 0, y: 0, width: 10, height: 10, rx: 4,
        fill: "none", stroke: STEIN, "stroke-width": 1.2, opacity: ".75" });
      var faden = el("path", { d: "", fill: "none", stroke: STEIN,
        "stroke-width": 1, opacity: ".5" });
      gDetail.appendChild(rahmen); gDetail.appendChild(faden);

      var SCHRIFT = '"LXGW WenKai TC", "Lato", Arial, "Kaiti SC", sans-serif';

      /* Namen, die nicht in den Kasten passen, an einer Leerstelle teilen */
      function umbrechen(text, breite) {
        var worte = text.split(" "), zeilen = [], jetzt = "";
        worte.forEach(function (w) {
          if (jetzt && (jetzt + " " + w).length > breite) { zeilen.push(jetzt); jetzt = w; }
          else jetzt = jetzt ? jetzt + " " + w : w;
        });
        if (jetzt) zeilen.push(jetzt);
        return zeilen;
      }

      /* Kleine Nummernscheibe, wie sie auf der Zeichnung und in der
         Liste darunter dieselbe Marke bezeichnet. */
      var belegt = [];
      function scheibe(ziel, nr, x, y, imFenster) {
        if (imFenster) {
          x = Math.max(fx + 11, Math.min(fx + LUPE_BILD_B - 11, x));
          y = Math.max(fy + 11, Math.min(fy + LUPE_BILD_H - 11, y));
          /* Zwei Nummern auf derselben Stelle sind nicht zu lesen */
          for (var versuch = 0; versuch < 8; versuch++) {
            var frei = true;
            for (var i = 0; i < belegt.length; i++)
              if (Math.abs(belegt[i][0] - x) < 17 && Math.abs(belegt[i][1] - y) < 17) frei = false;
            if (frei) break;
            y += 18;
            if (y > fy + LUPE_BILD_H - 11) { y = fy + 11; x += 19; }
          }
          belegt.push([x, y]);
        }
        ziel.appendChild(el("circle", { cx: x, cy: y, r: 7, fill: PAPIER,
          stroke: STEIN, "stroke-width": 1.1 }));
        var t = el("text", { x: x, y: y + 3.6, "text-anchor": "middle", fill: STEIN,
          "font-family": SCHRIFT, "font-size": 9.5, "font-weight": 700 });
        t.textContent = nr;
        ziel.appendChild(t);
      }

      /* Die Knochen werden bei jedem Aufruf neu gezeichnet – dreißig
         Pfade fallen nicht ins Gewicht, und so bleibt die Strichstärke
         unabhängig vom Maßstab. */
      function knochenZeichnen(sk, sf) {
        while (gSkelett.firstChild) gSkelett.removeChild(gSkelett.firstChild);
        sk.knochen.forEach(function (kn) {
          gSkelett.appendChild(el("path", { d: kn.d, fill: "#EFEAE2",
            stroke: TUSCHE, "stroke-width": (kn.stark ? 1.5 : 1.1) / sf,
            "stroke-linejoin": "round" }));
        });
      }

      detailZeigen = function (p) {
        while (gInhalt.firstChild) gInhalt.removeChild(gInhalt.firstChild);
        while (gDetailText.firstChild) gDetailText.removeChild(gDetailText.firstChild);

        belegt.length = 0;
        var sk = p.skelett ? SKELETTE[p.skelett] : null;
        if (sk && !(sk.punkte && sk.punkte[LBL + " " + p.n])) sk = null;
        var schirm, lage, sichtbar, markenTopf, hw, hh;

        if (sk) {
          /* --- Zeichnung --- */
          gBild.setAttribute("opacity", "0");
          gSkelett.setAttribute("opacity", "1");
          var fe = sk.feld;
          var sf = Math.min((LUPE_BILD_B - 78) / fe[2], (LUPE_BILD_H - 16) / fe[3]);
          var stx = fx + 10 - fe[0] * sf;
          var sty = fy + (LUPE_BILD_H - fe[3] * sf) / 2 - fe[1] * sf;
          gSkelett.setAttribute("transform", "translate(" + stx.toFixed(2) + "," +
            sty.toFixed(2) + ") scale(" + sf.toFixed(4) + ")");
          knochenZeichnen(sk, sf);
          schirm = function (x, y) { return [stx + sf * x, sty + sf * y]; };
          lage = function (q) { return sk.punkte[LBL + " " + q.n]; };
          sichtbar = function (q) { return !!sk.punkte[LBL + " " + q.n]; };
          markenTopf = sk.marken || {};

          /* Der Verlauf verbindet auf der Zeichnung die Punkte, die hier
             zu sehen sind – in Flussrichtung. */
          var kette = P.filter(sichtbar).map(lage);
          if (kette.length > 1) {
            var dd = spline(kette);
            gSkelett.appendChild(el("path", { d: dd, fill: "none", stroke: PAPIER,
              "stroke-width": 6.4 / sf, "stroke-linecap": "round", opacity: ".6" }));
            gSkelett.appendChild(el("path", { d: dd, fill: "none", stroke: TUSCHE,
              "stroke-width": 3.2 / sf, "stroke-linecap": "round" }));
          }
          hw = 48; hh = 48;
        } else {
          /* --- Fotoausschnitt --- */
          gBild.setAttribute("opacity", "1");
          gSkelett.setAttribute("opacity", "0");
          var tx = fx + LUPE_BILD_B / 2 - f * p.x, ty = fy + LUPE_BILD_H / 2 - f * p.y;
          gBild.setAttribute("transform",
            "translate(" + tx.toFixed(2) + "," + ty.toFixed(2) + ") scale(" + f.toFixed(4) + ")");
          schirm = function (x, y) { return [tx + f * x, ty + f * y]; };
          lage = function (q) { return [q.x, q.y]; };
          hw = LUPE_BILD_B / (2 * f); hh = LUPE_BILD_H / (2 * f);
          sichtbar = function (q) {
            return Math.abs(q.x - p.x) <= hw - 3 && Math.abs(q.y - p.y) <= hh - 3;
          };
          markenTopf = MARKEN[data.view] || {};
        }

        /* Der Rahmen auf der Figur zeigt, welche Gegend gemeint ist */
        rahmen.setAttribute("x", p.x - hw); rahmen.setAttribute("y", p.y - hh);
        rahmen.setAttribute("width", 2 * hw); rahmen.setAttribute("height", 2 * hh);
        var vonX = bx < p.x ? p.x - hw : p.x + hw;
        faden.setAttribute("d", "M" + (bx < p.x ? bx + LUPE_B : bx) + "," +
          (by + LUPE_BILD_H / 2) + " L" + vonX + "," + p.y);

        /* Marken zuerst, damit die Punkte darüberliegen */
        var liste = [];
        (p.marken || []).forEach(function (m) {
          var mk = (typeof m === "string") ? markenTopf[m] : m;
          if (!mk) return;
          liste.push(mk);
          var nr = liste.length;
          if (mk.l) {
            var a = schirm(mk.l[0], mk.l[1]), b = schirm(mk.l[2], mk.l[3]);
            gInhalt.appendChild(el("line", { x1: a[0], y1: a[1], x2: b[0], y2: b[1],
              stroke: STEIN, "stroke-width": 1.7, "stroke-linecap": "round", opacity: ".95" }));
            /* Die Nummer sitzt an dem Ende, das im Ausschnitt liegt */
            var drin = function (q) {
              return q[0] > fx + 6 && q[0] < fx + LUPE_BILD_B - 6 &&
                     q[1] > fy + 6 && q[1] < fy + LUPE_BILD_H - 6;
            };
            var e = drin(b) ? b : (drin(a) ? a : [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]);
            var g0 = (e === a) ? b : a;
            var dx = e[0] - g0[0], dy = e[1] - g0[1], len = Math.sqrt(dx * dx + dy * dy) || 1;
            scheibe(gInhalt, nr, e[0] + dx / len * 12, e[1] + dy / len * 12, true);
          } else if (mk.p) {
            var q = schirm(mk.p[0], mk.p[1]);
            gInhalt.appendChild(el("path", {
              d: "M" + (q[0] - 5) + "," + q[1] + " h10 M" + q[0] + "," + (q[1] - 5) + " v10",
              stroke: STEIN, "stroke-width": 1.7, "stroke-linecap": "round" }));
            scheibe(gInhalt, nr, q[0] + 11, q[1] - 10, true);
          }
        });

        /* Die Punkte im Ausschnitt, der gewählte hervorgehoben */
        var drinnen = [];
        P.forEach(function (q, k) {
          if (!sichtbar(q)) return;
          var o = lage(q);
          drinnen.push({ q: q, k: k, o: o, sy: schirm(o[0], o[1])[1] });
        });
        drinnen.sort(function (a, b) { return a.sy - b.sy; });
        var schieneX = fx + LUPE_BILD_B - 46, vorher = -1e9;
        drinnen.forEach(function (e) {
          e.ly = Math.max(vorher + 15, Math.min(fy + LUPE_BILD_H - 8,
                 Math.max(fy + 13, e.sy)));
          vorher = e.ly;
        });
        drinnen.forEach(function (e) {
          var q = e.q, k = e.k;
          var s = schirm(e.o[0], e.o[1]), an = (q === p);
          var g2 = el("g", { role: "button", tabindex: "0" });
          g2.style.cursor = "pointer";
          if (an) g2.appendChild(el("circle", { cx: s[0], cy: s[1], r: 11, fill: "none",
            stroke: SIEGELROT, "stroke-width": 1.4 }));
          g2.appendChild(el("circle", { cx: s[0], cy: s[1], r: an ? 6.2 : 4.4,
            fill: SIEGELROT, stroke: WEISS, "stroke-width": 1.5 }));
          g2.appendChild(el("circle", { cx: s[0], cy: s[1], r: 13, fill: "transparent" }));
          g2.setAttribute("aria-label", LBL + " " + q.n + ", " + q.pinyin + ", vergrößert");
          g2.addEventListener("click", function (e) { e.stopPropagation(); select(k); });
          g2.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); select(k); }
          });
          gInhalt.appendChild(g2);

          gInhalt.appendChild(el("path", {
            d: "M" + schieneX + "," + e.ly + " L" + (s[0] + 8) + "," + s[1],
            fill: "none", stroke: an ? STEIN : HAARLINIE, "stroke-width": 1 }));
          var t = el("text", { x: schieneX + 6, y: e.ly + 4,
            fill: an ? TUSCHE : STEIN, "font-family": SCHRIFT,
            "font-size": 12.5, "font-weight": 700 });
          t.textContent = LBL + " " + q.n;
          gInhalt.appendChild(t);
        });

        /* Unterschrift und Markenliste */
        var zy = by + LUPE_RAND + LUPE_BILD_H + 19;
        var kopf = el("text", { x: bx + LUPE_RAND, y: zy, fill: TUSCHE,
          "font-family": SCHRIFT, "font-size": 15, "font-weight": 700 });
        kopf.textContent = LBL + " " + p.n + "  " + p.pinyin;
        gDetailText.appendChild(kopf);
        var lupe = el("text", { x: bx + LUPE_B - LUPE_RAND, y: zy, "text-anchor": "end",
          fill: STEIN, "font-family": SCHRIFT, "font-size": 12 });
        lupe.textContent = sk ? sk.titel
          : (Math.round(f * 10) / 10).toFixed(1).replace(".", ",") + "fach";
        gDetailText.appendChild(lupe);

        var zeile = 0;
        liste.forEach(function (mk, i) {
          if (mk.l || mk.p)
            scheibe(gDetailText, i + 1, bx + LUPE_RAND + 7, zy + 17 + zeile * 16);
          umbrechen(mk.text, 40).forEach(function (stueck) {
            var t = el("text", { x: bx + LUPE_RAND + 19, y: zy + 21 + zeile * 16,
              fill: STEIN, "font-family": SCHRIFT, "font-size": 12.5 });
            t.textContent = stueck;
            gDetailText.appendChild(t);
            zeile++;
          });
        });
        if (!liste.length) {
          var h = el("text", { x: bx + LUPE_RAND, y: zy + 21, fill: KIESEL,
            "font-family": SCHRIFT, "font-size": 12.5 });
          h.textContent = "Noch keine Marken eingetragen.";
          gDetailText.appendChild(h);
        }
      };
    })();

    function beschriften() {
      P.forEach(function (p) {
        p._txt.textContent = detail ? (LBL + " " + p.n + "  " + p.pinyin) : (LBL + " " + p.n);
        p._txt.setAttribute("font-size", detail ? 17 : 18);
      });
    }

    /* Auswahl – ausschließlich durch Klick, nichts läuft von allein */
    var aktiv = -1;
    function select(i) {
      aktiv = i;
      P.forEach(function (q, k) {
        var on = (k === i);
        q._dot.setAttribute("r", on ? (q.key ? 7 : 6.2) : (q.key ? 5.4 : 4.4));
        q._ring.setAttribute("opacity", on ? "1" : "0");
        q._txt.setAttribute("fill", on ? TUSCHE : STEIN);
        q._lead.setAttribute("stroke", on ? STEIN : HAARLINIE);

      });
      detailZeigen(P[i]);
      if (opts.onPoint) opts.onPoint(P[i], i, P);
    }

    /* Qi-Fluss: abschaltbar, standardmäßig aus (10.4: nichts läuft automatisch) */
    var fliesst = false, t0 = 0, raf = 0;
    var DAUER = 14000;
    function frame(now) {
      if (!fliesst) return;
      raf = requestAnimationFrame(frame);
      var u = ((now - t0) % DAUER) / DAUER;
      var pt = messpfad.getPointAtLength(TOT * u);
      qi.setAttribute("transform", "translate(" + pt.x + "," + pt.y + ")");
    }
    function setFlow(on) {
      fliesst = !!on;
      qi.setAttribute("opacity", fliesst ? "1" : "0");
      if (fliesst) { t0 = performance.now(); raf = requestAnimationFrame(frame); }
      else cancelAnimationFrame(raf);
    }

    select(0);

    return {
      svg: svg, points: P, data: data,
      select: select,
      next: function () { select(Math.min(P.length - 1, aktiv + 1)); },
      prev: function () { select(Math.max(0, aktiv - 1)); },
      aktiv: function () { return aktiv; },
      setFlow: setFlow,
      isFlowing: function () { return fliesst; },
      setDetail: function (v) { detail = !!v; beschriften(); },
      setLayer: function (which, on) {
        if (which === "inner") gInner.setAttribute("opacity", on ? ".9" : "0");
        if (which === "mirror") gMirror.setAttribute("opacity", on ? ".45" : "0");
        if (which === "labels") {
          gLab.setAttribute("opacity", on ? "1" : "0");
          gLead.setAttribute("opacity", on ? "1" : "0");
          gDetailText.setAttribute("opacity", on ? "1" : "0");
          legende.setAttribute("opacity", on ? "1" : "0");
        }
      },
      /* Ausschnitt um Verlauf und Punkte, für das Großbild */
      ausschnitt: function (eng) {
        if (!eng) return svg.setAttribute("viewBox", "0 0 " + W + " " + H);
        var xs = [], ys2 = [];
        data.path.forEach(function (a) { xs.push(a[0]); ys2.push(a[1]); });
        (data.zweig || []).forEach(function (a) { xs.push(a[0]); ys2.push(a[1]); });
        P.forEach(function (p) { xs.push(p.x); ys2.push(p.y); });
        if (detailKasten) {
          xs.push(detailKasten[0], detailKasten[2]);
          ys2.push(detailKasten[1], detailKasten[3]);
        }
        var x0 = Math.min.apply(null, xs), x1 = Math.max.apply(null, xs),
            y0 = Math.min.apply(null, ys2), y1 = Math.max.apply(null, ys2);
        x0 -= 40; x1 += 60; y0 -= 60; y1 += 60;
        /* Beschriftung mit einrechnen, sonst wird der längste Name abgeschnitten */
        if (gLab.getAttribute("opacity") !== "0") {
          try {
            var b = gLab.getBBox();
            /* getBBox rechnet die Sperrung des letzten Zeichens nicht mit,
               darum rechts etwas mehr Luft als links. */
            x0 = Math.min(x0, b.x - 14); x1 = Math.max(x1, b.x + b.width + 30);
            y0 = Math.min(y0, b.y - 14);
            y1 = Math.max(y1, b.y + b.height + 14);
          } catch (e) { /* getBBox scheitert, wenn nichts gezeichnet ist */ }
        }
        /* Seitlich darf der Ausschnitt über das Bild hinausgehen: bei einer
           Schiene rechts ragen lange Namen wie Jiānzhōngshū über den Rand,
           und dahinter liegt ohnehin nur Papier. */
        x0 = Math.max(-160, x0); y0 = Math.max(0, y0);
        x1 = Math.min(W + 160, x1); y1 = Math.min(H, y1);
        svg.setAttribute("viewBox", x0 + " " + y0 + " " + (x1 - x0) + " " + (y1 - y0));
      }
    };
  }

  global.Meridian = { register: register, get: get, mount: mount, spline: spline,
                      marken: marken, skelett: skelett, W: W, H: H };
})(window);
