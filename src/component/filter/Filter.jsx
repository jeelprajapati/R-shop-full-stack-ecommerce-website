import React, {useEffect, useState } from 'react'
import "./Filter.css"
import {data} from '../../data.js'
import { useDispatch } from 'react-redux';
import { setPrice, setSort, setSubcat } from '../../Redux/slice/Filterslice';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const Filter = () => {
    const [maxprice,setMaxprice]=useState();
    const[data,setData]=useState(null);
    const location=useLocation().search;
    const dispatch=useDispatch();
    const getsubcat=async()=>{
      const res=await axios.get(`http://localhost:8000/product/subcat/${location}`);
      setData(res.data);
    }
    useEffect(()=>{
      getsubcat();
    },[])
      
  return (
    <div>
      <div className="filter">
        <div className="filtertitle">
            <div className='cate'>Product Category</div>
            <div className="box">
          {data&&data.map((e)=>(<div className='cateinput'>
            <input type="radio" value={e} name="category" onChange={(e)=>{ dispatch(setSubcat({subcat:e.target.value}))}}/>
            <label >{e}</label>
            </div>))} 
            </div>
        </div>
            <div className="range">
               <div className='filterprice'>Filter By Price</div>
               <div className="box">
               <span className="min">0</span>
               <input id='pricerange' type="range" name='range' min={0} max={2000} onChange={(e)=>{setMaxprice(e.target.value);dispatch(setPrice({price:parseInt(e.target.value)}))}}/>
               <span className="max">₹{maxprice}</span>
               </div>
            </div>
            <div className="price">
              <div className='pricetitle'>Sort By</div>
              <div className="box">
              <div>
                <input type="radio" name='price' onClick={(e)=>{dispatch(setSort({sort:0}))}} />
                <label>Lower To Higher Price</label>
              </div>
              <div>
                <input type="radio" name='price' onClick={(e)=>{dispatch(setSort({sort:1}))}} />
                <label>Higher To Lower Price</label>
              </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Filter
