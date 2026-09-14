const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Primo valore
console.log("Primo valore:", numbers[0]);

// Lunghezza dell'array
console.log("Lunghezza:", numbers.length);

// Ultimo valore
console.log("Ultimo valore:", numbers[numbers.length - 1]);

// Elemento con indice venti
console.log("Indice 20:", numbers[20]);
// Spiegazione: In JavaScript, tentare di accedere a un indice inesistente di un array
// non solleva un errore (out of bounds), ma restituisce il valore primitivo 'undefined'.
