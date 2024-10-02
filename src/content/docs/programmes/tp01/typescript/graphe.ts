class Sommet {
    id: number;
    voisins: Sommet[];

    constructor(id: number) {
        this.id = id;
        this.voisins = [];
    }
}

class Graphe {
    sommets: Sommet[];

    constructor() {
        this.sommets = [];
    }

    toString(): string {
        return this.sommets.map(s => `${s.id}: [${s.voisins.map(v => v.id).join(', ')}]`).join('\n');
    }
}

let sommet0 = new Sommet(0);
let sommet1 = new Sommet(1);
let sommet2 = new Sommet(2);
let sommet3 = new Sommet(3);
let sommet4 = new Sommet(4);

sommet0.voisins.push(sommet1);
sommet0.voisins.push(sommet3);

sommet1.voisins.push(sommet0);
sommet1.voisins.push(sommet2);

sommet2.voisins.push(sommet1);
sommet2.voisins.push(sommet2);
sommet2.voisins.push(sommet3);
sommet2.voisins.push(sommet4);

sommet3.voisins.push(sommet0);
sommet3.voisins.push(sommet2);

sommet4.voisins.push(sommet2);

let graphe = new Graphe();

graphe.sommets = [sommet0, sommet1, sommet2, sommet3, sommet4];

console.log(graphe.toString());