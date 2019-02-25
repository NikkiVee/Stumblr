import React from 'react';
import '../css/Register.css'

const Register = ({ username, password, openForm, handleSignup, handleChange, signupDisplay }) => {
  return (
    <>

    { signupDisplay ?

      <form onSubmit={handleSignup}>
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
          className="inputbox"
          required
          value={password}
          name='password'
          type='password'
          placeholder="Password"
          onChange={handleChange}
        />
      </form>

      : null}

    </>
  );
}

export default Register;
