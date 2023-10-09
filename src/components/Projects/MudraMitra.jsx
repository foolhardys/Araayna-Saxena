import React, { useState } from 'react'
import Two from '../Assets/Projects/Detective/2.png'

const MudraMitra = () => {

  const [showCard, setShowCard] = useState(false)

  return (
    <article className='lg:w-[600px] md:w-[700px] min-h-[300px] p-4 bg-purple/50 flex md:flex-row flex-col gap-2 items-center rounded-md relative'>
      <div className='w-4/6'>
        <h1 className='font-quicksand font-[700] text-[20px] text-dark-gray mb-4'>MudraMitrita : Bridging Bharatnatyam and ML </h1>
        <p className='font-quicksand font-[400] text-[18px] text-gray mb-4'>
          "MudraMitra" is an innovative Bharatanatyam AI project that revolutionizes the learning of this ancient Indian dance form.
        </p>
        <button className='bg-white hover:bg-lightpurple text-gray hover:text-dark-gray p-2 w-[200px]' onClick={()=> setShowCard(true)}>Read More</button>
      </div>
      <div className='w-2/6'>
        <img src={Two} alt="Funfilters" className='h-[200px] md:block hidden' />
      </div>
      {showCard && <div className='bg-bg-purple z-10 md:w-[720px] w-full flex gap-4 justify-between items-center absolute top-0 left-0 p-6 rounded-md' onClick={() => setShowCard(false)} onMouseLeave={() => setShowCard(false)}>
        <div className='w-4/6'>
          <h1 className='font-quicksand font-[700] text-[20px] text-white mb-4'>MudraMitrita : Bridging Bharatnatyam and ML:</h1>
          <p className='font-quicksand font-[400] text-[18px] text-white mb-8'>
            "MudraMitra" is an innovative Bharatanatyam AI project that revolutionizes the learning of this ancient Indian dance form. Through advanced AI technology, it identifies intricate hand gestures known as "mudras" and provides students with their significance and meanings in real-time to benefit students and enthusiasts alike. <br /> <br />
            Shared with notable Bharatnatyam academies, with thousands of users.
          </p>
          <a href='' target='_blank' rel='noreferrer' className='bg-purple hover:bg-lightpurple text-white hover:text-dark-gray py-4 px-8 rounded-md font-quicksand font-[700] text-[18px] w-[200px]'>Project Report</a>
        </div>
        <div className='w-2/6'>
          <img src={Two} alt="Funfilters" className='h-[200px] md:block hidden' />
        </div>
      </div>}
    </article>
  )
}

export default MudraMitra