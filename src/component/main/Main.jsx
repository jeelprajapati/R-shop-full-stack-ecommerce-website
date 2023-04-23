import React from 'react'
import './Main.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Main = ({item}) => {
  // console.log(item)
  return (
    <div className='maincontainer'>
      <div className="maintop">
        <span className="usert">{item.title}</span>
        <span className="growth positive"><KeyboardArrowUpIcon/>{item.growth}%</span>
      </div>
      <div className="mainmidle">
        {item.totle}
      </div>
      <div className="mainbottom">
        <span className="see">see all {item.see}</span>
        <span className="pericon" style={{backgroundColor:`${item.Color}`}} >{item.icon}</span>
      </div>
    </div>
  )
}

export default Main
