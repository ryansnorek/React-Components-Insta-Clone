import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  // comments comes from the Post component. It's from the single post 'p':  dummyData[i].comments
  /* 
  comments: [
            {
                id: 22,
                username: "philzcoffee",
                text: "We've got more than just coffees!",
            },
            {
                id: 23,
                username: "biancasaurus",
                text: "Looks delicious!",
            },
            {
                id: 24,
                username: "martinseludo",
                text: "Can't wait to try it!",
            },
  */
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(c => <Comment key={c} comment={c}/>)}
    </div>
  );
};

export default Comments;