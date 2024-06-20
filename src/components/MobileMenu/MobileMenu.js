import "./MobileMenu.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { CurrentPageContext } from "../../context/CurrentPageContext";

import signOutWhite from "../../images/signout-white.svg";
import signOutBlack from "../../images/signout-black.svg";

const MobileMenu =({ onSignIn, onSignOut }) => {
    const { isSignedIn, currentUser } = useContext(CurrentUserContext);
    const { currentPage } = useContext{CurrentPageContext};

    return isSignedIn && currentPage === "/" ? (
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
                    <p className="mobile__username-signedIn">{currentUser.name}</p>
                    <img src={signOutWhite} alt="signOut" className="mobile__signOut"/>
                </button>
            </div>
        </div>
    ) : isSignedIn && currentPage === "/saved-news" ? (
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
                    <p className="mobile__username-savedNews">{currentUser.name}</p>
                    <img src={signOutBlack} alt="signout" className="mobile__signOut-savedNews" />
                </button>
            </div>
        </div>
    ) : (
        <div className="mobile">
            <div className="mobile__content">
                <nav className="mobile__links">
                    <Link to="/" className="mobile__link" activeClassName="mobile__link-active">
                    Home
                    </Link>
                </nav>
                <button className="mobile__button" onClick={onSignIn}>
                    Sign In
                </button>
            </div>
        </div>
    ); 
};

export default MobileMenu;