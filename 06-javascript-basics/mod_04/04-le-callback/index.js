function printName() {
  console.log("Fidel");
}

function sayHelloName(callback) {
  setTimeout(function () {
    console.log("Hello");
    callback();
  }, 1000);
}

sayHelloName(printName);
