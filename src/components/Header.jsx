import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full p-4 flex justify-center items-center border-x border-y border-blue-400'>
        <Link to="/" className='  text-blue-500 hover:text-blue-300 transition-all'><h1 className=' text-3xl'> React Mini Projects </h1></Link>
        
    </div>

  )
}

export default Header