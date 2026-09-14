function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    const success = Math.random() * 0.5; // valore casuale da 0 a 0.5
    setTimeout(() => {
      if (success < 0.5) {
        resolve("Data retrieved successfully");
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 1000);
  });
}

fetchDataFromAPI()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
