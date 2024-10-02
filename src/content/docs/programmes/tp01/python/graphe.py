class Sommet:
    def __init__(self, id):
        self.id = id
        self.voisins = []

    def __str__(self):
        res = "Sommet " + str(self.id) + " : "
        for v in self.voisins:
            res += str(v.id) + " "
        return res
    


class Graphe:
    def __init__(self):
        self.sommets = []

    def ajouter_sommet(self, id):
        self.sommets.append(Sommet(id))

    def ajouter_arete(self, id1, id2):
        s1 = self.trouver_sommet(id1)
        s2 = self.trouver_sommet(id2)
        s1.voisins.append(s2)
        s2.voisins.append(s1)

    def trouver_sommet(self, id):
        for s in self.sommets:
            if s.id == id:
                return s
        return None
    
    def __str__(self):
        res = ""
        for s in self.sommets:
            res += "Sommet " + str(s.id) + " : "
            for v in s.voisins:
                res += str(v.id) + " "
            res += "\n"
        return res
    


g = Graphe()
g.ajouter_sommet(1)
g.ajouter_sommet(2)
g.ajouter_sommet(3)
g.ajouter_sommet(4)
g.ajouter_sommet(5)
g.ajouter_arete(1, 2)
g.ajouter_arete(1, 3)
g.ajouter_arete(2, 3)
g.ajouter_arete(2, 4)
g.ajouter_arete(3, 4)
g.ajouter_arete(3, 5)
g.ajouter_arete(4, 5)
print(g)

# Résultat attendu :
# Sommet 1 : 2 3
# Sommet 2 : 1 3 4
# Sommet 3 : 1 2 4 5
# Sommet 4 : 2 3 5
# Sommet 5 : 3 4
