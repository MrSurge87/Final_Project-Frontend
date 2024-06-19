import "./Header.css";

const Header = ({ onSignIn }) => {
  return (
    <header className="Header">
      <p className="Header__title">News Explorers</p>
      
      <div className="Header__buttons">
        <button className="Home__button" type="button" >Home</button>
        <button className="SignIn__button" type="button" onClick={onSignIn}>Sign In</button>
        <div className="Home__button-border-bottom"></div>
      </div>
      
      
      
    </header>
  );
};

export default Header;
