import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Api from "../../Service/api";
import ModalEdit from "./modal";

const EscolherIndex = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (dadosanjo) => {
    setShow(true);
    setOngupdate(dadosanjo);
  };

  const [ongupdate, setOngupdate] = useState();

  const [dadosanjo, setDadosanjo] = useState([]);

  useEffect(() => {
    Api.get("/escolherdadivas/")
      .then((res) => setDadosanjo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deletar = (id) => {
    const conf = window.confirm("Tem certeza que deseja deletar?");
    if (conf) {
      Api.delete(`/escolherdadivas/${id}`)
        .then(() => window.alert("deletado!"))
        .catch((err) => window.alert(err));
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
          <h2>Ong - Escolha uma dádiva criada por um Anjo:</h2>

          <p>
            <Link to={"/escolhercriar"} className="btn btn-primary">
              Selecionar dadiva
            </Link>
          </p>

          <p className="alert-warning" role="alert">
            Obs: estejam atentos a qualidade dos produtos a serem escolhidos.
          </p>
        </div>
      </header>

      <section className="section">
        <br />
        <h4>Dádivas escolhidas:</h4>

        {dadosanjo.map((dado, value) => {
          return (
            <div key={dado.id}>
              <p>
                <strong>NOME:</strong>
                <span>{dado.ong}</span>
              </p>

              <p>
                <strong>TELEFONE:</strong>
                <span>{dado.telefone}</span>
              </p>

              <p>
                <strong>EMAIL:</strong>
                <span>{dado.email}</span>
              </p>

              <p>
                <strong>DÁDIVA:</strong>
                <span>{dado.criardadiva.dadiva}</span>
              </p>

              <p>
                <strong>ANJO:</strong>
                <span>{dado.criardadiva.nome}</span>
              </p>

              <div>
                <span>
                  <span>
                    <button
                      type="button"
                      className="btn btn-warning"
                      data-bs-toggle="modal"
                      data-bs-target={"#exampleModal"}
                      onClick={() => handleShow(dado)}
                    >
                      Editar
                    </button>
                  </span>
                  |
                  <button
                    className="btn btn-danger"
                    onClick={() => deletar(dado.id)}
                  >
                    Deletar
                  </button>
                </span>
              </div>
              <hr />
            </div>
          );
        })}
      </section>
      {show ? (
        <ModalEdit show={show} handleClose={handleClose} dado={ongupdate} />
      ) : (
        ""
      )}
      <br />
      <br />
    </div>
  );
};

export default EscolherIndex;
