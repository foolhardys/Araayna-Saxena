import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'

const HomeArticle = () => {
    return (
        <article className='w-[980px] p-4'>
            <h1 className='font-garamond text-[56px] font-[400] text-secondary mb-[40px]'>About Me...</h1>
            <p className='text-secondary text-[16px] font-raleway font-[400] w-[750px] mb-[28px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis dolore laborum, dolorem eos provident? Facilis, eum sed non totam voluptate et cumque ipsa aperiam sequi, quibusdam voluptatum excepturi repellat. Sit saepe tempora maiores, vitae eaque repudiandae incidunt repellat illo sed modi doloribus facilis iste eius labore ex quasi, et accusamus quae dolorem. Placeat alias esse facere sunt, nostrum asperiores!</p>
            <br />
            <p className='text-secondary text-[16px] font-raleway font-[400] w-[750px] mb-[58px]'>
                Click below for my complete resume, or click through the tabs to find further details!
            </p>
            <br />
            <button className='w-[142px] flex items-center gap-4 p-3 bg-brown rounded-sm shadow-md transition text-primary hover:bg-primary hover:text-secondary font-serif font-[700] text-[14px] '>
                Download CV <span><AiOutlineDown className='text-[16px]' /></span>
            </button>
        </article>
    )
}

export default HomeArticle