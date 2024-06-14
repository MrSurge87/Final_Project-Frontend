import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const SignUpModal = (onClose, openSignInModal, isLoading, SignUpUser) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [Username, setUsername] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onSignUp = (e) => {
    e.preventDefault();
    SignUpUser({ email, password, Username });
  };

  return (
    <ModalWithForm
      name="SignUp"
      title="Sign Up"
      onClose={onClose}
      buttonText="Sign Up"
      onSubmit={onSignUp}
    >
      <ul className="inputs">
        <label className="input-header" htmlFor="email">
          Email*
        </label>
        <li>
          <input
            id="email"
            className="input"
            type="email"
            name="email"
            placeholder="Enter Email"
            minLength="1"
            maxLength="50"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </li>

        <label className="input-header" htmlFor="password">
          Password
        </label>
        <li>
          <input
            id="password"
            className="input"
            type="password"
            name="password"
            placeholder="Enter Password"
            minLength="1"
            maxLength="50"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </li>

        <li>
          <label className="input-header" htmlFor="name">
            Username
          </label>
          <input
            id="name"
            className="input"
            tpye="text"
            name="name"
            placeholder="Etner Username"
            minLength="1"
            maxLength="50"
            required
            value={Username}
            onChange={handleUsernameChange}
          />
        </li>
      </ul>
      <div className="modal-form-buttons">
        <button className="modal-form-submit" type="submit">
          {isLoading ? "Submitting..." : "Sign Up"}
        </button>
        <button
          className="modal__login"
          type="button"
          onClick={openSignInModal}
        >
          Or Log In
        </button>
      </div>
    </ModalWithForm>
  );
};

export default SignUpModal;
