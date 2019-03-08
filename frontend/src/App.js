import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Authenticate from './utils/Authenticate';
import PrivateRoute from './utils/AuthRouting';
import axios from 'axios';
import './App.css';

import { Navbar } from './components/Navbar';
import Auth from './components/authForms/Auth';
import Dashboard from './components/dashboard/Dashboard';
import UserProfile from './components/profile/UserProfile';

class App extends Component {
  state = {
    isLoggedIn: false,
    username: '',
    password: '',
  }

  componentDidMount() {
    this.checkAuthenticateStatus();
  }

  checkAuthenticateStatus = () => {
    axios.post('/users/isLoggedIn').then(user => {
      if (user.data.username === Authenticate.getToken()) {
        this.setState({
          isLoggedIn: Authenticate.isUserAuthenticated(),
          username: Authenticate.getToken(),
        });
      } else {
        if (user.data.username) {
          this.logoutUser();
        } else {
          Authenticate.deauthenticateUser();
        }
      }
    });
  };

  logoutUser = () => {
    axios
      .post('/users/logout')
      .then(() => {
        Authenticate.deauthenticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
      });
  };

  render() {
    const {isLoggedIn} = this.state
    return (
      <>
      <BrowserRouter>
      <div className="App">
        <Route render={() => <Navbar isLoggedIn={isLoggedIn}
        logoutUser={this.logoutUser}  /> } />

        <Switch>

          <PrivateRoute path="/dashboard"
                        component={Dashboard}/>

          <PrivateRoute path="/users/:user_id"
                        component={UserProfile} logoutUser={this.logoutUser}/>

          <Route path="/" render={() => isLoggedIn ?
          <Redirect to="/dashboard" /> :
          <Auth isLoggedIn={isLoggedIn}
                checkAuthenticateStatus={this.checkAuthenticateStatus} />
          }/>

        </Switch>

      </div>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
