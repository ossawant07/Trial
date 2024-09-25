import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartPage from './pages/CartPage.js';
import Wishlist from './pages/Wishlist.js';
import LoginPg  from './components/LoginPg.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router=createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "cart",
    element: <CartPage/>,
  },
  {
    path: "wishlist",
    element: <Wishlist/>,
  },
  {
    path: "account",
    element: <LoginPg/>,
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

