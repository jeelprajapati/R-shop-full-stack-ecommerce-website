import React,{useState,useEffect} from 'react'
import './Navbar.css'
import image from '../../profile.jpg'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import { useDispatch} from 'react-redux'
import { addUsers } from '../../redux/slice/Userslice.jsx'
import  axios from 'axios';
import { addproduct } from '../../redux/slice/Productslice';
import { addorder } from '../../redux/slice/Orderslice'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [users,setUsers]=useState([]);
  const [products,setProducts]=useState([]);
  const [orders,setOrders]=useState([]);
  const dispatch=useDispatch()
  
  const additem=()=>{
     dispatch(addUsers(users));
     dispatch(addproduct(products));
     dispatch(addorder(orders))
  }
  const getuser=async()=>{
    const res= await axios.get('http://localhost:8000/auth/alluser');
    setUsers(res.data);
  }
  const getproduct=async()=>{
    const res= await axios.get('http://localhost:8000/product/');
    setProducts(res.data);
  }

  const getorder=async()=>{
    const res= await axios.get('http://localhost:8000/order/',
    {
        headers:{'token':localStorage.getItem('token')}
    });
    setOrders(res.data);
  }
  
  
  useEffect(()=>{
   getuser()
   getproduct()
   getorder()
  },[])
 useEffect(()=>{
  additem();
 },[users,products,orders])

  return (
    <div className='navcontainer'>
      <div className="navleft">
      </div>
      <div className="navright">
        <div className="langage"><LanguageIcon/>English</div>
        <div className="notification"><Link to='/notification' className='link'><NotificationsOutlinedIcon/></Link></div>
        <div className="profile"><img src={image} alt="" /></div>
        <div className="setting"><SettingsOutlinedIcon/></div>
      </div>
    </div>
  )
}

export default Navbar
