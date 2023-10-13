import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card'
const Categoriesdetails = () => {
    const { id } = useParams()
    const [categories, setCategory] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `https://dummyjson.com/products/category/${id}`
            )
            const jsonData = await response.json()
            console.log(jsonData.products)
            setCategory(jsonData.products)
        }
        fetchData()
    }, [id])
    return (
        <div>
            <Card variant="outlined">
                {categories.map((category) => (
                    <ul>
                        <h3>{category.title}</h3>
                        <img
                            src={category.thumbnail}
                            style={{ height: 400, width: 400 }}
                            alt="{category.title}"
                        />
                        <p>{category.description}</p>
                    </ul>
                ))}
            </Card>
        </div>
    )
}

export default Categoriesdetails
