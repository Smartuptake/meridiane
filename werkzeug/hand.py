# -*- coding: utf-8 -*-
"""Erzeugt die Knochen der rechten Hand, von der Handflaeche und vom
Handruecken. Beides ist dieselbe Hand; der Handruecken ist die an der
Senkrechten gespiegelte Handflaeche.

Ausrichtung Handflaeche: Daumen links, Finger nach unten – so steht der
rechte Arm auf der Vorderansicht der Figur, mit der Handflaeche nach vorn.
Ausrichtung Handruecken: Daumen rechts – so steht er auf der Rueckansicht.

Ausser den Handwurzelknochen reicht ein Stueck Elle und Speiche, gut drei
Cun weit. Weiter oben liegende Punkte bleiben vorerst beim Foto.
"""
import io, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from knochen import kapsel, brocken

SPIEGEL = 200.0          # x' = SPIEGEL - x

HAND = []
def K(name, x1,y1,r1, x2,y2,r2, dick=False, nurFlaeche=False):
    HAND.append((name, ("kapsel", (x1,y1,r1,x2,y2,r2)), dick, nurFlaeche))
def B(name, pts, r=5.0, dick=False, nurFlaeche=False):
    HAND.append((name, ("brocken", (pts, r)), dick, nurFlaeche))

# Unterarm, gut drei Cun weit. Speiche daumenseitig, Elle kleinfingerseitig.
B("Speiche mit Griffelfortsatz",
  [(64,-44),(108,-44),(110,40),(104,56),(92,66),(82,58),(78,40),(62,36)], 5, True)
B("Elle mit Griffelfortsatz",
  [(114,-44),(150,-44),(152,32),(148,48),(140,62),(130,56),(126,40),(112,34)], 5, True)

# Handwurzel, zwei Reihen zu vier
B("Kahnbein",        [(70,62),(94,58),(101,76),(92,88),(74,86),(63,74)], 5, True)
B("Mondbein",        [(96,58),(118,58),(125,72),(117,84),(99,82),(92,70)], 5, True)
B("Dreiecksbein",    [(121,60),(141,62),(146,76),(135,86),(121,82),(115,70)], 5, True)
B("Erbsenbein",      [(132,82),(148,82),(153,94),(143,102),(130,98),(126,88)], 5, True, True)
B("Großes Vieleckbein", [(66,88),(90,84),(97,100),(87,113),(70,110),(59,97)], 5)
B("Kleines Vieleckbein",     [(92,87),(110,85),(115,99),(107,109),(92,107),(87,97)], 4)
B("Kopfbein",        [(112,85),(134,85),(140,101),(131,113),(114,111),(107,97)], 5, True)
B("Hakenbein",       [(136,88),(153,92),(156,106),(147,115),(134,111),(130,97)], 5)

# Mittelhandknochen
K("1. Mittelhandknochen", 74,114,11,  46,160,12, True)
K("2. Mittelhandknochen", 100,114, 9,  92,198,11)
K("3. Mittelhandknochen", 122,116, 9, 120,204,11)
K("4. Mittelhandknochen", 140,116, 8, 146,198,10)
K("5. Mittelhandknochen", 152,114, 8, 168,188,10)

# Daumenglieder
K("Grundglied des Daumens", 44,174,11, 32,208,10, True)
K("Endglied des Daumens",   30,220, 9, 24,246, 9, True)

# Fingerglieder: Zeige-, Mittel-, Ring-, Kleinfinger
for i, (kopf, g, m, e) in enumerate([
        ((92,198), (90,212), (86,254), (83,302)),
        ((120,204),(119,218),(118,264),(118,314)),
        ((146,198),(147,212),(150,254),(153,300)),
        ((168,188),(170,202),(177,246),(181,274))]):
    f = ["Zeigefinger", "Mittelfinger", "Ringfinger", "kleinen Fingers"][i]
    wort = "des " + f if i == 3 else "des " + f
    K("Grundglied %s"  % wort, g[0],g[1], 9-i*0.4,  m[0],m[1]-10, 8-i*0.4)
    K("Mittelglied %s" % wort, m[0],m[1], 7-i*0.35, e[0],e[1]-10, 6.5-i*0.35)
    K("Endglied %s"    % wort, e[0],e[1], 6-i*0.3,  e[0]-1,e[1]+[18,18,16,14][i], 6-i*0.3)

def bauen(gespiegelt):
    raus = []
    for name, (art, arg), dick, nurF in HAND:
        if gespiegelt and nurF:
            continue
        if art == "kapsel":
            x1,y1,r1,x2,y2,r2 = arg
            if gespiegelt: x1, x2 = SPIEGEL-x1, SPIEGEL-x2
            d = kapsel(x1,y1,r1,x2,y2,r2)
        else:
            pts, r = arg
            if gespiegelt: pts = [(SPIEGEL-a, b) for a, b in pts][::-1]
            d = brocken(pts, r)
        raus.append('      { name: "%s", d: "%s"%s }' % (name, d, ", stark: true" if dick else ""))
    return ",\n".join(raus)

io.open("/tmp/hand_flaeche.txt","w",encoding="utf-8").write(bauen(False))
io.open("/tmp/hand_ruecken.txt","w",encoding="utf-8").write(bauen(True))
print("Handfläche:", bauen(False).count("name:"), "Knochen")
print("Handrücken:", bauen(True).count("name:"), "Knochen")
