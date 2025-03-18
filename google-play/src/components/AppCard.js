import React from 'react';

export default function AppCard({ app }) {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <img src={app.image} alt={app.name} className="w-full h-24 object-cover" />
      <h3 className="mt-2 font-semibold">{app.name}</h3>
      <p className="text-sm text-gray-500">{app.category}</p>
      <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">Install</button>
    </div>
  );
}
