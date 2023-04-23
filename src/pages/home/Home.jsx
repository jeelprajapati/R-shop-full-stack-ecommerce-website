import React, { useEffect, useState } from 'react'
import Sidebar from '../../component/sidebar/Sidebar.jsx'
import Navbar from '../../component/navbar/Navbar.jsx'
import './Home.css'
import Main from '../../component/main/Main.jsx'
import { cardData } from '../../data.jsx'
import Chart from '../../component/chart/Chart.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/slice/userCard.jsx'
import { updateOrder } from '../../redux/slice/Ordercard.jsx'
import {updateEarn} from '../../redux/slice/Earncard.jsx'
import axios from 'axios'
const Home = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
       navigate('/login');
    }
  },[navigate])
  const [user,setUser]=useState(null);
  const [order,setOrder]=useState(null);
  const [earn,setEarn]=useState(null);
  const [balance,setBalance]=useState(null);
  const [income,setIncome]=useState(0);

  const usercard = useSelector(state => state.usercard.usercard);
  const ordercard = useSelector(state => state.ordercard.ordercard);
  const earncard = useSelector(state => state.earncard.earncard);
  const balancecard = useSelector(state => state.balancecard.balancecard);
  const dispatch=useDispatch();


  const usernum=useSelector(state => state.user.users).length;
  const ordernum=useSelector(state => state.order.orders).length;

  const getincome=async()=>{
    const res= await axios.get('http://localhost:8000/order/income',
    {
      headers:{'token':localStorage.getItem('token')}
    });
    setIncome(res.data[0].total);

  }
  
  useEffect(()=>{
    dispatch(updateEarn(income))
  },[income])

  useEffect(()=>{
    getincome();
  },[])

  useEffect(()=>{
    dispatch(updateUser(usernum));
    dispatch(updateOrder(ordernum));
  },[usernum,ordernum])
  useEffect(() => {
    if (usercard) {
      setUser(usercard);
    }
  }, [usercard]);

  useEffect(() => {
    if (ordercard) {
      setOrder(ordercard);
    }
  }, [ordercard]);

  useEffect(() => {
    if (earncard) {
      setEarn(earncard);
    }
  }, [earncard]);

  useEffect(() => {
    if (balancecard) {
      setBalance(balancecard);
    }
  }, [balancecard]);

  return (
    <div className='container'>
      <div className="right">
        <Sidebar/>
      </div>
      <div className="left">
        <Navbar/>
        <div className="list">
          {/* {cardData.map((item)=>(<Link className='link' to={`${item.to}`}><Main item={item}/></Link>))} */}
          {user&&(<Link className='link' to='/user' ><Main item={user}/></Link>)}
          {order&&(<Link className='link' to='/order'><Main  item={order}/></Link>)}
          {earn&&(<Link className='link' to='/order' ><Main item={earn}/></Link>)}
          {balance&&(<Link className='link' to='/order' ><Main item={balance}/></Link>)}
        </div>
        <div className="chart">
           <Chart/>
        </div>
         
      </div>
    </div>
  )
}

export default Home
