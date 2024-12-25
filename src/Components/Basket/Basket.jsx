import React, { useEffect, useState } from "react";
import "./basket.css";

const Basket = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Calculate the total price of all items in the favorites
  const totalPrice = favorites.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="wishlist-container">
      {favorites.length === 0 ? (
        <div className="empty-wishlist">
          <h2>Your Wishlist is Empty</h2>
          <p>Add some items to your wishlist to start shopping!</p>
          <button className="btn">Browse Products</button>
        </div>
      ) : (
        <div className="wishlist-content">
          {/* Wishlist items */}
          <div className="wishlist-items">
            {favorites.map((product, index) => (
              <div key={index} className="wishlist-item">
                <img src={product.images[0]} alt={product.title} />
                <div className="wishlist-item-info">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="wishlist-summary">
            <h2>Summary</h2>
            <p>Total Items: {favorites.length}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button className="btn checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
