let hello = 'Ciao';     // number
let age = 18;           // boolean
let isGraduated = false; // string

// Casting:
hello = Number(hello);
age = Boolean(age);
isGraduated = String(isGraduated);

console.log(hello, typeof hello);
console.log(age, typeof age);
console.log(isGraduated, typeof isGraduated);

// Spiegazione del casting di hello:
// La stringa 'Ciao' non rappresenta un valore numerico valido.
// Quando si tenta di convertirla con Number(), JavaScript restituisce NaN (Not a Number),
// il cui tipo di dato primitivo rimane comunque 'number'.
