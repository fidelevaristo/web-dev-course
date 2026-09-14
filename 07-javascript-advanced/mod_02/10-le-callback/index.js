function fetchDataFromAPI(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 1000);
}

function handleData(data) {
  console.log("Dati ricevuti dall'API:", data);
}

fetchDataFromAPI(handleData);
