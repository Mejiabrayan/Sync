import React, { useState, useEffect } from 'react';
import { BsGrid3X3Gap } from 'react-icons/bs';
import axios from 'axios';
import dayjs from 'dayjs';

function Post({ post, onLike }) {
  const [author, setAuthor] = useState('Unknown');
  const [profile, setProfile] = useState('');
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    async function fetchData() {
      const [authorRes, imageRes, commentsRes] = await Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`),
        axios.get('https://picsum.photos/50'),
        axios.get(
          `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
        ),
      ]);

      setAuthor(authorRes.data.name);
      setProfile(imageRes.request.responseURL);
      setTimestamp(dayjs(post.timestamp).format('MMM D, YYYY h:mm A'));

      // Store the comments in state
      setComments(commentsRes.data);
    }

    fetchData();
  }, [post]);

  const [comments, setComments] = useState([]);
  const [showMoreComments, setShowMoreComments] = useState(false);

  const displayedComments = showMoreComments ? comments : comments.slice(0, 1);

  return (
    <div className='p-4 mb-4 border rounded-md'>
      <div className='flex flex-col sm:flex-row items-center justify-between mb-2'>
        <div className='flex flex-col sm:flex-row items-center justify-center mb-2 sm:mb-0'>
          <img
            src={profile}
            alt='Profile'
            className='w-8 h-8 rounded-full mr-2'
          />
          <div>
            <h2 className='text-lg font-medium'>{author}</h2>
            <p className='text-sm text-gray-600'>{timestamp}</p>
          </div>
        </div>
        <button
          className='bg-blue-500 text-white px-3 py-1 rounded-md'
          onClick={() => onLike(post.id)}
        >
          <span className='mr-2'>Like</span>
          <span className='text-sm text-white font-medium'>{post.likes}</span>
        </button>
      </div>
      <p className='text-gray-800'>{post.body}</p>
      {comments && comments.length > 0 && (
        <div className='flex flex-col mt-2'>
          <h3 className='font-medium mb-2'>Comments ({comments.length})</h3>
          {displayedComments.map((comment) => (
            <div key={comment.id} className='border-b pb-2'>
              <p className='text-gray-800 font-medium'>{comment.name}</p>
              <p className='text-gray-600'>{comment.body}</p>
            </div>
          ))}
          {comments.length > 1 && (
            <button
              className='flex items-center text-gray-500 hover:text-blue-500'
              onClick={() => setShowMoreComments(!showMoreComments)}
            >
              <BsGrid3X3Gap className='mr-2' />
              <span className='text-sm'>
                {showMoreComments
                  ? 'Hide comments'
                  : `View all ${comments.length} comments`}
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Post;