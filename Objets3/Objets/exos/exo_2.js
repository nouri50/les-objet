let personnes = [
  { nom: "toto", age: 15 },
  { nom: "tata", age: 25 },
  { nom: "titi", age: 35 },
];

// Méthode ittérative for : solution 1
// for (let i = 0; i < personnes.length; i++) {
//   console.log(personnes[i].nom);
// }

// méthode mapping : solution 2
personnes.map((personne) => console.log(personne.nom));

// Exemple lecture ittérative objet
// personnes.map((personne) => {
//     for (const attribut in personne) {
//       console.log(personne[attribut]);
//     }
//   });

// méthode ForEach: solution 3
// personnes.forEach((personne) => console.log(personne.nom));

// Méthode u For OF
// for (const personne of personnes) {
//   console.log(personne.nom);
// }
