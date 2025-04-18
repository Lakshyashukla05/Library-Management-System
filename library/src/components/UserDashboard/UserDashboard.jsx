
import React from 'react';
import UserStats from './UserStats';
import Navbar from '../Navbar/Navbar'; 

function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <Navbar />

     
      <div className="p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to Your Dashboard</h2>

        
        <UserStats />

        
      </div>
    </div>
  );
}

export default UserDashboard;
