
import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminAccess() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Admin Access</h2>

      <div className="grid grid-cols-2 gap-6">
 
        <div className="bg-blue-100 p-4 rounded shadow hover:shadow-md transition-all">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Books & Movies</h3>
          <ul className="list-disc pl-5 text-blue-600">
            <li><Link to="/admin/add-book">Add Book/Movie</Link></li>
            <li><Link to="/admin/update-book">Update Book/Movie</Link></li>
          </ul>
        </div>


        <div className="bg-green-100 p-4 rounded shadow hover:shadow-md transition-all">
          <h3 className="text-lg font-semibold text-green-700 mb-2">User Management</h3>
          <ul className="list-disc pl-5 text-green-600">
            <li><Link to="/admin/add-user">Add User</Link></li>
            <li><Link to="/admin/update-user">Update User</Link></li>
            <li><Link to="/admin/add-membership">Add Membership</Link></li>
            <li><Link to="/admin/update-membership">Update Membership</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
