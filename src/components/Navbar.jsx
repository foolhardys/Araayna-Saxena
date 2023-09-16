import React, { useState } from 'react'
import { Navlinks } from '../utils/constants'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='w-screen p-4 flex justify-center items-center bg-gray-200 shadow-lg sticky flex-col '>
      <h1 className='text-center lg:text-[50px] text-[40px] font-semibold mb-2'>
        Arayna Saxena
      </h1>
      <ul className='lg:w-[1020px]  lg:flex justify-between capitalize w-full p-2'>
        {Navlinks.map((navlink) => {
          const { id, text, url } = navlink
          return (
            <li key={id}  >
              <NavLink to={url} className='navlink'> {text} </NavLink>
            </li>
          )
        })}
      </ul>
      <button className='absolute top-[33px] right-[20px] lg:hidden' onClick={()=>setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <AiOutlineClose className='text-3xl text-red-700' /> : <AiOutlineMenu className='text-3xl' />}
      </button>
    </nav>
  )
}

export default Navbar


