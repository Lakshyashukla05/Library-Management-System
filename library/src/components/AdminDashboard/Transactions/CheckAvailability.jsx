
import React, { useState } from 'react';

export default function CheckAvailability() {
  const [bookTitle, setBookTitle] = useState('');
  const [availabilityStatus, setAvailabilityStatus] = useState(null);

  const handleCheckAvailability = () => {
    
    if (bookTitle === '1984') {
      setAvailabilityStatus('Available');
    } else if (bookTitle === 'The Great Gatsby') {
      setAvailabilityStatus('Not Available');
    } else {
      setAvailabilityStatus('Book not found');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Check Book Availability</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Enter Book Title</label>
          <input
            type="text"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={handleCheckAvailability}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Check Availability
        </button>

        {availabilityStatus && (
          <p className="mt-4 text-lg">
            <strong>Status: </strong>
            {availabilityStatus}
          </p>
        )}
      </div>
    </div>
  );
}
