import React from 'react'
import Home from './pages/home/Home.jsx'
import Product from './pages/product/Product.jsx'
import Navbar from './component/navbar/Navbar.jsx';
import Singleproduct from './pages/singleProduct/singleproduct.jsx';
import Footer from './component/footer/Footer.jsx';
import Register from './pages/register/Register.jsx';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";
import Login from './pages/login/Login.jsx'
import Sucesspage from './component/sucesspage/Sucesspage.jsx';
const Layout=()=>{
  
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/products",
        element:<Product/>
      },
      {
        path:"/:category/:id",
        element:<Singleproduct/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/login",
        element:<Login/>
      }
    ]
  },
]);
const App = () => {
  return (
      <>
         <RouterProvider router={router} />
      </>
  )
}

export default App
