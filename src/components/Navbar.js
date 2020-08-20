import React, { useEffect,useState } from 'react'

import logo from '../assets/streamy-logo.png';
import avatar from '../assets/avatar.png';
import tmdb from '../assets/TMDB_logo.svg';

import './Navbar.css';


function Navbar() {
  const [show,handleShow] = useState(false);

  useEffect(()=> { 
     window.addEventListener('scroll', () => {
      if(window.scrollY > 5) {
        handleShow(true);
      } else handleShow(false)
     });
      return () => {
      window.addEventListener('scroll');
      };
  },[])

  return (
    <div className={`navbar ${show && 'navbar-dark'}`}>
      <img className="navbar-logo" src={logo} alt="logo" />
      <div className='navbar-space' />
      <img className='navbar-tmdb' src={tmdb} alt="tmdb"/>
      <img className='navbar-avatar' src={avatar} alt="avatar" />
    </div>
  );
}

export default Navbar
