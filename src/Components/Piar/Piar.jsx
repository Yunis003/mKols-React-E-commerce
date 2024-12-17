import React from 'react';
import './piar.css';
import decoraction from './1.svg';
import hat from './hat.svg'
import ball from './ball.svg'
import sugarcane from './sugarcane.svg'
import light from './light.png'
const Piar = () => {
    return (
     <section className="piar">
        <img src={decoraction} alt="decor" />
        <img src={light} alt="light" className='decor1 lighter' />
        
      
        <h1 className='txt_main'>Split the discounted price up to 24 months</h1>
        <span className='between-time'>December 27 - December 29</span>

        <img src={sugarcane} alt="sugarcane" className='sugarcane decor1' />
        <img src={ball} alt="ball" className='ball decor2' />
        <img src={hat} alt="hat" className='hat decor3' />
        <img src={decoraction} alt="decor" />

        </section>   
    )
}

export default Piar;
