import React from 'react'
import { Link } from 'react-router-dom'

const SingleTalent = ({ heading, description, url }) => {
    return (
        <article className=' lg:h-[580px] md:h-[450px] md:w-[300px] lg:w-[440px] w-[330px] h-[460px] p-4 py-8 flex flex-col justify-between border-2 border-secondary items-center rounded-xl mx-4'>
            <h1 className='text-secondary text-[32px] font-display font-[400] text-left w-full leading-7'>{heading}</h1>
            <p className='text-gray text-[18px] font-quicksand font-[400] flex-1 pt-[100px]'>{description}</p>
            <a href={`#${url}`} className='lg:w-[330px] md:w-[280px] p-3 text-center rounded-lg bg-purple text-white hover:text-gray hover:bg-lightpurple text-[18px] font-quicksand font-[700] '>Learn more</a>
        </article>
    )
}

export default SingleTalent