import React from 'react'
// import { orderdata } from '../../data'
import "./ordertable.css"
import { useSelector } from 'react-redux'
const Ordertable = () => {
  
 const orderdata=useSelector(state=>state.order.orders);
  return (
    <div className='ordercon'>
      <table className='table'>
        <tr className='tr'>
          <th className='th'>Userid</th>
          <th className='th'>Product</th>
          <th className='th'>Address</th>
          <th className='td'>Price</th>
          <th className='th'>Status</th>
        </tr>
        {orderdata.map((row)=>(<tr className='tr'>
          <td className='td'>{row.Userid}</td>
          <td className='td'>
             <tr className='tr'>
                <td className='td'>productid</td>
                <td className='td'>quantity</td>
               </tr>
            {row.Product.map((e)=>(<>
               <tr className='tr'>
                 <td className='td'>{e.productid}</td>
                 <td className='td'>{e.quantity}</td>
               </tr>
            </>   
            ))}</td>
          <td className='td'>{row.Address.city},{row.Address.state}</td>
          <td className='td'>{row.Price}</td>
          <td className={`${row.Status==="cash on delivery"?'td red':'td blue'}`}>{row.Status}</td>  
        </tr>))}
      </table>
    </div>
  )
}

export default Ordertable
