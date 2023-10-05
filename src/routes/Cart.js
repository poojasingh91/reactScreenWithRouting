import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to={`/cart/1`}>Cart1</Link>
        </li>
        <li>
            <Link to={`/cart/2`}>Cart2</Link>
        </li>
        <li>
            <Link to={`/cart/3`}>Cart3</Link>
        </li>
        <li>
            <Link to={`/cart/4`}>Cart4</Link>
        </li>
      </ul>
    </div>
  )
}

export default Cart
