
import React from 'react';

export default function Reports() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Reports</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">User Reports</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Total Active Users</li>
            <li>Membership Types</li>
            <li>User Login Activity</li>
          </ul>
        </div>

        <div className="bg-white rounded shadow p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Book Reports</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Most Issued Books</li>
            <li>Overdue Books</li>
            <li>Books by Category</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
