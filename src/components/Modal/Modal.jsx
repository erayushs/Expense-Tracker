import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalWrapper = ({ isOpen, setIsOpen, children }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  const styles = {
    content: {
      width: "95%",
      maxWidth: "560px",
      top: "42%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      height: "fit-content",
      maxHeight: "90vh",
      background: "#efefef",
      border: "0",
      borderRadius: "15px",
      padding: "2rem",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose} style={styles}>
      {children}
    </Modal>
  );
};

export default ModalWrapper;
