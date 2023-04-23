import React, { useEffect, useState } from 'react'
import './singleproduct.css'
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addproduct } from '../../Redux/slice/Cartslice';
import Products from '../../component/products/Products';
import axios from 'axios';
const Singleproduct = () => {
   const[quantity, setQuantity]=useState(1);   
   const[product,setProduct]=useState();
   const location=useLocation().pathname.split('/')[2];
    //Notification
    const[warn,setWarn]=useState(false);
    //add to cart
    const dispatch=useDispatch();
    const handleclicked=(e)=>{
        setWarn(true)
        dispatch(addproduct({productid:e._id,desc:e.desc,price:e.price,quantity,image:e.img}));
        setTimeout(() => {
         setWarn(false);
      }, 2000);
    } 
    const getproduct=async()=>{
      const res=await axios.get(`http://localhost:8000/product/find/${location}`);
      setProduct(res.data);  
   }

   useEffect(()=>{
      getproduct()
   },[])
  return (
    <div>
       <div className="singleproduct">
        {product&&<><div className="pright">
           <img src={product.img} alt="" />
        </div>
        <div className="pleft">
           <div className="ptitle">{product.subcat}</div>
           <div className="more">{product.desc}</div>
           <div className="rating">
            <div className="rat">Rating</div>
            <span className="star"><StarIcon/></span>
            <span className="star"><StarIcon/></span>
            <span className="star"><StarIcon/></span>
            <span className="star"><StarIcon/></span>
            <span className="star"><StarIcon/></span>
           </div>
           <div className="money">₹{product.price}</div>
           <div className="quantity">
            <span className="less" onClick={()=>{quantity===1?setQuantity(1):setQuantity(quantity-1)}}>-</span>
            <span className='num'>{quantity}</span>
            <span className="high" onClick={()=>{setQuantity(quantity+1)}}>+</span>
            <div className="sortcat">
            <span className="size">
               <span className="tsize">Size</span>
               <select>
                  <option value='size' disabled>Size</option>
                  {product.size.map((item)=>(<option value={item} >{item}</option>))}
               </select>
            </span>
             <span className="size">
               <span className="tsize">Color</span>
               <select>
                  <option value='size' disabled>Color</option>
                  {product.color.map((item)=>(<option value={item} >{item}</option>))}
               </select>
            </span>
            </div>
           </div>
           <div className="add">
            <button onClick={()=>{handleclicked(product);}}>Add To Cart</button>
           </div>
           {warn?<div className="warn ">PRODUCT ADDED TO CART SUCESSFULLY</div>:<div className="warn" style={{opacity:0
           }}>PRODUCT ADDED TO CART SUCESSFULLY</div>}
           <div className="wishlist">
            <span><FavoriteBorderIcon/></span>
            <span>Add To Wishlist</span>
           </div>
           <div className="des">DESCRIPTION</div>
           <div className="info">ADDITIONAL INFORMATION</div>
           <div className="faq">FAQ</div>
        </div></>}
       </div>
       <Products cat='Recommended Product'/>
    </div>
  )
}

export default Singleproduct
