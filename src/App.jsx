import React from 'react';
import './App.css'
import Category from './Components/Category/Category';
import Header from './Components/Header/Header';
import Flashsales from './Components/Flashsales/Flashsales';
import Piar from './Components/Piar/Piar';
import BrowseCategory from './Components/BrowseCategory/BrowseCategory';
import BestSellingProducts from './Components/BestSellingProducts/BestSellingProducts';
import Marketing from './Components/Marketing/Marketing';
import NewArrival from './Components/NewArrival/NewArrival';
// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch products from the API with a high limit
//     fetch("https://api.escuelajs.co/api/v1/products?limit=200")
//       .then((response) => response.json())
//       .then((data) => {
//         // Keep a variety of products, remove duplicates
//         const filteredProducts = data.filter((product) => 
//           product.category.name.toLowerCase() !== "makeup" // Exclude makeup
//         ).slice(0,28);
//         setProducts(filteredProducts);
//         setLoading(false);
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   if (loading) {
//     return <p>Loading products...</p>;
//   }

//   return (
//     <div>
//       <h1>Products</h1>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div
//               key={product.id}
//               style={{
//                 border: "1px solid #ddd",
//                 borderRadius: "8px",
//                 padding: "16px",
//                 maxWidth: "200px",
//               }}
//             >
//               <img
//                 src={product.images[0] || "https://via.placeholder.com/150"}
//                 alt={product.title}
//                 style={{ width: "100%", borderRadius: "8px" }}
//               />
//               <h3 style={{ fontSize: "16px", margin: "8px 0" }}>
//                 {product.title}
//               </h3>
//               <p style={{ fontSize: "14px", color: "#555" }}>${product.price}</p>
//               <p style={{ fontSize: "12px", color: "#888" }}>
//                 Category: {product.category.name}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>No products available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

export default function App(){
  return(
    <div className='mainContainer'>
      <Piar/>
      <Header/>
      <Category/>
      <Flashsales/>
      <BrowseCategory/>
      <BestSellingProducts/>
      <Marketing/>
      <NewArrival/>
    </div>
  
  )
}
