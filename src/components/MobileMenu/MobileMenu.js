import "./MobileMenu.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { CurrentPageContext } from "../../context/CurrentPageContext";

import signOutWhite from "../../images/signout-white.svg";
import signOutBlack from "../../images/signout-black.svg";

const MobileMenu =({ onSignIn, onSignOut, signedIn }) => {
    const { signedIn, currentUser } = useContext(CurrentUserContext);
    const { currentPage } = useContext(CurrentPageContext);

    return  (
       
    ); 
};

export default MobileMenu;