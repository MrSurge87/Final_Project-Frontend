import "./SignUpModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const SignUpModal = ({ onClose, openSignInModal, isLoading, SignUpUser }) => {
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
      onSubmit={onSignUp}
      buttonText="Sign Up"
    >
      <ul className="inputs">
        <label className="input-header" htmlFor="email">
          Email
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
            type="text"
            name="name"
            placeholder="Enter Username"
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
          className="modal__signIn"
          type="button"
          onClick={openSignInModal}
        >
          Or Sign In
        </button>
      </div>
    </ModalWithForm>
  );
};

export default SignUpModal;
