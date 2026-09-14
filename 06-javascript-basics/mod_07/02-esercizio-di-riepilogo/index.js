function getCarBrandsAndModels(cars) {
  return cars.map((car) => car.brand + " " + car.model);
}

const carsList = [
  { brand: "Fiat", model: "500", year: 2018 },
  { brand: "Tesla", model: "Model 3", year: 2022 },
  { brand: "Ford", model: "Mustang", year: 1969 },
];

const result = getCarBrandsAndModels(carsList);
console.log(result);
