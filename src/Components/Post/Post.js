import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/post.scss';

const Post = (props) => {
  const [likesArr, handleLikesArr] = useState([])
  const [liked, handleLiked] = useState(false)
  const { user_id } = props.user

  const getPostLikes = () => {
    axios.get(`api/post-likes/${props.post.post_id}`)
    .then(res => {
      handleLikesArr(res.data)
    })
    .catch(err => console.log(err))
  }

  const likePost = () => {
    axios.post(`/api/like/${props.post.post_id}`, {user_id})
    .then(res => handleLikesArr(res.data))
    .catch(err => console.log(err))
  }

  const unlikePost = () => {
    axios.post(`/api/unlike/${props.post.post_id}`, {user_id})
    .then(res => handleLikesArr(res.data))
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

  return(
    <div className='post-box'>
      <div className='post-header'> 
        {props.post.username} 
        {liked ? <button onClick={() => unlikePost()} className='like-button liked' > &#9829; </button> 
          : <button onClick={() => likePost()} className='like-button not-liked' > &#9829; </button>} 
        {likesArr.length} 
      </div>
      <section> {props.post.content} </section>
    </div>
  )
}

export default Post;