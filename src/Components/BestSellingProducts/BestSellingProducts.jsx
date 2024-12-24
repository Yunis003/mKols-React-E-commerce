import React from 'react'
import { useEffect, useState } from 'react'
import './bestsellingproducts.css'
export default function BestSellingProducts() {
    const [bestProducts, setBestProducts] = useState([]);
    const [loading2, setLoading2] = useState(true);
    const [randomTxt, setRandomTxt] = useState('Mid Price', 'High Price', 'Low Price')
    useEffect(() => {
        fetch("https://dummyjson.com/products?products")
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts2 = data.products.filter(product => 
          product.category === 'furniture' || product.category === 'electronics'
        ).slice(0,4);
        setBestProducts(filteredProducts2);
        setLoading2(false);
        console.log(bestProducts)
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (loading2) {
    return <p>Loading products...</p>;
}

    return(
        <div className='bestSellingProducts'>
            <div className="uper">
                <div className="red"></div>
                <h3>This Month</h3>
            </div>
            <h1>Best Selling Products</h1>
            <div className="bestProducts">
            {bestProducts.length > 0 ? (
          bestProducts.map((product) => (
            <div key={product.id} className='product'>
              <img
                src={product.images[0] || "https://via.placeholder.com/150"}
                alt={product.title} 
                className='product-image2'
                />
    <div className="add-to-card">
      <span onClick={()=>{
        handleAddToFavorite()
      }}>Add to card</span>
    </div>
              <h4 className='product-title'>
                {product.title}
              </h4>
              <div className="priced" style={{display:'flex', gap:'7px', alignItems:'center'}}>
              <p className='product-price' style={{color:'black'}}>${product.price} <sup style={{fontSize: "10px"}}><i style={{color:'#ff003c'}}>  {Math.random()*10 > 5 ? 'Mid Price' : Math.random()*10 > 2 ? 'Low Price' : 'High Price'} </i></sup></p>
              
              </div>
              <i className='product-sold-times'>
               50+ units were sold in 24 hours
              </i>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}

            </div>
        </div>
    )
}
