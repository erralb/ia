---
title: Algorithme générique
sidebar:
    hidden: true
---

##### Algorithme rechercheDansGraphe(n0)

```
1. open <- Créer un ensemble ordonnées par f(n) // vide au départ
2. closed  <- Créer un ensemble // vide au départ
3. insérer n0 dans open
4. while (true) // la condition de sortie (exit) est déterminée dans la boucle
  5. si open est vide, sortir de la boucle avec échec (aucune solution n’existe)
  6. n1 = noeud au début de open avec le plus petit f(n)
  7. enlever n1 de open et l’ajouter dans closed
  8. si n1 est le but, sortir de la boucle avec succès en retournant le chemin;
  9. pour chaque noeud successeur n2 de n1
    10. Initialiser la valeur g(n2) = g(n1) + coût de la transition (n1,n2)
    11. mettre parent(n2) = n1
    12. si open ou closed* contient un nœud n3 équivalent à n2 (même état) avec f(n2)<f(n3), enlever n3 de open ou closed* et insérer n2 dans open
    13. sinon (c-à-d., n2 n’est est ni dans open ni dans closed)
      14. insérer n2 dans open en triant les nœuds en ordre croissant selon f(n)

```