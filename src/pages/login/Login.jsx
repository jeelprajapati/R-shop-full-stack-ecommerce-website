import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const userLogin=async()=>{
      const res=await axios.post('http://localhost:8000/auth/login',{email,password})
      console.log(res.data);

    }
    const handleSubmit = (e) => {
      e.preventDefault();
      userLogin();
    }
  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
