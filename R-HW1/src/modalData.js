const modalInfo = [
    {
      id: "modalOne",
      header: "Modal Header",
      text: "Modal text lorem",
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
      header: "Modal Header Two",
      text: "Modal text lorem Two",
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