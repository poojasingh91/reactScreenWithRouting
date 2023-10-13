import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Card } from '@mui/material'
import { removeFromCart } from './cartSlice'
import { useSelector, useDispatch } from 'react-redux'
const Carts = () => {
    const [carts, setCarts] = useState([])
    const mycart = useSelector((state) => state.cart.cartArray)
    const dispatch = useDispatch()
    function removeProduct(prod) {
        dispatch(removeFromCart(prod))
    }
    useEffect(() => {
        async function fetchData() {
            {
                const response = await fetch(`https://dummyjson.com/carts`)
                const jsonData = await response.json()
                console.log(jsonData)
                setCarts(jsonData.carts)
            }
        }
        fetchData()
    }, [])
    return (
        <>
            <div>
                <h2 style={{ alignItems: 'center' }}>
                    Number of Carts ({mycart.length})
                </h2>
                {mycart.map((cart) => {
                    return (
                        <div key={cart.id}>
                            <Link to={`${cart.id}`}>
                                <Card variant="outlined">
                                    <p>{cart.title}</p>
                                    {
                                        <img
                                            src={cart.thumbnail}
                                            alt={cart.title}
                                            style={{
                                                height: 150,
                                                width: 150,
                                                padding: 10,
                                            }}
                                        />
                                    }
                                </Card>
                            </Link>
                            <button
                                onClick={() => {
                                    removeFromCart(cart)
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    )
                })}
                <ul></ul>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}

export default Carts
