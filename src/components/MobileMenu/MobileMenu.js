import "./MobileMenu.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { CurrentPageContext } from "../../context/CurrentPageContext";
import NewsExplorerWhite from "../../images/NewsExplorer-White.svg";

const MobileMenu = ({ onSignIn, signedIn }) => {
  return (
    <header className="mobile__menu__header" name="mobileMenu">
      <NavLink to="/">
        <img src={NewsExplorerWhite} alt="News Explorer" />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/" >
            <button
              className="signIn__button__mobile"
              type="button"
              onClick={onSignIn}
            >
              Sign In
            </button>
            </NavLink>
           
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MobileMenu;
