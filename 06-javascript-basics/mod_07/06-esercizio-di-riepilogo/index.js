function analyzeMovies(movies) {
  const numMovies = movies.length;
  const uniqueYears = new Set(movies.map((m) => m.anno));
  const numYears = uniqueYears.size;

  const genreCounts = {};
  for (const movie of movies) {
    genreCounts[movie.genere] = (genreCounts[movie.genere] || 0) + 1;
  }

  return {
    numMovies,
    numYears,
    genreCounts,
  };
}

const moviesList = [
  { titolo: "Inception", regista: "Christopher Nolan", anno: 2010, genere: "Fantascienza" },
  { titolo: "Interstellar", regista: "Christopher Nolan", anno: 2014, genere: "Fantascienza" },
  { titolo: "Pulp Fiction", regista: "Quentin Tarantino", anno: 1994, genere: "Thriller" },
  { titolo: "Parasite", regista: "Bong Joon-ho", anno: 2019, genere: "Drammatico" },
  { titolo: "Il Padrino", regista: "Francis Ford Coppola", anno: 1972, genere: "Drammatico" },
  { titolo: "Tenet", regista: "Christopher Nolan", anno: 2020, genere: "Fantascienza" },
];

console.log(analyzeMovies(moviesList));
