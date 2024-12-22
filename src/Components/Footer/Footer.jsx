import React from 'react';
import footer from './footer.module.css'
import download from './download_app.svg'
const Footer = () => {
    return (
        <footer className={footer.footer}>
            <div className={footer.footer__container}>
                    <div className={footer.footer__element}>
                        <h3 className={footer.footer__title}>Exclusive</h3>
                        <div className={footer.footer__txts}>
                            <h4>Subscribe</h4>
                            <p>Get 10% off your first order</p>
                            <input type='email' placeholder='Enter your email'/>
                        </div>
                    </div>


                    <div className={footer.footer__element}>
                        <h3 className={footer.footer__title}>Support</h3>
                        <div className={footer.footer__txts}>
                            <p>Baku, City Zone Street 115</p>
                            <p>exclusive@gmail.com</p>
                            <p>+0000000000</p>
                        </div>
                    </div>

                    <div className={footer.footer__element}>
                        <h3 className={footer.footer__title}>Account</h3>
                        <div className={footer.footer__txts}>
                            <p><a href="#" className={footer.links}>My Account</a></p>
                            <p><a href="#" className={footer.links}>Login/Register</a></p>
                            <p><a href="#" className={footer.links}>Cart</a></p>
                            <p><a href="#" className={footer.links}>Shopping</a></p>
                        </div>
                    </div>

                    <div className={footer.footer__element}>
                        <h3 className={footer.footer__title}>Quick Link</h3>
                        <div className={footer.footer__txts}>
                            <p><a href="#" className={footer.links}>Contact Us</a></p>
                            <p><a href="#" className={footer.links}>Terms Of Use</a></p>
                        </div>
                    </div>

                    <div className={footer.footer__element}>
                        <h3 className={footer.footer__title}>Download App</h3>
                        <div className={footer.footer__txts}>
                            <img src={download} alt="download-link"/>
                        </div>
                    </div>


                </div>
        </footer>
    );
}

export default Footer;
