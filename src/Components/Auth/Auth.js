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
           <button> Register </button>
            <p> Already have an account? </p>
            <button onClick={() => toggleRegister(!registerView)} > Login Here </button>
          </section>
      ) : (
        <section>
          <button> Login </button>
          <p> Need an account? </p>
          <button onClick={() => toggleRegister(!registerView)} > Register Here </button>
        </section>
      )}
    </div>
  )
}

export default Auth;