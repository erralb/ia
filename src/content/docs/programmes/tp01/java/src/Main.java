public class Main {
    public static void main(String[] args) {
        //création de sommets
        Sommet s1 = new Sommet(1);
        Sommet s2 = new Sommet(2);
        Sommet s3 = new Sommet(3);
        Sommet s4 = new Sommet(4);
        Sommet s5 = new Sommet(5);

        //ajout des voisins
        s1.addVoisin(s2);
        s1.addVoisin(s3);
        s2.addVoisin(s1);
        s2.addVoisin(s2);
        s2.addVoisin(s3);
        s2.addVoisin(s4);
        s3.addVoisin(s1);
        s3.addVoisin(s2);
        s3.addVoisin(s4);
        s4.addVoisin(s2);
        s4.addVoisin(s3);
        s4.addVoisin(s5);
        s5.addVoisin(s4);

        //création du graphe
        Graphe g = new Graphe(new Sommet[] { s1, s2, s3, s4, s5 });
        System.out.println(g);


        // Résultat affiché dans la console :

        // Sommet 1 : 2 3 
        // Sommet 2 : 1 2 3 4 
        // Sommet 3 : 1 2 4 
        // Sommet 4 : 2 3 5 
        // Sommet 5 : 4 
    }
}

/**
 * commands to compile and run the classes
 * javac -d bin src/*.java
 * java -cp bin Main
 */