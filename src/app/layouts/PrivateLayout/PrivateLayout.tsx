import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ReactNode;
  isAuthenticated: boolean;
  redirectTo: string;
}

export const PrivateRoute = ({
  element,
  isAuthenticated,
  redirectTo,
  ...rest
}: PrivateRouteProps & RouteProps) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to={redirectTo} replace />}
    />
  );
};
