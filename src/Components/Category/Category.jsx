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
                    <li>Woman's Fashion</li>
                    <li>Men's Fashion</li>
                    <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby's & Toys</li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li>
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
