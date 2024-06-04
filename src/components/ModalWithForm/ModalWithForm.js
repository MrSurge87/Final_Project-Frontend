import "./ModalWithForm.css";

const ModalWithForm = ({ children, title, onClose, name, onSubmit }) => {
  return (
    <div ckassName={`modal modal_type_${name}`}>
      <div className="modal__content">
        <h3 className="add__garment-header">
          {title}
          <button classname="close" type="button" onClick={onClose}></button>
        </h3>
        <form onSubmit={onSubmit} className="modal-form">
          {children}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
