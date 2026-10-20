# Shinobi Next Generation — Notes de version

## NG 6 — Carrière, rencontres et Ninjutsu (20 octobre 2026)
- **Mode Carrière** (parcours principal, bouton en tête de l’écran titre) : nouvelle partie → clan et nature de chakra tirés au hasard → cinématique du clan → **épreuve de la feuille** en plein écran (verre d’eau : maintiens Espace pour garder l’aiguille dans la zone ; vent = la feuille se coupe, feu = elle brûle, eau = l’eau monte, terre = elle s’effrite, foudre = elle se froisse) → départ à l’**Académie ninja** (Iruka).
- **Rangs** : Académie → Genin (niv. 5) → Chūnin (15) → Jōnin (30) → ANBU (40) → Sannin (50) → Kage (60) → **Sommet des Kage** (objectif final). Progression uniquement par le monde ouvert et les missions.
- **Verrous** : Duel et Saga au rang Genin, Survie au rang Chūnin, Tour, Raid et Créatif au rang Jōnin.
- **Rencontres** : 37 rencontres, toutes au même taux.
  - Akatsuki : ciel rouge, nuages rouges, musique sombre, 4 duels à la suite ; chaque membre vaincu donne son moveset.
  - Minato scelle une bête en toi (gratuit) ; Momoshiki t’offre son mode.
  - Nouvelles : Sommet des Kage (aider Sasuke ou les Kage), assaut de Pain (6 chemins), Zabuza & Haku sur le pont, examen Chūnin d’Orochimaru, Kaguya, Itachi & Kisame, Kinshiki.
- **Navigateur de Ninjutsu** (bouton 忍 Ninjutsu) : mêmes filtres que Préparation.
- XP ×5 conservé.

## NG 5 — portage de la MAJ 14 de Shinobi 2 : Edo Tensei, prédiction et nouvelles touches (20 octobre 2026)

**Touches (AZERTY par défaut, codes physiques `event.code`)**

| Action | AZERTY (défaut) | QWERTY |
|---|---|---|
| Se déplacer | Flèches | W A S D |
| Charge de mode (appui = meilleur mode / stade suivant, maintien = charge de chakra) | Z | Z |
| Dōjutsu (appui = activer/couper, maintien = stade suivant) | X | X |
| Shuriken inné / C + E = outil spécial | E | E |
| Coup (M1) / Esquive (dash) / Charge | J / K ou Maj / C | J / K ou Maj / C |
| Techniques 1–4 / Ultime | U I O P (ou 1–4) / Espace | U I O P / Espace |
| Mode Jinchūriki / Roue | F / A | F / Q |
| Edo Tensei / Changer de corps | T / R | T / R |
| Mode ère Boruto (on/off) | B | B |
| Prédiction de substitution | C + K | C + K |

Tout se réaffecte dans **Options → Touches** (clic puis touche, échange automatique, préréglages AZERTY/QWERTY, réinitialisation).

- **Modes** : les techniques normales sont remplacées ; les techniques du mode hors de la roue affichée se lancent au **double appui** (deux touches de technique ensemble, 6 combinaisons).
- **Edo Tensei** (T) : les 4 Hokage (Hashirama, Tobirama, Hiruzen, Minato) ou 56 autres personnages (Naruto + Ōtsutsuki, Kara, Toneri…) ; **50 % d’échec** (le corps tombe en poussière). Réussi : allié régénérant ; **R** pour en prendre le contrôle (retour automatique si le corps contrôlé tombe).
- **Substitution = prédiction** : C + esquive ouvre une garde de 2 s ; touché pendant la garde = esquive. 3 charges, une charge revient toutes les 10 s. Esquiver après un coup ne permute plus.
- **Esquives « Ultra Instinct »** : aucune esquive ne téléporte plus (substitution, esquive de l’IA). Le personnage reste sur place, se balance de côté (image rémanente, léger reflet argenté, sans flash), invulnérable, puis son coup suivant est un **contre +50 %**. Le dash ne change pas.
- **Clans** : uniquement un ultime + un passif ; l’élément principal se choisit librement (Préparation).
- **Listes de techniques** : de la plus rare à la plus commune, puis disponibles d’abord.
- **Créatif** : sélecteur de techniques (recherche, type, élément, rareté, tri par rareté/nom/dégâts/coût/recharge, emplacement 1–4 ou ultime).
- **Équiper le meilleur** (Équipement et Préparation) + équipement automatique au départ de mission (désactivable).
- **Outils ninja** : nouvel onglet-boutique (shuriken explosif, Fūma géant, kunai à parchemin, senbon empoisonnés, bombe fumigène, kunai éclair).
- **Rythme** : jeu 10 % plus lent, incantations ×1,3 avec temps de récupération après chaque technique, M1 un peu plus lent.
- Bouton **« Retour au menu des jeux »** sur l’écran titre (lindcil.github.io).
- **Adapté à NG** : la charge de mode (Z) active d’abord le mode de l’ère Boruto équipé (Karma, Baryon, Jōgan, Code…), sinon bijū/ermite/pupille ; double appui aussi dans les modes Boruto ; total : 691 techniques (tools/count_moves.js).

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

## NG 4 — La Saga
- **Mode Saga** (bouton en tête du menu), 12 arcs de Naruto à Boruto :
  - Académie ;
  - Pays des Vagues ;
  - Examen Chūnin ;
  - Vallée de la Fin ;
  - Pain ;
  - Grande Guerre ;
  - Une Paix Fragile (mariage, festival, famille) ;
  - Boruto à l’Académie ;
  - Momoshiki ;
  - Kara ;
  - Jigen ;
  - Mode Baryon.
- **Pas que des combats** : 18 scènes, dont 15 de vie quotidienne en QTE (rythme, martèlement, équilibre, séquence de signes), avec des dialogues courts :
  - Ichiraku ;
  - clones et grimpe aux arbres ;
  - épreuve écrite ;
  - mariage ;
  - festival du feu ;
  - naissance ;
  - dîners en famille ;
  - concours de ramen ;
  - escorte au festival ;
  - adieux à Kurama.
- 11 combats canon :
  - Mizuki, Zabuza, Gaara, Sasuke, Pain, Madara ;
  - Momoshiki, Delta et Kashin Kōji, Jigen ;
  - Isshiki en Mode Baryon.
- Dans la Saga, tu te relèves une fois par combat ; sinon, le combat recommence.
- Les arcs se débloquent dans l’ordre. Le premier passage donne de l’XP (×5).
- **684 techniques** au total (`tools/count_moves.js`).
- Le bandeau des modes de l’ère Boruto affiche « ÈRE BORUTO ».
