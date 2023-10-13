import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { login, logout } from './loginSlice'

export default function Header() {
    const mylogin = useSelector((state) => state.login)
    const dispatch = useDispatch()
    useEffect(() => {
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')
        const username = localStorage.getItem('username')
        const title = localStorage.getItem('title')
        const thumbnail = localStorage.getItem('thumbnail')


        if (token) {
            dispatch(login({ token, email, username, title, thumbnail }))
            
        } else {
            dispatch(logout())
        }
    }, [dispatch])
    const handleLogout = () => {
        dispatch(logout())
        localStorage.removeItem('token')
    }
    return (
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        ><Link to="/" className="color">Namespace Cart</Link>
                        </Typography>

                    <div style={{display:'flex'}}>
                        {mylogin.token ? (
                            <>
                                <Link to="/profile">
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >{mylogin.username}</Button>
                                </Link>
                                <Button
                                    onClick={handleLogout}
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Log Out
                                </Button>
                                <Link to={`/search`}>Search</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/signup">Signup</Link>
                                <Link to="/login">Login</Link>
                            </>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
    )
}