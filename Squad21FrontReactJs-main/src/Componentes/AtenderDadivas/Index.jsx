import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../Service/api";
import ModalEdit from "./modal";
const IndexAtender = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (dadosanjo) => {
    setShow(true);
    setAnjoupdate(dadosanjo);
  };

  const [anjoupdate, setAnjoupdate] = useState();

  const [dadosanjo, setDadosanjo] = useState([]);

  useEffect(() => {
    Api.get("/atenderdadivas/")
      .then((res) => setDadosanjo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deletar = (id) => {
    const conf = window.confirm("Tem certeza que deseja deletar?");
    if (conf) {
      Api.delete(`/atenderdadivas/${id}`)
        .then(() => window.alert("deletado"))
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
          <h2>Olá, Anjo</h2>
          <h3 style={{ paddingleft: "10px" }}>Atenda uma Dádiva das ONGs</h3>
          <p>
            <Link to={"/atendercriar"} className="btn btn-primary">
              Atender
            </Link>
          </p>
        </div>
      </header>

      <section className="section">
        <br />
        <h5>Veja as Solicitações de Dádivas atendidas por Anjos:</h5>
        {dadosanjo.map((dado, value) => {
          return (
            <div key={dado.id}>
              <p>
                <strong>NOME:</strong>
                <span>{dado.nome}</span>
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
                <span>{dado.solicitardadiva.dadiva}</span>
              </p>

              <p>
                <strong>ONG:</strong>
                <span>{dado.solicitardadiva.ong}</span>
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
        <ModalEdit show={show} handleClose={handleClose} dado={anjoupdate} />
      ) : (
        ""
      )}
      <br />
      <br />
    </div>
  );
};

export default IndexAtender;
