import React from 'react';
import serviceCss from './services.module.css'
import secure from './secure.svg'
import customer from './customer.svg'
import delivery from './delivery.svg'
const Customer = () => {
    return (
        <div className={serviceCss.servicesContainer}>
            <div className={serviceCss.freeDelivery}>
                 <div className={serviceCss.grayEllipse}></div>
                <img src={delivery} alt="delivery" className={serviceCss.deliveryImg}/>
                <div className={serviceCss.txts}>
                <h4>FREE AND FAST DELIVERY</h4>
                <span>Free delivery for all orders over $140</span>
                </div>
            </div>
            <div className={serviceCss.quality}>
                <div className={serviceCss.grayEllipse}></div>
                <img src={customer} alt="quality" className={serviceCss.qualityImg} />
                <div className={serviceCss.txts}>
                <h4>24/7 CUSTOMER SERVICE</h4>
                <span>Friendly 24/7 customer support</span>
                </div>
        </div>
        <div className={serviceCss.secure}>
            <div className={serviceCss.grayEllipse}></div>
            <img src={secure} alt="secure"  className={serviceCss.secureImg} />
            <div className={serviceCss.txts}>
            <h4>MONEY BACK GUARANTEE</h4>
            <span>We return money within 30 days</span>
            </div>
        </div>
    </div>
    );
}

export default Customer;
