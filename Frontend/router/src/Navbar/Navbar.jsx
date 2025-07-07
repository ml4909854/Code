import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav style={{display:"flex" , textDecoration:"none" , fontSize:"30px" , gap:"30px"}}>
        <Link to={"/"} >Home</Link>
        <Link to={"/product"} >Product</Link>
        <Link to={"/about"} >About</Link>
        <Link to={"/contact"} >contact</Link>
        <Link to={"/login"} >Login</Link>
    </nav>
    </>
  )
}

export default Navbar