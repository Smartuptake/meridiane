/* Seitenlogik für das Makko-Ho-Tableau der Meridian-Dehnung. */
(function () {
  "use strict";
  var D = window.Meridiandehnung, W = window.Wandlungsphasen;
  function $(x) { return document.getElementById(x); }
  function han(t) {
    var s = document.createElement("span"); s.className = "hanzi"; s.textContent = t; return s;
  }

  document.title = D.titel + " – Healthlane Academy";
  $("hLabel").textContent = D.untertitel;
  $("hTitel").textContent = D.titel;
  $("hLead").textContent = D.einleitung;
  [["Übungen", String(D.uebungen.length)],
   ["Meridiane", "12, als sechs Zang-Fu-Paare"],
   ["Ordnung", "Nach den drei Umläufen"],
   ["Haltungen", "Je Ausgangshaltung und Dehnung"]
  ].forEach(function (r) {
    var li = document.createElement("li");
    var b = document.createElement("b"); b.textContent = r[0];
    var sp = document.createElement("span"); sp.textContent = r[1];
    li.appendChild(b); li.appendChild(sp); $("hMeta").appendChild(li);
  });
  $("oOrdnung").textContent = D.ordnung;
  $("oQuelle").textContent = D.quelle;

  if (window.Wuxing) Wuxing.diagramm($("svgWuxing"), null);

  /* Übersichtstafel */
  var t = $("tUebersicht");
  var thead = document.createElement("thead");
  var kopf = document.createElement("tr");
  ["", "Wandlungsphase", "Zang-Fu-Paar", "Umlauf", "Ausgangshaltung", "Dehnung"].forEach(function (h) {
    var th = document.createElement("th"); th.textContent = h; kopf.appendChild(th);
  });
  thead.appendChild(kopf); t.appendChild(thead);
  var tbody = document.createElement("tbody");
  D.uebungen.forEach(function (u) {
    var tr = document.createElement("tr");
    var nr = document.createElement("th"); nr.scope = "row"; nr.textContent = u.nr;
    tr.appendChild(nr);
    var ph = document.createElement("td");
    if (u.wx && W) {
      ph.appendChild(document.createTextNode(W.phasen[u.wx].name));
      ph.appendChild(han(W.phasen[u.wx].han));
    }
    tr.appendChild(ph);
    [u.paar, String(u.umlauf), u.bilder[0].bu, u.bilder[1].bu].forEach(function (v) {
      var td = document.createElement("td"); td.textContent = v; tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  t.appendChild(tbody);

  /* Die sechs Übungen */
  var host = $("dehnListe");
  D.uebungen.forEach(function (u) {
    var art = document.createElement("article");
    art.className = "dehn";

    var bilder = document.createElement("div");
    bilder.className = "dehn-bilder";
    u.bilder.forEach(function (b) {
      var fig = document.createElement("figure");
      var img = document.createElement("img");
      img.src = "../img/uebungen/" + b.d;
      img.alt = b.alt;
      img.loading = "lazy";
      img.decoding = "async";
      var cap = document.createElement("figcaption");
      cap.textContent = b.bu;
      fig.appendChild(img); fig.appendChild(cap);
      bilder.appendChild(fig);
    });
    art.appendChild(bilder);

    var text = document.createElement("div");
    text.className = "dehn-text";

    var kopfz = document.createElement("div"); kopfz.className = "laut-kopf";
    var nr = document.createElement("span"); nr.className = "nr"; nr.textContent = u.nr;
    var block = document.createElement("div");
    var h3 = document.createElement("h3");
    h3.textContent = u.wx && W ? W.phasen[u.wx].name : "–";
    if (u.wx && W) h3.appendChild(han(W.phasen[u.wx].han));
    var paar = document.createElement("p"); paar.className = "dehn-paar";
    paar.textContent = u.paar;
    var meta = document.createElement("p"); meta.className = "laut-meta";
    meta.textContent = "Umlauf " + u.umlauf;
    block.appendChild(h3); block.appendChild(paar); block.appendChild(meta);
    kopfz.appendChild(nr); kopfz.appendChild(block);
    text.appendChild(kopfz);

    var dl = document.createElement("dl"); dl.className = "schritte";
    u.schritte.forEach(function (s) {
      var dt = document.createElement("dt"); dt.textContent = s.t;
      var dd = document.createElement("dd"); dd.textContent = s.x;
      dl.appendChild(dt); dl.appendChild(dd);
    });
    text.appendChild(dl);

    art.appendChild(text);
    host.appendChild(art);
  });
})();
