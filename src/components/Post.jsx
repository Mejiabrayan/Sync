import React, { useState, useEffect } from 'react';
import { BsGrid3X3Gap } from 'react-icons/bs';
import axios from 'axios';

function Post({ post, onLike }) {
  const [author, setAuthor] = useState('Unknown');

  useEffect(() => {
    async function fetchAuthor() {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${post.userId}`
      );
      setAuthor(response.data.name);
    }
    fetchAuthor();
  }, [post.userId]);

  return (
    <div className="p-4 mb-4 border rounded-md">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-2 sm:mb-0">
          <img src='https://via.placeholder.com/50' alt='Profile' className='w-8 h-8 rounded-full mr-2' />
          <h2 className="text-lg font-medium">{author}</h2>
        </div>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md" onClick={() => onLike(post.id)}>
          Like ({post.likes})
        </button>
      </div>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
