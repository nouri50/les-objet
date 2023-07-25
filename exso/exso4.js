let compte ={
    nom:"",
    solde: 0,
    historique: [],
    depot(montant) {
        this.solde +=montant;
        this. historique.push('depos de ${montant}€');

    },
    retrait(montant) {
        this.sole -= montant;
        this.historique.push('retrait de ${montant}€');
    },

    deposer(montant) {
        this.depot(montant);
    },

    afficherHistorique(){
        console.log(this.historique.join('\n'));
    }
};
compte.nom ="john doe";

compte.depos=(100);
compte.retrait(50);
compte.deposer(200);
compte.retrait(100);

console.log(compte.solde) ; 

