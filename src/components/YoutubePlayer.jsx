import React from 'react'

const YoutubePlayer = ({ url, para }) => {
  return (
    <div className='bg-cream flex flex-col justify-center items-center rounded-xl'>
      <iframe width="390px" height="220px" className='rounded-xl' src={url} frameborder="0" allowfullscreen></iframe>
      <p className='w-[390px] px-2 py-4'>{para}</p>
    </div>
  )
}

export default YoutubePlayer