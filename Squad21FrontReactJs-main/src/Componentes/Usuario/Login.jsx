import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Providers/auth";
import Api from "../../Service/api";

function Login() {
  const { setUser } = useAuth();

  const [login, setLogin] = useState([]);

  const [input, setInput] = useState({
    email: "",
  });

  const [senha, setSenha] = useState({
    senha: "",
  });

  useEffect(() => {
    Api.get("/usuarios/")
      .then((res) => {
        setLogin(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    if (input.email === "" || senha.senha === "") {
      window.alert("Um ou mais campos vazios");
    }
    login.map((log) => {
      if (log.email === input.email && log.senha === senha.senha) {
        window.alert("Bem vindo! " + log.nome);
        localStorage.setItem("user", JSON.stringify(input.email));
        setUser(input);
        window.alert("vá para perfil");
        window.location.assign('/')
        return(
          "ok"
        )
      }
      return("...")
    });
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
        <fieldset className="formsub">
          <h1>Login</h1>
          <form>
            <label>Email:</label>
            <br />
            <input
              type="text"
              onChange={(e) => setInput({ email: e.target.value })}
            />
            <br />
            <label>Senha</label>
            <br />
            <input
              type="password"
              onChange={(e) => setSenha({ senha: e.target.value })}
            />
            <br />
            <br />
            <input
              type={"submit"}
              className="btn btn-primary"
              value={"Entrar"}
              onClick={handleLogin}
            />
            <br />
          </form>
          <br />
          <span>
            <Link to="/recovery">Esqueceu sua senha?</Link>
          </span>
        </fieldset>
        <br />
        <p className="formsub">
          Não está cadastrado? Cadastre-se{" "}
          <span>
            <Link to="/cadastro">aqui</Link>
          </span>
        </p>
      </section>
    </div>
  );
}

export default Login;
