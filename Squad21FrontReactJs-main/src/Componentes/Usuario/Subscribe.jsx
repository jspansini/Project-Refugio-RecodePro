import React, { useRef } from "react";
import Api from "../../Service/api";

function Cadastro() {
  const nome = useRef();
  const email = useRef();
  const pass = useRef();

  const role = useRef();

  const cadastrar = (event) => {
    event.preventDefault();

    Api.post("/usuarios/", {
      nome: nome.current.value,
      email: email.current.value,
      senha: pass.current.value,
      role: role.current.value,
    })
      .then(() => {
        window.alert("Usuário cadastrado com sucesso!");
        window.alert("vá para login");
      })
      .catch((err) => window.alert(err));
  };

  const userStorage = localStorage.getItem("user");

  if (userStorage !== null) {
    return (
      <div className="app-header">
        <h1 style={{ textAlign: "center" }}>Acesso não autorizado!</h1>
      </div>
    );
  }

  return (
    <div className="app-header">
      <section className="section">
        <form className="formsub" onSubmit={cadastrar}>
          <br />
          <label>Nome:</label>
          <br />
          <input type="text" required ref={nome} />
          <br />
          <label>Email:</label>
          <br />
          <input type="email" required ref={email} />
          <br />
          <label>Senha:</label>
          <br />
          <input type="password" required ref={pass} />
          <br />
          <label>Você é:</label>
          <br />
          <select id="roles" ref={role} style={{ minWidth: "20%" }}>
            <option value="Anjo">Anjo</option>
            <option value="Ong">Ong</option>
          </select>
          <br />
          <br />
          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>
        </form>
      </section>
    </div>
  );
}

export default Cadastro;
