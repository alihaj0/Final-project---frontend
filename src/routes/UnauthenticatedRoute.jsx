import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const UnauthenticatedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/welcome" />; 
  }

  return children ? children : <Outlet />;
};

export default UnauthenticatedRoute;
