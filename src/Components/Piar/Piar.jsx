import React from 'react';
import './piar.css';
import decoraction from './1.svg';
const Piar = () => {
    return (
     <section className="piar">
        <img src={decoraction} alt="decor" />
        <img src={decoraction} alt="decor" className='decor' />
        <img src={decoraction} alt="decor" className='decor' />
        <h1>Big sales around 26-29 December!</h1>
        <img src={decoraction} alt="decor" className='decor' />
        <img src={decoraction} alt="decor" className='decor' />
        <img src={decoraction} alt="decor" />

        </section>   
    )
}

export default Piar;
