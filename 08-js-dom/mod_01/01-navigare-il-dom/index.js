// Seleziona il <body>
const body = document.body;

// Seleziona la <ul>
const ul = body.children[0];

// 1. Stampa l'elemento padre della <ul>
console.log(ul.parentElement);

// 2. Seleziona e stampa il secondo elemento figlio della <ul>
const secondLi = ul.children[1];
console.log(secondLi);

// 3. Stampa il fratello successivo del secondo <li>
console.log(secondLi.nextElementSibling);

// 4. Stampa il fratello precedente del secondo <li>
console.log(secondLi.previousElementSibling);
