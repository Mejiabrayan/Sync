import React from 'react';
import Dashboard from '../components/Dashboard';
import Feed from '../components/Feed';
import Tool from '../components/Tool';

function HomePage() {
    return (
        <div className='grid grid-cols-4 h-screen'>
          <div className='col-span-1 bg-gray-100'>
            <Dashboard />
          </div>
          <div className='col-span-2 overflow-scroll'>
            <Feed />
          </div>
          <div className='col-span-1'>
            <Tool />
          </div>
        </div>
      );
    }

export default HomePage;
