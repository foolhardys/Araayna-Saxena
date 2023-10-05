import React, { useState } from 'react'
import One from '../Assets/Projects/Detective/1.png'

const FunFilters = () => {

  const [showCard, setShowCard] = useState(false)

  return (
    <article className='lg:w-[600px] md:w-[700px] min-h-[300px] p-4 bg-purple/50 flex md:flex-row flex-col gap-2 items-center rounded-md relative'>
      <div className='w-4/6'>
        <h1 className='font-quicksand font-[700] text-[20px] text-dark-gray mb-4'>FunFilters using Facial Recognition </h1>
        <p className='font-quicksand font-[400] text-[18px] text-gray mb-4'>
          FunFilters is a dynamic project aimed at providing users with a captivating platform to elevate their photos and videos using a wide array of customizable face filters, stickers, effects, and animations.
        </p>
        <button className='bg-white hover:bg-lightpurple text-gray hover:text-dark-gray p-2 w-[200px]' onClick={() => setShowCard(true)}>Read More</button>
      </div>
      <div className='w-2/6'>
        <img src={One} alt="Funfilters" className='h-[200px] md:block hidden' />
      </div>
      {showCard && <div className='bg-bg-purple z-10 md:w-[720px] w-full flex gap-4 justify-between items-center absolute top-0 left-0 p-6 rounded-md' onClick={() => setShowCard(false)} onMouseLeave={() => setShowCard(false)}>
        <div className='w-4/6'>
          <h1 className='font-quicksand font-[700] text-[20px] text-white mb-4'>FunFilters using Facial Recognition: </h1>
          <p className='font-quicksand font-[400] text-[18px] text-white mb-4'>
            FunFilters is a dynamic project aimed at providing users with a captivating platform to elevate their photos and videos using a wide array of customizable face filters, stickers, effects, and animations.
            Features include Face Filters with Face Recognition, Live Webcam                          Snapshots, Video Recording, Canvas Borders and Frames, Image Editing. It empowers users to transform their visual content into captivating and shareable works of art.
            Best Used with HP or Windows as layout might vary with IOS

          </p>
          <button className='bg-purple hover:bg-lightpurple text-white hover:text-dark-gray p-4 rounded-md font-quicksand font-[700] text-[18px] w-[200px]'>Project Report</button>
        </div>
        <div className='w-2/6'>
          <img src={One} alt="Funfilters" className='h-[200px] md:block hidden' />
        </div>
      </div>}
    </article>
  )
}

export default FunFilters