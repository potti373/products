import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const result = await fetch("https://fakestoreapi.com/products");
    const myresult = await result.json();
    setData(myresult);
  }

  useEffect(() => {
    fetchData();
  }, []); // ✅ added [] dependency to prevent infinite re-fetching

  return (
    <div id="main">
      <h1 id="title">🛒 Flipkart Style Store</h1>
      <div id="product-container">
        {data.map((item) => (
          <div id="product-card" key={item.id}>
            <img id="product-image" src={item.image} alt={item.title} />
            <h3 id="product-name">{item.title}</h3>
            <h1>{item.id}</h1>
            <p id="product-price">₹{(item.price * 80).toFixed(2)}</p>
            <button id="buy-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App; 