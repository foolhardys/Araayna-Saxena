import React from 'react'
import YoutubePlayer from '../components/YoutubePlayer'

const Drums = () => {
  return (
    <article className=' lg:w-[1280px] w-full shadow-xl rounded-3xl flex flex-col items-center justify-center mb-20'>
      <div className='w-full bg-talent flex justify-center h-[230px] items-center rounded-3xl'>
        <div className='p-1 w-full'>
          <h1 className='lg:text-left text-center lg:text-[70px] md:text-[60px] text-[50px] font-[400] font-display capitalize text-secondary '> Drummer - Rock and Roll</h1>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col lg:w-[1280px] w-full mt-[30px]' >
        <div className=' flex justify-center lg:min-h-[250px] items-start lg:flex-row flex-col flex-2'>
          <div className='flex-1 px-20'>
            <p className='font-quicksand font-[400] text-[18px]'>
             •  Dedicated to learning the drums from the Trinity College of London, fueled by a deep passion for rock and roll. <br />  <br />•  Played at school’s annual functions and <br /> MAFFICK,the annual techno-cultural fest of NIT Bhopal which is Central India's premier college fest
            </p>
            <button className=' w-[140px] bg-purple text-white hover:bg-lightpurple hover:text-gray p-2 rounded-sm mt-8 transition'>
              <a href='https://drive.google.com/file/d/17soArb66Fy7Swz5zmfEXNkoquPC1oJ7d/view?usp=sharing' className='font-serif font-[700] text-[14px]' target='_blank' rel="noreferrer">My Degree</a>
            </button>
          </div>
        </div>
        <div className='w-full flex justify-start px-[100px] lg:mt-0 mt-4 min-h-[300px] lg:items-start items-center gap-5 lg:flex-row flex-col mb-10  flex-1'>
          <YoutubePlayer url='https://www.youtube.com/embed/JQPCTIQ_Qc0?si=IQoC4zuD1-hfYUCh' para='KNOCK ON WOOD, Eddie Floyd- Trinity Rock & Pop Drums Grade 2
' />
        </div>
      </div>
    </article>
  )
}

export default Drums