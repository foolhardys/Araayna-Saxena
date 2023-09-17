import React, { useState } from 'react'
import './Navbar.css'
import { Navlinks } from '../../utils/constants'
import { NavLink, Link } from 'react-router-dom'
import Dropdown from './Dropdown';
import { AiOutlineCaretDown } from 'react-icons/ai';

const LaptopNav = () => {

    const [dropdown, setDropdown] = useState(false);

    return (
        <div className='w-screen p-4 lg:flex justify-center items-center bg-primary shadow-lg flex-col h-[134px] hidden '>
            <h1 className='text-center lg:text-[40px] text-[40px] font-[700] mb-2 text-secondary font-garamond'>
                Arayna Saxena
            </h1>
            <ul className='w-[980px]  lg:flex justify-between capitalize p-2'>
                {Navlinks.map((navlink) => {
                    const { id, text, url } = navlink
                    if (text === "extracurricular") {
                        return (
                            <li
                                key={id}
                                onMouseEnter={() => setDropdown(true)}
                                onMouseLeave={() => setDropdown(false)}
                            >
                                <Link to={url} className='text-secondary font-light p-1 lg:text-[16px] transition font-raleway text-[20px] mx-1 mt-2 hover:text-gray-800 hover:border-b-[2px] hover:border-b-secondary'>{text}</Link>
                                {dropdown && <Dropdown />}
                            </li>
                        );
                    }
                    return (
                        <li key={id}  >
                            <NavLink to={url} className='text-secondary font-light p-1 lg:text-[16px] transition font-raleway text-[20px] mx-1 mt-2 hover:text-gray-800 hover:border-b-[2px] hover:border-b-secondary'> {text} </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default LaptopNav