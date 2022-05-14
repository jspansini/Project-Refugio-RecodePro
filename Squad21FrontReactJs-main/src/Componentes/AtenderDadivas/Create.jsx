import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../Service/api";

const CreateAtender = () => {
  const nome = useRef();
  const telefone = useRef();
  const email = useRef();

  var dadivas = document.getElementById("dadivas");

  const [dadosong, setDadosOng] = useState([]);

  useEffect(() => {
    Api.get("/solicitardadivas/")
      .then((res) => setDadosOng(res.data))
      .catch((err) => console.log(err));
  }, []);

  const atender = (event) => {
    event.preventDefault();
    var ong = "";
    var tel = "";
    var ender = "";
    var e_mail = "";
    var id = "";
    var ajuda = "";
    var lbl = dadivas.options[dadivas.selectedIndex].value;
    dadosong.map((dado) => {
      if (String(dado.ong) === String(lbl)) {
        ong = dado.ong;
        tel = dado.telefone;
        ender = dado.endereco;
        e_mail = dado.email;
        id = dado.id;
        ajuda = dado.dadiva;
      }
      return "ok";
    });
    Api.post("/atenderdadivas/", {
      nome: nome.current.value,
      telefone: telefone.current.value,
      email: email.current.value,
      solicitardadiva: {
        ong: ong,
        telefone: tel,
        endereco: ender,
        email: e_mail,
        id: id,
        dadiva: ajuda,
      },
    })
      .then(() => window.alert("Atendido"))
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
          <h4>Anjo</h4>
          <p style={{ fontsize: "large" }}>
            Aqui você pode fazer a diferença! Dê uma Dádiva a alguém:
          </p>
        </div>
      </header>

      <section className="section">
        <br />
        <h4>Atender Dádiva</h4>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={atender}>
              <div className="text-danger"></div>
              <div className="form-group">
                <label className="control-label">Seu Nome</label>
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
                <select id="dadivas" className="form-control">
                  {dadosong.map((dado) => {
                    return (
                      <optgroup key={dado.id} label={dado.ong}>
                        <option value={dado.ong}>{dado.dadiva}</option>
                      </optgroup>
                    );
                  })}
                </select>
              </div>

              <br />

              <div className="form-group">
                <input
                  type="submit"
                  value="Ajudar"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>

        <div>
          <Link to="/atenderindex">Voltar</Link>
        </div>
      </section>
    </div>
  );
};

export default CreateAtender;
