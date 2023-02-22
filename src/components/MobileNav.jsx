import React from 'react';
import { FaBars } from 'react-icons/fa';
import DashboardLinks from './DashboardLinks';

function MobileNav({ isMobileMenuOpen, toggleMobileMenu }) {
  return (
    <div className="block sm:hidden">
      <div className="flex justify-between items-center py-3 px-4 bg-white border-b border-gray-200">
        <h1 className="font-bold text-gray-800">Dashboard</h1>
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
        >
          <FaBars className="text-2xl" />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="bg-gray-100 py-4 px-2">
          <DashboardLinks />
        </div>
      )}
    </div>
  );
}

export default MobileNav;
