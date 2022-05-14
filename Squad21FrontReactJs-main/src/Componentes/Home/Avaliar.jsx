import { Link } from "react-router-dom";

export const Avaliate = () => {

  return (
    <div id="avaliacao" className="app-header">
      <main>
        <section style={{ padding: "10px" }} className="section">
          <h3 className="tituloPrincipal">Esta área é onde você poderá avaliar o nosso site.</h3>
          <p>Entre no link abaixo para comentar</p>
          <li>
            <Link className="text-dark bg-light" to={"/avaliacaoindex"}>
              Página de avaliações
            </Link>
          </li>
        </section>
      </main>
    </div>
  );
};
