import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
Outlet

const Layout = () => {
  return (
    <>
    
    <Header></Header>
    {/* outlet jaha aye waha par hi change hoga upar niche same rhega */}
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
};



export default Layout