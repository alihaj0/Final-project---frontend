import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, ...props }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }
  return children ? children : <Outlet />;
}
export default ProtectedRoute;
