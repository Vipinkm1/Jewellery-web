import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';


const Layout = ({ children }) => {
  const location = useLocation()
  const isVisible = ['/signup', '/login', '/login-admin']
  const headerNotVisible = isVisible.includes(location.pathname)
  return (
    <div>
      {!headerNotVisible && <Header />}
      <main>
        {children}
      </main>
      {!headerNotVisible && <Footer />}
    </div>
  )
}

export default Layout
