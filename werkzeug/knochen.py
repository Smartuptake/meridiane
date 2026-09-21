# -*- coding: utf-8 -*-
"""Erzeugt SVG-Pfade fuer Knochenzeichnungen aus einer Masstabelle.

Zwei Grundformen reichen fuer Hand und Fuss:

  kapsel(c1, r1, c2, r2)  zwei Kreise mit ihren aeusseren Tangenten.
                          Das ist die Form jedes Roehrenknochens:
                          Mittelfuss-, Mittelhand- und Zehenglieder.
  brocken(punkte, rundung) ein abgerundetes Vieleck fuer die
                          Fusswurzel- und Handwurzelknochen.

So steht in der Datei eine Tabelle mit Zahlen, keine von Hand
gemalten Pfade – und die Zeichnung laesst sich nachrechnen.
"""
import math

def n(v):
    return ("%.1f" % v).rstrip("0").rstrip(".")

def kapsel(x1, y1, r1, x2, y2, r2):
    dx, dy = x2 - x1, y2 - y1
    d = math.hypot(dx, dy)
    if d <= abs(r1 - r2):
        raise ValueError("Kreise liegen ineinander")
    a = math.atan2(dy, dx)
    b = math.acos((r1 - r2) / d)
    p1a = (x1 + r1 * math.cos(a + b), y1 + r1 * math.sin(a + b))
    p2a = (x2 + r2 * math.cos(a + b), y2 + r2 * math.sin(a + b))
    p2b = (x2 + r2 * math.cos(a - b), y2 + r2 * math.sin(a - b))
    p1b = (x1 + r1 * math.cos(a - b), y1 + r1 * math.sin(a - b))
    return ("M%s,%s L%s,%s A%s,%s 0 0 0 %s,%s L%s,%s A%s,%s 0 0 0 %s,%s Z" % (
        n(p1a[0]), n(p1a[1]), n(p2a[0]), n(p2a[1]),
        n(r2), n(r2), n(p2b[0]), n(p2b[1]),
        n(p1b[0]), n(p1b[1]), n(r1), n(r1), n(p1a[0]), n(p1a[1])))

def brocken(punkte, rundung=5.0):
    m = len(punkte)
    teile = []
    for i in range(m):
        vor, jetzt, nach = punkte[i - 1], punkte[i], punkte[(i + 1) % m]
        def kurz(a, b, r):
            dx, dy = b[0] - a[0], b[1] - a[1]
            L = math.hypot(dx, dy) or 1
            r = min(r, L / 2.2)
            return (a[0] + dx / L * r, a[1] + dy / L * r)
        ein = kurz(jetzt, vor, rundung)
        aus = kurz(jetzt, nach, rundung)
        if i == 0:
            teile.append("M%s,%s" % (n(ein[0]), n(ein[1])))
        else:
            teile.append("L%s,%s" % (n(ein[0]), n(ein[1])))
        teile.append("Q%s,%s %s,%s" % (n(jetzt[0]), n(jetzt[1]), n(aus[0]), n(aus[1])))
    teile.append("Z")
    return " ".join(teile)

# ---------------------------------------------------------------
# Rechter Fuss, Fussruecken. x wächst nach medial (Grosszehe rechts),
# y wächst nach distal (Zehen unten) – wie auf der Vorderansicht.
# ---------------------------------------------------------------
FUSS = []
def K(name, x1, y1, r1, x2, y2, r2, dick=False):
    FUSS.append((name, kapsel(x1, y1, r1, x2, y2, r2), dick))
def B(name, pts, r=5.0, dick=False):
    FUSS.append((name, brocken(pts, r), dick))

# Unterschenkel, nur angeschnitten
K("Schienbein",  152, -18, 27, 153, 46, 25, True)
K("Wadenbein",   104, -18, 13, 103, 52, 15, True)

# Fusswurzel
B("Sprungbein",  [(108,46),(160,44),(169,62),(160,84),(120,88),(105,70)], 7, True)
B("Fersenbein",  [(72,58),(108,56),(114,92),(84,102),(64,84)], 7, True)
B("Kahnbein",    [(136,80),(173,75),(180,96),(171,111),(140,107),(130,92)], 6, True)
B("Wuerfelbein", [(74,96),(113,91),(119,116),(110,133),(80,131),(67,113)], 6, True)
B("Inneres Keilbein",   [(150,108),(183,103),(189,133),(180,147),(152,143),(145,124)], 6)
B("Mittleres Keilbein", [(126,104),(150,101),(153,129),(146,139),(124,135),(119,118)], 5)
B("Aeusseres Keilbein", [(103,99),(126,97),(129,125),(122,135),(100,131),(95,114)], 5)

# Mittelfussknochen
K("1. Mittelfussknochen", 168, 148, 15, 177, 213, 17, True)
K("2. Mittelfussknochen", 138, 140,  9, 145, 221, 12)
K("3. Mittelfussknochen", 114, 136,  8, 119, 217, 11)
K("4. Mittelfussknochen",  94, 132,  8,  95, 211, 10)
K("5. Mittelfussknochen",  74, 126,  9,  71, 203, 11)
B("Hoecker des 5. Mittelfussknochens", [(52,114),(74,110),(80,128),(60,134)], 4)

# Zehenglieder
K("Grundglied der Grosszehe", 179, 231, 13, 183, 271, 12, True)
K("Endglied der Grosszehe",   184, 285, 11, 185, 309, 12, True)
for i, (bx, by, mx, my, dx, dy, r) in enumerate([
        (147, 235, 150, 273, 151, 299, 0),   # 2. Zehe
        (120, 231, 122, 267, 123, 291, 1),   # 3. Zehe
        ( 95, 225,  95, 258,  95, 279, 2),   # 4. Zehe
        ( 70, 217,  67, 246,  66, 263, 3)]): # 5. Zehe
    z = i + 2
    laenge = [38, 36, 33, 29][i]
    K("Grundglied der %d. Zehe" % z, bx, by, 9 - i*0.5, mx, my - 8, 8 - i*0.5)
    K("Mittelglied der %d. Zehe" % z, mx, my, 7 - i*0.4, dx, dy - 7, 6.5 - i*0.4)
    K("Endglied der %d. Zehe" % z, dx, dy, 6 - i*0.3, dx, dy + [13,11,10,9][i], 6.5 - i*0.3)

import io
mit = [z for z in FUSS]
zeilen = []
for name, d, dick in mit:
    zeilen.append('      { name: "%s", d: "%s"%s }' % (name, d, ", stark: true" if dick else ""))
io.open("/tmp/fuss_knochen.txt", "w", encoding="utf-8").write(",\n".join(zeilen))

# Ausdehnung bestimmen
import re
xs, ys = [], []
for _, d, _ in mit:
    for a, b in re.findall(r"(-?\d+\.?\d*),(-?\d+\.?\d*)", d):
        xs.append(float(a)); ys.append(float(b))
print("Knochen:", len(mit))
print("x %.0f .. %.0f   y %.0f .. %.0f" % (min(xs), max(xs), min(ys), max(ys)))
