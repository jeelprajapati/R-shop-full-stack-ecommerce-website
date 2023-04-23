import React, { useState } from 'react'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Footer = () => {
  const [message,setMessage]=useState('');
  const [warning,setwarning]=useState({});
  const [credential,setCredential]=useState(false);
  const sendMessage=async()=>{
    const res=await axios.post('http://localhost:8000/message/send',{message},{
      headers:{'token':localStorage.getItem('token')}
    });
    setwarning({
      message:res.data,
      color:'green'
    });
  }
  const timeoutfunc=()=>{
    setTimeout(() => {
      setCredential(false);
    }, 1000);
  }

  const handleClick=(e)=>{
    e.preventDefault();
    if(localStorage.getItem('token')){
      sendMessage();
      setCredential(true);
      timeoutfunc();
    }
    else{
      setCredential(true)
      setwarning({
        message:"only Login can send message",
        color:'green'
      });
      timeoutfunc();
    }
  }
  return (
    <>
    <div className='fcontainer'>
       <div className="social">
        <div className="contact">
        <span className="ftitle">
           BE IN TOUCH WITH US
        </span>
        <input className='inputtext'type="text" onChange={(e)=>setMessage(e.target.value)} />
        <button className='join'onClick={(e)=>handleClick(e)}>join us</button>
        {credential&&<span className={`warning`}>{warning.message}</span>}
        </div>
        <div className="icon">
        <span ><Link to='https://www.facebook.com/jeel.prajapati.986' className='white'><FacebookIcon/></Link></span>
        <span><Link to='https://instagram.com/jeel1501?igshid=ZDdkNTZiNTM' className='white'><InstagramIcon/></Link></span>
        <span><TwitterIcon/></span>
        </div>
       </div>
    </div>
    <div className="footer">
      <div className="fcate">
        <div>Women</div>
        <div>men</div>
        <div>kids</div>
        <div>Health</div>
        <div>Electronic</div>
      </div>
      <div className="flink">
        <div>Women</div>
        <div>men</div>
        <div>kids</div>
      </div>
      <div className="about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod commodi, magni doloribus distinctio sit dolores amet ea ipsum facere asperiores?
      </div>
      <div className="contact">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores maxime corporis dolorem temporibus facere nisi fugiat quos hic aut voluptates.
      </div>
    </div>
    </>
  )
}

export default Footer
