import React from 'react'
import "./Category.css"
import { Link } from 'react-router-dom'
import c1 from "../../image/c1.jpg"
import c2 from "../../image/c2.jpg"
import c3 from "../../image/c3.jpg"
import c4 from "../../image/c4.jpg"
import c5 from "../../image/c5.jpg"
import c6 from "../../image/c6.jpg"
const Category = () => {
  return (
    <div>
      <div className="catecontainer">
        <div className="one">
            <img src={c1} alt="" />
            <Link className='link' to='/products/?cat=women'><button>women</button></Link>
        </div>
        <div className="two">
            <img src={c2} alt="" />
            <Link className='link' to='/products/?cat=men'><button>men</button></Link>
        </div>
        <div className="three">
            <img src={c3} alt="" />
            <Link className='link' to='/products/?cat=kids'><button>kids</button></Link>
        </div>
        <div className="four">
             <img src={c4} alt="" />
             <Link className='link' to='/products/?cat=beauty'><button>Beauty</button></Link>
        </div>
        <div className="five">
             <img src={c5} alt="" />
             <Link className='link' to='/products/?cat=bag&footwear'><button>shoes</button></Link>
        </div>
        <div className="six">
             <img src={c6} alt="" />
             <Link className='link' to='/women'><button>Electronics</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Category
