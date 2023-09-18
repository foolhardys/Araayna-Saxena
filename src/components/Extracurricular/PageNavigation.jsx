import React from 'react'
import { Link } from 'react-router-dom'

const PageNavigation = () => {
    return (
        <section className='lg:w-[980px] w-full flex items-center justify-evenly'>
            <Link to='drums' className='border-2 bg-primary text-secondary p-2 capitalize rounded-md hover:text-white shadow-lg  hover:bg-brown transition'>drums</Link><br />
            <Link to='piano' className='border-2 bg-primary text-secondary p-2 capitalize rounded-md hover:text-white shadow-lg  hover:bg-brown transition'>piano</Link><br />
            <Link to='bharatnatyam' className='border-2 bg-primary text-secondary p-2 capitalize rounded-md hover:text-white shadow-lg  hover:bg-brown transition'>bharatnatyam</Link><br />
            <Link to='drama' className='border-2 bg-primary text-secondary p-2 capitalize rounded-md hover:text-white shadow-lg  hover:bg-brown transition'>drama</Link><br />
        </section>
    )
}

export default PageNavigation