import React from 'react';
import '../css/Login.css'

const Login = ({ username, password, handleLogin, handleChange, loginDisplay }) => {
  return (
    <>

    { loginDisplay ?

      <form onSubmit={handleLogin}>
        <input
          className="inputbox"
          required
          value={username}
          name='username'
          type='text'
          placeholder="Username"
          onChange={handleChange}
        />
        <br/>
        <input
          className="inputbox2"
          required
          value={password}
          name='password'
          type='password'
          placeholder="Password"
          onChange={handleChange}
        />
      </form>

      : null}
      <br/>
    </>
  );
};

export default Login;
