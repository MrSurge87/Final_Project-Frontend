import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";

// CONTEXT IMPORTS

// REACT IMPORTS
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// UTILITY IMPORTS
import { checkToken, signUp } from "./utils/Auth.js";

// MODAL IMPORTS
import SignInModal from "./components/SignInModal/SignInModal";
import SignUpModal from "./components/SignUpModal/SignUpModal";


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
    <div className="App">
      <div className="Search">
        <Header
          onSignIn={handleOpenSignInModal}
          onSignUp={handleOpenSignUpModal}
          onCreateModal={handleCreateModal}
        />
        {activeModal === "SignIn" && (
          <SignInModal
            onClose={handleCloseModal}
            signInUser={signInUser}
            openSignInModal={handleOpenSignInModal}
            openSignUpModal={handleOpenSignUpModal}
          />
        )}

        {activeModal === "SignUp" && (
          <SignUpModal
            onClose={handleCloseModal}
            signUpUser={signUpUser}
            openSignUpModal={handleOpenSignUpModal}
            openSignInModal={handleOpenSignInModal}
          />
        )}
        <Search />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
