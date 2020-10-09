import React, {useEffect, useState} from 'react';
import './App.css';
import {projectAuth} from './firebase/config'
import Home from './components/Home'
import Login from './components/Login'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignUp from './components/SignUp';


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
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
