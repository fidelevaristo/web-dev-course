# Web Development Course - Develhope

Esercizi e progetti del corso di Web Development di Develhope, realizzati da Fidel Vicente Evaristo.

Il percorso copre lo sviluppo frontend dalle basi di HTML, CSS e JavaScript fino ad applicazioni complete con TypeScript, React, Redux Toolkit e test automatizzati.

---

## Moduli del corso

| # | Modulo | Video | Esercizi | Stato |
| :-: | :--- | :-: | :-: | :-: |
| 01 | Introduzione ai corsi Develhope | 5 | 0/0 | Completato |
| 02 | HTML | 26 | 13/13 | In attesa di caricamento |
| 03 | CSS | 36 | 12/12 | In attesa di caricamento |
| 04 | Sistemi di controllo versione e come usarli: Git | 30 | 6/6 | In attesa di caricamento |
| 05 | Feedback 1 | 0 | 0/0 | Completato |
| 06 | JavaScript Basics | 27 | 54/54 | In attesa di caricamento |
| 07 | JavaScript Advanced | 14 | 38/38 | In attesa di caricamento |
| 08 | JavaScript DOM | 8 | 8/8 | Completato e organizzato |
| 09 | Valuta la tua esperienza! 1 | 0 | 0/0 | Completato |
| 10 | Career and Placement I | 17 | 0/2 | In attesa di caricamento |
| 11 | DevTools | 10 | 0/0 | Completato |
| 12 | Toolchain | 16 | 0/0 | Completato |
| 13 | Career and Placement II | 1 | 1/1 | In attesa di caricamento |
| 14 | TypeScript | 31 | 22/22 | Completato e organizzato |
| 15 | Feedback 2 | 0 | 0/0 | Completato |
| 16 | React | 67 | 21/21 | Completato e organizzato |
| 17 | Valuta la tua esperienza! 2 | 0 | 0/0 | Completato |

---

## Tecnologie

- Linguaggi: HTML5, CSS3, JavaScript (ES6+), TypeScript
- Framework e librerie: React 19, Vite, Sass/SCSS, Tailwind CSS, React Bootstrap
- Gestione dello stato e API: Redux Toolkit, React Query (@tanstack/react-query), Fetch API
- Routing: React Router DOM (v7)
- Test: Vitest, React Testing Library, User Event, Oxlint, ESLint
- Controllo versione: Git e GitHub

---

## Contenuto dei moduli pratici

### [08-js-dom](./08-js-dom/)
- mod_01:
  - 01-navigare-il-dom: navigazione dei nodi (parentElement, children, nextElementSibling, previousElementSibling).
  - 02-cercare-elementi-nel-dom: selezione con querySelector, querySelectorAll e getElementById.
  - 03-manipolazione-del-dom-1: to-do list con checkbox e nodi li creati dinamicamente.
  - 04-manipolazione-del-dom-2: lettura campi del form e serializzazione in data-person JSON.
  - 05-gli-eventi-del-dom: gestione del click per attivare e disattivare la dark mode.
- mod_02:
  - 01-localstorage: salvataggio dei dati del form in localStorage con ripristino al reload.
  - 02-sessionstorage: salvataggio dei dati in sessionStorage.
  - 03-fetch-card-lord-of-the-rings: richiesta asincrona alla RingsDB API e rendering della carta personaggio.

### [14-typescript](./14-typescript/)
- mod_02: tipi primitivi, tipi any, unknown, never, type assertions e type aliases.
- mod_03: oggetti, interfacce e tipizzazione di funzioni con parametri opzionali.
- mod_04: array, ReadonlyArray, tuple e uso di reduce con valore iniziale tipizzato.
- mod_05: classi OOP, visibilità (private, protected, public), costruttori con super() ed estensione di interfacce.
- mod_06: funzioni e interfacce generiche.
- mod_07: enum numerici e di stringhe.
- mod_08: union types, intersection types e mapped types.
- mod_09: utility types (Partial, Required, Readonly, Pick, Omit) e Record<K, V>.

### [16-react](./16-react/)
- mod_01: sintassi JSX ed espressioni.
- mod_02: componenti funzionali, props e rendering condizionale.
- mod_03: gestione dello stato con useState, effetti collaterali con useEffect e gestione eventi.
- mod_04: form non controllati con FormData, form controllati, hook useRef e rendering di liste con key.
- mod_05: data fetching con useEffect, custom hooks (useCounter, useLoginForm, useCurrentLocation, useGithubUser) e React Query.
- mod_06: approcci di stile: CSS standard, inline styles, SCSS, Tailwind CSS e React Bootstrap.
- mod_07: Redux Toolkit: slice, store, middleware personalizzati e thunk asincroni.
- mod_08: routing con React Router: route annidate, parametri dinamici e pagina 404.
- mod_09: test automatici con Vitest e React Testing Library, inclusi mock per le chiamate API.

---

## Esecuzione dei progetti

1. Clonare il repository:
   ```bash
   git clone https://github.com/fidelevaristo/web-dev-course.git
   ```

2. Esercizi JavaScript e DOM (08-js-dom):
   - Aprire il file index.html nel browser o usare l'estensione Live Server di VS Code.

3. Esercizi TypeScript e React (14-typescript e 16-react):
   - Entrare nella cartella dell'esercizio:
     ```bash
     cd 16-react/mod_02/01-i-componenti
     ```
   - Installare i pacchetti:
     ```bash
     npm install
     ```
   - Avviare il server locale:
     ```bash
     npm run dev
     ```

---

## Autore

- Fidel Vicente Evaristo - [@fidelevaristo](https://github.com/fidelevaristo)
