const cardElement = document.querySelector(".card");

async function fetchCard() {
  try {
    const response = await fetch(
      "https://ringsdb.com/api/public/card/03002.json",
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const card = await response.json();

    cardElement.innerHTML = `
      <img
        src="https://ringsdb.com${card.imagesrc}"
        alt="${card.name}"
        class="card__image"
      />

      <div class="card__content">
        <h1 class="card__title">${card.name}</h1>
      </div>
    `;
  } catch (error) {
    cardElement.innerHTML = `
      <p class="card__error">
        Errore durante il caricamento della carta.
      </p>
    `;

    console.error("Errore nel fetch della carta:", error);
  }
}

fetchCard();
