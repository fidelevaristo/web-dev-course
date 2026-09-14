function formatBooks(books) {
  return books.map((book) => {
    let entry = book.titolo + " di " + book.autore;
    if (book.anno > 2000) {
      entry += " - Moderno";
    }
    if (book.genere === "Science Fiction") {
      entry += " - SciFi";
    }
    return entry;
  });
}

const library = [
  { titolo: "1984", autore: "George Orwell", anno: 1949, genere: "Science Fiction" },
  { titolo: "Dune", autore: "Frank Herbert", anno: 1965, genere: "Science Fiction" },
  { titolo: "Il problema dei tre corpi", autore: "Liu Cixin", anno: 2008, genere: "Science Fiction" },
  { titolo: "Il nome della rosa", autore: "Umberto Eco", anno: 1980, genere: "Giallo" },
  { titolo: "L'amica geniale", autore: "Elena Ferrante", anno: 2011, genere: "Romanzo" },
];

console.log(formatBooks(library));
