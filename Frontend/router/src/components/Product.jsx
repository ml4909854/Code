import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  async function fetchData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        padding: '20px',
      }}
    >
      {product.map((product) => (
        <div
          key={product.id}
          onClick={() => navigate(`/product/${product.id}`)} // ✅ fixed
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            cursor: 'pointer' // 👈 optional, makes it feel clickable
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: '150px', height: '150px', objectFit: 'contain' }}
          />
          <h4 style={{ margin: '10px 0', color: '#333' }}>{product.title.slice(0, 30)}...</h4>
          <p style={{ margin: '8px 0', color: 'green', fontWeight: 'bold' }}>₹{product.price}</p>
          <p style={{ color: '#777', fontStyle: 'italic' }}>{product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
