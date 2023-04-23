import React, { useEffect, useState } from 'react'
import "./Products.css"
import { product } from '../../data'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Products = (props) => {
   const selecthook=useSelector(state=>state.filters);
   const[subcat,setSubcat]=useState();
   const[cat,setCat]=useState();
   const[range,setRange]=useState();
   const[product,setProduct]=useState(null);
   useEffect(()=>{
      setSubcat(selecthook.subcat);
      setCat(selecthook.category);
      setRange(selecthook.price)
   },[selecthook.subcat,selecthook.category,selecthook.price])

   const location=useLocation().search
   const getproduct=async()=>{
         const res=await axios.get(`http://localhost:8000/product/${location}`);
         setProduct(res.data);        
   }

   useEffect(()=>{
      getproduct()
      // console.log(product)
   },[])
   
  return (
    <div>
       <div className="productscon">
         <span>New {location.slice(5)} collection</span>
       </div>
       <div className="productcon1">        
       {console.log(product)} 
          {product?product.filter((item)=>(range>=item.price&&(subcat==''?subcat!=item.subcat:subcat==item.subcat))).map((e)=>(
         <Link to={`/${e.categories}/${e._id}`} className="link">
          <div className="items">
             <img src={e.img} alt="" />
             <div className="itemdetail">
                <span className="itemname">{e.subcat}</span>
                <span className="itemprice">₹{e.price}</span>
             </div>
          </div></Link>)):<div>loading...</div>}  
       </div>
    </div>
  )
}

export default Products
