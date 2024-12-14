import React from 'react';
import './header.css'
import Logo from './Logo.svg'
const Header = () => {
    return (
        <header>
        <div className="logo-side">
            <img src={Logo} alt="logo" className='logo'/>
            <span>  </span>
        </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sign Up</li>
            </ul>
        </nav>
        <div className="interaction">
            <input type="text" placeholder="What are you looking for?"/>
            <div className="lists">
                <i className="fa-thin fa-heart"></i>
                <i className="fa-thin fa-store"></i>
            </div>
        </div>
    </header>
    )
}

export default Header;
