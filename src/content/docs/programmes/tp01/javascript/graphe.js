var Sommet = /** @class */ (function () {
    function Sommet(id) {
        this.id = id;
        this.voisins = [];
    }
    return Sommet;
}());
var Graphe = /** @class */ (function () {
    function Graphe() {
        this.sommets = [];
    }
    Graphe.prototype.toString = function () {
        return this.sommets.map(function (s) { return "".concat(s.id, ": [").concat(s.voisins.map(function (v) { return v.id; }).join(', '), "]"); }).join('\n');
    };
    return Graphe;
}());
var sommet0 = new Sommet(0);
var sommet1 = new Sommet(1);
var sommet2 = new Sommet(2);
var sommet3 = new Sommet(3);
var sommet4 = new Sommet(4);
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
var graphe = new Graphe();
graphe.sommets = [sommet0, sommet1, sommet2, sommet3, sommet4];
console.log(graphe.toString());
