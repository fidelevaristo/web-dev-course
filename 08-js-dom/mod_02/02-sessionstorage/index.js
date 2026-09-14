// Seleziona gli input
const emailInput = document.querySelector(".email");
const firstNameInput = document.querySelector(".firstname");
const lastNameInput = document.querySelector(".lastname");

// Seleziona gli elementi del DOM
const titleName = document.querySelector(".title-name");
const printedForm = document.querySelector(".printedform");
const btn = document.querySelector(".btn");

// Funzione per stampare i dati nella pagina
function printUser(user) {
  titleName.innerText = user.firstname;

  printedForm.innerText = `
Email: ${user.email}
Nome: ${user.firstname}
Cognome: ${user.lastname}
  `;
}

// Inserisce in tempo reale il testo dell'input nome nello span del titolo
firstNameInput.addEventListener("input", () => {
  titleName.innerText = firstNameInput.value;
});

// Recupera i dati salvati nel sessionStorage
const savedUser = sessionStorage.getItem("user");

// Controlla se esistono dati salvati
if (savedUser !== null) {
  const user = JSON.parse(savedUser);

  firstNameInput.value = user.firstname || "";
  lastNameInput.value = user.lastname || "";
  emailInput.value = user.email || "";

  printUser(user);
}

// Evento click del bottone: salva i dati nel sessionStorage
btn.addEventListener("click", () => {
  const user = {
    email: emailInput.value,
    firstname: firstNameInput.value,
    lastname: lastNameInput.value,
  };

  sessionStorage.setItem("user", JSON.stringify(user));

  printUser(user);
});
