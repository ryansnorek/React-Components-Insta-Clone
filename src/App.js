/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState } from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import Posts from './components/Posts/Posts';
import SearchBar from './components/SearchBar/SearchBar';
// Import the dummyData
import dummyData from './dummy-data';
import './App.css';

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  const [posts, setPosts] = useState(dummyData)
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [search, setSearch] = useState('')

  const likePost = postId => {
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.
      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */
    
    setPosts(posts.map(post => {
      console.log(post)
      if (post.id === postId) return post
      else return post
    }))
  };

  const makeComment = postId => {
    setPosts(posts.map(post => {
      console.log(post)
      if (post.id === postId) return post
      else return post
    }))
  }

  return (
    <div className='App'>
      <SearchBar />
      <Posts likePost={likePost} makeComment={makeComment} posts={posts}/>
    </div>
  );
};

export default App;
