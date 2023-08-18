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
      currentModalData: null,
    };
  }

  handleOpenModalButton = (modalId) => {
    const modalData = this.findModalDataById(modalId);
    this.setState({ isModalOpen: true, currentModalData: modalData });
  };

  handleClosingOfModal = () => {
    this.setState({ isModalOpen: false, currentModalData: null });
  };

  findModalDataById = (modalId) => {
    return modalInfo.find((info) => info.id === modalId);
  };

  render() {
    return (
      <div className="app">
        <div className="buttons">
          <Button
            backgroundColor="black"
            text="Open First"
            onClick={() => this.handleOpenModalButton("modalOne")}
          />
          <Button
            backgroundColor="black"
            text="Open Second"
            onClick={() => this.handleOpenModalButton("modalTwo")}
          />
        </div>
        {this.state.isModalOpen && (
          <Modal
            details={this.state.currentModalData}
            closeModal={this.handleClosingOfModal}
          />
        )}
      </div>
    );
  }
}

export default App;
