function filterOutOdds(...numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8)); // [2, 4, 6, 8]
console.log(filterOutOdds(11, 13, 15)); // []
