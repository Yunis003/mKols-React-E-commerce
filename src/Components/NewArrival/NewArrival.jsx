import React from 'react';
import newArrival from './newarrival.module.css'; 
import ps5 from './ps-5-slimm.svg'
import anothers from './anothers.svg'
// import AllProducts from '../AllProducts/AllProducts';
// import Header from '../Header/Header';
import { NavLink } from 'react-router';
const NewArrival = () => {
    return (
        <div className={newArrival.newArrivalContainer}>
             <div className="uper">
                <div className="red"></div>
                <h3>Featured</h3>
            </div>
            <h1>New Arrival</h1>
            <div className={newArrival.boxes}>
                <div className={newArrival.leftSide}>
                    <NavLink to='/products'><img src={ps5} alt="playstation5" /></NavLink>
                </div>
                <div className={newArrival.rightSide}>
                    <NavLink to='/products'><img src={anothers} alt="anothers-images" /></NavLink>
                </div>
            </div>
        </div>
    );
}

export default NewArrival;
