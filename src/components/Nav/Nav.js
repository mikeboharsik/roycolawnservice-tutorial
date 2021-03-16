import React from 'react';

import { NavLink as Link } from 'react-router-dom';
import './Nav.css';

const Nav = props => {
  return (
    <div id='nav-container'>
      <h1 style={{ textAlign: 'center' }}>RoyCo Lawn Service</h1>
      <div id='nav-items-container'>
        <div><Link to={'/services'} activeClassName="nav-item-active">Services</Link></div>
        <div><Link to={'/contact'} activeClassName="nav-item-active">Contact</Link></div>
        <div><Link to={'/about'} activeClassName="nav-item-active">About</Link></div>
      </div>
      <hr style={{ border: '1px solid gray', marginTop: '1em', width: '100%' }} />
    </div>
  );
};

export default Nav;