import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/naira-nest-logo.png';

const Navbar = () => {
    //Add state to control navigation menu dropdown
    const [showInvestingDropdown, setShowInvestingDropdown] = useState(false);
    const [showLearnDropdown, setShowLearnDropdown] = useState(false);



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
            <li
                onMouseEnter = {() => setShowInvestingDropdown(true)}
                onMouseLeave = {() => setShowInvestingDropdown(false)}
            >Automated Investing
            {showInvestingDropdown && (
                <div className = 'dropdown-menu'>
                    <ul>
                        <li>Socially Responsible (SRI)</li>
                        <li>Retirement (IRAs)</li>
                        <li>College (529s)</li>
                        <li>Explore all investments</li>
                    </ul>
                </div>
            )}
            </li>
            <li
                onMouseEnter = {() => setShowLearnDropdown(true)}
                onMouseLeave = {() => setShowLearnDropdown(false)}
            >Learn
            {showLearnDropdown && (
                <div className = 'dropdown-menu'>
                    <ul>
                        <li>Socially Responsible (SRI)</li>
                        <li>Retirement (IRAs)</li>
                        <li>College (529s)</li>
                        <li>Explore all investments</li>
                    </ul>
                </div>
            )}
            </li>
        </ul>
        <div className='nav-login-get-started'>
            <button className='login-btn'>Login</button>
            <button className='get-started'>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar;
