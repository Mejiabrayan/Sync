import React from 'react';
import Profile from './Profile';
import DashboardLinks from './DashboardLinks';

function Dashboard() {
  return (
    <div className="p-4 flex flex-col h-full">
      <div className="flex items-center mb-4">
        {/* <img
          className="w-8 h-8 mr-2"
          src="https://via.placeholder.com/50"
          alt="Logo"
        /> */}
        🌵
        <h1 className="text-lg font-bold">Sync</h1>
      </div>
      <Profile />
      <DashboardLinks />
    </div>
  );
}

export default Dashboard;
