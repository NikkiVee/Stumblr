import React from 'react';
import '../css/Register.css'

const Register = ({ username, password, openForm, registerUser, handleChange, signupDisplay, buttonDisplay }) => {
  return (
    <>

      <form onSubmit={registerUser}>
        <input
          required
          className='inputbox'
          value={username}
          name='username'
          type='text'
          placeholder='Username'
          onChange={handleChange}
        />
        <br/>
        <input
          required
          className='inputbox2'
          value={password}
          name='password'
          type='password'
          placeholder='Password'
          onChange={handleChange}
        />
        <br/>
        <button type='submit'
                className='button1'>Sign Up
        </button>
      </form>

    </>
  );
}

export default Register;
