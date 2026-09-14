const firstYearCompleted = true;
const yearsCompleted = 1;

// L'operatore '==' verifica l'uguaglianza con coercizione di tipo (loose equality).
// Il valore booleano true viene convertito nel numero 1, quindi 1 == 1 restituisce true.
console.log(yearsCompleted == firstYearCompleted); // true

// L'operatore '===' verifica l'uguaglianza stretta (strict equality) senza coercizione.
// Poiché yearsCompleted è di tipo number (1) e firstYearCompleted è di tipo boolean (true),
// i tipi sono diversi e l'espressione restituisce false.
console.log(yearsCompleted === firstYearCompleted); // false
