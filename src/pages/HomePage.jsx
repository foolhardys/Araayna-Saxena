import React from 'react'
import { HomeSlider, HomeArticle , HomeGrid} from '../components'


const HomePage = () => {
  return (
    <section className='min-h-screen flex items-center flex-col'>
      <HomeSlider />
      <HomeArticle />
      <HomeGrid/>
    </section>
  )
}

export default HomePage