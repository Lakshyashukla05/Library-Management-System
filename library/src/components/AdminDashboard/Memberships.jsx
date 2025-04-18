
import React, { useEffect, useState } from 'react';

export default function Memberships() {
  const [memberships, setMemberships] = useState([]);

  useEffect(() => {
  
    setMemberships([
      { id: 1, type: 'Student', duration: '1 Year', benefits: '5 books, 2 movies' },
      { id: 2, type: 'Faculty', duration: '2 Years', benefits: '10 books, 5 movies' },
      { id: 3, type: 'Public', duration: '6 Months', benefits: '3 books, 1 movie' },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Master List of Memberships</h2>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="text-left px-4 py-2">Type</th>
              <th className="text-left px-4 py-2">Duration</th>
              <th className="text-left px-4 py-2">Benefits</th>
            </tr>
          </thead>
          <tbody>
            {memberships.map((membership) => (
              <tr key={membership.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{membership.type}</td>
                <td className="px-4 py-2">{membership.duration}</td>
                <td className="px-4 py-2">{membership.benefits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
