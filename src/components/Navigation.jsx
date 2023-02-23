import React from 'react';
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import SearchInput from './SearchInput';
import { BsBell } from 'react-icons/bs';
import { BiMessageAltDetail } from 'react-icons/bi';

function Navigation() {
  return (
    <div className="flex justify-between items-center bg-gray-200 shadow-md rounded-md p-4">
      <div className="relative">
        <SearchInput
          className="border border-gray-300 rounded-full px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-300"
          placeholder="Search"
        />
        
      </div>
      <div className="flex items-center">
        <a href="#" className="text-gray-800 mr-4 hover:text-gray-900">
          <BsBell />
        </a>
        <a href="#" className="text-gray-800 mr-4 hover:text-gray-900">
          <BiMessageAltDetail />
        </a>
        <button
          className="nav-btn bg-gradient-to-r from-purple-500 to-red-500 text-white px-4 py-2 rounded-md hover:from-red-500 hover:to-purple-600"
          style={{ fontStyle: 'italic' }} >
          Upload
        </button>
      </div>
    </div>
  );
}

export default Navigation;
