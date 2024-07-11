import "./Header.css";
import MobileMenu from "../MobileMenu/MobileMenu";

//Import React-Router-Dom
import { Link, useLocation } from "react-router-dom";

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
import HomeBlack from "../../images/Home-Black.svg";
import Rectangle from "../../images/Rectangle.svg";
import SavedArticlesWhite from "../../images/Saved-Articles-White.svg";
import SavedArticlesBlack from "../../images/Saved-Articles-Black.svg";

const Header = ({ onSignIn, signedIn, onSignOut }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const location = useLocation();
  const isSavedNewsHeader = location.pathname === "/saved-news";

  return (
    <header
      className={`Header ${
        isSavedNewsHeader ? "Header--saved" : "Header--main"
      }`}
    >
      <Link to="/" className="Header__title">
        <img
          src={isSavedNewsHeader ? NewsExplorerBlack : NewsExplorerWhtie}
          alt="News Explorer"
        />
      </Link>

      {signedIn ? (
        <div className="Header__buttons">
          <Link to="/" className="Home__button">
            <img src={isSavedNewsHeader ? HomeBlack : HomeWhite} alt="home" />
          </Link>
          <Link to="/saved-news">
            <img
              src={isSavedNewsHeader ? SavedArticlesBlack : SavedArticlesWhite}
              alt="Saved Articles Title"
              className="profile__savedArticles"
            />
          </Link>
          <div className="profile">
            <Link
              to="/saved-news"
              className={` ${
                isSavedNewsHeader ? "profile__logo-savedNews" : "profile__logo"
              }`}
            >
              <div className="profile__details">
                {isSavedNewsHeader ? (
                  <p className="profile__username-savedNews">
                    {currentUser.name}
                  </p>
                ) : (
                  <p className="profile__username">{currentUser.name}</p>
                )}

                <img
                  src={isSavedNewsHeader ? SignOutBlack : SignOutWhite}
                  alt="Sign Out Button"
                  onClick={onSignOut}
                  className="profile__signOut"
                />
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="Header__buttons">
          <div className="Home__button__sect">
            <div className="Home__button">
              <Link to="/">
                <img src={HomeWhite} alt="home" />
              </Link>
            </div>
          </div>
          <button className="SignIn__button" type="button" onClick={onSignIn}>
            Sign In
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
