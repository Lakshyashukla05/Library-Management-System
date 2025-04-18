
import React, { useState, useEffect } from 'react';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    setMovies([
      { id: 1, title: 'Inception', director: 'Christopher Nolan', genre: 'Sci-Fi', available: true },
      { id: 2, title: 'The Matrix', director: 'Lana Wachowski', genre: 'Action', available: false },
      { id: 3, title: 'Interstellar', director: 'Christopher Nolan', genre: 'Adventure', available: true },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Master List of Movies</h2>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="text-left px-4 py-2">Title</th>
              <th className="text-left px-4 py-2">Director</th>
              <th className="text-left px-4 py-2">Genre</th>
              <th className="text-left px-4 py-2">Available</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{movie.title}</td>
                <td className="px-4 py-2">{movie.director}</td>
                <td className="px-4 py-2">{movie.genre}</td>
                <td className="px-4 py-2">
                  <span className={movie.available ? 'text-green-600' : 'text-red-600'}>
                    {movie.available ? 'Yes' : 'No'}
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
