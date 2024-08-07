import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignInModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SignInModal = ({ onClose, openSignUpModal, isLoading, signInUser }) => {
  
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");

  const handleEmailChange = (e) => {
    changeEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    changePassword(e.target.value);
  };

  const fieldsFilledIn = () => {
    return email.trim() !== "" && password.trim() !== "";
  };

  const onSignIn = (e) => {
    e.preventDefault();
    if (fieldsFilledIn()) {
      signInUser({ email, password });
    }
  };

  const allFieldsFilledIn = fieldsFilledIn();

  return (
    <ModalWithForm
      name="SignIn"
      title="Sign In"
      onClose={onClose}
      onSubmit={onSignIn}
      buttonText="Sign In"
      className="signIn__Modal"
    >
<<<<<<< HEAD
      <form className="signIn__Form">
=======
      <div className="signIn__Form">
>>>>>>> 00579ad6e93d6dc635f6883e60131bdce6620f9d
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
<<<<<<< HEAD
              requried
=======
              required
>>>>>>> 00579ad6e93d6dc635f6883e60131bdce6620f9d
            />
          </li>
        </ul>
        <div className="modal-form-buttons">
<<<<<<< HEAD
          <button className="modal-form-submit" type="submit">
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
=======
         
          <button
            className="modal-form-submit"
            type="submit"
            style={{
              backgroundColor: allFieldsFilledIn
                ? "rgba(47,113,229,1)"
                : "rgba(230,232,252,1",
            }}
            disabled={!allFieldsFilledIn}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
          
>>>>>>> 00579ad6e93d6dc635f6883e60131bdce6620f9d
          <button
            className="modal__signUp"
            type="button"
            onClick={openSignUpModal}
          >
            or Sign Up
          </button>
<<<<<<< HEAD
        </div>
      </form>
=======
          
        </div>
      </div>
>>>>>>> 00579ad6e93d6dc635f6883e60131bdce6620f9d
    </ModalWithForm>
  );
};

export default SignInModal;
