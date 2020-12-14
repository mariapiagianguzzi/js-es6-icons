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

  const icone = [
    new icons("cat", "fas", "fa-cat", "animals"),
    new icons("crow", "fas", "fa-crow", "animals"),
    new icons("dog", "fas", "fa-dog", "animals"),
    new icons("dove", "fas", "fa-dove", "animals"),
    new icons("dragon", "fas", "fa-dragon", "animals"),
    new icons("fish", "fas", "fa-fish", "animals"),
    new icons("frog", "fas", "fa-frog", "animals"),
    new icons("hippo", "fas", "fa-hippo", "animals"),
    new icons("horse", "fas", "fa-horse", "animals"),
    new icons("carrot", "fas", "fa-carrot", "fruits & vegetables"),
    new icons("apple-alt", "fas", "fa-apple-alt", "fruits & vegetables"),
    new icons("lemon", "fas", "fa-lemon", "fruits & vegetables"),
    new icons("pepper-hot", "fas", "fa-pepper-hot", "fruits & vegetables"),
    new icons("user-astronaut","fas", "fa-user-astronaut","users & people"),
    new icons("user-graduate","fas", "fa-user-graduate","users & people"),
    new icons("user-ninja","fas", "fa-user-ninja","users & people"),
    new icons("user-secret","fas", "fa-user-secret","users & people")
    
  ];
  console.log(icone);

  // Selezioniamo il container icons
  const container = document.getElementById("icons");
  

//inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
icone.forEach(icons => {
  const markup = `
    <div>
        <i class="${icons.prefix} ${icons.type}"></i>
        <div class= "title">${icons.name.toUpperCase()}</div>
    </div>
    `;
    container.insertAdjacentHTML('beforeend', markup); //incolla il markupp 
}); 
});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le propritype degli elementi di un array
// tip: il template literal ci puo aiutare con il markup 


