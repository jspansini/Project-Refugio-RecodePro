import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Api from "../../Service/api";

function ModalEdit(props) {
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

  function UpdateAtenderDadiva(event) {
    event.preventDefault();
    var ong = "";
    var tel = "";
    var e_mail = "";
    var id = "";
    var ajuda = "";
    var lbl = dadivas.options[dadivas.selectedIndex].value;
    dadosong.map((dado) => {
      if (String(dado.ong) === String(lbl)) {
        ong = dado.ong;
        tel = dado.telefone;
        e_mail = dado.email;
        id = dado.id;
        ajuda = dado.dadiva;
      }
      return "ok";
    });
    Api.put("/atenderdadivas/", {
      id: props.dado.id,
      nome: nome.current.value,
      telefone: telefone.current.value,
      email: email.current.value,
      solicitardadiva: {
        ong: ong,
        telefone: tel,
        email: e_mail,
        id: id,
        dadiva: ajuda,
      },
    })
      .then(() => window.alert("atualizado"))
      .catch((err) => window.alert(err));
  }

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Atualizar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={UpdateAtenderDadiva}>
            <div className="text-danger"></div>
            <div className="form-group">
              <label className="control-label">Ong</label>
              <input
                className="form-control"
                defaultValue={props.dado.nome}
                ref={nome}
                required
              />
              <span className="text-danger"></span>
            </div>
            <div className="form-group">
              <label className="control-label">Telefone</label>
              <input
                className="form-control"
                defaultValue={props.dado.telefone}
                ref={telefone}
                required
              />
              <span className="text-danger"></span>
            </div>
            <div className="form-group">
              <label className="control-label">Email</label>
              <input
                className="form-control"
                defaultValue={props.dado.email}
                ref={email}
                required
              />
              <span className="text-danger"></span>
            </div>

            <div className="form-group">
              <label className="control-label">Dádiva</label>
              <select id="dadivas" className="form-control">
                {dadosong.map((data) => {
                  return (
                    <optgroup key={data.id} label={data.nome}>
                      <option value={data.nome}>{data.dadiva}</option>
                    </optgroup>
                  );
                })}
              </select>
            </div>

            <br />

            <div className="form-group">
              <input
                type="submit"
                value="Atualizar"
                className="btn btn-primary"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalEdit;
