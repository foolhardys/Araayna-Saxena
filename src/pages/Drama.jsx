import React from 'react'
import YoutubePlayer from '../components/YoutubePlayer'
import One from '../components/Assets/Drama/1.jpg'

const Drama = () => {
  return (
    <article className='lg:w-[1280px] w-full shadow-xl rounded-3xl flex flex-col items-center justify-center mb-20'>
      <div className='w-full bg-talent flex justify-center min-h-[230px] items-center rounded-3xl'>
        <div className='p-1 lg:w-full md:w-[600px] w-[450px]'>
          <h1 className='lg:text-left text-center lg:text-[70px] md:text-[60px] text-[50px] font-[400] font-display capitalize text-secondary '> Actor, Playwright, Director and Activist</h1>
        </div>
      </div>
      <div className='w-full flex justify-center lg:min-h-[250px] items-center lg:flex-row flex-col lg:mt-0 mt-8'>
        <div className='flex-1 lg:w-[1280px] w-full px-3 ml-[20px] items-start'>
          <p>Directed, wrote and acted in multiple plays, leading teams of 5+ individuals for memorable performances.</p>
          <button className=' w-[140px] bg-purple text-white hover:bg-lightpurple hover:text-gray p-2 rounded-md mt-8 transition'>
            <a href='https://drive.google.com/file/d/1VC-vq2ZufkqZlOsP2iqO67MKb6XkLUc4/view?usp=sharing' className='font-serif font-[700] text-[14px]'>My Certificate</a>
          </button>
        </div>
      </div>
      <div className='w-full flex justify-start lg:px-[35px] md:px-[100px] px-0 min-h-[300px] lg:items-start lg:mt-0 mt-8 items-center gap-5 lg:flex-row flex-col mb-10 flex-wrap'>
        <YoutubePlayer url='https://www.youtube.com/embed/PKlfQ4qjCkw?si=tCF1OQXHdVZdcKFb' para='Presented comprehensive manuals on the “Art of Playwriting”
' />
        <YoutubePlayer url='https://www.youtube.com/embed/oZMzRjHqQCI?si=A1STtB0lrP2Ex3SU' para=''/>
        <YoutubePlayer url='https://www.youtube.com/embed/kP70_zLaow4?si=wH6Ik8QkoilCYs61' para=' Assisted in writing the script for the short movie - Misclick,an amalgam of dance,drama and music for the online Annual Concert in times of COVID.It was a movie written, directed, edited and shot by Billabongers.' />
        <div className='bg-div-bg flex flex-col justify-center items-center rounded-xl'>
          <img src={One} alt="drama" className='h-[220px] w-[390px] rounded-xl' />
          <p className='w-[390px] px-2 py-4'>An active debater and orator
            Received Commendation and special mentions in UN Women at The Incentive MUN and in GCC Committee of Diplomathon World edition
          </p>
        </div>
      </div>
    </article>
  )
}

export default Drama