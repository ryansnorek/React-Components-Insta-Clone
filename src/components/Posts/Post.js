import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!

  // post is a single post 'p' from Posts mapped from dummy data
  // likePost is the function passed from Posts from App
  const { post, likePost, makeComment } = props;

  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      <LikeSection 
          likePost={() => likePost(post.id)} 
          makeComment={() => makeComment(post.id)}
          numberOfLikes={post.likes}
          />
      <Comments comments={post.comments}/>
    </div>
  );
};

export default Post;
