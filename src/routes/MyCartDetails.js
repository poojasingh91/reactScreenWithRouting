import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const MyCartDetails = () => {
    const { id } = useParams()
    const [cart, setCart] = useState({})

    useEffect(() => {
        async function fetchData() {
            {
                const response = await fetch(
                    `https://dummyjson.com/carts/${id}`
                )
                const jsonData = await response.json()
                setCart(jsonData)
            }
        }
        fetchData()
    }, [id])

    return (
        <div>
            {cart ? (
                <ul>
                    <h1>{cart.id}</h1>
                    <div>
                        {cart.products &&
                            cart.products.map((product) => {
                                return (
                                    <div>
                                        <h3>{product.title}</h3>
                                        <h4>
                                            {product.discountPercentage}
                                        </h4>{' '}
                                        <h4>{product.discountPrice}</h4>
                                    </div>
                                )
                            })}
                    </div>
                </ul>
            ) : (
                <p>Loading...</p>
            )}

            {/* {loading?(<p>Loading the data...</p>):(<ul>{data.map((item, index)=>{<li key={index}>{item.name}</li>})}</ul>)}  */}
        </div>
    )
}

export default MyCartDetails
