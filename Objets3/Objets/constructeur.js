// Modèle, classe, matrice
function Voiture(marque, puissance, jantesAlu, energie, couleur) {
  (this.marque = marque),
    (this.puissance = puissance),
    (this.jantesAlu = jantesAlu),
    (this.energie = energie),
    (this.couleur = couleur);
  this.demarrer = function () {
    console.log("Mon moteur tourne!");
  };
}

// // Notre premier objet
let voiture1 = new Voiture("Renault", 5, true, "essence", "bleue");
let voiture2 = new Voiture("Dacia", 12, false, "Diesel", "Noire");

// console.log(voiture1.couleur);
// console.log(voiture2.demarrer());

voiture1.nombrePorte = 4;
voiture1.couleur = "gris";

console.log(voiture1);
console.log(voiture2);
