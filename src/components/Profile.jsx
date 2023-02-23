import React, { useState, useEffect } from 'react';

function Profile() {
  const [image, setImage] = useState('');

  useEffect(() => {
    async function fetchImage() {
      const response = await fetch(
        'https://source.unsplash.com/random/400x400'
      );
      const url = response.url;
      setImage(url);
    }

    fetchImage();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center my-6'>
      <div className='w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full mb-2 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-1'>
        <img className='w-full h-full rounded-full' src={image} alt='Profile' />
      </div>
      <div className='text-center'>
        <h2 className='text-lg font-bold mb-1'>Brayan Mejia</h2>
        <p className='text-gray-500 text-sm mb-2'> Content-Creator ✨</p>
        <p className='text-gray-900 font-bold'>@mejiabrayan</p>
      </div>
      <div className='flex flex-wrap gap-4 justify-center mt-4'>
        <div className='flex flex-col items-center border-r pr-4'>
          <p className='text-lg font-bold'>10</p>
          <p className='text-gray-500 text-sm'>Posts</p>
        </div>
        <div className='flex flex-col items-center border-r pr-4'>
          <p className='text-lg font-bold'>1.2k</p>
          <p className='text-gray-500 text-sm'>Followers</p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-lg font-bold'>230</p>
          <p className='text-gray-500 text-sm'>Following</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
