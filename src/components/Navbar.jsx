import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;

      li {
        list-style: none;

     

        .navbar-link {
        &:link,
        &:visited{
        display:inline-block;
        text-decoration:none;
        font-size:1.8rem;
        font-weight:500;
        text-transform:uppercase;
        list-style: none;
            color: ${({ theme }) => theme.colors.helper};
        transition:color 0.3s linear;
        }
      }
    }
  `;
  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/service">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              Contacr
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
