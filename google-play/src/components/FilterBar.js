import React from 'react';

export default function FilterBar() {
  return (
    <div className="flex space-x-4 p-4 bg-white shadow-md">
      {['Phone', 'Tablet', 'TV', 'Chromebook', 'Watch'].map((category) => (
        <button key={category} className="border px-4 py-2 rounded-lg">
          {category}
        </button>
      ))}
    </div>
  );
}
