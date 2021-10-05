import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {/* <Comment comment={comments.map(comment => comment.text)} /> */}
      {comments.map(c => <Comment comment={c.text}/>)}
    </div>
  );
};

export default Comments;