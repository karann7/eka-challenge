import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <ul className='nav'>
      
      <li>
        <NavLink activeClassName='active' to='/register'>Register</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/cinfo'>Carrier Info</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/confirm'>Confirm Info</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/status'>Status</NavLink>
      </li>
    </ul>
  );
}

export default Nav;