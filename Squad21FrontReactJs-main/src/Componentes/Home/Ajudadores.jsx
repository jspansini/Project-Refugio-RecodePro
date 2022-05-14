import { Link } from "react-router-dom";

export const Ajudadores = () => {
  return (
    <div className="app-header">
      <main>
        <section style={{ padding: "10px" }} className="section">
          <h3 className="tituloPrincipal">Esta área é onde anjos poderão criar e atender dádivas.</h3>
          <p>
            Caso tenha dúvidas sobre algum assunto relacionado, entre em contato
            conosco através do nosso email: squad21github@gmail.com
          </p>
        </section>

        <section
          style={{ width: "40%", display: "flex", justifyContent: "center" }}
          className="section"
        >
          <h2 style={{ display: "flex" }}>
            <Link className="linksfontesz" to={"/criarindex"}>
              Criar Dádiva
            </Link>
          </h2>
        </section>

        <section
          style={{ width: "40%", display: "flex", justifyContent: "center" }}
          className="section"
        >
          <h2 style={{ display: "flex" }}>
            <Link className="linksfontesz" to={"/atenderindex"}>
              Atender Dádiva
            </Link>
          </h2>
        </section>
      </main>
    </div>
  );
};
