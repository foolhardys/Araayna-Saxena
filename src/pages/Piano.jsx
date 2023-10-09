import React from 'react'
import YoutubePlayer from '../components/YoutubePlayer'
import Video from '../components/Assets/Piano/video.mp4'


const Piano = () => {
  return (
    <article className=' lg:w-[1280px] w-full shadow-xl rounded-3xl flex flex-col items-center justify-center mb-20'>
      <div className='w-full bg-talent flex justify-center h-[230px] items-center rounded-3xl'>
        <div className='p-1 w-full'>
          <h1 className='lg:text-left text-center lg:text-[70px] md:text-[60px] text-[50px] font-[400] font-display capitalize text-secondary '> Pianist</h1>
        </div>
      </div>
      <div className='w-full flex justify-center lg:min-h-[250px]  flex-col'>
        <div className='flex-1 lg:w-[980px] md:w-[600px] w-[450px] px-20 mt-10 mb-3'>
          <p className='font-quicksand font-[400] text-[18px]'>
            •  Playing Piano since Grade 3 under the school's Piano Club.
            <br />
            •  Pursued Grade 2 examination from Trinity College of London.
            <br />
            •  Pursuing Grade 3 examination from Trinity College of London.
            <br />
          </p>
        </div>
        <button className='bg-purple p-2 hover:bg-lightpurple text-white hover:text-dark-gray rounded-md mb-8 w-[150px] ml-[60px]'>
          <a href="https://drive.google.com/file/d/1-dsseuJuKFRvneKzo0o0keOVZxq-cVkM/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Certificate</a>
        </button>
      </div>
      <div className='w-full flex justify-start px-[40px] min-h-[300px] lg:items-start items-center gap-5 lg:flex-row flex-col mb-10'>
        <YoutubePlayer url='https://www.youtube.com/embed/yNpDB6hp90Y' para='Piano Cover of Jodler (Yodeller) by Urli Gruber #Shorts #Piano #ytshorts #trending
' />
        <YoutubePlayer url='https://www.youtube.com/embed/anIweHoQz4k' para='Piano Cover of Minuet by Alexander Reinagle 🤍 #Shorts #Piano #trinitypiano
' />
        <div className='flex flex-col gap-3 bg-div-bg rounded-md px-1 pb-3 w-[390px]'>
          <video width="320" height="340" controls className='h-[220px] w-full shadow-md rounded-md'>
            <source src={Video} type="video/mp4" />
          </video>
          <p>"Unlocking musical harmony at school 🎹🎶 #PianoPassion #SchoolTunes #MusicEducation"</p>
        </div>
      </div>
    </article>
  )
}

export default Piano