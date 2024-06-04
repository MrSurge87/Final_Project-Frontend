import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SignInModal = ({ onClose, openRegisterModal, isLoading }) => {
  return (
    <ModalWithForm
      title="Sign In"
      onClose={onClose}
      onSubmit={OnSignIn}
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
