import React from 'react'
import Image from '../Assets/SummerSchool/EduExLabs.png'

const EduExLabs = () => {
  return (
    <article className='md:h-[434px] gap-10 rounded-md shadow-lg lg:w-[1280px] flex nd:gap-5 px-10 py-4 justify-center items-center mt-4 md:flex-row flex-col md:mb-0 mb-4 bg-light-gray'>
      <div>
        <h1 className='text-[36px] font-display font-[400] mb-4 '>EduxLabs</h1>
        <p className='mb-4 font-quicksand font-[400] text-[18px] text-dark-gray'>
          Completed 4-weeks online training on AI, Machine learning, Deep <br /> Learning,Computer Vision, and Natural Language Processing from <br /> <a href="https://www.eduxlabs.com/" className='font-quicksand font-[400] text-[18px] text-purple underline '>EduxLabs </a> in association with Mechanica <a href="https://www.linkedin.com/company/mechanicaiitmadras/" className='font-quicksand font-[400] text-[18px] text-purple underline ' target='_blank' rel="noreferrer">IIT Madras . </a>
        </p>
        <a target='_blank' rel="noreferrer" href="https://github.com/AraynaSaxena?tab=repositories" className=' flex justify-center w-[250px] bg-purple rounded-md  p-3 hover:bg-lightpurple hover:text-dark-gray text-white'>
          <button  className='text-[18px] font-quicksand font-[700]' >Check out my projects</button>
        </a>
      </div>
      <div>
        <img src={Image} alt="Machine learning certificate" className='h-[346px]' />
      </div>
    </article>
  )
}

export default EduExLabs