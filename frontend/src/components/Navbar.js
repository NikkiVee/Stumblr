import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Navbar.css';

let logo = require('./logo_white.png')
let homeIcon = require('./white_home.png')

export const Navbar = () => {
  return(
    <>
      <nav className="navbar">
        <NavLink to={"/"}><img className="logo" src={logo} alt=""/></NavLink>

        <input type="text" name="search" placeholder="Search Stumblr" value="" className="search_query"/>

      </nav>
    </>
  )
}
