import React from "react";
import { Route, RouteProps, Navigate } from "react-router-dom";

interface PublicRouteProps {
  element: React.ReactNode;
  isAuthenticated: boolean;
  redirectTo: string;
}

export const PublicRoute = ({
  element,
  isAuthenticated,
  redirectTo,
  ...rest
}: PublicRouteProps & RouteProps) => {
  return (
    <Route
      {...rest}
      element={
        !isAuthenticated ? element : <Navigate to={redirectTo} replace />
      }
    />
  );
};
