import React from 'react';
import '../css/Login.css'

const Login = ({ username, password, loginUser, handleChange, loginDisplay, openForm2, buttonDisplay }) => {
  return (
    <>


      <form onSubmit={loginUser}>
        <input
          required
          className="inputbox"
          value={username}
          name='username'
          type='text'
          placeholder="Username"
          onChange={handleChange}
        />
        <br/>
        <input
          required
          className="inputbox2"
          value={password}
          name='password'
          type='password'
          placeholder="Password"
          onChange={handleChange}
        />
        <br/>
        <button type="submit"
                className='button1'>Sign In</button>
      </form>


      <br/>
    </>
  );
};

export default Login;
