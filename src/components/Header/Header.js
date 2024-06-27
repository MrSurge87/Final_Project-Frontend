import "./Header.css";
import MobileMenu from "../MobileMenu/MobileMenu";

//Import React-Router-Dom
import { Link } from "react-router-dom";

//Import Context
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { CurrentPageContext } from "../../context/CurrentPageContext";

// Import Logos
import NewsExplorerWhtie from "../../images/NewsExplorer-White.svg";
import NewsExplorerBlack from "../../images/NewsExplorer-Black.svg";
import SignOutWhite from "../../images/signout-white.svg";
import SignOutBlack from "../../images/signout-black.svg";
import HomeWhite from "../../images/Home-White.svg";
import Rectangle from "../../images/Rectangle.svg";
import SavedArticlesWhite from "../../images/Saved-Articles-White.svg";

const Header = ({ onSignIn, signedIn, onSignOut }) => {
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);

  return (
    <header className="Header">
      <Link to="/" className="Header__title">
        <img src={NewsExplorerWhtie} alt="Header Logo" />
      </Link>

      {signedIn ? (
        <div className="Header__buttons">
          <Link to="/profile" className="Home__button">
            <img src={HomeWhite} alt="home" />
            <div className="Home__button-border-bottom"></div>
          </Link>
          <Link to="/saved-news">
            <img src={SavedArticlesWhite} className="profile__savedArticles" />
          </Link>
          
          <div className="profile">
            <Link to="/profile" className="profile__logo">
              {/* <img src={ProfileLogoRectangleWhite} alt="profile logo" /> */}
              <img src={Rectangle} className="profile__rectangle" />
              <p className="profile__username">{currentUser.username}Sergio</p>
              <img src={SignOutWhite} alt="Sign Out Button" onClick={onSignOut} className="profile__signOut"/>
            </Link>
          </div>
        </div>
      ) : (
        <div className="Header__buttons">
          <Link to="/" className="Home__button">
            <img src={HomeWhite} alt="home" />
            <div className="Home__button-border-bottom"></div>
          </Link>
          
          <button className="SignIn__button" type="button" onClick={onSignIn}>
            Sign In
          </button>
          
        </div>
      )}
    </header>
  );
};

export default Header;
