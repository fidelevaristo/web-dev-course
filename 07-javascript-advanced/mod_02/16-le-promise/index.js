function promise_BasedFunction(arg1, arg2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = arg1 + arg2;
      if (result % 2 !== 0) {
        resolve(result);
      } else {
        reject(new Error('Result is not odd!'));
      }
    }, 1000);
  });
}

promise_BasedFunction(2, 3)
  .then((res) => console.log("Risultato dispari:", res))
  .catch((err) => console.error("Errore:", err.message));

promise_BasedFunction(2, 4)
  .then((res) => console.log("Risultato dispari:", res))
  .catch((err) => console.error("Errore:", err.message));
