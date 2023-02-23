import React, { useState } from 'react';

function CreatePost() {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(content);
    setContent('');
  };

  return (
    <form className="mt-6 bg-gray-200 shadow-md rounded-lg px-6 py-4">
      <textarea
        className="w-full border border-gray-200 rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={handleSubmit}
        >
          Post
        </button>
      </div>
    </form>
  );
}

export default CreatePost;
