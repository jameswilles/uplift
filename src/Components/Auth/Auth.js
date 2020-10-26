import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {getUser} from '../../ducks/reducers/reducer';
import '../../styles/Auth.scss';

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
  }, [user, props.history])

  return(
    <div className='auth-page'>
      <section className='auth-box'>
      <p className='auth-main-text'> Username: </p>
      <input value={username} onChange={e => setUsername(e.target.value)} />
      {registerView ? (
        <section>
          <p className='auth-main-text'> Email: </p>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </section>
      ) : null}
      <p className='auth-main-text'> Password: </p>
      <input value={password} onChange={e => setPassword(e.target.value)} />
      {registerView ? (
          <section className='auth-reg-log'>
           <button onClick={() => handleRegister()} > Register </button>
            <p className='auth-help-text'> Already have an account? </p>
            <button onClick={() => toggleRegister(!registerView)} > Login Here </button>
          </section>
      ) : (
        <section className='auth-reg-log'>
          <button onClick={() => handleLogin()}> Login </button>
          <p className='auth-help-text'> Need an account? </p>
          <button onClick={() => toggleRegister(!registerView)} > Register Here </button>
        </section>
      )}
      </section>
    </div>
  )
}

export default Auth;