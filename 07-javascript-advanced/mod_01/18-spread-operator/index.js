const originalArray = [1, 2, 3, 4, 5];

const cloneArray = [...originalArray];

console.log("Originale:", originalArray);
console.log("Clone:", cloneArray);
console.log("Riferimento identico?", originalArray === cloneArray); // false
