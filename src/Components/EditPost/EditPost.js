import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const EditPost = (props) => {
  const user = useSelector(state => state.user)
  const post = useSelector(state => state.post)
  const [input, handleInput] = useState(post.content);

  useEffect(() => {
    if(!user.email){
      props.history.push('/')
    }
  }, [user, props.history])

  const edit = () => {
    axios.put(`/api/post/${post.post_id}`, {content: input})
    .then(() => {
      props.history.push('/profile')
    })
    .catch(err => console.log(err))
  }
  
  return(
    <div>
      <header>
        <section className='buttons'>
          <button onClick={() => {edit()}}> &#10003; </button>
          <button onClick={() => {
            handleInput('')
            props.history.push('/profile')
          }} > &#10007; </button>
        </section>
      </header>
      <section className='input-box'>
        <p> Type Here: </p>
        <input
          value={input}
          onChange={e => handleInput(e.target.value)} />
      </section>
    </div>
  )
}

export default EditPost;