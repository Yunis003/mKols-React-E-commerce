import React, { useState, useEffect } from 'react';
import './category.css';
import image1 from './nikeair.jpg';
import image2 from './16pro.png';
import image3 from './ps.png'; 

const images = [image1, image2];

const Category = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
                setFade(true);
            }, 100); 
        }, 5000); 
        return () => clearInterval(interval);
    }, []);

    const displayedImage = [image1, image2, image3][currentIndex];

    return (
        <section className="show">
            <section className="navigate-store">
                <ul>
                    <i>Woman's Fashion</i>
                    <i>Men's Fashion</i>
                    <i>Electronics</i>
                    <i>Home & Lifestyle</i>
                    <i>Medicine</i>
                    <i>Sports & Outdoor</i>
                    <i>Baby's & Toys</i>
                    <i>Groceries & Pets</i>
                    <i>Health & Beauty</i>
                </ul>
            </section>
            <aside className="carousel" style={{overflow: 'hidden'}}>
                <img
                    src={displayedImage}
                    alt="carousel"
                    className={`carousel-image ${fade ? 'fade-in' : 'fade-out'}`}
                />
            </aside>
        </section>
    );
}

export default Category;
