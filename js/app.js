/* Seitenlogik der Meridianseite.
   Nichts läuft von allein: Punkte werden angeklickt, nicht abgespielt. */
(function () {
  "use strict";

  var id = (new URLSearchParams(location.search).get("m") || "lu").toLowerCase();
  window.__meridianId = id;

  function $(x) { return document.getElementById(x); }
  function han(t) {
    var s = document.createElement("span"); s.className = "hanzi"; s.textContent = t; return s;
  }
  var NS = "http://www.w3.org/2000/svg";

  /* Auf- und zuklappbarer Abschnitt. Der Winkel dreht sich, keine senkrechte Linie (5.2). */
  function winkel() {
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("class", "zeichen");
    svg.setAttribute("viewBox", "0 0 22 22");
    svg.setAttribute("aria-hidden", "true");
    var pl = document.createElementNS(NS, "polyline");
    pl.setAttribute("points", "5,9 11,15 17,9");
    svg.appendChild(pl);
    return svg;
  }

  var faltZaehler = 0;
  function falttafel(host, eintraege, offen) {
    eintraege.forEach(function (e, i) {
      var wrap = document.createElement("div");
      var btn = document.createElement("button");
      var kennung = "falt-" + (faltZaehler++);
      btn.type = "button";
      btn.setAttribute("aria-expanded", i === offen ? "true" : "false");
      btn.setAttribute("aria-controls", kennung);
      var t = document.createElement("span");
      t.className = "titel";
      t.textContent = e.titel;
      if (e.han) t.appendChild(han(e.han));
      btn.appendChild(t);
      btn.appendChild(winkel());

      var inhalt = document.createElement("div");
      inhalt.className = "inhalt";
      inhalt.id = kennung;
      inhalt.hidden = (i !== offen);
      e.fuellen(inhalt);

      btn.addEventListener("click", function () {
        var auf = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", auf ? "false" : "true");
        inhalt.hidden = auf;
      });
      wrap.appendChild(btn); wrap.appendChild(inhalt); host.appendChild(wrap);
    });
  }

  function absatz(host, text, klasse) {
    var p = document.createElement("p");
    if (klasse) p.className = klasse;
    p.textContent = text; host.appendChild(p); return p;
  }

  function katalogEintrag(id) {
    return (window.MeridianKatalog || []).filter(function (m) { return m.id === id; })[0];
  }

  function nochNicht() {
    var k = katalogEintrag(id);
    var ansicht = { front: "Vorder", back: "Rück", side: "Seiten" }[k && k.view] || "Vorder";
    document.title = (k ? k.titel : "Meridian") + " – Healthlane Academy";
    $("hKanal").textContent = "In Arbeit";
    $("hTitel").textContent = k ? k.titel : "Meridian";
    $("hIntro").textContent = "Dieser Meridian ist noch nicht kalibriert. Die Punktlagen werden " +
      "mit dem Kalibrator auf die " + ansicht + "ansicht gesetzt und dann hier eingetragen.";
    ["organ", "folge"].forEach(function (s) { $(s).style.display = "none"; });
    document.querySelector(".tafel-grid").style.display = "none";
  }

  var s = document.createElement("script");
  s.src = "data/" + id + ".js";
  s.onerror = nochNicht;
  s.onload = function () {
    var data = Meridian.get(id);
    if (!data) return nochNicht();
    aufbauen(data);
  };
  document.head.appendChild(s);

  function aufbauen(data) {
    var lbl = data.codeDe || data.code;
    var titel = data.titel || (data.name + "meridian");
    document.title = titel + " – Healthlane Academy";

    /* --- Kopf --- */
    /* Ren Mai und Du Mai sind keine Organmeridiane: sie haben weder
       Wandlungsphase noch Organuhr und gehören zu keinem Umlauf. Beide
       bringen darum ihre eigene Rubrik und Merkmalsliste mit. */
    $("hKanal").textContent = data.rubrik ||
      ("Leitbahn · " + data.channel + " " + (data.channelHan || "") +
       " · " + (data.yin ? "Yin" : "Yang") + " · Umlauf " + (data.ord <= 4 ? 1 : data.ord <= 8 ? 2 : 3));
    var h1 = $("hTitel"); h1.textContent = titel;
    if (data.nameHan) h1.appendChild(han(data.nameHan));
    $("hIntro").textContent = data.intro || "";
    (data.meta || [["Element", data.element + " " + (data.elementHan || "")],
     ["Kopplung", data.coupledName || "–"],
     ["Organuhr", data.clock],
     ["Punkte", String(data.pointCount)],
     ["Flussrichtung", data.direction],
     ["Kennung", lbl + " · " + data.code],
     ["Bezeichnung", "Leitbahn · Meridian · Jīngluò 经络"]
    ]).forEach(function (r) {
      var li = document.createElement("li");
      var b = document.createElement("b"); b.textContent = r[0];
      var sp = document.createElement("span"); sp.textContent = r[1];
      li.appendChild(b); li.appendChild(sp); $("hMeta").appendChild(li);
    });
    $("fTitel").textContent = lbl + " 1 bis " + lbl + " " + data.pointCount;
    $("gTitel").textContent = titel;

    /* --- Organabschnitt --- */
    var o = data.organ;
    if (o) {
      if (o.label) $("lblOrgan").textContent = o.label;
      if (o.zustandLabel) $("lblZustand").textContent = o.zustandLabel;
      if (o.nahrungLabel) $("lblNahrung").textContent = o.nahrungLabel;
      $("oTitel").textContent = o.titel;
      if (o.han) $("oTitel").appendChild(han(o.han));
      o.text.forEach(function (t) {
        var p = document.createElement("p"); p.textContent = t; $("oText").appendChild(p);
      });
      o.eigenschaften.forEach(function (e) {
        var d = document.createElement("div");
        var dt = document.createElement("dt"); dt.textContent = e.k;
        var dd = document.createElement("dd"); dd.textContent = e.v;
        d.appendChild(dt); d.appendChild(dd); $("oEigenschaften").appendChild(d);
      });
      /* Aufgaben des Organs, anklickbar */
      $("oAufgabenTitel").textContent = o.aufgabenTitel;
      falttafel($("oAufgaben"), o.aufgaben.map(function (a) {
        return { titel: a.titel, han: a.han, fuellen: function (c) { absatz(c, a.text); } };
      }), 0);

      /* Wandlungsphasen */
      phasenAbschnitt(o.wx);

      /* Mangel und Fülle */
      $("zTitel").textContent = o.zustaendeTitel;
      $("zHinweis").textContent = o.zustaendeHinweis;
      zustandsMatrix(o.zustaende);

      /* Äußere Faktoren */
      $("aeTitel").textContent = o.aeussereTitel;
      falttafel($("oAeussere"), (o.aeussere || []).map(function (a) {
        return { titel: a.name, han: a.han, fuellen: function (c) {
          absatz(c, a.pinyin, "punkte");
          absatz(c, a.zeichen);
          absatz(c, "Häufig verwendete Punkte: " + a.punkte, "punkte");
        } };
      }), -1);

      /* Ernährung */
      $("nTitel").textContent = o.nahrungTitel;
      falttafel($("nFalt"), [
        { titel: o.nahrung.staerktTitel || "Was das Organ stärkt",
          fuellen: function (c) { nahrungsliste(c, o.nahrung.staerkt); } },
        { titel: o.nahrung.schadetTitel || "Was ihm schadet",
          fuellen: function (c) { nahrungsliste(c, o.nahrung.schadet); } }
      ], 0);
      $("nHinweis").textContent = o.nahrung.hinweis;
      $("oHinweis").textContent = o.hinweis;
    } else {
      ["organ", "phasen", "zustaende", "ernaehrung"].forEach(function (x) {
        $(x).style.display = "none";
      });
    }

    /* --- Tafel --- */
    var zeilen = [];
    var ctl = Meridian.mount({
      svg: $("plate"), data: data,
      onPoint: function (p, i) { punktZeigen(p, i); }
    });

    function punktZeigen(p, i) {
      $("dKennung").textContent = lbl + " " + p.n + "  ·  " + data.code + " " + p.n;
      var n = $("dName"); n.textContent = p.pinyin;
      if (p.han) n.appendChild(han(p.han));
      $("dDe").textContent = p.de || "";
      $("dEn").textContent = p.en ? "englisch: " + p.en : "";
      var m = $("dMerkmale"); m.innerHTML = "";
      if (p.antik) {
        var a = document.createElement("span"); a.className = "merkmal";
        a.textContent = "Antikpunkt"; m.appendChild(a);
      }
      (p.tags || []).forEach(function (t, k) {
        var sp = document.createElement("span");
        sp.className = "merkmal" + (k > 1 ? " offen" : "");
        sp.textContent = t; m.appendChild(sp);
      });
      $("dLage").textContent = p.loc || "–";
      $("dWirkung").textContent = p.ind || "–";
      $("dStich").textContent = p.nd || "–";
      $("gPunkt").textContent = lbl + " " + p.n + " " + p.pinyin;
      zeilen.forEach(function (b, k) { b.setAttribute("aria-current", k === i ? "true" : "false"); });
    }

    /* --- Punktfolge --- */
    ctl.points.forEach(function (p, i) {
      var li = document.createElement("li"), b = document.createElement("button");
      b.type = "button";
      var k = document.createElement("span"); k.className = "k"; k.textContent = lbl + " " + p.n;
      var nm = document.createElement("span"); nm.className = "p";
      nm.textContent = p.pinyin; if (p.han) nm.appendChild(han(p.han));
      var en = document.createElement("span"); en.className = "e";
      en.textContent = (p.de || "") + (p.en ? " · " + p.en : "");
      var r = document.createElement("span"); r.className = "r"; r.textContent = p.role || "";
      b.appendChild(k); b.appendChild(nm); b.appendChild(en); b.appendChild(r);
      b.addEventListener("click", function () {
        ctl.select(i);
        $("tafel").scrollIntoView({ block: "center", behavior: "smooth" });
      });
      li.appendChild(b); $("ptListe").appendChild(li); zeilen.push(b);
    });
    punktZeigen(ctl.points[0], 0);

    /* --- Schalter --- */
    function umschalter(btnId, fn, start) {
      var b = $(btnId), an = start;
      b.setAttribute("aria-pressed", an ? "true" : "false");
      b.addEventListener("click", function () {
        an = !an; b.setAttribute("aria-pressed", an ? "true" : "false"); fn(an);
      });
      return { setze: function (v) { an = v; b.setAttribute("aria-pressed", v ? "true" : "false"); } };
    }
    umschalter("btnInner", function (v) { ctl.setLayer("inner", v); }, true);
    umschalter("btnLabels", function (v) { ctl.setLayer("labels", v); }, true);
    if (data.mirror === false) $("btnMirror").disabled = true;
    else umschalter("btnMirror", function (v) { ctl.setLayer("mirror", v); }, true);

    var flussSchalter = umschalter("btnFluss", function (v) { fluss(v); }, false);
    var gFlussSchalter = umschalter("gFluss", function (v) { fluss(v); }, false);
    function fluss(v) { ctl.setFlow(v); flussSchalter.setze(v); gFlussSchalter.setze(v); }

    /* --- Großbild --- */
    var gross = $("grossbild"), buehne = $("gBuehne"), tafel = $("tafel"), offen = false;
    function oeffnen() {
      if (offen) return;
      offen = true;
      buehne.appendChild(ctl.svg);
      ctl.setDetail(true);
      gross.setAttribute("data-offen", "");
      document.body.style.overflow = "hidden";
      $("gSchliessen").focus();
    }
    function schliessen() {
      if (!offen) return;
      offen = false;
      tafel.insertBefore(ctl.svg, tafel.firstChild);
      ctl.setDetail(false);
      ctl.ausschnitt(false);
      $("gAusschnitt").setAttribute("aria-pressed", "false");
      gross.removeAttribute("data-offen");
      document.body.style.overflow = "";
      $("btnGross").focus();
    }
    tafel.addEventListener("click", oeffnen);
    tafel.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); oeffnen(); }
    });
    $("btnGross").addEventListener("click", function (e) { e.stopPropagation(); oeffnen(); });
    $("gSchliessen").addEventListener("click", schliessen);
    umschalter("gAusschnitt", function (v) { ctl.ausschnitt(v); }, false);

    document.addEventListener("keydown", function (e) {
      if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      if (e.key === "Escape" && offen) { e.preventDefault(); schliessen(); }
      else if (e.key === "ArrowRight") { e.preventDefault(); ctl.next(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); ctl.prev(); }
      else if (e.key === "g" || e.key === "G") { e.preventDefault(); offen ? schliessen() : oeffnen(); }
    });
  }

  /* ---------- Nahrungsmittelliste ---------- */
  function nahrungsliste(host, eintraege) {
    var dl = document.createElement("dl");
    dl.className = "nahrung";
    eintraege.forEach(function (e) {
      var d = document.createElement("div");
      var dt = document.createElement("dt"); dt.textContent = e.was;
      var dd = document.createElement("dd"); dd.textContent = e.warum;
      d.appendChild(dt); d.appendChild(dd); dl.appendChild(d);
    });
    host.appendChild(dl);
  }

  /* ---------- Wandlungsphasen ---------- */
  /* Kleine Marke einer Wandlungsphase: Symbol in ihrer Farbe auf getöntem
     Grund. Benutzt dieselbe Quelle wie die Schaubilder. */
  function phasenMarke(ph) {
    var NS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("class", "wx-marke");
    svg.setAttribute("viewBox", "0 0 28 28");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    var r = document.createElementNS(NS, "rect");
    r.setAttribute("x", "0.7"); r.setAttribute("y", "0.7");
    r.setAttribute("width", "26.6"); r.setAttribute("height", "26.6");
    r.setAttribute("rx", "2");
    r.setAttribute("fill", ph.hell); r.setAttribute("stroke", ph.hex);
    r.setAttribute("stroke-width", "1.2");
    svg.appendChild(r);
    var g = document.createElementNS(NS, "g");
    g.setAttribute("transform", "translate(5,5) scale(0.75)");
    var pa = document.createElementNS(NS, "path");
    pa.setAttribute("d", ph.symbol);
    pa.setAttribute("fill", "none"); pa.setAttribute("stroke", ph.hex);
    pa.setAttribute("stroke-width", "1.9");
    pa.setAttribute("stroke-linecap", "round");
    pa.setAttribute("stroke-linejoin", "round");
    g.appendChild(pa); svg.appendChild(g);
    return svg;
  }

  function phasenAbschnitt(aktiv) {
    var W = window.Wandlungsphasen;
    if (!W || !aktiv) { $("phasen").style.display = "none"; return; }
    var p = W.phasen[aktiv];

    $("pLead").textContent = "Dieses Organ gehört zur Wandlungsphase " + p.name + " " + p.han +
      ". Sie wird von " + W.phasen[vorgaenger(aktiv)].name + " genährt, nährt selbst " +
      W.phasen[nachfolger(aktiv)].name + ", bändigt " + W.phasen[W.kontrolle[aktiv]].name +
      " und wird von " + W.phasen[baendiger(aktiv)].name + " gebändigt.";

    Wuxing.diagramm($("svgWuxing"), aktiv);
    Wuxing.organuhr($("svgUhr"), (window.__meridianId || "lu"));

    var t = $("tZuordnung");
    var thead = document.createElement("thead");
    var kopf = document.createElement("tr");
    kopf.appendChild(document.createElement("th"));
    W.reihenfolge.forEach(function (k) {
      var ph = W.phasen[k];
      var th = document.createElement("th");
      if (k === aktiv) th.className = "aktiv";
      th.appendChild(phasenMarke(ph));
      th.appendChild(document.createTextNode(ph.name));
      th.appendChild(han(ph.han));
      var s = document.createElement("small");
      s.textContent = ph.zang + " · " + ph.fu;
      th.appendChild(s);
      kopf.appendChild(th);
    });
    thead.appendChild(kopf); t.appendChild(thead);

    var tbody = document.createElement("tbody");
    W.merkmale.forEach(function (m) {
      var tr = document.createElement("tr");
      var th = document.createElement("th"); th.scope = "row"; th.textContent = m.label;
      tr.appendChild(th);
      W.reihenfolge.forEach(function (k) {
        var td = document.createElement("td");
        if (k === aktiv) td.className = "aktiv";
        td.textContent = W.phasen[k][m.k];
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    t.appendChild(tbody);
  }
  function nachfolger(k) {
    var R = window.Wandlungsphasen.reihenfolge;
    return R[(R.indexOf(k) + 1) % R.length];
  }
  function vorgaenger(k) {
    var R = window.Wandlungsphasen.reihenfolge;
    return R[(R.indexOf(k) + R.length - 1) % R.length];
  }
  function baendiger(k) {
    var K = window.Wandlungsphasen.kontrolle, r = null;
    Object.keys(K).forEach(function (von) { if (K[von] === k) r = von; });
    return r;
  }

  /* ---------- Yin-Yang-Matrix ---------- */
  function zustandsMatrix(zustaende) {
    var felder = Array.prototype.slice.call(document.querySelectorAll(".matrix-feld"));
    var detail = $("zDetail");

    felder.forEach(function (b) {
      var z = zustaende[parseInt(b.dataset.feld, 10)];
      if (!z) { b.disabled = true; return; }
      var f = document.createElement("span"); f.className = "f"; f.textContent = z.feld;
      var h = document.createElement("span"); h.className = "h"; h.textContent = z.han;
      var k = document.createElement("span"); k.className = "k"; k.textContent = z.kurz;
      b.appendChild(f); b.appendChild(h); b.appendChild(k);
      b.addEventListener("click", function () { waehle(parseInt(b.dataset.feld, 10)); });
    });

    function waehle(i) {
      var z = zustaende[i];
      felder.forEach(function (b) {
        b.setAttribute("aria-pressed", parseInt(b.dataset.feld, 10) === i ? "true" : "false");
      });
      detail.innerHTML = "";
      var h3 = document.createElement("h3");
      h3.textContent = z.feld;
      h3.appendChild(han(z.han));
      var pin = document.createElement("p"); pin.className = "pinyin"; pin.textContent = z.pinyin;
      var en = document.createElement("p"); en.className = "en"; en.textContent = "englisch: " + z.en;
      detail.appendChild(h3); detail.appendChild(pin); detail.appendChild(en);

      var dl = document.createElement("dl");
      [["Kurz", z.kurz], ["Zeichen", z.zeichen], ["Zunge", z.zunge],
       ["Puls", z.puls], ["Punkte", z.punkte]].forEach(function (r) {
        if (!r[1]) return;
        var dt = document.createElement("dt"); dt.textContent = r[0];
        var dd = document.createElement("dd"); dd.textContent = r[1];
        dl.appendChild(dt); dl.appendChild(dd);
      });
      detail.appendChild(dl);
    }
    waehle(0);
  }

})();
