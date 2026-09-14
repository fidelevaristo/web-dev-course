function App() {
  /**
   * Crea una variabile chiamata hello e inizializzala con un tag h1 con il messaggio "Hello, World!".
   */
  // Variabile hello
  const hello = <h1>Hello, World!</h1>;

  /**
   * Scrivi una funzione che riceve un argomento name e restituisce un tag h1 con la variabile name aggiunta alla stringa "Hello, ".
   */
  // Funzione che riceve un nome
  const greet = (name: string) => {
    return <h1>Hello, {name}</h1>;
  };

  /**
   * Cosa succede se la variabile name non viene passata alla funzione?
   * Risposta: TypeScript genera un errore: Expected 1 arguments, but got 0.
   */

  /**
   * Cosa succede se la variabile name contiene un'espressione JSX invece di una stringa?
   * Risposta: Se il parametro è tipizzato come string, TypeScript non lo permette e genera un errore: Argument of type 'Element' is not assignable to parameter of type 'string'
   */

  // Funzione che somma due numeri
  const sum = (a: number, b: number) => {
    return <h2>{a + b}</h2>;
  };

  return (
    <>
      {hello}
      {greet("Fidel")}
      {sum(10, 20)}
    </>
  );
}

export default App;
