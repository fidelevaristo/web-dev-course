const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

// 1. forEach per stampare i nomi degli studenti
console.log("Nomi studenti:");
studenti.forEach((s) => console.log(s.nome));

// 2. find per trovare uno studente con voto > 90
const topStudent = studenti.find((s) => s.voto > 90);
console.log("Studente con voto > 90:", topStudent);

// 3. reduce per calcolare la media dei voti
const averageGrade = studenti.reduce((acc, s) => acc + s.voto, 0) / studenti.length;
console.log("Media voti:", averageGrade);

// 4. map per creare nuovo array con nomi in maiuscolo
const upperCaseNames = studenti.map((s) => s.nome.toUpperCase());
console.log("Nomi maiuscoli:", upperCaseNames);

// 5. filter per trovare studenti con voto > 85
const goodStudents = studenti.filter((s) => s.voto > 85);
console.log("Studenti con voto > 85:", goodStudents);
