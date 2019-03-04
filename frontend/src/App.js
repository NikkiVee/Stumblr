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
    password: ''
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

          <Route exact path="/" render={() => isLoggedIn ? <Dashboard /> : <Auth
            isLoggedIn={isLoggedIn} checkAuthenticateStatus={this.checkAuthenticateStatus} />
          }/>

          <Route path="/dashboard" render={() => <Dashboard/>}/>

          <PrivateRoute path="/dashboard/user" component={UserProfile} logoutUser={this.logoutUser}/>

        </Switch>

      </div>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
