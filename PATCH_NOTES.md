# Shinobi Next Generation — Notes de version

## NG 1 — Fondations
- Base : Shinobi 2 (mise à jour 13) + Shinobi 1 (Éternel II v4.7). Les choix système par système sont dans DESIGN_CHOICES.md.
- Conservés : tous les techniques et modes, signes des mains dessinés, halo doré, auras orange/violet, temps d’incantation, ennemis loyaux et malins, XP ×5, texte réduit, animation ZZZ et rig v4.6.
- Cartes 5× plus grandes (surface). Monde ouvert 10× plus grand, en 12 zones : Konoha Nouvelle Ère, repaire de Kara, caverne Ryūchi, ruines Ōtsutsuki, labo de Boro, ruines d’Ame…
- Fluidité : sol streamé par tuiles autour de la caméra, ennemis lointains mis en veille.
- Interface ère Boruto : palette bleu nuit, cyan et orange, typographie Exo 2.
- Sauvegarde séparée de Shinobi 1 et 2.

## NG 2 — L’ère Boruto
- 7 modes, avec stades, ultime et roue. Touche **B** pour entrer ou sortir du mode équipé :
  - Kāma (Boruto) ;
  - Mode Momoshiki ;
  - Kāma (Kawaki) ;
  - Mode Baryon (orange) ;
  - Jōgan (violet) ;
  - Code (Kāma libéré) ;
  - Ermite de Mitsuki.
- 106 nouvelles techniques :
  - Équipe 7 de Boruto ;
  - nouvelle génération (Shikadai, Inojin, ChōChō, Metal Lee, Denki, Iwabee, Sumire, Kagura, Shinki, Himawari, Hanabi) ;
  - adultes (Septième Hokage, Sasuke, Sakura, Shikamaru, Konohamaru, Shino, Kakashi, Gaara, Darui, Chōjūrō) ;
  - Kara et Ōtsutsuki.
  - Sukunahikona : le projectile grandit en vol. Le Rasengan Fantôme disparaît puis réapparaît.
- 10 maîtres à défier en duel pour gagner un mode ou des techniques (menu **Ère Boruto**).
- 6 cartes :
  - Konoha Nouvelle Ère ;
  - repaire de Kara ;
  - caverne Ryūchi ;
  - ruines Ōtsutsuki ;
  - labo de Boro ;
  - ruines d’Ame.
- Nouveaux ennemis : ninjas, scientifiques et soldats modifiés de Kara, Zetsu blancs.
- 10 boss : Kashin Kōji, Delta, Boro, Deepa, Ao, Kawaki, Momoshiki, Kinshiki, Urashiki, Code.
- **673 techniques** au total, vérifiées par `tools/count_moves.js`. Aucune référence cassée dans les modes.

## NG 3 — Jigen
- Nouveau boss **Jigen / Isshiki Ōtsutsuki** en 3 phases :
  - Jigen : pieux, Sukunahikona, taijutsu, téléportation, onde ;
  - Kāma déployé : cubes du Daikokuten, pluie de pieux, absorption ;
  - Isshiki : cube colossal, barrage de Sukunahikona, rayon final ; plus grand et plus rapide.
- Les cubes du Daikokuten tombent du ciel après un avertissement au sol. Le Mode Kāma de Kawaki peut aussi en invoquer.
- Jigen respecte les mêmes recharges, le même coût en chakra et les mêmes temps d’incantation que le joueur.
- Le vaincre débloque le Kāma de Kawaki. Accès : menu **Ère Boruto → Boss**.
