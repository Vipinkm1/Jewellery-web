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
function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/join-us' element={<JoinUs/>}/>
          <Route path ='customer-review' element={<Review/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
