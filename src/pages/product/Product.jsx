import React from 'react';
import "./Product.css"
import Filter from '../../component/filter/Filter.jsx';
import Products from '../../component/products/Products.jsx';
const Product = () => {
  return (
    <div>
       <div className="pcontainer">
          <div className='fil'><Filter/></div>
          <div className='duct'><Products cat='New Women Collection'/></div>
       </div>
    </div>
  )
}

export default Product
