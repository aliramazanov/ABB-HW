import React from "react";
import "./App.scss";
import Button from "./Components/Button";
import Modal from "./Components/Modal";
import modalInfo from "./modalData.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      modalId: null,
    };
  }

  handleOpenModalButton = (modalId) => {
    this.setState({ isModalOpen: true, modalId: modalId });
  };

  handleClosingOfModal = () => {
    this.setState({ isModalOpen: false, modalId: null });
  };

  render() {
    return (
      <div className="app">
        <div className="buttons">
          <Button
            backgroundColor="black"
            text="Open Modal"
            onClick={() => this.handleOpenModalButton("modalOne")} 
          />
          <Button
            backgroundColor="black"
            text="Open Second"
            onClick={() => this.handleOpenModalButton("modalTwo")} 
          />
        </div>
        {this.state.isModalOpen && (
          <div
            className="modal-part"
            onClick={this.handleClosingOfModal}
          >
            <Modal
              details={modalInfo.find((info) => info.id === this.state.modalId)}
              closeModal={this.handleClosingOfModal}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
