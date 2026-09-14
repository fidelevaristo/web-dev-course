// Seleziona gli input
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const ageInput = document.querySelector("#age");

// Recupera i valori degli input
const firstName = firstNameInput.value;
const lastName = lastNameInput.value;
const age = Number(ageInput.value);

// Crea l'oggetto person
const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};

// Stampa l'oggetto nel console
console.log(person);

// Seleziona il form
const form = document.querySelector("form");

// Aggiunge l'attributo data-person con il JSON dell'oggetto
form.setAttribute("data-person", JSON.stringify(person));

// Stampa il form nel console
console.log(form);
