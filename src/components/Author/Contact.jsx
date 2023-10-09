import React from 'react'

const Contact = () => {
    return (
        <article className='lg:p-4 p-8 w-full flex flex-col relative bg-bg-contact min-h-[70vh] bg-center bg-cover mt-[70px]'>
            <div className='absolute md:top-[50px] md:left-[150px] left-[30px] top-0'>
                <h1 className='font-[300] text-[42px] capitalize  text-secondary mb-[40px] text-left font-playfair leading-10'>Contact <br />Information</h1>
                <div className='flex flex-col justify-start'>
                    <h3 className='font-playfair text-[26px] capitalize font-[300] text-secondary mb-[10px] text-left leading-8 '>E-mail Address : </h3>
                    <a href="mailto:arayna.downpour@gmail.com" className='text-light-blue font-quicksand text-[18px] font-[700]'>arayna.downpour@gmail.com</a>
                </div>
            </div>
        </article>
    )
}

export default Contact