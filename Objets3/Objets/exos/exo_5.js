const PI = Math.PI;

let cercle = {
  rayon: 8,
  calculerPerimetre: function () {
    // return 2 * Math.PI * this.rayon;
    return 2 * PI * this.rayon;
  },
  calculerSurface() {
    // return 2 * Math.PI * this.rayon;
    return PI * this.rayon * this.rayon;
    // return Math.PI * Math.pow(this.rayon, 2);
  },
};

console.log("Périmètre : ", cercle.calculerPerimetre());
console.log(`Surface : ${cercle.calculerSurface()}`);

// Métghode à privilégier pour vos futur développements Web
// conseil du formateur
// const perimetre = cercle.calculerPerimetre();
// const surface = cercle.calculerSurface();
// console.log("Périmètre : ", perimetre);
// console.log(`Surface : ${surface}`);
