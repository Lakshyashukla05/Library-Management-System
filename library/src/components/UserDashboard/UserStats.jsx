
import React from 'react';

function UserStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700">Total Borrowed Books</h3>
        <p className="text-2xl text-blue-600">12</p>
      </div>

      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700">Overdue Books</h3>
        <p className="text-2xl text-red-600">2</p>
      </div>

      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700">Membership Status</h3>
        <p className="text-2xl text-green-600">Active</p>
      </div>
    </div>
  );
}

export default UserStats;
