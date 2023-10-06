import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Cart from './Cart';
const MyProductDetails = () => {
  const {id}=useParams();
  const[product, setProduct]=useState([])

  useEffect(()=>{
    async function fetchData(){
      {
        const response=await fetch(`https://dummyjson.com/products/${id}`);
        const jsonData=await response.json();
        setProduct(jsonData);
        // setLoading(false);
      }
      // catch(error){
      //   console.error('Error fetching data:',error);
      //   setLoading(false);
      // }
    }
    fetchData();
  }, [id]);

  return (
    <div>
      {product?(<ul><h3>{product.title}</h3><img src={product.thumbnail} style={{height:400, width:400}} alt="{product.title}"/><p>{product.description}</p></ul>):(<p>Loading...</p>)}
      {/* {cart?(<ul>{cart.name}</ul>):(<p>Loading...</p>)} */}

{/* {loading?(<p>Loading the data...</p>):(<ul>{data.map((item, index)=>{<li key={index}>{item.name}</li>})}</ul>)}  */}

    </div>
  )
}

export default MyProductDetails


