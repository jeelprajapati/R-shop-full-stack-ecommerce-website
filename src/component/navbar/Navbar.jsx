import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SearchIcon from '@mui/icons-material/Search';
import Styled from 'styled-components';
import Cart from '../cart/Cart.jsx'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Container=Styled.div`
   position:relative;
`
const Navbar = () => {
  const[scroll,setScroll]=useState(false);
  const[slide,setSlide]=useState(false);
  const[items,setItems]=useState(['']);
  const[click,setClick]=useState(false);
  const[filteredItems,setFilteredItems]=useState(null);
  const [searchInput, setSearchInput] = useState('');

  //detect scroll
  let prevScrollpos = window.pageYOffset;
  window.addEventListener('scroll', function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    setScroll(false);
  } else {
    setScroll(true);
  }
  prevScrollpos = currentScrollPos;
});

//get subcat
const gettrendproduct=async()=>{
  const res=await axios.get('http://localhost:8000/product/subcat');
  setItems(res.data);
}
useEffect(()=>{
 gettrendproduct();
},[])
//setfilteritem for search
 const onchange=()=>{
  setFilteredItems(items.filter(item => String(item).toLowerCase().includes(searchInput.toLowerCase())));
 }
//set totle product number
const selecthook=useSelector(state=>state.cart);

  return (
    <Container Scroll={scroll} className='container'>
        <div className="logo">
           <i> R-MART</i>
        </div>   
        <div className="search">
            <div><SearchIcon/></div>
            <input type="text" placeholder='search'onChange={(e)=>{setClick(true);setSearchInput(e.target.value);onchange()}}/>
        </div> 
        <div className="searchfilter">
          {click&&filteredItems&&(filteredItems.map((e)=>(<Link to={`/products/?subcat=${e}`} className='link' onClick={()=>{setClick(false)}}><div className="item">{e}</div></Link>)))}
        </div>
        <div className="right">
            <ul>
              <Link to='/login' className='link'><li>Login</li></Link>
              <Link to='/register' className='link'><li>Register</li></Link>
              <li><FavoriteBorderIcon/></li>
              <li>
               <span>{selecthook.products.length}</span>
              <div style={{cursor:'pointer'}} onClick={()=>{slide?setSlide(false):setSlide(true)}}><ShoppingCartCheckoutIcon/></div>
              </li>
            </ul>
        </div>  
        {slide&&<div className="cartcontainer">
          <Cart/>
        </div>}
    </Container>
  )
}

export default Navbar
