import "./MobileMenu.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { CurrentPageContext } from "../../context/CurrentPageContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

//Icons
import NewsExplorerWhite from "../../images/NewsExplorer-White.svg";
import HomeWhite from "../../images/Home-White.svg";

const MobileMenu = ({ onSignIn, onClose, signedIn, isOpen }) => {
  return (
   <header className={`mobile__menu ${isOpen ? "mobile__menu_open" : ""}`} name="MobileMenu" title="MobileMenu">
      <div className="mobile__menu__header">
      <NavLink to="/">
        <img src={NewsExplorerWhite} alt="News Explorer" />
      </NavLink>
      </div>
     
      <nav>
        <ul className="mobile__menu__list">
          <li className="mobile__menu__list__home__link">
            <NavLink to="/" >
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
      </nav>
    </header>
    
  );
};

export default MobileMenu;
