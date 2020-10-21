import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { useSelector } from 'react-redux';

const Dash = (props) => {
  const [posts, handlePosts] = useState([1,2,3])
  const mappedPosts = posts.map((post, i) => (
    <Post key={i} > {post} </Post>
  ))
  const user = useSelector(state => state.user)

  useEffect(() => {
    if(!user.email){
      props.history.push('/');
    }
  })
  
  return(
    <div>
      Dash
      {mappedPosts}
    </div>
  )
}

export default Dash