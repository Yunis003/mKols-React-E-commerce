import React from 'react';
import './browsecategory.css';
import phone from './img/Category-CellPhone.svg';
import computer from './img/Category-Computer.svg';
import smartwatch from './img/Category-SmartWatch.svg';
import camera from './img/Category-Camera.jpg';
import headphone from './img/Category-Headphone.svg';
import gaming from './img/Category-Gamepad.jpg';
import { NavLink } from 'react-router';
import AllProducts from '../AllProducts/AllProducts';
import Header from '../Header/Header';
const BrowseCategory = () => {
    return (
        <div className='browseContainer'>
             <div className="uper">
                <div className="red"></div>
                <h3>Categories</h3>
            </div>

            <div className="belowCategory">
               <h1>Browse By Category</h1>
               <div className="mainCategory">
                    
                        <NavLink to='/products' className='categories'>
                        <img src={phone} alt='phone-img' />
                        <span>Phones</span>
                        </NavLink>
                    
                    
                        <NavLink to='/products' className='categories'>
                        <img src={computer} alt='computers-img' />
                        <span>Computers</span>
                        </NavLink>
                    
                    
                        <NavLink to='/products' className='categories'>
                        <img src={smartwatch} alt='smartwatch-img' />
                        <span>SmartWatch</span>
                        </NavLink>
                    
                    
                        <NavLink to='/products' className='categories'>
                        <img src={camera} alt='camera-img' />
                        <span>Camera</span>
                        </NavLink>
                    
                   
                        <NavLink to='/products' className='categories'>
                        <img src={headphone} alt='headphone-img' />
                        <span>HeadPhones</span>
                        </NavLink>
                    
                    
                        <NavLink to='/products' className='categories'>
                        <img src={gaming} alt='gamingpad-img' />
                        <span>Gaming</span>
                        </NavLink>
                    
                </div> 
            </div>
        </div>
    );
}

export default BrowseCategory;
