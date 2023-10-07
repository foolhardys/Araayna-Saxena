import React from 'react'
import Image from '../Assets/SummerSchool/Brownuniversity.png'

const BrownSchool = () => {
  return (
    <article className='md:h-[434px] gap-10 rounded-md shadow-lg lg:w-[1280px] flex nd:gap-5 px-10 py-4 justify-center items-center mt-4 md:flex-row flex-col md:mb-0 mb-4 bg-light-gray'>
      <div>
        <h1 className='text-[36px] font-display font-[400] mb-4 '>Brown University Pre-college program</h1>
        <p className='mb-4 font-quicksand font-[400] text-[18px] text-dark-gray'>
          Attended the Summer@Brown, the Brown University Pre-College Program <br /> under the course <a href='https://catalog.precollege.brown.edu/detail/CECS0915' className='font-quicksand font-[400] text-[18px] text-purple underline ' target='_blank' rel="noreferrer" >“Artificial Intelligence: A Computational Account <br /> of Intelligence".</a>  Scored 100% grade in all projects in the course.
        </p>
        <button className='bg-purple rounded-md p-3 hover:bg-lightpurple hover:text-dark-gray text-white'>
          <a href="https://drive.google.com/file/d/1sgSCy7gz0fYEKt6jDFnC1SffcoSE87mW/view?usp=share_link" className='text-[18px] font-quicksand font-[700]' target='_blank' rel="noreferrer">Performance Report</a></button>
      </div>
      <div>
        <img src={Image} alt="Brown university" className='h-[346px]' />
      </div>
    </article>
  )
}

export default BrownSchool