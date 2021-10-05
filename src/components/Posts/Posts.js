import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!

  // Parent App component passes 2 props to Posts
  // 1. likePosts: function 
  // 2. posts: dummy-data
  const { likePost, makeComment, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Map over the dummy-data passed in through posts prop
          Pass a single post 'p' as a prop and the likePost function to the Post component */}
      {posts.map(p => <Post 
                        key={p.id} 
                        post={p} 
                        likePost={likePost} 
                        makeComment={makeComment}
                        />)}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
