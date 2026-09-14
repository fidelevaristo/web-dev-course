function printName() {
  console.log("Fidel");
}

function sayHelloName(callback) {
  console.log("Hello");
  callback();
}

sayHelloName(printName);
