import React from 'react'
import Slider from '../../component/slider/Silder.jsx'
import Category from '../../component/category/Category.jsx'
import Trend from '../../component/trendproduct/Trend.jsx'
import Header from '../../component/header/Header.jsx'
const Home = () => {
  return (
    <div id='scroll'>
      <Header/> 
      <Slider/>
      <Category/>
      <Trend/>
    </div>
  )
}

export default Home
