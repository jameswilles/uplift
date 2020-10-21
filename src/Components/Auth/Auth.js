import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {getUser} from '../../ducks/reducer';

const Auth = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [registerView, toggleRegister] = useState(false);

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleRegister = () => {
    axios.post('/api/register', {username, email, password})
    .then(res => {
      dispatch(getUser(res.data))
    })
    .catch(err => console.log(err))
  }

  const handleLogin = () => {
    axios.post('/api/login', {username, password})
    .then(res => {
      dispatch(getUser(res.data))
  })
  .catch(err => console.log(err));
  }

  useEffect(() => {
    if(user.email){
      props.history.push('/dash');
    }
  })

  return(
    <div>
      <p> Username: </p>
      <input value={username} onChange={e => setUsername(e.target.value)} />
      {registerView ? (
        <section>
          <p> Email: </p>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </section>
      ) : null}
      <p> Password: </p>
      <input value={password} onChange={e => setPassword(e.target.value)} />
      {registerView ? (
          <section>
           <button onClick={() => handleRegister()} > Register </button>
            <p> Already have an account? </p>
            <button onClick={() => toggleRegister(!registerView)} > Login Here </button>
          </section>
      ) : (
        <section>
          <button onClick={() => handleLogin()}> Login </button>
          <p> Need an account? </p>
          <button onClick={() => toggleRegister(!registerView)} > Register Here </button>
        </section>
      )}
    </div>
  )
}

export default Auth;