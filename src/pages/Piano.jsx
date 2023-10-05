import React from 'react'
import YoutubePlayer from '../components/YoutubePlayer'


const Piano = () => {
  return (
    <article className=' lg:w-[1280px] w-full shadow-xl rounded-3xl flex flex-col items-center justify-center'>
      <div className='w-full bg-talent flex justify-center h-[230px] items-center rounded-3xl'>
        <div className='p-1 w-full'>
          <h1 className='lg:text-left text-center lg:text-[70px] md:text-[60px] text-[50px] font-[400] font-display capitalize text-secondary '> Piano</h1>
        </div>
      </div>
      <div className='w-full flex justify-center lg:min-h-[250px] items-center lg:flex-row flex-col'>
        <div className='flex-1 lg:w-[980px] md:w-[600px] w-[450px] px-20 my-10'>
          <p className='font-quicksand font-[400] text-[18px]'>
            • Playing Piano since Grade 3 under the school's Piano Club.
            <br />
            • Pursuing examination from Trinity College of London
            <br />
          </p>
        </div>
      </div>
      <div className='w-full flex justify-start px-[100px] min-h-[300px] lg:items-start items-center gap-5 lg:flex-row flex-col mb-10'>
        <YoutubePlayer url='https://www.youtube.com/embed/yNpDB6hp90Y' para='Piano Cover of Jodler (Yodeller) by Urli Gruber #Shorts #Piano #ytshorts #trending
' />
        <YoutubePlayer url='https://www.youtube.com/embed/anIweHoQz4k' para='Piano Cover of Minuet by Alexander Reinagle 🤍 #Shorts #Piano #trinitypiano
' />
      </div>
    </article>
  )
}

export default Piano