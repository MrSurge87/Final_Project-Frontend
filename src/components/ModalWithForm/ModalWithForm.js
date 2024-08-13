import "./ModalWithForm.css";
import "../../vendor/Fonts/FontFace.css";

const ModalWithForm = ({ children, title, onClose, name, onSubmit }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
      <button className="modal__close__button" type="button" onClick={onClose}></button>
        <h3 className="modalForm__title">{title}</h3>
        <form onSubmit={onSubmit} className="modalForm">
          {children}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
