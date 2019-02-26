import React from 'react';
import '../css/Auth.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Login from './Login';
import Register from './Register';

class Auth extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loginDisplay: false,
      signupDisplay: false,
      buttonDisplay: false,
      buttonDisplay2: false,
      username: '',
      password: '',
    };
  }

  loginUser = () => {
    const { username, password } = this.state;
    axios.post('/users/login', { username, password })
      .then(res => {
        const user = res.data;
        this.props.setLoggedInUser(user);
      })
      .catch(err => {
        console.log('Error:', err);
      });
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.loginUser();
  };

  handleSignup = (e) => {
    const { username, password } = this.state;
    e.preventDefault();
    // Make NET request
    axios.post('/users/new', { username, password })
      .then(res => {
        this.loginUser();
      })
      .catch(err => {
        console.log('Error:', err);
      });
  };

  openForm = (e) => {
    this.setState({
      signupDisplay: !this.state.signupDisplay,
      buttonDisplay: !this.state.buttonDisplay,
    });
  };

  openForm2 = (e) => {
    this.setState({
      loginDisplay: !this.state.loginDisplay,
      buttonDisplay2: !this.state.buttonDisplay2,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {

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


        <Register
          username={this.state.username}
          password={this.state.password}
          signupDisplay={this.state.signupDisplay}
          handleSignup={this.handleSignup}
          handleChange={this.handleChange}/>
        <button
          className={this.state.buttonDisplay2 ? 'cornerbutton2' : 'button1'}
          name="signupDisplay"
          onClick={this.openForm}>{this.state.buttonDisplay ? 'Sign Up' : 'Get Started'}
        </button>
        <br/>
      <Login
        username={this.state.username}
        password={this.state.password}
        loginDisplay={this.state.loginDisplay}
        handleLogin={this.handleLogin}
        handleChange={this.handleChange}/>
      <button
        className={this.state.buttonDisplay ? 'cornerbutton1' : 'button2'}
        name="loginDisplay"
        onClick={this.openForm2}>Log In
      </button>

      </div>
      </div>
      </div>
    );
  }
}

export default Auth;
