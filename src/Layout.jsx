import React from 'react'
import { Outlet } from 'react-router-dom'
import {Sidebar,Header, Footer} from "./components/Component"

function Layout() {
  return (
    <>
        <Header />

        <div className='flex border-x border-blue-400'>
          <Sidebar />
          <Outlet />
        </div>
        
        <Footer />
    </>
  )
}

export default Layout