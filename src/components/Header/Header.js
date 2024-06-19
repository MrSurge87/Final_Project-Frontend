import "./Header.css";
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
    
  );
};

export default Header;
