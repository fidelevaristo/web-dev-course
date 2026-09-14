const primitive = 42;

if (typeof primitive === "number") {
  console.log("La variabile è di tipo number");
} else if (typeof primitive === "string") {
  console.log("La variabile è di tipo string");
} else if (typeof primitive === "boolean") {
  console.log("La variabile è di tipo boolean");
} else {
  console.log("Tipo non gestito");
}
