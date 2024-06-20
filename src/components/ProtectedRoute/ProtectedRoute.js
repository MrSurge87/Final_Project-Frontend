import React from "react";

import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ children, signedIn, ...props}) {
    return (
        <Route {...props}>{signedIn ? children : <Navigate to={"/"} />}</Route>
    );
}

export default ProtectedRoute;