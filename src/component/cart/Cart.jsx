import React, { useEffect, useRef, useState } from 'react'
import './Cart.css'
import DoorBackOutlinedIcon from '@mui/icons-material/DoorBackOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { removeproduct } from '../../Redux/slice/Cartslice';
import { useNavigate } from 'react-router-dom';
import Cheakout from '../cheackout/Cheakout';
import Sucesspage from '../sucesspage/Sucesspage';
const Cart = () => {
   //product  
   const[width,setWidth]=useState(0);
   const [cheackout,setCheackout]=useState(false);
   const [sucess,setSucess]=useState(false);
   const [ordernumber,setOrdernumber]=useState('');
   const [paymentmethod,setPaymentmethod]=useState('');
   const [amount,setAmount]=useState();

   const selecthook=useSelector(state=>state.cart);
   const ref=useRef(null);
   const navigation=useNavigate();
   const handleclicked=(e)=>{
    e.preventDefault();
    if(localStorage.getItem('token')){
      cheackout?setCheackout(false):setCheackout(true);
    }
   }
   //remove product
   const dispatch=useDispatch();
   useEffect(()=>{
     if(ref.current){
      setWidth(ref.current.clientHeight);
     }
   },[cheackout])   
   
  return (<>
    {!sucess?<div ref={ref} className={`${width>=499?'cartcon handlescroll':'cartcon'}`}>
       <div className="carttitle">
          PRODUCT IN YOUR CART 
       </div>
       {selecthook.total===0?<div className='noitem'>No item yet</div>:selecthook.products.map((e)=>(<div className="maindetail">
          <div className="rightdetail">
             <img src={e.image} alt="" />
          </div>
          <div className="middledetail">
             <div className='middletext'>{e.desc}</div>
             <div className="pricetag">
             <span className="p">₹{e.price}</span>
             <span className="qt">quantity:</span>
             <span className="q">{e.quantity}</span>
             </div>
          </div>
          <div className="leftdetail">
            <span onClick={()=>{dispatch(removeproduct(e.id))}}> <DoorBackOutlinedIcon/></span>
          </div>
       </div>))}
       <div className="subtotle">
          <div className="tt">SUBTOTLE</div>
          <div className="totle">₹{selecthook.total}</div>
       </div>
       <div className="checkout">
           <button onClick={(e)=>{handleclicked(e)}}>Checkout Now</button>
       </div>
       {cheackout&&<div><Cheakout cheak={cheackout} setSucess={setSucess} paymentmethod={setPaymentmethod} amount={setAmount} ordernumber={setOrdernumber}/></div>}
    </div>:<Sucesspage setCheakout={setCheackout} setSucess={setSucess} paymentmethod={paymentmethod} amount={amount} ordernumber={ordernumber}/>}
    </>
  )
}

export default Cart
