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
          stockImg: `https://source.unsplash.com/random/150x150/?${user.name}`,
        };
      });
      setProfiles(profileData);
    }
    fetchProfiles();
  }, []);

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 mb-8">
          Recently Joined 🥳
        </h1>
        <div className="flex justify-center items-center flex-wrap -mx-4">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="w-24 h-24 rounded-full mx-4 mb-8 overflow-hidden"
            >
              <img
                className="object-cover object-center w-full h-full"
                src={profile.stockImg}
                alt={profile.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentJoin;
