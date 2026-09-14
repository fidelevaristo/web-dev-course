const smartphone = {
  brand: "Apple",
  name: "Iphone 13",
  price: 1300,
};

// Object.freeze impedisce la modifica delle proprietà esistenti e l'aggiunta di nuove proprietà
Object.freeze(smartphone);

smartphone.price = 100;

console.log(smartphone);
