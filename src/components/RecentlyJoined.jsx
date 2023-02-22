import React, { useEffect, useState } from 'react';

function RecentJoin() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchProfiles() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      const profileData = data.map((user) => {
        return {
          name: user.name,
          profileImg: `https://via.placeholder.com/150?text=${user.username}`,
          stockImg: `https://source.unsplash.com/random/100x100/?${user.name}`,
        };
      });
      setProfiles(profileData);
    }
    fetchProfiles();
  }, []);

  return (
    <div className="mt-5 bg-gradient-to-br from-red-500 via-blue-600 to-blue-500 py-4 rounded-md shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl text-white sm:text-3xl md:text-4xl leading-9 font-extrabold mb-4 sm:mb-6">
          Recently Joined 🥳
        </h1>
        <div className="flex flex-wrap justify-center items-center pb-2">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="rounded-full mx-2 sm:mx-4 mb-4 sm:mb-8 sm:overflow-hidden"
              style={{ width: '4rem', height: '4rem' }}
            >
              <img
                className="object-cover object-center rounded-full"
                src={profile.stockImg}
                alt={profile.name}
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: '5rem',
                  maxHeight: '5rem',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentJoin;
