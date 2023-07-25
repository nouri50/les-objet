let voiture={
    marque: "citroên", 
   model: "c3",
   annee: "2005"
   afficher:function() {

   console.log("marque: ," this marque);
   console.log("model: ", this.model);
   console.log("annee:", this.annee); 
    
};

afficher2(){
    console.log("marque :", this.marque);
    console.log("model :", this.model);
    console.log("annee :" , this.annee);
    
},
};




