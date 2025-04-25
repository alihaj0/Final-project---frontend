// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const login = (token, email) => {
    localStorage.setItem('token', token);
    setUserEmail(email);
    setIsAuthenticated(true);
    console.log('User email set:', email); // Debugging line
    navigate('/welcome'); // Redirect after login
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUserEmail('');
    setIsAuthenticated(false);
    navigate('/signin'); // Redirect after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userEmail }}>
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  return useContext(AuthContext);
}
