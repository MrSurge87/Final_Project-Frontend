import "./SuccessModal.css";
import "../ModalWithForm/ModalWithForm";

const SuccessModal = ({
  onClose,
  onSubmit,
  handleSignInModal,
  handleOverlay,
  isOpen,
}) => {
  return (
    <div
      className={`successModal ${isOpen ? "successModal_visible" : ""}`}
      onClick={handleOverlay}
    >
      <div className="successModal__container">
        <button
          type="button"
          onClick={onClose}
          className="successModal__close-button"
        />
        <div className="successModal__form" onSubmit={handleSignInModal}>
          <h3 className="succesModal__title">
            Registration successfully completed!
          </h3>

          <button
            className="succesModal__alt-button"
            type="button"
            onClick={onSubmit}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
