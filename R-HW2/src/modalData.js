const modalInfo = [
  {
    id: "modalOne",
    header: "Confirmation Message",
    text: "Do you confirm adding this item to the basket?",
    renderButton: true,
    actions: (closeModal, handleContinueButtonClick) => (
      <>
        <button className="modal-action-buttons" onClick={closeModal}>Cancel</button>
        <button
          id="continueModalOne"
          className="modal-action-buttons"
          onClick={handleContinueButtonClick}
        >
          Continue
        </button>
      </>
    ),
  },
    //Add more Modal Data as needed with IDs to utilize them in necessary places
  ];
  
  export default modalInfo;