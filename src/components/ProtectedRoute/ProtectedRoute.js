import { useContext } from "react";
import {  Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";

const ProtectedRoute = ({ children, ...props}) => {
    const { signedIn } = useContext(CurrentUserContext);
    return (
        signedIn ? children : <Navigate to={"/"} />
    );
}

export default ProtectedRoute;