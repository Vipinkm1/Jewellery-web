import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './component/Layout'
import Home from './component/Home'
import Contact from './component/pages/Contact'
import About from './component/pages/About'
import Blogs from './component/pages/Blogs'
import JoinUs from './component/pages/JoinUs'
import Review from './component/pages/Review'
import Signup from './component/pages/Signup'
import Login from './component/pages/Login'
import FilterPage from './component/pages/FilterPage'
import Wishlist from './component/pages/Wishlist'
import { CartProvider } from './component/Context/Context'
import Cart from './component/pages/Cart'
function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/join-us' element={<JoinUs/>}/>
          <Route path ='customer-review' element={<Review/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signup'  element={<Signup/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/filter' element={<FilterPage/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        </Layout>
      </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
