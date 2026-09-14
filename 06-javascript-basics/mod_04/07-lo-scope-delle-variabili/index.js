// Spiegazione dell'errore originale:
// La variabile 'personName' era dichiarata con 'let' all'interno del blocco 'if (true) { ... }'.
// Poiché le variabili dichiarate con 'let' e 'const' possiedono visibilità di blocco (block-scope),
// 'personName' non era accessibile all'esterno del blocco if, provocando un ReferenceError.

function canPlay() {
  let sport = " Football";
  let personName;

  if (true) {
    personName = "Cosimo";
  }

  console.log(personName + sport);
}

canPlay();
