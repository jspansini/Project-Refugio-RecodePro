import { Link } from "react-router-dom";
import { useRef } from "react";
import Api from "../../Service/api";

const CriarCreate = () => {
  const nome = useRef();
  const telefone = useRef();
  const email = useRef();
  const dadiva = useRef();

  const solicitar = (event) => {
    event.preventDefault();
    Api.post("/criardadivas/", {
      nome: nome.current.value,
      telefone: telefone.current.value,
      email: email.current.value,
      dadiva: dadiva.current.value,
    })
      .then((res) => window.alert("criado"))
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
          <h2>Anjo</h2>
        </div>
      </header>

      <section className="section">
        <br />
        <h4>Criar Dádiva</h4>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={solicitar}>
              <div className="text-danger"></div>
              <div className="form-group">
                <label className="control-label">Nome</label>
                <input className="form-control" ref={nome} required />
                <span className="text-danger"></span>
              </div>
              <div className="form-group">
                <label className="control-label">Telefone</label>
                <input className="form-control" ref={telefone} required />
                <span className="text-danger"></span>
              </div>
              <div className="form-group">
                <label className="control-label">Email</label>
                <input className="form-control" ref={email} required />
                <span className="text-danger"></span>
              </div>
              <div className="form-group">
                <label className="control-label">Dádiva</label>
                <input className="form-control" ref={dadiva} required />
                <span className="text-danger"></span>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Criar"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
        <div>
          <Link to={"/criarindex"}>Voltar</Link>
        </div>
      </section>
    </div>
  );
};

export default CriarCreate;
