import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Navbar.css';

let homeIcon = require('./white_home.png')

export const Navbar = (props) => {
  return(
    <>

      <nav className="navbar">

        <NavLink to={"/"} className="navlink">s</NavLink>

        <input className="search_query"
               type="text"
               value=""
               name="search" placeholder="Search Stumblr"
               onChange={props.handleChange}/>

      </nav>
    </>
  )
}
