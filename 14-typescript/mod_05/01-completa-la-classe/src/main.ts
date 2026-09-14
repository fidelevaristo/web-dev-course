class Valuta {
  // Private properties to store currency data
  private nome: string;
  private codice: string;
  private simbolo: string;

  // Constructor initializes all required fields
  constructor(nome: string, codice: string, simbolo: string) {
    this.nome = nome; // assign currency name
    this.codice = codice; // assign currency code
    this.simbolo = simbolo; // assign currency symbol
  }

  // Public method to print currency description
  public descrivi(): void {
    // Build description string step by step
    let descrizione = `La valuta ${this.nome} `;
    descrizione += `ha il codice ${this.codice} `;
    descrizione += `e utilizza il simbolo ${this.simbolo}.`;

    console.log(descrizione);
  }
}

// Create first currency instance (Naira)
const valutaNaira = new Valuta("Naira", "NGN", "₦");

console.log(valutaNaira);

valutaNaira.descrivi();

const valutaDollaroUs = new Valuta("Dollaro statunitense", "USD", "$");

console.log(valutaDollaroUs);

valutaDollaroUs.descrivi();

export {};
