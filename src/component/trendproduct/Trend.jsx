import React, { useEffect, useState } from 'react'
import './trend.css'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Trend = () => {
    const[products,setProducts]=useState(null); 
    const gettrendproduct=async()=>{
       const res=await axios.get('http://localhost:8000/product/trend');
       setProducts(res.data);
    }
    useEffect(()=>{
      gettrendproduct();
    },[])
  return (
    <div className='tcontainer'>
      <div className="subcontainer">
          <div className="title">
             TRENDING PRODUCT
           </div>
           <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error qui, tempore possimus ducimus eligendi porro perspiciatis libero reprehenderit aspernatur? Distinctio facere ad at perspiciatis quos, incidunt illo qui laudantium hic nihil non eos.
           </div>
      </div>  
       <div className="tproducts">
          {products&&products.map((e)=>(<Link to={`/${e.categories}/${e._id}`} className='link'><div className="tproduct" key={e.id}>
            <img src={e.img} alt="" />
            <div className='tp'>
            <span className='name'>{e.title}</span>
            <span className="p">₹{e.price}</span>
            </div>
            {/* <div> */}
                <span className='like'><FavoriteBorderTwoToneIcon/></span>
                <button>Add to cart<ShoppingCartTwoToneIcon/></button>
            {/* </div> */}
          </div></Link>))}
       </div>
    </div>
  )
}

export default Trend
