class Sommet {
    constructor(id) {
        this.id = id;
        this.voisins = [];
    }
}

class Graphe {
    constructor() {
        this.sommets = [];
    }

    toString() {
        return this.sommets
            .map(s => `${s.id}: [${s.voisins.map(v => v.id).join(', ')}]`)
            .join('\n');
    }
}

let s0 = new Sommet(0);
let s1 = new Sommet(1);
let s2 = new Sommet(2);
let s3 = new Sommet(3);
let s4 = new Sommet(4);

s0.voisins.push(s1);
s0.voisins.push(s3);
s1.voisins.push(s0);
s1.voisins.push(s2);
s2.voisins.push(s1);
s2.voisins.push(s2);
s2.voisins.push(s3);
s2.voisins.push(s4);
s3.voisins.push(s0);
s3.voisins.push(s2);
s4.voisins.push(s2);

let graphe = new Graphe();

graphe.sommets = [s0, s1, s2, s3, s4];

console.log(graphe.toString());
// Output:
// 0: [1, 3]
// 1: [0, 2]
// 2: [1, 2, 3, 4]
// 3: [0, 2]
// 4: [2]