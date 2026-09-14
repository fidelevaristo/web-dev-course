// Seleziona l'input, il bottone e la lista
const input = document.querySelector(".todo__input") || document.querySelector("input");
const button = document.querySelector(".todo__button") || document.querySelector("button");
const list = document.querySelector(".todo__list") || document.querySelector("ul");

// Funzione per aggiungere un nuovo task
function addProduct() {
  const taskText = input.value.trim();

  if (taskText === "") {
    return;
  }

  // Crea un nuovo elemento li
  const li = document.createElement("li");
  li.classList.add("todo__item");

  // Crea la checkbox per il task
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Crea un elemento span per il testo del task
  const span = document.createElement("span");
  span.innerText = taskText;

  // Inserisce checkbox e testo dentro il li
  li.appendChild(checkbox);
  li.appendChild(span);

  // Inserisce il li dentro la lista
  list.appendChild(li);

  // Svuota l'input
  input.value = "";
}

// Rende disponibile la funzione a livello globale e aggiunge l'event listener al bottone
window.addProduct = addProduct;
if (button) {
  button.addEventListener("click", addProduct);
}
