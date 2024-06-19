import "./SuccessModal.css";
import "../ModalWithForm/ModalWithForm";

const SuccessModal = ({
    onClose, 
    onSubmit,
    handleSignInModal, 
    handleOverly,
}) => {
    return (
        <div className="success-modal" onClick={handleOverlay}>
        <div className="success-modal__container">
          <button
            type="button"
            onClick={onClose}
            className="success-modal__close-button"
          />
          <form className="success-modal__form" onSubmit={handleLoginModal}>
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
          </form>
        </div>
      </div>
    )
}