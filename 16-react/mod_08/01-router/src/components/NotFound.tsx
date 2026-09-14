import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <h1>404 - Not Found</h1>

      <p>La pagina che stai cercando non esiste.</p>

      <Link to="/">Torna alla home</Link>
    </section>
  );
}
