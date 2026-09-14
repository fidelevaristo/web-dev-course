let tempoRimanente = 10;
console.log("Conto alla rovescia in corso...");

function contoAllaRovescia() {
  tempoRimanente--;
  if (tempoRimanente > 0) {
    console.log(`Tempo rimanente: ${tempoRimanente}s`);
  } else {
    console.log("Conto alla rovescia terminato!");
    clearInterval(timer);
  }
}

const timer = setInterval(contoAllaRovescia, 1000);
