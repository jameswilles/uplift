import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Post from '../Post/Post';

const Profile = (props) => {
  const user = useSelector(state => state.user)
  const [userPosts, handleUserPosts] = useState([])
  const mappedUserPosts = userPosts.map((post, i) => (
    <Post key={i} post={post} />
  ))

  useEffect(() => {
    if(!user.email){
      props.history.push('/');
    }
  }, [user])


  useEffect(() => {
    const { user_id } = user
    axios.get(`/api/posts/${user_id}`)
    .then(res => handleUserPosts(res.data))
    .catch(err => console.log(err))
  }, [])

  return(
    <div>
      Profile
      {mappedUserPosts}
    </div>
  )
}

export default Profile