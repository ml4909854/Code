import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Login from "./components/Login";
import About from "./components/About";
import Contanct from "./components/Contanct";
import ProductDetal from "./components/ProductDetal";
import Navbar from "./Navbar/Navbar";
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetal />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contanct />} />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>page not found.</h1>} />
      </Routes>
    </div>
  );
};

export default App;
