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
      buttonDisplay: true,
      buttonDisplay2: true,
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
      [e.target.name]: true,
    });
    this.handleButtonDisplay();
  };

  openForm2 = (e) => {
    this.setState({
      [e.target.name]: true,
    });
    this.handleButtonDisplay2();
  };

  closeForm = (e) => {
    this.setState({
      [e.target.name]: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleButtonDisplay = (e) => {
      this.setState((prevState) => {
        return {
          buttonDisplay: !prevState.buttonDisplay,
        };
      });
    };

  handleButtonDisplay2 = (e) => {
      this.setState((prevState) => {
        return {
          buttonDisplay2: !prevState.buttonDisplay2,
        };
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
          openForm={this.openForm}
          handleSignup={this.handleSignup}
          handleChange={this.handleChange}/>
        <button
          className={this.state.buttonDisplay2 ? 'button1' : 'cornerbutton2'}
          name="signupDisplay"
          onClick={this.openForm}>Get Started
        </button>
        <br/>
        <br/>
      <Login
        username={this.state.username}
        password={this.state.password}
        loginDisplay={this.state.loginDisplay}
        openForm2={this.openForm2}
        handleLogin={this.handleLogin}
        handleChange={this.handleChange}/>
      <button
        className={this.state.buttonDisplay ? 'button2' : 'cornerbutton1'}
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
