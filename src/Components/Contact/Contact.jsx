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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97186.65974112946!2d49.8466816!3d40.4291584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d40a035a6bd%3A0xa8c2cbf267a83fbd!2zSGV5ZMmZciDGj2xpeWV2IE3JmXJryZl6aQ!5e0!3m2!1str!2saz!4v1709803344265!5m2!1str!2saz" width="660" height="450" style="border:1px solid rgb(175, 175, 175); border-radius:10px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}
