import React from 'react';
import '../../styles/post.scss';

const Post = (props) => {
  return(
    <div className='post-box'>
      <header> {props.post.username} <button> &#9825;</button> </header>
      <section> {props.post.content} </section>
    </div>
  )
}

export default Post;