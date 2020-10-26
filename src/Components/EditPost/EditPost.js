import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const EditPost = (props) => {
  const [input, handleInput] = useState('')
  
  return(
    <div>
      <header>
        <section className='buttons'>
          <button> &#10003; </button>
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