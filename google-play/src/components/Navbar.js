import React from 'react';
export default function Navbar() {
  return (
    <nav className="bg-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Google Play</h1>
      <input type="text" placeholder="Search for apps & games" className="border rounded p-2 w-1/3" />
      <button className="text-blue-600">Sign In</button>
    </nav>
  );
}