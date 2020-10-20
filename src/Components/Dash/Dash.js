import React, { useState } from 'react';
import Post from '../Post/Post';

const Dash = () => {
  const [posts, handlePosts] = useState([1,2,3])
  const mappedPosts = posts.map((post, i) => (
    <Post key={i} > {post} </Post>
  ))
  
  return(
    <div>
      Dash
      {mappedPosts}
    </div>
  )
}

export default Dash