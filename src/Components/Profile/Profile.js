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
  })

  useEffect(() => {
    let source = axios.CancelToken.source()

    try {
      axios.get(`/api/posts/${user.user_id}`, {cancelToken: source.token})
      .then(res => handleUserPosts(res.data))
      .catch(err => console.log(err))
    } catch(error) {

    }

    return () => {
      source.cancel()
    }
  }, [userPosts])

  return(
    <div>
      Profile
      {mappedUserPosts}
    </div>
  )
}

export default Profile