import React, { useState } from 'react'
import LaptopNav from './LaptopNav'
import Sidebar from './Sidebar'

const Navbar = () => {

  return (
   <nav className='sticky top-0 z-30'>
    <LaptopNav/>
    <Sidebar/>
   </nav>
  )
}

export default Navbar


