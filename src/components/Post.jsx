import React from 'react';

function Post({ post, onLike }) {
  return (
    <div className="p-4 mb-4 border rounded-md">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-medium">{post.author}</h2>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md" onClick={() => onLike(post.id)}>
          Like ({post.likes})
        </button>
      </div>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
