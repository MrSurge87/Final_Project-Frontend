import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="Search">
      <Header />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
