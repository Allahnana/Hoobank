import React from 'react'
import { useState } from 'react'
import {close, logo, menu} from '../assets'
import {navLinks} from '../constants/index'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]'/>

      <ul className=' list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white ` }>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
          ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-end'>
        <img 
        src={toggle ? close : menu}
        alt='menu'
        className='w-[28px] h-[28px] object-contain cursor-pointer'
        onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'}  bg-gradient-to-r from-gray-900  p-6  absolute top-20 right-0 min-w-[140px] mx-4 my-2 rounded-xl sidebar`}>
          
           <ul className=' list-none flex flex-col  justify-end items-center flex-1'>
           {navLinks.map((nav, index) => (
             <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white ` }>
               <a href={`#${nav.id}`}>
                 {nav.title}
               </a>
             </li>
             ))}
           </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar