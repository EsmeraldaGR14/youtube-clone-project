import React from "react";
import "./Modal.css";

function Modal({ status, toggleModal }) {
  // const [modalStatus, setModalStatus] = useState(status)

  return (
    <>
      {status && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>404 error</h2>
            <button onClick={toggleModal} className="close-modal">
              &times;
            </button>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
