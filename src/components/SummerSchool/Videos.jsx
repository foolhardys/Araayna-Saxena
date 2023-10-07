import React from 'react'
import Vector from '../Assets/SummerSchool/Vector.png'

const Videos = () => {
  return (
    <article className='lg:w-[1280px] mt-4 w-full'>
      <h1 className='text-[36px] font-display font-[400] mb-4 translate-x-10 '>Videos</h1>
      <div className='flex gap-5 px-10 py-4 justify-start items-center md:flex-row flex-col'>
        <button className='w-[300px] bg-lightpurple rounded-xl flex justify-between items-center p-4 md:h-[100px] h-[100px]'>
          <a href="https://www.youtube.com/watch?v=_iikzfD5B_c" className='font-quicksand font-[500] text-[18px]' target='_blank' rel="noreferrer">Is Brown Pre-college Program <strong>WORTH IT</strong>? Academic Course Review!</a>
          <img src={Vector} alt="" />
        </button>
        <button className='w-[300px] bg-lightpurple rounded-xl flex justify-between items-center p-4 md:h-[100px] h-[100px]'>
          <a href="https://www.youtube.com/watch?v=49jVJ3PuHbc" className='font-quicksand font-[500] text-[18px]' target='_blank' rel="noreferrer">Reading MY POEM at <strong>BROWN UNIVERSITY!!</strong> </a>
          <img src={Vector} alt="" />
        </button>
      </div>
    </article>
  )
}

export default Videos