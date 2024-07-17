import "./Header.css";
import MobileMenu from "../MobileMenu/MobileMenu";

//Import React-Router-Dom
import { NavLink,Link, useLocation } from "react-router-dom";

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
      className={`header ${
        isSavedNewsHeader ? "header--saved" : "header--main"
      }`}
    >
      <NavLink to="/" className="header__title">
        <img
          src={isSavedNewsHeader ? NewsExplorerBlack : NewsExplorerWhtie}
          alt="News Explorer"
        />
      </NavLink>

      {signedIn ? (
        <div className="header__buttons">
          <NavLink to="/" className="home__button">
            <img src={isSavedNewsHeader ? HomeBlack : HomeWhite} alt="home" />
          </NavLink>
          <NavLink to="/saved-news" className="profile__savedArticles">
            <img
              src={isSavedNewsHeader ? SavedArticlesBlack : SavedArticlesWhite}
              alt="Saved Articles Title"
            />
          </NavLink>
          <div className="profile">
            <NavLink
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
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="header__buttons">
          <div className="home__button__sect">
            <div className="home__button">
              <NavLink to="/">
                <img src={HomeWhite} alt="home" />
              </NavLink>
            </div>
          </div>
          <button className="signIn__button" type="button" onClick={onSignIn}>
            Sign In
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
