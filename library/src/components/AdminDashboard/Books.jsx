
import React, { useState, useEffect } from 'react';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    setBooks([
      { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', available: true },
      { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian', available: false },
      { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', available: true },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Master List of Books</h2>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="text-left px-4 py-2">Title</th>
              <th className="text-left px-4 py-2">Author</th>
              <th className="text-left px-4 py-2">Genre</th>
              <th className="text-left px-4 py-2">Available</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{book.title}</td>
                <td className="px-4 py-2">{book.author}</td>
                <td className="px-4 py-2">{book.genre}</td>
                <td className="px-4 py-2">
                  <span className={book.available ? 'text-green-600' : 'text-red-600'}>
                    {book.available ? 'Yes' : 'No'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
