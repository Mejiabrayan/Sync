import React from 'react';
import {BsGrid3X3Gap} from 'react-icons/bs';

function Post({ post, onLike }) {
  return (
    <div className="p-4 mb-4 border rounded-md">
      <div className="flex items-center justify-between mb-2">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg font-medium">{post.author}</h2>
          <img src='https://via.placeholder.com/50' alt='Profile' className='w-8 h-8 rounded-full' />
        </div>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md" onClick={() => onLike(post.id)}>
          Like ({post.likes})
        </button>
      </div>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
