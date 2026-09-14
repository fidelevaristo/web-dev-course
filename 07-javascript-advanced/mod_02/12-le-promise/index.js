function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ name: "John", age: 30 });
      } else {
        reject(new Error("Errore durante il recupero dei dati"));
      }
    }, 1000);
  });
}

fetchDataFromAPI()
  .then((data) => {
    console.log("Dati recuperati con successo:", data);
  })
  .catch((error) => {
    console.error("Errore:", error.message);
  });
