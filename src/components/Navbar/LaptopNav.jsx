import React, { useState } from 'react'
import './Navbar.css'
import { Navlinks } from '../../utils/constants'
import { NavLink, Link } from 'react-router-dom'
import Dropdown from './Dropdown';
import { AiOutlineCaretDown } from 'react-icons/ai';
import AuthorDropdown from './AuthorDropdown';
import ProjectDropdown from './ProjectDropdown';

const LaptopNav = () => {

    const [dropdown, setDropdown] = useState(false);
    const [authorDropdown, setAuthorDropdown] = useState(false);
    const [projectDropdown, setProjectDropdown] = useState(false);

    return (
        <div className='w-full p-4 lg:flex justify-evenly items-center bg-white shadow-lg gap-4 h-[134px] hidden'>
            <Link to='/' className='text-center lg:text-[96px] text-[80px] font-[400] mb-2 text-secondary font-display'>
                A.
            </Link>
            <ul className='min-w-[980px]  lg:flex justify-between capitalize p-2'>
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
                    if (text === "projects") {
                        return (
                            <li
                                key={id}
                                onMouseEnter={() => setProjectDropdown(true)}
                                onMouseLeave={() => setProjectDropdown(false)}
                            >
                                <Link to={url} className='text-secondary font-light p-1 lg:text-[16px] transition font-raleway text-[20px] mx-1 mt-2 hover:text-gray-800 hover:border-b-[2px] hover:border-b-secondary'>{text}</Link>
                                {projectDropdown && <ProjectDropdown/>}
                            </li>
                        );
                    }
                    if (text === "author") {
                        return (
                            <li
                                key={id}
                                onMouseEnter={() => setAuthorDropdown(true)}
                                onMouseLeave={() => setAuthorDropdown(false)}
                            >
                                <Link to={url} className='text-secondary font-light p-1 lg:text-[16px] transition font-raleway text-[20px] mx-1 mt-2 hover:text-gray-800 hover:border-b-[2px] hover:border-b-secondary'>{text}</Link>
                                {authorDropdown && <AuthorDropdown />}
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