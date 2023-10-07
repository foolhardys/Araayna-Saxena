import React from 'react'
import One from '../Assets/Author/Contact/1.jpg'

const Contact = () => {
    return (
        <article className='lg:p-4 p-8 w-full flex flex-col relative'>
            <img src={One} alt="Contact" />
            <div className='absolute top-[50px] left-[150px]'>
                <h1 className='font-[300] text-[42px] capitalize  text-secondary mb-[40px] text-left font-courier'>Contact Information</h1>
                <div className='flex flex-col justify-center'>
                    <h3 className='font-courier text-[26px] capitalize font-[300] text-secondary mb-[40px] text-left leading-8'>E-mail Address : </h3>
                    <a href="mailto:arayna.downpour@gmail.com" className='text-light-blue font-quicksand text-[18px]'>arayna.downpour@gmail.com</a>
                </div>
            </div>
        </article>
    )
}

export default Contact