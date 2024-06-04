import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SignInModal = ({ onClose, openRegisterModal, isLoading, signInUser }) => {

    const [email, changeEmail ] = useState("");
    const handleEmailChange = (e) => {
        changeEmail(e.target.value);
    }

    const [password, changePassword] = useState("");
    const handlePasswordChange = (e) => {
        changePassword(e.target.value)
    }

    const onSignIn = (e) => {
        e.preventDefault();
        signInUser({ email, password })
    }
  return (
    <ModalWithForm
      title="Sign In"
      onClose={onClose}
      onSubmit={onSignIn}
      buttonText="Sign In"
      name="SignIn"
    >
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
            placeholder="Email"
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
            <input className="input"
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            minLength="1"
            maxLength="50"
            value={password}
            onChange={handlePasswordChange}
            requried
            
            required />
        </li>
      </ul>
      <div className="modal-form-buttons">
        <button className="modal-form-submit" type="submit">
            {isLoading ? "Signing In..." : "Sign In"}
        </button>
        <button className="modal__signin" type="button" onClick={openRegisterModal}>
            or Sing Up
        </button>
      </div>
    </ModalWithForm>
  );
};

export default SignInModal;
