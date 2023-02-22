import React, { useState } from 'react';

const IslandBar = () => {
  const barRef = React.useRef(null);
  const parentRef = React.useRef(null);

  const handleOver = (e) => {
    const hoverElement = e.target.getBoundingClientRect();
    const parentRefElement = parentRef.current.getBoundingClientRect();

    const width = hoverElement?.width;
    const left = hoverElement?.x - parentRefElement?.x;
    barRef.current.style.width = `${width}px`;
    barRef.current.style.transform = `translateX(${left}px)`;
  };

  const menuData = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' },
    { label: 'Blog', link: '/blog' },
    { label: 'Careers', link: '/careers' },
  ];

  return (
    <div className='p-10'>
      <div
        ref={parentRef}
        id='menu'
        className='bg-gray-700 border-solid border-gray-900 text-white rounded-2xl flex gap-3 px-4 py-1 relative shadow-xl inset-0'
        style={{ boxShadow: 'inset 0px 0px 15px rgba(0, 0, 0, 0.6)' }}
      >
        <div className='flex justify-center items-center w-full'>
          {menuData.map((item, index) => {
            return (
              <div
                onMouseEnter={handleOver}
                className='p-2 font-15 cursor-pointer text-center'
                key={item.label}
              >
                {item.label}
              </div>
            );
          })}
        </div>
        {/* dynamic bar */}
        <div
          ref={barRef}
          className='h-2 transition-all rounded-full bg-pink-500 w-7 absolute bottom-0 left-0'
          style={{ boxShadow: 'inset 0px 0px 15px rgba(0, 0, 0, 0.6)' }}
        ></div>
      </div>
    </div>
  );
};

export default IslandBar;
