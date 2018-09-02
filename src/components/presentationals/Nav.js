import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
      <nav>
        <NavLink
            exact
            to='/'
            activeClassName='activatedLink'
        >
          Go Home
        </NavLink>
        <NavLink
            to='/todo-list'
            activeClassName='activatedLink'
        >Go
          Todo
          list</NavLink>
      </nav>
  )
}
export default Nav;