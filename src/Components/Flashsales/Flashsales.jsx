import React, { useState, useEffect } from 'react';
import './flashsales.css';

const Flashsales = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        const countdownDate = new Date("Dec 30, 2024 19:23:00").getTime();

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
        fetch("https://api.escuelajs.co/api/v1/products?limit=200")
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter((product) => 
          product.category.name.toLowerCase() !== "makeup" 
        ).slice(15,20);
        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (loading) {
    return (
        <p>Please Wait..</p>
    );
  }


    return (
        <section className="sales-products">
            <div className="uper">
                <div className="red"></div>
                <h3>Today's</h3>
            </div>

            <div className="countdown">
                <h5>Flash Sales</h5>
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

                {/* <aside className="navigator">
                    <div className="left"> a </div>
                    <div className="righ"> s </div>
                </aside> */}
            </div>

            <div className="products-timer">


        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className='product'>
              <img
                src={product.images[0] || "https://via.placeholder.com/150"}
                alt={product.title} 
                className='product-image'
                />
                <div className="price-tag">
      <span className="tag-text">%</span>
    </div>
    <div className="add-to-card">
      <span>Add to card</span>
    </div>
              <h4 className='product-title'>
                {product.title}
              </h4>
              <div className="priced" style={{display:'flex', gap:'7px', alignItems:'center'}}>
              <p className='product-price' style={{color:'#FF1E56'}}>${product.price}</p>
              <del style={{color:'#9E9E9E', fontSize:'15px'}}>$160</del>
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

                <button className='view-all'>
                    View All
                </button>
                
        </section>
    );
}

export default Flashsales;
