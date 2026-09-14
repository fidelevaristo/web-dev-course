function runCallbacks(callbacks) {
  for (let i = 0; i < callbacks.length; i++) {
    callbacks[i]();
  }
}

function firstCallback() {
  console.log("Prima callback eseguita");
}

function secondCallback() {
  console.log("Seconda callback eseguita");
}

function thirdCallback() {
  console.log("Terza callback eseguita");
}

const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);
