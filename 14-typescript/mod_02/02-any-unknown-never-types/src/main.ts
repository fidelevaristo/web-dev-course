// Currency can have any type
let currency: any = { name: "Indian rupee" };

currency.code = "THB";

currency = "Baht";

// Prints the length of a country name
function countryNameLength(value: unknown) {
  if (typeof value === "string") {
    console.log(value.length);
  }
}

countryNameLength("United States of America");

// Throws an error when a country is not found
function throwCountryError(message: string): never {
  throw new Error(`Could not find country: ${message}`);
}

throwCountryError("Narnia");

export {};
