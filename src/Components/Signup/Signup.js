import React, { useState,useContext} from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { firebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export default function Signup() {
  const history = useHistory()
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(firebaseContext)

  const handleSubmit =(e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    result.user.updateProfile({ displayName: username }).then(() => {
      firebase.firestore().collection('users').add({
        id: result.user.uid,
        username: username,
        phone: phone
      }).then(() => {
        history.push('/login')
      })
    })
  })
  .catch((error) => {
    // Handle errors
    console.error('Error signing up:', error);
  });

    
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>{history.push('/login')}}>Login</a>
      </div>
    </div>
  );
}
