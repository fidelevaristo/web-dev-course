function performOperation(a, b, callback) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Entrambi gli argomenti devono essere numeri validi.");
    }
    const result = a + b;
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
}

function displayResult(error, result) {
  if (error) {
    console.error("Si è verificato un errore:", error.message);
  } else {
    console.log("Risultato dell'operazione:", result);
  }
}

// Chiamata con successo
performOperation(5, 3, displayResult);

// Chiamata con errore
performOperation(5, "tre", displayResult);
