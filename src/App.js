import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import SignInModal from "./components/SignInModal/SignInModal";

//React Imports
import { useEffect, useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleCreateModal = () => {
    setActiveModal("create");
  }
  const handleOpenSignInModal = () => {
    setActiveModal("SignIn");
  };

  const handleOpenRegisterModal = () => {
    setActiveModal("register");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div className="App">
      <div className="Search">
        <Header
          onSignIn={handleOpenSignInModal}
          onRegister={handleOpenRegisterModal}
          onCreateModal={handleCreateModal}
        />
        {activeModal === "SignIn" && (
          <SignInModal
            onClose={handleCloseModal}
            openSignInModal={handleOpenSignInModal}
            openRegisterModal={handleOpenRegisterModal}
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
