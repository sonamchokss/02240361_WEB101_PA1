import React from 'react';

export default function TrendingCarousel() {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {[1, 2, 3].map((index) => (
        <div key={index} className="min-w-[300px] bg-gray-200 p-4 rounded-lg">
          <img src={`/game${index}.jpg`} alt={`Game ${index}`} className="rounded-lg" />
        </div>
      ))}
    </div>
  );
}
