import "./Header.css";
import "../MobileMenu/MobileMenu.css";
// import MobileMenu from "../MobileMenu/MobileMenu";

//Import React-Router-Dom
import { NavLink, useLocation } from "react-router-dom";

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
import MobileMenuWhite from "../../images/MobileMenuWhite.svg";
import MobileMenuBlack from "../../images/MobileMebuBlack.svg";
import Close from "../../images/close-small.svg";

const Header = ({
  onSignIn,
  signedIn,
  onSignOut,
  handleOpenMobileMenu,
  onClose,
  isMobileMenuOpen
}) => {
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

        {signedIn && currentPage === "/" ? (
          <div className="header__buttons">
            <NavLink to="/" className="home__button">
              <img src={isSavedNewsHeader ? HomeBlack : HomeWhite} alt="home" />
            </NavLink>
            <NavLink
              to="/saved-news"
              className="profile__savedArticles"
              style={({ isActive, isPending }) => {
                return {
                  borderBottom: isActive ? "none" : "",
                };
              }}
            >
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
        ) : currentPage === "/saved-news" ? (
          <div className="header__buttons">
            <NavLink to="/" className="home__button">
              <img src={isSavedNewsHeader ? HomeBlack : HomeWhite} alt="home" />
            </NavLink>
            <NavLink
              to="/saved-news"
              className="profile__savedArticles"
              style={({ isActive, isPending }) => {
                return {
                  borderBottom: isActive ? "1px solid rgba(26,27,34,1)" : "",
                  borderWidth: isActive ? "medium" : "",
                };
              }}
            >
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

      {/* HEADER MOBILE */}
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
        <img src={isSavedNewsHeader ? MobileMenuBlack : ""}  onClick={handleOpenMobileMenu} />

        {signedIn && currentPage === "/saved-news" ? (
          <div className="mobile">
          <div className="mobile__content">
            <nav>
              <div className="mobile__header">
                <div className="mobile__menu">
                </div>
              </div>
            </nav>
          </div>
        </div>
        ) : (
          <nav></nav>

        )}
          <button onClick={handleOpenMobileMenu} className="mobile__menu__button">
            <img src={isMobileMenuOpen ? Close :  MobileMenuWhite} alt="close" className="close__button_mobile" />
            </button> 


      </header>
    </>
  );
};

export default Header;