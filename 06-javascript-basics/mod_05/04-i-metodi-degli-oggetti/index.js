let user = {
  name: "Cosimo",
  age: 30,
};

// 1. Metodo Object.assign:
let copyWithAssign = Object.assign({}, user);
copyWithAssign.name = "Marco";

// 2. Metodo structuredClone (clonazione profonda moderna):
let copyWithStructuredClone = structuredClone(user);
copyWithStructuredClone.name = "Giovanni";

// 3. Metodo JSON serialization:
let copyWithJson = JSON.parse(JSON.stringify(user));
copyWithJson.name = "Paolo";

console.log("Originale:", user);
console.log("Copia Object.assign:", copyWithAssign);
console.log("Copia structuredClone:", copyWithStructuredClone);
console.log("Copia JSON:", copyWithJson);
