import React from 'react'
import YoutubePlayer from '../components/YoutubePlayer'

const Drama = () => {
  return (
    <article className=' w-[1280px] shadow-xl rounded-3xl flex flex-col items-center justify-center'>
      <div className='w-full bg-talent flex justify-center h-[230px] items-center rounded-3xl'>
        <div className='p-1 w-full'>
          <h1 className='text-left lg:text-[70px] md:text-[60px] text-[50px] font-[400] font-display capitalize text-secondary '> Actor, Playwright, Director and Activist</h1>
        </div>
      </div>
      <div className='w-full flex justify-center lg:min-h-[250px] items-center lg:flex-row flex-col'>
        <div className='flex-1 md:w-[980px] w-[600px] px-40'>
          <p>Directed, wrote and acted in multiple plays, leading teams of 5+ individuals for memorable performances.</p>
          <button className=' w-[140px] bg-purple text-white hover:bg-lightpurple hover:text-gray p-2 rounded-sm mt-8 transition'>
            <p className='font-serif font-[700] text-[14px] italic'>My certificate</p>
          </button>
        </div>
      </div>
      <div className='w-full flex justify-start px-[100px] min-h-[300px] items-start gap-5 lg:flex-row flex-col mb-10'>
        <YoutubePlayer url='https://www.youtube.com/embed/PKlfQ4qjCkw?si=tCF1OQXHdVZdcKFb' para='Presented comprehensive manuals on the “Art of Playwriting”
' />
        <YoutubePlayer url='https://www.youtube.com/embed/oZMzRjHqQCI?si=A1STtB0lrP2Ex3SU' para='Play on “Public Safety of Women,” resulting in an audience of 250+ children and adults from Chaitanya Kul and ThinkSharp Foundation
'/>
      </div>
    </article>
  )
}

export default Drama