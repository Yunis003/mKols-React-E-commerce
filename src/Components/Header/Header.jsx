import React from 'react';
import './header.css';
import Logo from './siteLogo.svg';
import Main from '../MainAll/Main';
import Contact from '../Contact/Contact';
import About from '../About/About';
import AllProducts from '../AllProducts/AllProducts';
import SignUp from '../SignUp/SignUp';
import Basket from '../Basket/Basket';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
//! Product Detail
import ProductDetail from '../ProductDetail/ProductDetail';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

   
    const navUl2Ref = document.querySelector('.burger-menu-nav');

    
    return (
        <>
            <header>
                <div className="logo-side">
                    <img src={Logo} alt="logo" className='logo' />
                    <span>  </span>
                </div>
                <nav className='nav-side'>
                    <ul>
                    <NavLink to='/'>Home</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/products'>Products</NavLink>
                    </ul>
                </nav>
                <div className={menuOpen ?  'activate' :'burger-menu-nav'}>
                        
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                       <NavLink to='/about'>About</NavLink>
                        <NavLink to='/products'>Products</NavLink>
                
                </div>
                <div className="interaction">
                    <NavLink to='/signup'><i className="fa-solid fa-user" style={{ color: '#141414' }}></i></NavLink>
                    <div className="lists">
                        {/* <NavLink><i className="fa-solid fa-store" style={{ color: '#000000' }}></i></NavLink> */}
                        <NavLink to='/basket'><i className="fa-regular fa-heart" style={{ color: '#ff0000' }}></i></NavLink>
                    </div>
                </div>
                <div className="burger-menu" >
                    {/* <i className="fa-solid fa-bars" onClick={() => { navUl2Ref.classList.toggle('active'); }}></i> */}
                    <i className="fa-solid fa-bars" onClick={()=> toggleMenu()}></i>

                </div>
            </header>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path='/products' element={<AllProducts />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
                <Route path='/basket' element={<Basket />}></Route>
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </>
    );
};

export default Header;