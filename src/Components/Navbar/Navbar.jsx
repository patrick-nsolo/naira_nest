import React from 'react';
import './Navbar.css';
import logo from '../Assets/naira-nest-logo.png';

const Navbar = () => {
  return (
    <div className = 'navbar'>
        <div className='nav-logo'>
            <img src = {logo} alt = ''/>
            <p>NAIRA NEST</p>
        </div>
        
      
    </div>
  )
}

export default Navbar;
