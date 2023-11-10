// PrivateRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
