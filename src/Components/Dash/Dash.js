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

  const getPosts = () => {
    axios.get('/api/posts')
      .then(res => handlePosts(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if(!user.email){
      props.history.push('/');
    }
  }, [user])

  useEffect(() => {
    getPosts()
  }, [])

  const createPost = () => {
    axios.post('/api/post', {id: user.user_id, content: postInput})
    .then(() => {
      getPosts()
      handlePostInput('')
    })
    .catch(err => console.log(err))
  }

  return(
    <div className='dashboard'>
      <div className ='new-post-box'>
        <header>
          <p> Share Something New! </p>
          <button onClick={() => createPost()}> Post </button>
          <button onClick={() => handlePostInput('')}> Cancel </button>
        </header>
        <section>
          <input
            value={postInput}
            onChange={e => handlePostInput(e.target.value)} ></input>
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