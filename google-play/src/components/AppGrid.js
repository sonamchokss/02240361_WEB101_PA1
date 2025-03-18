import React from 'react';
import AppCard from './AppCard';
import appData from '../data/apps.json';

export default function AppGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {appData.map((app, i) => (
        <AppCard key={i} app={app} />
      ))}
    </div>
  );
}
