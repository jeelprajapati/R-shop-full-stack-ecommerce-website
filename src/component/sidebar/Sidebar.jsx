import React from 'react'
import './Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className="top"><span>ADMINPANEL</span></div>
       <div className="midle">
         <ul>
          <span className="title">MAIN</span>
            
            <Link to='/' className='link'><li><DashboardIcon/>Dashboard</li></Link>
          <span className="title">LISTS</span>
            <Link to='/user'className='link'><li><PersonOutlineOutlinedIcon/>Users</li></Link>
            <Link to='/add' className='link'><li><InventoryOutlinedIcon/>Products</li></Link>
            <Link to='/order' className='link'><li><BusinessCenterOutlinedIcon/>Orders</li></Link>
            <Link to='/notification' className='link'><li><NotificationsOutlinedIcon/>Notification</li></Link>
          <span className="title">ADMIN SERVIES</span>
            <li><SettingsOutlinedIcon/>Settings</li>
            <li>Profile</li>
            <li onClick={()=>{localStorage.removeItem('token')}}><LockOutlinedIcon/>Logout</li>
         </ul>
       </div>
       <div className="bottom">
        <div className="light"></div>
        <div className="dark"></div>
       </div>
    </div>
  )
}

export default Sidebar
