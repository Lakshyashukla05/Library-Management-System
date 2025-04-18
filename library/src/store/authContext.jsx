import React, { createContext, useState } from 'react';


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (userData) => {
    
    setIsAuthenticated(true);
  };

  const logout = () => {
    
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return React.useContext(AuthContext);
};
