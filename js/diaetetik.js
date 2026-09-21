/* Diätetik: Geschmackskarten, Thermik-Leiter und die Nahrungsmitteltafel.
   Die Farben und Zeichen der Wandlungsphasen kommen aus
   data/wandlungsphasen.js, die Nahrungsmittel aus data/nahrungsmittel.js –
   damit steht jede Zuordnung nur an einer Stelle. */
(function () {
  "use strict";
  var W = window.Wandlungsphasen, N = window.Nahrung;
  var NS = "http://www.w3.org/2000/svg";
  function $(id) { return document.getElementById(id); }
  function el(tag, klasse) {
    var e = document.createElement(tag);
    if (klasse) e.className = klasse;
    return e;
  }
  function hanzi(t) {
    var s = document.createElement("span");
    s.className = "hanzi"; s.textContent = t; return s;
  }

  /* Das Zeichen der Wandlungsphase, wie auf der Phasenseite */
  function symbol(ph, groesse) {
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("width", groesse); svg.setAttribute("height", groesse);
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("class", "phase-symbol");
    var p = document.createElementNS(NS, "path");
    p.setAttribute("d", ph.symbol); p.setAttribute("fill", "none");
    p.setAttribute("stroke", ph.hex); p.setAttribute("stroke-width", "1.5");
    p.setAttribute("stroke-linecap", "round"); p.setAttribute("stroke-linejoin", "round");
    svg.appendChild(p);
    return svg;
  }

  /* --- Die fünf Geschmäcker ------------------------------------- */
  var GESCHMACK = {
    holz: {
      titel: "Sauer", han: "酸", pinyin: "suān",
      kurz: "Zusammenziehend. Hält, was auslaufen will.",
      wirkt: [
        "Zieht zusammen und hält: bei zuviel Schweiß, bei lockerem Stuhl",
        "Nährt das Leber-Yin und die Säfte",
        "Sauer-kühl erfrischt und kühlt die emotionale Hitze in Leber und Gallenblase",
        "„Sauer macht lustig“ – bei Ärger und seelischem Druck"
      ],
      zuviel: "Ein Übermaß zieht zu sehr zusammen und staut das Leber-Qi. " +
              "Bei einer beginnenden Erkältung ist Saures ungünstig: es zieht den Erreger " +
              "nach innen statt ihn auszuleiten. Scharf statt heiße Zitrone."
    },
    feuer: {
      titel: "Bitter", han: "苦", pinyin: "kǔ",
      kurz: "Absenkend und trocknend. Leitet nach unten und aus.",
      wirkt: [
        "Bitter-kühl leitet nach unten und unterstützt Verdauung und Ausscheidung",
        "Bitter-kühl nährt das Herz-Yin und beruhigt nach Anspannung",
        "Bitter-warm trocknet Feuchtigkeit und stärkt so das Milz-Qi – Kaffee, Rotwein",
        "Über den Fütterungszyklus stärkt Bitter auch Milz und Magen"
      ],
      zuviel: "Zuviel bitter-kühl wirkt abführend. Zuviel bitter-warm trocknet aus, " +
              "zehrt an den Säften und geht an die Substanz – im Nei Jing heißt es, " +
              "bitter gehe an die Knochen; bei uns gilt Kaffee als Kalziumräuber."
    },
    erde: {
      titel: "Süß", han: "甘", pinyin: "gān",
      kurz: "Aufbauend und entspannend. Der Geschmack der Mitte.",
      wirkt: [
        "Tonisiert alle Organe, vor allem aber das Milz-Qi – er baut auf",
        "Süß-kalt nährt das Yin, süß-warm das Yang",
        "Nährt die Säfte, befeuchtet und verlangsamt – dadurch entspannt er",
        "Löst innere Anspannung: Frustessen und Kummerspeck haben hier ihren Ort"
      ],
      zuviel: "Ein Übermaß schädigt das Milz-Qi und erzeugt Feuchtigkeit, daraus wird " +
              "Schleim. Gemeint ist die Süße von Getreide, Hülsenfrüchten und gekochtem " +
              "Gemüse – nicht Zucker. Zucker ist ein Qi-Räuber."
    },
    metall: {
      titel: "Scharf", han: "辛", pinyin: "xīn",
      kurz: "Bewegend und zerstreuend. Der schnellste Geschmack.",
      wirkt: [
        "Stärkt die Lunge, bewegt Qi und Blut, belebt die Zirkulation",
        "Befreit die Oberfläche – scharf-warm leitet Kälte aus, scharf-kühl Hitze",
        "Zerstreut Feuchtigkeit, wenn sie die Milz blockiert",
        "Führt das Qi nach oben: gut bei Traurigkeit und Niedergeschlagenheit"
      ],
      zuviel: "Weil er nach oben führt, ist Scharfes ungünstig bei Hörsturz, Glaukom " +
              "und Migräne. Er kann auch den Shen zerstreuen – innere Unruhe, " +
              "Schlafstörungen. Alkohol ist scharf und warm: er hebt das Qi und " +
              "zerstreut es auf Dauer gleich mit."
    },
    wasser: {
      titel: "Salzig", han: "咸", pinyin: "xián",
      kurz: "Erweichend und absenkend. Führt in die Tiefe.",
      wirkt: [
        "Geht zur Niere und in die Knochen – so sagt es das Nei Jing",
        "Erweicht Härte und Knoten, löst Verhärtetes auf",
        "Führt nach unten und nach innen, in die Tiefe",
        "Die Niere liebt Härte: bei Yang-Mangel entsteht manchmal Verlangen nach Salzigem"
      ],
      zuviel: "Ein Übermaß trocknet über den Kontrollzyklus aus und belastet die Niere. " +
              "Salzig-kalt wie stark mineralisiertes Wasser kühlt stark ab."
    }
  };

  function geschmaecker() {
    var ziel = $("geschmaecker"); if (!ziel) return;
    W.reihenfolge.forEach(function (k) {
      var ph = W.phasen[k], g = GESCHMACK[k];
      var karte = el("article", "phase-karte");
      karte.style.setProperty("--phase", ph.hex);
      karte.style.setProperty("--phase-hell", ph.hell);

      var kopf = el("div", "phase-kopf");
      kopf.appendChild(symbol(ph, 30));
      var wort = el("div");
      var h = el("h3"); h.textContent = g.titel; h.appendChild(hanzi(g.han));
      var p = el("p", "phase-pinyin"); p.textContent = g.pinyin + " · " + ph.name;
      wort.appendChild(h); wort.appendChild(p);
      kopf.appendChild(wort);
      karte.appendChild(kopf);

      var kurz = el("p"); kurz.style.cssText = "margin:16px 0 0;font-size:.944rem";
      kurz.textContent = g.kurz;
      karte.appendChild(kurz);

      var ul = el("ul", "wirkrichtung");
      g.wirkt.forEach(function (t) {
        var li = el("li"); li.textContent = t; ul.appendChild(li);
      });
      karte.appendChild(ul);

      var zu = el("p", "phase-bahnen");
      zu.style.marginTop = "auto";
      var b = el("strong"); b.textContent = "Zuviel davon: ";
      zu.appendChild(b); zu.appendChild(document.createTextNode(g.zuviel));
      karte.appendChild(zu);

      ziel.appendChild(karte);
    });
  }

  /* --- Das Temperaturverhalten ---------------------------------- */
  var STUFEN = [
    { k: "heiss",   name: "Heiß",    han: "热", farbe: "#B21D1D",
      text: "Treibt das Yang stark nach außen und oben. In kleinen Mengen und kurz – " +
            "Chili, Pfeffer, Zimt, hochprozentiger Alkohol. Bei Hitzezeichen zu meiden." },
    { k: "warm",    name: "Warm",    han: "温", farbe: "#D07A2B",
      text: "Wärmt die Mitte und baut Yang und Qi auf. Der größte Teil dessen, was " +
            "täglich auf den Teller gehört, besonders im Winter und in der Genesung." },
    { k: "neutral", name: "Neutral", han: "平", farbe: "#A39B90",
      text: "Verschiebt nichts. Getreide, Hülsenfrüchte, vieles Gemüse – die ruhige " +
            "Grundlage, die man jeden Tag essen kann, ohne etwas zu kippen." },
    { k: "kuehl",   name: "Kühl",    han: "凉", farbe: "#5E8CA8",
      text: "Kühlt sanft und nährt die Säfte. Gut im Sommer und bei Hitzezeichen, " +
            "ungünstig bei einer kalten, schwachen Mitte." },
    { k: "kalt",    name: "Kalt",    han: "寒", farbe: "#2E4160",
      text: "Kühlt stark und löscht das Feuer unter dem Kessel. Rohkost, Eis, Südfrüchte. " +
            "Für die meisten Mitten zuviel – wenn, dann im Hochsommer." }
  ];
  var STUFE_FARBE = {};
  STUFEN.forEach(function (s) { STUFE_FARBE[s.k] = s.farbe; });
  var STUFE_NAME = {};
  STUFEN.forEach(function (s) { STUFE_NAME[s.k] = s.name; });

  function thermik() {
    var ziel = $("thermik"); if (!ziel) return;
    var zahl = {};
    N.gruppen.forEach(function (g) {
      g.eintraege.forEach(function (e) { zahl[e.t] = (zahl[e.t] || 0) + 1; });
    });
    STUFEN.forEach(function (s) {
      var k = el("article", "thermik-stufe");
      k.style.setProperty("--stufe", s.farbe);
      var h = el("h3"); h.textContent = s.name; h.appendChild(hanzi(s.han));
      k.appendChild(h);
      var p = el("p"); p.textContent = s.text; k.appendChild(p);
      var z = el("p", "zahl");
      z.textContent = (zahl[s.k] || 0) + " von " + gesamt() + " Nahrungsmitteln";
      k.appendChild(z);
      ziel.appendChild(k);
    });
  }

  function gesamt() {
    return N.gruppen.reduce(function (s, g) { return s + g.eintraege.length; }, 0);
  }

  /* --- Die Nahrungsmitteltafel ---------------------------------- */
  function tafel() {
    var ziel = $("tafel"); if (!ziel) return;
    var fGruppe = $("fGruppe"), fPhase = $("fPhase"), fTherm = $("fTherm"),
        fSuche = $("fSuche"), zaehler = $("nmZaehler");

    N.gruppen.forEach(function (g) {
      var o = el("option"); o.value = g.name; o.textContent = g.name;
      fGruppe.appendChild(o);
    });
    W.reihenfolge.forEach(function (k) {
      var o = el("option"); o.value = k;
      o.textContent = W.phasen[k].name + " – " + GESCHMACK[k].titel;
      fPhase.appendChild(o);
    });
    STUFEN.forEach(function (s) {
      var o = el("option"); o.value = s.k; o.textContent = s.name;
      fTherm.appendChild(o);
    });

    function zeichnen() {
      var suche = fSuche.value.trim().toLowerCase();
      ziel.innerHTML = "";
      var n = 0;
      N.gruppen.forEach(function (g) {
        if (fGruppe.value && fGruppe.value !== g.name) return;
        var treffer = g.eintraege.filter(function (e) {
          if (fPhase.value && e.el !== fPhase.value) return false;
          if (fTherm.value && e.t !== fTherm.value) return false;
          if (suche && e.n.toLowerCase().indexOf(suche) < 0) return false;
          return true;
        });
        if (!treffer.length) return;
        n += treffer.length;

        var block = el("section", "nm-gruppe");
        var h = el("h3"); h.textContent = g.name; h.appendChild(hanzi(g.han));
        var s = document.createElement("small");
        s.textContent = treffer.length + (treffer.length === 1 ? " Eintrag" : " Einträge");
        h.appendChild(s);
        block.appendChild(h);

        var liste = el("div", "nm-liste");
        treffer.forEach(function (e) {
          var z = el("div", "nm-eintrag");
          var punkt = el("span", "nm-punkt");
          if (e.el) punkt.style.setProperty("--phase", W.phasen[e.el].hex);
          punkt.title = e.el ? W.phasen[e.el].name : "Wandlungsphase nicht angegeben";
          z.appendChild(punkt);
          var name = el("span", "name"); name.textContent = e.n;
          z.appendChild(name);
          var t = el("span", "therm");
          t.style.setProperty("--stufe", STUFE_FARBE[e.t] || "transparent");
          t.textContent = STUFE_NAME[e.t] || "–";
          z.appendChild(t);
          liste.appendChild(z);
        });
        block.appendChild(liste);
        ziel.appendChild(block);
      });
      if (!n) {
        var leer = el("p", "nm-leer");
        leer.textContent = "Dazu steht nichts in der Liste.";
        ziel.appendChild(leer);
      }
      zaehler.textContent = n + " von " + gesamt();
    }

    [fGruppe, fPhase, fTherm].forEach(function (f) { f.addEventListener("change", zeichnen); });
    fSuche.addEventListener("input", zeichnen);
    zeichnen();

    /* Legende */
    var leg = $("nmLegende");
    if (leg) {
      W.reihenfolge.forEach(function (k) {
        var ph = W.phasen[k];
        var s = el("span");
        var i = el("i"); i.style.background = ph.hex;
        s.appendChild(i);
        s.appendChild(document.createTextNode(ph.name + " · " + GESCHMACK[k].titel));
        leg.appendChild(s);
      });
      var o = el("span");
      var oi = el("i"); oi.style.background = "transparent";
      o.appendChild(oi);
      o.appendChild(document.createTextNode("ohne Angabe (" + N.offen.length + ")"));
      leg.appendChild(o);
    }
  }

  /* --- Die offenen Einträge ehrlich ausweisen ------------------- */
  function offen() {
    var ziel = $("offen"); if (!ziel || !N.offen.length) return;
    ziel.textContent = N.offen.map(function (o) { return o.n; }).join(" · ");
  }

  geschmaecker(); thermik(); tafel(); offen();
})();
