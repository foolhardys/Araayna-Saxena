import React from 'react'
import YoutubePlayer from '../components/YoutubePlayer'
import DanceSlider from '../components/Slider/DanceSlider'
import { AiOutlineDown } from 'react-icons/ai'

const Bharatnatyam = () => {
  return (
    <article className='lg:w-[1280px] w-full shadow-xl rounded-3xl flex flex-col items-center mt-20 mb-20 relative '>
      <div className='w-full bg-talent flex justify-start px-[60px] min-h-[230px] items-center rounded-3xl'>
        <div className='py-4 lg:w-[980px] md:w-[700px] w-[420px]'>
          <h1 className='text-left lg:text-[60px] md:text-[60px] text-[50px] leading-[65px] font-[400] font-display capitalize text-secondary '>Trained <br /> Bharatnatyam Dancer</h1>
        </div>
      </div>
      <div className='flex justify-center lg:self-start lg:min-h-[250px] mt-4 lg:mt-0 items-center gap-10 lg:flex-row flex-col lg:w-[600px] w-full px-8'>
        <div className=' lg:w-[1280px] w-full px-[5px]'>
          <p>Trained in Bharatanatyam through 8+ years of relentless dedication and attained an esteemed degree, attesting to the depth of knowledge and expertise in this classical dance form.
          </p>
          <div>
            <a href='https://drive.google.com/file/d/1mOQDD0C9wUM5GoiLa9gwfCaZcOjrbQKP/view?usp=drive_link' target='_blank' rel="noreferrer" className='inline-block w-[140px] bg-purple text-white hover:bg-lightpurple hover:text-gray p-2 pr-0 rounded-sm mt-8 transition'>
              <button className='font-serif font-[700] text-[16px] flex gap-2 items-center' >My Degree <span className='ml-[4px]'><AiOutlineDown className='text-[16px]' /></span></button>
            </a>
            <a href='https://drive.google.com/file/d/1F14zVdzLD4-BAzqk4TkkXEEqT1shSk_7/view?usp=drive_link' target='_blank' rel="noopener noreferrer" className='inline-block w-[140px] bg-purple text-white hover:bg-lightpurple ml-[20px] hover:text-gray p-2 pr-0 rounded-sm mt-8 transition'>
              <button className='font-serif font-[700] text-[16px] flex gap-2 items-center' >Newspaper 	<span className='ml-[4px]'><AiOutlineDown className='text-[16px]' /></span></button>
            </a>
          </div>
        </div>
        <div className=' flex justify-center items-center lg:absolute lg:top-[0px] lg:right-0 rounded-md lg:translate-x-0 h-[510px] w-[400px]'>
          <DanceSlider />
        </div>
      </div>
      <div className='w-full flex justify-center min-h-[300px] lg:mt-0  lg:items-start items-center gap-5 lg:flex-row flex-col mb-10 md:mt-[50px] mt-[200px] pt-[60px] px-4'>
        <YoutubePlayer url='https://www.youtube.com/embed/B4jhcQb8WmE?si=2x-jpT4VBEdOuyaE' para='Performed thrice in front of audiences of over 4 lakh spectators on the momentous occasions of Indian festival Dussehra, making a debut at 10 years.
' />
        <YoutubePlayer url='https://www.youtube.com/embed/pCq7IgrSRtY?si=7B_oA5WB9aEQbJmw' para='
           Represented India at the Mersin World Children Festival in Turkey, 2019. Choreographed and performed solo Bharatanatyam, as well as showcased two different group performances for the festival. Our performance was recognised by the mayor of Istanbul 2019.
'/>
        <YoutubePlayer url='https://www.youtube.com/embed/mfPZseQksQA?si=qyG7DF3zfaWLdNeE' para='Recipient of the Certificate of Excellent Performance  at Vihaan 2016 - Annual Techno Cultural fest at  Radharaman Group of Institutions and acquired 1st position  amongst other 50 college students' />
      </div>
    </article>
  )
}

export default Bharatnatyam