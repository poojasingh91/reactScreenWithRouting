import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div id="sidebar">
                    <Navbar />
                </div>
                <div className="container">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Main
