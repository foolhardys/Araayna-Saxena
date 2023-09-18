import React from 'react'

const Content = ({ heading, text, image, }) => {
  return (
    <article className=' py-2 w-full flex flex-col items-center mt-40 '>
      <div className='w-full bg-background flex justify-center h-[230px] items-center'>
        <div className='p-4 lg:w-[980px] md:w-[700px] w-[420px]'>
          <h1 className='text-left lg:text-[70px] md:text-[60px] text-[50px] font-[400] font-display capitalize text-secondary '>{heading}</h1>
        </div>
      </div>
      <div className='w-full flex justify-center lg:h-[573px] mt-4 lg:mt-0 items-center gap-10 lg:flex-row flex-col'>
        <div className='flex-1 md:w-[980px] w-[600px] px-40'>
          <p>{text}</p>
        </div>
        <div className='flex-1 flex justify-center'>
          <img src={image} alt="Bharatnatyam" className='h-[400px] md:w-[420px] w-[360px] rounded-md shadow-lg ' />
        </div>
      </div>
    </article>
  )
}

export default Content