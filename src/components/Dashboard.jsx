import React, { useState } from 'react';
import Profile from './Profile';
import DashboardLinks from './DashboardLinks';
import MobileNavigation from './MobileNavigation';

function Dashboard() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
  };

  return (
    <div className="p-4 flex flex-col h-full shadow-md rounded-lg border border-gray-200 max-w-md mx-auto">
      <div className="flex items-center mb-4">
        🌵
        <h1 className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text">Sync</h1>
      </div>
      <Profile />
      <DashboardLinks />
      <div className="md:hidden">
        <MobileNavigation />
      </div>
    </div>
  );
}

export default Dashboard;
