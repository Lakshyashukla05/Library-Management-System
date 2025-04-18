
import React, { useState } from 'react';

export default function CategoryOfBooks() {
  const [categories, setCategories] = useState(['Fiction', 'Non-Fiction', 'Science', 'History']);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() !== '' && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Category of Books</h2>

      <div className="mb-4 flex items-center gap-2">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New Category"
          className="border px-3 py-2 rounded w-full"
        />
        <button
          onClick={handleAddCategory}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="list-disc pl-6">
        {categories.map((cat, index) => (
          <li key={index} className="text-gray-700">{cat}</li>
        ))}
      </ul>
    </div>
  );
}
