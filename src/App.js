import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";

// CONTEXT IMPORTS
import { CurrentUserContext } from "./context/CurrentUserContext.js";

// REACT IMPORTS
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// UTILITY IMPORTS
import { checkToken, signUp } from "./utils/Auth.js";

// MODAL IMPORTS
import SignInModal from "./components/SignInModal/SignInModal";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import SuccessModal from "./components/SuccessModal/SuccessModal.js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.js";
import Profile from "./components/Profile/Profile.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("jwt") || "");
  const navigate = useNavigate("");
  const [signedIn, setSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleOpenSignInModal = () => {
    setActiveModal("SignIn");
  };

  const handleOpenSignUpModal = () => {
    setActiveModal("SignUp");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSuccessModal = () => {
    setActiveModal("successModal");
  };

  // Function To Register User
  const handleSignUpUser = (values) => {
    const makeRequest = () => {
      return signUp(values).then((user) => {
        if (user) {
          handleSuccessModal();
        }
      });
    };
    handleSubmit(makeRequest);
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscapeClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [activeModal]);

  function handleSubmit(request) {
    setIsLoading(true);
    request()
      .then(handleCloseModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  const signInUser = (user) => {
    setIsLoading(true);
    return signInUser(user)
      .then((res) => {
        checkSignedIn(res.token);
        setToken(res.token);
        localStorage.setItem("jwt", res.token);
        handleCloseModal();
        navigate.push("/profile");
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const signUpUser = (values) => {
    handleSubmit(() => signUp(values).then(() => signInUser(values)));
  };

  function checkSignedIn(token) {
    return checkToken(token)
      .then((res) => {
        setSignedIn(true);
        setCurrentUser(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="Search">
          <Header
            onSignIn={handleOpenSignInModal}
            onSignUp={handleOpenSignUpModal}
            onCreateModal={handleCreateModal}
            signUpUser={signUpUser}
          />

        
          {activeModal === "SignIn" && (
            <SignInModal
              onClose={handleCloseModal}
              signInUser={signInUser}
              openSignInModal={handleOpenSignInModal}
              openSignUpModal={handleOpenSignUpModal}
              isLoading={isLoading}
              signUpUser={signUpUser}
            />
          )}

          {activeModal === "SignUp" && (
            <SignUpModal
              onClose={handleCloseModal}
              signUpUser={signUpUser}
              handleSignUpUser={handleSignUpUser}
              onSubmit={handleOpenSignInModal}
            />
          )}
          {activeModal === "successModal" && (
            <SuccessModal
              isOpen={activeModal === "create"}
              onClose={handleCloseModal}
              onSubmit={handleOpenSignInModal}
            />
          )}

          <Search />
        </div>
        <Main />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
