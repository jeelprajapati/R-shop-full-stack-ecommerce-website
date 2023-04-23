import React, { useEffect, useState } from 'react';
import './Login.css'; // import the CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response,setResponse]=useState({});
  const navigate=useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    
    console.log(`Email: ${email}, Password: ${password}`);
    const res=await axios.post("http://localhost:8000/auth/login",{username:email,password:password});
    setResponse(res.data)
    // Here you would typically send the login information to your server or handle the login in some way
    
  };
  useEffect(()=>{
    if(response.isAdmin){
      localStorage.setItem('token',response.accessToken);
      navigate('/');
    }
  },[response,navigate])
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={email} onChange={handleEmailChange} className="login-input" /> {/* add a class name */}
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} className="login-input" /> {/* add a class name */}
          </label>
          <button type="submit" className="login-button">Log in</button> {/* add a class name */}
        </form>
      </div>
    </div>
  );
}

export default Login;

