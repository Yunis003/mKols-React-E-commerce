import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <section className="info-tab">
        <div className="info">
            <div className="tab">
                <h1>Contact us</h1>
                <p>Feel free to reach out to us if you have any questions!</p>
            </div>
            <p><i className="fa-thin fa-location-dot"></i> 10090 Main St, Fairfax, VA 22031</p>
            <div className="bot">
                <button>info@koolcoders.io</button>
                <button> +1 (202) 935-9336</button>
            </div>
        </div>
        <div className="map">
            
        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d97140.40187884156!2d49.66715053356086!3d40.46115824451016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x4030854767ac99ed%3A0x10911031a441f086!2zRlA2WCtGUkYsIFjEsXJkYWxhbg!3m2!1d40.4611863!2d49.749549099999996!5e0!3m2!1str!2saz!4v1734952251686!5m2!1str!2saz" style={{border:0, width:"800px", height:"450px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}
