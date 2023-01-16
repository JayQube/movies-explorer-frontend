import React from "react";
import { LoggedInContext } from "../../contexts/LoggedInContext";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const loggedIn = React.useContext(LoggedInContext);

  return (
    <Route>
      {() =>
        loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedRoute;