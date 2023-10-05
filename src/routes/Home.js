import React from 'react'
import Navbar from './Navbar';
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className='main'>
    <body>
        <div style={{display: "flex"}}>
            <div id="sidebar">
                <Navbar/>
            </div>
            <div className='container'>
                <Outlet/>
            </div>
        </div>
    </body>
    </div>
    <div id="detail">
    </div>
    
    </>
    
  )
}

export default Home
