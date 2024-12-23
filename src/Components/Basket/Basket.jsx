import React, { useEffect, useState } from 'react';
import './basket.css';

const Basket = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="wishlist">
      {favorites.length === 0 ? (
        <div className="empty-wishlist">
          <h2>Your Wishlist is Empty</h2>
          <p>Add some items to your wishlist to start shopping!</p>
          <button className="btn">Browse Products</button>
        </div>
      ) : (
        <div className="wishlist-items">
          {favorites.map((product, index) => (
            <h1>salam</h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default Basket;