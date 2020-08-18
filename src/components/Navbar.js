import React, { useEffect } from 'react'

import logo from '../assets/streamy-logo.png';
import avatar from '../assets/avatar.png';
import './Navbar.css';


function Navbar() {

  useEffect(()=> { 
    
  })

  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="logo" />
      <div className='navbar-space' />
      <img className='navbar-avatar' src={avatar} alt="avatar" />
    </div>
  );
}

export default Navbar
