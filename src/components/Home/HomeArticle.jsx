import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'

const HomeArticle = () => {
    return (
        <article className='lg:max-w-full lg:p-4 p-8 w-full flex flex-col justify-center items-center bg-primary relative'>
            <h1 className='font-libre text-[30px] md:text-[60px] sm:text-[36px] uppercase font-[700] text-secondary drop-shadow-lg tracking-wide mb-[40px]'>Arayna Saxena</h1>
            <p className='text-secondary text-[18px] text-center font-monserrat font-[400] w-full lg:w-[750px] mb-[28px] lg:px-0 md:pr-4 mr-1'>Hi, I’m Arayna, a senior student at Billabong High International School in Bhopal. I wear many hats as an author, known for my work “Amidst The Downpour,” a dedicated founder of the Uthaan Foundation, and a proactive initiative taker.  I harness my knowledge and passion to drive meaningful change and make a positive impact. This website offers a journey through my years of dedication and hard work.
            </p>
            <br />
            <p className='text-secondary text-[18px] font-monserrat font-[600] w-full lg:w-[750px] mb-[58px]'>
                Click below for my complete resume, or click through the tabs to find further details!
            </p>
            <br />
            <button className='w-[142px] flex items-center gap-4 p-3 bg-purple rounded-sm shadow-md transition text-primary hover:bg-primary hover:text-secondary font-serif font-[700] text-[14px] '>
                Download CV <span><AiOutlineDown className='text-[16px]' /></span>
            </button>
        </article>
    )
}

export default HomeArticle