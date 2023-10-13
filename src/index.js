import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './routes/Home'
import Products from './routes/Products'
import Carts from './routes/Carts'
import reportWebVitals from './reportWebVitals'
import Header from './routes/Header'
import store from './store'
import { Provider } from 'react-redux'
import Profile from './routes/profile'
import Categoriesdetails from './categoriesdetails'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MyProductDetails from './routes/MyProductDetails'
import MyCartDetails from './routes/MyCartDetails'
import Login from './routes/login'
import SignUp from './routes/signup'
import Main from './routes/Main'
import Navbar from './routes/Navbar'
import SearchBar from './routes/searchbar'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <Main />,
                children: [
                    {
                        path: '/products',
                        element: <Products />,
                    },
                    {
                        path: '/carts',
                        element: <Carts />,
                    },
                    {
                        path: '/categories/:id',
                        element: <Categoriesdetails />,
                    },
                ],
            },
            {
                path: '/products/:id',
                element: <MyProductDetails />,
            },
            {
                path: '/carts/:id',
                element: <MyCartDetails />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/profile',
                element: <Profile />,
            },
            {
              path: '/search',
              element: <SearchBar/>,
          },
        ],
    },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        {/* <App /> */}
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
