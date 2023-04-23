import React, { useEffect } from 'react'
import "./Order.css"
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import Ordertable from '../../component/table/Ordertable'
import { useNavigate } from 'react-router-dom'
const Order = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
       navigate('/login');
    }
  },[navigate])
  return (
    <div className='container'>
       <div className="right"><Sidebar/></div>
       <div className="left">
        <Navbar/>
        <div className="ordertitle">ORDERS:</div>
        <Ordertable/>  
      </div>
    </div>
  )
}

export default Order
