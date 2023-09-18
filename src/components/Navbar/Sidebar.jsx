import React, { useState } from 'react'
import './Navbar.css'
import { Navlinks } from '../../utils/constants'
import { NavLink, Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose, AiOutlineArrowDown } from 'react-icons/ai';

const Sidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className='w-full p-4 justify-center items-center bg-primary shadow-lg sticky flex-col h-[90px] lg:hidden'>
            <h2 className='text-start text-[40px] font-[700] mb-2 ml-5 text-secondary font-garamond'>
                Arayna Saxena
            </h2>
            <button className='absolute top-[32px] right-[20px] lg:hidden cursor-pointer hover:scale-110 hover:rotate-12 transition' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                {!isSidebarOpen && <AiOutlineMenu className='text-3xl text-secondary' />}
            </button>
            <ul className={isSidebarOpen ? 'flex flex-col gap-3 pt-[60px] h-screen w-screen absolute z-10 top-0 left-0 bg-primary' : 'hidden'}>
                <h1 className='text-start text-[40px] font-[700] mb-[10px] mt-[-45px] ml-3 text-secondary font-garamond'>Arayna Saxena</h1>
                {Navlinks.map((navlink) => {
                    const { id, text, url } = navlink
                    return (
                        <li key={id} className='capitalize' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            <NavLink to={url} className='block text-secondary font-light p-2 transition font-raleway text-[20px] mx-1 mt-2 hover:text-gray-800 rounded-md hover:translate-x-3 hover:bg-secondary hover:text-primary'> {text} </NavLink>
                        </li>
                    )
                })}
                <button className='z-20 absolute top-[30px] right-[30px] hover:rotate-12 hover:scale-110' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <AiOutlineClose className='text-3xl text-danger ' />
                </button>
            </ul>
        </div>
    )
}

export default Sidebar