import React from 'react'
import Image from '../Assets/SummerSchool/Harvard.png'

const Harvard = () => {
  return (
    <article className='md:h-[434px] gap-10 rounded-md shadow-lg lg:w-[1280px] flex nd:gap-5 px-10 py-4 justify-center items-center mt-4 md:flex-row flex-col mb-40'>
    <div>
      <h1 className='text-[36px] font-display font-[400] mb-4 '>HarvardX's Computer Science for Web Programming <br /> Professional Certificate</h1>
      <p className='mb-4'>
      Ongoing: HarvardX's Computer Science for Web Programming <br /> Professional Certificate including CS50's Introduction to Computer <br /> Science and CS50's Web Programming with Python and JavaScript <br /> : <a href="https://www.edx.org/professional-certificate/harvardx-computer-science-for-web-programming" className='font-quicksand font-[400] text-[18px] text-purple underline '> Computer Science for Web Programming Professional Certificate | edX</a>
      </p>
    </div>
    <div>
      <img src={Image} alt="Web development certificate" className='h-[346px]' />
    </div>
  </article>
  )
}

export default Harvard