let user = {
  name: "Cosimo",
  age: 30,
};

// Creiamo una shallow copy con lo spread operator invece di copiare il riferimento
let newUser = { ...user };

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
