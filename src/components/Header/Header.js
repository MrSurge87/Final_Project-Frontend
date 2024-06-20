import "./Header.css";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import NewsExplorerWhtie from "../../images/NewsExplorer-White.svg";
import HomeWhite from "../../images/Home-White.svg";
import ProfileLogoRectangleWhite from "../../images/Profile-Logo-White.svg";

const Header = ({ onSignIn, signedIn }) => {
const currentUser = useContext(CurrentUserContext);

  return (
    <header className="Header">
      <Link to="/" className="Header__title">
      <img src={NewsExplorerWhtie} alt="Header Logo" />
      </Link>
     
      {signedIn  ? (
        <div className="Header__buttons">
        <Link to="/profile" className="Home__button">
        <img src={HomeWhite} alt="home" />
        </Link>
        <Link to="/profile">
        <img src={ProfileLogoRectangleWhite} alt="profile logo" className="SignIn__button"/>
        </Link>
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
