const modalInfo = [
    {
      id: "modalOne",
      header: "Add to the Basket?",
      text: "Do you confirm?",
      renderButton: true,
      actions: (closeModal) => (
        <>
          <button className="modal-action-buttons" onClick={closeModal}>Cancel</button>
          <button id="continue" className="modal-action-buttons" >
            Continue
          </button>
        </>
      ),
    },
    {
      id: "modalTwo",
      header: "Add to the Favourites",
      text: "Are you sure?",
      renderButton: true,
      actions: (closeModal) => (
        <>
          <button className="modal-action-buttons" onClick={closeModal}>No</button>
          <button id="continue" className="modal-action-buttons" >
            Yes
          </button>
        </>
      ),
    },
  ];
  
  export default modalInfo;