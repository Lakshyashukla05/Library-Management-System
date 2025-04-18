

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        
        <div className="text-lg font-semibold">
          <Link to="/" className="text-white hover:text-gray-400">
            Library System
          </Link>
        </div>

       
        <div className="space-x-4">
          <Link
            to="/login"
            className="hover:bg-gray-700 p-2 rounded transition-colors duration-200"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
