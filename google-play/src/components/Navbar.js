import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <div className="flex items-center">
        <img src="/logo.png" alt="Google Play" className="w-10 h-10" />
        <h1 className="text-xl font-bold ml-2">Google Play</h1>
      </div>
      <div className="flex space-x-4">
        <button className="text-blue-600">Games</button>
        <button>Apps</button>
        <button>Kids</button>
      </div>
    </nav>
  );
}
