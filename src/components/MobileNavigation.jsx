import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Profile from './Profile';
import DashboardLinks from './DashboardLinks';

function MobileNavigation() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div className="md:hidden flex justify-end">
      <button
        type="button"
        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
        onClick={toggleMenu}
      >
        <FaBars />
      </button>
      {showMenu && (
        <div className="absolute z-10 top-0 right-0 bg-white shadow-lg mt-12 py-2 px-3 rounded-lg">
          <Profile />
          <DashboardLinks />
        </div>
      )}
    </div>
  );
}

export default MobileNavigation;
