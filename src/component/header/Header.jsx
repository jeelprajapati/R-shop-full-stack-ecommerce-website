import React from 'react'
import Style from'styled-components';
import { useState } from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
const Hcontainer=Style.div`
  & Link div:nth-child(${props => props.Number}){
    border-bottom: 5px solid #514cbb;
  }
  & Link div:hover{
    cursor:pointer;
  }
  & Link div{
    ${props=>props.Scroll?'color:white;border: 5px solid white;':'color:#514cbb'}
  }
`
const Header = () => {
  const[scroll,setScroll]=useState(false);
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
  
  const [number,setNumber]=useState(1);
  
  return (
    <>
    {<Hcontainer Scroll={scroll} Number={number} className='hcontainer'>
        <Link className='link' to='/products/?cat=women'><div >Women Ethnic</div></Link>
        <Link className='link' to='/products/?cat=men'><div>Men</div></Link>
        <Link className='link' to='/products/?cat=kids'><div>Kids</div></Link>
        <Link className='link' to='/products/?cat=home'><div>Home & Kitchen</div></Link>
        <Link className='link' to='/products/?cat=beauty'><div>Beauty & Health</div></Link>
        <Link className='link' to='/products/?cat=electronics'><div>Electronics</div></Link>
        <Link className='link' to='/products/?cat=bag&footwear'><div>Bags & Footwear</div></Link>
    </Hcontainer>}
    
    </>
  )
}
export default Header
