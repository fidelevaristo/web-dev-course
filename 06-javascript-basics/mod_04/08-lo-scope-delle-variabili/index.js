// Per rendere la variabile 'sport' globale, la definiamo all'esterno della funzione,
// nello scope principale del file.
let sport = " Football";

function canPlay() {
  let personName;

  if (true) {
    personName = "Cosimo";
  }

  console.log(personName + sport);
}

canPlay();
