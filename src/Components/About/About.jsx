import React from 'react';
import about from './about.module.css'
import aboutImg from './aboutImg.svg'
import iconSale from './iconSale.svg'
import moneyBag from './moneyBag.svg'
import shopIcon from './shopIcon.svg'
import shoppingBag from './shoppingBag.svg'
import card1 from './card1.svg'
import card2 from './card2.svg'
import card3 from './card3.svg'
const About = () => {
    return (
        <div className={about.aboutContainer}>
            <div className={about.piarSection}>
            <div className={about.leftSide}>
                <h1>Our Story</h1>
                <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <div className={about.rightSide}>
                <img src={aboutImg} alt="about-photos" />
            </div>
            </div>

            <div className={about.salesSection}>
                
                <div className={about.cards}>
                                 <div className={about.grayEllipse}></div>
                                <img src={shopIcon} alt="shopping-bag" className={about.deliveryImg}/>
                                <div className={about.txts}>
                                <h2>10.5k</h2>
                                <span>Sallers active our site</span>
                                </div>
                            </div>
                            <div className={about.cards}>
                                <div className={about.grayEllipse}></div>
                                <img src={shopIcon} alt="quality" className={about.qualityImg} />
                                <div className={about.txts}>
                                <h2>33k</h2>
                                <span>Monthly Product Sale</span>
                                </div>
                        </div>
                        <div className={about.cards}>
                            <div className={about.grayEllipse}></div>
                            <img src={shopIcon} alt="secure"  className={about.secureImg} />
                            <div className={about.txts}>
                            <h2>45.5k</h2>
                            <span>Customer active in our site</span>
                            </div>
                        </div>
                        <div className={about.cards}>
                            <div className={about.grayEllipse}></div>
                            <img src={shopIcon} alt="secure"  className={about.secureImg} />
                            <div className={about.txts}>
                            <h2>25k</h2>
                            <span>Annual gross sale in our site</span>
                            </div>
                        </div>
            </div>

            <div className={about.leaders}>
                <img src={card1} alt="leader-card" />
                <img src={card2} alt='leader-card' />
                <img src={card3} alt='leader-card' />
            </div>
        </div>
    );
}

export default About;
