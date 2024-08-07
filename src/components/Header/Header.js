import "./Header.css";
<<<<<<< HEAD
<<<<<<< HEAD
import NewsExplorerWhite from "../../images/NewsExplorer-White.svg";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({ onSignIn, signedIn }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="Header">
      <div>
        <NavLink to="/" className="Header__title">
          <img src={ NewsExplorerWhite } alt="logo" />
        </NavLink>
        
      </div>
=======
import { NavLink } from "react-router-dom";
import logoutWhite from "../../images/logout-white.svg";
import logoutBlack from "../../images/logout-black.svg";
import { CurrentPageContext } from "../../context/CurrentPageContext";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useContext } from "react";

const Header = ({ onSignIn, onSignOut }) => {

  const { currentPage, activeModal } = useContext(CurrentPageContext);
  const { currentUser, isSignedIn } = useContext(CurrentUserContext);

  
  return isSignedIn && currenPage ==="/" ? (
    <header className="Header">
      <NavLink to="/" className="Header__title" type="text" activeClassName="Header__title-active">
      News Explorer
      </NavLink>
      <NavLink to="saved-news" className="saved-articles__button">
        Saved Articles
      </NavLink>
      <button className="Header__button-signedIn" type="text" onClick={onSignOut}>
        <p className="Header__username">{ currentUser.name }</p>
        <img src={ logoutWhite } alt="logout white" className="Header__logout"/>
      </button>
        
        <button className="Home__button" type="button" >Home</button>
        
        <button className="SignIn__button" type="button" onClick={onSignIn}>Sign In</button>
        <div className="Home__button-border-bottom"></div>
      
>>>>>>> a5e8fea308325a92628558749c68ba5b4c88b314
      
      
 <div className="Header__buttons">
 <button className="Home__button" type="button" >Home</button>
 <button className="SignIn__button" type="button" onClick={onSignIn}>Sign In</button>
 <div className="Home__button-border-bottom"></div>
</div>
      
     
      
      
      
    </header>
    
=======
import "../MobileMenu/MobileMenu.css";
import MobileMenu from "../MobileMenu/MobileMenu";

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
import MobileMenuWhite from "../../images/MobileMenuWhite.svg";
import MobileMenuBlack from "../../images/MobileMebuBlack.svg";
import Close from "../../images/close-small.svg";

const Header = ({
  onSignIn,
  signedIn,
  onSignOut,
  handleOpenMobileMenu,
  onClose,
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

        {signedIn ? (
          <div className="mobile">
            <div className="mobile__content">
              <nav>
                <div className="mobile__header">
                  <div className="mobile__menu">
                    <img src={MobileMenuBlack} onClick={handleOpenMobileMenu} />
                  </div>
                </div>
              </nav>
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
                {/* <nav>
                  <img
                    src={MobileMenuWhite}
                    className="mobile__menu_icon"
                    onClick={handleOpenMobileMenu}
                    
                    alt="Mobile Menu"
                  />
                  <ul className="mobile__menu__list">
                    <li className="mobile__menu__list__home__link">
                      <NavLink to="/">
                        <img src={HomeWhite} alt="Home" />
                      </NavLink>
                    </li>

                    <li className="mobile__menu__list__signIn">
                      <button
                        type="button"
                        onClick={onSignIn}
                        className="mobile__menu__list__signIn__button"
                      >
                        Sign In
                      </button>
                    </li>
                  </ul>
                </nav> */}
              </div>
            </div>
            <img
              src={MobileMenuWhite}
              className="mobile__menu_icon"
              onClick={handleOpenMobileMenu}
              alt="Mobile Menu"
            />
            {/* <img
              src={Close}
              alt="close"
              className="close__button_mobile"
              onClick={onClose}
            /> */}
          </nav>
        )}
      </header>
    </>
>>>>>>> 00579ad6e93d6dc635f6883e60131bdce6620f9d
  );
};

export default Header;
