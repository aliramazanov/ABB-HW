import React from "react";

class Modal extends React.Component {
  render() {
    const { header, text, actions, renderButton } = this.props.details;
    const { closeModal } = this.props;

    return (
      <div className="modal-part" onClick={closeModal}>
        <div
          className="modal-wrapper"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="header-part-modal">
            <div className="header-of-modal">{header}</div>
            <div className="header-close-button">
              {renderButton && (
                <button className="modal-close-button" onClick={closeModal}>
                  {" "}
                  X{" "}
                </button>
              )}
            </div>
          </div>
          <div className="modal-content">
            <div className="text-of-modal">{text}</div>
            <div className="actions-of-modal">{actions(closeModal)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
