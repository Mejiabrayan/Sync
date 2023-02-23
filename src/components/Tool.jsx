import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import {FiTool} from 'react-icons/fi';

export default function Tool() {
  return (
    <div className='flex flex-col h-40 bg-gray-200 shadow-md rounded-lg border border-gray-200 p-6'>
      <h2 className='text-lg font-bold mb-2'>
        <FiTool className='inline-block mr-2 mb-1 text-purple-500' />
        Tool Name
      </h2>
      <div className='text-gray-500 mb-4'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada magna eu elit eleifend, non volutpat turpis dictum.</p>
      </div>
      <div className='flex justify-end'>
        <button className='px-4 py-2 bg-gradient-to-r from-purple-500 to-red-500 text-white rounded-md flex items-center'>
          Try Now
          <FaArrowRight className='inline-block ml-2' />
        </button>
      </div>
    </div>
  );
}


