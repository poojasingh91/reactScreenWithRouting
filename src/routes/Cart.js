import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const Cart = () => {
    const [carts,setCarts]=useState([]);

  useEffect(()=>{
    async function fetchData(){
      {
        const response=await fetch(`https://dummyjson.com/carts`);
        const jsonData=await response.json();
        console.log(jsonData);
        setCarts(jsonData.carts);
      }
    }
    fetchData();
  }, []);
  return (
    <>
    <div>
        <h2>Number of Carts</h2>
        {carts.map((cart)=>{
            return <div>
                <Link to={`${cart.id}`}>{cart.total}</Link>
            </div>
        })}
      <ul>
      </ul>
    </div>
    <div id="detail">
        <Outlet/>
    </div>
    </>
  )
}

export default Cart
