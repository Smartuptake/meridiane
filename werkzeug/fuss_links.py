# -*- coding: utf-8 -*-
"""Spiegelt die Zeichnung des rechten Fussruecken zur linken.

Blase und Gallenblase sind auf der Figur am linken Fuss eingezeichnet.
Eine rechte Fusszeichnung mit linken Punkten waere falsch herum, darum
dieselben Knochen an der Senkrechten gespiegelt: x' = 250 - x.
Grosszehe links, kleine Zehe rechts.
"""
import io, os, re, sys

SPIEGEL = 250.0

def spiegeln(d):
    """Spiegelt einen Pfad. Kapseln haben Boegen, deren Drehsinn sich
    dabei umkehrt; darum wird das Sweep-Flag mitgedreht."""
    teile = re.findall(r'[MLAQZ][^MLAQZ]*', d)
    raus = []
    for t in teile:
        b, rest = t[0], t[1:].strip()
        if b == "Z":
            raus.append("Z"); continue
        z = [x for x in re.split(r'[ ,]+', rest) if x]
        if b in "ML":
            raus.append("%s%s,%s" % (b, runde(SPIEGEL - float(z[0])), z[1]))
        elif b == "Q":
            raus.append("Q%s,%s %s,%s" % (runde(SPIEGEL - float(z[0])), z[1],
                                          runde(SPIEGEL - float(z[2])), z[3]))
        elif b == "A":
            # rx ry rot grossbogen sweep x y  – sweep kippt beim Spiegeln
            raus.append("A%s,%s %s %s %s %s,%s" % (z[0], z[1], z[2], z[3],
                        "1" if z[4] == "0" else "0",
                        runde(SPIEGEL - float(z[5])), z[6]))
    return " ".join(raus)

def runde(v):
    return ("%.1f" % v).rstrip("0").rstrip(".")

p = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "data", "skelette.js")
s = io.open(p, encoding="utf-8").read()
i = s.find("  fussruecken: {"); j = s.find("\n  handflaeche: {")
teil = s[i:j]
knochen = re.findall(r'\{ name: "([^"]+)", d: "([^"]+)"(, stark: true)? \}', teil)
zeilen = ['      { name: "%s", d: "%s"%s }' % (n, spiegeln(d), st or "")
          for n, d, st in knochen]
io.open("/tmp/fuss_links.txt", "w", encoding="utf-8").write(",\n".join(zeilen))
print(len(knochen), "Knochen gespiegelt")
