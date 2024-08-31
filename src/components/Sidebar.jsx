import React from 'react'
import { NavLink } from 'react-router-dom';

 const Sidebar = () => {
  return (
    <div className=' min-w-60 h-screen border-x border-y border-blue-400 p-2'>
        <ul className='flex flex-col gap-1 text-blue-400'>
            <li><NavLink to="todo" className={({isActive}) => `${isActive? "text-blue-200 font-semibold" : "text-blue-400"}`}> Todo </NavLink> </li>

            <li><NavLink to="currency" className={({isActive}) => `${isActive? "text-blue-200 font-semibold" : "text-blue-400"}`}> Currency Converter</NavLink> </li>

            <li><NavLink to="password-gen" className={({isActive}) => `${isActive? "text-blue-200 font-semibold" : "text-blue-400"}`}>Password Generator</NavLink></li>
            
            <li><NavLink to="theme-switch" className={({isActive}) => `${isActive? "text-blue-200 font-semibold" : "text-blue-400"}`}>Theme Switch</NavLink></li>
        </ul>
    </div>
  )
}

export default Sidebar;
