import React, { useState } from 'react'
import "./Silder.css"
import image1 from "../../image/3.jpg"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Styled from 'styled-components';
const Scontainer=Styled.div`
transition: all 1.5s ease;
transform: translateX(-${props=>props.Slidenum*100}vw);
`
const Silder = () => {
  const[slidenum,setSlidenum]=useState(0)
  return (
    <>
    <div className="maincontainer">
    <Scontainer Slidenum={slidenum} className='scontainer'>
      <div className="slides">
        <div className="slide1">
          <div className="left">
            <img src={image1} alt="" />
          </div>
          <div className="sright">Exclusive <div>Collection</div>  <div><i>on sale</i></div></div>
        </div>
        <div className="slide1">
          <div className="left">
            <img src={image1} alt="" />
          </div>
          <div className="sright">Exclusive <div>Collection</div>  <div><i>on sale</i></div></div>
        </div>
      </div>
    </Scontainer>
    </div>
    <div className="arrow">
        <div className="leftarrow" onClick={()=>{slidenum===1? setSlidenum(0):setSlidenum(1)}}><KeyboardArrowLeftIcon/></div>
        <div className="rightarrow" onClick={()=>{slidenum===0? setSlidenum(1):setSlidenum(0)}}><KeyboardArrowRightIcon/></div>
    </div>
    </>
  )
}

export default Silder
