// import "./SignUpModal.css";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import { useState } from "react";
// import { useNavgate } from "react-router-dom";

// const SignUpModal = ({ onClose, SignUpUser, openSignInModal, isLoading,  }) => {

//   const [email, setEmail] = useState("");
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const [password, setPassword] = useState("");
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const [Username, setUsername] = useState("");
//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const onSignUp = (e) => {
//     e.preventDefault();
//     SignUpUser({ email, password, Username });
//   };

//   return (
//     <ModalWithForm
//       name="SignUp"
//       title="Sign Up"
//       onClose={onClose}
//       onSubmit={onSignUp}
//       buttonText="Sign Up"
//       className="signUp__Modal"
//     >
//       <form className="signUp__Form">
//       <ul className="inputs">
//         <label className="input-header" htmlFor="email">
//           Email
//         </label>
//         <li>
//           <input
//             id="email"
//             className="input"
//             type="email"
//             name="email"
//             placeholder="Enter Email"
//             minLength="1"
//             maxLength="50"
//             required
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </li>

//         <label className="input-header" htmlFor="password">
//           Password
//         </label>
//         <li>
//           <input
//             id="password"
//             className="input"
//             type="password"
//             name="password"
//             placeholder="Enter Password"
//             minLength="1"
//             maxLength="50"
//             required
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </li>

//         <li>
//           <label className="input-header" htmlFor="name">
//             Username
//           </label>
//           <input
//             id="name"
//             className="input"
//             type="text"
//             name="name"
//             placeholder="Enter Username"
//             minLength="1"
//             maxLength="50"
//             required
//             value={Username}
//             onChange={handleUsernameChange}
//           />
//         </li>
//       </ul>
//       <div className="modal-form-buttons">
//         <button className="modal-form-submit" type="submit">
//           {isLoading ? "Submitting..." : "Sign Up"}
//         </button>
//         <button
//           className="modal__signIn"
//           type="button"
//           onClick={openSignInModal}
//         >
//           Or Sign In
//         </button>
//       </div>
//       </form>
//     </ModalWithForm>
//   );
// };

// export default SignUpModal;

import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SignUpModal.css";

const SignUpModal = ({ onClose, signUpUser, openSignInModal, isLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

    const onSignUp = (e) => {
    e.preventDefault();
    signUpUser({ email, password, username });
  };

  return (
    <ModalWithForm
      name="SignUp"
      title="Sign Up"
      onClose={onClose}
      onSubmit={onSignUp}
      buttonText="Sign Up"
      className="signup__Modal"
    >
      <div className="signup__Form">
        <ul className="inputs">
          <li>
            <label className="input-header" htmlFor="email">Email</label>
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
          <li>
            <label className="input-header" htmlFor="password">Password</label>
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
            <label className="input-header" htmlFor="name">Username</label>
            <input
              id="name"
              className="input"
              type="text"
              name="name"
              placeholder="Enter Username"
              minLength="1"
              maxLength="50"
              required
              value={username}
              onChange={handleUsernameChange}
            />
          </li>
        </ul>
        <div className="modal-form-buttons">
          <button className="modal-form-submit" type="submit" onClick={signUpUser}>
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
      </div>
    </ModalWithForm>
  );
};

export default SignUpModal;