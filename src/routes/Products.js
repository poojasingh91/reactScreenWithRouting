import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import { addToCart } from './cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cartArray)

    useEffect(() => {
        async function fetchData() {
            {
                const response = await fetch(`https://dummyjson.com/products`)
                const jsonData = await response.json()
                setProducts(jsonData.products)
            }
        }
        fetchData()
    }, [])

    function addProductToCart(prod) {
        dispatch(addToCart(prod))
    }

    return (
        <>
            <div>
                <h2 style={{ alignItems: 'center' }}>Product List</h2>
                <ul
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '5rem',
                    }}
                >
                    {products.map((product) => (
                        <div key={product.id}>
                            <Link to={`${product.id}`}>
                                <Card variant="outlined">
                                    <p>{product.title}</p>
                                    {
                                        <img
                                            src={product.thumbnail}
                                            alt={product.title}
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
                                    addProductToCart(product)
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </ul>
            </div>

            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}

export default Products
