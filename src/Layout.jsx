import React from 'react'
import { Outlet } from 'react-router-dom'
import {Sidebar,Header, Footer} from "./components/Component"

function Layout() {
  return (
    <>
        <Header />

        <div className='flex'>
          <Sidebar />
          <Outlet />
        </div>
        
        {/* <Footer /> */}
    </>
  )
}

export default Layout