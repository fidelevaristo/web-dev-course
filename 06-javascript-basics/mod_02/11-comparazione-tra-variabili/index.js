const firstName = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

// 3 comparazioni che stampano true:
console.log(age == average); // true (27 == 27)
console.log(examsCompleted > yearsCompleted); // true (10 > 1)
console.log(age <= average); // true (27 <= 27)

// 3 comparazioni che stampano false:
console.log(firstName === lastname); // false ("Mario" === "Rossi")
console.log(age != average); // false (27 != 27 è falso)
console.log(examsCompleted < yearsCompleted); // false (10 < 1 è falso)
