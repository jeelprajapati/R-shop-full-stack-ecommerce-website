import React, { useRef, useState } from 'react'
import "./Cheakout.css"
import axios from 'axios';
import { useSelector } from 'react-redux';
const Cheakout = ({cheak,setSucess,paymentmethod,amount,ordernumber}) => {
  const ref=useRef(null);
  const [statename,setStatename]=useState('');
  const [city,setCity]=useState('');
  const [payment,setPayment]=useState('');
  const [number,setNumber]=useState();
  const selecthook=useSelector(state=>state.cart)
  if(cheak&&ref.current){
    ref.current.scrollIntoView({behavior:"smooth"})
  }
 const handleclicked=async(e)=>{
  e.preventDefault();
  const newObjArray = selecthook.products.map((obj) => {
    return { 
      productid:obj.productid,
      desc:obj.desc,
      price:obj.price,
      quantity:obj.quantity
    };
  });
  const res=await axios.post('http://localhost:8000/order/create',{
    Product:newObjArray,
    Address:{
      state:statename,
      city:city
    },
    phoneNumber:number,
    Price:selecthook.total,
    Status:payment
  },{headers:{'token':localStorage.getItem('token')}})
  
  if(res.data){
    setSucess(true);
    paymentmethod(res.data.Status);
    amount(res.data.Price)
    ordernumber(res.data._id)
  }
 } 

  return (
    <div className='cheackout' ref={ref}>
      <div className='cheackoutcon'>
       <label className='lable'>state</label>
       <input type="text" className='input'onChange={(e)=>{setStatename(e.target.value)}} />
       <label htmlFor="" className='lable'>city</label>
       <input type="text"className='input' onChange={(e)=>{setCity(e.target.value)}}/>
       <label htmlFor="" className='lable'>Number</label>
       <input type="number" className='input'onChange={(e)=>{setNumber(e.target.value)}} />
       <div className="paymentmethod">
        <div>
         <input type="radio" name="method" value="cash on delivery" onChange={(e)=>{setPayment(e.target.value)}}/>
         <label htmlFor="">cash on delivery</label>
        </div>
        <div>
         <input type="radio" name="method" value="online" onChange={(e)=>{setPayment(e.target.value)}}/>
         <label htmlFor="">online payment</label>
        </div>
       </div>
       <button className='button red'>cancle</button>
       <button className='button blue' onClick={(e)=>handleclicked(e)}>submit</button>
       </div>
    </div>
  )
}

export default Cheakout
