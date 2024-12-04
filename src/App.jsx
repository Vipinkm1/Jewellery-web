import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './component/Layout'
import Home from './component/Home'
function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
