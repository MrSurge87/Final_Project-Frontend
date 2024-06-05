import "./ModalWithForm.css";

const ModalWithForm = ({ children, title, onClose, name, onSubmit }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
      <button className="close__button" type="button" onClick={onClose}></button>
        <h3 className="modal-form-title">{title}</h3>
        <form onSubmit={onSubmit} className="modal-form">
          {children}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
