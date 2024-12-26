import React, { useEffect, useState } from "react";
import allproducts from "./allproducts.module.css";
import ClipLoader from 'react-spinners/ClipLoader';

export default function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  useEffect(() => {
    
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));


    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(["all", ...data]);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);


  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);


  const toggleDescription = (id) => {
    setExpandedDescriptions((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };


  if (loading) {
    return (
      <>
      <ClipLoader color="#36d7b7" size={100} />
        <p>Please Wait...</p>
        </>
    )
  }

  return (
    <div className={allproducts.container}>

      <aside className={allproducts.sidebar}>
        <h3>Categories</h3>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={
                selectedCategory === category
                  ? allproducts.activeCategory
                  : ""
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      <main className={allproducts.productGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className={allproducts.product}>
              <img
                src={product.image || "https://via.placeholder.com/150"}
                alt={product.title}
                className={allproducts.image}
              />
              <div className={allproducts.addToCard}>
                <span>Add to Cart</span>
              </div>
              <div className={allproducts.productDetails}>
                <h4 className={allproducts.productTitle}>{product.title}</h4>
                <p
                  className={allproducts.productDescription}
                  onClick={() => toggleDescription(product.id)}
                >
                  {expandedDescriptions[product.id]
                    ? product.description
                    : `${product.description.substring(0, 50)}...`}
                </p>
                <p className={allproducts.productPrice}>${product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </main>
    </div>
  );
}
