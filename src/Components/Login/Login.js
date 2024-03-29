import React, {useState , useContext} from 'react';
import { firebaseContext } from '../../store/Context';

import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Login.css';



function Login() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(firebaseContext) 
  const history = useHistory()
  
  const handleLogin = (e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((error)=>{
      alert(error.message)
    })

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            onChange={(e)=>{setEmail(e.target.value)}}
            name="email"
            placeholder='enter email'
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            onChange={(e)=>{setPassword(e.target.value)}}
            name="password"
            placeholder='enter password'
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        
        <a onClick={()=>{history.push('/signup')}}>Signup</a>
        <br></br>
        <p>email: user@gmail.com</p>
        <p>password: user123</p>

      </div>
    </div>
  );
}

export default Login;
