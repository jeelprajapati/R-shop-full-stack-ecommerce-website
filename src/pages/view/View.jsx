import React, { useEffect } from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import Userstable from '../../component/table/Userstable'
import './View.css'
import { useNavigate } from 'react-router-dom'
const View = () => {
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
        <div className="noti">Totle User</div>
        <Userstable/>  
      </div>
    </div>
  )
}

export default View
