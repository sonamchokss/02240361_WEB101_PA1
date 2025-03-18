import React from 'react';
export default function TrendingCarousel() {
  return (
    <div className="overflow-hidden mb-6">
      <div className="flex space-x-4 overflow-x-auto p-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="min-w-[150px] bg-white p-4 shadow rounded-lg">
            <div className="w-full h-24 bg-gray-300"></div>
            <h3 className="mt-2 font-semibold">Trending {i + 1}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
