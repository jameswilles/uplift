import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Post from '../Post/Post';
import '../../styles/profile.scss';

const Profile = (props) => {
  const user = useSelector(state => state.user)
  const [userPosts, handleUserPosts] = useState([])
  const mappedUserPosts = userPosts.map((post, i) => (
    <div key={i}>
      <Post post={post} />
      <button onClick={() => editPost(post)}> Edit </button> <button onClick={() => deletePost(post.post_id)}> Delete </button>
    </div>
  ))

  const getUserPosts = () => {
    const { user_id } = user
    axios.get(`/api/posts/${user_id}`)
    .then(res => handleUserPosts(res.data))
    .catch(err => console.log(err))
  }

  const editPost = (postObj) => {
    console.log(postObj)
  }

  const deletePost = (id) => {
    axios.delete(`/api/post/${id}`)
    .then(() => {
      getUserPosts()
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    if(!user.email){
      props.history.push('/');
    }
  }, [user, props.history])


  useEffect(() => {
    getUserPosts()
  }, [])

  return(
    <div className='profile'>
      Profile
      {mappedUserPosts}
    </div>
  )
}

export default Profile