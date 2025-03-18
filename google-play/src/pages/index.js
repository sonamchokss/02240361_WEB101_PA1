import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TrendingCarousel from '../components/TrendingCarousel';
import AppGrid from '../components/AppGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
          <TrendingCarousel />
          <AppGrid />
        </main>
      </div>
      <Footer />
    </div>
  );
}