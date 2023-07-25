let voiture = {
  marque: "Renault",
  modele: "Twingo",
  annee: 2014,
  //   Ecriture avant 2015 (ES15)
  afficher: function () {
    console.log("marque : ", this.marque);
    console.log("modele : ", this.modele);
    console.log("annee : ", this.annee);
  },
  //   Ecriture après 2015 (ES15)
  afficher2() {
    console.log("marque : ", this.marque);
    console.log("modele : ", this.modele);
    console.log("annee : ", this.annee);
  },
};

voiture.afficher();
