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

  // something reseting connection during axios request.  both in dash and profile.  The proxy error logs in the npm start terminal, but is irregular.

  // was previously using axios get request to /api/posts/:id , with the param having a value of user.user_id

  // the axios get request to /api/posts works, but still gives the proxy error, which I really don't understand.  The console.log of userPosts (which is in the render) is firing twice, meaning there is a second thing (other than the useEffect) causing a re-render?

  // turns out the proxy error is coming from Dash.js when I leave that route.  Still no clue why though.  I came to this conclusion by commenting out the use effect that fires the axios request in Profile.js

  // that means there is something ELSE wrong with the axios request I'm making here.

  useEffect(() => {
    let source = axios.CancelToken.source()
    const { user_id } = user

    try {
      axios.get(`/api/posts/${user_id}`, {cancelToken: source.token})
      .then(res => handleUserPosts(res.data))
      .catch(err => console.log(err))
    } catch(error) {

    }

    return () => {
      source.cancel()
    }
  }, [user])

  return(
    <div>
      Profile
      {mappedUserPosts}
    </div>
  )
}

export default Profile