import React from 'react';
import './basket.css'
const Basket = () => {
  return (
    <div className="empty-wishlist">
      <h2>Your Wishlist is Empty</h2>
      <p>Add some items to your wishlist to start shopping!</p>
      <button className="btn">Browse Products</button> 
    </div>
  );
};

export default Basket;