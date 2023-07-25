// Solutions possibles
// Quentin
// Quentin => OK
// let compte = {
//   nom: "quint",
//   solde: 15000,
//   historique: [],

//   deposer(nb) {
//     this.solde += nb;
//     this.historique.push("+" + nb);
//   },
//   retirer(nb) {
//     this.solde -= nb;
//     this.historique.push("-" + nb);
//   },
//   afficherlhistorique() {
//     console.log(this.historique);
//   },
// };
// compte.deposer(15840, 89);
// compte.retirer(25345, 25);
// console.log(compte.solde);
// compte.afficherlhistorique();

let compte = {
  nom: "John Doe",
  solde: 1000,
  historiques: [],
  deposer(montantDepose) {
    this.solde += montantDepose;
    // this.solde = montant + this.solde;
    // this.historique.push("Dépôt de : " + montant);
    // this.historique.push(`Dépôt de : ${montant}`);
    this.historiques = [...this.historiques, `Dépôt de : ${montantDepose}`];
    // Déstructuration objet
    // this.div = {...object, cle2: "valeur"} // => object
    // {
    //     div: {
    //         cle: "toto"
    //         cle2: "valeur"
    //     }
    // }
  },
  //   afficherSoldeEncours() {
  //     console.log(`Solde actuel : ${this.solde}`);
  //   },
  retirer: function (montantRetire) {
    if (this.solde >= montantRetire) {
      this.solde -= montantRetire;
      this.historiques.push("Retrait de : " + montantRetire);
      console.log(`Solde actuel : ${this.solde}`);
    } else {
      console.log("Va travailler!");
    }
  },
  afficherHistorique() {
    // for(let i = 0; i < this.historique.length; i++) {
    //     console.log(this.historique[i])
    // }
    // this.historiques.map(historique => console.log(historique))
    this.historiques.forEach((historique) => console.log(historique));
    console.log(`Solde actuel : ${this.solde}`);
    // for(let historique of this.historiques) {console.log(historique)}
  },
};
// compte.afficherSoldeEncours();
compte.deposer(300);
// compte.afficherSoldeEncours();
compte.retirer(250);
// compte.afficherSoldeEncours();
compte.afficherHistorique();
