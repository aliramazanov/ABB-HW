import React from "react";

class Modal extends React.Component {
  render() {
    return (
      <div
        className="modal-wrapper"
        //added this to stop closing of modal window when clicked inside the modal content
        onClick={(event) => event.stopPropagation()}
        //--------------------------------------------------------------------------------
      >
        <div className="header-part-modal">
          <div className="header-of-modal">{this.props.header}</div>
          <div className="header-close-button">{this.props.close}</div>
        </div>
        <div className="modal-content">
          <div className="text-of-modal">{this.props.text}</div>
          <div className="actions-of-modal">{this.props.actions}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
