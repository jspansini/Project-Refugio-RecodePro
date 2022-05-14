import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../../Service/api";
import ModalEdit from "./modal";

const CriarIndex = () => {

  const [dadosanjo, setDadosAnjo] = useState([]);

  const [show, setShow] = useState(false);

  const [anjoupdate, setAnjoupdate] = useState();

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (dadosanjo) => {
    setShow(true);
    setAnjoupdate(dadosanjo);
  };

  useEffect(() => {
    Api.get("/criardadivas/")
      .then((res) => setDadosAnjo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deletar = (id) => {
    const conf = window.confirm("Tem certeza que deseja deletar?");
    if (conf) {
      Api.delete(`/criardadivas/${id}`)
        .then(() => window.alert("deletado"))
        .catch((err) =>
          window.alert(
            err + "\nAlguma ong já escolheu sua dádiva, entre em contato!"
          )
        );
    } else {
      window.location.reload();
    }
  };

  const userStorage = localStorage.getItem("user");

  if (userStorage === null) {
    return (
      <div className="app-header">
        <h1 style={{ textAlign: "center" }}>Acesso não autorizado!</h1>
      </div>
    );
  }

  return (
    <div className="app-header">
      <header>
        <div>
          <h2 style={{ margintop: "12px", marginbottom: "12px" }}>
            Distribua suas Dádivas. Seja o Anjo de alguém!
          </h2>
          <div className="mao">
            <div>
              <p className="apontador">👉</p>
            </div>
            <div>
              <p style={{ background: "lightblue" }}>
                Exemplos de dádivas que você pode criar: Cesta Básica, Aulas de
                português, Roupas, Móveis, Aparelhos eletrônicos, etc.
              </p>
            </div>
          </div>
          <p>
            <Link to={"/criarcreate"} className="btn btn-primary">
              Criar dádiva
            </Link>
          </p>
          <p className="alert alert-warning" role="alert">
            Em caso de determinadas dádivas como perecíveis, roupas e outros,
            tenha atenção a qualidade, pois estará sujeito a verificação por
            parte da ong que recorrer a sua dádiva.
          </p>
        </div>
      </header>

      <section className="section">
        <br />
        <h5>Dádivas criadas por Anjos:</h5>

        {dadosanjo.map((dado) => {
          return (
            <div key={dado.id}>
              <p>
                <strong>Nome: </strong>
                {dado.nome}
              </p>

              <p>
                <strong>Telefone: </strong>
                {dado.telefone}
              </p>
              <p>
                <strong>Email: </strong>
                {dado.email}
              </p>

              <p>
                <strong>DADIVA: </strong>
                {dado.dadiva}
              </p>
              <div>
                <span>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => handleShow(dado)}
                  >
                    Editar
                  </button>
                  |
                  <button
                    className="btn btn-danger"
                    onClick={() => deletar(dado.id)}
                  >
                    Deletar
                  </button>
                </span>
              </div>
            </div>
          );
        })}
        {show ? (
          <ModalEdit show={show} handleClose={handleClose} dado={anjoupdate} />
        ) : (
          <></>
        )}
      </section>
    </div>
  );
};

export default CriarIndex;
