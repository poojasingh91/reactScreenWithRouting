import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './routes/Home';
import Products from './routes/Products';
import Cart from './routes/Cart';
import reportWebVitals from './reportWebVitals';
import Header from './routes/Header';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyProductDetails from './routes/MyProductDetails';
import MyCartDetails from './routes/MyCartDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
        // children: [
        //   {
        //     path: "/cart/:id",
        //     element: <Cart/>,
        //   },
        // ]
      },
    ],
  },
  {
    path: "/products/:id",
    element: <MyProductDetails/>,
  },
  {
    path: "/cart/:id",
    element: <MyCartDetails/>,
  },
  
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header/>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
