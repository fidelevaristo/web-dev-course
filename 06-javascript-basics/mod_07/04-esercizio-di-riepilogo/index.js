function getLongStringProperties(obj) {
  const result = [];
  for (let key in obj) {
    if (typeof obj[key] === "string" && obj[key].length > 5) {
      result.push(key);
    }
  }
  return result;
}

const sampleObj = {
  name: "Fidel",
  surname: "Vicente Evaristo",
  role: "developer",
  city: "Rome",
  country: "Italy",
  active: true,
  code: "JS",
};

console.log(getLongStringProperties(sampleObj));
