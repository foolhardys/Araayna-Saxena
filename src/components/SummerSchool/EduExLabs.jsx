import React from 'react'
import Image from '../Assets/SummerSchool/EduExLabs.png'

const EduExLabs = () => {
  return (
    <article className='md:h-[434px] gap-10 rounded-md shadow-lg lg:w-[1280px] flex nd:gap-5 px-10 py-4 justify-center items-center mt-4 md:flex-row flex-col md:mb-0 mb-4'>
      <div>
        <h1 className='text-[36px] font-display font-[400] mb-4 '>Edux Labs</h1>
        <p className='mb-4'>
          Completed 4-weeks online training on AI, Machine learning, Deep <br /> Learning,Computer Vision, and Natural Language Processing from <br /> <a href="https://www.eduxlabs.com/" className='font-quicksand font-[400] text-[18px] text-purple underline '>EduxLabs </a> in association with Mechanica <a href="https://www.linkedin.com/company/mechanicaiitmadras/" className='font-quicksand font-[400] text-[18px] text-purple underline '>IIT Madras .  (Mechanica, IIT Madras <br /> - LinkedInLinkedIn Indiahttps://in.linkedin.com › company › <br /> mechanicaiitmadras )</a>
        </p>
        <button className='bg-purple rounded-md  p-3 hover:bg-lightpurple hover:text-gray'>
          <a href="https://drive.google.com/file/d/1Yzq_GR0IAQqnljc7KAGxz6OorYdh2jDq/view?usp=drive_link" className='text-[18px] font-quicksand font-[700] text-white'>Performance Report</a></button>
      </div>
      <div>
        <img src={Image} alt="Machine learning certificate" className='h-[346px]' />
      </div>
    </article>
  )
}

export default EduExLabs