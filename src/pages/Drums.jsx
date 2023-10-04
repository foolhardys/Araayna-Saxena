import React from 'react'
import YoutubePlayer from '../components/YoutubePlayer'

const Drums = () => {
  return (
    <article className=' lg:w-[1280px] w-full shadow-xl rounded-3xl flex flex-col items-center justify-center'>
      <div className='w-full bg-talent flex justify-center h-[230px] items-center rounded-3xl'>
        <div className='p-1 w-full'>
          <h1 className='lg:text-left text-center lg:text-[70px] md:text-[60px] text-[50px] font-[400] font-display capitalize text-secondary '> Drummer - Rock and Roll</h1>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col w-[1280px] mt-[30px]' >
        <div className=' flex justify-center lg:min-h-[250px] items-center lg:flex-row flex-col flex-2'>
          <div className='flex-1 px-20 my-10'>
            <p className='font-quicksand font-[400] text-[18px]'>
              Dedicated to learning the drums from the Trinity College of London, fueled by a deep <br /> passion for rock and roll:
            </p>
            <button className=' w-[140px] bg-purple text-white hover:bg-lightpurple hover:text-gray p-2 rounded-sm mt-8 transition'>
              <a href='https://drive.google.com/file/d/17soArb66Fy7Swz5zmfEXNkoquPC1oJ7d/view?usp=sharing' className='font-serif font-[700] text-[14px] italic'>My Degree</a>
            </button>
          </div>
        </div>
        <div className='w-full flex justify-start px-[100px] min-h-[300px] lg:items-start items-center gap-5 lg:flex-row flex-col mb-10  flex-1'>
          <YoutubePlayer url='https://www.youtube.com/embed/WBey6xAI1aU?si=nuPJpScLv36ZflDm' para='KNOCK ON WOOD, Eddie Floyd- Trinity Rock & Pop Drums Grade 2
' />
        </div>
      </div>
    </article>
  )
}

export default Drums