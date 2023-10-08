import React from 'react'

const Contact = () => {
  return (
    <section className='bg-bg-contact bg-center bg-cover flex justify-start items-center h-full w-full relative z-10 lg:w-[1280px]'>
        <div className='lg:w-1/2 w-full flex flex-col px-[30px] py-[100px] justify-evenly h-[90vh]'>
            <h1 className='text-secondary font-[500] font-courier leading-[50px] md:text-[65px] text-[50px] p-2'>Contact <br />Information</h1>
            <div>
                <h3 className='text-secondary font-[400] font-courier mt-[40px] leading-[45px] p-2 text-[35px]'>E-mail Address</h3>
                <a href="mailto:arayna.downpour@gmail.com" className='text-[20px] p-2 font-courier text-secondary'>arayna.downpour@gmail.com</a>
            </div>
        </div>
    </section>
  )
}

export default Contact