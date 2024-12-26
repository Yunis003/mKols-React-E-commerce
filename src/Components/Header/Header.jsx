import React, { useState } from 'react';
import './header.css';
import Logo from './logo.svg';
import Main from '../MainAll/Main';
import Contact from '../Contact/Contact';
import About from '../About/About';
import AllProducts from '../AllProducts/AllProducts';
import SignUp from '../SignUp/SignUp';
import Basket from '../Basket/Basket';
import { Link, NavLink, Route, Routes } from 'react-router';
//! Product Detail
import ProductDetail from '../ProductDetail/ProductDetail';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header>
                <div className="logo-side">
                    <img src={Logo} alt="logo" className='logo' />
                    <span>  </span>
                </div>
                <nav className={menuOpen ? 'open' : ''}>
                    <ul>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/products'>Products</NavLink>
                    </ul>
                </nav>
                <div className="interaction">
                    <NavLink to='/signup'><i className="fa-solid fa-user" style={{ color: '#141414' }}></i></NavLink>
                    <div className="lists">
                        {/* <NavLink><i className="fa-solid fa-store" style={{ color: '#000000' }}></i></NavLink> */}
                        <NavLink to='/basket'><i className="fa-regular fa-heart" style={{ color: '#ff0000' }}></i></NavLink>
                    </div>
                </div>
                <div className="burger-menu" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path='/products' element={<AllProducts />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
                <Route path='/basket' element={<Basket />}></Route>
                //! Product Detail
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </>
    );
};

export default Header;
