import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import connect from 'react-redux';
// import {getUser} from '../../ducks/reducer';

const Auth = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [registerView, toggleRegister] = useState(false);

  // useEffect(() => {
  //   if(props.user.email){
  //     props.history.push('/dash');
  //   }
  // }, [])

  return(
    <div>
      Auth
    </div>
  )
}

export default Auth;