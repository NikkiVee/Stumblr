import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Navbar.css';

let logo = require('./logo_blue.png')

export const Navbar = () => {
  console.log(logo)
  return(
    <>
      <nav className="navbar">
        <NavLink to={"/"}><img className="logo" src={logo}/></NavLink>

        <input type="text" name="search" placeholder="Search Tumblr" value="" className="search_query"/>
      </nav>
    </>
  )
}
