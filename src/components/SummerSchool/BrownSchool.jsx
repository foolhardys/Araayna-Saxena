import React from 'react'
import Image from '../Assets/SummerSchool/Brownuniversity.png'

const BrownSchool = () => {
  return (
    <article className='md:h-[434px] gap-10 rounded-md shadow-lg lg:w-[1280px] flex nd:gap-5 px-10 py-4 justify-center items-center mt-4 md:flex-row flex-col md:mb-0 mb-4'>
      <div>
        <h1 className='text-[36px] font-display font-[400] mb-4 '>Brown University Pre-college program</h1>
        <p className='mb-4'>
          Attended the Summer@Brown, the Brown University Pre-College Program <br /> under the course <a href='https://catalog.precollege.brown.edu/detail/CECS0915' >“Artificial Intelligence: A Computational Account <br /> of Intelligence".</a>  Scored 100% grade in all projects in the course.
        </p>
        <button className='bg-purple rounded-md  p-2'>
          <a href="" className='text-[18px] font-quicksand font-[700] text-white'>Performance Report</a></button>
      </div>
      <div>
        <img src={Image} alt="Brown university" className='h-[346px]' />
      </div>
    </article>
  )
}

export default BrownSchool