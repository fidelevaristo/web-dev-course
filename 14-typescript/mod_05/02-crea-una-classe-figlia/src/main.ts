class Valuta {
  protected nome: string; // currency name accessible in subclasses
  private codice: string; // currency code only accessible inside this class
  private simbolo: string; // currency symbol only accessible inside this class

  constructor(nome: string, codice: string, simbolo: string) {
    this.nome = nome; // initialize name
    this.codice = codice; // initialize code
    this.simbolo = simbolo; // initialize symbol
  }

  public descrivi(): void {
    // build description string
    let descrizione = `La valuta ${this.nome} `;
    descrizione += `ha il codice ${this.codice} `;
    descrizione += `e utilizza il simbolo ${this.simbolo}.`;

    // print description to console
    console.log(descrizione);
  }
}

class ValutaDettagliata extends Valuta {
  private banconote: number[]; // array of banknote values

  constructor(
    nome: string,
    codice: string,
    simbolo: string,
    banconote: number[],
  ) {
    super(nome, codice, simbolo); // call parent constructor
    this.banconote = banconote; // store banknotes
  }

  public descriviBanconote(): void {
    // start description using inherited property
    let descrizione = `La valuta ${this.nome} utilizza le banconote `;

    // convert array to readable string
    descrizione += this.banconote.join(", ");

    // print result
    console.log(descrizione);
  }
}

const valutaEuro = new ValutaDettagliata(
  "Euro",
  "EUR",
  "€",
  [500, 200, 100, 50, 20, 10, 5],
);

valutaEuro.descrivi(); // call base method
valutaEuro.descriviBanconote(); // call extended method

export {};
