import React from 'react'
import './Sucesspage.css'
import { Link } from 'react-router-dom'
const Sucesspage = ({paymentmethod,amount,ordernumber,setSucess,setCheakout}) => {
  return (
    <div className="payment-success">
    <header>
      <i className="fas fa-check-circle"></i>
      <h1>Order Successful</h1>
    </header>
    <section>
      <h2>Order Summary</h2>
      <p>Order Number: {ordernumber}</p>
      <p>Payment Amount: {amount}</p>
      <p>Payment Method: {paymentmethod}</p>
    </section>
    <Link to='/' className='link'><button onClick={()=>{setSucess(false);setCheakout(false)}}>Return to Main Page</button></Link>
  </div>
  )
}

export default Sucesspage
