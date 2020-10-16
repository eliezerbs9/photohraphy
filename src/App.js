import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AuthProvider} from './components/Providers/AuthContext'
import SignIn from './components/SignIn';
import PrivateRoute from './components/PrivateRoute'
import EditProfile from './components/Profile/EditProfile'
import {ProfileProvider} from './components/Providers/ProfileContext'



function App() {

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <PrivateRoute path="/" exact component={Home} />
            {/* <Route path="/" exact component={Home} /> */}
            <Route path="/edit-profile/:id" exact component={EditProfile}/>
            <Route path="/login" exact component={Login} />
            <Route path="/signin" exact component={SignIn} />
          </Switch>
        </div>
      </Router>
      <ProfileProvider>
        <EditProfile />
      </ProfileProvider>
    </AuthProvider>
  );
}

export default App;
