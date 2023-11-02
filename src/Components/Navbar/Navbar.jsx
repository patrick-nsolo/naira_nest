import React from 'react';
import './Navbar.css';
import logo from '../Assets/naira-nest-logo.png';

const Navbar = () => {
  return (
    <div className = 'navbar'>
        <div className='nav-logo'>
            <img src = {logo} alt = ''/>
            <p><span>NAIRA</span> NEST</p>
        </div>
        <ul>
            <li>Cash</li>
            <li>Bonds</li>
            <li>Stocks</li>
            <li></li>
        </ul>
      
    </div>
  )
}

export default Navbar;
