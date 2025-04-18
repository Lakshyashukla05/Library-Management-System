
import React, { useState, useEffect } from 'react';

export default function PendingRequests() {
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    
    setPendingRequests([
      { id: 1, title: '1984', user: 'John Doe', requestDate: '2025-04-14' },
      { id: 2, title: 'The Great Gatsby', user: 'Jane Smith', requestDate: '2025-04-15' },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pending Issue Requests</h2>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="text-left px-4 py-2">Book Title</th>
              <th className="text-left px-4 py-2">User</th>
              <th className="text-left px-4 py-2">Request Date</th>
            </tr>
          </thead>
          <tbody>
            {pendingRequests.map((request) => (
              <tr key={request.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{request.title}</td>
                <td className="px-4 py-2">{request.user}</td>
                <td className="px-4 py-2">{request.requestDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
