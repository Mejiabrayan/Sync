import React, { useState } from 'react';
import Post from './Post';
import Navigation from './Navigation';
import CreatePost from './CreatePost';

function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      likes: 5,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      author: 'Jane Doe',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      likes: 10,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      author: 'John Smith',
      content:
        'Suspendisse potenti. Nulla euismod orci in tellus bibendum, vel ultricies dolor semper.',
      likes: 3,
      image: 'https://picsum.photos/200/300',
    },
  ]);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleCreatePost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div className='p-6 mt-5'>
      <Navigation />
        <CreatePost onCreatePost={handleCreatePost} />
      <div className='bg-gray-200 shadow-md rounded-md mt-5'>
        <h1 className='text-3xl font-bold mb-4 px-6 pt-6'>Feed</h1>
        <div className='space-y-4 px-6 pb-6'>
          {posts.map((post) => (
            <div key={post.id} className='bg-gray-100 shadow-md rounded-md'>
              <Post post={post} onLike={handleLike} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;
