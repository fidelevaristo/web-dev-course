function caricaModulo(modulo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Il modulo ${modulo} è stato caricato.`);
    }, 2000);
  });
}

async function lanciaVeicoloSpaziale() {
  const risA = await caricaModulo("A");
  console.log(risA);

  const risB = await caricaModulo("B");
  console.log(risB);

  const risC = await caricaModulo("C");
  console.log(risC);

  console.log("Veicolo spaziale pronto per il lancio!");
}

lanciaVeicoloSpaziale();
