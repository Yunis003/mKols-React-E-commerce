import React from 'react';
import './header.css'
import Logo from './logo.svg'
import Main from '../MainAll/Main';
import Contact from '../Contact/Contact';
import About from '../About/About';
import SignUp from '../SignUp/SignUp';
import { Link, NavLink, Route, Routes } from 'react-router';
const Header = () => {
    return (
        <>
        <header>
        <div className="logo-side">
            <img src={Logo} alt="logo" className='logo'/>
            <span>  </span>
        </div>
        <nav>
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/signup'>Sign Up</NavLink>
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
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path='/signup' element={<SignUp/>}></Route>
</Routes>
</>
    )
}

export default Header;
