import React, { useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import Api from "../../Service/api";

function ModalEdit(props) {
  const tipo = useRef();
  const nome = useRef();
  const avaliacao = useRef();

  function UpdateCriarDadiva(event) {
    event.preventDefault();
    Api.put("/avaliacoes/update", {
      id: props.dado.id,
      nome: nome.current.value,
      tipo: tipo.current.value,
      avaliacoes: avaliacao.current.value,
    })
      .then(() => window.alert("atualizado"))
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
          <form onSubmit={UpdateCriarDadiva} className="row">
            <div className="text-danger"></div>
            <div className="form-group">
              <label className="control-label">Nome:</label>
              <input
                className="form-control"
                defaultValue={props.dado.nome}
                ref={nome}
                required
              />
              <span className="text-danger"></span>
            </div>
            <br />
            <div className="form-group">
              <label className="control-label">Você é:</label>
              <br />
              <select ref={tipo} style={{ minWidth: "30%" }}>
                <option value="Anjo">Anjo</option>
                <option value="Ong">Ong</option>
              </select>
              <span className="text-danger"></span>
            </div>
            <br />
            <div className="form-group">
              <label className="control-label">Seu comentário:</label>
              <br />
              <textarea
                ref={avaliacao}
                defaultValue={props.dado.avaliacoes}
                style={{ width: "100%" }}
                required
              ></textarea>
              <span className="text-danger"></span>
            </div>
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
