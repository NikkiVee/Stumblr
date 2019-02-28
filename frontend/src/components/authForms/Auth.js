import React from 'react';
import '../css/Auth.css';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import Authenticate from '../../utils/Authenticate';
import Login from './Login';
import Register from './Register';

class Auth extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      loginDisplay: false,
      signupDisplay: false,
      buttonDisplay: false,
      buttonDisplay2: false,
      username: '',
      password: '',
    };
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

  registerUser = async e => {
    e.preventDefault();
    const { username, password } = this.state;

    await axios.post('/users', { username, password });

    Authenticate.authenticateUser(username);

    await axios.post('/users/login', { username, password });
    await this.checkAuthenticateStatus();

    this.setState({
      username: '',
      password: '',
    });
  };

  loginUser = e => {
    e.preventDefault();
    const { username, password } = this.state;

    axios
      .post('/users/login', { username, password })
      .then(() => {
        Authenticate.authenticateUser(username);
      })
      .then(() => {
        this.checkAuthenticateStatus();
      })
      .then(() => {
        this.setState({
          username: '',
          password: '',
        });
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

  openForm = async (e) => {
    if (this.state.username && this.state.password) {
      // if("some check about login or register")
      let username = document.querySelector('.inputbox').value;
      let password = document.querySelector('.inputbox2').value;
      await axios.post('/users', { username, password });

      Authenticate.authenticateUser(username);

      await axios.post('/users/login', { username, password });
      await this.checkAuthenticateStatus();

      this.setState({
        username: '',
        password: '',
      });

    } else {
      this.setState({
        signupDisplay: !this.state.signupDisplay,
        buttonDisplay2: !this.state.buttonDisplay2,
      });
    }
  };

  openForm2 = (e) => {
    if (this.state.username && this.state.password) {
      let username = document.querySelector('.inputbox').value;
      let password = document.querySelector('.inputbox2').value;
      axios
        .post('/users/login', { username, password })
        .then(() => {
          Authenticate.authenticateUser(username);
        })
        .then(() => {
          this.checkAuthenticateStatus();
        })
        .then(() => {
          this.setState({
            username: '',
            password: '',
          });
        });

    } else {
      this.setState({
        loginDisplay: !this.state.loginDisplay,
        buttonDisplay: !this.state.buttonDisplay,
      });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to='/dashboard' />;
    }

    return (
      <div className="background">

        <div className="wholething">

          <div className="greeting-container">

            <div className="greeting1">
              <h1>stumblr</h1>
            </div>

            <div className="greeting2">
              <p>Come for what you love.</p>
              <p>Stay for what you discover.</p>
            </div>


            {this.state.signupDisplay ?
              <Register
              username={this.state.username}
              password={this.state.password}
              signupDisplay={this.state.signupDisplay}
              registerUser={this.registerUser}
              handleChange={this.handleChange}
              openForm={this.openForm}
              buttonDisplay={this.buttonDisplay}
              buttonDisplay2={this.buttonDisplay2}/>
            : null }

            {this.state.buttonDisplay ?
              null
            : <button
              className='button1'
              name="signupDisplay"
              onClick={this.openForm}>
              Get Started
            </button> }

            <br/>

          {this.state.loginDisplay ?
          <Login
            username={this.state.username}
            password={this.state.password}
            loginDisplay={this.state.loginDisplay}
            loginUser={this.loginUser}
            handleChange={this.handleChange}
            openForm2={this.openForm2}
            buttonDisplay={this.buttonDisplay}/>
          : null }

          {this.state.buttonDisplay ?
            null
          : <button
              className='button2'
              name="loginDisplay"
              onClick={this.openForm2}>Log In
            </button> }

          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
