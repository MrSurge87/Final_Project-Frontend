import "./Header.css";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import NewsExplorerWhtie from "../../images/NewsExplorer-White.svg";
import HomeWhite from "../../images/Home-White.svg";
import ProfileLogoRectangleWhite from "../../images/Profile-Logo-White.svg";

import signOutWhite from "../../images/signout-white.svg";

const Header = ({ onSignIn, signedIn }) => {
//const {currentUser, isSignedIn} = useContext(CurrentUserContext);
//console.log(currentUser);

  
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
        <p>Sergio</p>
        <img src={signOutWhite} alt="signOutWhite" />
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
