import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../Service/api";
import ModalEdit from "./modal";

const AvaliacaoIndex = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (dadoscoment) => {
    setShow(true);
    setComentupdate(dadoscoment);
  };

  const [comentupdate, setComentupdate] = useState();

  const [avaliacao, setAvalicao] = useState([]);

  useEffect(() => {
    Api.get("/avaliacoes")
      .then((res) => setAvalicao(res.data))
      .catch((err) => window.alert(err));
  }, []);

  const deletar = (id) => {
    Api.delete(`/avaliacoes/${id}`)
      .then(() => {
        window.alert("Comentário excluído!");
        window.location.reload();
      })
      .catch((err) => window.alert(err));
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
          <h1>Comentários</h1>
        </div>
        <div>
          <p>
            <Link to={"/avaliacaocreate"} className="btn btn-primary">
              Novo comentário
            </Link>
          </p>
        </div>
      </header>
      <section className="section">
        <br />
        <h5>Comentários de anjos e ongs:</h5>

        <hr />
        {avaliacao.map((dado) => {
          return (
            <div>
              <p>
                <strong>Nome: </strong>
              </p>
              <p>{dado.nome}</p>
              <p>
                <strong>Tipo: </strong>
              </p>
              <p>{dado.tipo}</p>
              <p>
                <strong>Comentário:</strong>
              </p>
              <p>{dado.avaliacoes}</p>
              <p>
                <button
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
              </p>
            </div>
          );
        })}
      </section>
      {show ? (
        <ModalEdit show={show} handleClose={handleClose} dado={comentupdate} />
      ) : (
        ""
      )}
    </div>
  );
};

export default AvaliacaoIndex;
