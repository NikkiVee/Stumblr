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
      loginDisplay: false,
      signupDisplay: false,
      buttonDisplay: false,
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    this.props.checkAuthenticateStatus();
  }


  registerUser = async e => {
    e.preventDefault();
    const { username, password } = this.state;

    await axios.post('/users', { username, password });

    Authenticate.authenticateUser(username);

    await axios.post('/users/login', { username, password });
    await this.props.checkAuthenticateStatus();

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
        this.props.checkAuthenticateStatus();
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
        this.props.checkAuthenticateStatus();
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
      await this.props.checkAuthenticateStatus();

      this.setState({
        username: '',
        password: '',
      });

    } else {
      this.setState({
        buttonDisplay: !this.state.buttonDisplay,
        signupDisplay: !this.state.signupDisplay
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
          this.props.checkAuthenticateStatus();
        })
        .then(() => {
          this.setState({
            username: '',
            password: '',
          });
        });

    } else {
      this.setState({
        buttonDisplay: !this.state.buttonDisplay,
        loginDisplay: !this.state.loginDisplay
      });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    if (this.props.isLoggedIn) {
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

            {this.state.buttonDisplay ?
            null
            :
            <>
            <button
              className='button1'
              name="signupDisplay"
              onClick={this.openForm}>
              Get Started
            </button>
            <br/>
            <button
                className='button2'
                name="loginDisplay"
                onClick={this.openForm2}>Log In
              </button>
            </>}

            {this.state.signupDisplay ?
              <Register
              username={this.state.username}
              password={this.state.password}
              signupDisplay={this.state.signupDisplay}
              registerUser={this.registerUser}
              handleChange={this.handleChange}
              openForm={this.openForm}
              buttonDisplay={this.buttonDisplay}  buttonDisplay2={this.buttonDisplay2}/>
            : null}


          {this.state.loginDisplay ?
            <Login
              username={this.state.username}
              password={this.state.password}
              loginDisplay={this.state.loginDisplay}
              loginUser={this.loginUser}
              handleChange={this.handleChange}
              openForm2={this.openForm2}
              buttonDisplay={this.buttonDisplay}/>
          : null}

          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
