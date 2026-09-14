const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

// 1. Rimuovere il nome "Giovanni"
names.pop();
console.log("Dopo rimozione di Giovanni:", names);

// 2. Aggiungere il nome "Pippo" alla coda
names.push("Pippo");
console.log("Dopo aggiunta di Pippo:", names);

// 3. Aggiungere il nome "Giovanni" come primo elemento
names.unshift("Giovanni");
console.log("Dopo aggiunta di Giovanni in testa:", names);
