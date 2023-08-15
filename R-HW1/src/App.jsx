import React from "react";
import "./App.scss";
import Button from "./Components/Button";
import Modal from "./Components/Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  handleOpenModalButton = () => {
    this.setState({ isModalOpen: true });
  };

  handleClosingOfModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div className="app">
        <div className="buttons">
          <Button
            backgroundColor="black"
            text="First Button"
            onClick={this.handleOpenModalButton}
          />
          <Button
            backgroundColor="black"
            text="Second Button"
            onClick={this.handleOpenModalButton}
          />
        </div>
        {this.state.isModalOpen && (
          <div className="modal-part" onClick={this.handleClosingOfModal}>
            <Modal
              header={<h1>Header of Modal</h1>}
              close={
                <button
                  className="modal-close-button"
                  onClick={this.handleClosingOfModal}
                >
                  X
                </button>
              }
              text={
                <span className="modal-span">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis magnam facere fugit deleniti adipisci amet, illo
                  ullam doloribus incidunt est!
                </span>
              }
              actions={
                <div className="actions">
                  <button
                    className="modal-action-buttons"
                    onClick={this.handleClosingOfModal}
                  >
                    Cancel
                  </button>
                  <button id="continue" className="modal-action-buttons">
                    Continue
                  </button>
                </div>
              }
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
