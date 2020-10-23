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
  const [postInput, handlePostInput] = useState('')

  useEffect(() => {
    if(!user.email){
      props.history.push('/');
    }
  }, [user])

  useEffect(() => {
    axios.get('/api/posts')
      .then(res => handlePosts(res.data))
      .catch(err => console.log(err))
  }, [])

  return(
    <div className='dashboard'>
      <div className ='new-post-box'>
        <header>
          <p> Share Something New! </p>
          <button> Post </button>
          <button> Cancel </button>
        </header>
        <section>
          <input></input>
        </section>
      </div>
      <section className='text-container'>
        <p> Posts: </p>
      </section>
      {mappedPosts}
    </div>
  )
}

export default Dash