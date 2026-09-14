function caricaModulo(modulo) {
  return new Promise((resolve, reject) => {
    const tempoCaricamento = Math.random() * 3000;
    setTimeout(() => {
      if (tempoCaricamento < 1500) {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      } else {
        reject(`Errore durante il caricamento del modulo ${modulo}.`);
      }
    }, tempoCaricamento);
  });
}

async function lanciaVeicoloSpaziale() {
  try {
    const modA = await caricaModulo("A");
    console.log(modA);

    const modB = await caricaModulo("B");
    console.log(modB);

    const modC = await caricaModulo("C");
    console.log(modC);

    console.log("Veicolo spaziale pronto per il lancio!");
  } catch (error) {
    console.error("Impossibile lanciare il veicolo spaziale a causa di errori nei moduli.");
  }
}

lanciaVeicoloSpaziale();
