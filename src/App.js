import React, {useEffect, useState} from 'react';
import './App.css';
import {projectAuth} from './firebase/config'
import Home from './components/Home'
import Login from './components/Login'



function App() {

  const [user, setUser] = useState(null)

  const authListener = () => {
    projectAuth.onAuthStateChanged((user) => {
      console.log(user);
      if(user){
        console.log('user logged in')
      }else{
        console.log('user not logged in')
      } 
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  return (
    <div className="App">
      {user ? (<Home />) : (<Login />)}
    </div>
  );
}

export default App;
