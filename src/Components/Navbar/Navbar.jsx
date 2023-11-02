import React from 'react';
import './Navbar.css';
import logo from '../Assets/naira-nest-logo.png';

const Navbar = () => {
  return (
    <div className = 'navbar'>
        <img src = {logo} alt = ''/>
        <p>NAIRA NEST</p>
      
    </div>
  )
}

export default Navbar;
