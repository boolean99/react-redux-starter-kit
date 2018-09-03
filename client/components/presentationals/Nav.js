import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink).attrs({
  to: ({ to }) => to,
  activeClassName: 'activatedLink',
  exact: ({ exact }) => exact
})`
  text-decoration: none;
  color: #222;
  width: 50%;
  text-align: center;
  display: inline-block;
  
  &.activatedLink {
    opacity: 0.4;
  }
`

const Nav = () => {
  return (
      <nav>
        <StyledNavLink
            to='/'
            exact
        >
          Go Home
        </StyledNavLink>
        <StyledNavLink
            to="/todo-list"
        >
          Go NavList
        </StyledNavLink>
      </nav>
  )
}

export default Nav;