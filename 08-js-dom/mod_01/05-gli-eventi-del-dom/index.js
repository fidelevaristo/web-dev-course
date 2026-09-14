// Seleziona il bottone
const btn = document.querySelector(".btn");

// Seleziona il body
const body = document.body;

// Aggiunge un evento click al bottone per attivare/disattivare la dark mode
btn.addEventListener("click", () => {
  body.classList.toggle("theme");
});
