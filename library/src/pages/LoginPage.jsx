

import React, { useState } from 'react';
import LoginForm from '../components/Login/LoginForm'; 
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); 

  const handleLogin = (userData) => {
    
    const adminCredentials = { userId: 'adm', password: 'adm' };
    const userCredentials = { userIdw: 'user', password: 'user' };

    
    if (userData.email === adminCredentials.email && userData.password === adminCredentials.password) {
      
      setIsAuthenticated(true);
      navigate('/admin-dashboard'); 
    } else if (userData.email === userCredentials.email && userData.password === userCredentials.password) {
      
      setIsAuthenticated(true);
      navigate('/user-dashboard'); 
    } else {
      
      alert('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm">
        <h2 className="text-center text-2xl font-semibold mb-6">Login</h2>
        <LoginForm onSubmit={handleLogin} /> 
      </div>
    </div>
  );
}

export default LoginPage;
