import "./Header.css";
import {Link} from "react-router-dom";
import NewsExplorerWhtie from "../../images/NewsExplorer-White.svg";
import HomeWhite from "../../images/Home-White.svg";

const Header = ({ onSignIn, signedIn }) => {
  return (
    <header className="Header">
      <Link to="/" className="Header__title">
      <img src={NewsExplorerWhtie} alt="logo" />
      </Link>
     
      {signedIn  ? (
        <div className="Header__buttons">
        <Link to="/profile" className="Home__button">
        <img src={HomeWhite} alt="home" />
        </Link>
        <button className="SignIn__button" type="button" onClick={onSignIn}>Sign In</button>
        <div className="Home__button-border-bottom"></div>
      </div>
      ): (
        <div className="Header__buttons">
        <Link to="/" className="Home__button">
        <img src={HomeWhite} alt="home" />
        </Link>
        <button className="SignIn__button" type="button" onClick={onSignIn}>Sign In</button>
        <div className="Home__button-border-bottom"></div>
      </div>
      )}
    </header>
  );
};

export default Header;
