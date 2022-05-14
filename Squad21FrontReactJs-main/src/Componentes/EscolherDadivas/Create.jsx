import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Api from "../../Service/api";

const EscolherCreate = () => {
  const ong = useRef();
  const telefone = useRef();
  const email = useRef();
  const endereco = useRef();

  var dadivas = document.getElementById("dadivas");

  const [dadosanjo, setDadosAnjo] = useState([]);

  useEffect(() => {
    Api.get("/criardadivas/")
      .then((res) => setDadosAnjo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const escolher = (event) => {
    event.preventDefault();
    var nome = "";
    var tel = "";
    var e_mail = "";
    var id = "";
    var ajuda = "";
    var lbl = dadivas.options[dadivas.selectedIndex].value;
    dadosanjo.map((dado) => {
      if (String(dado.nome) === String(lbl)) {
        nome = dado.nome;
        tel = dado.telefone;
        e_mail = dado.email;
        id = dado.id;
        ajuda = dado.dadiva;
      }
      return "ok";
    });

    Api.post("/escolherdadivas/", {
      ong: ong.current.value,
      telefone: telefone.current.value,
      email: email.current.value,
      endereco: endereco.current.value,
      criardadiva: {
        ong: nome,
        telefone: tel,
        email: e_mail,
        id: id,
        dadiva: ajuda,
      },
    })
      .then(() => window.alert("escolhido"))
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
          <h2>Ong</h2>
        </div>
      </header>

      <section className="section">
        <br />
        <h4>Escolher Dádiva</h4>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={escolher}>
              <div className="text-danger"></div>
              <div className="form-group">
                <label className="control-label">Ong</label>
                <input className="form-control" ref={ong} required />
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
                <label className="control-label">Endereço</label>
                <input className="form-control" ref={endereco} required />
                <span className="text-danger"></span>
              </div>

              <div className="form-group">
                <label className="control-label">Dádiva</label>
                <select id="dadivas" className="form-control">
                  {dadosanjo.map((dado) => {
                    return (
                      <optgroup key={dado.id} label={dado.nome}>
                        <option value={dado.nome}>{dado.dadiva}</option>
                      </optgroup>
                    );
                  })}
                </select>
              </div>

              <br />

              <div className="form-group">
                <input
                  type="submit"
                  value="Selecionar"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>

        <div>
          <Link to={"/escolherindex"}>Voltar</Link>
        </div>
      </section>
    </div>
  );
};

export default EscolherCreate;
