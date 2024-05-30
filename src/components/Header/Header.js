import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <p className="Header__title">News Explorer</p>
      <div className="Header__buttons">
        <button className="Home__button">Home</button>
        <button className="SignIn__button">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
