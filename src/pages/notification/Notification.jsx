import React, { useEffect, useState } from "react";
import "./Notification.css";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import axios from "axios";
const Notification = () => {
    const[message,setMessage]=useState(null);
    const getmessage=async()=>{
        const res=await axios.get('http://localhost:8000/message/lastmessage',{
            headers:{'token':localStorage.getItem('token')}
        });
        setMessage(res.data);
        // console.log(res.data)
    }
    useEffect(()=>{
       getmessage();
    },[])

    //delete message
    const handleclicked=async(e)=>{
        const res=await axios.delete(`http://localhost:8000/message/delete/${e}`,{
            headers:{'token':localStorage.getItem('token')}
        });
        console.log(res.data);
    }
  return (
    <div className="container">
      <div className="right">
        <Sidebar />
      </div>
      <div className="left">
        <Navbar />
        <div className="messagecon">
           <div className="noti">Notifications:</div> 
          {message&&(message.map((item)=>(<div className="message">
            <div className="id">Send By:{item.Userid}</div>
            <div className="content">
              {item.message}
            </div>
            <div className="delete">
                <button onClick={()=>handleclicked(item._id)}>Delete</button>
            </div>
          </div>)))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
