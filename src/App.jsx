import React from 'react';
import Dashboard from './components/Dashboard';
import Feed from './components/Feed';

function App() {
  return (
    <div className='grid grid-cols-4 h-screen'>
    
      <div className='col-span-1 bg-gray-100'>
        <Dashboard />
      </div>
    
      <div className='col-span-3 overflow-scroll'>
        <Feed />
      </div>
    </div>
  );
}

export default App;
