import React from 'react'

const SingleProject = ({ heading, description, url }) => {
    return (
        <article className='md:h-[574px] h-[500px] w-[300px] bg-cream md:w-[440px] mt-[28px] px-4 py-[20px] flex flex-col items-center relative overflow-hidden' id={url}>
            <h1 className='text-[32px] font-display font-[400] text-center m-4'>{heading}</h1>
            <p className='text-[18px] font-quicksand font-[400] px-5 py-10 md:w-[400px] w-[280px] overflow-y-scroll max-h-[300px]'> {description}</p>
            <button className='md:p-4 p-2 absolute md:bottom-[25px] bottom-3 bg-peach md:w-[330px] w-[280px] text-white hover:bg-brown font-quicksand font-[700] text-[18px] rounded-md '>
                <a href={url}>Learn More</a>
            </button>
        </article>
    )
}

export default SingleProject