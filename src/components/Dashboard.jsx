import React from 'react';
import Profile from './Profile';
import DashboardLinks from './DashboardLinks';

function Dashboard() {
  return (
    <div className="p-4 flex flex-col h-full shadow-md rounded-lg border border-gray-200 max-w-md mx-auto">
      <div className="flex items-center mb-4">
        {/* <img
          className="w-8 h-8 mr-2"
          src="https://via.placeholder.com/50"
          alt="Logo"
        /> */}
        🌵
        <h1 className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text">Sync</h1>
      </div>
      <Profile />
      <DashboardLinks />
    </div>
  );
}

export default Dashboard;
