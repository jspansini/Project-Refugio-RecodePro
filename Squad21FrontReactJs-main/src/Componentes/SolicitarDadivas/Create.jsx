import { useRef } from "react";
import { Link } from "react-router-dom";
import Api from "../../Service/api";

const SolicitarCriar = () => {
  const nome = useRef();
  const endereco = useRef();
  const telefone = useRef();
  const email = useRef();
  const dadiva = useRef();

  const solicitar = (event) => {
    event.preventDefault();
    Api.post("/solicitardadivas/", {
      ong: nome.current.value,
      endereco: endereco.current.value,
      telefone: telefone.current.value,
      email: email.current.value,
      dadiva: dadiva.current.value,
    })
      .then(() => window.alert("solicitado!"))
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
    <div>
      <header>
        <div>
          <h2>Solicitar Dádiva</h2>
        </div>
      </header>

      <section className="section">
        <br />
        <h5>Preencha os campos para Solicitar:</h5>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={solicitar}>
              <div className="text-danger"></div>
              <div className="form-group">
                <label className="control-label">NOME DA ONG</label>
                <input className="form-control" ref={nome} required />
                <span className="text-danger"></span>
              </div>
              <div className="form-group">
                <label className="control-label">ENDEREÇO</label>
                <input className="form-control" ref={endereco} required />
                <span className="text-danger"></span>
              </div>
              <div className="form-group">
                <label className="control-label">TELEFONE</label>
                <input className="form-control" ref={telefone} required />
                <span className="text-danger"></span>
              </div>
              <div className="form-group">
                <label className="control-label">EMAIL</label>
                <input className="form-control" ref={email} required />
                <span className="text-danger"></span>
              </div>
              <div className="form-group">
                <label className="control-label">DÁDIVA</label>
                <input className="form-control" ref={dadiva} required />
                <span className="text-danger"></span>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Solicitar"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>

        <div>
          <Link to={"/solicitarindex"} className="btn btn-primary">
            Voltar
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SolicitarCriar;
