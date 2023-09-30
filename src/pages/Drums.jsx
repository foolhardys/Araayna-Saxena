import React from 'react'
import YoutubePlayer from '../components/YoutubePlayer'

const Drums = () => {
  return (
    <article className=' max-w-[1280px] shadow-xl rounded-3xl flex flex-col items-center justify-center'>
      <div className='w-full bg-talent flex justify-center h-[230px] items-center rounded-3xl'>
        <div className='p-1 w-full'>
          <h1 className='lg:text-left text-center lg:text-[70px] md:text-[60px] text-[50px] font-[400] font-display capitalize text-secondary '> Drums</h1>
        </div>
      </div>
      <div className='w-full flex justify-center lg:min-h-[250px] items-center lg:flex-row flex-col'>
        <div className='flex-1 lg:w-[980px] md:w-[600px] w-[450px] px-20 my-10'>
          <p className='font-quicksand font-[400] text-[18px]'>
            • Fueled by a deep passion for rock and roll, I have been dedicated to learning the drums from the Trinity College of London: Grade 2 examination: achieved Distinction
            <br />

            • Performed thrice in front of audiences of over 4 lakh spectators on the momentous occasions of Indian festival Dussehra, making a debut at 10 years.
            <br />

            • Represented India at the Mersin World Children Festival in Turkey, 2019. Choreographed and performed solo Bharatanatyam, as well as showcased two different group performances for the festival.
            <br />

            • Recipient of the Certificate of Excellent Performance  at Vihaan 2016 - Annual Techno Cultural fest at  Radharaman Group of Institutions and acquired 1st position  amongst other 50 college students
            <br />

            • Secured the Trophy of Best Cultural Performance at Maffick, the annual techno-cultural fest of NIT Bhopal and, Central India's premier college fest,  presented by the esteemed Director of MANIT.
            <br />
          </p>
          <button className=' w-[140px] bg-purple text-white hover:bg-lightpurple hover:text-gray p-2 rounded-sm mt-8 transition'>
            <p className='font-serif font-[700] text-[14px] italic'>My Degree</p>
          </button>
        </div>
      </div>
      <div className='w-full flex justify-start px-[100px] min-h-[300px] lg:items-start items-center gap-5 lg:flex-row flex-col mb-10'>
        <YoutubePlayer url='https://www.youtube.com/embed/WBey6xAI1aU?si=nuPJpScLv36ZflDm' para='KNOCK ON WOOD, Eddie Floyd- Trinity Rock & Pop Drums Grade 2
' />
      </div>
    </article>
  )
}

export default Drums