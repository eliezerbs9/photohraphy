import React from 'react';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AuthProvider} from './components/Providers/AuthContext'
import SignIn from './components/SignIn';
import PrivateRoute from './components/PrivateRoute'
import {ProfileProvider} from './components/Providers/ProfileContext'



function App() {

  return (
    <Router>
      <AuthProvider>
        <ProfileProvider>
          <div className="App">
            <Switch>
              <Route path="/teste" exact render={() => <Home />}/> 
              <Route path="/login" exact component={Login} />
              <Route path="/signin" exact component={SignIn} />
              <PrivateRoute path="/" component={Home} />
            </Switch>
          </div>
        </ProfileProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
