import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'

const Header = () => {
  return (
<header>
  <NavLink to="/">
    <img src="./images/logo.png" alt="logo"  />

  </NavLink>
  <Nav  />
</header>
  )
}

export default Header