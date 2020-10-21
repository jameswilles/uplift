import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Profile = (props) => {
  const user = useSelector(state => state.user)

  useEffect(() => {
    if(!user.email){
      props.history.push('/');
    }
  })
  return(
    <div>
      Profile
    </div>
  )
}

export default Profile