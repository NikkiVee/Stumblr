import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Navbar.css';

let homeIcon = require('./white_home.png')

export const Navbar = () => {
  return(
    <>
      <nav className="navbar">
        <NavLink to={"/"} className="navlink">s</NavLink>

        <input type="text" name="search" placeholder="Search Stumblr" value="" className="search_query"/>

      </nav>
    </>
  )
}
