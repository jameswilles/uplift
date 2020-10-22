import React from 'react';
import './post.scss';

const Post = (props) => {
  return(
    <div className='post-box'>
      <header> {props.post.username} </header>
      <section> {props.post.content} </section>
    </div>
  )
}

export default Post;