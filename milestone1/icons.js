$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 
  class icons {
    constructor(name, prefix, type, family) {
      this.name = name; 
      this.prefix = prefix; 
      this.type = type; 
      this.family = family; 
    }
  }

  const icons = [
    new icons("cat", "fas", "fa-cat", "animals"),
    new icons("crow", "fas", "fa-crow", "animals"),
    new icons("dog", "fas", "fa-dog", "animals"),
    new icons("dove", "fas", "fa-dove", "animals"),
    new icons("dragon", "fas", "fa-dragon", "animals"),
    new icons("fish", "fas", "fa-fish", "animals"),
    new icons("frog", "fas", "fa-frog", "animals"),
    new icons("hippo", "fas", "fa-hippo", "animals"),
    new icons("horse", "fas", "fa-horse", "animals"),
  ];
  console.log(icons);

  // Semezioniamo il container icons

  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)

});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup

