import React from 'react'
import Para1 from '../Assets/Brewsacpe/1.png'
import Para2 from '../Assets/Brewsacpe/2.png'
import Para3 from '../Assets/Brewsacpe/3.png'

const PagePoem = () => {
  return (
    <article className='w-full lg:w-[1280px] flex flex-col my-8'>
      <img src={Para1} alt="Description" className='rounded-sm' />
      <img src={Para2} alt="Description" className='rounded-sm' />
      <img src={Para3} alt="Description" className='rounded-sm' />
    </article>
  )
}

export default PagePoem