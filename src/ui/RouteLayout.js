import React from 'react'
import Header from './Header'
import { Outlet, useLocation } from 'react-router'
import Footer from './Footer'


const RouteLayout = () => {
  const location = useLocation();
  const isCompilerPage = location.pathname === '/compiler';


  return (
    <div>
      <Header />
      <Outlet/>
      {!isCompilerPage && (<Footer/>)}
      
   
    </div>
  )
}
export default RouteLayout
