import React from 'react';
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import SearchInput from './SearchInput';

function Navigation() {
  return (
    <div className='flex justify-between items-center bg-gray-200 shadow-md rounded-md p-4'>
      <SearchInput />
      <div className='flex items-center'>
        <a href='#' className='text-gray-800 mr-4 hover:text-gray-900'>
          <FaHome />
        </a>
        <a href='#' className='text-gray-800 mr-4 hover:text-gray-900'>
          <FaInfoCircle />
        </a>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navigation;
