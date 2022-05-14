import { useRef } from "react";
import { Link } from "react-router-dom";
import Api from "../../Service/api";

const AvaliacaoCreate = () => {
  const tipo = useRef();
  const nome = useRef();
  const avaliacao = useRef();

  const enviar = () => {
    Api.post("/avaliacoes/", {
      nome: nome.current.value,
      tipo: tipo.current.value,
      avaliacoes: avaliacao.current.value,
    })
      .then(() => window.alert("comentário enviado"))
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
          <h1>Criar nova avaliação</h1>
        </div>
      </header>
      <div className="row section">
        <br />
        <h4>Avaliação</h4>
        <hr />
        <div className="col-md-4">
          <form onSubmit={enviar}>
            <div className="text-danger"></div>
            <div className="form-group">
              <label className="control-label">Nome:</label>
              <input className="form-control" ref={nome} required />
              <span className="text-danger"></span>
            </div>
            <br />
            <div className="form-group">
              <label>Você é:</label>
              <select id="tipos" ref={tipo} style={{ minWidth: "50%" }}>
                <option value="Anjo">Anjo</option>
                <option value="Ong">Ong</option>
              </select>
            </div>
            <div className="form-group">
              <label className="control-label">Seu comentário:</label>
              <textarea ref={avaliacao} required></textarea>
              <span className="text-danger"></span>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Comentar"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
        <div>
          <Link to={"/avaliacaoindex"}>Voltar para os comentários</Link>
        </div>
      </div>
    </div>
  );
};

export default AvaliacaoCreate;
