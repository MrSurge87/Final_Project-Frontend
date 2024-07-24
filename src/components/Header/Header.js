import "./Header.css";
import "../MobileMenu/MobileMenu.css";

//Import React-Router-Dom
import { NavLink, Link, useLocation } from "react-router-dom";

//Import Context
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { CurrentPageContext } from "../../context/CurrentPageContext";

// Import Logos
import NewsExplorerWhite from "../../images/NewsExplorer-White.svg";
import NewsExplorerBlack from "../../images/NewsExplorer-Black.svg";
import SignOutWhite from "../../images/signout-white.svg";
import SignOutBlack from "../../images/signout-black.svg";
import HomeWhite from "../../images/Home-White.svg";
import HomeBlack from "../../images/Home-Black.svg";
import SavedArticlesWhite from "../../images/Saved-Articles-White.svg";
import SavedArticlesBlack from "../../images/Saved-Articles-Black.svg";
import MobileMenu from "../../images/mobile-menu.svg";

const Header = ({ onSignIn, signedIn, onSignOut }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { currentPage } = useContext(CurrentPageContext);
  const location = useLocation();
  const isSavedNewsHeader = location.pathname === "/saved-news";

  return (
    <>
      <header
        className={`header__desktop ${
          isSavedNewsHeader ? "header--saved" : "header--main"
        }`}
      >
        <NavLink to="/" className="header__title">
          <img
            src={isSavedNewsHeader ? NewsExplorerBlack : NewsExplorerWhite}
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
                src={
                  isSavedNewsHeader ? SavedArticlesBlack : SavedArticlesWhite
                }
                alt="Saved Articles Title"
              />
            </NavLink>
            <div className="profile">
              <NavLink
                to="/saved-news"
                className={` ${
                  isSavedNewsHeader
                    ? "profile__logo-savedNews"
                    : "profile__logo"
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
          <nav to="/">
            <ul className="header__buttons">
              <li className="header__buttons_list">
                <img src={HomeWhite} alt="home" className="home__button" />
              </li>
              <li className="header__buttons_list">
                <button
                  className="signIn__button"
                  type="button"
                  onClick={onSignIn}
                >
                  Sign In
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <header
        className={`header__mobile ${
          isSavedNewsHeader ? "header--saved" : "header--main"
        }`}
      >
        <NavLink to="/" className="header__title">
          <img
            src={isSavedNewsHeader ? NewsExplorerBlack : NewsExplorerWhite}
            alt="News Explorer"
          />
        </NavLink>
        {signedIn ? (
          <div className="mobile">
            <div className="mobile__content">
              <nav className="mobile__links">
                <Link to="/" className="mobile__link">
                  Home
                </Link>
                <Link to="/saved-news" className="mobile__link">
                  Saved Articles
                </Link>
              </nav>
              <button className="mobile__button-signedIn" onClick={onSignOut}>
                <p className="mobile__username-signedIn">
                  {currentUser.username}
                </p>
                <img
                  src={SignOutWhite}
                  alt="signOut"
                  className="mobile__signOut"
                />
              </button>
            </div>
          </div>
        ) : signedIn && currentPage === "/saved-news" ? (
          <div className="mobile">
            <div className="mobile__content-savedNews">
              <nav className="mobile__links">
                <Link to="/" className="mobile__link-savedNews">
                  Home
                </Link>
                <Link to="/saved-news" className="mobile__link-savedNews">
                  Saved Articles
                </Link>
              </nav>
              <button className="mobile__button-savedNews" onClick={onSignOut}>
                <p className="mobile__username-savedNews">
                  {currentUser.username}
                </p>
                <img
                  src={SignOutBlack}
                  alt="signout"
                  className="mobile__signOut-savedNews"
                />
              </button>
            </div>
          </div>
        ) : (
          <nav>
            <div className="mobile__header">
              <div className="mobile__menu">
              <img src={MobileMenu} />
              </div>
            </div>
          </nav>
        )}
        ;
      </header>
    </>
  );
};

export default Header;
