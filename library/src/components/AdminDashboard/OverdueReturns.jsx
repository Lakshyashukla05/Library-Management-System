
import React, { useState, useEffect } from 'react';

export default function OverdueReturns() {
  const [overdueBooks, setOverdueBooks] = useState([]);

  useEffect(() => {
    
    setOverdueBooks([
      { id: 1, title: '1984', user: 'John Doe', dueDate: '2025-04-10', overdueDays: 5 },
      { id: 2, title: 'The Great Gatsby', user: 'Jane Smith', dueDate: '2025-04-12', overdueDays: 3 },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overdue Returns</h2>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="text-left px-4 py-2">Book Title</th>
              <th className="text-left px-4 py-2">User</th>
              <th className="text-left px-4 py-2">Due Date</th>
              <th className="text-left px-4 py-2">Overdue Days</th>
            </tr>
          </thead>
          <tbody>
            {overdueBooks.map((book) => (
              <tr key={book.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{book.title}</td>
                <td className="px-4 py-2">{book.user}</td>
                <td className="px-4 py-2">{book.dueDate}</td>
                <td className="px-4 py-2">{book.overdueDays}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
