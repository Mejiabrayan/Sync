function Profile() {
    return (
      <div className="flex flex-col items-center justify-center my-6">
        <div className="w-20 h-20 rounded-full mb-2 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-1">
          <img
            className="w-full h-full rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt="Profile"
          />
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold">Brayan Mejia</h2>
          <p className="text-gray-500 text-sm">Software Engineer</p>
          <p className="text-gray-900 font-bold">@mejiabrayan</p>
        </div>
        <div className='flex gap-4 mt-4'>
          <div className='flex flex-col items-center'>
            <p className='text-lg font-bold'>10</p>
            <p className='text-gray-500'>Posts</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-lg font-bold'>1.2k</p>
            <p className='text-gray-500'>Followers</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-lg font-bold'>230</p>
            <p className='text-gray-500'>Following</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Profile;
  