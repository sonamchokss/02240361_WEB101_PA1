import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-1/5 p-4 shadow-md hidden md:block bg-white">
      <h2 className="font-semibold mb-2">Categories</h2>
      <ul className="space-y-2">
        <li className="text-blue-600 font-semibold">Phone</li>
        <li>Tablet</li>
        <li>TV</li>
        <li>Chromebook</li>
        <li>Watch</li>
      </ul>
    </aside>
  );
}
