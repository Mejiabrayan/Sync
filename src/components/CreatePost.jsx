import React, { useState } from 'react';

function CreatePost() {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(content);
    setContent('');
  };

  return (
    <form className='mt-6' onSubmit={handleSubmit}>
      <textarea
        className='w-full border border-gray-400 rounded-md p-2 mb-2'
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        type='submit'
      >
        Post
      </button>
    </form>
  );
}

export default CreatePost;
