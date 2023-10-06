import React from 'react'
import { Outlet, Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const Products = () => {
    const [products,setProducts]=useState([]);
    // const[loading,setLoading]=useState(true);

  useEffect(()=>{
    async function fetchData(){
      {
        const response=await fetch(`https://dummyjson.com/products`);
        const jsonData=await response.json();
        console.log(jsonData);
        setProducts(jsonData.products);
        // setLoading(false);
      }
    //   catch(error){
    //     console.error('Error fetching data:',error);
    //     setLoading(false);
    //   }
    }
    fetchData();
  }, []);

  
  return (
    <>
    <div>
        <h2>Product List</h2>
      <ul>
        {products.map((product)=>{
            return (
            <div key={product.id}>
                <Link to={`${product.id}`}>{product.title}</Link>
            </div>)
            })
        }
      </ul>
    </div>

    <div id="detail">
        <Outlet/>
    </div>
    </>
  )
}

export default Products
