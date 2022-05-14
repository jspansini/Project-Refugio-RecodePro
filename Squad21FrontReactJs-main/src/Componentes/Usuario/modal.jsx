import React, { useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import Api from "../../Service/api";

function ModalEdit(props) {
  const nome = useRef();
  const email = useRef();
  const pass = useRef();
  const role = useRef();

  function UpdateUsuario(event) {
    event.preventDefault();
    Api.put("/usuarios/update", {
      userId: props.dado.userId,
      nome: nome.current.value,
      email: email.current.value,
      senha: pass.current.value,
      role: role.current.value,
    })
      .then(() => window.alert("usuário atualizado!"))
      .catch((err) => {
        window.alert(err);
        console.log(err);
      });
  }

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Atualizar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={UpdateUsuario}>
            <div className="text-danger"></div>
            <div className="form-group">
              <label className="control-label">Nome</label>
              <input
                className="form-control"
                defaultValue={props.dado.nome}
                ref={nome}
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
              <label className="control-label">Senha</label>
              <input
                type={"password"}
                className="form-control"
                defaultValue={props.dado.senha}
                ref={pass}
                required
              />
              <span className="text-danger"></span>
            </div>
            <div className="form-group">
              <label className="control-label">Tipo</label>
              <br />
              <select ref={role} required style={{ minWidth: "30%" }}>
                <option value="Anjo">Anjo</option>
                <option value="Ong">Ong</option>
              </select>
              <span className="text-danger"></span>
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
