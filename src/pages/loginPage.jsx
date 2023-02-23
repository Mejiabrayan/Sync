import React from 'react';

function LoginPage() {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-screen flex flex-col justify-center items-center">
      <div className="w-80 bg-white rounded-md shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700 mb-1">Email</label>
            <input type="email" name="email" id="email" className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500" required />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium text-gray-700 mb-1">Password</label>
            <input type="password" name="password" id="password" className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500" required />
          </div>
          <div>
            <button type="submit" className="w-full bg-purple-500 text-white rounded-md py-2 px-4 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
