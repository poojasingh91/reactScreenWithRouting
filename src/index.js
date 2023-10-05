import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './routes/Home';
import Products from './routes/Products';
import Cart from './routes/Cart';
import MyRequiredProduct from './routes/MyRequiredProduct';
import reportWebVitals from './reportWebVitals';
import Header from './routes/Header';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyContainer from './routes/MyRequiredProduct';

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
    element: <MyRequiredProduct/>,
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
