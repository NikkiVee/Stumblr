import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Auth from './components/authForms/Auth';
import Dashboard from './components/dashboard/Dashboard.js';
import './App.css';
import axios from 'axios'
import Authenticate from './utils/Authenticate'

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
    return (
      <>
      <BrowserRouter>
      <div className="App">
        <Route component={Navbar} />

        <Switch>

          <Route exact path="/" render={() => {
            if (this.state.isLoggedIn) {
              return <Redirect to='/dashboard' />
            } else {
              return <Auth />
            }
          }}/>

          <Route path="/dashboard" component={Dashboard}/>

        </Switch>

      </div>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
