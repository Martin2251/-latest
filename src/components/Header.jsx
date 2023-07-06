import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'
import styled from "styled-components"

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

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 30%;
  }
`;
`

export default Header