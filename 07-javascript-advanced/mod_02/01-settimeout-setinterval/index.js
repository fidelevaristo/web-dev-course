function visualizzaOrologio() {
  const orarioCorrente = new Date();
  const ore = orarioCorrente.getHours();
  const minuti = orarioCorrente.getMinutes();
  const secondi = orarioCorrente.getSeconds();
  
  console.log(`Ora attuale: ${ore}:${minuti}:${secondi}`);
}

const intervalId = setInterval(visualizzaOrologio, 1000);

// Terminazione automatica per permettere l'esecuzione in script
setTimeout(() => clearInterval(intervalId), 3500);
