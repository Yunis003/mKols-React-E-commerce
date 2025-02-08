import React, { useState, useEffect } from 'react';
import './flashsales.css';
import {Routes, Route, NavLink} from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import AllProducts from '../AllProducts/AllProducts';
import Header from '../Header/Header';

const Flashsales = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const countdownDate = new Date("Jun 30, 2025 19:23:00").getTime();

    const countdownFunction = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = countdownDate - now;

      if (timeDifference < 0) {
        clearInterval(countdownFunction);
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days < 10 ? '0' + days : days.toString(),
          hours: hours < 10 ? '0' + hours : hours.toString(),
          minutes: minutes < 10 ? '0' + minutes : minutes.toString(),
          seconds: seconds < 10 ? '0' + seconds : seconds.toString(),
        });
      }
    }, 1000);

    return () => clearInterval(countdownFunction);
  }, []);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?products")
      .then((response) => response.json())
      .then((data) => {
        //! fake store let filteredProducts = data.slice(16,21)
        let filteredProducts = data.products.filter(product => product.category === 'fragrances').slice(1,5);
        // let filteredProducts = data.slice(0, 4);
        
        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const [showMessage, setShowMessage] = useState(false);

  const handleAddToFavorite = (product) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(product);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setShowMessage(true);
    console.log('Product added to favorites:', product);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  
  if (loading) {
    return (
      <>
        <ClipLoader color="#36d7b7" size={50} />
        <p>Loading...</p>
      </>
    );
  }

  return (
    <section className="sales-products">
      <div className="uper">
        <div className="red"></div>
        <h3>Today's</h3>
      </div>

      <div className="countdown">
        <h3>Flash Sales</h3>
        <div className="timeAll">
        <div className="lefter">
          <span className="number" id="days">{timeLeft.days}</span>
        </div>
        <span className="separator">:</span>
        <div>
          <span className="number" id="hours">{timeLeft.hours}</span>
        </div>
        <span className="separator">:</span>
        <div>
          <span className="number" id="minutes">{timeLeft.minutes}</span>
        </div>
        <span className="separator">:</span>
        <div>
          <span className="number" id="seconds">{timeLeft.seconds}</span>
        </div>
        </div>
      </div>

      <div className="products-timer">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className='product'>
              <NavLink to={`/product/${product.id}`}>
              <img
                src={product.images[0] || "https://i.imgur.com/4lTaHfF.jpeg"}
                alt={product.title}
                className='product-image'
              />
              </NavLink>
              <div className="price-tag">
                <span className="tag-text">%</span>
              </div>
              <div className="add-to-card">
                <span onClick={() => handleAddToFavorite(product)}>Add to card</span>
              </div>
              <h4 className='product-title'>{product.title}</h4>
              <div className="priced" style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                <p className='product-price' style={{ color: '#FF1E56' }}>${product.price}</p>
                <del style={{ color: '#9E9E9E', fontSize: '15px' }}>${(product.price * 1.2).toFixed(2)}</del>
              </div>
              <i className='product-sold-times'>Exclusive Deal Just for You!</i>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>

      <button className='view-all'>
        <NavLink to='/products'>View All</NavLink>
      </button>
      {showMessage && (
        <div
          style={{
            padding: "8px",
            backgroundColor: "#ff003c",
            borderRadius: "4px",
            position: "absolute",
            left: "40%",
            color: "#fff",
          }}
        >
          ✅ Product added to your favorites list!
        </div>
      )}
     
    </section>

  );
}

export default Flashsales;
