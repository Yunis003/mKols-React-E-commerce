import React from 'react';
import newArrival from './newArrival.module.css'; 
import ps5 from './ps-5-slimm.svg'
import anothers from './anothers.svg'
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
                    <img src={ps5} alt="playstation5" />
                </div>
                <div className={newArrival.rightSide}>
                    <img src={anothers} alt="anothers-images" />
                </div>
            </div>
        </div>
    );
}

export default NewArrival;
