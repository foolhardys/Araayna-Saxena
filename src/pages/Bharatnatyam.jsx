import React from 'react'
import YoutubePlayer from '../components/YoutubePlayer'

const Bharatnatyam = () => {
  return (
    <article className=' py-2 max-w-[1280px] shadow-xl rounded-3xl flex flex-col items-center mt-20 mb-20 '>
      <div className='w-full bg-talent flex justify-center h-[230px] items-center rounded-3xl'>
        <div className='p-4 lg:w-[980px] md:w-[700px] w-[420px]'>
          <h1 className='text-left lg:text-[70px] md:text-[60px] text-[50px] font-[400] font-display capitalize text-secondary '>Professional <br /> Bharatnatyam Dancer</h1>
        </div>
      </div>
      <div className='w-full flex justify-center lg:min-h-[250px] mt-4 lg:mt-0 items-center gap-10 lg:flex-row flex-col'>
        <div className='flex-1 md:w-[980px] w-[600px] px-40'>
          <p>Trained in Bharatanatyam through 8+ years of relentless dedication and attained an esteemed degree, attesting to the depth of knowledge and expertise in this classical dance form.
          </p>
          <button className=' w-[140px] bg-purple text-white hover:bg-lightpurple hover:text-gray p-2 rounded-sm mt-8 transition'>
            <p className='font-serif font-[700] text-[14px] italic'>My Degree</p>
          </button>
        </div>
        <div className='flex-1 flex justify-center'>
          <img src='' alt="Bharatnatyam" className='h-[400px] md:w-[420px] w-[360px] rounded-md shadow-lg ' />
        </div>
      </div>
      <div className='w-full flex justify-center min-h-[300px] lg:mt-0 mt-8 lg:items-start items-center gap-5 lg:flex-row flex-col mb-10'>
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