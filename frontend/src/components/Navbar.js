import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Navbar.css';

let question = require('./question.png')

export const Navbar = (props) => {
  console.log("HELLO", props)
  const { isLoggedIn, logoutUser } = props

  return(
    <>
        {isLoggedIn ?
          <nav className="navbar">

            <NavLink to="/" className="navlink">s</NavLink>

            <input className="search_query"
                   type="text"
                   value=""
                   name="search" placeholder="Search Stumblr"
                   onChange={props.handleChange}/>

           <NavLink to="/user/id">
            <img src={question} alt="" className="profileIcon"/>
           </NavLink>

            <button onClick={logoutUser}
                    className="logout">Log out
            </button>

          </nav>
          :
          <nav className="navbar">

            <NavLink to={"/"} className="navlink">s</NavLink>

            <input className="search_query"
                   type="text"
                   value=""
                   name="search"
                   placeholder="Search Stumblr"
                   onChange={props.handleChange}/>
          </nav>
          }
    </>
  )
}

//how are we going to get the specific user
//Route for profile of logged in user
