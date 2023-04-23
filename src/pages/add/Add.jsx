import React, { useEffect, useState } from 'react'
import './Add.css'
import Sidebar from '../../component/sidebar/Sidebar.jsx'
import Navbar from '../../component/navbar/Navbar.jsx'
import Producttable from '../../component/table/Producttable.jsx'
import Popup from '../../component/popup/Popup'
import { useNavigate } from 'react-router-dom'
const Add = () => {
  const [open,setOpen]=useState(false);
  const [type,setType]=useState('');
  const [item,setItem]=useState({});
  const [id,setId]=useState({});
  const navigate=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
       navigate('/login');
    }
  },[navigate])
  return (<>
    {<div className='container'>
      <div className="right"><Sidebar/></div>
      <div className="left">
        <Navbar/>
        <div className="add">
          <div className="addtitle">Products</div>
          <button onClick={()=>{open?setOpen(false):setOpen(true);setType('add')}}>ADD PRODUCT</button>
        </div>
        <Producttable setId={setId} setType={setType} setItem={setItem}/>
        <Popup id={id} type={type} item={item} setType={setType}/>
      </div>
    </div>}
    </>
  )
}

export default Add
