import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id='sidebar'>
        <ul>
            <li>
                <Link to={`/products`}>Products</Link>
            </li>
            <li>
                <Link to={`/cart`}>Carts</Link>
            </li>
        </ul>
      
    </div>
  )
}

export default Navbar
