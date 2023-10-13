import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Drawer, List, ListItem, ListItemText } from '@mui/material'
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
const Navbar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        async function fetchData() {{
          const response = await fetch(`https://dummyjson.com/products/categories`)
          const jsonData = await response.json()
          setCategories(jsonData)
          }
        }
        fetchData()
    }, [])

    return (
        <div style={{ display: 'flex' }}>
            <div>
                {categories.map((cate) => (
                    <div>
                        <Link to={`categories/${cate}`}>{cate}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar

{
    /* <div id='sidebar'>
        <ol>
            <li>
                <Link to={`/products`}>Products</Link>
            </li>
            <li>
                <Link to={`/carts`}>Carts</Link>
            </li>
        </ol>
      
    </div> */
}
