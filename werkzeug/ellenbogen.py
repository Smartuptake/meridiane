# -*- coding: utf-8 -*-
"""Ellenbogen, rechter Arm, von vorn und von hinten.

Hier traegt der Baukasten: Oberarmknochen, Elle und Speiche sind lange,
deutlich getrennte Knochen, und die beiden Knorren am unteren Ende des
Oberarmknochens sind genau die Landmarken, von denen die Lageangaben
sprechen.

Von vorn liegt die Speiche links – auf der Vorderansicht ist die
Daumenseite aussen, also bei den kleineren x. Von hinten ist es
umgekehrt.

Ein Cun misst am Unterarm 25 Bildpunkte, am Oberarm 28.
"""
import io, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from knochen import kapsel, brocken

def bauen(teile):
    return ",\n".join('      { name: "%s", d: "%s"%s }' % (n, d, ", stark: true" if s else "")
                      for n, d, s in teile)

VORN = [
 ("Oberarmknochen", kapsel(100,-30,26, 100,116,33), True),
 ("Untere Knorren des Oberarmknochens",
  brocken([(46,118),(154,118),(165,146),(156,168),(126,179),(74,179),(43,168),(35,146)], 9), True),
 ("Köpfchen der Speiche",
  brocken([(48,182),(80,182),(86,198),(78,212),(54,212),(42,196)], 7), True),
 ("Speiche", kapsel(64,208,14, 52,332,13), True),
 ("Elle",    kapsel(128,186,21, 122,332,13), True),
]

HINTEN = [
 ("Oberarmknochen", kapsel(100,-30,26, 100,112,33), True),
 ("Untere Knorren des Oberarmknochens",
  brocken([(44,114),(156,114),(166,142),(155,163),(120,171),(76,171),(39,161),(32,140)], 9), True),
 ("Ellenbogenhöcker",
  brocken([(76,150),(122,148),(133,172),(124,195),(88,197),(68,176)], 8), True),
 ("Elle",    kapsel(104,196,18, 88,332,13), True),
 ("Köpfchen der Speiche",
  brocken([(126,180),(158,178),(164,196),(155,210),(130,210),(118,194)], 6), True),
 ("Speiche", kapsel(142,206,14, 150,332,12), True),
]

io.open("/tmp/ell_vorn.txt","w",encoding="utf-8").write(bauen(VORN))
io.open("/tmp/ell_hinten.txt","w",encoding="utf-8").write(bauen(HINTEN))
print("vorn", len(VORN), "| hinten", len(HINTEN))
