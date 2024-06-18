import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";

// CONTEXT IMPORTS

// REACT IMPORTS
import { useEffect, useState } from "react";

// UTILITY IMPORTS

// MODAL IMPORTS
import SignInModal from "./components/SignInModal/SignInModal";
import SignUpModal from "./components/SignUpModal/SignUpModal";


function App() {
  const [activeModal, setActiveModal] = useState("");

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
            openSignInModal={handleOpenSignInModal}
            openSignUpModal={handleOpenSignUpModal}
          />
        )}

        {activeModal === "SignUp" && (
          <SignUpModal
            onClose={handleCloseModal}
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
