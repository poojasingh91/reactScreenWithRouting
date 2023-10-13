import React from 'react'
import Navbar from './Navbar'
import { Outlet, Link } from 'react-router-dom'
import Header from './Header'
import SearchBar from './searchbar'

const Home = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Home
