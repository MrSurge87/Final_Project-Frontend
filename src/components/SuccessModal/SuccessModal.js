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
      className={`success-modal ${isOpen ? "success-modal_visible" : ""}`}
      onClick={handleOverlay}
    >
      <div className="success-modal__container">
        <button
          type="button"
          onClick={onClose}
          className="success-modal__close-button"
        />
        <div className="success-modal__form" onSubmit={handleSignInModal}>
          <h3 className="success-modal__title">
            Registration successfully completed!
          </h3>

          <button
            className="success-modal__alt-button"
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
