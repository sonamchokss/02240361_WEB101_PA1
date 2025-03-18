import React from 'react';
export default function Sidebar() {
  return (
    <aside className="w-1/5 bg-white p-4 shadow-md hidden md:block">
      <ul className="space-y-2">
        <li className="text-blue-600 font-semibold">For You</li>
        <li>Top Charts</li>
        <li>Categories</li>
        <li>Kids</li>
      </ul>
    </aside>
  );
}