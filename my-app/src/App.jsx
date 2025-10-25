import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Fotter/Footer'
import Women from './Components/Women/Women'
import Men from './Components/Men/Men'
import Kids from './Components/Kids/Kids'
import Category from './Components/Category/Category'
import Productdetails from './Components/Productdetails/Productdetails'
import Featuredproductdetails from './Components/Featured/Featuredproductdetails'
import Bestsellerproductdetails from './Components/BestSellers/Bestsellerproductdetails'
import Usercart from './Components/Cart/Usercart'
import productslist from './Components/Productdetails/Products'



function App() {

  // MY own cart

  // const [cart, setcart] = useState([])

  // const handlecart = (id) => {
  //   const found = productslist.find((p)=> p.id == id)
  //   setcart([...cart, found])
  //   console.log(found);
    
  // }

  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/product/:id" element={<Productdetails /*handlecart={handlecart}*/ />} />
          <Route path="/featuredproduct/:id" element={<Featuredproductdetails />} />
          <Route path="/bestsellerproduct/:id" element={<Bestsellerproductdetails />} />
          <Route path='/cart' element={<Usercart/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
