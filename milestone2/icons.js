$(document).ready(function () {
  // Qui le icone che abbiamo definito nella milestone 1
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
  /* console.log(icone); */


  

  // definiamo dei colori per le icone (blue, orange, purple) //HO CREATO DELLE CLASSI PER IL COLORE ATTRIBUENDO GLI ESADECIMALI
  const blue = "#63B4D1"; //HO CREATO DELLE CLASSI CON I COLORI 
  const orange = "#f4a261";
  const purple = "#74058A"


  //aggiungiamo dei colori usando una funzione

  //CON IL FOR.EACH ASSEGNO I COLORI ALLE CLASSI ANIMALI FRUTTA/VEGETALI E USER
  icone.forEach(icon => {
    if(icon.family === "animals"){
      icon.color = blue;
    }else if(icon.family === "fruits & vegetables"){
      icon.color = orange;
    }else{
      icon.color = purple;
    }
     console.log(icon); 
  });



  //inseriamo le icone colorate nel container
  const container = document.getElementById("icons");

  icone.forEach(icons => {
    const markup = `
      <div>
          <i class="${icons.prefix} ${icons.type}"  style="color:${icons.color}"></i>
          <div class= "title">${icons.name.toUpperCase()}</div>
      </div>
      `;
     /*  console.log(container); */
      container.insertAdjacentHTML('beforeend', markup);
  }); 
  });


/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1


//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map 


//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.
