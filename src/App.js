import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <div className="Search">
      <Header />
      <Search />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
