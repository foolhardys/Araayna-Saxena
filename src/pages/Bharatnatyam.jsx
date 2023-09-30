import React from 'react'
import YoutubePlayer from '../components/YoutubePlayer'
import DanceSlider from '../components/Slider/DanceSlider'

const Bharatnatyam = () => {
  return (
    <article className='max-w-[1280px] shadow-xl rounded-3xl flex flex-col items-center mt-20 mb-20 relative p-4'>
      <div className='w-full bg-talent flex justify-center min-h-[230px] items-center rounded-3xl'>
        <div className='p-4 lg:w-[900px] md:w-[700px] w-[420px]'>
          <h1 className='text-left lg:text-[60px] md:text-[60px] text-[50px] font-[400] font-display capitalize text-secondary '>Professional <br /> Bharatnatyam Dancer</h1>
        </div>
      </div>
      <div className='flex justify-center self-start lg:min-h-[250px] mt-4 lg:mt-0 items-center gap-10 lg:flex-row flex-col w-[600px]'>
        <div className=' lg:w-[980px] md:w-[700px] w-[600px] px-40'>
          <p>Trained in Bharatanatyam through 8+ years of relentless dedication and attained an esteemed degree, attesting to the depth of knowledge and expertise in this classical dance form.
          </p>
          <button className=' w-[140px] bg-purple text-white hover:bg-lightpurple hover:text-gray p-2 rounded-sm mt-8 transition'>
            <p className='font-serif font-[700] text-[14px] italic'>My Degree</p>
          </button>
        </div>
        <div className=' flex justify-center lg:absolute lg:top-[15px] lg:right-0 rounded-md md:translate-x-12 lg:translate-x-0'>
          <DanceSlider/>
        </div>
      </div>
      <div className='w-full flex justify-center min-h-[300px] lg:mt-0 mt-8 lg:items-start items-center gap-5 lg:flex-row flex-col mb-10px-4'>
        <YoutubePlayer url='https://www.youtube.com/embed/B4jhcQb8WmE?si=2x-jpT4VBEdOuyaE' para='Performed thrice in front of audiences of over 4 lakh spectators on the momentous occasions of Indian festival Dussehra, making a debut at 10 years.
' />
        <YoutubePlayer url='' para='
           Represented India at the Mersin World Children Festival in Turkey, 2019. Choreographed and performed solo Bharatanatyam, as well as showcased two different group performances for the festival.
'/>
        <YoutubePlayer url='' para='Recipient of the Certificate of Excellent Performance  at Vihaan 2016 - Annual Techno Cultural fest at  Radharaman Group of Institutions and acquired 1st position  amongst other 50 college students' />
      </div>
    </article>
  )
}

export default Bharatnatyam