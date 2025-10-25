import React from 'react'
// import hero_img from "../../assets/hero_image.jpg"
import hero_img from "../../assets/hero_img.png"
import "./Home.css"
import Category from '../Category/Category'
import Featured from '../Featured/Featured'
import BestSellers from '../BestSellers/BestSellers'
import Contact from '../Contact/Contact'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <div className='home'>

      <img src={hero_img} alt='' id='hero'/>
      <h1 id='h1'>Raining Offer For<br/>Hot Summer !</h1>
      <p id='p'>25% Off On All Products</p>

      <div className="btns">
        <Link to="categories"><button>SHOP NOW</button></Link>
      </div>

      <Category/>
      <Featured/>
      <BestSellers/>
      <Contact/>

    </div>
  )
}

export default Home
