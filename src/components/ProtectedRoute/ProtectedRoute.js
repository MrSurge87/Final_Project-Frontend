import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";

const ProtectedRoute = ({ children, ...props}) => {
    const { signedIn } = useContext(CurrentUserContext);
    return (
        <Route {...props}>{signedIn ? children : <Navigate to={"/"} />}</Route>
    );
}

export default ProtectedRoute;