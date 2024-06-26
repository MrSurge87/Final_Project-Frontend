import "./Header.css";
import MobileMenu from "../MobileMenu/MobileMenu";

//Import React-Router-Dom
import {Link} from "react-router-dom";

//Import Context
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { CurrentPageContext } from "../../context/CurrentPageContext";
import { MobileContext } from "../../context/MobileContext";

// Import Logos
import NewsExplorerWhtie from "../../images/NewsExplorer-White.svg";
import NewsExplorerBlack from "../../images/NewsExplorer-Black.svg";
import SignOutWhite from "../../images/signout-white.svg";
import SignOutBlack from "../../images/signout-black.svg";
import HomeWhite from "../../images/Home-White.svg";
import ProfileLogoRectangleWhite from "../../images/Profile-Logo-White.svg";


const Header = ({ onSignIn, signedIn }) => {
  // const { currentPage, activeModal } = useContext(CurrentPageContext);
  // const { currentUser, isSignedIn } = useContext(CurrentUserContext);
  // const { mobileMenuOpen, openMobileMenu, closeMobileMenu } = useContext(MobileContext);



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
        <img src={SignOutWhite} alt="signOutWhite" />
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
