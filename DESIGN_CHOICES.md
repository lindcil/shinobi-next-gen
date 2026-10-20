# Shinobi Next Generation — Choix de conception

Next Generation prend le meilleur de **Shinobi 1** (Éternel II v4.7) et de **Shinobi 2** (mise à jour 13). Pour chaque système, ce document indique la version retenue et pourquoi.

| Système | Version retenue | Pourquoi |
|---|---|---|
| Moteur, boucle, rendu, menus | **Shinobi 2** | Plus récent et plus propre (directeur, missions, tour, raid, histoire, en ligne). Il intègre déjà les ports d’Éternel II. |
| Rig et animation | **Shinobi 1 v4.6 (rig) + smears ZZZ v4.6.1**, sur les poses de Shinobi 2 | Le rig hiérarchique FK/IK oriente toujours pieds et genoux correctement (630 cas vérifiés). Les smears en croissant sont plus lisibles. |
| Signes des mains | **Signes dessinés partagés** (Shinobi 1 v4.7 = Shinobi 2 v13) | Deux mains formant le mudra, brièvement au-dessus de la tête, sans texte. |
| Halo du joueur | **Shinobi 2** (halo doré, anneau tournant, contre-jour) | C’est l’original : Shinobi 1 l’a repris tel quel. |
| Auras de mode | **v13 / v4.7** : légères, orange pour bête/jinchūriki/Baryon, violet pour les pupilles (Jōgan compris) | Lisibles sans masquer le personnage. Kāma, Code et Ōtsutsuki ont leur propre couleur (cyan Kāma, or pâle Ōtsutsuki). |
| Modes à stades | **Shinobi 2** (stades, `req`, `drain`, ultime par stade, roue) | Un seul système de modes. Celui d’Éternel (ext3a–3d) aurait fait doublon. |
| Bijū | **Shinobi 1** (9 bijū canon, kits canon), fusionnés dans les Bêtes de Shinobi 2 | Noms et kits canon, sauvegardes compatibles. |
| Susanoo, duos, spéciales | **Shinobi 1** (ext36 / ext42), adaptés | Plus complets que l’armure spectrale de base. |
| Réactions élémentaires | **Shinobi 1** (triples, quadruples, quintuple, dōjutsu) + doubles de Shinobi 2 | Plus de profondeur sans changer les contrôles. |
| Constellations | **Shinobi 1** (une constellation unique par technique) | Étendues aux techniques de l’ère Boruto. |
| Temps d’incantation | **Shinobi 2 v13** (partout : 0,09 / 0,13 / 0,24 s) | Rien d’instantané, mais réactif. |
| Ennemis | **Shinobi 2 v13** : mêmes temps de recharge, coût en chakra et temps d’incantation que le joueur ; IA (ruée, esquive, punition, repli) | Combats loyaux et plus intelligents. |
| Progression | **Shinobi 2 v13** (XP ×5) | Plus simple. |
| Textes à l’écran | **Shinobi 2 v13** (environ moitié moins, seuls les boss parlent) | Plus minimaliste. |
| Monde ouvert | **Shinobi 1** (maîtres, événements, PNJ, routes), agrandi 10× (12 zones) | Le plus riche. Le sol se charge par tronçons et les unités lointaines sont mises en veille. |
| Créatif | **Shinobi 2 + labos d’Éternel** (Créatif+) | Tous les outils de test au même endroit. |
| Fusion de sceaux (Éternel ext42) | **Non reprise** | Doublon avec le double lancer et les fusions de Shinobi 2. |
| Interface | **Nouvelle** (thème ère Boruto) | Bleu nuit, cyan et orange, typographie Exo 2 moderne, panneaux nets. |

## Tailles de carte
- « 5× plus grand » s’entend en **surface** : les dimensions des arènes, survies, missions, tours et duels sont multipliées par √5 ≈ 2,24 (2300×1500 → 5143×3354).
- Le monde ouvert passe de 7200×4500 à 22800×14200, soit **10× la surface**.
- Pour rester fluide, le sol de base a une résolution plafonnée et des tuiles de détail de 640 px sont générées autour de la caméra (cache de 64 tuiles). Tout ce qui est hors champ n’est pas dessiné, et les ennemis à plus de 2400 px des joueurs sont mis en veille.

## NG 5 — choix
- **Touches** : codes physiques (`event.code`), libellés AZERTY par défaut. Déplacement aux flèches en AZERTY pour libérer Z (charge de mode) ; préréglage QWERTY = WASD + Z. Réaffectation complète dans Options.
- **Esquive** : jamais de téléportation (substitution comprise) — balancement sur place façon Ultra Instinct, invulnérable, puis contre +50 %. Le dash reste un dash.
- **Substitution** : prédiction (C + esquive, garde 2 s), 3 charges, +1 charge / 10 s.
- **Charge de mode Z** : mode Boruto équipé > bijū > ermite > pupille ; maintien = charge de chakra.
- **Edo Tensei** : alliés régénérants, 4 réincarnés max, 50 % d’échec, contrôle via R (retour auto au corps si l’un des deux tombe).
