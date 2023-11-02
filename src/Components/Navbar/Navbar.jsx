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
        <ul className='nav-menu'>
            <li>Cash</li>
            <li>Bonds</li>
            <li>Stocks</li>
            <li>Automated Investing</li>
            <li>Learn</li>
        </ul>
        <div className='nav-login-get-started'>
            <button className='login-btn'>Login</button>
            <button className='get-started'>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar;
