import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Products = () => {
  return (
    <>
    <div>
      <ul>
        <li>
            <Link to={`/products/1`}>Product1</Link>
        </li>
        <li>
            <Link to={`/products/2`}>Product2</Link>
        </li>
        <li>
            <Link to={`/products/3`}>Product3</Link>
        </li>
        <li>
            <Link to={`/products/4`}>Product4</Link>
        </li>
      </ul>
    </div>

    <div id="detail">
        <Outlet/>
    </div>
    </>
  )
}

export default Products
