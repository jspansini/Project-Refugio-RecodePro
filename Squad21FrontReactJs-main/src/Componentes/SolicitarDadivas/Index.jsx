import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../Service/api";
import ModalEdit from "./modal";

const SolicitarIndex = () => {
  const [ongupdate, setOngupdate] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (dadosanjo) => {
    setShow(true);
    setOngupdate(dadosanjo);
  };

  const [dadosong, setDadosOng] = useState([]);

  useEffect(() => {
    Api.get("/solicitardadivas/")
      .then((res) => setDadosOng(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deletar = (id) => {
    const conf = window.confirm("Tem certeza que deseja deletar?");
    if (conf) {
      Api.delete(`/solicitardadivas/${id}`)
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
    <div>
      <header>
        <div>
          <h2>Solicitar Dádiva</h2>

          <p>
            <Link to={"/solicitarcriar"} className="btn btn-primary">
              Solicitar dádiva
            </Link>
          </p>
        </div>
      </header>

      <section className="section">
        <hr />
        <div className="row">
          <br />
          <h5>Veja as Solicitações de Dádivas feitas por ongs:</h5>

          {dadosong.map((dado) => {
            return (
              <div key={dado.id}>
                <p>
                  <strong>ONG: </strong>
                  {dado.ong}
                </p>

                <p>
                  <strong>ENDEREÇO: </strong>
                  {dado.endereco}
                </p>
                <p>
                  <strong>TELEFONE: </strong>
                  {dado.telefone}
                </p>
                <p>
                  <strong>EMAIL: </strong>
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
        </div>
      </section>
      {show ? (
        <ModalEdit show={show} handleClose={handleClose} dado={ongupdate} />
      ) : (
        ""
      )}
    </div>
  );
};

export default SolicitarIndex;
