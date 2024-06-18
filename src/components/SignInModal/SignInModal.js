import React, { useState } from "react";
import "./SignInModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SignInModal = ({ onClose, openSignUpModal, isLoading, signInUser }) => {
  const [email, changeEmail] = useState("");
  const handleEmailChange = (e) => {
    changeEmail(e.target.value);
  };

  const [password, changePassword] = useState("");
  const handlePasswordChange = (e) => {
    changePassword(e.target.value);
  };

  const onSignIn = (e) => {
    e.preventDefault();
    signInUser({ email, password });
  };
  return (
    <ModalWithForm
      name="SignIn"
      title="Sign In"
      onClose={onClose}
      onSubmit={onSignIn}
      buttonText="Sign In"
      className="signIn__Modal"
    >
      <form className="signIn__Form">
      <ul className="inputs">
        <label className="input-header" htmlFor="email">
          Email
        </label>
        <li>
          <input
            className="input"
            type="email"
            name="email"
            minLength="1"
            maxLength="50"
            placeholder="Enter Email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </li>
        <label className="input-header" htmlFor="password">
          Password
        </label>
        <li>
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Enter Password"
            id="password"
            minLength="1"
            maxLength="50"
            value={password}
            onChange={handlePasswordChange}
            requried
          />
        </li>
      </ul>
      <div className="modal-form-buttons">
        <button className="modal-form-submit" type="submit">
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
        <button
          className="modal__signUp"
          type="button"
          onClick={openSignUpModal}
        >
          or Sign Up
        </button>
      </div>
      </form>
    </ModalWithForm>
  );
};

export default SignInModal;
