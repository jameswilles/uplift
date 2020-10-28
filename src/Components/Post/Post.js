import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/post.scss';

const Post = (props) => {
  const [likesArr, handleLikesArr] = useState([])
  const [liked, handleLiked] = useState(false)

  const getPostLikes = () => {
    axios.get(`api/post-likes/${props.post.post_id}`)
    .then(res => {
      handleLikesArr(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getPostLikes()
  }, [])

  useEffect(() => {
    // console.log(likesArr)
    let likeCheck = likesArr.filter(element => element.user_id === props.user.user_id)
    if (likeCheck[0] !== undefined) {
      if (likeCheck[0].user_id === props.user.user_id) {
        handleLiked(true)
      }
      }
  }, [likesArr])

  useEffect(() => {
    console.log(liked, 'should be true')
  }, [liked])

  return(
    <div className='post-box'>
      <header> 
        {props.post.username} 
        {liked ? <button className='like-button liked' > &#9825; </button> 
          : <button className='like-button not-liked' > &#9825; </button>} 
        {likesArr.length} 
      </header>
      <section> {props.post.content} </section>
    </div>
  )
}

export default Post;