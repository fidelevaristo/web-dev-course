const emailInput = document.querySelector(".email");
const firstNameInput = document.querySelector(".firstname");
const lastNameInput = document.querySelector(".lastname");

const titleName = document.querySelector(".title-name");
const printedForm = document.querySelector(".printedform");
const btn = document.querySelector(".btn");

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

// Recupera i dati salvati nel localStorage
const savedUser = localStorage.getItem("user");

if (savedUser !== null) {
  const user = JSON.parse(savedUser);

  firstNameInput.value = user.firstname || "";
  lastNameInput.value = user.lastname || "";
  emailInput.value = user.email || "";

  printUser(user);
}

// Salva i dati nel localStorage al click del bottone
btn.addEventListener("click", () => {
  const user = {
    email: emailInput.value,
    firstname: firstNameInput.value,
    lastname: lastNameInput.value,
  };

  localStorage.setItem("user", JSON.stringify(user));

  printUser(user);
});
