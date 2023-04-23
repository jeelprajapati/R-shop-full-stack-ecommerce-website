import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userRegister=async()=>{
    const res=await axios.post('http://localhost:8000/auth/register',{username,email,password})
    console.log(res.data);
    localStorage.setItem('token',res.data.accessToken)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    userRegister();
  }
  return (
    <div className="login-container">
      <h2 className="login-heading">Register</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
