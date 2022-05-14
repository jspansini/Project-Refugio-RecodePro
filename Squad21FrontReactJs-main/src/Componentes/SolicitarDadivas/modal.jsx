import React, { useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import Api from "../../Service/api";

function ModalEdit(props) {
  const ong = useRef();
  const endereco = useRef();
  const telefone = useRef();
  const email = useRef();
  const dadiva = useRef();

  function UpdateSolicitarDadiva(event) {
    event.preventDefault();
    Api.put("/solicitardadivas/update", {
      id: props.dado.id,
      ong: ong.current.value,
      telefone: telefone.current.value,
      email: email.current.value,
      endereco: endereco.current.value,
      dadiva: dadiva.current.value,
    })
      .then(() => window.alert("Atualizado!"))
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
          <form onSubmit={UpdateSolicitarDadiva}>
            <div className="text-danger"></div>
            <div className="form-group">
              <label className="control-label">Ong</label>
              <input
                className="form-control"
                defaultValue={props.dado.ong}
                ref={ong}
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
              <label className="control-label">Endereço</label>
              <input
                className="form-control"
                defaultValue={props.dado.endereco}
                ref={endereco}
                required
              />
              <span className="text-danger"></span>
            </div>

            <div className="form-group">
              <label className="control-label">Dádiva</label>
              <input
                className="form-control"
                defaultValue={props.dado.dadiva}
                ref={dadiva}
                required
              />
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
