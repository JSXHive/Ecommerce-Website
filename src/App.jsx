import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Login from './Pages/Login'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import men_banner from './assets/banner.jpg'
import women_banner from './assets/women_banner.avif'
import kids_banner from './assets/kids_banner.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path="/womens" element={<ShopCategory banner={women_banner} category= "women"/>}/>
      <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/loginsignup' element={<LoginSignup/>}/>
      <Route path="/login" element={<Login />} />

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
