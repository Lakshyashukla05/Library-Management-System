import React, { useState } from 'react';

function IssueBook() {
  const [bookId, setBookId] = useState('');
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const issueBook = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/issue-book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bookId, userId })
    });

    const data = await response.json();

    if (data.success) {
      setMessage('Book issued successfully');
    } else {
      setMessage('Failed to issue book');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Issue a Book</h2>

      <form onSubmit={issueBook}>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Book ID</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={bookId}
              onChange={(e) => setBookId(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">User ID</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
            >
              Issue Book
            </button>
          </div>

          {message && <p className="mt-4 text-center text-lg text-green-500">{message}</p>}
        </div>
      </form>
    </div>
  );
}

export default IssueBook;
