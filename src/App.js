import React,{useEffect,useContext} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import View from './Pages/ViewPost'
import Create from './Pages/Create'
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { authContext, firebaseContext } from './store/Context';
import PostContext from './store/postContext'



function App() {
  const {setUser} = useContext(authContext)
  const {firebase} =  useContext(firebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <PostContext>
      <Router>
        <Route exact path ='/'>
          <Home />
        </Route>
        <Route path ='/signup'> 
          <Signup />
        </Route>

        <Route path ='/login'> 
          <Login />
        </Route>

        <Route path ='/create'> 
          <Create />
        </Route>

        <Route path ='/view'> 
          <View />
        </Route>
         
      
      </Router>
      </PostContext>
    </div>
  );
}

export default App;
