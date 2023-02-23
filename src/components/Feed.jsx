import React, { useState, useEffect } from 'react';
import Post from './Post';
import Navigation from './Navigation';
import CreatePost from './CreatePost';
import RecentlyJoined from './RecentlyJoined';
import Stats from './Stats';
import axios from 'axios';
import FeedLayout from './FeedLayout';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?_limit=100'
      );
      setPosts(response.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

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
    <FeedLayout>
    <div className='p-6 mt-5'>
      <Navigation />
      <RecentlyJoined />
      <Stats />
      <CreatePost onCreatePost={handleCreatePost} />
      <div className='bg-gray-200 shadow-md rounded-md mt-5'>
        <h1 className='text-3xl font-bold mb-4 px-6 pt-6'>Feed</h1>
        <div className='space-y-4 px-6 pb-6'>
          {loading ? (
            <p className='font-bold'>Loading posts...</p>
          ) : (
            posts.map((post) => (
              <div key={post.id} className='bg-gray-100 shadow-md rounded-md'>
                <Post post={post} onLike={handleLike} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
    </FeedLayout>
  );
}

export default Feed;
