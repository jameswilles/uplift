import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './dash.scss';

const Dash = (props) => {
  const [posts, handlePosts] = useState([])
  const mappedPosts = posts.map((post, i) => (
    <Post key={i} post={post} />
  ))
  const user = useSelector(state => state.user)

  useEffect(() => {
    if(!user.email){
      props.history.push('/');
    }
  })
  
  useEffect(() => {
    let source = axios.CancelToken.source()

    try {
      axios.get('/api/posts', {cancelToken: source.token})
      .then(res => handlePosts(res.data))
      .catch(err => console.log(err))
    } catch(error) {
      
    } 

    return () => {
      source.cancel()
    }
  }, [posts])

  return(
    <div className='dashboard'>
      {mappedPosts}
    </div>
  )
}

export default Dash