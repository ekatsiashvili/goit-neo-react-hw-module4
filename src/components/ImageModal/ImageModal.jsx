import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "lightgray",
  },
};

Modal.setAppElement("#root");

function ImageModal({ modalIsOpen, closeModal, selectedPhoto }) {
  if (!modalIsOpen) return;
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Photo Modal"
      >
        <button onClick={closeModal}>Close</button>
        <div>
          <img
            src={selectedPhoto.urls.regular}
            alt={selectedPhoto.alt_description}
          />
          <p>
            <span style={{ fontWeight: "bold" }}>Description: </span>
            <span style={{ textTransform: "capitalize" }}>
              {selectedPhoto.alt_description || "No description available"}
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Photo was made in:</span>{" "}
            {selectedPhoto.user.location || "No information"}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Total likes: </span>
            {selectedPhoto.user.total_likes || "No information"}
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default ImageModal;
