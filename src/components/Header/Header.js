import "./Header.css";
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
      
      
 <div className="Header__buttons">
 <button className="Home__button" type="button" >Home</button>
 <button className="SignIn__button" type="button" onClick={onSignIn}>Sign In</button>
 <div className="Home__button-border-bottom"></div>
</div>
      
     
      
      
      
    </header>
  );
};

export default Header;
