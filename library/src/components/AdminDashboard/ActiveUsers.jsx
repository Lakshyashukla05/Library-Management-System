
import React, { useState, useEffect } from 'react';

export default function ActiveUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    setUsers([
      { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Student' },
      { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Faculty' },
      { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Student' },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Active Users</h2>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Email</th>
              <th className="text-left px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
